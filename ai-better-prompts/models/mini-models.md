# Mini models

## Papel recomendado

Mini models sao otimos para economizar quando a tarefa esta bem delimitada.

Use para:

- formatar docs
- atualizar checklist
- resumir logs curtos
- aplicar alteracao simples
- gerar comandos
- revisar ortografia/estrutura
- preparar handoff com base em fatos ja confirmados

Evite para:

- RCA sutil
- arquitetura
- divergencia entre docs e runtime
- interpretacao de screenshots importantes
- tarefas com alto custo de erro

## Como promptar

Mini models precisam de prompts fechados.

```text
Tarefa unica:
<acao>

Entrada:
<fatos>

Nao inferir alem da entrada.
Se faltar informacao, diga exatamente o que falta.

Saida:
<formato>
```

## Bom padrao

Use mini depois que o modelo forte ja decidiu.

Exemplo:

1. GLM escolhe plano.
2. MiMo implementa.
3. Mini atualiza resumo/handoff.

## Perigo

Mini barato fica caro quando erra estado.

Nunca use mini para decidir se uma feature esta validada sem evidencia objetiva.
