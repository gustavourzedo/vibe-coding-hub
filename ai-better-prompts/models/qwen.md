# Qwen / Alibaba

## Papel recomendado

Qwen entra como workhorse de throughput. Alibaba Cloud pode ser interessante quando o budget prioriza capacidade acima de maxima qualidade, mas o produto precisa ser medido na pratica.

Melhor para:

- execucao de volume
- leitura de codigo
- refactors moderados
- tasks repetitivas
- exploracao barata

Evite para:

- depender de uma unica metrica de marketing
- assumir que token plan vira automaticamente mais trabalho real
- tasks onde UX/harness instavel pode custar mais que o modelo economiza

## Como promptar

Qwen costuma render melhor com:

- escopo bem dividido
- criterios objetivos
- comandos nao interativos
- limite de investigacao

```text
Foque em throughput seguro.
Leia apenas o necessario.
Implemente o menor patch.
Rode validacao objetiva.
Atualize state se confirmado.
```

## Alibaba como plano

Separar:

- modelo Qwen
- produto Alibaba Cloud
- harness usado
- billing/token plan

Um bom modelo em uma UX ruim pode render menos que um modelo medio em harness bom.

## Regra de teste

Antes de escalar plano:

1. escolher 3 tasks reais
2. medir credits/tokens por task
3. medir tempo ate validacao
4. medir retrabalho
5. comparar com MiMo/OpenCode/GLM
