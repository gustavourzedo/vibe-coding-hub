import Link from "next/link";
import { Activity } from "lucide-react";
import { primaryGroups } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-[var(--line)] bg-[rgba(8,11,16,0.92)]">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)_180px]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-7 place-items-center rounded-md border border-[var(--line-strong)] bg-[var(--surface-strong)]">
                <Activity className="size-3.5 text-[var(--accent)]" aria-hidden />
              </span>
              <span className="text-sm font-semibold text-white">Vibe Coding Hub</span>
            </div>
            <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
              Hub para comparar assinaturas, modelos, IDEs e telemetria de vibe coding.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[0.7rem] uppercase text-[var(--accent)]">Decisao</p>
              <div className="mt-3 grid gap-2">
                <FooterLink href="/ranking">Ranking</FooterLink>
                <FooterLink href="/estrategias">Estrategias</FooterLink>
                <FooterLink href="/vibe-sustentavel">Vibe Sustentavel</FooterLink>
              </div>
            </div>
            <div>
              <p className="font-mono text-[0.7rem] uppercase text-[var(--accent)]">Tecnico</p>
              <div className="mt-3 grid gap-2">
                <FooterLink href="/benchmarks">Benchmarks</FooterLink>
                <FooterLink href="/evidencia-campo">Evidencia de Campo</FooterLink>
                <FooterLink href="/telemetria">Telemetria</FooterLink>
              </div>
            </div>
            <div>
              <p className="font-mono text-[0.7rem] uppercase text-[var(--accent)]">Recursos</p>
              <div className="mt-3 grid gap-2">
                <FooterLink href="/harnesses">IDEs e Harnesses</FooterLink>
                <FooterLink href="/mcp-skills-plugins">MCPs, Skills, Plugins</FooterLink>
                <FooterLink href="/ai-better-prompts">Better Prompts</FooterLink>
                <FooterLink href="/ai-index">AI Index</FooterLink>
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-[0.7rem] uppercase text-[var(--accent)]">Para IA</p>
            <div className="mt-3 grid gap-2">
              <FooterLink href="/ai-index">Mapa do Hub</FooterLink>
              <FooterLink href="/llms.txt" external>llms.txt</FooterLink>
              <FooterLink href="/ai-content-map.json" external>content-map.json</FooterLink>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-6">
          <p className="font-mono text-[0.68rem] text-[var(--muted)]">
            {primaryGroups.length} areas &middot; conteudo preservado &middot; SSR + AI-ready
          </p>
          <p className="font-mono text-[0.68rem] text-[var(--muted)]">
            Vibe Coding Hub &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className="text-xs text-[var(--muted-strong)] transition hover:text-white"
    >
      {children}
    </Link>
  );
}
