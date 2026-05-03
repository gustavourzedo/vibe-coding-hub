# Receita geral para prompts melhores

Esta receita serve para qualquer LLM, IDE ou agente. Ela nasceu do uso real em projetos grandes, com repos pesados, varias IDEs, MCPs, tools, screenshots, logs, quotas e modelos com comportamentos diferentes.

O objetivo nao e escrever prompt bonito. O objetivo e reduzir erro operacional.

## Ideia central

Prompt bom e um contrato operacional.

Ele precisa dizer:

- qual estado deve ser confiado
- qual estado deve ser verificado
- qual tarefa deve ser feita agora
- qual escopo nao deve ser tocado
- qual evidencia prova sucesso
- qual documentacao precisa ser atualizada

Se algum desses itens fica implicito, o agente inventa. E quando inventa em projeto grande, normalmente inventa caro.

## A receita base

Use esta estrutura como padrao:

```text
Contexto:
<1 a 5 fatos confirmados. Nao coloque historico demais.>

Fonte de verdade:
- <arquivo de regras>
- <arquivo de estado>
- <plano/sprint/doc relevante>
- <artefato/log/manifest se existir>

Objetivo desta fase:
<uma frase clara>

Tarefa:
1. <ler/verificar antes de editar>
2. <executar ou alterar>
3. <validar>
4. <registrar resultado>

Regras:
- nao assumir artefato antes de gerar ou confirmar
- nao expandir escopo para refactor
- separar implementado, exercitado e validado
- se detectar divergencia entre doc e runtime, tratar como achado
- atualizar docs/state se o estado real mudar

Criterio de sucesso:
- <evidencia objetiva>

Resposta final:
- arquivos alterados
- comandos executados
- validacao
- estado atualizado
- proximo passo recomendado
```

## Fases certas

### 1. Retomada

Use quando o agente acabou de chegar no projeto ou quando a thread antiga ficou contaminada.

Regra: nao editar.

Saida esperada:

- objetivo atual
- onde paramos
- riscos
- menor proxima etapa segura
- arquivos que governam o trabalho

### 2. Decisao

Use quando existem varias rotas possiveis.

Regra: escolher uma etapa, nao implementar.

Criticidade:

- projetos grandes
- integracoes com runtime real
- emulador
- billing/quota
- refactors amplos

### 3. Execucao

Use quando a etapa ja esta clara.

Regra: implementar o menor delta que confirma ou invalida a hipotese.

Bom prompt de execucao nao diz "melhore tudo". Ele diz "faca esta validacao, com esta evidencia, sem refactor lateral".

### 4. Observabilidade

Use quando logs podem mentir.

Regra: gerar artefato primeiro, analisar depois.

Exemplos:

- screenshots do emulador
- manifest de snapshots
- logs com timestamp
- arquivos de saida
- video curto
- dump de estado

### 5. Estado

Use depois de mudanca real.

Regra: docs/state sao arquitetura. Atualize quando comportamento real mudou.

Nunca registrar "validado" quando so foi "implementado".

### 6. Handoff

Use no fim de uma sessao longa.

Regra: deixar a proxima thread barata.

Handoff bom economiza mais quota do que qualquer prompt curto.

## Separar implementado, exercitado e validado

Use estes termos sempre:

- **Implementado**: o codigo existe.
- **Exercitado**: o codigo foi executado no fluxo alvo.
- **Validado**: existe evidencia objetiva de sucesso.
- **Observado visualmente**: screenshot/video confirma a tela real.
- **Inferido**: o agente acredita, mas ainda nao ha evidencia suficiente.

Essa distincao evita falsas vitorias.

## Regra de artefatos

Nunca peca para o agente analisar um artefato sem antes garantir que ele existe.

Errado:

```text
Analise os snapshots recentes.
```

Certo:

```text
Primeiro rode o comando que gera snapshots.
Depois verifique se manifest, LATEST e shot_*.png existem.
So depois analise as imagens.
Se nao forem gerados, pare e diagnostique por que a feature nao foi exercitada.
```

## Regra de contexto

Mais contexto nao e sempre melhor.

Inclua contexto quando ele:

- evita repeticao de leitura cara
- fixa fatos confirmados
- define fonte de verdade
- limita escopo
- preserva decisoes arquiteturais

Remova contexto quando ele:

- conta historia demais
- mistura tentativas falhas com estado atual
- contem conclusoes antigas nao validadas
- incentiva o agente a defender uma premissa velha

## Regra de economia

Economia real nao vem so de prompt curto.

Economia real vem de:

- etapa certa
- menos retrabalho
- menos loop de tool
- menos falsa conclusao
- menos thread contaminada
- melhor escolha de modelo
- bons arquivos de estado

Prompt maior pode ser mais barato se impedir 5 prompts ruins depois.
