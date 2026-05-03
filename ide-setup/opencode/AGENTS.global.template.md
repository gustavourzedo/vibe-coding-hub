# OpenCode Global Agent Memory

Use this content in:

`C:\Users\gusta\.config\opencode\AGENTS.md`

## OpenCode workflow notes

- OpenCode is text/tool-first. Do not assume raw PDFs or images are first-class readable artifacts.
- For PDFs, extract text first; render pages to PNG only if layout matters.
- For screenshots or visual artifacts, identify concrete files first and inspect the minimum necessary images.
- If image analysis tooling fails, stop retrying blindly and report the limitation.
- When a task changes phase, prefer a fresh session or compaction instead of carrying long contaminated context.
- For Windows-native work involving LDPlayer, ADB, GUI apps, logs, or local artifacts, prefer native Windows paths and commands over WSL.
- Use WSL only as an auxiliary lane for Linux-friendly shell tasks, not as the primary host for emulator-driven automation.

## OpenCode terminal anti-hang policy

Treat this as persistent operating memory for this machine.

- Use non-interactive commands.
- Any command that can keep running must have an explicit timeout, observation window, or detached execution plan with logs.
- Do not run watchers, dev servers, emulators, ADB daemons, bot runners, or GUI processes synchronously unless the user explicitly asks for an interactive run.
- Prefer detached `Start-Process -WindowStyle Hidden` plus log files for long-running Windows processes.
- For runtime validation, run for a bounded window, generate logs/artifacts/snapshots, stop the process, then analyze outputs.
- If a command does not return in the expected window, stop treating it as progress; report the first real blocking point and change strategy.
- Do not repeat the same terminal action after a hang without changing strategy.

Prompt anchor:

```text
Use comandos nao interativos.
Qualquer comando que possa ficar rodando deve ter timeout, janela de observacao ou execucao destacada com log.
Nao rode watcher, servidor, emulador, ADB daemon, bot runner ou GUI app de forma sincrona.
Se um comando nao retornar no tempo esperado, pare, reporte o bloqueio e mude a estrategia.
```
