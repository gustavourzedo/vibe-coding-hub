import type { Metadata } from "next";
import { Blocks, ExternalLink, Puzzle, Zap } from "lucide-react";
import { PageFrame, PageIntro, SectionBand, StatusBadge } from "@/components/page-frame";

export const metadata: Metadata = {
  title: "MCPs, Skills e Plugins",
  description: "Guia completo de Model Context Protocol servers, skills e plugins para turbinar agentes de vibe coding.",
  alternates: { canonical: "/mcp-skills-plugins" },
};

type McpEntry = {
  name: string;
  category: string;
  description: string;
  url: string;
  downloads?: string;
  free: boolean;
};

type RegistryEntry = {
  name: string;
  description: string;
  url: string;
  count?: string;
};

const officialMcpServers: McpEntry[] = [
  { name: "Filesystem", category: "Core", description: "Leitura/escrita de arquivos com sandbox de diretorios permitidos.", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem", free: true },
  { name: "Memory", category: "Core", description: "Armazenamento persistente de conhecimento entre sessoes via knowledge graph.", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/memory", free: true },
  { name: "Fetch", category: "Core", description: "Requisicoes HTTP/HTTPS com suporte a markdown e controle de cache.", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/fetch", free: true },
  { name: "Git", category: "Core", description: "Operacoes Git completas: diff, log, commit, branch via MCP.", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/git", free: true },
  { name: "Sequential Thinking", category: "Core", description: "Raciocinio passo-a-passo para problemas complexos com possibilidade de revisao.", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking", free: true },
];

const essentialDevMcp: McpEntry[] = [
  { name: "Playwright", category: "Browser", description: "Automacao de navegador: screenshots, clicks, fill forms, navigate. 2.38M downloads.", url: "https://github.com/anthropics/mcp-server-playwright", free: true },
  { name: "Context7", category: "Docs", description: "Acesso a documentacao de 9.000+ bibliotecas atualizada em tempo real.", url: "https://github.com/nicholasgriffintn/context7-mcp", free: true, downloads: "9000+ libs" },
  { name: "PostgreSQL", category: "Database", description: "Query, schema inspection e analise de bancos PostgreSQL.", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/postgres", free: true },
  { name: "SQLite", category: "Database", description: "Banco leve local para dados, logs e caches de projeto.", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite", free: true },
  { name: "Brave Search", category: "Search", description: "Busca web via Brave Search API com filtros de regiao e idioma.", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search", free: true },
  { name: "Exa", category: "Search", description: "Busca semantica e de codigo. 55.7k usuarios.", url: "https://github.com/exa-labs/exa-mcp-server", free: true },
  { name: "Figma", category: "Design", description: "Leitura de layouts Figma para design-to-code. Comunidade ativa.", url: "https://github.com/anthropics/mcp-server-figma", free: true },
  { name: "Linear", category: "Productivity", description: "Gestao de issues, sprints e projetos diretamente do agente.", url: "https://github.com/anthropics/mcp-server-linear", free: true },
  { name: "Supabase", category: "Backend", description: "Acesso direto a tabelas, RPC functions e gerenciamento de projeto Supabase.", url: "https://github.com/supabase-community/mcp-server-supabase", free: true },
  { name: "GitHub", category: "DevOps", description: "Issues, PRs, repos e search via GitHub API. Arquivado mas funcional.", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/github", free: true },
];

const registries: RegistryEntry[] = [
  { name: "MCP.so", description: "20.6k+ MCP servers catalogados. Maior registro independente.", url: "https://mcp.so", count: "20.6k+" },
  { name: "Glama MCP", description: "22.7k+ MCPs com filtros por categoria e popularidade.", url: "https://glama.ai/mcp/servers", count: "22.7k+" },
  { name: "Smithery", description: "7.9k+ MCPs com install one-click e avaliacao de qualidade.", url: "https://smithery.ai", count: "7.9k+" },
  { name: "PulseMCP", description: "MCPs curados com foco em uso real e demos.", url: "https://pulsemcp.com", count: "curados" },
  { name: "Awesome MCP", description: "Lista curada no GitHub com 1.500+ MCPs organizados.", url: "https://github.com/punkpeye/awesome-mcp-servers", count: "1.5k+" },
];

const skillsGuide = [
  { title: "OpenCode Skills", desc: "Arquivos SKILL.md em .opencode/skills/ ou .claude/skills/. Carregados sob demanda. Pode incluir tool permissions e context injection.", link: "https://opencode.ai" },
  { title: "Cursor Rules", desc: "Arquivos .cursorrules no root do projeto. Regras globais e por pasta. Funciona com MCP servers.", link: "https://cursor.sh" },
  { title: "Claude Code Skills", desc: "CLAUDE.md com instrucoes persistentes + MCP servers via config JSON.", link: "https://docs.anthropic.com/claude-code" },
  { title: "Agent Skills Pattern", desc: "Qualquer agente pode ter skills: arquivos markdown com instrucoes, templates de prompts e tool configs que sao injetados no contexto quando relevantes.", link: "#" },
];

const promptPatterns = [
  { pattern: "MCP + Context", desc: "Quando o MCP fornece dados (Figma, DB, docs), coloque-os no Contexto do prompt, nao no Escopo. O agente usa dados para entender, nao para modificar.", example: "Contexto: [dados do Figma MCP] | Escopo: so alterar src/components/" },
  { pattern: "Skill Loading", desc: "Antes de usar uma skill, verifique se ela existe. Carregue apenas quando o dominio da tarefa bater com o proposito da skill.", example: "Carregar skill: testing → rodar testes | Carregar skill: deploy → fazer deploy" },
  { pattern: "MCP Chain", desc: "Para tarefas que envolvem varios MCPs (ex: buscar no Figma, gerar codigo, testar no browser), use chain explícita no prompt.", example: "1. Figma MCP → obter layout | 2. Gerar componente | 3. Playwright MCP → screenshot para validacao" },
  { pattern: "Tool Guard", desc: "Defina quais ferramentas o agente PODE usar. Se o MCP de database estiver disponivel, restrinja a operacoes leitura em producao.", example: "Permitido: read, grep, bash(read-only) | Proibido: edit, write, bash(rm)" },
];

export default function McpSkillsPluginsPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="MCPs, Skills, Plugins"
        title="MCPs, Skills e Plugins para turbinar agentes."
        summary="Model Context Protocol servers, sistemas de skills e plugins que expandem a capacidade dos agentes de vibe coding. Com links oficiais e guia pratico."
      />

      <SectionBand>
        <div className="mb-5 flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md border border-[var(--accent)] bg-[rgba(66,217,166,0.1)]">
            <Blocks className="size-5 text-[var(--accent)]" aria-hidden />
          </span>
          <div>
            <h2 className="text-xl font-semibold text-white">MCP Servers oficiais</h2>
            <p className="text-sm text-[var(--muted)]">Servers de referencia do Model Context Protocol. Todos gratuitos e open-source.</p>
          </div>
        </div>
        <div className="overflow-x-auto rounded-md border border-[var(--line)]">
          <table className="w-full min-w-[600px] border-collapse bg-[rgba(9,14,19,0.72)] text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]">Servidor</th>
                <th className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]">Categoria</th>
                <th className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]">Descricao</th>
                <th className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]">Link</th>
              </tr>
            </thead>
            <tbody>
              {officialMcpServers.map((mcp) => (
                <tr key={mcp.name} className="transition hover:bg-[rgba(66,217,166,0.04)]">
                  <td className="border-b border-[var(--line)] px-4 py-3 font-semibold text-white">{mcp.name}</td>
                  <td className="border-b border-[var(--line)] px-4 py-3 font-mono text-xs text-[var(--accent)]">{mcp.category}</td>
                  <td className="border-b border-[var(--line)] px-4 py-3 text-[var(--muted-strong)]">{mcp.description}</td>
                  <td className="border-b border-[var(--line)] px-4 py-3">
                    <a href={mcp.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-xs text-[var(--accent-2)] transition hover:text-white">
                      GitHub <ExternalLink className="size-3" aria-hidden />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBand>

      <SectionBand>
        <div className="mb-5 flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md border border-[var(--accent-2)] bg-[rgba(90,167,255,0.1)]">
            <Zap className="size-5 text-[var(--accent-2)]" aria-hidden />
          </span>
          <div>
            <h2 className="text-xl font-semibold text-white">MCPs essenciais para dev</h2>
            <p className="text-sm text-[var(--muted)]">Os MCPs mais usados por desenvolvedores de vibe coding.</p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {essentialDevMcp.map((mcp) => (
            <div key={mcp.name} className="route-card rounded-md border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent-2)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-white">{mcp.name}</h3>
                  <span className="font-mono text-[0.68rem] text-[var(--accent)]">{mcp.category}</span>
                </div>
                {mcp.downloads && <StatusBadge>{mcp.downloads}</StatusBadge>}
              </div>
              <p className="mt-2 text-sm text-[var(--muted-strong)]">{mcp.description}</p>
              <a href={mcp.url} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--accent-2)] transition hover:text-white">
                Ver no GitHub <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </div>
          ))}
        </div>
      </SectionBand>

      <SectionBand>
        <div className="mb-5 flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md border border-[var(--accent)] bg-[rgba(66,217,166,0.1)]">
            <Puzzle className="size-5 text-[var(--accent)]" aria-hidden />
          </span>
          <div>
            <h2 className="text-xl font-semibold text-white">Registros de MCPs</h2>
            <p className="text-sm text-[var(--muted)]">Onde encontrar MCPs para qualquer necessidade.</p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {registries.map((reg) => (
            <a key={reg.name} href={reg.url} target="_blank" rel="noopener" className="route-card rounded-md border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]">
              <h3 className="text-base font-semibold text-white">{reg.name}</h3>
              <p className="mt-1 text-sm text-[var(--muted-strong)]">{reg.description}</p>
              {reg.count && <p className="mt-2 font-mono text-xs text-[var(--accent)]">{reg.count} MCPs</p>}
            </a>
          ))}
        </div>
      </SectionBand>

      <SectionBand>
        <h2 className="mb-4 text-xl font-semibold text-white">Sistemas de Skills</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {skillsGuide.map((skill) => (
            <div key={skill.title} className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-4">
              <h3 className="font-semibold text-white">{skill.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-strong)]">{skill.desc}</p>
              {skill.link !== "#" && (
                <a href={skill.link} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-1.5 text-sm text-[var(--accent-2)] transition hover:text-white">
                  Documentacao <ExternalLink className="size-3" aria-hidden />
                </a>
              )}
            </div>
          ))}
        </div>
      </SectionBand>

      <SectionBand>
        <h2 className="mb-4 text-xl font-semibold text-white">Padroes de prompt com MCPs</h2>
        <div className="grid gap-3">
          {promptPatterns.map((p) => (
            <div key={p.pattern} className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-4">
              <div className="flex items-center gap-3">
                <StatusBadge>{p.pattern}</StatusBadge>
              </div>
              <p className="mt-2 text-sm text-[var(--muted-strong)]">{p.desc}</p>
              <pre className="mt-2 overflow-x-auto rounded-md border border-[var(--line)] bg-[rgba(9,14,19,0.72)] p-3 font-mono text-xs text-[var(--muted-strong)]">
                {p.example}
              </pre>
            </div>
          ))}
        </div>
      </SectionBand>

      <SectionBand>
        <div className="rounded-md border border-[var(--line)] bg-[rgba(16,24,32,0.64)] p-4">
          <p className="font-mono text-xs uppercase text-[var(--accent)]">Nota</p>
          <p className="mt-2 text-sm text-[var(--muted-strong)]">
            Esta pagina e uma referencia viva. O ecossistema MCP cresce rapido — novos servers e registros aparecem toda semana.
            Verifique os registros acima para as ultimas adicoes.
          </p>
        </div>
      </SectionBand>
    </PageFrame>
  );
}
