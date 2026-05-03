# Frontend Refactor Stack

## Objetivo

Refatorar todo o frontend sem alterar:

- conteudo
- divisao de paginas
- rotas publicas
- leitura editorial do material

A refatoracao deve elevar o projeto para um padrao de frontend profissional, responsivo, consistente, acessivel e facil de manter.

## Leitura do Estado Atual

O projeto hoje opera como um hub estatico com deploy simples na Vercel.

O que existe hoje:

- dezenas de paginas `.html` soltas na raiz
- CSS quase sempre embutido em `<style>` dentro de cada pagina
- repeticao grande de tokens, grids, cards, tabelas, hero sections e callouts
- quase nenhuma camada de componentes reutilizaveis
- quase nenhuma separacao entre conteudo, layout e estilo
- `vercel.json` com redirects importantes que preservam URLs antigas
- `package.json` minimalista, sem framework de UI, sem build e sem lint

Sinais objetivos encontrados:

- stack atual: HTML estatico + Vercel CLI
- dependencia principal instalada: `vercel`
- praticamente todas as paginas possuem `<style>` inline
- varias paginas tambem usam atributos `style=""`
- existe pouca ou nenhuma infraestrutura moderna de frontend

Conclusao: o projeto esta funcional para publicar, mas ainda nao tem base tecnica para um frontend premium, escalavel e consistente.

## Skills e Plugins Mais Relevantes

### 1. `vercel:nextjs`

Melhor skill de base para migrar de HTML estatico para uma arquitetura moderna de frontend.

Por que entra:

- App Router bom para organizar cada pagina sem mexer nas rotas
- layouts compartilhados
- metadata por pagina
- separacao clara entre conteudo, shell e componentes
- otimo encaixe com deploy na Vercel

### 2. `vercel:shadcn`

Melhor skill para criar um design system serio sem cair em UI generica.

Por que entra:

- componentes acessiveis e auditaveis
- ownership do codigo no proprio repo
- excelente para cards, tabelas, tabs, sheets, nav, dialog e filtros
- facilita consistencia visual entre todas as paginas

### 3. `vercel:react-best-practices`

Skill de governanca de qualidade para quando a migracao entrar em React/TSX.

Por que entra:

- ajuda a manter acessibilidade
- evita anti-patterns comuns
- puxa o projeto para composicao melhor
- reduz risco de virar um frontend pesado e desorganizado

### 4. Plugin `Browser Use` + skill `browser-use:browser`

Fundamental para validacao real de UI durante a refatoracao.

Por que entra:

- confere responsividade de verdade
- ajuda a validar navegacao, overflow, densidade de tabela e hierarquia visual
- evita refatorar "no escuro" olhando so para codigo

### 5. `vercel:agent-browser-verify` e `vercel:verification`

Boas skills para a etapa de verificacao continua.

Por que entram:

- garantem page load
- ajudam a detectar regressao visual e de comportamento
- criam disciplina de validacao em cada etapa da refatoracao

### 6. `vercel:geist`

Util para padronizar tipografia se decidirmos adotar a linha Vercel/Geist.

Por que pode entrar:

- melhora consistencia tipografica
- bom fit para interfaces editoriais e dashboards

Observacao:

Mesmo que possamos usar outras stacks, o melhor pacote disponivel neste ambiente para um frontend profissional e consistente hoje e:

- Next.js App Router
- React
- TypeScript
- shadcn/ui
- Tailwind CSS
- design tokens proprios
- validacao no Browser Use

## Stack-Alvo Recomendada

### Base

- `Next.js` com App Router
- `React`
- `TypeScript`
- `Vercel` como plataforma primaria

### UI Foundation

- `Tailwind CSS`
- `shadcn/ui`
- `class-variance-authority`
- `tailwind-merge`
- tokens centralizados de cor, espacamento, radius, sombra, tipografia e estados

### Qualidade

- `ESLint`
- `Prettier`
- regras de acessibilidade
- validacao responsiva por navegador real

### Validacao

- Browser Use para conferencias visuais
- smoke checks por pagina
- captura de screenshots para comparar antes/depois

### Estrutura sugerida

- `app/` para rotas
- `components/` para primitives e blocos reutilizaveis
- `content/` ou `data/` para separar conteudo bruto da camada visual
- `lib/` para utilitarios
- `styles/` ou `app/globals.css` para tokens globais

## O Melhor Pacote Possivel Para Este Projeto

Se a meta for "topo de linha do mercado" sem mexer no conteudo nem no mapa de paginas, o pacote recomendado e:

1. Migrar para `Next.js + TypeScript`
2. Adotar `shadcn/ui` como espinha dorsal de componentes
3. Consolidar um design system proprio com tokens semanticos
4. Extrair os conteudos das paginas do HTML cru para componentes e dados estruturados
5. Preservar todas as rotas publicas atuais usando App Router e mantendo os redirects do `vercel.json`
6. Validar cada pagina no navegador real desktop e mobile durante a migracao

Isso entrega:

- consistencia visual
- manutencao muito melhor
- responsividade mais previsivel
- base para SEO, acessibilidade e performance
- menos repeticao de CSS
- menor custo de evolucao futura

## Gap Analysis: O Que Ja Temos

- deploy funcional em Vercel
- rotas publicas bem definidas
- conteudo rico e ja consolidado
- linguagem visual parcialmente estabelecida
- alguns tokens de cor recorrentes
- varios padroes visuais repetidos que podem virar componentes
- redirects importantes ja mapeados em `vercel.json`

## Gap Analysis: O Que Falta

### Fundacao tecnica

- framework moderno de frontend
- TypeScript
- sistema de componentes
- pipeline de build
- lint/format
- estrutura de pastas para UI

### Design system

- tokens centralizados
- escala tipografica consistente
- sistema de espacamento unico
- estados interativos padronizados
- primitives reutilizaveis para cards, tabelas, links, badges, hero, callouts e navegacao

### Responsividade

- estrategia mobile-first coerente
- tratamento sistematico para tabelas extensas
- navegacao compacta em telas pequenas
- grid adaptativo padronizado

### UX e acessibilidade

- landmarks semanticos consistentes
- foco visivel
- contraste auditado
- tabelas com leitura melhor em viewport estreita
- padrao de hover/focus/active coerente

### Operacao

- validacao visual em browser
- checklist de regressao
- baseline de performance

## Recomendacao Arquitetural

### Opcao recomendada

Migracao para `Next.js` preservando cada pagina atual como rota equivalente.

Exemplo de mapeamento:

- `index.html` -> `app/page.tsx`
- `ranking.html` -> `app/ranking/page.tsx`
- `benchmarks.html` -> `app/benchmarks/page.tsx`
- paginas profundas -> uma rota por pagina

### Como preservar o conteudo sem alterar a divisao de paginas

- cada pagina continua existindo como pagina propria
- o texto continua igual
- as secoes continuam na mesma ordem
- a mudanca fica na camada de layout, componentes, tipografia, grids e responsividade

### Como evitar retrabalho

- criar primeiro os componentes-base compartilhados
- extrair tokens globais
- migrar primeiro home + uma pagina complexa
- consolidar padroes
- so depois migrar o restante em lote

## Componentes que o Projeto Claramente Precisa

- `PageShell`
- `HeroSection`
- `SectionCard`
- `MetricCard`
- `Callout`
- `Badge`
- `JumpLinkGrid`
- `DataTable`
- `LinkPill`
- `TopNav` ou `PageHeader`
- `FooterMeta`

## Dependencias Recomendadas

Minimo recomendado:

- `next`
- `react`
- `react-dom`
- `typescript`
- `tailwindcss`
- `shadcn`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `eslint`
- `prettier`

Adicionais uteis:

- `lucide-react`
- `@tailwindcss/typography`
- `zod` se quisermos estruturar conteudo com validacao

## O Que Eu Recomendo Fazer Primeiro

### Fase 1

- scaffold de `Next.js + TypeScript + Tailwind`
- preservar deploy em Vercel
- manter redirects existentes
- criar tokens e primitives base

### Fase 2

- migrar `index`
- migrar `ranking`
- migrar `benchmarks`

Essas tres paginas definem quase todos os padroes reutilizaveis do projeto.

### Fase 3

- migrar paginas profundas em lote
- consolidar componentes repetidos
- revisar responsividade no navegador

### Fase 4

- polimento de acessibilidade, performance e consistencia visual

## Decisao Final

Para este projeto, a melhor stack nao e continuar em HTML estatico puro.

A melhor stack para uma refatoracao frontend premium, mantendo conteudo e divisao de paginas, e:

- `Next.js`
- `React`
- `TypeScript`
- `Tailwind CSS`
- `shadcn/ui`
- design tokens proprios
- validacao com Browser Use
- deploy na Vercel

Resumo direto:

- o projeto ja tem conteudo forte e rotas claras
- falta quase toda a fundacao moderna de frontend
- a melhor evolucao e migrar para uma arquitetura componentizada e tipada
- a migracao deve preservar paginas e textos, mudando apenas a camada de apresentacao e manutencao

## Atualizacao de Pesquisa Externa (2026-04-29)

Depois de comparar sinais locais com web oficial, GitHub e comunidade, a recomendacao ficou mais refinada.

### O que apareceu com mais forca

#### Fundacao de codigo

O eixo mais recorrente para projetos que querem frontend bonito mas ainda profissional continua sendo:

- `Next.js`
- `TypeScript`
- `Tailwind CSS`
- `shadcn/ui`

Motivos recorrentes:

- velocidade alta para construir
- ownership real dos componentes
- customizacao forte sem ficar preso a um kit fechado
- ecossistema enorme de blocos e extensoes

#### Direcao visual por IA

Para evitar frontend generico, a melhor referencia encontrada foi a linha `frontend-design` da Anthropic.

Ela existe tanto como plugin oficial no ecossistema do Claude Code quanto em adaptacoes abertas para outros agentes. A funcao dela nao e substituir a stack, e sim impor direcao estetica clara e reduzir "AI slop".

#### Ferramentas de geracao visual

As ferramentas mais citadas para gerar UI visualmente atraente ou acelerar exploracao foram:

- `v0`
- `Figma Make`
- `Bolt`
- `Lovable`

Mas a comunidade nao converge em uma unica vencedora absoluta. O padrao mais comum e:

- usar uma dessas ferramentas para exploracao visual e iteracao
- manter a base final em uma stack de codigo controlavel

### Leitura consolidada da comunidade

#### `shadcn/ui`

Foi a opcao com melhor combinacao de:

- popularidade tecnica
- flexibilidade
- suporte indireto do ecossistema
- capacidade de servir como base para design system proprio

#### `Anthropic frontend-design`

Foi a melhor pista para elevar qualidade estetica gerada por IA.

Ponto forte:

- ajuda a escolher direcao visual intencional

Limite apontado pela propria comunidade:

- tende a performar melhor em landing pages e superfices editoriais do que em interfaces densas, se usado sozinho

#### `v0`

Muito forte para gerar UI em stack moderna e iterar com `Design Mode`, principalmente quando a base ja conversa com Tailwind e design tokens.

Limite percebido na comunidade:

- sozinho nem sempre entrega o melhor gosto visual
- funciona melhor quando ja existe direcao visual ou design system

#### `Figma Make`

Muito promissor quando a fase de exploracao visual precisa ser mais forte que a fase de codigo.

Ponto forte:

- bom para explorar e refinar high fidelity prototypes
- encaixa bem quando existe biblioteca visual ou contexto de design

#### `Bolt` e `Lovable`

Aparecem bastante em comparativos e em feedback de comunidade como ferramentas fortes para gerar apps e frontends bonitos rapidamente.

Mas para este projeto especifico existe um ponto importante:

- elas sao boas para acelerar criacao
- porem a stack final do projeto ainda se beneficia mais de uma base controlada em `Next.js + shadcn/ui`

### Melhor stack final para este projeto

Se o objetivo for "melhor stack possivel" com equilibrio entre beleza, manutencao, controle e responsividade, a recomendacao final deixa de ser "so Vercel" e passa a ser:

#### Core stack

- `Next.js`
- `React`
- `TypeScript`
- `Tailwind CSS`
- `shadcn/ui`

#### Camada de design

- principios da skill `frontend-design` da Anthropic
- design tokens proprios
- tipografia e composicao decididas de forma intencional, nao deixadas no padrao do modelo

#### Camada de inspiracao / aceleracao

- `v0` para exploracao de componentes e blocos
- `Figma Make` quando quisermos estudar linguagem visual antes da implementacao

#### Camada de polish opcional

- `Magic UI`
- `Aceternity UI`
- `Origin UI`

Essas libs nao devem virar a espinha dorsal inteira do projeto. Elas funcionam melhor como fonte seletiva de blocos, motion e detalhes de acabamento.

### Recomendacao mais madura

Hoje a melhor resposta para este projeto nao e:

- "usar apenas Vercel"

Nem:

- "trocar tudo por um gerador visual"

A melhor resposta e:

- base forte em `Next.js + TypeScript + Tailwind + shadcn/ui`
- direcao visual inspirada na skill `frontend-design` da Anthropic
- uso seletivo de `v0`, `Figma Make`, `Magic UI`, `Aceternity UI` e `Origin UI` para acelerar qualidade visual sem perder controle arquitetural

### Fontes consultadas nesta atualizacao

- `v0 Design Mode`
- `v0 Design Systems`
- `Figma Make`
- `Figma AI tools`
- `Anthropic Agent Skills`
- `Anthropic frontend-design plugin`
- discussões recentes em Reddit sobre `frontend-design`, `shadcn/ui`, `v0`, `Bolt` e `Lovable`
