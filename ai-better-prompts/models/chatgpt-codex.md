# ChatGPT / Codex / OpenAI

## Papel recomendado

Use para trabalho tecnico equilibrado, revisao de codigo, implementacao guiada, explicacoes e execucao com boa disciplina de ferramentas.

Melhor para:

- pairing tecnico
- revisao de PR/codigo
- implementacao incremental
- organizar docs e estrategia
- depurar com shell e arquivos locais
- criar prompts e playbooks

Evite para:

- deixar thread infinita sem atualizar state
- pedir pesquisa atual sem validar fontes oficiais
- tratar resposta textual como runtime

## Como promptar

Codex rende bem quando voce entrega:

- objetivo claro
- repo atual
- permissao para executar
- validacao esperada
- regra de nao reverter mudancas alheias

```text
Implemente e valide.
Preserve mudancas existentes.
Use menor patch seguro.
Rode testes relevantes.
Explique apenas o essencial no final.
```

## Quando usar

Use como camada central quando:

- precisa de cuidado com arquivos reais
- quer que o agente execute, nao apenas aconselhe
- precisa de equilibrio entre raciocinio e engenharia

## Prompt para revisao

```text
Revise com foco em bugs, regressao comportamental, riscos e testes ausentes.
Findings primeiro, ordenados por severidade, com arquivo/linha.
Se nao houver findings, diga isso e cite riscos residuais.
```
