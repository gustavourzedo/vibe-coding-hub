import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { PageFrame, PageIntro, SectionBand, StatusBadge } from "@/components/page-frame";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageActions } from "@/components/page-actions";
import { getPageBySlug, readLegacyHtml } from "@/lib/content";
import { rankingData, tierColor, tierBg } from "@/lib/ranking-data";

export const metadata: Metadata = {
  title: "Ranking Consolidado",
  description: "Ranking de assinaturas e plataformas para vibe coding pesado baseado em uso real.",
  alternates: { canonical: "/ranking" },
};

const page = getPageBySlug("ranking")!;

export default function RankingPage() {
  const top3 = rankingData.filter((e) => e.tier === "top");

  return (
    <PageFrame>
      <Breadcrumbs page={page} />
      <PageIntro
        eyebrow="Ranking"
        title="Ranking consolidado de assinaturas para vibe coding."
        summary="Baseado em uso real pesado no Cursor, telemetria de campo e triangulacao com benchmarks publicos. O ranking muda conforme evidencia nova."
      />

      <SectionBand>
        <PageActions page={page} />
      </SectionBand>

      <SectionBand>
        <div className="mb-5 flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md border border-[var(--accent)] bg-[rgba(66,217,166,0.1)]">
            <Trophy className="size-5 text-[var(--accent)]" aria-hidden />
          </span>
          <div>
            <h2 className="text-xl font-semibold text-white">Top 3 — Recomendacao ativa</h2>
            <p className="text-sm text-[var(--muted)]">Solucoes que receberam investimento real do hub.</p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {top3.map((entry) => (
            <Link
              key={entry.rank}
              href={`/${entry.slug}`}
              className="route-card group rounded-md border border-[var(--line)] p-4 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)]"
              style={{ background: tierBg(entry.tier) }}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-md text-xl font-bold"
                  style={{ color: tierColor(entry.tier), border: `1px solid ${tierColor(entry.tier)}` }}
                >
                  {entry.rank}
                </span>
                <StatusBadge>{entry.price}</StatusBadge>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[var(--accent)]">
                {entry.name}
              </h3>
              <p className="mt-2 text-xs text-[var(--muted-strong)] line-clamp-3">{entry.verdict}</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-[var(--muted)]">Capacidade</p>
                  <p className="mt-1 text-sm font-semibold text-white">{entry.capacityRange}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-[var(--muted)]">Qualidade</p>
                  <p className="mt-1 text-sm font-semibold text-white">{entry.qualityRange}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-[var(--muted)]">Consolidado</p>
                  <p className="mt-1 text-sm font-semibold text-white">{entry.consolidatedRange}</p>
                </div>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--accent)]">
                Ver pagina <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </SectionBand>

      <SectionBand>
        <h2 className="mb-4 text-xl font-semibold text-white">Ranking completo</h2>
        <div className="overflow-x-auto rounded-md border border-[var(--line)]">
          <table className="w-full min-w-[800px] border-collapse bg-[rgba(9,14,19,0.72)] text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]">#</th>
                <th className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]">Solucao</th>
                <th className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]">Preco</th>
                <th className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]">Capacidade</th>
                <th className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]">Qualidade</th>
                <th className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]">Consolidado</th>
                <th className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]">Veredito</th>
              </tr>
            </thead>
            <tbody>
              {rankingData.map((entry) => (
                <tr key={entry.rank} className="transition hover:bg-[rgba(66,217,166,0.04)]">
                  <td className="border-b border-[var(--line)] px-4 py-3">
                    <span
                      className="inline-flex size-7 items-center justify-center rounded-md text-sm font-bold"
                      style={{ color: tierColor(entry.tier), border: `1px solid ${tierColor(entry.tier)}40` }}
                    >
                      {entry.rank}
                    </span>
                  </td>
                  <td className="border-b border-[var(--line)] px-4 py-3">
                    <Link href={`/${entry.slug}`} className="font-semibold text-white transition hover:text-[var(--accent)]">
                      {entry.name}
                    </Link>
                  </td>
                  <td className="border-b border-[var(--line)] px-4 py-3 text-[var(--muted-strong)]">{entry.price}</td>
                  <td className="border-b border-[var(--line)] px-4 py-3 font-mono text-xs text-white">{entry.capacityRange}</td>
                  <td className="border-b border-[var(--line)] px-4 py-3 font-mono text-xs text-white">{entry.qualityRange}</td>
                  <td className="border-b border-[var(--line)] px-4 py-3 font-mono text-xs text-white">{entry.consolidatedRange}</td>
                  <td className="border-b border-[var(--line)] px-4 py-3 text-xs text-[var(--muted-strong)]">{entry.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBand>

      <SectionBand>
        <div className="mb-4 flex items-center gap-3">
          <h2 className="text-xl font-semibold text-white">Conteudo editorial completo</h2>
          <StatusBadge>legado preservado</StatusBadge>
        </div>
        <article
          className="legacy-content rounded-md border border-[var(--line)] bg-[rgba(16,24,32,0.64)] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.22)] sm:p-6"
          dangerouslySetInnerHTML={{ __html: readLegacyHtml(page) }}
        />
      </SectionBand>
    </PageFrame>
  );
}
