# Recomendação revisada de assinatura para uso Opus-heavy real

> Data: **24/04/2026**  
> Este documento substitui a leitura simplificada baseada em exports dominados por `composer-2`.  
> A nova análise parte da validação local em `C:\Users\gusta\.cursor\ai-tracking\ai-code-tracking.db`, que mostrou uso predominante de variantes de **Claude Opus 4.7** e **Claude 4.6 Opus** nos projetos mais pesados.

---

## 1. O que mudou em relação à recomendação anterior

O ponto central da revisão é simples:

### o benchmark correto não é `composer-2`

Os artefatos locais mostraram que, nos projetos mais relevantes da semana:

- **KLG Bots** foi dominado por `claude-opus-4-7-xhigh`
- **GnBots** teve uso relevante de `claude-4.6-opus-max`, `claude-opus-4-7-xhigh` e `gpt-5.3-codex-xhigh`
- o projeto de vídeo **ClipForge** dentro da sua `.cursor` foi fortemente dominado por `claude-opus-4-7-xhigh` e `claude-opus-4-7-max`

Isso muda o estudo de forma importante:

- soluções que pareciam boas para “coding agent barato” continuam podendo ser boas;
- mas deixam de ser boas candidatas para **substituir o seu padrão real**;
- o filtro agora precisa ser: **quanto essa assinatura aguenta um workflow frontier-heavy de verdade**.

---

## 2. Benchmark real de uso que a assinatura precisa suportar

### 2.1 Padrão de qualidade

O caso de referência não é “vibe coding casual”.

É:

- multi-projeto
- alto uso de agentes
- muitas ferramentas
- longas sessões
- contexto amplo
- modelo topo (`Opus 4.7 xhigh`)

### 2.2 Padrão de consumo

Mantém-se como referência:

- **US$ 977,07** no ciclo observado no painel Anthropic
- ordem de grandeza compatível com:
  - **~83M a ~89M tokens equivalentes/semana** se o preço efetivo correspondeu a Opus 4.6/4.7
  - **~28M a ~30M tokens equivalentes/semana** se o preço efetivo correspondeu a Opus 4/4.1

Como a validação local confirmou uso pesado de Opus 4.7/4.6, a leitura conservadora correta é:

### o estudo deve ser calibrado para um caso de uso frontier-heavy real, não para um caso mediano

---

## 3. Critério de decisão revisado

Para o seu caso, a assinatura ideal precisa ser julgada por quatro eixos:

### A. Qualidade técnica real

Quão perto ela chega de Opus em:

- refactor multi-arquivo
- diagnóstico difícil
- consistência em sessões longas
- entendimento de código legado

### B. Liberdade de uso real

Quão longe dá para ir antes de:

- travar por janela de 5h
- estourar limite semanal
- sofrer cap oculto por request
- cair em throttling severo

### C. Transparência da quota

O plano mede:

- tokens?
- requests?
- sessões?
- chamadas internas do agente?
- uncached tokens?

Quanto mais indireta a métrica, pior para o seu caso.

### D. Custo total

Não é só “preço de entrada”.  
É o preço para chegar **o mais perto possível** do seu uso real.

---

## 4. Reanálise profunda por solução

## 4.1 GLM Coding Plan

### Fontes oficiais

- <https://docs.z.ai/devpack/overview>
- <https://docs.z.ai/devpack/faq>
- <https://docs.z.ai/devpack/transition>
- <https://docs.z.ai/guides/llm/glm-5.1>

### Como a empresa mede a quota

Oficialmente:

- limite por **5 horas**
- limite por **semana**
- “one prompt refers to one query”
- cada query costuma acionar **15–20 invocações internas**

Planos publicados:

- **Lite**: ~80 prompts / 5h, ~400 / semana
- **Pro**: ~400 prompts / 5h, ~2.000 / semana
- **Max**: ~1.600 prompts / 5h, ~8.000 / semana

Modelos:

- `GLM-5.1`
- `GLM-5-Turbo`
- `GLM-4.7`
- `GLM-4.5-Air`

Regra crítica:

- `GLM-5.1` e `GLM-5-Turbo` consomem **3x no pico** e **2x fora do pico**
- promoção de **1x fora do pico até o fim de abril**

### O que a comunidade conseguiu medir

Sinais comunitários úteis:

- a base `jia.je` documenta testes que associaram o GLM plan a comportamento compatível com limites equivalentes por tokens, e não apenas “requests mágicos”
- `zai-quota` e `opencode-quota` mostram que existe ecossistema de tooling prático para ler quota real
- benchmark independente `akitaonrails/llm-coding-benchmark` posicionou **GLM 5.1 (Z.ai)** como o runner-up mais próximo entre alternativas flat, enquanto outras opções baratas falharam mais em integração real

Fontes comunitárias:

- <https://jia.je/kb/en/software/coding_plan.html>
- <https://pypi.org/project/zai-quota/>
- <https://github.com/slkiser/opencode-quota>
- <https://github.com/akitaonrails/llm-coding-benchmark>

### Risco real para o seu caso

Pontos fortes:

- é a assinatura com mecânica mais próxima do seu benchmark
- a própria Z.ai posiciona `GLM-5.1` como alinhado a `Claude Opus 4.6`
- é a solução flat com maior combinação de qualidade alta + quota compreensível

Pontos fracos:

- o melhor modelo (`GLM-5.1`) é “caro em quota” por multiplicador
- o plano Pro pode apertar exatamente no tipo de burst que você faz
- há relatos de qualidade boa, mas ainda abaixo de Opus em confiabilidade fina

### Veredito

**Continua sendo a melhor assinatura única para o seu caso.**

Mas com uma nuance revisada:

### para o seu benchmark, o plano certo é `Max`, não `Pro`

---

## 4.2 Kimi Code / Kimi Membership

### Fontes oficiais

- <https://www.kimi.com/code/docs/en/>
- <https://www.kimi.com/code/docs/en/kimi-code/faq.html>
- <https://www.kimi.com/coding/docs/en/benefits.html>
- <https://www.kimi.com/resources/kimi-k2-6-pricing>

### Como a empresa mede a quota

Oficialmente:

- Kimi Code quota refresca a cada **7 dias**
- há uma janela de **5 horas**
- o sistema fala em algo como **300–1.200 requests por janela de 5 horas**
- os devices e API keys compartilham a mesma quota
- a assinatura principal tem níveis com `Kimi Code credits` em multiplicadores:
  - Moderato: `1x`
  - Allegretto: `5x`
  - Allegro: `15x`
  - Vivace: `30x`

Importante:

- o benefício é oficialmente descrito como voltado a **personal development**
- para cenários enterprise, a própria Moonshot empurra para a plataforma pay-as-you-go

### O que a comunidade observou

Os relatos comunitários são consistentes em três pontos:

1. a quota semanal pode acabar **muito mais rápido do que parece**;
2. o comportamento depende fortemente do **cache hit rate**;
3. em workflows estilo Claude Code, há relatos de cache muito ruim e esgotamento acelerado.

Sinal mais importante para o seu caso:

- em discussão pública de usuários, houve relato de que `Claude Code + Kimi coding` pode queimar a weekly limit “mais de 10x mais rápido”, com cache efetivo de cerca de **6%**

Outros sinais:

- há usuários elogiando a inteligência do Kimi
- mas também vários reclamando que a weekly limit drena rápido demais para valer o preço

Fontes comunitárias:

- <https://jia.je/kb/en/software/coding_plan.html>
- <https://www.reddit.com/r/kimi/comments/1rcarfl/kimi_coding_plan_weekly_limits/>
- <https://www.reddit.com/r/kimi/comments/1qtof14/kimi_coding_plan_usage_limits/>
- <https://github.com/duanyytop/agents-radar/issues/485>

### Risco real para o seu caso

Esse é o ponto decisivo:

### Kimi fica muito pior quando o seu benchmark é `Opus-heavy em agente com contexto longo`

Se o seu uso fosse:

- mais curto,
- mais fragmentado,
- mais próximo do CLI nativo,
- com altíssimo reaproveitamento de contexto,

ele poderia subir de posição.

Mas para o seu caso específico:

- sessões longas,
- contexto amplo,
- multi-projeto,
- padrão próximo de Claude Code / Cursor agent,

o risco de drenar quota rápido demais é alto.

### Veredito

**Não recomendo Kimi como assinatura principal para o seu caso.**

Pode valer como experimento secundário, não como aposta central.

---

## 4.3 Alibaba Cloud Bailian Coding Plan

### Fontes oficiais

- <https://help.aliyun.com/zh/model-studio/coding-plan>
- <https://help.aliyun.com/zh/model-studio/coding-plan-faq>
- <https://help.aliyun.com/zh/model-studio/text-generation-model>

### Como a empresa mede a quota

O Pro oficial publica:

- **¥200/mês**
- **6.000 requests por 5 horas**
- **45.000 requests por semana**
- **90.000 requests por mês**

E a própria documentação explica algo crucial:

- cada pergunta consome quota de acordo com o número real de **model calls**
- tarefa simples: cerca de **5–10**
- tarefa complexa: **10–30+**

Além disso:

- o reset de 5h é **rolling**
- o semanal reseta toda segunda-feira
- o mensal reseta na data mensal da assinatura

Modelos disponíveis no plano:

- `qwen3.6-plus`
- `glm-5`
- `kimi-k2.5`
- `MiniMax-M2.5`
- entre outros

### O que a comunidade observou

O maior achado comunitário relevante não é sobre qualidade, e sim sobre **limite real de contexto**:

- há relato técnico consistente de Coding Plan da Alibaba falhando por volta de **169.984 tokens** de input, embora a camada de marketing dos modelos sugira contextos maiores

Fonte:

- <https://github.com/NousResearch/hermes-agent/issues/2220>

Também é útil observar que plugins de quota como `opencode-quota` já suportam o plano e codificam oficialmente os tiers `lite` e `pro`, o que sugere demanda real e uso prático.

Fonte:

- <https://github.com/slkiser/opencode-quota>

### Dimensionamento para o seu caso

Usando a própria explicação oficial da Alibaba:

- se o seu workload extremo gira em algo como **~295 prompts/semana**
- e cada prompt complexo consome **10–30 model calls**

então sua carga semanal ficaria, em tese, entre:

- **~2.950** e **~8.850 calls/semana**

Isso está bem abaixo do teto oficial de **45.000/semana**.

No burst de 80 prompts em sessão pesada:

- **800 a 2.400 calls**

Ainda abaixo das **6.000 calls / 5h**.

### O que trava essa solução

Não é quota.  
É incerteza de qualidade e de comportamento real em agentic coding pesado.

Hoje, a leitura honesta é:

- **na matemática da quota, Alibaba parece aguentar**
- **na matemática da qualidade Opus-like, ainda falta prova**

### Veredito

**Alibaba Pro virou o melhor dark horse de custo/volume do estudo.**

Mas ainda não é a recomendação principal porque:

- a equivalência qualitativa ao seu benchmark não está suficientemente provada;
- há sinais de contexto efetivo menor do que o marketing sugere;
- a documentação e a comunidade ainda dão menos segurança do que GLM.

### Interpretação prática

Se você quiser testar **uma aposta agressiva de custo baixo**, Alibaba Pro merece piloto real.  
Se você quiser **comprar com mais confiança**, ainda fica atrás do GLM Max.

---

## 4.4 MiniMax Token Plan

### Fontes oficiais

- <https://platform.minimax.io/docs/token-plan/intro>
- <https://platform.minimax.io/docs/token-plan/faq>
- <https://platform.minimax.io/docs/guides/pricing-token-plan>

### Como a empresa mede a quota

Standard:

- Starter: **US$ 10/mês**, **1.500 requests/5h**
- Plus: **US$ 20/mês**, **4.500 requests/5h**
- Max: **US$ 50/mês**, **15.000 requests/5h**

Highspeed:

- Plus-Highspeed: **US$ 40/mês**
- Max-Highspeed: **US$ 80/mês**
- Ultra-Highspeed: **US$ 150/mês**

Lógica:

- texto é medido por **request count**
- reset principal é **rolling 5-hour**
- o FAQ trata o plano como adequado para uso individual interativo, e recomenda pay-as-you-go para produção

### O que a comunidade observou

Os sinais comunitários úteis são mais de integração/estabilidade do que de quota:

- alguns usuários relatam interrupções em execução de plano
- há relatos de problemas de integração com subagentes em certas stacks

Fontes:

- <https://github.com/code-yeongyu/oh-my-openagent/issues/3198>
- <https://github.com/openclaw/openclaw/issues/16277>
- <https://github.com/akitaonrails/llm-coding-benchmark>

Além disso, no benchmark prático citado:

- `MiniMax M2.7` completou estruturalmente
- mas falhou em uso real de API/gem, ficando atrás de GLM na confiabilidade prática

### Risco real para o seu caso

MiniMax parece ótimo no papel quando você olha só para requests.

Mas o seu benchmark não é “muitos requests baratos”.
É:

- precisão
- consistência
- sessões pesadas
- confiança de execução

E aqui MiniMax ainda não mostrou sinais suficientes para liderar.

### Veredito

**Não recomendo MiniMax como plano principal para substituir o seu uso Opus-heavy.**

Pode ser bom como plano barato para throughput, não como substituto principal de qualidade.

---

## 4.5 OpenAI ChatGPT Pro / Codex

### Fontes oficiais

- <https://help.openai.com/en/articles/20001106-codex-rate-card>
- <https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro>
- <https://help.openai.com/en/articles/11369540-codex-in-chatgpt>

### Como a empresa mede a quota

O sistema mudou recentemente.

Agora:

- Codex usa **pricing por token/credit**
- não mais o esquema antigo puramente por mensagem

Planos:

- Plus **US$ 20**
- Pro **US$ 100**
- Pro **US$ 200**

Posicionamento oficial:

- Pro 100: **5x** Plus, com promo de **10x Codex até 31/05/2026**
- Pro 200: **20x** Plus

Outro dado oficial importante:

- OpenAI afirma que, em média, Codex custa **~US$ 100–200 por developer/mês**

### O que a comunidade observou

Aqui os sinais comunitários são fortes e negativos para o seu caso:

- usuários de Plus relatando consumo de **75% da janela de 5h em ~20 minutos**
- percepção de “rebalanceamento” e redução prática de limite
- ao mesmo tempo, elogios ao fato de o Codex não interromper a sessão no meio do task quando chega em 0%

Fontes:

- <https://www.reddit.com/r/codex/comments/1sgzy01/codex_on_chatgpt_plus_burned_75_of_5h_in_20_mins/>
- <https://www.reddit.com/r/codex/comments/1soaxyk/i_love_that_codex_doesnt_stop_at_0_limit/>

### Risco real para o seu caso

Codex pode ser tecnicamente forte, mas falha em três coisas para este estudo:

1. a quota efetiva é percebida como volátil;
2. o workflow é diferente do padrão Cursor-heavy que você está tentando reproduzir;
3. o preço já entra na zona em que deixa de ser uma alternativa “mínimo custo”.

Além disso, a documentação oficial traz hoje uma inconsistência temporal:

- a página menciona benefício temporário “through March 31” mesmo em **24/04/2026**

Isso não invalida o produto, mas reduz a confiança na clareza operacional da oferta.

### Veredito

**Não recomendo ChatGPT Pro / Codex como solução principal para o seu objetivo de custo mínimo com proximidade máxima ao Opus.**

É mais uma alternativa premium concorrente do que uma solução econômica ótima para você.

---

## 4.6 GitHub Copilot Pro / Pro+

### Fontes oficiais

- <https://docs.github.com/en/copilot/get-started/plans>
- <https://docs.github.com/en/copilot/concepts/billing/billing-for-individuals>
- <https://docs.github.com/en/copilot/concepts/billing/copilot-requests>

### Como a empresa mede a quota

Planos individuais:

- **Pro**: **US$ 10/mês**
- **Pro+**: **US$ 39/mês**

Premium requests:

- Pro: **300/mês**
- Pro+: **1.500/mês**

Reset:

- todo dia **1º do mês às 00:00:00 UTC**

Consumo:

- Copilot Chat: **1 premium request por prompt do usuário**, multiplicado pela taxa do modelo
- Copilot cloud agent: **1 premium request por sessão**, multiplicado pela taxa do modelo
- steering comments também consomem premium requests

Extra:

- request adicional custa **US$ 0,04**

Ponto relevante:

- novas assinaturas de Pro/Pro+ estão oficialmente **pausadas desde 20/04/2026**

### O que isso significa para o seu caso

Mesmo ignorando a pausa:

- a métrica por premium request é mais indireta do que o seu caso tolera;
- modelos premium consomem multiplicador;
- 1.500 requests/mês parece muito até você aplicar agent mode + modelos topo.

### Veredito

**Copilot Pro+ não é a melhor resposta para o seu benchmark.**

É interessante como ferramenta complementar, não como substituto central do seu uso Opus-heavy.

---

## 5. Ranking revisado

### 1. GLM Coding Plan Max

**Melhor assinatura única para o seu caso.**

Por quê:

- é a solução flat mais próxima do benchmark real validado;
- a mecânica é suficientemente compreensível;
- a qualidade esperada é a mais defensável entre as opções econômicas;
- o custo ainda é drasticamente menor do que seu gasto Anthropic observado.

### 2. Alibaba Bailian Coding Plan Pro

**Melhor aposta agressiva de custo/volume.**

Por quê:

- a matemática oficial de calls sugere que o plano pode aguentar seu volume;
- o preço oficial é muito baixo para o que entrega;
- o ponto fraco não é quota, é confiança qualitativa.

### 3. GLM Coding Plan Pro

**Boa opção se você conscientemente aceitar risco maior de travar.**

Para o seu benchmark extremo, não é a escolha mais segura.

### 4. Kimi Code

**Promissor, mas mal encaixado no seu workflow exato.**

O risco de weekly limit evaporar rápido demais em fluxo estilo Claude Code/Cursor é alto.

### 5. MiniMax Token Plan

**Bom throughput no papel, pouca confiança como substituto principal de Opus.**

### 6. GitHub Copilot Pro+

**Interessante, mas request-based demais e ainda com novas assinaturas pausadas.**

### 7. ChatGPT Pro / Codex

**Produto forte, mas não o melhor custo-proximidade para este objetivo.**

---

## 6. Recomendação final

## Recomendação principal

Se você quer decidir hoje, com o menor risco de erro:

### **assine GLM Coding Plan Max**

Esse é o melhor compromisso entre:

- qualidade técnica
- liberdade de uso
- previsibilidade de quota
- custo muito menor que Anthropic direta

---

## 7. Recomendação estratégica

Se você quiser maximizar custo-benefício sem perder rigor:

### Estratégia A — conservadora

- Assinar **GLM Max**
- Usar `GLM-4.7` como default
- Reservar `GLM-5.1` para tarefas realmente críticas

### Estratégia B — exploratória

- Assinar **Alibaba Pro** por 1 mês como piloto
- Testar 3 workloads reais:
  - KLG Bots
  - GnBots
  - ClipForge
- Medir:
  - qualidade de output
  - quantas calls por task
  - comportamento com contexto grande
  - estabilidade em agentic coding

Se Alibaba surpreender bem, ele pode virar o melhor plano de custo do estudo.  
Se não, o fallback natural continua sendo GLM Max.

---

## 8. Resposta executiva

Depois da validação local do uso real em Opus:

### a recomendação principal continua sendo `GLM Coding Plan Max`

Mas agora com mais convicção.

E a principal mudança da revisão é esta:

### `Alibaba Coding Plan Pro` virou o melhor candidato de baixo custo para piloto real, enquanto `Kimi` caiu de posição para o seu caso específico.

Se eu tivesse que te orientar de forma direta:

1. **Compra segura:** `GLM Max`
2. **Compra experimental de altíssimo valor:** `Alibaba Pro`
3. **Não usar como plano principal para esse benchmark:** `Kimi`, `MiniMax`, `Copilot Pro+`, `ChatGPT Pro/Codex`

---

## 9. Fontes principais

### Oficiais

- <https://docs.z.ai/devpack/overview>
- <https://docs.z.ai/devpack/faq>
- <https://docs.z.ai/devpack/transition>
- <https://docs.z.ai/guides/llm/glm-5.1>
- <https://www.kimi.com/code/docs/en/>
- <https://www.kimi.com/code/docs/en/kimi-code/faq.html>
- <https://www.kimi.com/coding/docs/en/benefits.html>
- <https://www.kimi.com/resources/kimi-k2-6-pricing>
- <https://help.aliyun.com/zh/model-studio/coding-plan>
- <https://help.aliyun.com/zh/model-studio/coding-plan-faq>
- <https://help.aliyun.com/zh/model-studio/text-generation-model>
- <https://platform.minimax.io/docs/token-plan/intro>
- <https://platform.minimax.io/docs/token-plan/faq>
- <https://platform.minimax.io/docs/guides/pricing-token-plan>
- <https://help.openai.com/en/articles/20001106-codex-rate-card>
- <https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro>
- <https://docs.github.com/en/copilot/get-started/plans>
- <https://docs.github.com/en/copilot/concepts/billing/billing-for-individuals>
- <https://docs.github.com/en/copilot/concepts/billing/copilot-requests>

### Comunitárias / empíricas

- <https://jia.je/kb/en/software/coding_plan.html>
- <https://pypi.org/project/zai-quota/>
- <https://github.com/slkiser/opencode-quota>
- <https://github.com/akitaonrails/llm-coding-benchmark>
- <https://github.com/NousResearch/hermes-agent/issues/2220>
- <https://github.com/duanyytop/agents-radar/issues/485>
- <https://www.reddit.com/r/kimi/comments/1rcarfl/kimi_coding_plan_weekly_limits/>
- <https://www.reddit.com/r/kimi/comments/1qtof14/kimi_coding_plan_usage_limits/>
- <https://www.reddit.com/r/codex/comments/1sgzy01/codex_on_chatgpt_plus_burned_75_of_5h_in_20_mins/>
- <https://www.reddit.com/r/codex/comments/1soaxyk/i_love_that_codex_doesnt_stop_at_0_limit/>
