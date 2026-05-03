import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyContentPage } from "@/components/legacy-content";
import { PageFrame } from "@/components/page-frame";
import { getPageBySlug, hubPages } from "@/lib/content";

const DEDICATED_SLUGS = new Set(["ranking", "benchmarks"]);

export function generateStaticParams() {
  return hubPages
    .filter((page) => page.slug && !DEDICATED_SLUGS.has(page.slug))
    .map((page) => ({
      slug: page.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) return {};

  return {
    title: page.title,
    description: page.summary,
    alternates: {
      canonical: page.href,
    },
  };
}

export default async function LegacyRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": page.category === "benchmark" ? "Dataset" : "Article",
    name: page.title,
    inLanguage: "pt-BR",
    keywords: page.tags,
    url: page.href,
  };

  return (
    <PageFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LegacyContentPage page={page} />
    </PageFrame>
  );
}
