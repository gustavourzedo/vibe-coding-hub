# Trabalho agentico com estado vivo

Projetos grandes precisam de memoria versionada. Chat nao e arquitetura. Arquivos de estado sao.

## Regra principal

Se o agente alterou a realidade do projeto, ele deve atualizar a documentacao que representa essa realidade.

Isso vale para:

- codigo implementado
- feature exercitada
- validacao runtime
- bloqueio descoberto
- comando novo
- pre-condicao nova
- mudanca de estrategia

## Arquivos de estado comuns

Em repos grandes, procurar primeiro:

- `AGENTS.md`
- `docs/CURRENT-STATE.md`
- `docs/CONTEXT.md`
- `docs/SPRINT-*.md`
- `docs/*PLAN*.md`
- `docs/*HANDOFF*.md`
- `README.md`
- scripts de validacao
- manifests/logs runtime

## Padrao de escrita

Use linguagem de estado, nao narrativa.

Bom:

```text
Snapshot runner: implementado e exercitado em 2026-04-29.
Validacao: `manifest.jsonl`, `LATEST.png` e `shot_*.png` gerados em runtime-snapshots.
Bloqueio: bot ainda nao progride no jogo; tela atual mostra launcher/anuncio do LDPlayer.
Proximo comando: ...
```

Ruim:

```text
Parece que agora funciona.
```

## Matriz de status

Use estes rotulos:

| Status | Significado |
| --- | --- |
| Implementado | Codigo existe |
| Exercitado | Fluxo rodou |
| Validado | Evidencia objetiva confirma |
| Bloqueado | Primeiro bloqueio real identificado |
| Inferido | Hipotese plausivel, ainda sem evidencia |
| Obsoleto | Doc/estado antigo nao representa mais o runtime |

## Quando atualizar docs

Atualize imediatamente quando:

- um comando novo passa a ser o caminho oficial
- um teste confirma uma hipotese central
- uma feature antes teorica e exercitada
- um artefato novo vira fonte de verdade
- uma premissa anterior cai
- o proximo passo muda

Nao atualize como "sucesso" quando:

- so buildou
- so compilou
- so leu codigo
- so inferiu pelo log
- nao rodou a feature com os flags necessarios

## Prompt padrao para estado

```text
Antes de finalizar, atualize os arquivos de estado relevantes.

Nao reescreva a historia inteira.
Inclua apenas o delta real desta sessao.

Obrigatorio separar:
- implementado
- exercitado
- validado
- bloqueado
- proximo passo

Se nao houver mudanca real de estado, diga que docs/state nao precisaram mudar.
```

## Fonte de verdade no KLG Bots

No KLG Bots, a documentacao nao e acessorio. Ela e parte da arquitetura agentica do projeto.

Prompt minimo:

```text
Leia AGENTS.md e docs/CURRENT-STATE.md antes de editar.
Se a validacao mudar o estado real, atualize CURRENT-STATE e o sprint relevante.
Nao deixe a proxima IA depender do historico do chat.
```
