# OpenAI - Aprendizados consolidados

> Data de compilacao: **24/04/2026**
> Escopo: consolidar o que foi aprendido sobre os planos da OpenAI, limites, Codex, beneficios e leitura pratica para o estudo de assinatura de vibe coding.

---

## 1. Planos pessoais

### ChatGPT Plus

- Preco: **US$ 20/mes**
- Foco: uso pessoal mais leve
- Beneficios principais:
  - prioridade em horarios de pico
  - acesso a limites mais altos dos modelos GPT
  - voz, imagens, uploads, analise de arquivos, Deep Research e Custom GPTs
- Observacao importante:
  - **API nao esta incluida**
  - uso da API e cobrado separadamente

Fonte:
- [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus%3F.eps)

### ChatGPT Pro

Hoje existem dois tiers pessoais de Pro:

- **Pro US$ 100**
- **Pro US$ 200**

Leitura oficial:

- `Pro $100`: **5x** os limites do Plus
- `Pro $200`: **20x** os limites do Plus

Beneficios gerais:

- acesso aos modelos Pro
- Codex
- Deep Research
- geracao de imagem
- Memory
- uploads

O help center tambem diz que o Pro oferece:

- acesso ilimitado a GPT-5 e modelos legados, sujeito a abuse guardrails

Fonte:
- [About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro%253F.docx)

---

## 2. Promocoes e beneficios vigentes em 24/04/2026

### Pro US$ 100

A OpenAI informa:

- **10x Codex usage vs. Plus ate 31/05/2026**

Isso aparece como promocao temporaria.

### Pro US$ 200

A OpenAI informa:

- **20x Plus ongoing**

Na mesma pagina aparece tambem um trecho falando em:

- `25x higher Codex 5-hour limits through March 31`

Como hoje e **24/04/2026**, esse trecho parece **temporalmente inconsistente**. A leitura mais segura e:

- considerar **20x ongoing** como o beneficio confiavel
- **nao** contar com os `25x` sem validar dentro da propria conta/tela de usage

Fonte:
- [About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro%253F.docx)

---

## 3. Como os limites da OpenAI funcionam na pratica

Um dos principais aprendizados foi:

### a OpenAI nao usa uma unica regra de limite para tudo

Ela mistura:

- janelas de `3 horas`
- janelas de `5 horas`
- limites `semanais`
- e, em alguns casos, `unlimited subject to abuse guardrails`

Ou seja:

### nao da para assumir que o multiplicador do plano e identico em todas as janelas e recursos

---

## 4. Limites de ChatGPT normal

Na documentacao mais atual encontrada:

### GPT-5.3 Instant

- `Free`: ate **10 mensagens a cada 5 horas**
- `Plus/Go`: ate **160 mensagens a cada 3 horas**

### GPT-5.5 Thinking

- `Plus/Business`: ate **3.000 mensagens por semana**
- `Go`: ate **10 mensagens a cada 5 horas** quando Thinking esta habilitado

### Pro / Business

A OpenAI descreve:

- acesso `unlimited` aos modelos GPT-5
- sujeito a abuse guardrails

### Contexto

- `GPT-5.3 Instant`
  - `Plus / Business`: **32K**
  - `Pro / Enterprise`: **128K**
- `GPT-5.5 Thinking`
  - `todos os planos pagos`: **256K**
  - `Pro tier`: **400K** ao selecionar Pro manualmente

Fontes:
- [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-5-1-in-chatgpt)
- [GPT-5.3 and GPT-5.5 in ChatGPT mirror entry](https://help.openai.com/en/articles/11909943-gpt-52-in-chatgpt%3Futm_source)

---

## 5. Codex na OpenAI

### Mudanca importante em abril de 2026

Em **02/04/2026**, a OpenAI mudou o Codex para um formato de cobranca/medicao baseado em:

- input tokens
- cached input tokens
- output tokens

Ou seja:

### Codex deixou de ser comunicado principalmente por "mensagens" e passou a ser comunicado por creditos/token usage

Fonte:
- [Codex rate card](https://help.openai.com/en/articles/20001106-codex-rate-card)

### Modelos listados no Codex rate card

Na pagina oficial consultada em 24/04/2026:

- `GPT-5.5`
- `GPT-5.4`
- `GPT-5.4-Mini`
- `GPT-5.3-Codex`
- `GPT-5.2`
- `GPT-5.3-Codex-Spark` como research preview

### Leitura de custo

A propria OpenAI diz:

- em media, Codex custa **~US$ 100 a US$ 200 por developer por mes**

Mas isso varia com:

- modelo
- fast mode
- numero de instancias
- automations
- mix de input, cache e output

Fonte:
- [Codex rate card](https://help.openai.com/en/articles/20001106-codex-rate-card)

---

## 6. Limites do Codex por plano

O material oficial da OpenAI nao esta perfeitamente uniforme, mas o que ficou claro foi:

### Codex usa janelas de 5 horas e limite semanal compartilhado

Na pagina de uso do Codex com ChatGPT:

- `Plus`:
  - cerca de **30-150 local messages** por `5 horas`
  - ou **5-40 cloud tasks** por `5 horas`
  - com `shared weekly limit`

- `Pro`:
  - cerca de **300-1.500 local messages** por `5 horas`
  - ou **50-400 cloud tasks** por `5 horas`
  - com `shared weekly limit`

Tambem aparece a nota:

- `For a limited time, enjoy 2x Codex rate limits with Pro subscriptions`

Fonte:
- [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan/)

### Leitura pratica

Para o estudo, isso significa:

- o `Plus` aguenta algumas sessoes focadas por semana
- o `Pro` aguenta trabalho real multi-projeto muito melhor
- mas o comportamento exato depende fortemente do tamanho das tasks e do contexto carregado

---

## 7. Business e Enterprise

### ChatGPT Business

Na pagina oficial de pricing consultada:

- preco exibido: **US$ 20 / usuario / mes**
- mensagens e interacoes: **unlimited**, subject to abuse guardrails

A OpenAI tambem informa:

- desde **02/04/2026**, Business passou a ter dois tipos de assento:
  - assento ChatGPT normal
  - assento Codex-only

No Business:

- usuarios possuem limites por assento
- se a workspace comprar credits, o usuario pode continuar usando recursos avancados ao exceder o limite incluido

### Enterprise

- preco sob contato comercial
- shared credit pool no contrato
- sem per-seat caps por padrao
- admins podem aplicar spend controls por grupo

Fontes:
- [ChatGPT Business pricing](https://openai.com/business/chatgpt-pricing/)
- [Flexible pricing for Business / Enterprise / Edu](https://help.openai.com/en/articles/11487671-flexible-pricing-for-chatgpt-enterprise-plans)

---

## 8. O que isso significa para o estudo de vibe coding

### 1. Plus e claramente insuficiente para uso extremo

A propria telemetria pratica observada no seu caso reforcou isso:

- consumo muito rapido da janela curta
- e gasto perceptivel da semanal em pouco tempo

### 2. Pro melhora bastante, mas nao elimina opacidade

O `Pro $100` e o `Pro $200` aumentam muito a folga, mas:

- a OpenAI mistura limites relativos, abuse guardrails e credit metering
- o que torna a previsibilidade pior do que alguns planos concorrentes

### 3. Codex forte nao significa assinatura ideal para seu objetivo

Mesmo que o produto seja tecnicamente forte:

- seu objetivo e `minimo custo chegando perto do benchmark Opus-heavy`
- e nem sempre a OpenAI vence em custo/previsibilidade nesse recorte

### 4. A documentacao da OpenAI esta correta no geral, mas nem sempre perfeitamente consistente

O principal exemplo foi:

- trecho de `25x through March 31` ainda aparecendo numa pagina consultada em **24/04/2026**

Entao a manutencao futura deste estudo deve sempre:

- registrar data absoluta
- e desconfiar de beneficios promocionais com data contraditoria

---

## 9. Resumo rapido

Se eu tivesse que resumir o aprendizado sobre a OpenAI em poucas linhas:

- `Plus` e barato, mas insuficiente para seu uso pesado
- `Pro $100` entrega salto real de folga e esta com promo relevante de Codex
- `Pro $200` e o tier pessoal forte da OpenAI, com 20x Plus como referencia segura
- `Codex` hoje e medido por token/credit, nao mais por mensagens medias
- a OpenAI mistura limites por `3h`, `5h`, `semana` e `unlimited with guardrails`
- por isso a leitura operacional exige mais cuidado do que parece num primeiro olhar

---

## 10. Fontes oficiais usadas

- [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus%3F.eps)
- [About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro%253F.docx)
- [Codex rate card](https://help.openai.com/en/articles/20001106-codex-rate-card)
- [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan/)
- [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-5-1-in-chatgpt)
- [ChatGPT Business pricing](https://openai.com/business/chatgpt-pricing/)
- [Flexible pricing for Business / Enterprise / Edu](https://help.openai.com/en/articles/11487671-flexible-pricing-for-chatgpt-enterprise-plans)
