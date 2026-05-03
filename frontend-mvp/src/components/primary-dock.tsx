import Link from "next/link";
import {
  BarChart3,
  Bot,
  BrainCircuit,
  ChevronRight,
  Gauge,
  LineChart,
  TerminalSquare,
} from "lucide-react";
import { primaryGroups } from "@/lib/content";

const icons = {
  decidir: Gauge,
  comparar: BarChart3,
  telemetria: LineChart,
  modelos: BrainCircuit,
  ides: TerminalSquare,
  prompts: Bot,
};

export function PrimaryDock() {
  return (
    <section className="dock-shell signal-grid rounded-md border border-[var(--line)] bg-[rgba(16,24,32,0.74)] p-3">
      <div className="mb-3 flex items-center justify-between gap-3 px-1">
        <div>
          <p className="font-mono text-xs uppercase text-[var(--accent)]">
            Navegacao principal
          </p>
          <h2 className="mt-1 text-xl font-semibold text-white">
            Comece pelo tipo de pergunta
          </h2>
        </div>
        <Link
          href="/ai-index"
          className="hidden rounded-md border border-[var(--line-strong)] px-3 py-2 text-sm text-[var(--muted-strong)] transition hover:border-[var(--accent)] hover:text-white sm:inline-flex"
        >
          Mapa completo
        </Link>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {primaryGroups.map((group, index) => {
          const Icon = icons[group.key as keyof typeof icons];

          return (
            <Link
              key={group.key}
              href={group.href}
              className="route-card group min-h-36 rounded-md border border-[var(--line)] bg-[rgba(13,20,27,0.86)] p-4 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface-strong)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-10 place-items-center rounded-md border border-[var(--line-strong)] bg-[rgba(66,217,166,0.08)]">
                  <Icon className="size-5 text-[var(--accent)]" aria-hidden />
                </span>
                <span className="font-mono text-xs text-[var(--muted)]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {group.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                {group.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--accent)]">
                Entrar
                <ChevronRight
                  className="size-4 transition group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

