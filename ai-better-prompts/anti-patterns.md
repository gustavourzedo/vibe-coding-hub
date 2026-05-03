# Anti-padroes de prompt

Esta lista existe porque varios erros reais vieram de prompts que pareciam bons, mas deixavam brechas perigosas.

## 1. Pedir analise de artefato inexistente

Sintoma:

- o agente procura screenshots
- nao acha
- conclui que a feature nao existe ou nao funciona

Causa:

- o prompt pediu analise antes de pedir geracao/exercicio.

Correcao:

- "primeiro gere, depois verifique no disco, depois analise".

## 2. Usar caveman cedo demais

Sintoma:

- o agente responde curto demais
- perde nuance
- mistura implementado com validado
- interpreta errado uma instrucao sutil

Causa:

- compressao aplicada numa fase que exigia reconstrucao de contexto.

Correcao:

- usar "resposta curta, mas priorize interpretacao correta" em handoffs e retomadas.

## 3. Prompt grande sem ordem de operacao

Sintoma:

- o agente le muito
- edita antes de confirmar
- valida coisa errada
- esquece docs/state

Causa:

- prompt lista desejos, nao fluxo.

Correcao:

- transformar em passos numerados e criterios de sucesso.

## 4. "Investigue" sem limite

Sintoma:

- consumo alto
- loops de tool
- muitas leituras sem conclusao

Causa:

- investigacao sem pergunta fechada.

Correcao:

- perguntar "qual e o primeiro bloqueio real?" ou "qual menor etapa segura?".

## 5. Confiar em build como validacao completa

Sintoma:

- build passa
- runtime real nao abre app, nao clica, nao ve tela, nao gera artifact

Causa:

- sucesso tecnico confundido com sucesso funcional.

Correcao:

- exigir evidencia runtime: log + artefato + observacao visual quando aplicavel.

## 6. Misturar estado antigo com estado atual

Sintoma:

- o agente defende conclusao velha
- ignora arquivo atualizado
- repete plano antigo

Causa:

- thread longa demais ou contexto contaminado.

Correcao:

- nova thread com "nao reutilize conclusoes anteriores; revalide pelo codigo atual".

## 7. Pedir maximo trabalho sem travas

Sintoma:

- refactor lateral
- diffs grandes
- risco em projeto pesado

Causa:

- "faca tudo" sem escopo e criterio.

Correcao:

- "maximo trabalho util dentro desta etapa; sem refactor fora do escopo".

## 8. Esquecer estado vivo

Sintoma:

- proxima thread volta ao passado
- docs dizem uma coisa, runtime outra
- agente reabre investigacao ja resolvida

Causa:

- prompt nao exigiu atualizar docs/state.

Correcao:

- sempre incluir regra: "se o estado real mudou, atualize CURRENT-STATE/plano relevante".

## 9. Tool failure virar raciocinio falso

Sintoma:

- image tool falha
- agente tenta novamente varias vezes
- depois tira conclusao parcial

Causa:

- falta de plano B.

Correcao:

- "se tool de imagem falhar, copie arquivo para local legivel ou descreva impossibilidade; nao repetir mesma tool mais de 1 vez".

## 10. Confirmacao desnecessaria

Sintoma:

- agente para para perguntar se pode seguir
- prompt gasta quota sem trabalho

Causa:

- modelo treinado para pedir permissao em tarefas ambigueas.

Correcao:

- "nao peca confirmacao intermediaria se puder continuar com seguranca; eu aviso quando quiser checkpoint".
