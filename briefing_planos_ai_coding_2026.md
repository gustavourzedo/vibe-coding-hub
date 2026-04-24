# Briefing completo — Alternativas ao Claude Opus via Cursor (Gustavo Urzedo, abril 2026)

> Documento gerado em 23/04/2026. Cobre toda a pesquisa realizada em dois chats encadeados. Inclui dados empíricos de consumo real, análise de planos, fontes primárias e comunitárias, e recomendação final.

**Handoff para LLM em modo agente (caminhos no PC, metodologia Cursor, shares, estudo do 92% cache):** ver `contexto_handoff_agente_estudo_cursor_anthropic_2026.md` na mesma pasta.

---

## 1. CONTEXTO E PROBLEMA

O usuário realiza vibe coding intenso usando **Claude Opus via Cursor** (API da Anthropic direta). O custo semanal chegou a **US$ 977** em uma única semana (17–24/abr/2026), tornando o modelo economicamente insustentável. O objetivo é identificar uma alternativa de plano de assinatura flat-rate que cubra o mesmo padrão de uso a uma fração do custo.

---

## 2. PERFIL DE CONSUMO REAL (SEMANA 17–24/ABR/2026)

### Dados do painel Anthropic

| Métrica | Valor |
|---|---|
| Gasto acumulado (ciclo atual) | US$ 977,07 |
| Gasto ciclo anterior (mesmo ponto) | US$ 9,16 |
| Gasto estimado 18–24/abr | ~US$ 910 |

### Consumo diário estimado

| Dia | Gasto (US$) |
|---|---|
| 17/abr | ~67 |
| 18/abr | ~67 |
| 19/abr | ~67 |
| 20/abr | ~200 |
| 21/abr | ~50 |
| 22/abr | ~264 |
| 23/abr | ~264 |
| 24/abr | ~0 |

### Conversão para tokens (premissa)

Dois cenários possíveis dependendo do modelo faturado:

**Cenário A — Opus 4.6/4.7 (US$ 5/M input, US$ 25/M output → média ~US$ 11/M com 70/30):**
- Total semana: ~89M tokens
- Dias de pico (22–23/abr): ~24M tokens/dia

**Cenário B — Opus 4/4.1 (US$ 15/M input, US$ 75/M output → média ~US$ 33/M):**
- Total semana: ~30M tokens
- Dias de pico: ~8M tokens/dia

### Dado-âncora validado empiricamente

Em 23/abr foram exportadas **80 mensagens de usuário** em 2 conversas do Cursor.
- Gasto nesse dia: US$ 264
- US$ 264 / 80 prompts = **~US$ 3,30/prompt**
- No cenário A (US$ 11/M médio): **~300K tokens/prompt**
- No cenário B (US$ 33/M médio): **~100K tokens/prompt**

Este é o número central de toda a análise. O valor de 300K tokens/prompt (cenário A) converge com estimativas comunitárias do GLM (333K tokens/prompt).

### Estimativa de prompts por semana

Com base no gasto diário e US$ 3,30/prompt médio:
~295 prompts/semana (estimativa)

### Custo mensal atual

~US$ 977 × 4,3 semanas = **~US$ 4.200/mês**

---

## 3. PLANOS ANALISADOS

### 3.1 GLM / Z.ai (Zhipu AI) — Coding Plan

**Fonte primária:** https://docs.z.ai/devpack/overview

**Planos disponíveis (preços internacionais, abril 2026):**

| Plano | Preço/mês | Prompts/5h | Prompts/semana | Tokens/5h (aprox.) |
|---|---|---|---|---|
| Lite | US$ 18 | ~80 | ~400 | ~8M |
| Pro | US$ 72 | ~400 | ~2.000 | ~40M |
| Max | US$ 160 | ~1.600 | ~8.000 | ~160M |

**Modelos disponíveis em todos os planos:** GLM-5.1, GLM-5-Turbo, GLM-4.7, GLM-4.5-Air

**Multiplicadores de quota:**
- GLM-5.1 / GLM-5-Turbo: **3× em horário de pico** (14h–18h UTC+8), **2× fora do pico**
- **PROMOÇÃO EM VIGOR ATÉ 30/ABR/2026:** GLM-5.1/Turbo consome apenas **1× fora do pico** — expira em 30/abril
- GLM-4.7: sem multiplicador (1×)

**Horário de pico:** 14h–18h (UTC+8) = 9h–13h (BRT)

**Risco crítico pós-01/mai:**
- Com GLM-5.1 voltando a 2× off-peak, a sessão de pico do usuário (80 prompts ≈ 24M tokens) consumiria 48M de quota — acima do teto de 40M/5h do Pro
- Solução: usar GLM-4.7 para tarefas rotineiras, reservar GLM-5.1 para sessões complexas
- No GLM Max (teto 160M/5h), mesmo 48M pós-multiplicador é confortável

**Mecanismo de quota:**
- Quota calculada em tokens totais (igual ao Anthropic), não em tokens não-cacheados
- Plugin da comunidade `opencode-glm-quota` lê a API interna: `open.bigmodel.cn/api/monitor/usage/quota/limit`
- Pro Plan: teto de 40M tokens por janela de 5h (confirmado via plugin)

**Benchmarks do modelo:**
- GLM-5.1 no SWE-bench Verified: 58.4% (supera Claude Opus 4.6)
- GLM-5.1 no benchmark interno Claude Code: 45.3 pontos vs 47.9 do Opus 4.6 = **94,6% da performance**
- Velocidade de geração: 44,3 tokens/segundo (mais lento que Opus)
- Contexto: 200K tokens, max output: 131K tokens

**Preço API standalone (não assinatura):**
- GLM-5.1: US$ 1,40/M input, US$ 4,40/M output

**Compatibilidade:** Claude Code, Cline, OpenCode, Cursor (via base URL swap)
- `ANTHROPIC_BASE_URL`: `https://api.z.ai/api/anthropic`
- Mapeamento de modelos via `~/.claude/settings.json`

**Análise para o perfil do usuário (sem premissa de cache):**

| Plano | Prompts/semana (295 needed) | Tokens/5h pico (24M needed) | Pós-01/mai GLM-5.1 (48M needed) | Recomendação |
|---|---|---|---|---|
| Lite | ✅ 73% headroom | ❌ excede | ❌ | Insuficiente |
| Pro | ✅ 85% headroom | ✅ 60% usado | ❌ excede c/ GLM-5.1 | Viável com gestão ativa |
| Max | ✅ 96% headroom | ✅ 15% usado | ✅ 30% usado | **Mais seguro** |

---

### 3.2 Kimi (Moonshot AI)

**Fonte primária:** https://www.kimi.com/membership/pricing

**Planos:**

| Plano | Preço | Quota base |
|---|---|---|
| Andante | ~US$ 7/mês (49 RMB) | 1× base |
| Moderato | ~US$ 14/mês | 4× base |
| Allegretto | ~US$ 27/mês (199 RMB) | 20× base |
| Allegro | ~US$ 96/mês (699 RMB) | 60× base |

**Mecanismo crítico (diferente dos outros):**
- O limite é em **tokens NÃO-CACHEADOS** (uncached input + output)
- Cache hits (tokens relidos de cache) **não contam** para o limite
- Testado empiricamente: Andante = 1M tokens não-cacheados por 5h, 4M/semana

**Modelo:** K2.6 (lançado 21/abr/2026, substitui K2.5 — 1T parâmetros totais, 32B ativos, suporte a visão, contexto 256K)

**API K2.6:**
- Cached input: 1,1 RMB/M tokens
- Uncached input: 6,5 RMB/M tokens
- Output: 27 RMB/M tokens

**Análise para o perfil do usuário:**

⚠️ **INCERTEZA ALTA** — a viabilidade depende inteiramente da taxa de cache real do usuário, que não foi medida.

- Se cache = 92% (estimativa do chat anterior): Allegretto cobre com ~10× de folga
- Se cache = 70%: Allegretto fica apertado
- Se cache = 50%: Allegretto não cobre

**Conclusão sobre Kimi:** Plano mais barato SE o cache for alto, mas **não é seguro sem medir a taxa real de cache primeiro**. O painel da Anthropic mostra `cache_read_input_tokens` separado — divida esse número por (cache_read + input) para obter a taxa real.

---

### 3.3 Alibaba Cloud Bailian — Coding Plan (Qwen)

**Fonte:** help.aliyun.com/zh/model-studio/coding-plan (via jia.je)

**Plano Pro:** US$ 50/mês

**Modelo principal:** qwen3.6-plus (contexto 1M tokens, exclusivo Pro — substituiu qwen3.5-plus em 08/abr/2026)

**Limites documentados:**
- 6.000 chamadas / 5h
- 45.000 chamadas / semana
- 90.000 chamadas / mês

**Problema crítico:** A própria documentação da Alibaba confirma que a quota é baseada em número de chamadas, não tokens. Não há dado público de tokens por chamada. Zero testes comunitários encontrados.

**Para o usuário:** 295 prompts/semana vs 45.000 chamadas/semana → folga enorme em chamadas, mas sem como validar se tokens por sessão cabem.

---

### 3.4 MiniMax — Token Plan Internacional

**Fonte:** https://platform.minimax.io/docs/token-plan/intro

**Planos internacionais:**

| Plano | Preço/mês | Requests/5h | Requests/semana (10×) |
|---|---|---|---|
| Starter | US$ 10 | 1.500 | 15.000 |
| Plus | US$ 20 | 4.500 | 45.000 |
| Max | US$ 50 | 15.000 | 150.000 |

**Modelo:** M2.7 (contexto 200K tokens)

**Mecanismo:** medido por requests, não tokens
- M2.7: janela de 5h com reset contínuo
- Limite semanal = 10× o limite de 5h

**Para o usuário:** 295 prompts/semana vs 45.000 (Plus) → 0,65% do limite. Enorme headroom em requests, mas sem dados de tokens por request — mesma lacuna do Alibaba.

---

### 3.5 OpenAI Codex (via ChatGPT)

**Fonte primária:** https://developers.openai.com/codex/pricing

**Histórico relevante:**
- 09/abr/2026: OpenAI lança novo tier Pro US$ 100 especificamente para usuários intensos de Codex
- Mesma semana: Anthropic removeu Claude Code do plano Pro US$ 20 (teste A/B em 2% de novos usuários)
- OpenAI migrou para pricing baseado em tokens (2/abr/2026), substituindo por-mensagem

**Planos atuais (ChatGPT):**

| Plano | Preço/mês (USD) | Preço BR | Codex incluído |
|---|---|---|---|
| Free | US$ 0 | R$ 0 | Limitado |
| Go | US$ 8 | R$ 39,99 | Básico |
| Plus | US$ 20 | R$ 99,90 | Sim (limite base) |
| Pro $100 | US$ 100 | R$ 525 | 5× Plus (10× até 31/mai) |
| Pro $200 | US$ 200 | - | 20× Plus (25× 5h até 31/mai) |

**Mecanismo de limite (descoberta comunitária — fórum OpenAI, 10/abr/2026):**

O limite do Codex é medido em **minutos de raciocínio do agente**, não em tokens ou mensagens.

Estimativas empíricas (não oficiais, baseadas em testes):

| Plano | GPT-5.4 | GPT-5.3 |
|---|---|---|
| Plus | ~40 min/5h | ~60 min/5h |
| Business | ~25 min/5h | ~37,5 min/5h |
| Pro $100 (promo 10×) | ~400 min/5h | ~600 min/5h |
| Pro $200 (promo 25×) | ~1.000 min/5h | ~1.500 min/5h |

**Para o perfil do usuário:**
- 80 prompts em sessão de pico com tarefas complexas (300K tokens/prompt) ≈ 2–5 min de raciocínio por prompt
- Cenário 2 min/prompt × 80 = 160 min/sessão
- Cenário 5 min/prompt × 80 = 400 min/sessão

| Plano | Cenário 2 min/prompt | Cenário 5 min/prompt |
|---|---|---|
| Plus (40 min) | ❌ excede 4× | ❌ |
| Pro $100 promo 10× (400 min) | ✅ 40% usado | ⚠️ 100% exato |
| Pro $100 pós-mai 5× (200 min) | ⚠️ 80% usado | ❌ excede |
| Pro $200 promo 25× (1.000 min) | ✅ 16% usado | ✅ 40% usado |

**Aviso da própria OpenAI:** "On average, Codex costs ~$100–$200/developer per month" — implica que usuários intensos como o perfil analisado frequentemente precisam do tier $200.

**Diferença arquitetural crítica:** O Codex 2026 é um agente cloud-native assíncrono (sandboxes na nuvem). Não é substituto direto do workflow Cursor + contexto local persistente. O Codex CLI existe, mas consome da mesma cota e não mantém contexto da forma que Cursor mantém.

---

## 4. COMPARATIVO FINAL

| Plano | Preço/mês | Mecanismo de limite | Cache dependente? | Seguro sem medir cache? | Economia vs atual |
|---|---|---|---|---|---|
| GLM Pro (Z.ai) | US$ 72 | Tokens totais + multiplicadores | Não | Sim (com gestão pós-mai) | 98% |
| **GLM Max (Z.ai)** | **US$ 160** | **Tokens totais + multiplicadores** | **Não** | **Sim (folga ampla)** | **96%** |
| Kimi Allegretto | US$ 27 | Tokens NÃO-cacheados | **Sim — crítico** | Não | 99% |
| Alibaba Pro | US$ 50 | Chamadas (tokens desconhecidos) | Não | Não (sem dados) | 99% |
| MiniMax Plus | US$ 20 | Requests (tokens desconhecidos) | Não | Não (sem dados) | 99% |
| OpenAI Pro $100 | US$ 100 | Minutos de raciocínio | Não | Parcialmente até 31/mai | 98% |
| OpenAI Pro $200 | US$ 200 | Minutos de raciocínio | Não | Sim | 95% |

---

## 5. RECOMENDAÇÃO FINAL

**Para o cenário sem premissa de cache (mais conservador e honesto):**

### Melhor opção: GLM Max — US$ 160/mês

**Motivos:**
1. Único plano onde a mecânica de cobrança é tokens totais — exatamente como o Anthropic. Sem variáveis ocultas.
2. Teto de 160M tokens/5h absorve o pior cenário do usuário (24M × 2 multiplicador = 48M) com 3× de folga
3. 8.000 prompts/semana vs ~295 necessários — 27× de headroom em contagem de prompts
4. Após 01/mai não requer gestão ativa de modelo (Pro exigiria alternar GLM-5.1 / GLM-4.7)
5. GLM-5.1 performou 94,6% do Claude Opus 4.6 nos benchmarks de coding (Claude Code eval)
6. Economia de 96% vs custo atual (~US$ 4.200/mês → US$ 160/mês)

**Segunda opção se quiser testar gradualmente:** GLM Pro (US$ 72) — cobre com gestão ativa de modelo, mas após 01/mai exige disciplina para não usar GLM-5.1 em sessões pesadas fora do pico.

**Não recomendado sem validação prévia:** Kimi (depende de medir cache), Alibaba/MiniMax (sem dados de tokens), OpenAI Codex Pro $100 (muda workflow + limite aperta após 31/mai).

---

## 6. AÇÕES PENDENTES / INCÓGNITAS ABERTAS

1. **Identificar o modelo Anthropic faturado:** Verificar no painel da Anthropic qual modelo exato está sendo cobrado. O Cursor pode estar usando Opus 4, Opus 4.6 ou Opus 4.7 — a diferença no preço muda os tokens/semana de 30M para 89M.

2. **Medir a taxa de cache (se quiser considerar Kimi):** No painel da Anthropic, seção de uso de tokens, verificar `cache_read_input_tokens` vs `input_tokens`. Taxa = cache_read / (cache_read + input). Se > 85%, Kimi Allegretto vira opção.

3. **Validar tokens reais no GLM antes de comprometer plano anual:** Fazer teste de 24–72h no GLM Pro ($72) monitorando via plugin `opencode-glm-quota` para confirmar tokens/prompt no seu padrão específico.

4. **Confirmar expiração da promoção 1× off-peak GLM-5.1:** A promoção termina em 30/abr/2026. A partir de 01/mai, GLM-5.1 volta a 2× off-peak.

---

## 7. FONTES

### Primárias (documentação oficial verificada em 23/04/2026)

| ID | Fonte | URL |
|---|---|---|
| P1 | Z.ai DevPack Overview | https://docs.z.ai/devpack/overview |
| P2 | Z.ai DevPack FAQ | https://docs.z.ai/devpack/faq |
| P3 | Z.ai Legacy Plan Migration | https://docs.z.ai/devpack/transition |
| P4 | Kimi Membership Pricing | https://www.kimi.com/membership/pricing |
| P5 | Kimi K2.6 API Pricing | https://platform.moonshot.cn/docs/pricing/chat |
| P6 | MiniMax International Token Plan | https://platform.minimax.io/docs/token-plan/intro |
| P7 | OpenAI Codex Pricing | https://developers.openai.com/codex/pricing |
| P8 | OpenAI Codex Rate Card | https://help.openai.com/en/articles/20001106-codex-rate-card |
| P9 | OpenAI Pro Tiers | https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers |
| P10 | Alibaba Cloud Bailian | help.aliyun.com/zh/model-studio/coding-plan |

### Comunitárias (alta confiabilidade, revalidar periodicamente)

| ID | Fonte | URL | Relevância |
|---|---|---|---|
| C1 | jia.je Knowledge Base — AI Coding Plan | https://jia.je/kb/en/software/coding_plan.html | Compilação de limites, testes empíricos Kimi (1M uncached/5h Andante), dados GLM, histórico de mudanças |
| C2 | Plugin opencode-glm-quota | https://github.com/guyinwonder168/opencode-glm-quota | Lê API interna Z.ai; confirmou 40M tokens/5h Pro |
| C3 | Fórum OpenAI — "Understanding the New Codex Limit System" | https://community.openai.com/t/understanding-the-new-codex-limit-system-after-the-april-9-update/1378768 | Testes empíricos de minutos de raciocínio por plano (Plus=40min, Pro10×=400min) |
| C4 | VentureBeat — OpenAI Pro $100 launch | https://venturebeat.com/orchestration/openai-introduces-chatgpt-pro-usd100-tier-with-5x-usage-limits-for-codex | Detalhes do launch, limites por modelo |
| C5 | Pasqualepillitteri — AI Coding Price Hike abril 2026 | https://pasqualepillitteri.it/en/news/1241/ai-coding-tools-2026-price-hike-claude-copilot-codex-gemini | Contexto da movimentação coordenada de preços em abril 2026 |
| C6 | Truescho — GLM Coding Plan 2026 | https://truescho.com/en/blog/glm-coding-plan-zai-2026 | Histórico de preços GLM, breakeven API vs plano |
| C7 | CodingPlans — Z.ai GLM Pro | https://codingplans.com/plans/zai-glm-coding-plan-pro/ | "400 prompts/5h, 2.000 prompts/semana" para Pro |
| C8 | Northflank — Claude Code vs Codex | https://northflank.com/blog/claude-code-vs-openai-codex | Diferença arquitetural Codex cloud vs Claude Code local |

---

## 8. CONTEXTO DE MERCADO (ABRIL 2026)

- **21/abr/2026:** Anthropic removeu Claude Code do plano Pro US$ 20 (Claude Code passou a exigir plano Max US$ 100 — confirmado como A/B test em 2% de novos usuários, mas documentação global foi atualizada)
- **09/abr/2026:** OpenAI lançou Pro US$ 100 com 5× Codex vs Plus
- **22/abr/2026:** GitHub congelou novos cadastros no Copilot Pro
- **Tendência geral:** ferramentas de coding AI migrando de US$ 20 para US$ 100–200 como tier para usuários intensos
- **Alternativas open source ganham tração:** Cline (58.200 stars), Aider (39.000 stars), Continue.dev — todos com BYOM (Bring Your Own Model) via API key, custo somente pelos tokens consumidos
- **GLM-5.1 lançado 27/mar/2026:** primeiro modelo open-weight a ~95% da performance de Claude Opus 4.6 em coding benchmarks

---

*Documento gerado em 23/04/2026. Dados de preços e limites de planos mudam frequentemente — revalidar fontes primárias antes de assinar qualquer plano.*
