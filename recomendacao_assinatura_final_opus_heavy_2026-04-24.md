# Recomendacao final de assinatura para vibe coding extremo

> Data de fechamento: **24/04/2026**
> Escopo: substituir, com o menor custo possivel, um padrao real de uso pesado no Cursor dominado por variantes de Opus.

---

## 1. Resumo executivo

Depois de refazer a analise a partir do uso local do Cursor, da mecanica oficial de quotas de cada fornecedor e de relatos recorrentes da comunidade:

### a melhor assinatura unica para o seu caso continua sendo `GLM Coding Plan Max`

Ela nao e a melhor em tudo, mas e a que entrega o melhor equilibrio entre:

- qualidade tecnica suficientemente proxima do patamar frontier
- previsibilidade de quota melhor que as alternativas
- liberdade de uso muito acima dos planos mais baratos
- custo ainda muito abaixo do gasto equivalente em Anthropic direta

### a melhor aposta agressiva de custo e `Alibaba Cloud Coding Plan Pro`

Mas como **piloto**, nao como compra cega.

Na matematica de quota ele parece aguentar o seu workload. O risco principal nao e volume: e qualidade, contexto efetivo e consistencia em agentic coding pesado.

### `Kimi`, `MiniMax`, `Copilot Pro+` e `ChatGPT Pro/Codex` nao sao minha recomendacao principal para este benchmark

Cada um deles tem um problema estrutural para o seu caso:

- `Kimi`: quota semanal parece fragil demais quando o cache nao encaixa bem
- `MiniMax`: quota parece boa no papel, mas a confianca comunitaria como substituto principal de Opus ainda e fraca
- `Copilot Pro+`: premium requests + multiplicadores + pausa em novas assinaturas
- `ChatGPT Pro/Codex`: produto forte, mas nao e a rota mais barata nem a mais previsivel para reproduzir o workflow Cursor/Claude-like que voce usou

---

## 2. O benchmark correto deste estudo

O ponto mais importante desta revisao e simples:

### o benchmark nao e "coding casual"

Nem e "uso baseado em composer-2".

O benchmark real validado localmente foi:

- multi-projeto
- varias conversas pesadas em paralelo
- forte uso de agente
- longas sessoes
- contexto grande
- predominio claro de variantes de `Claude Opus`

### 2.1 Evidencia local do Cursor

Fonte principal local:

- `C:\Users\gusta\.cursor\ai-tracking\ai-code-tracking.db`

Janela observada no banco:

- de `2026-03-25 18:24:35` ate `2026-04-24 02:54:21`

Janela pesada de 7 dias mais relevante para o estudo:

- `117.033` eventos rastreados

Distribuicao por modelo nessa janela:

- `claude-opus-4-7-xhigh`: `74.171` (`63,4%`)
- `claude-opus-4-7-high`: `11.542` (`9,9%`)
- `claude-4.6-opus-max`: `7.336` (`6,3%`)
- `composer-2`: `6.715` (`5,7%`)
- `claude-opus-4-7-thinking-high`: `6.557` (`5,6%`)
- `claude-opus-4-7-max`: `6.256` (`5,3%`)
- `gpt-5.3-codex-xhigh`: `1.533` (`1,3%`)

Leitura correta:

### `94,3%` do uso rastreado na janela pesada nao foi `composer-2`

Foi frontier-heavy de verdade.

### 2.2 Evidencia por projetos relevantes

Conversas e projetos com maior peso na semana:

- `KLG Bots`: conversa com `claude-opus-4-7-xhigh = 24.871`
- `ClipForge` / workspace pessoal: conversa com `claude-opus-4-7-xhigh = 18.887`
- `GnBots`: conversa com `claude-opus-4-7-high = 10.758`
- `GnBots`: outra com `claude-4.6-opus-max = 7.336`
- `ClipForge`: conversa mista com `claude-opus-4-7-max = 6.164` e `claude-opus-4-7-xhigh = 5.632`

Isso sobe muito a barra do estudo:

- o plano escolhido precisa ser comparado com um workflow **Opus-heavy**
- nao com um plano "baratinho que aguenta muita chamada"

---

## 3. Como vou julgar as assinaturas

Para o seu caso, a assinatura ideal precisa se sustentar em 4 eixos:

### A. Qualidade tecnica real

Quao perto chega de Opus em:

- refactor multi-arquivo
- depuracao dificil
- sessoes longas
- codigo legado
- uso de agente com varias ferramentas

### B. Liberdade de uso real

Quao longe vai antes de:

- travar por janela de 5h
- esgotar semana cedo
- sofrer cap oculto
- entrar em throttling ruim

### C. Transparencia da quota

Quanto mais clara a metrica, melhor.

Pior caso:

- "voce tem muitas requests", mas cada task vira dezenas de chamadas internas pouco previsiveis

### D. Custo total para chegar perto do benchmark

Nao basta ser barato.

Precisa ser barato **sem ficar longe demais da experiencia que voce realmente usou**.

---

## 4. Reanalise profunda por fornecedor

## 4.1 GLM Coding Plan

### Mecanica oficial

Fontes oficiais:

- [Z.ai Overview](https://docs.z.ai/devpack/overview)
- [Z.ai FAQ](https://docs.z.ai/devpack/faq)
- [GLM-5.1 overview](https://docs.z.ai/guides/llm/glm-5.1)
- [Legacy migration notice](https://docs.z.ai/devpack/transition)

O que a propria Z.ai publica hoje:

- quota em janela de `5 horas`
- quota `semanal`
- `1 prompt = 1 query`
- cada prompt costuma gerar `15-20` invocacoes internas
- Lite: `~80 prompts / 5h`, `~400 / semana`
- Pro: `~400 prompts / 5h`, `~2.000 / semana`
- Max: `~1.600 prompts / 5h`, `~8.000 / semana`

Pontos criticos:

- `GLM-5.1` e `GLM-5-Turbo` consomem `3x` no pico e `2x` fora do pico
- promocao de `1x` fora do pico vale ate o fim de abril de 2026
- o default em integracoes tipo Claude Code ainda mapeia Opus/Sonnet para `GLM-4.7`; `GLM-5.1` precisa ser selecionado manualmente

### O que isso significa no seu caso

Essa e a oferta mais honesta entre custo e volume para quem quer usar agente pesado sem ir direto para Anthropic.

O ponto realmente importante e:

### o plano correto para voce e `Max`, nao `Pro`

O `Pro` pode servir para usuario forte. O seu perfil validado localmente e acima disso.

### Evidencia comunitaria relevante

Sinais uteis:

- existe ecossistema de monitoramento de quota real para Z.ai, o que reduz opacidade
- benchmark independente de coding agent posicionou `GLM 5.1` como alternativa flat forte, ainda que abaixo de Claude nos casos mais sensiveis

Fontes:

- [jia.je coding plan comparison](https://jia.je/kb/en/software/coding_plan.html)
- [zai-quota no PyPI](https://pypi.org/project/zai-quota/)
- [opencode-quota](https://github.com/slkiser/opencode-quota)
- [akitaonrails llm coding benchmark](https://github.com/akitaonrails/llm-coding-benchmark)

### Veredito

**Melhor assinatura unica do estudo.**

Meu grau de confianca aqui e o maior entre todas as alternativas nao-Anthropic.

---

## 4.2 Alibaba Cloud Bailian Coding Plan Pro

### Mecanica oficial

Fonte oficial principal:

- [Alibaba Cloud Coding Plan overview](https://www.alibabacloud.com/help/en/model-studio/coding-plan)
- [Alibaba Cloud Coding Plan FAQ](https://help.aliyun.com/zh/model-studio/coding-plan-faq)

O que a Alibaba publica hoje:

- `US$ 50/mes`
- `6.000 requests por 5 horas`
- `45.000 requests por semana`
- `90.000 requests por mes`
- reset de 5h em janela deslizante
- reset semanal toda segunda-feira `00:00 UTC+8`
- reset mensal na data de aniversario da assinatura

Ponto decisivo:

- cada query consome quota conforme o numero de chamadas reais ao modelo
- tarefa simples: `~5-10` requests
- tarefa complexa: `10-30+`
- a documentacao diz explicitamente que uso depende de complexidade, contexto e ferramentas

### Dimensionamento para o seu caso

Se tomarmos um workload extremo em torno de `~295 prompts/semana` como ordem de grandeza:

- cenario otimista: `295 x 10 = 2.950` calls/semana
- cenario pesado: `295 x 30 = 8.850` calls/semana

Isso continua muito abaixo de:

- `45.000 / semana`

No burst:

- `80 prompts` em sessao pesada
- `800-2.400 calls`

Tambem abaixo de:

- `6.000 / 5h`

### Onde esta o risco de verdade

Nao esta em quota.

Esta em 3 pontos:

- qualidade real dos modelos servidos no fluxo agentico
- consistencia sob contexto grande
- contexto efetivo menor do que o marketing deixa parecer

### Evidencia comunitaria relevante

Achados uteis:

- comunidade reporta que o plano e absurdamente forte em custo/volume
- tambem ha relatos de contexto efetivo menor; um issue tecnico citou falha perto de `169.984` tokens
- ha suporte em ferramentas de monitoramento de quota, o que e um bom sinal de uso real

Fontes:

- [NousResearch issue sobre contexto no Alibaba Coding Plan](https://github.com/NousResearch/hermes-agent/issues/2220)
- [opencode-quota](https://github.com/slkiser/opencode-quota)
- [Reddit: Alibaba Coding Plan review](https://www.reddit.com/r/opencodeCLI/comments/1rlti8a/honest_review_of_alibaba_clouds_new_ai_coding_pro/)
- [Reddit: Alibaba sounds too good to be true](https://www.reddit.com/r/opencodeCLI/comments/1rgcvv2/alibaba_coding_plan_sounds_too_good_to_be_true/)

### Veredito

**Melhor dark horse do estudo.**

Se voce quer maximizar custo-beneficio com risco controlado via piloto, esta e a melhor aposta secundaria.

Nao passa o GLM Max como recomendacao principal porque a incerteza qualitativa ainda e maior.

---

## 4.3 Kimi Code / Kimi Membership

### Mecanica oficial

Fontes oficiais:

- [Kimi Benefit Description](https://www.kimi.com/code/docs/en/benefits.html)
- [Kimi FAQ](https://www.kimi.com/code/docs/en/kimi-code/faq.html)
- [Kimi K2.6 pricing](https://www.kimi.com/resources/kimi-k2-6-pricing)

O que a propria Kimi deixa claro:

- o beneficio e para `personal development only`
- a quota recarrega em ciclo de `7 dias`
- Kimi Code e a plataforma com quota inclusa
- Kimi Platform e separado e `pay-as-you-go`
- a API da plataforma Kimi usa cobranca por token
- o K2.6 API tem preco publicado por `1M tokens` e depende fortemente de `cache hit` vs `cache miss`

### O problema para o seu caso

O melhor cenario do Kimi depende de cache bom.

E o seu workflow real tem varias caracteristicas que pioram isso:

- sessoes longas
- multi-projeto
- bastante ferramenta
- padrao parecido com Claude Code / Cursor agent
- possivel paralelismo

Se o cache encaixa mal, a weekly limit evapora.

### Evidencia comunitaria relevante

Os relatos se repetem:

- plano basico ou intermediario drenando rapido
- weekly limit acabando em poucos dias
- piora visivel quando usado via Claude Code / terceiros
- alguns relatos mencionam cache muito ruim, inclusive na casa de `~6%`

Fontes:

- [Reddit: Kimi Coding Plan weekly limits](https://www.reddit.com/r/kimi/comments/1rcarfl/kimi_coding_plan_weekly_limits/)
- [Reddit: Kimi Coding Plan usage limits](https://www.reddit.com/r/kimi/comments/1qtof14/kimi_coding_plan_usage_limits/)
- [Reddit: weekly usage grows faster than 5h limit](https://www.reddit.com/r/kimi/comments/1r2tou9/weekly_usage_grows_faster_than_5_hour_rate_limit/)
- [agents-radar issue 485](https://github.com/duanyytop/agents-radar/issues/485)

### Veredito

**Nao recomendo como assinatura principal para o seu caso.**

Pode ate funcionar bem em fluxos mais curtos ou melhor cacheados. Para o seu benchmark, eu acho arriscado demais.

---

## 4.4 MiniMax Token Plan

### Mecanica oficial

Fontes oficiais:

- [MiniMax Token Plan overview](https://platform.minimax.io/docs/token-plan/intro)
- [MiniMax Token Plan FAQ](https://platform.minimax.io/docs/token-plan/faq)

O que a MiniMax publica hoje:

- texto medido por `requests`
- reset principal em `5 horas rolling`
- outros modelos com quota diaria
- planos standard:
  - Starter: `1.500 requests / 5h`
  - Plus: `4.500 / 5h`
  - Max: `15.000 / 5h`
- planos highspeed:
  - `4.500`, `15.000` e `30.000 requests / 5h`

A FAQ tambem diz:

- o plano e para uso individual interativo
- para producao, a recomendacao continua sendo pay-as-you-go
- pode haver rate limiting dinamico em horario de pico

### Leitura para o seu caso

Na matematica bruta, parece muito forte.

Mas aqui o estudo nao e "quem aguenta mais request".

E:

- quem chega mais perto de Opus
- com consistencia
- em coding agent pesado

### Evidencia comunitaria relevante

Os sinais de comunidade ainda sao mistos:

- algumas pessoas gostam do custo
- outras reclamam de qualidade para coding pesado
- ha relatos de weekly limits surgindo e de restricoes de paralelismo / sessoes

Fontes:

- [Reddit: MiniMax starter review](https://www.reddit.com/r/MiniMax_AI/comments/1sp4v1z/minimax_token_plan_stater_10_review_heavily/)
- [Reddit: MiniMax lite plan review](https://www.reddit.com/r/MiniMax_AI/comments/1snul88/minimax_lite_plan_review/)
- [Reddit: token plan vs old plan](https://www.reddit.com/r/MiniMax_AI/comments/1rxshvn/token_plan_vs_old_plan/)
- [akitaonrails llm coding benchmark](https://github.com/akitaonrails/llm-coding-benchmark)

### Veredito

**Nao e minha escolha principal para substituir o seu fluxo Opus-heavy.**

Pode ser interessante para throughput barato, nao para ser o substituto central de qualidade.

---

## 4.5 ChatGPT Pro / Codex

### Mecanica oficial

Fontes oficiais:

- [OpenAI Codex rate card](https://help.openai.com/en/articles/20001106-codex-rate-card)
- [OpenAI ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro)

O que a OpenAI publica hoje:

- Codex passou a ser medido por uso baseado em token/credit
- a mudanca entrou em `02/04/2026`
- Pro `US$ 100`: `5x` o Plus, com promo de `10x Codex` ate `31/05/2026`
- Pro `US$ 200`: `20x` o Plus, com mencao a `25x` nos limites de 5h do Codex em texto promocional temporario
- o proprio help center fala em uso muito mais alto para trabalho pesado

### Problema para o seu caso

Aqui existem dois problemas:

1. o produto pode ser bom tecnicamente, mas nao e a rota mais barata para aproximar o seu benchmark
2. a visibilidade operacional do limite efetivo ainda e menos intuitiva do que GLM ou Alibaba

Tambem ha uma inconsistencia de datas na propria documentacao promocional, o que reduz confianca na clareza da oferta.

### Evidencia comunitaria relevante

Relatos publicos recentes:

- Plus queimando janela de 5h muito rapido
- usuarios valorizando o fato de o task nao parar seco em alguns cenarios
- percepcao de limite efetivo ainda volatil

Fontes:

- [Reddit: Codex on Plus burned 75% in 20 mins](https://www.reddit.com/r/codex/comments/1sgzy01/codex_on_chatgpt_plus_burned_75_of_5h_in_20_mins/)
- [Reddit: Codex does not stop at 0 limit](https://www.reddit.com/r/codex/comments/1soaxyk/i_love_that_codex_doesnt_stop_at_0_limit/)

### Veredito

**Nao e a melhor compra para este objetivo especifico.**

E mais uma alternativa premium forte do que uma solucao de custo-minimo para substituir o seu uso real.

---

## 4.6 GitHub Copilot Pro / Pro+

### Mecanica oficial

Fontes oficiais:

- [GitHub Copilot plans](https://docs.github.com/en/copilot/get-started/plans)
- [GitHub Copilot requests](https://docs.github.com/en/copilot/concepts/billing/copilot-requests)

O que o GitHub publica hoje:

- novas assinaturas de `Pro`, `Pro+` e student estao pausadas desde `20/04/2026`
- contadores de premium requests resetam todo dia `1` do mes as `00:00 UTC`
- features premium consomem requests multiplicadas pelo modelo
- `Claude Opus 4.7` custa multiplicador `7.5x`
- o cloud agent consome por sessao, tambem com multiplicador

### O que isso significa no seu caso

Mesmo que as assinaturas nao estivessem pausadas, o modelo de cobranca e ruim para voce:

- indireto demais
- facil de queimar em agent mode
- muito sensivel ao multiplicador do modelo

### Evidencia comunitaria relevante

Houve tambem discussao publica sobre billing impact de requests em workflows agenticos.

Fonte:

- [agents-radar digest com issue de billing do Copilot](https://github.com/duanyytop/agents-radar/issues/158)

### Veredito

**Nao recomendo como plano principal.**

Pode ser complementar para alguns fluxos, nao o substituto central do seu padrao Opus-heavy.

---

## 4.7 Claude Max

### Mecanica oficial

Fontes oficiais:

- [Claude Max usage](https://support.claude.com/en/articles/11014257-about-claude-s-max-plan-usage/)
- [Claude usage best practices](https://support.claude.com/en/articles/9797557-usage-limit-best-practices)

O que a Anthropic publica hoje:

- Max `US$ 100`: `5x` uso do Pro
- Max `US$ 200`: `20x` uso do Pro
- estimativa de pelo menos `225 mensagens / 5h` no 5x e `900 / 5h` no 20x em conversas curtas e menos pesadas
- a propria documentacao deixa claro que podem existir limites adicionais semanais e mensais a criterio da Anthropic
- o uso e compartilhado entre Claude e Claude Code
- a pagina de boas praticas tambem mostra que ha barra de sessao de `5h` e barra semanal para Opus e outros modelos

### Por que ele nao e a recomendacao do estudo

Se o criterio fosse "chegar mais perto de Opus", Claude Max obviamente entraria muito forte.

Mas o seu objetivo e:

### chegar o mais perto possivel gastando o minimo possivel

E aqui o problema e que:

- voce ja validou um uso extremo real
- seu padrao pesado tende a estressar exatamente as partes mais caras do Claude
- a relacao custo-liberdade continua menos favoravel que GLM Max

### Evidencia comunitaria relevante

Relatos recentes apontam esgotamento rapido em uso tool-heavy, principalmente quando contexto, subagentes e historico ficam grandes.

Fonte:

- [Anthropic issue: Pro Max 5x exhausted in 1.5h](https://github.com/anthropics/claude-code/issues/45756)

### Veredito

**Continuaria sendo a melhor referencia de qualidade, mas nao a melhor compra para este estudo.**

---

## 5. Ranking final do estudo

### 1. GLM Coding Plan Max

Melhor assinatura unica.

### 2. Alibaba Cloud Coding Plan Pro

Melhor piloto agressivo de custo.

### 3. GLM Coding Plan Pro

Aceitavel so se voce conscientemente topar mais risco de travar.

### 4. Claude Max

Melhor referencia de qualidade, mas perde em custo-beneficio para o objetivo declarado.

### 5. Kimi Code

Bom potencial, encaixe ruim no seu workflow por risco de weekly drain.

### 6. MiniMax Token Plan

Bom no papel para volume, ainda fraco como substituto principal de qualidade.

### 7. ChatGPT Pro / Codex

Produto forte, mas sem ganhar em custo-proximidade.

### 8. GitHub Copilot Pro+

Nao recomendavel como plano central neste momento.

---

## 6. Recomendacao final

## Compra principal

### assinar `GLM Coding Plan Max`

Configuracao recomendada:

- `GLM-4.7` como padrao de rotina
- `GLM-5.1` so para tasks realmente criticas
- evitar horario de pico quando quiser usar `GLM-5.1` fora da promocao

Essa estrategia e importante porque a propria Z.ai admite que o modelo topo tem multiplicador de consumo.

## Compra experimental

### rodar `Alibaba Coding Plan Pro` por 1 mes como piloto controlado

Se quiser testar uma segunda rota antes de consolidar:

- usar workloads reais de `KLG Bots`, `GnBots` e `ClipForge`
- medir qualidade, falhas, estabilidade, contexto e velocidade
- abortar se a qualidade ficar visivelmente abaixo do aceitavel

---

## 7. Estrategias praticas de compra

## Estrategia A: mais segura

- `GLM Max` como plano principal
- nada mais no inicio

Quando eu escolheria essa:

- quando voce quer decidir agora
- quer custo previsivel
- quer a aposta mais robusta disponivel fora Anthropic

## Estrategia B: custo-minimo com validacao forte

- `Alibaba Pro` por 1 ciclo curto de teste
- `GLM Max` como fallback natural se a qualidade decepcionar

Quando eu escolheria essa:

- quando o objetivo principal e exprimir o menor custo possivel
- e voce aceita um piloto com chance real de "a quota aguenta, mas a qualidade nao"

## Estrategia C: benchmark premium

- manter referencia de `Claude Max` apenas como comparador de qualidade
- migrar uso principal para `GLM Max`

Quando eu escolheria essa:

- se voce quiser calibrar expectativas de qualidade em tarefas muito sensiveis
- mas nao quiser continuar pagando o grosso do volume no ecossistema Claude

---

## 8. Decisao mais honesta possivel

Se eu tivesse que te orientar em uma unica frase:

### para o seu caso real de vibe coding extremo, eu compraria `GLM Coding Plan Max` e trataria `Alibaba Pro` como o unico piloto de baixo custo que ainda vale investigar seriamente

E eu **nao** compraria `Kimi`, `MiniMax`, `Copilot Pro+` ou `ChatGPT Pro/Codex` como plano principal para substituir o padrao de uso que o Cursor registrou nesta semana.

---

## 9. Fontes

### Oficiais

- [Z.ai Overview](https://docs.z.ai/devpack/overview)
- [Z.ai FAQ](https://docs.z.ai/devpack/faq)
- [GLM-5.1 overview](https://docs.z.ai/guides/llm/glm-5.1)
- [Z.ai legacy migration](https://docs.z.ai/devpack/transition)
- [Alibaba Cloud Coding Plan overview](https://www.alibabacloud.com/help/en/model-studio/coding-plan)
- [Alibaba Cloud Coding Plan FAQ](https://help.aliyun.com/zh/model-studio/coding-plan-faq)
- [Kimi benefit description](https://www.kimi.com/code/docs/en/benefits.html)
- [Kimi FAQ](https://www.kimi.com/code/docs/en/kimi-code/faq.html)
- [Kimi K2.6 pricing](https://www.kimi.com/resources/kimi-k2-6-pricing)
- [MiniMax Token Plan overview](https://platform.minimax.io/docs/token-plan/intro)
- [MiniMax Token Plan FAQ](https://platform.minimax.io/docs/token-plan/faq)
- [OpenAI Codex rate card](https://help.openai.com/en/articles/20001106-codex-rate-card)
- [OpenAI ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro)
- [GitHub Copilot plans](https://docs.github.com/en/copilot/get-started/plans)
- [GitHub Copilot requests](https://docs.github.com/en/copilot/concepts/billing/copilot-requests)
- [Claude Max usage](https://support.claude.com/en/articles/11014257-about-claude-s-max-plan-usage/)
- [Claude usage best practices](https://support.claude.com/en/articles/9797557-usage-limit-best-practices)

### Comunitarias / empiricas

- [jia.je coding plan comparison](https://jia.je/kb/en/software/coding_plan.html)
- [zai-quota](https://pypi.org/project/zai-quota/)
- [opencode-quota](https://github.com/slkiser/opencode-quota)
- [akitaonrails llm coding benchmark](https://github.com/akitaonrails/llm-coding-benchmark)
- [NousResearch issue sobre Alibaba context window](https://github.com/NousResearch/hermes-agent/issues/2220)
- [agents-radar issue 485](https://github.com/duanyytop/agents-radar/issues/485)
- [agents-radar issue 158](https://github.com/duanyytop/agents-radar/issues/158)
- [Anthropic issue 45756](https://github.com/anthropics/claude-code/issues/45756)
- [Reddit: Kimi weekly limits](https://www.reddit.com/r/kimi/comments/1rcarfl/kimi_coding_plan_weekly_limits/)
- [Reddit: Kimi usage limits](https://www.reddit.com/r/kimi/comments/1qtof14/kimi_coding_plan_usage_limits/)
- [Reddit: Kimi weekly usage grows faster](https://www.reddit.com/r/kimi/comments/1r2tou9/weekly_usage_grows_faster_than_5_hour_rate_limit/)
- [Reddit: Alibaba honest review](https://www.reddit.com/r/opencodeCLI/comments/1rlti8a/honest_review_of_alibaba_clouds_new_ai_coding_pro/)
- [Reddit: Alibaba sounds too good to be true](https://www.reddit.com/r/opencodeCLI/comments/1rgcvv2/alibaba_coding_plan_sounds_too_good_to_be_true/)
- [Reddit: Codex burned 75 percent in 20 mins](https://www.reddit.com/r/codex/comments/1sgzy01/codex_on_chatgpt_plus_burned_75_of_5h_in_20_mins/)
- [Reddit: Codex does not stop at zero](https://www.reddit.com/r/codex/comments/1soaxyk/i_love_that_codex_doesnt_stop_at_0_limit/)
- [Reddit: MiniMax starter review](https://www.reddit.com/r/MiniMax_AI/comments/1sp4v1z/minimax_token_plan_stater_10_review_heavily/)
- [Reddit: MiniMax lite plan review](https://www.reddit.com/r/MiniMax_AI/comments/1snul88/minimax_lite_plan_review/)
- [Reddit: MiniMax token plan vs old plan](https://www.reddit.com/r/MiniMax_AI/comments/1rxshvn/token_plan_vs_old_plan/)
