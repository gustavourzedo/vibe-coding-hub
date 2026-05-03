# AI Better Prompts

> Receita operacional para prompts melhores em vibe coding pesado.
> Nao e colecao de frases bonitas. E um manual para reduzir erro, retrabalho, loop, consumo inutil e falsa conclusao.

## Tese central

Prompt bom para coding agentico nao e "pedido grande".
Prompt bom e **estado certo + tarefa certa + ordem certa + criterio de sucesso certo**.

Nas ultimas semanas, o maior aprendizado foi este:

- modelo forte com prompt ruim queima quota e cria falsa confianca
- modelo medio com prompt bem faseado pode entregar mais trabalho real
- contexto antigo contamina conclusao
- artefato nao gerado nao pode ser analisado
- log sem evidencia visual pode enganar
- `caveman` economiza, mas ligado cedo demais pode destruir nuance

## Fonte de verdade

Use esta ordem:

1. **Estado do projeto**: `AGENTS.md`, `CURRENT-STATE.md`, planos de sprint, logs e artefatos.
2. **Codigo e runtime atuais**: arquivos reais, comandos reais, saida real.
3. **Docs oficiais do fornecedor**: planos, limites, suporte, endpoints, tools.
4. **Comunidade**: comportamento pratico, bugs, consumo, UX, estabilidade.
5. **Inferencia do agente**: util, mas nunca acima de evidencia real.

## Principio das fases

Nao misture fases quando a tarefa for grande.

Use fases separadas:

- **Retomada**: reconstruir estado, sem editar.
- **Decisao**: escolher menor proxima etapa segura.
- **Execucao**: implementar e validar.
- **Observabilidade**: gerar artefatos e confirmar realidade.
- **Estado**: atualizar docs/state depois da mudanca real.
- **Handoff**: deixar proxima sessao pronta.

Se a fase mudou, considere thread nova.

## Estrutura canonica de prompt

Um bom prompt operacional deve conter:

1. **Objetivo**
2. **Fatos confirmados**
3. **Pre-condicoes**
4. **Arquivos ou artefatos obrigatorios**
5. **Ordem exata de trabalho**
6. **O que nao fazer**
7. **Criterio de sucesso**
8. **Formato da resposta**
9. **Regra de atualizacao de estado**

Template:

```text
Objetivo:
<o que queremos confirmar ou mudar>

Fatos confirmados:
- <fato 1>
- <fato 2>

Pre-condicoes:
- <o que precisa existir antes>
- <o que ainda nao pode ser assumido>

Leia primeiro:
- <arquivo de estado>
- <arquivo de codigo>
- <log/manifest>

Tarefa:
1. confirmar <X>
2. executar <Y>
3. verificar <Z>
4. validar com evidencia real
5. atualizar estado se o estado real mudou

Regras:
- nao assumir artefatos antes de gerar
- nao expandir escopo para refactor
- se falhar, identificar primeiro bloqueio real
- separar claramente implementado, exercitado e validado

Criterio de sucesso:
- <evidencia objetiva>

Resposta final:
- comando executado
- arquivos alterados
- evidencia validada
- bloqueio real
- docs/state atualizados
- proximo passo
```

## O erro que virou regra

Erro recente:

1. Implementamos snapshots no runner.
2. O prompt seguinte pediu para analisar snapshots.
3. Mas a execucao anterior nao tinha rodado com `--snapshot-seconds`.
4. O agente concluiu que snapshots nao existiam.

Regra nova:

> Antes de pedir analise de artefato, o prompt deve incluir a etapa de gerar ou confirmar que o artefato foi gerado naquela execucao.

Formato correto:

```text
Primeiro exercite a feature com os novos flags.
Depois verifique se os artefatos foram gerados.
So depois analise os artefatos.
```

## Caveman

`caveman` e ferramenta de economia, nao modo universal.

Use `caveman full` quando:

- o estado ja esta claro
- a etapa e operacional
- a tarefa e curta
- queremos resposta compacta
- nao ha ambiguidade importante

Nao use `caveman full` quando:

- a thread esta com contexto contaminado
- o agente precisa reconstruir estado
- ha diferenca sutil entre implementado e validado
- estamos corrigindo premissa errada
- o prompt precisa de interpretacao cuidadosa

Substituto melhor em handoff:

```text
Resposta curta e objetiva, mas priorize interpretacao correta sobre compressao.
```

## Thread nova

Abra thread nova quando:

- mudou de fase
- o agente repetiu plano duas vezes
- houve erro de tool/API
- o agente defendeu uma premissa antiga
- a tarefa passou de analise para execucao real
- o contexto ja esta caro ou confuso

Ao abrir thread nova, leve um resumo minimo:

```text
Nao reutilize conclusoes da thread anterior.
Use apenas codigo atual, arquivos de estado e artefatos reais.

Fatos confirmados:
- ...

Tarefa atual:
- ...
```

## Estado vivo

Em projetos pesados, arquivos de estado sao arquitetura.

Regra:

- se o codigo mudou comportamento, atualize docs/state
- se o runtime confirmou algo novo, atualize docs/state
- se uma feature foi implementada mas nao exercitada, documente exatamente assim
- nao registrar "validado" quando so foi "implementado"

Termos padronizados:

- **Implementado**: o codigo existe.
- **Exercitado**: o codigo foi executado no fluxo real.
- **Validado**: existe evidencia objetiva de sucesso.
- **Observado visualmente**: imagem/screenshot confirma o estado real.

## Prompt por fase

### Retomada

```text
Leia primeiro os arquivos de estado.
Nao edite nada.

Reconstrua:
- objetivo atual
- ultimo ponto confirmado
- divergencias entre docs, codigo e runtime
- menor proxima etapa segura
```

### Decisao

```text
Escolha a menor proxima etapa segura.

Criterios:
- menor custo de validacao
- menor risco
- maior poder de confirmar ou invalidar a hipotese principal

Nao edite ainda.
```

### Execucao

```text
Execute a etapa escolhida de ponta a ponta.

Inclua:
- menor alteracao segura
- validacao minima real
- diagnostico do primeiro bloqueio se falhar
- atualizacao de estado se o estado real mudar
```

### Observabilidade

```text
Nao confie so no log.

Primeiro gere ou confirme os artefatos.
Depois leia manifest/log.
Depois analise imagens recentes.
Conclua com base em evidencia real.
```

### Handoff

```text
Atualize os arquivos de estado.

Registre:
- o que foi implementado
- o que foi exercitado
- o que foi validado
- evidencias
- proximo comando exato
- riscos e bloqueios
```

## Checklist antes de enviar prompt grande

- O agente sabe qual fase estamos?
- O prompt diferencia implementado, exercitado e validado?
- Os arquivos de estado foram citados?
- O prompt exige atualizar estado se algo mudar?
- O prompt evita assumir artefato inexistente?
- O criterio de sucesso e objetivo?
- A resposta final esta estruturada?
- `caveman` esta apropriado para esta fase?
- O modelo escolhido combina com a tarefa?

## Documentos especificos

- `general-recipe.md`
- `templates.md`
- `anti-patterns.md`
- `stateful-agent-work.md`
- `model-selection.md`
- `models/glm.md`
- `models/mimo.md`
- `models/kimi.md`
- `models/deepseek.md`
- `models/qwen.md`
- `models/chatgpt-codex.md`
- `models/anthropic-opus-sonnet.md`
- `models/mini-models.md`
- `ides/opencode.md`
- `ides/zed.md`

## Pagina no hub

A versao navegavel desta receita esta em:

- `../ai-better-prompts.html`
