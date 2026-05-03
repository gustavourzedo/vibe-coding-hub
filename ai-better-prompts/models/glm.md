# GLM

## Papel recomendado

Use GLM como camada de precisao e decisao, nao como motor unico de volume.

Melhor para:

- retomar contexto complexo
- escolher menor proxima etapa segura
- root cause analysis
- revisar plano antes de execucao cara
- validar arquitetura e trade-offs

Evite para:

- loops longos de ferramenta
- prompts vagos de investigacao
- tarefas mecanicas
- thread muito longa com muitas leituras repetidas

## Como promptar

GLM rende melhor quando recebe:

- objetivo fechado
- fonte de verdade explicita
- criterios de sucesso objetivos
- limite claro de escopo
- pedido para separar implementado, exercitado e validado

Template:

```text
Use raciocinio cuidadoso.
Escolha a menor etapa segura.
Nao edite ainda.

Fonte de verdade:
- ...

Quero:
1. diagnostico
2. risco
3. proxima etapa
4. criterio de sucesso
```

## Economia

GLM pode consumir muito porque agentes de coding podem fazer varias chamadas internas por uma unica query. Entao o problema nao e so "numero de prompts". E o tamanho da thread, numero de tools, contexto e profundidade do loop.

Regras:

- use prompts maiores quando eles evitam varias idas e vindas
- evite deixar GLM rodando loops de validacao simples
- use thread nova quando a fase muda
- compacte o estado em docs antes de continuar
- nao use caveman full para retomada complexa

## Sinais de que deve parar

Pare e reancore se:

- ele repete plano
- defende premissa antiga
- mistura build com validacao runtime
- faz muitas leituras sem pergunta fechada
- pede confirmacao em etapa que ja estava autorizada

## Melhor combinacao

- GLM para planejamento/RCA
- MiMo/OpenCode para execucao longa
- Qwen/DeepSeek/mini para tarefas mecanicas
