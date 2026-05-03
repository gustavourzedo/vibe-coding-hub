import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

export type PageCategory =
  | "home"
  | "ranking"
  | "benchmark"
  | "strategy"
  | "evidence"
  | "tools"
  | "telemetry"
  | "prompting"
  | "operations"
  | "solution"
  | "ai-index";

export type HubPage = {
  slug: string;
  source: string;
  title: string;
  eyebrow: string;
  summary: string;
  category: PageCategory;
  priority: "critical" | "high" | "normal";
  tags: string[];
  href: string;
};

export type HubGroup = {
  key: string;
  label: string;
  description: string;
  href: string;
  slugs: string[];
};

const rawPageSchema = z.object({
  slug: z.string(),
  source: z.string(),
  title: z.string(),
  category: z.string(),
  priority: z.number(),
  tags: z.array(z.string()),
});

const contentMapSchema = z.object({
  canonicalPages: z.array(rawPageSchema),
});

const categoryLabels: Record<string, string> = {
  home: "Inicio",
  ranking: "Decisao",
  benchmark: "Benchmark",
  strategy: "Estrategia",
  evidence: "Evidencia",
  tools: "Ferramentas",
  telemetry: "Telemetria",
  prompting: "Prompts",
  operations: "Operacao",
  solution: "Solucao",
  "ai-index": "Mapa para IA",
};

const categorySummaries: Record<string, string> = {
  home: "Entrada principal do hub e mapa executivo para navegar pelo estudo.",
  ranking: "Leitura executiva para decidir assinatura, stack e prioridade operacional.",
  benchmark: "Comparacao tecnica de modelos, capacidade e encaixe para workloads pesados.",
  strategy: "Trilhas de decisao para custo, combinacao de ferramentas e sustentabilidade.",
  evidence: "Sinais de campo, reviews e validacao qualitativa do uso real.",
  tools: "IDEs, harnesses, orquestradores e ambientes de trabalho agentico.",
  telemetry: "Dados locais e sinais operacionais para acompanhar uso real.",
  prompting: "Playbooks e prompts para operar agentes e modelos com mais previsibilidade.",
  operations: "Rotina de atualizacao e manutencao do hub.",
  solution: "Pagina profunda de uma solucao, modelo, assinatura ou ferramenta especifica.",
  "ai-index": "Mapa estruturado para agentes, crawlers e buscas com IA.",
};

export const executiveStats = [
  { label: "Paginas canonicas", value: "30", tone: "info" },
  { label: "Shell Next", value: "Ativo", tone: "good" },
  { label: "Busca IA", value: "llms + JSON", tone: "info" },
  { label: "Conteudo", value: "Legado vivo", tone: "warning" },
] as const;

export const primaryGroups: HubGroup[] = [
  {
    key: "decidir",
    label: "Ranking",
    description: "Escolha assinatura, stack e prioridade de compra.",
    href: "/ranking",
    slugs: ["ranking", "estrategias", "vibe-sustentavel"],
  },
  {
    key: "comparar",
    label: "Benchmarks",
    description: "Compare modelos por capacidade, risco e encaixe tecnico.",
    href: "/benchmarks",
    slugs: ["benchmarks", "benchmark-modelos", "evidencia-campo"],
  },
  {
    key: "telemetria",
    label: "Telemetria",
    description: "Veja sinais de uso real, custos e operacao local.",
    href: "/telemetria",
    slugs: ["telemetria", "evidencia-campo"],
  },
  {
    key: "modelos",
    label: "Modelos e planos",
    description: "Explore GLM, MiMo, OpenCode, Claude, OpenAI e outros.",
    href: "/glm",
    slugs: ["glm", "mimo", "opencode-go", "claude-max", "openai-codex"],
  },
  {
    key: "ides",
    label: "IDEs e agentes",
    description: "Entenda Cursor, harnesses, orquestradores e workflows.",
    href: "/harnesses",
    slugs: ["harnesses", "orquestradores", "cursor", "devin", "factory"],
  },
  {
    key: "prompts",
    label: "Better prompts",
    description: "Use playbooks e prompts para operar agentes melhor.",
    href: "/ai-better-prompts",
    slugs: ["ai-better-prompts", "atualizacao", "reviews-comunidade"],
  },
];

function readContentMap() {
  const mapPath = path.join(process.cwd(), "public", "ai-content-map.json");
  return contentMapSchema.parse(
    JSON.parse(fs.readFileSync(mapPath, "utf8")),
  );
}

export const hubPages: HubPage[] = readContentMap().canonicalPages.map(
  (page) => {
    const category = normalizeCategory(page.category);
    const priority =
      page.priority <= 1 ? "critical" : page.priority <= 2 ? "high" : "normal";

    return {
      slug: page.slug,
      source: page.source,
      title: page.title,
      eyebrow: categoryLabels[category] ?? "Conteudo",
      summary: categorySummaries[category] ?? "Pagina do Vibe Coding Hub.",
      category,
      priority,
      tags: page.tags,
      href: page.slug ? `/${page.slug}` : "/",
    };
  },
);

export function normalizeCategory(category: string): PageCategory {
  if (category in categoryLabels) return category as PageCategory;
  return "solution";
}

export function getPageBySlug(slug: string) {
  return hubPages.find((page) => page.slug === slug);
}

export function getPagesByCategory(category: PageCategory) {
  return hubPages.filter((page) => page.category === category);
}

export function getRelatedPages(page: HubPage, limit = 5) {
  return hubPages
    .filter((candidate) => candidate.slug !== page.slug)
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((tag) => page.tags.includes(tag));
      const categoryScore = candidate.category === page.category ? 2 : 0;
      const priorityScore =
        candidate.priority === "critical" ? 2 : candidate.priority === "high" ? 1 : 0;

      return {
        page: candidate,
        score: sharedTags.length + categoryScore + priorityScore,
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.page);
}

export function getCategoryLabel(category: string) {
  return categoryLabels[category] ?? "Conteudo";
}

export function readLegacyHtml(page: HubPage) {
  const sourcePath = path.join(process.cwd(), "content", page.source);
  const html = fs.readFileSync(sourcePath, "utf8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;

  return sanitizeLegacyBody(rewriteLegacyLinks(body));
}

function rewriteLegacyLinks(html: string) {
  return html.replace(/href=["']\.\/([^"']+?)\.html(["'#?])/g, (_match, slug, suffix) => {
    const cleanSlug = slug.replace(/^index$/, "");
    return `href="/${cleanSlug}${suffix}`;
  });
}

function sanitizeLegacyBody(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/\sstyle=(["'])[\s\S]*?\1/gi, "")
    .replace(/\son\w+=(["'])[\s\S]*?\1/gi, "");
}
