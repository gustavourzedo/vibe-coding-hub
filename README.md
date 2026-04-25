# Hub de Agentes para Vibe Coding

Documentacao viva para comparar assinaturas, modelos, IDEs, harnesses e telemetria real de uso em workflows de vibe coding pesado.

## Entrada principal

Abra `index.html` para a home publica ou `ranking.html` para a comparacao detalhada.

Publicacao oficial:
https://vibe-coding-hub-vercel.vercel.app/

## Escopo

- Ranking de assinaturas e plataformas para um benchmark extremo baseado em uma semana real de uso pesado no Cursor.
- Paginas profundas por solucao.
- Benchmark tecnico por modelo.
- Comparativo de IDEs, apps e harnesses.
- Comparativo de orquestradores e workflows de agentes.
- Telemetria local preparada para consolidar Cursor, Codex desktop e futuras ferramentas.

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
