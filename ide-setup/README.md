# IDE Setup Recovery Kit

Este diretório guarda o estado desejado das IDEs e harnesses usados no ambiente local.

Objetivo:

- recuperar configuracoes se algo for perdido
- lembrar decisoes arquiteturais do setup
- manter templates sanitizados, sem segredos
- servir de base para evolucao futura, principalmente do OpenCode

## IDEs cobertas

- `opencode/`
- `zed/`
- `cursor/`
- `codex/`

## Regras

- Nunca salvar chaves reais aqui.
- Usar placeholders e variaveis de ambiente.
- Quando uma IDE virar parte critica do fluxo, atualizar este kit no mesmo dia.
- Se a configuracao global no computador mudar de forma relevante, refletir aqui.

## Variaveis de ambiente esperadas

- `Z_AI_API_KEY`
- `Z_AI_MODE`
- `XIAOMI_MIMO_API_KEY`

## Principio atual do ambiente

- `OpenCode` = IDE principal / harness principal
- `Zed` = IDE secundaria forte, boa para comparacao e alguns fluxos
- `Cursor` = forte para Figma, frontend e diagramas
- `Codex` = agente de execucao e revisao mais critica
