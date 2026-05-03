# Vibe Coding Hub

Hub de agentes para comparar assinaturas, modelos, IDEs, harnesses, MCPs e telemetria real de uso em workflows de vibe coding pesado.

## URL oficial (MVP)

https://frontend-mvp-rouge.vercel.app

O MVP e o projeto oficial. Renderiza todo o conteudo HTML legado dentro de um shell Next.js moderno com:
- Navegacao responsiva (mobile + desktop)
- Command palette (Ctrl+K)
- Paginas dedicadas para Ranking e Benchmarks com dados extraidos
- Pagina de MCPs, Skills e Plugins com links oficiais
- Sitemap e robots.txt gerados automaticamente
- AI Index (llms.txt + ai-content-map.json)

## Estrutura do projeto

```
frontend-mvp/          ← PROJETO OFICIAL (Next.js 16)
  src/app/             ← Rotas (pages dedicadas + catch-all legado)
  src/components/      ← UI components
  src/lib/             ← Logica de conteudo e dados
  content/             ← HTMLs legados sincronizados com a raiz
  public/              ← ai-content-map.json, llms.txt

index.html             ← Site estatico original (legado)
ranking.html           ← Ranking legado
benchmarks.html        ← Benchmarks legado
ai-better-prompts.html ← Prompts legado
ai-better-prompts/     ← Playbooks de prompts por modelo/IDE
telemetry/             ← Dados de uso e snapshots manuais
docs/                  ← Documentacao de contexto e plano de refatoracao
ide-setup/             ← Templates de configuracao por IDE
```

## Rodar localmente

```powershell
cd frontend-mvp
npm install
npm run dev -- --hostname 127.0.0.1 --port 3100
```

Acesse: http://127.0.0.1:3100

## Deploy

```powershell
cd frontend-mvp
npx vercel --prod
```

## Controle de versao

- Branch principal: `master` (local) / `main` (remote)
- Deploy via Vercel: automatico a cada push
- Conteudo HTML legado: sincronizar com `frontend-mvp/content/` apos alteracoes na raiz

## Escopo

- Ranking de assinaturas e plataformas para benchmark extremo baseado em uso real pesado.
- Paginas profundas por solucao (GLM, MiMo, OpenCode Go, Alibaba, Google AI, Cursor, Claude, etc.).
- Benchmark tecnico por modelo com SWE-bench, Arena Code e evidencia de campo.
- Comparativo de IDEs, harnesses e orquestradores.
- MCPs, Skills e Plugins com links oficiais e guia pratico.
- Telemetria local consolidando Cursor, OpenCode Go e ferramentas.
- Better Prompts: receita agenticos por fase, modelo e IDE.

## Atualizacao

Revalidar sempre que mudar preco, quota, modelo, documentacao oficial ou telemetria.
