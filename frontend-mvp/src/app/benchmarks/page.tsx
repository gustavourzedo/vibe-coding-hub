import type { Metadata } from "next";
import { BarChart3 } from "lucide-react";
import { PageFrame, PageIntro, SectionBand, StatusBadge } from "@/components/page-frame";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageActions } from "@/components/page-actions";
import { getPageBySlug, readLegacyHtml } from "@/lib/content";

export const metadata: Metadata = {
  title: "Benchmark de Capacidade dos Modelos",
  description: "Comparacao tecnica de modelos, capacidade e encaixe para workloads pesados de vibe coding.",
  alternates: { canonical: "/benchmarks" },
};

const page = getPageBySlug("benchmarks")!;

const benchmarkModels = [
  { name: "GLM-5.1", vendor: "GLM", tier: "frontier", ctx: "1M", coding: "SWE-bench ~72%", notes: "Motor principal do hub" },
  { name: "MiMo-V2.5-Pro", vendor: "Xiaomi", tier: "frontier", ctx: "128K", coding: "MiMo-7B benchmarks oficiais", notes: "Pro com 2 credits/token" },
  { name: "Claude Opus 4.7", vendor: "Anthropic", tier: "frontier", ctx: "200K", coding: "SWE-bench ~79%", notes: "Referencia premium" },
  { name: "GPT-5.5", vendor: "OpenAI", tier: "frontier", ctx: "256K", coding: "Arena Code top-5", notes: "Codex desktop incluido" },
  { name: "Gemini 3 Pro", vendor: "Google", tier: "frontier", ctx: "1M+", coding: "MMLU/GPQA forte", notes: "CLI + Code Assist" },
  { name: "qwen3.6-plus", vendor: "Alibaba", tier: "strong", ctx: "1M", coding: "~82-90% Opus", notes: "Capacidade alta, custo medio" },
  { name: "Kimi K2.6", vendor: "Moonshot", tier: "strong", ctx: "128K", coding: "Arena Code forte", notes: "Stack Kimi Code" },
  { name: "DeepSeek V4", vendor: "DeepSeek", tier: "strong", ctx: "128K", coding: "SWE-bench competitivo", notes: "Open-weight forte" },
  { name: "MiniMax M2.7", vendor: "MiniMax", tier: "mid", ctx: "256K", coding: "Arena mid-range", notes: "Throughput alto" },
  { name: "SWE-1.6", vendor: "Windsurf", tier: "mid", ctx: "128K", coding: "Proprietario", notes: "IDE Windsurf" },
];

function tierBadge(tier: string) {
  if (tier === "frontier") return <span className="rounded-md bg-[rgba(66,217,166,0.12)] px-2 py-0.5 font-mono text-[0.68rem] text-[var(--accent)]">frontier</span>;
  if (tier === "strong") return <span className="rounded-md bg-[rgba(90,167,255,0.12)] px-2 py-0.5 font-mono text-[0.68rem] text-[var(--accent-2)]">strong</span>;
  return <span className="rounded-md bg-[rgba(147,164,173,0.08)] px-2 py-0.5 font-mono text-[0.68rem] text-[var(--muted)]">mid</span>;
}

export default function BenchmarksPage() {
  return (
    <PageFrame>
      <Breadcrumbs page={page} />
      <PageIntro
        eyebrow="Benchmarks"
        title="Benchmark de capacidade dos modelos."
        summary="Comparacao tecnica baseada em avaliacoes publicas, arena code, SWE-bench e uso real de campo. Foco em coding pesado."
      />

      <SectionBand>
        <PageActions page={page} />
      </SectionBand>

      <SectionBand>
        <div className="mb-5 flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md border border-[var(--accent-2)] bg-[rgba(90,167,255,0.1)]">
            <BarChart3 className="size-5 text-[var(--accent-2)]" aria-hidden />
          </span>
          <div>
            <h2 className="text-xl font-semibold text-white">Modelos rastreados</h2>
            <p className="text-sm text-[var(--muted)]">Os modelos mais relevantes para vibe coding pesado.</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {benchmarkModels.map((model) => (
            <div
              key={model.name}
              className="route-card rounded-md border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent-2)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-white">{model.name}</h3>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">{model.vendor}</p>
                </div>
                {tierBadge(model.tier)}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-[var(--muted)]">Contexto</p>
                  <p className="mt-1 text-sm text-white">{model.ctx}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-[var(--muted)]">Coding</p>
                  <p className="mt-1 text-sm text-[var(--muted-strong)]">{model.coding}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-[var(--muted)]">Notas</p>
                  <p className="mt-1 text-sm text-[var(--muted-strong)]">{model.notes}</p>
                </div>
              </div>
            </div>
          ))}
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
