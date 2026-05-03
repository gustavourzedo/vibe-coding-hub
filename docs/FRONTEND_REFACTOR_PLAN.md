# Frontend Refactor Plan

## North Star

Transformar o hub em uma experiencia editorial-tecnica de alto nivel para humanos e agentes de IA, preservando conteudo, divisao de paginas e rotas publicas.

O produto final deve parecer um centro de inteligencia para decisao de ferramentas de vibe coding: denso, pesquisavel, rapido, confiavel, tecnologico e facil de navegar.

## Non-Negotiables

- Nao alterar conteudo editorial durante a refatoracao visual.
- Nao alterar a divisao de paginas.
- Preservar URLs canonicas e redirects existentes.
- Priorizar HTML semantico e conteudo renderizado no servidor.
- Validar responsividade em navegador real.
- Manter IA e humanos como consumidores de primeira classe.

## Target Stack

- `Next.js` App Router
- `React`
- `TypeScript`
- `Tailwind CSS`
- `shadcn/ui`
- `lucide-react`
- `zod` para manifestos e conteudo estruturado
- `@tailwindcss/typography` para paginas editoriais longas
- `Browser Use` para validacao visual

## Design Direction

Tema visual: painel de inteligencia tecnica.

Caracteristicas:

- interface editorial-densa, com foco em comparacao, leitura e recuperacao rapida
- estetica tecnologica sem virar dashboard generico
- uso de contraste, linhas finas, grids, tabelas e estados de destaque
- paleta com base neutra fria, acentos verdes/azuis controlados e cores funcionais para risco, alerta e qualidade
- tipografia legivel para leitura longa e numeros comparativos
- motion discreto apenas para orientacao, nunca para distrair

Evitar:

- landing page decorativa
- cards excessivos dentro de cards
- gradientes genericos
- hero inflado onde o usuario precisa de conteudo
- UI dominada por uma unica cor
- efeitos de polish antes da navegacao e busca funcionarem bem

## AI Discovery Strategy

O hub precisa ser facil para IA ler, resumir, citar e navegar.

Implementar:

- `llms.txt` na raiz com mapa curado do hub
- `ai-content-map.json` com paginas canonicas, categorias e aliases
- sitemap gerado a partir do mesmo manifesto
- `robots.txt` claro
- JSON-LD por pagina usando `CollectionPage`, `Article`, `Dataset` ou `ItemList` quando fizer sentido
- headings hierarquicos previsiveis
- links internos com texto descritivo
- conteudo principal dentro de `<main>`
- cada pagina com resumo curto, data de atualizacao, categoria e relacao com paginas vizinhas
- uma pagina humana e machine-friendly chamada `Mapa do Hub` ou `AI Index`

Estrategia recomendada:

- humanos navegam por top nav, filtros, busca e trilhas
- IAs navegam por `llms.txt`, `ai-content-map.json`, sitemap, JSON-LD e pagina `AI Index`
- todo conteudo importante deve existir no HTML inicial, sem depender de JavaScript client-side para ser descoberto

## Information Architecture

Grupos principais:

- Home e leitura executiva
- Ranking e estrategia de assinatura
- Benchmarks de modelos
- Solucoes e planos
- IDEs, harnesses e orquestradores
- Evidencia de campo e reviews
- Telemetria
- Prompts e playbooks

Navegacao principal:

- `Ranking`
- `Benchmarks`
- `Solucoes`
- `IDEs e Harnesses`
- `Orquestradores`
- `Telemetria`
- `Prompts`
- `AI Index`

Navegacao secundaria:

- breadcrumbs
- paginas relacionadas
- proximo passo sugerido
- links para fontes internas relevantes

Busca:

- busca local por titulo, categoria, tags e resumo
- resultado com contexto curto
- filtros por categoria
- atalho de command palette depois que a base estiver estavel

## Component System

Criar primeiro:

- `PageShell`
- `SiteHeader`
- `SiteNav`
- `Breadcrumbs`
- `PageHero`
- `ContentSection`
- `MetricCard`
- `ComparisonTable`
- `Callout`
- `StatusBadge`
- `LinkList`
- `RelatedPages`
- `SearchBox`
- `AiReadableSummary`

Tokens:

- cores semanticas
- escala de texto
- espacamento
- radius maximo discreto
- bordas
- sombras funcionais
- estados de foco
- largura de conteudo
- densidade de tabela

## Step-by-Step Refactor

### Step 0 - Workspace Baseline

Status: iniciado.

- registrar stack e plano
- criar `llms.txt`
- criar `ai-content-map.json`
- preservar estado atual dos HTMLs
- auditar paginas canonicas e duplicadas

### Step 1 - Framework Foundation

Status: pendente.

- inicializar Next.js com TypeScript, Tailwind e App Router
- manter deploy Vercel
- migrar redirects do `vercel.json`
- configurar ESLint e Prettier
- configurar aliases
- instalar `shadcn/ui` com base Radix
- instalar `lucide-react`, `zod` e `@tailwindcss/typography`

### Step 2 - Content Manifest

Status: pendente.

- transformar `ai-content-map.json` na fonte de verdade para paginas
- adicionar categorias, tags, aliases e relacoes
- gerar sitemap a partir do manifesto
- gerar `llms.txt` a partir do manifesto quando possivel
- validar se toda pagina canonica tem titulo, resumo e categoria

### Step 3 - Design System

Status: pendente.

- criar tokens globais
- criar tema visual tecnologico
- configurar estilos tipograficos editoriais
- criar componentes base
- criar estados de foco, hover, active e selected
- definir padrao de tabelas responsivas

### Step 4 - Navigation And Search

Status: pendente.

- implementar header global
- implementar breadcrumbs
- implementar `AI Index`
- implementar busca local
- implementar paginas relacionadas
- garantir que a navegacao funciona sem depender de busca

### Step 5 - Pilot Pages

Status: pendente.

Migrar primeiro:

- `index`
- `ranking`
- `benchmarks`

Objetivo:

- provar layout
- provar componentes
- provar busca
- provar responsividade
- validar AI discovery

### Step 6 - Core Migration

Status: pendente.

Migrar:

- `estrategias`
- `evidencia-campo`
- `reviews-comunidade`
- `harnesses`
- `orquestradores`
- `telemetria`
- `ai-better-prompts`
- `atualizacao`

### Step 7 - Solution Pages

Status: pendente.

Migrar paginas de solucoes:

- `glm`
- `mimo`
- `opencode-go`
- `alibaba`
- `google-ai`
- `cursor`
- `claude-max`
- `openai-codex`
- demais solucoes

### Step 8 - Legacy Routes

Status: pendente.

- manter paginas antigas como redirects
- validar `cleanUrls`
- validar canonical URLs
- remover duplicacao apenas quando redirect estiver seguro

### Step 9 - Quality Gate

Status: pendente.

Validar:

- desktop
- mobile
- navegacao por teclado
- contraste
- overflow horizontal
- tabelas longas
- metadata
- JSON-LD
- sitemap
- `llms.txt`
- carga sem JavaScript quando possivel
- Core Web Vitals

### Step 10 - Release

Status: pendente.

- deploy preview
- validacao visual
- smoke test de rotas
- checagem de links internos
- deploy producao

## Acceptance Criteria

- todas as paginas canonicas continuam acessiveis
- conteudo e ordem editorial preservados
- navegacao global clara
- busca local funcionando
- `AI Index` publicado
- `llms.txt` publicado
- manifesto de paginas publicado
- paginas renderizam bem em mobile e desktop
- tabelas nao quebram layout
- foco de teclado visivel
- metadata e canonical corretos
- nenhuma pagina principal depende de JS client-side para conteudo essencial

