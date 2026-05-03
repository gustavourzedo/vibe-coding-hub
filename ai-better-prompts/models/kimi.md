# Kimi

## Papel recomendado

Kimi e candidato forte para coding longo e mass edits, mas deve ser medido com cuidado em consumo real.

Melhor para:

- alteracoes grandes com escopo claro
- leitura longa de repo
- tarefas de implementacao com muitos arquivos
- refactors quando o plano ja esta definido

Evite para:

- exploracao aberta sem limite
- loops de terminal sem objetivo fechado
- validacao visual se o harness nao suporta bem imagens

## Como promptar

Kimi tende a ser melhor quando o prompt delimita arquivos e resultado esperado.

```text
Escopo:
- pode alterar: <paths>
- nao alterar: <paths>

Tarefa:
1. implementar
2. rodar validacao
3. corrigir apenas falhas diretamente relacionadas
4. atualizar docs/state se mudar comportamento

Nao refatorar fora do escopo.
```

## Economia

Para evitar burn:

- divida mass edits por modulo
- peca patch menor antes de liberar escopo amplo
- use docs/state para evitar releitura de repo inteiro
- finalize thread apos validacao

## Quando usar modelo mais forte

Use GLM/Opus/ChatGPT para revisar plano antes de pedir mass edit ao Kimi se:

- refactor cruza arquitetura
- ha risco de quebrar runtime
- docs/state estao inconsistentes
