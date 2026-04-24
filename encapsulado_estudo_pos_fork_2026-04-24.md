# Encapsulado do estudo pos-fork

> Data de compilacao: **24/04/2026**
> Escopo: consolidar, em um unico documento, os aprendizados produzidos nesta fase do estudo apos o fork da analise, incluindo uso real do Cursor, recomendacoes de assinatura, OpenAI, GPT-5.5, Codex, OpenCode Go e os principais sinais da comunidade.

---

## 1. O que este documento encapsula

Este arquivo consolida principalmente os seguintes artefatos recentes:

- [validacao_local_cursor_modelos_projetos_2026-04-24.md](</G:/Work/Up Cloud/projetos/VibeCoding - Study Case/validacao_local_cursor_modelos_projetos_2026-04-24.md>)
- [recomendacao_assinatura_final_opus_heavy_2026-04-24.md](</G:/Work/Up Cloud/projetos/VibeCoding - Study Case/recomendacao_assinatura_final_opus_heavy_2026-04-24.md>)
- [openai_aprendizados_2026-04-24.md](</G:/Work/Up Cloud/projetos/VibeCoding - Study Case/openai_aprendizados_2026-04-24.md>)
- [openai_gpt55_eficiencia_custos_2026-04-24.md](</G:/Work/Up Cloud/projetos/VibeCoding - Study Case/openai_gpt55_eficiencia_custos_2026-04-24.md>)

Tambem incorpora os ultimos aprendizados desta conversa sobre:

- `OpenCode Go`
- `Ollama Max`
- `Chutes`
- limites práticos do `ChatGPT Plus`
- relacao entre `GPT-5.4`, `GPT-5.5`, `Codex` e `credits`
- inferencias da comunidade sobre valor relativo das assinaturas da OpenAI

---

## 2. Regra de leitura deste documento

Para nao misturar niveis de confianca diferentes, este encapsulado usa tres camadas:

### A. Fato oficial

Informacao diretamente ancorada em documentacao oficial do fornecedor.

### B. Inferencia forte

Leitura que nao foi publicada literalmente pelo fornecedor, mas que fica bem sustentada por:

- documentos oficiais
- telemetria local
- e varios sinais praticos convergentes

### C. Estimativa / hipotese

Leitura util para decisao, mas ainda sem prova oficial ou benchmark independente robusto.

---

## 3. Benchmark real do estudo

O maior aprendizado desta fase foi:

### o benchmark correto nao e uso casual e nem uso dominado por `composer-2`

Fonte local principal:

- `C:\Users\gusta\.cursor\ai-tracking\ai-code-tracking.db`

Janela pesada estudada:

- `117.033` eventos rastreados em 7 dias

Distribuicao principal por modelo nessa janela:

- `claude-opus-4-7-xhigh`: `74.171` (`63,4%`)
- `claude-opus-4-7-high`: `11.542` (`9,9%`)
- `claude-4.6-opus-max`: `7.336` (`6,3%`)
- `composer-2`: `6.715` (`5,7%`)
- `claude-opus-4-7-thinking-high`: `6.557` (`5,6%`)
- `claude-opus-4-7-max`: `6.256` (`5,3%`)
- `gpt-5.3-codex-xhigh`: `1.533` (`1,3%`)

Leitura consolidada:

### `94,3%` do uso rastreado na janela pesada foi frontier-heavy

Isso muda tudo:

- o plano ideal nao pode ser avaliado so por volume bruto
- ele precisa ser comparado com um padrao real de alta exigencia tecnica

---

## 4. Recomendacao principal de assinatura

### Fato oficial + inferencia forte

Depois de recalibrar o estudo com uso local real, documentacao oficial e sinais da comunidade:

### a melhor assinatura unica continua sendo `GLM Coding Plan Max`

Razoes principais:

- melhor equilibrio entre `capacidade`, `qualidade tecnica` e `previsibilidade`
- custo muito menor do que reproduzir o mesmo nivel de volume em oferta premium frontier mais cara
- mais defensavel como substituto principal do seu uso real do que opcoes mais baratas, mas menos consistentes

### Segunda melhor rota

### `Alibaba Coding Plan Pro`

Leitura consolidada:

- a quota oficial parece aguentar bem o seu volume
- o risco principal nao e volume
- o risco principal e `qualidade tecnica`, `contexto efetivo` e `consistencia`

### Melhor MVP barato para medicao do uso real

### `OpenCode Go`

Leitura consolidada:

- excelente para descobrir seu padrao de uso diario real
- bom para testar modelos curados e varios providers com custo inicial baixissimo
- melhor como instrumento de medicao e plano complementar do que como plano principal definitivo

---

## 5. OpenCode Go - o que ficou claro

### Fato oficial

`OpenCode Go` e:

- uma **assinatura**
- com `US$ 5` no primeiro mes
- depois `US$ 10/mes`

Mas ele nao e um flat plan puro.

Ele funciona como:

- assinatura com uso incluido
- e fallback opcional para `Zen` pay-as-you-go

### Fato oficial

Os limites do Go sao expressos em valor equivalente de uso:

- `5h`: `US$ 12`
- `semana`: `US$ 30`
- `mes`: `US$ 60`

Leitura correta:

- isso nao e "US$ 12 cobrados a parte"
- isso e o orcamento interno de uso da janela

### Inferencia forte

O melhor enquadramento do `OpenCode Go` no estudo e:

- `melhor MVP barato de dimensionamento`
- nao `melhor plano principal`

---

## 6. OpenAI - o que ficou claro

## 6.1 Planos pessoais

### Fato oficial

- `Plus`: `US$ 20/mes`
- `Pro $100`: `5x` os limites do Plus
- `Pro $200`: `20x` os limites do Plus

### Fato oficial

Promocoes e sinais em `24/04/2026`:

- `Pro $100`: `10x Codex usage vs Plus ate 31/05/2026`
- `Pro $200`: `20x Plus ongoing`

### Fato oficial com ressalva

Na mesma documentacao do Pro apareceu um trecho ainda falando em:

- `25x higher Codex 5-hour limits through March 31`

Como a data observada e **24/04/2026**, isso foi tratado como:

- possivel texto desatualizado
- **nao confiavel** para uso sem validacao adicional

---

## 6.2 Limites em ChatGPT

### Fato oficial

A OpenAI nao usa uma unica metrica para tudo.

Ela mistura:

- `3 horas`
- `5 horas`
- `semanal`
- `unlimited subject to abuse guardrails`

Exemplos oficiais:

- `Plus/Go`: ate `160 mensagens a cada 3 horas` com `GPT-5.3`
- `Plus/Business`: ate `3.000 mensagens por semana` com `GPT-5.5 Thinking`
- `Pro/Business`: acesso `unlimited` aos modelos GPT-5, sujeito a abuse guardrails

### Inferencia forte

### nao da para assumir que os multiplicadores escalam de forma identica em todas as janelas

---

## 6.3 Codex

### Fato oficial

Desde **02/04/2026**, a OpenAI mudou o `Codex` para rate card baseado em:

- input tokens
- cached input tokens
- output tokens

Hoje, a tabela nominal oficial e:

- `GPT-5.5`
  - input: `125 credits / 1M`
  - cached input: `12.5 credits / 1M`
  - output: `750 credits / 1M`

- `GPT-5.4`
  - input: `62.5 credits / 1M`
  - cached input: `6.25 credits / 1M`
  - output: `375 credits / 1M`

### Fato oficial

No `Codex`, `GPT-5.5` custa nominalmente **2x** o `GPT-5.4` na tabela de credits.

### Inferencia forte

Isso nao quer dizer que ele sempre custa 2x por tarefa resolvida.

Se ele:

- usa menos tokens totais
- faz menos retries
- chama menos tools

o custo efetivo por tarefa pode crescer menos do que a tabela nominal sugere.

---

## 7. GPT-5.5 - eficiencia

### Fato oficial

A OpenAI afirma explicitamente:

- `GPT-5.5` e "more token efficient than its predecessors"
- entende melhor a intencao da tarefa
- pensa de forma mais eficiente em hard tasks
- produz outputs mais limpos

### Fato oficial relacionado

No material de `GPT-5` para developers, a OpenAI ja havia mostrado um padrao de eficiencia:

- `22% fewer output tokens`
- `45% fewer tool calls`

comparado a `o3` em alto effort

### Inferencia forte

O melhor jeito de ler `GPT-5.5` e:

### custo por tarefa resolvida

e nao so:

### custo por token

Isso importa muito para o seu caso porque o seu uso e:

- multi-step
- tool-heavy
- agentico
- com muito contexto

---

## 8. Testes da comunidade sobre GPT-5.5 e eficiencia

## 8.1 Sinais fortes

### CodeRabbit

Resultados práticos publicados:

- `expected issue found`: `79,2% vs 58,3%`
- `precision`: `40,6% vs 27,9%`
- em outro conjunto: `65,0% vs 55,0%`
- precision: `13,2% vs 11,6%`

Leitura:

- o modelo encontrou mais problemas uteis
- com melhor signal
- e a equipe reportou menos verbosidade e menos desperdicio em agentes longos

### BenchLM / Terminal-Bench 2.0

Pontuacoes observadas:

- `GPT-5.5`: `82,7%`
- `GPT-5.3 Codex`: `77,3%`
- `GPT-5.4`: `75,1%`

Leitura:

- benchmark forte para agentic terminal work
- nao mede custo diretamente
- mas reforca por que o modelo pode render mais por tarefa

## 8.2 Melhor numero pratico encontrado

### Inferencia media, mas util

Via Artificial Analysis, repercutido em cobertura tecnica:

- `GPT-5.5` usa cerca de **40% menos tokens** do que `GPT-5.4`
- isso reduziria o aumento liquido de custo para algo como **~20%**, e nao 100%

Esse foi o numero mais concreto encontrado para leitura economica do `GPT-5.5` em tarefa pesada.

## 8.3 O que ainda falta

### Estimativa / hipotese

A comunidade ainda nao tem, de forma amplamente aceita, um benchmark aberto e reproduzivel com:

- tokens totais por tarefa pesada resolvida
- retries por tarefa
- tool calls por tarefa
- custo final por issue resolvida

Ou seja:

- ja existe um conjunto bom de sinais convergentes
- mas nao existe ainda um "benchmark definitivo" da comunidade

---

## 9. Codex - o que a comunidade conseguiu inferir sobre valor das assinaturas

## 9.1 O que e fato oficial

A OpenAI publica:

- o rate card por token/credit
- a existencia de uso incluido nos planos
- a possibilidade de comprar credits apos o limite

### O que ela nao publica com clareza

Nao encontrei um numero oficial publico claro do tipo:

- `Plus = X credits incluidos`
- `Pro = Y credits incluidos`

## 9.2 O que a comunidade sugere

### Inferencia media

O `Pro` parece valer algo como:

### `~8x Plus` em uso pratico

Esse numero veio de relatos de usuarios comparando:

- 100% de uso do Plus
- upgrade para Pro
- e relatorio de uso caindo para algo como `12%`

Isso aponta para algo perto de `8,3x`.

### Inferencia forte

Créditos avulsos parecem ter custo-beneficio pior do que o uso incluido no plano.

Padrao recorrente nos relatos:

- `Plus + credits extras` pode ficar pior do que migrar para `Pro`
- credits avulsos servem melhor para emergencia do que para plano principal

### Ancora comunitaria util

Apareceu repetidamente:

- `1.000 credits por US$ 40`

Se essa ancora estiver correta:

- `1 credit ≈ US$ 0,04`

Mas isso e ancora de comunidade, nao numero consolidado oficialmente no material aberto analisado.

### Outros dados praticos comunitarios

- tarefa simples de Codex em benchmark de usuario: `~22 credits`, equivalente a **~US$ 0,88**
- com melhor compressao/contexto:
  - `~49,5%` menos input tokens
  - `~35,6%` menos custo
- outro workflow reportou queda de **~70%** no custo por tarefa apos melhorar o contexto antes do Codex

### Leitura consolidada

### A comunidade ja consegue estimar valor relativo

Mas ainda nao consegue provar com seguranca:

- quantos credits exatos cada assinatura inclui

---

## 10. Telemetria pratica do ChatGPT Plus no seu caso

### Fato observado no seu uso real em 24/04/2026

No print compartilhado:

- `5h` restante: `24%`
- `semanal` restante: `88%`

Leitura:

- consumo de `76%` da janela curta
- consumo de `12%` da semanal

Contexto relatado:

- estudo pesado de viabilidade
- e parte de trabalho em `KLG Bots`

### Inferencia forte

Isso reforca que:

- `ChatGPT Plus` e insuficiente como plano principal para o seu padrao usual de trabalho pesado

---

## 11. Outras solucoes novas mapeadas nesta fase

## OpenCode Go

- melhor nova opcao de baixo custo
- melhor como MVP operacional / medicao de uso diario

## Ollama Max

- alternativa relevante para open-model cloud
- mais interessante para quem aceita stack mais aberto

## Chutes

- mais plataforma/infra hibrida do que coding plan puro
- por isso ficou abaixo de `OpenCode Go` no ranking

### Inferencia forte

O `Chutes` nao ficou abaixo por ser ruim.

Ficou abaixo porque:

- e menos previsivel
- e menos focado em coding agents como produto final
- e mais parecido com infra flexivel + PAYG

---

## 12. Hub HTML e documentacao viva

Nesta fase tambem foi iniciada a transformacao do estudo em documentacao viva:

- hub principal:
  - [analise_final_assinaturas_vibe_coding_2026-04-24.html](</G:/Work/Up Cloud/projetos/VibeCoding - Study Case/analise_final_assinaturas_vibe_coding_2026-04-24.html>)
- primeira pagina profunda:
  - [solucao_opencode_go_2026-04-24.html](</G:/Work/Up Cloud/projetos/VibeCoding - Study Case/solucao_opencode_go_2026-04-24.html>)

Leitura consolidada:

- o estudo deixou de ser so um memo estatico
- e passou a ser um hub navegavel de manutencao futura

---

## 13. Conclusao consolidada

Se eu resumir tudo que foi aprendido nesta fase:

### 1. Seu benchmark real e muito mais pesado do que parecia

O uso foi frontier-heavy de verdade.

### 2. A melhor assinatura unica continua sendo `GLM Coding Plan Max`

Nao porque ele vence em tudo, mas porque vence no equilibrio.

### 3. `Alibaba Coding Plan Pro` continua como o melhor piloto agressivo de custo

Quota parece aguentar. O risco e qualidade.

### 4. `OpenCode Go` entrou como a melhor nova opcao barata

Especialmente para medir seu uso diario real.

### 5. OpenAI ficou mais clara, mas ainda opaca operacionalmente

Hoje sabemos muito melhor:

- como `Plus`, `Pro`, `Codex`, `GPT-5.5` e `credits` funcionam

Mas ainda falta transparencia oficial em:

- quantos credits o plano inclui de fato

### 6. GPT-5.5 provavelmente melhora muito o rendimento real da quota

Mas isso deve ser lido como:

- menos desperdicio por tarefa
- nao necessariamente menor custo bruto por token

---

## 14. Ultima analise de consistencia

Antes de encerrar este encapsulado, a leitura final de consistencia fica assim:

## O que esta forte e confiavel

- uso local do Cursor e benchmark Opus-heavy
- rate cards e limites oficiais da OpenAI
- posicao relativa das assinaturas principais no estudo
- natureza do `OpenCode Go`
- insuficiencia do `ChatGPT Plus` para seu uso pesado

## O que esta forte, mas ainda parcialmente inferido

- `GPT-5.5` rende melhor por tarefa pesada
- `Pro` vale varios `Plus` em pratica
- credits avulsos sao um pior negocio que a assinatura

## O que ainda esta opaco

- quantidade exata de credits incluidos por assinatura OpenAI
- benchmark aberto e definitivo da comunidade para custo final por tarefa pesada resolvida

## Veredito final

### o estudo esta maduro o suficiente para decisao

Especialmente para:

- escolher plano principal
- escolher piloto barato
- e organizar a documentacao viva

### o estudo ainda nao esta "fechado matematicamente" em tudo

Especialmente no que depende de transparencia que a OpenAI nao oferece publicamente.

Isso nao invalida a recomendacao.

So significa que:

- a decisao deve distinguir claramente
  - o que e fato oficial
  - o que e inferencia forte
  - e o que ainda e estimativa

---

## 15. Proximo passo natural

Quando quiser continuar, a sequencia mais forte para a documentacao viva e:

1. pagina profunda de `GLM Coding Plan Max`
2. pagina profunda de `Alibaba Coding Plan Pro`
3. pagina profunda de `Claude Max 20x`
4. pagina profunda consolidada de `OpenAI / Codex / GPT-5.5`

