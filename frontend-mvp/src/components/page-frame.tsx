import type { ReactNode } from "react";

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-[1540px] px-4 py-8 sm:px-6 lg:py-10">
      {children}
    </main>
  );
}

export function SectionBand({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`border-t border-[var(--line)] py-8 first:border-t-0 ${className}`}
    >
      {children}
    </section>
  );
}

export function PageIntro({
  eyebrow,
  title,
  summary,
}: {
  eyebrow: string;
  title: string;
  summary: string;
}) {
  return (
    <div className="grid gap-5 py-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
      <div>
        <p className="mb-4 inline-flex rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-1 font-mono text-xs uppercase text-[var(--accent)]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted-strong)]">
          {summary}
        </p>
      </div>
      <div className="scanline rounded-md border border-[var(--line)] bg-[rgba(16,24,32,0.66)] p-4 text-sm leading-6 text-[var(--muted-strong)]">
        <div className="font-mono text-xs uppercase text-[var(--accent)]">
          Caminho rapido
        </div>
        <div className="mt-2">Ranking para decidir.</div>
        <div>Benchmarks para comparar.</div>
        <div>AI Index para orientar agentes.</div>
      </div>
    </div>
  );
}

export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-md border border-[var(--line)] bg-[var(--surface)] px-2 py-1 font-mono text-xs text-[var(--muted-strong)]">
      {children}
    </span>
  );
}
