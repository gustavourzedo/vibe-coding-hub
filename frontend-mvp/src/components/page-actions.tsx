import Link from "next/link";
import { ArrowLeft, Bot, Home, Search } from "lucide-react";
import type { HubPage } from "@/lib/content";
import { getRelatedPages } from "@/lib/content";

export function PageActions({ page }: { page: HubPage }) {
  const related = getRelatedPages(page, 4);

  return (
    <div className="page-action-panel rounded-md border border-[var(--line)] bg-[rgba(16,24,32,0.78)] p-3">
      <div className="grid gap-2 sm:grid-cols-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
        >
          <Home className="size-4" aria-hidden />
          Home
        </Link>
        <Link
          href="/#search"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:border-[var(--accent-2)]"
        >
          <Search className="size-4" aria-hidden />
          Buscar
        </Link>
        <Link
          href="/ai-index"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
        >
          <Bot className="size-4" aria-hidden />
          AI Index
        </Link>
      </div>

      {related.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="mr-1 self-center font-mono text-xs uppercase text-[var(--muted)]">
            Relacionados
          </span>
          {related.map((relatedPage) => (
            <Link
              key={relatedPage.slug}
              href={relatedPage.href}
              className="rounded-md border border-[var(--line)] px-2 py-1 text-xs text-[var(--muted-strong)] transition hover:border-[var(--accent)] hover:text-white"
            >
              {relatedPage.title.replace(" - Vibe Coding Hub", "")}
            </Link>
          ))}
        </div>
      ) : null}

      <Link
        href="/"
        className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-white"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Voltar para a pagina inicial
      </Link>
    </div>
  );
}
