import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Compass,
  Gauge,
  Layers3,
  Radar,
  Search,
} from "lucide-react";
import { PageFrame, PageIntro, SectionBand, StatusBadge } from "@/components/page-frame";
import { PrimaryDock } from "@/components/primary-dock";
import { SearchPanel } from "@/components/search-panel";
import { executiveStats, hubPages } from "@/lib/content";

const journeyItems = [
  {
    icon: Gauge,
    title: "Decidir assinatura",
    text: "Comece pelo ranking quando a pergunta for compra, custo ou stack recomendada.",
    href: "/ranking",
    action: "Abrir ranking",
  },
  {
    icon: Radar,
    title: "Comparar modelos",
    text: "Use benchmarks quando quiser entender capacidade tecnica, risco e encaixe operacional.",
    href: "/benchmarks",
    action: "Ver benchmarks",
  },
  {
    icon: Layers3,
    title: "Explorar solucoes",
    text: "Entre nas paginas profundas para entender o papel de cada ferramenta dentro da stack.",
    href: "/glm",
    action: "Ver exemplo",
  },
  {
    icon: Bot,
    title: "Guiar uma IA",
    text: "Use o AI Index para dar contexto limpo a agentes, crawlers e assistentes de pesquisa.",
    href: "/ai-index",
    action: "Abrir AI Index",
  },
];

export default function Home() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="MVP de refatoracao"
        title="Um hub tecnico feito para humanos decidirem e IAs entenderem."
        summary="Esta versao expande o MVP para as paginas canonicas do projeto: voce escolhe a intencao, compara, aprofunda ou entrega um mapa limpo para agentes de IA."
      />

      <SectionBand>
        <PrimaryDock />
      </SectionBand>

      <SectionBand>
        <div className="signal-grid grid gap-3 rounded-md border border-[var(--line)] bg-[rgba(16,24,32,0.72)] p-3 md:grid-cols-4">
          {executiveStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-md border border-[var(--line)] bg-[rgba(16,24,32,0.82)] p-4 transition duration-200 hover:-translate-y-1 hover:border-[var(--line-strong)]"
            >
              <p className="font-mono text-xs uppercase text-[var(--muted)]">
                {stat.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </SectionBand>

      <SectionBand>
        <div className="grid gap-5 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div>
            <StatusBadge>orientacao</StatusBadge>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Escolha o que voce quer fazer primeiro.
            </h2>
            <p className="mt-3 leading-7 text-[var(--muted-strong)]">
              A navegacao deixa de ser uma lista de nomes internos e passa a ser
              uma trilha de decisao: decidir, comparar, explorar e orientar IA.
              O conteudo original continua preservado como fonte de verdade.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {journeyItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="route-card group min-h-40 rounded-md border border-[var(--line)] bg-[var(--surface)] p-4 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface-strong)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="pulse-dot grid size-10 shrink-0 place-items-center rounded-md border border-[var(--line-strong)] bg-[rgba(66,217,166,0.08)]">
                    <item.icon className="size-5 text-[var(--accent)]" aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                  {item.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--accent)]">
                  {item.action}
                  <ArrowRight
                    className="size-4 transition group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionBand>

      <SectionBand id="explore">
        <div className="mb-5 grid gap-4 md:grid-cols-[minmax(0,1fr)_320px] md:items-end">
          <div>
            <StatusBadge>mapa visual</StatusBadge>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              O hub vira um mapa, nao uma pilha de paginas.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[var(--muted-strong)]">
              As proximas iteracoes podem transformar cada categoria em uma
              faixa visual propria: decisoes, benchmarks, solucoes, evidencias,
              telemetria e prompts.
            </p>
          </div>
          <div className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-4">
            <div className="mb-3 flex items-center gap-2 text-sm text-white">
              <BrainCircuit className="size-4 text-[var(--accent)]" aria-hidden />
              Leitura recomendada
            </div>
            <div className="grid gap-2 font-mono text-xs text-[var(--muted)]">
              <span>ranking / benchmarks / solucao</span>
              <span>ai-index / llms.txt / manifesto</span>
              <span>busca / pagina / relacionados</span>
            </div>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Compass, title: "Para iniciantes", text: "Comecar por Decidir e seguir para Comparar." },
            { icon: Search, title: "Para pesquisa", text: "Buscar por tags e abrir paginas relacionadas." },
            { icon: Bot, title: "Para agentes", text: "Usar AI Index, manifesto e links canonicos." },
          ].map((item) => (
            <div
              key={item.title}
              className="route-card rounded-md border border-[var(--line)] bg-[var(--surface)] p-4 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent-2)]"
            >
              <item.icon className="size-5 text-[var(--accent-2)]" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </SectionBand>

      <SectionBand>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <StatusBadge>local search</StatusBadge>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Busca piloto por paginas, tags e contexto.
            </h2>
          </div>
          <Link
            href="/ai-index"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--line-strong)] px-3 py-2 text-sm text-[var(--muted-strong)] transition hover:border-[var(--accent)] hover:text-white"
          >
            Abrir AI Index
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <SearchPanel pages={hubPages} />
      </SectionBand>
    </PageFrame>
  );
}
