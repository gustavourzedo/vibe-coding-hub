from __future__ import annotations

import json
import sqlite3
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path
import json as json_lib


ROOT = Path(r"G:\Work\Up Cloud\projetos\VibeCoding - Study Case")
TELEMETRY_DIR = ROOT / "telemetry"
MANUAL_PATH = TELEMETRY_DIR / "manual_sources.json"
OUTPUT_PATH = TELEMETRY_DIR / "latest_telemetry.json"
CURSOR_DB = Path(r"C:\Users\gusta\.cursor\ai-tracking\ai-code-tracking.db")
CURSOR_PROJECTS = Path(r"C:\Users\gusta\.cursor\projects")
OPENCODE_DB = Path(r"C:\Users\gusta\.local\share\opencode\opencode.db")


def iso_now() -> str:
    return datetime.now().astimezone().isoformat(timespec="seconds")


def load_manual() -> dict:
    if not MANUAL_PATH.exists():
        return {"sources": []}
    return json.loads(MANUAL_PATH.read_text(encoding="utf-8"))


def cursor_project_map() -> dict[str, list[str]]:
    mapping: dict[str, list[str]] = defaultdict(list)
    if not CURSOR_PROJECTS.exists():
        return mapping
    for project in CURSOR_PROJECTS.iterdir():
        transcripts = project / "agent-transcripts"
        if not transcripts.is_dir():
            continue
        for cid in transcripts.iterdir():
            if cid.is_dir():
                mapping[cid.name].append(project.name)
    return mapping


def build_cursor_telemetry() -> dict:
    if not CURSOR_DB.exists():
        return {
            "id": "cursor",
            "label": "Cursor",
            "kind": "desktop_app",
            "status": "missing",
            "notes": "Banco local do Cursor nao encontrado.",
        }

    conn = sqlite3.connect(str(CURSOR_DB))
    cur = conn.cursor()
    max_created = cur.execute("select max(createdAt) from ai_code_hashes").fetchone()[0]
    min_created = cur.execute("select min(createdAt) from ai_code_hashes").fetchone()[0]
    total_all = cur.execute("select count(*) from ai_code_hashes").fetchone()[0]

    last_7d_start = max_created - (7 * 24 * 60 * 60 * 1000)
    total_7d = cur.execute(
        "select count(*) from ai_code_hashes where createdAt >= ?",
        (last_7d_start,),
    ).fetchone()[0]

    models_7d = cur.execute(
        """
        select coalesce(model, 'unknown') as model, count(*) as c
        from ai_code_hashes
        where createdAt >= ?
        group by coalesce(model, 'unknown')
        order by c desc
        """,
        (last_7d_start,),
    ).fetchall()

    by_day = cur.execute(
        """
        select datetime(createdAt/1000,'unixepoch','localtime','start of day') as day, count(*) as c
        from ai_code_hashes
        where createdAt >= ?
        group by day
        order by day desc
        limit 14
        """,
        (last_7d_start,),
    ).fetchall()

    conversation_rows = cur.execute(
        """
        select conversationId, count(*) as c
        from ai_code_hashes
        where createdAt >= ?
        group by conversationId
        order by c desc
        limit 80
        """,
        (last_7d_start,),
    ).fetchall()

    project_map = cursor_project_map()
    project_counts = Counter()
    for cid, count in conversation_rows:
        projects = project_map.get(cid) or ["unknown"]
        key = projects[0] if len(projects) == 1 else " / ".join(sorted(projects))
        project_counts[key] += count

    composition_total = sum(count for model, count in models_7d if model not in {"composer-2", "default", "unknown"})
    last_7d_end_dt = datetime.fromtimestamp(max_created / 1000, tz=timezone.utc).astimezone()
    last_7d_start_dt = datetime.fromtimestamp(last_7d_start / 1000, tz=timezone.utc).astimezone()
    full_start_dt = datetime.fromtimestamp(min_created / 1000, tz=timezone.utc).astimezone()

    conn.close()

    return {
        "id": "cursor",
        "label": "Cursor",
        "kind": "desktop_app",
        "status": "active",
        "notes": "Telemetria compilada automaticamente do banco ai-code-tracking.db.",
        "paths": {
            "db": str(CURSOR_DB),
            "projects": str(CURSOR_PROJECTS),
        },
        "window": {
            "full_start": full_start_dt.isoformat(timespec="seconds"),
            "last_7d_start": last_7d_start_dt.isoformat(timespec="seconds"),
            "last_7d_end": last_7d_end_dt.isoformat(timespec="seconds"),
        },
        "usage": {
            "events_total_all_time": total_all,
            "events_last_7d": total_7d,
            "frontier_share_last_7d": round((composition_total / total_7d) * 100, 1) if total_7d else 0.0,
            "top_models_last_7d": [
                {"model": model, "count": count, "share_pct": round((count / total_7d) * 100, 1)}
                for model, count in models_7d[:10]
            ],
            "top_projects_last_7d": [
                {"project": project, "count": count}
                for project, count in project_counts.most_common(10)
            ],
            "daily_counts_last_14d": [
                {"day": day, "count": count}
                for day, count in by_day
            ],
        },
    }


def build_opencode_telemetry() -> dict:
    if not OPENCODE_DB.exists():
        return {
            "id": "opencode_go",
            "label": "OpenCode",
            "kind": "desktop_app",
            "status": "missing",
            "notes": "Banco local do OpenCode nao encontrado.",
        }

    conn = sqlite3.connect(str(OPENCODE_DB))
    cur = conn.cursor()
    max_updated = cur.execute("select max(time_updated) from session").fetchone()[0]
    min_created = cur.execute("select min(time_created) from session").fetchone()[0]
    total_sessions = cur.execute("select count(*) from session").fetchone()[0]
    total_messages = cur.execute("select count(*) from message").fetchone()[0]

    def summarize_window(hours: int) -> dict:
        start = max_updated - (hours * 60 * 60 * 1000)
        rows = cur.execute(
            "select data from message where time_created >= ? order by time_created asc",
            (start,),
        ).fetchall()

        role_counts = Counter()
        provider_counts = Counter()
        model_counts = Counter()
        provider_model_user = Counter()
        provider_model_assistant = Counter()
        token_totals = defaultdict(int)

        for (data_str,) in rows:
            try:
                data = json_lib.loads(data_str)
            except Exception:
                continue

            role = data.get("role", "unknown")
            role_counts[role] += 1

            if role == "assistant":
                provider = data.get("providerID") or data.get("model", {}).get("providerID") or "unknown"
                model = data.get("modelID") or data.get("model", {}).get("modelID") or "unknown"
                provider_model_assistant[(provider, model)] += 1
                tokens = data.get("tokens") or {}
                token_totals["total"] += int(tokens.get("total") or 0)
                token_totals["input"] += int(tokens.get("input") or 0)
                token_totals["output"] += int(tokens.get("output") or 0)
                token_totals["reasoning"] += int(tokens.get("reasoning") or 0)
                cache = tokens.get("cache") or {}
                token_totals["cache_read"] += int(cache.get("read") or 0)
                token_totals["cache_write"] += int(cache.get("write") or 0)
            else:
                provider = data.get("model", {}).get("providerID") or data.get("providerID") or "unknown"
                model = data.get("model", {}).get("modelID") or data.get("modelID") or "unknown"
                provider_model_user[(provider, model)] += 1

            provider_counts[provider] += 1
            model_counts[model] += 1

        return {
            "messages_total": len(rows),
            "user_messages": role_counts.get("user", 0),
            "assistant_messages": role_counts.get("assistant", 0),
            "provider_counts": [
                {"provider": provider, "count": count}
                for provider, count in provider_counts.most_common(10)
            ],
            "model_counts": [
                {"model": model, "count": count}
                for model, count in model_counts.most_common(12)
            ],
            "user_provider_model": [
                {"provider": provider, "model": model, "count": count}
                for (provider, model), count in provider_model_user.most_common(12)
            ],
            "assistant_provider_model": [
                {"provider": provider, "model": model, "count": count}
                for (provider, model), count in provider_model_assistant.most_common(12)
            ],
            "assistant_tokens": dict(token_totals),
        }

    last_24h = summarize_window(24)
    last_7d = summarize_window(24 * 7)

    top_sessions_rows = cur.execute(
        """
        select
          s.title,
          s.directory,
          s.time_created,
          s.time_updated,
          sum(case when json_extract(m.data, '$.role')='user' then 1 else 0 end) as user_msgs,
          sum(case when json_extract(m.data, '$.role')='assistant' then 1 else 0 end) as assistant_msgs,
          sum(coalesce(json_extract(m.data, '$.tokens.total'),0)) as total_tokens,
          sum(coalesce(json_extract(m.data, '$.tokens.input'),0)) as input_tokens,
          sum(coalesce(json_extract(m.data, '$.tokens.output'),0)) as output_tokens
        from session s
        left join message m on m.session_id = s.id
        where s.time_updated >= ?
        group by s.id
        order by user_msgs desc, s.time_updated desc
        limit 10
        """,
        (max_updated - (7 * 24 * 60 * 60 * 1000),),
    ).fetchall()

    top_sessions = []
    for title, directory, time_created, time_updated, user_msgs, assistant_msgs, total_tokens, input_tokens, output_tokens in top_sessions_rows:
        top_sessions.append(
            {
                "title": title,
                "dir": directory,
                "user_messages": int(user_msgs or 0),
                "assistant_messages": int(assistant_msgs or 0),
                "total_tokens": int(total_tokens or 0),
                "input_tokens": int(input_tokens or 0),
                "output_tokens": int(output_tokens or 0),
                "duration_min": round(((time_updated or 0) - (time_created or 0)) / 60000) if time_created and time_updated else 0,
            }
        )

    conn.close()

    return {
        "id": "opencode_go",
        "label": "OpenCode / OpenCode Go",
        "kind": "desktop_app",
        "status": "active",
        "notes": "Telemetria compilada automaticamente do banco local opencode.db. Providers free e Go aparecem separados dentro do mesmo app.",
        "paths": {
            "db": str(OPENCODE_DB),
        },
        "window": {
            "full_start": datetime.fromtimestamp(min_created / 1000, tz=timezone.utc).astimezone().isoformat(timespec="seconds"),
            "last_seen": datetime.fromtimestamp(max_updated / 1000, tz=timezone.utc).astimezone().isoformat(timespec="seconds"),
        },
        "usage": {
            "sessions_total": total_sessions,
            "messages_total_all_time": total_messages,
            "last_24h": last_24h,
            "last_7d": last_7d,
            "top_sessions_last_7d": top_sessions,
        },
    }


def build_payload() -> dict:
    manual = load_manual()
    sources = [build_cursor_telemetry(), build_opencode_telemetry()]
    manual_sources = [
        src for src in manual.get("sources", [])
        if src.get("id") not in {"opencode_go", "cursor"}
    ]
    sources.extend(manual_sources)

    return {
        "compiled_at": iso_now(),
        "hub_mode": "living_documentation",
        "refresh_model": {
            "current": "manual_run",
            "next_candidate": "windows_task_scheduler_weekly",
        },
        "notes": [
            "A pagina HTML consome este arquivo local para montar a telemetria.",
            "Para adicionar novas ferramentas, ampliar telemetry/manual_sources.json ou o codigo do script.",
            "Uma tarefa agendada do Windows pode gerar este arquivo automaticamente 1x por semana.",
        ],
        "sources": sources,
    }


def main() -> None:
    TELEMETRY_DIR.mkdir(parents=True, exist_ok=True)
    payload = build_payload()
    OUTPUT_PATH.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Telemetry written to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
