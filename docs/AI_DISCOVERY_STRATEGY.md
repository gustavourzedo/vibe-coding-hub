# AI Discovery Strategy

## Goal

Fazer o Vibe Coding Hub ser facil de ler por agentes, mecanismos de busca com IA e modelos que precisam responder perguntas sobre ferramentas, planos, benchmarks e telemetria.

## Principle

IA nao deve precisar "adivinhar" a estrutura do site a partir de HTML visual. Ela deve encontrar um mapa claro, paginas canonicas, resumos curtos, relacoes entre conteudos e dados estruturados.

## Files

### `llms.txt`

Arquivo raiz com resumo do hub e links prioritarios.

Uso:

- orientar agentes para as paginas mais importantes
- indicar escopo do projeto
- separar paginas canonicas de arquivos legados

### `ai-content-map.json`

Manifesto machine-readable com:

- slug
- titulo
- categoria
- URL canonica
- arquivo fonte atual
- prioridade
- tags
- aliases legados

Uso:

- gerar busca local
- gerar `sitemap`
- gerar `AI Index`
- validar cobertura de metadata

### Future `app/ai-index/page.tsx`

Pagina publica de mapa do hub.

Conteudo esperado:

- resumo do hub
- categorias
- lista de paginas canonicas
- relacoes entre paginas
- orientacao para agentes

## Structured Data

Usar JSON-LD por tipo de pagina:

- Home: `WebSite` + `CollectionPage`
- Ranking: `ItemList`
- Benchmarks: `Dataset` ou `ItemList`
- Paginas de solucao: `Article`
- Telemetria: `Dataset`
- Prompts/playbooks: `TechArticle`

## Page Template Requirements

Toda pagina migrada deve ter:

- `<main>`
- um unico `<h1>`
- resumo curto no topo
- data de ultima revisao quando existir
- categoria
- links relacionados
- metadata propria
- canonical URL
- JSON-LD quando aplicavel

## Search Requirements

Busca humana e busca para IA devem compartilhar o mesmo manifesto.

Campos indexaveis:

- titulo
- resumo
- categoria
- tags
- aliases
- headings principais

Campos nao obrigatorios no primeiro ciclo:

- texto completo da pagina
- ranking ponderado por telemetria
- embeddings

## Important Caveat

`llms.txt` ainda nao e uma garantia universal de ingestao por todas as plataformas de IA. Mesmo assim, vale implementar porque e barato, legivel, ajuda agentes de coding e funciona bem combinado com sitemap, JSON-LD e HTML semantico.

