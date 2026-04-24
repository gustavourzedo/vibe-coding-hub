# Recomendação de assinatura para vibe coding extremo

> Data de consolidação: **23/04/2026**  
> Baseado em:  
> - `contexto_handoff_agente_estudo_cursor_anthropic_2026.md`  
> - `briefing_planos_ai_coding_2026.md`  
> - validações locais no PC  
> - revalidação em documentação oficial acessível em 23/04/2026

---

## 1. Pergunta que este documento responde

Qual assinatura ou combinação mínima de assinaturas chega **mais perto possível** do cenário vivido com **Claude Opus 4.7 xhigh** em uso pesado no Cursor, com **o menor custo possível**, aceitando que **não haverá equivalência perfeita**.

---

## 2. O que ficou validado

### 2.1 Consumo extremo real

- O estudo parte de um ciclo com **US$ 977,07** acumulados no painel Anthropic.
- A faixa mais relevante para análise continua sendo aproximadamente **18/04/2026 a 24/04/2026**, com pico forte em **22/04/2026** e **23/04/2026**.
- A ordem de grandeza continua compatível com algo entre:
  - **~83M a ~89M tokens equivalentes** na semana se o faturamento refletia **Claude Opus 4.6 / 4.7**
  - **~28M a ~30M tokens equivalentes** se refletia **Claude Opus 4 / 4.1**
- Como seu requisito explícito é usar o extremo como referência, o estudo deve considerar o cenário **mais exigente**, não o caso médio.

### 2.2 O que os dados locais do Cursor mostram

Validação local feita em `C:\Users\gusta\AppData\Roaming\Cursor\User\globalStorage\state.vscdb`:

- `membershipType = enterprise`
- `isEnterprise = true`
- `hasTokenBasedPricing = true`
- `hasAutoSpillover = false`

Leitura prática:

- o bloqueio do Cursor não é uma boa referência para decidir a melhor assinatura de coding;
- ele está fortemente acoplado à política da organização e ao modo como o Cursor Enterprise controla uso;
- então a decisão deve ser tomada olhando para **qualidade, compatibilidade e previsibilidade do substituto**, não tentando reproduzir a política do Cursor.

### 2.3 O que segue sem validação empírica

- a taxa real de cache Anthropic no período extremo;
- o modelo Anthropic exato faturado em cada dia;
- a equivalência real entre seu padrão de sessão e as cotas de Kimi, Alibaba e MiniMax em produção.

Essas lacunas importam porque elas afetam o quanto um plano “barato” realmente sustentaria seu uso.

---

## 3. O que foi revalidado na web hoje

### 3.1 Anthropic

Prompt caching oficial continua expondo:

- `cache_creation_input_tokens`
- `cache_read_input_tokens`
- `input_tokens`

Fonte:  
- <https://platform.claude.com/docs/en/build-with-claude/prompt-caching>

Os preços de caching acessíveis hoje também confirmam:

- **Claude Opus 4.6**: **US$ 5 / MTok input**, **US$ 25 / MTok output**
- **Claude Opus 4 / 4.1**: **US$ 15 / MTok input**, **US$ 75 / MTok output**

Isso mantém válida a faixa de conversão usada no estudo.

### 3.2 GLM / Z.ai

Documentação oficial acessível hoje confirma:

- planos **Lite / Pro / Max**
- limites aproximados por **5 horas** e por **semana**
- todos os planos com **GLM-5.1, GLM-5-Turbo, GLM-4.7 e GLM-4.5-Air**
- **GLM-5.1 / 5-Turbo** com consumo **3x em pico** e **2x fora do pico**
- benefício promocional de **1x fora do pico até o fim de abril**
- default de mapeamento do “Opus” para **GLM-4.7**

Fontes:

- <https://docs.z.ai/devpack/overview>
- <https://docs.z.ai/devpack/transition>
- <https://docs.z.ai/guides/llm/glm-5.1>

Preços atuais exibidos nos documentos oficiais acessíveis:

- **Lite: US$ 18/mês**
- **Pro: US$ 72/mês**
- **Max: US$ 160/mês**

### 3.3 Kimi Code

A documentação oficial acessível hoje confirma:

- Kimi Code é benefício da assinatura Kimi;
- pode ser usado em ferramentas de coding compatíveis com endpoint próprio;
- a quota é compartilhada entre CLI, VS Code e integrações;
- existe janela de **5 horas** e quota de **7 dias**;
- a página oficial acessível fala em algo como **300 a 1.200 requests por 5 horas**, mas sem publicar de forma clara no HTML estático uma tabela completa de equivalência por plano no mesmo nível de detalhe do GLM.

Fontes:

- <https://www.kimi.com/code/docs/en/>
- <https://www.kimi.com/code/docs/en/kimi-code/faq.html>
- <https://www.kimi.com/code/en>

Conclusão prática: **Kimi melhorou de evidência**, mas ainda continua **menos auditável** para o seu caso extremo do que GLM.

### 3.4 Alibaba Coding Plan

A documentação oficial acessível hoje confirma:

- **¥200/mês** no Pro
- **6.000 requests por 5 horas**
- **45.000 requests por semana**
- **90.000 requests por mês**
- modelos suportados incluindo `qwen3.6-plus`, `kimi-k2.5`, `glm-5`, `MiniMax-M2.5`

Fontes:

- <https://help.aliyun.com/zh/model-studio/coding-plan>
- <https://help.aliyun.com/zh/model-studio/coding-plan-faq>
- <https://help.aliyun.com/zh/model-studio/text-generation-model>

Ponto importante: continua sendo um sistema fortemente baseado em **requests**, não em tokens totais equivalentes ao seu gasto Anthropic.

### 3.5 MiniMax

A documentação oficial acessível hoje confirma:

- Starter / Plus / Max
- **1.500 / 4.500 / 15.000 requests por 5 horas**
- medição principal de texto por **request count**

Fontes:

- <https://platform.minimax.io/docs/token-plan/intro>
- <https://platform.minimax.io/docs/token-plan/faq>

Isso mantém o mesmo problema analítico: muita folga em requests no papel, pouca visibilidade sobre equivalência de qualidade e peso por sessão.

### 3.6 OpenAI Codex / ChatGPT Pro

As fontes oficiais acessíveis hoje confirmam:

- Codex agora usa estrutura **token-based**
- o help center diz que o custo médio é **~US$ 100–200/dev/mês**
- **Pro US$ 100** = 5x Plus, com promoção de **10x Codex até 31/05/2026**
- **Pro US$ 200** = 20x Plus

Fontes:

- <https://help.openai.com/en/articles/20001106-codex-rate-card>
- <https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro>

Observação importante:

- o artigo do Pro US$ 200 mantém no texto uma menção a limite temporário “through March 31”, apesar de hoje ser **23/04/2026**;
- isso sugere que há pelo menos alguma inconsistência editorial nessa página;
- então OpenAI continua válida como opção real, mas não como a opção mais transparente para esta decisão específica.

---

## 4. O que muda na recomendação original

### 4.1 O que ficou mais forte

A tese de que **GLM Max** é a melhor assinatura “single-plan” para o seu caso ficou **mais forte**, não mais fraca.

Motivos:

- continua sendo a opção mais próxima do seu caso extremo com **métrica de consumo mais inteligível**;
- a própria Z.ai posiciona **GLM-5.1** como alinhado a **Claude Opus 4.6** em capacidade geral e coding;
- o plano **Max** é o único, entre os planos flat estudados, que ainda parece confortável quando você modela sessões realmente brutais;
- o preço continua muito abaixo do seu custo real observado na Anthropic.

### 4.2 O que ficou mais fraco

A chance de um plano ultra barato “resolver sozinho” ficou **menos defensável**.

Isso vale especialmente para:

- **Kimi**: promissor, mas ainda com pouca clareza pública sobre equivalência real por plano no extremo;
- **Alibaba**: bom em requests, pouca prova de comportamento real no seu cenário;
- **MiniMax**: grande folga nominal, mas request-based e com menos evidência de proximidade qualitativa ao Opus no seu fluxo.

---

## 5. Recomendação final

## Recomendação principal

Se a regra for:

- **uma única assinatura**
- **menor custo possível**
- **mais perto possível do Opus 4.7 xhigh**
- **sem depender de hipótese otimista de cache**

então a melhor escolha hoje continua sendo:

### **GLM Coding Plan Max — US$ 160/mês**

Por quê:

- é o melhor equilíbrio entre **qualidade técnica**, **folga operacional** e **previsibilidade de custo**;
- o modelo topo do stack, **GLM-5.1**, é o candidato mais crível entre os planos flat acessíveis para se aproximar do que você quer;
- o plano **Max** absorve bem melhor dias extremos do que o **Pro**, especialmente depois que a promoção de 1x off-peak acabar;
- ele é drasticamente mais barato do que continuar no padrão Anthropic observado.

### Tradução simples

Se você quer parar de pagar custo explosivo e ainda manter sensação de “modelo de topo para coding”, **GLM Max** é hoje a compra mais racional.

---

## 6. Segunda melhor estratégia

Se você aceitar uma estratégia de duas camadas, a solução tecnicamente mais inteligente fica:

### **GLM Max + um fallback pago por uso com teto rígido**

Exemplo de fallback:

- Anthropic direta com limite duro baixo
- OpenRouter com orçamento baixo e uso só para casos excepcionais

Objetivo:

- usar **GLM Max** em 90% a 98% do volume;
- reservar o “quase-Opus real” apenas para tarefas realmente críticas:
  - refactor delicado
  - diagnóstico difícil
  - revisão arquitetural final
  - bugs de comportamento muito sutil

Essa solução não é a assinatura mais barata em sentido absoluto, mas é a que mais se aproxima da sua experiência anterior sem reabrir a porta para outro mês de custo absurdo.

---

## 7. O que eu não recomendo como plano principal

### Kimi

Não recomendo como plano principal para o seu caso extremo hoje porque:

- a mecânica ainda está menos transparente para auditoria;
- a qualidade parece promissora, mas a previsibilidade para o seu pico real continua inferior à do GLM;
- pode virar uma ótima segunda aposta de teste, não a assinatura principal.

### Alibaba Coding Plan

Não recomendo como plano principal porque:

- request-based demais para o seu caso;
- pouca clareza sobre o comportamento em sessões realmente pesadas;
- menor confiança de equivalência qualitativa ao seu padrão Opus-heavy.

### MiniMax

Não recomendo como plano principal pelos mesmos motivos:

- limite em requests;
- pouca prova de equivalência com seu caso extremo;
- mais promissor como experimento paralelo do que como aposta central.

### ChatGPT Pro / Codex

Não recomendo como substituto principal do seu cenário atual porque:

- a lógica de crédito e token do Codex mudou recentemente;
- a documentação pública ainda transmite algumas ambiguidades temporais;
- é forte como produto, mas não me parece o melhor custo-proximidade para o que você descreveu.

---

## 8. Decisão prática de compra

Se você quiser decidir hoje sem prolongar o estudo:

1. **Assine GLM Max**
2. Use **GLM-5.1** para tarefas complexas
3. Use **GLM-4.7** como modelo padrão para rotina
4. Evite desperdiçar quota de topo em tarefas triviais

Se você quiser minimizar ainda mais o gasto:

1. Teste **GLM Pro** primeiro
2. Suba para **GLM Max** se perceber sufoco real nas suas janelas de 5h

Mas, sendo fiel ao seu requisito de uso extremo, a resposta honesta é:

### **eu não começaria no Pro; eu começaria no Max**

O Pro faz sentido para um perfil “heavy, mas disciplinado”.  
Seu caso descrito é “heavy de verdade, acima do comum, usando extremo como parâmetro”. Nesse enquadramento, o **Max** é a escolha mais segura.

---

## 9. Próximas melhorias do estudo

Se quisermos elevar ainda mais a precisão depois da assinatura, as próximas medições ideais são:

1. exportar ou fotografar o uso Anthropic com os campos de `cache_read_input_tokens`, `cache_creation_input_tokens` e `input_tokens`;
2. rodar um teste controlado de 24h a 72h no GLM Max;
3. medir quantas sessões suas realmente exigem “qualidade Opus” versus quantas só exigem bom throughput agentic.

Esses três passos transformam a recomendação atual de “muito bem sustentada” para “quase fechada empiricamente”.

---

## 10. Resposta curta

Se for para escolher **uma assinatura só**, hoje:

### **GLM Coding Plan Max (US$ 160/mês)**  

É a opção com melhor relação entre:

- proximidade técnica ao que você quer,
- compatibilidade com workflow de coding agent,
- e redução brutal de custo frente ao seu padrão atual.

Se for para buscar a solução **mais próxima possível do Opus**, e não apenas a mais barata:

### **GLM Max como base + fallback pago por uso com teto rígido**

Isso te dá o melhor equilíbrio entre liberdade, qualidade e controle de gasto.
