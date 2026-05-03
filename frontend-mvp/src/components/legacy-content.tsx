import { Bot, FileText } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageActions } from "@/components/page-actions";
import { PageIntro, SectionBand, StatusBadge } from "@/components/page-frame";
import type { HubPage } from "@/lib/content";
import { readLegacyHtml } from "@/lib/content";

export function LegacyContentPage({ page }: { page: HubPage }) {
  const html = readLegacyHtml(page);

  return (
    <>
      <Breadcrumbs page={page} />
      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        summary={page.summary}
      />

      <SectionBand>
        <PageActions page={page} />
      </SectionBand>

      <SectionBand>
        <article
          className="legacy-content rounded-md border border-[var(--line)] bg-[rgba(16,24,32,0.64)] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.22)] sm:p-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <aside className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-4">
            <FileText className="size-5 text-[var(--accent)]" aria-hidden />
            <p className="mt-4 font-mono text-xs uppercase text-[var(--muted)]">
              Fonte preservada
            </p>
            <p className="mt-2 break-words text-sm text-white">
              {page.source}
            </p>
          </div>
          <div className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-4">
            <Bot className="size-5 text-[var(--accent-2)]" aria-hidden />
            <p className="mt-4 font-mono text-xs uppercase text-[var(--muted)]">
              Tags para IA
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {page.tags.map((tag) => (
                <StatusBadge key={tag}>{tag}</StatusBadge>
              ))}
            </div>
          </div>
        </aside>
      </SectionBand>
    </>
  );
}
