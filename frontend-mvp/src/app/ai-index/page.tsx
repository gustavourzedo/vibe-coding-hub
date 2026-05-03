import type { Metadata } from "next";
import Link from "next/link";
import { Braces, FileJson, Route } from "lucide-react";
import { PageFrame, PageIntro, SectionBand, StatusBadge } from "@/components/page-frame";
import { hubPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Index",
  description:
    "Mapa machine-friendly do Vibe Coding Hub para agentes e buscas com IA.",
};

export default function AiIndexPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Index - Vibe Coding Hub",
    inLanguage: "pt-BR",
    hasPart: hubPages.map((page) => ({
      "@type": "WebPage",
      name: page.title,
      url: page.href,
      about: page.tags,
    })),
  };

  return (
    <PageFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageIntro
        eyebrow="Mapa para agentes"
        title="AI Index para reduzir ambiguidade e facilitar citacao."
        summary="A rota concentra prioridades, categorias e links canonicos para humanos, crawlers e agentes que precisam entender o hub sem vasculhar HTML visual."
      />

      <SectionBand>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Braces, label: "llms.txt", value: "/llms.txt" },
            { icon: FileJson, label: "content map", value: "/ai-content-map.json" },
            { icon: Route, label: "canonical routes", value: `${hubPages.length} rotas MVP` },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-4"
            >
              <item.icon className="size-5 text-[var(--accent)]" aria-hidden />
              <p className="mt-4 font-mono text-xs uppercase text-[var(--muted)]">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </SectionBand>

      <SectionBand>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-white">
            Paginas canonicas do MVP
          </h2>
          <StatusBadge>machine-readable</StatusBadge>
        </div>
        <div className="grid gap-3">
          {hubPages.map((page) => (
            <Link
              key={page.slug}
              href={page.href}
              className="grid gap-3 rounded-md border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)] md:grid-cols-[220px_minmax(0,1fr)_160px]"
            >
              <strong className="text-white">{page.title}</strong>
              <span className="text-sm leading-6 text-[var(--muted-strong)]">
                {page.summary}
              </span>
              <span className="font-mono text-xs uppercase text-[var(--accent)]">
                {page.category}
              </span>
            </Link>
          ))}
        </div>
      </SectionBand>
    </PageFrame>
  );
}

