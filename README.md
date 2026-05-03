# Hub de Agentes para Vibe Coding

Documentacao viva para comparar assinaturas, modelos, IDEs, harnesses e telemetria real de uso em workflows de vibe coding pesado.

## Entrada principal

Abra `index.html` para a home publica ou `ranking.html` para a comparacao detalhada.

Guia operacional de prompts:
`ai-better-prompts.html`

Plano de refatoracao frontend:
`docs/FRONTEND_REFACTOR_PLAN.md`

Estrategia de descoberta por IA:
`docs/AI_DISCOVERY_STRATEGY.md`

Contexto/state para outra IA continuar:
`docs/PROJECT_CONTEXT_STATE.md`

Prompt de handoff para outra IDE/agente:
`docs/NEXT_AGENT_PROMPT.md`

MVP visual da refatoracao:
`frontend-mvp/`

O MVP ja cobre as paginas canonicas listadas em `ai-content-map.json`, renderizando o conteudo HTML existente dentro do novo shell Next.js.

```powershell
cd frontend-mvp
npm install
npm run dev -- --hostname 127.0.0.1 --port 3100
```

Publicacao oficial:
https://vibe-coding-hub-vercel.vercel.app/

## Escopo

- Ranking de assinaturas e plataformas para um benchmark extremo baseado em uma semana real de uso pesado no Cursor.
- Paginas profundas por solucao.
- Benchmark tecnico por modelo.
- Comparativo de IDEs, apps e harnesses.
- Comparativo de orquestradores e workflows de agentes.
- Telemetria local preparada para consolidar Cursor, Codex desktop e futuras ferramentas.
- Receita de prompts agenticos em `ai-better-prompts/`, com guias por fase, modelo e IDE.

## Publicacao

Este projeto e estatico. Pode ser publicado diretamente em Vercel, GitHub Pages ou qualquer host estatico.

Para Vercel, nao ha build step obrigatorio: o `index.html` agora e a home publica do projeto.

URL publicada:
https://vibe-coding-hub-vercel.vercel.app/

### Git + Vercel

O projeto esta configurado para deploy estatico na Vercel:

```powershell
npm install
npm run deploy:preview
npm run deploy
```

Arquivos de trabalho local, estudos `.md`, scripts e telemetria estao excluidos do deploy via `.vercelignore`.
Para publicar via GitHub, configure um remote e envie a branch `master`:

```powershell
git remote add origin <url-do-repositorio>
git push -u origin master
```

## Atualizacao

Revalidar sempre que mudar:

- preco
- quota
- modelo disponivel
- documentacao oficial
- telemetria local de uso real
