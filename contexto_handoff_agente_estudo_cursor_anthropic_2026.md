# Handoff para LLM em modo agente — Estudo de uso Cursor + Anthropic (abril 2026)

> **Objetivo deste arquivo:** dar contexto **completo** a outra LLM com **acesso total ao disco** (ex.: agente no Cursor) para continuar pesquisas, cruzar logs locais do Cursor com faturação Anthropic e validar hipóteses **sem depender do histórico deste chat**.  
> **Relação com:** `briefing_planos_ai_coding_2026.md` (mesma pasta) — aquele documento consolida sobretudo o **estudo feito no Claude web** (planos GLM/Kimi/Alibaba/MiniMax/Codex, recomendações e fontes). **Este** arquivo consolida o que foi **feito e aprendido nesta sessão Cursor**, caminhos de máquina, limitações técnicas e lacunas.

---

## 1. Pergunta de negócio / problema

- Uso intenso de **Cursor** com **Claude Opus** faturado via **Anthropic** (painel de custo acumulado).
- Objetivo prático: **dimensionar consumo** (USD, tokens equivalentes, prompts) e **comparar** com planos “flat” de terceiros (GLM Coding Plan, Kimi, Alibaba Coding Plan, etc.).
- Há tensão entre **tokens** (Anthropic) e **requests/prompts/janelas 5h** (vários planos chineses).

---

## 2. Mapa de artefatos nesta pasta

| Arquivo | Conteúdo |
|---|---|
| `briefing_planos_ai_coding_2026.md` | Briefing longo gerado a partir do **estudo no Claude web** (23/04/2026): consumo semanal, planos, tabelas, recomendação GLM Max, fontes P1–P10 e C1–C8. **Usar como base de planos/preços**; revalidar URLs e datas antes de assinar. |
| `contexto_handoff_agente_estudo_cursor_anthropic_2026.md` | **Este arquivo:** metodologia da sessão Cursor, caminhos locais, shares lidos, estudo do **92% cache**, limitações de export, próximos passos para agente. |

---

## 3. Caminhos absolutos no Windows (para o agente buscar evidência)

### 3.1 Cursor — dados de aplicação (usuário `gusta`)

| Caminho | Observação |
|---|---|
| `C:\Users\gusta\AppData\Roaming\Cursor\` | Raiz de dados do Cursor (logs, extensões, estado). |
| `C:\Users\gusta\AppData\Roaming\Cursor\User\globalStorage\state.vscdb` | **SQLite** gigante (**ordem ~10 GB** nesta máquina). Tabelas vistas: `ItemTable`, `cursorDiskKV` (`key` TEXT, `value` BLOB). **Não** foi encontrada chave óbvia de “billing/tokens Anthropic” em busca superficial por `LIKE '%usage%'`, `'%billing%'`, `'%anthropic%'` — **não provar ausência**; pode haver chaves com outros nomes ou dados só no servidor Cursor. |
| `C:\Users\gusta\AppData\Roaming\Cursor\User\globalStorage\storage.json` | Pequeno; pode conter preferências; verificar se há pistas de conta/time. |
| `C:\Users\gusta\AppData\Roaming\Cursor\logs\` | Pastas datadas `YYYYMMDD...`; úteis para correlacionar **atividade** com picos de gasto (não necessariamente tokens). |

### 3.2 Exports manuais de conversas Cursor (recuperados)

| Caminho | Observação |
|---|---|
| `F:\KLG Bots\_recovered_archived_cursor_chats\Bloqueio-de-limite-para-modelos-Opus.md` | ~**1,06 MB**, **811** bubbles, **68** mensagens `user`, **464** linhas `tool=`, timestamps **2026-04-23** UTC apenas, duração ~**4,5 h** (17:48Z–22:20Z). Tema: limites Opus / admin / Cursor Team. |
| `F:\KLG Bots\_recovered_archived_cursor_chats\Melhorias-para-llm-composer-2.md` | ~**166 KB**, **145** bubbles, **12** `user`, **74** `tool=`, mesmo dia **2026-04-23**, ~**30 min**. Tema: **Composer 2** / MCP (não prova modelo Opus). |

**Limitação crítica:** esses exports **não cobrem** os dias **18–22/04/2026** do pico de gasto no gráfico Anthropic; servem como amostra de **padrão agente + ferramentas** em um dia, não como extrato completo da semana.

**Metadado no topo dos `.md`:** exportados de `C:\Users\gusta\AppData\Roaming\Cursor\User\globalStorage\state.vscdb` com `composerId` UUID — o agente pode tentar correlacionar UUID com entradas no `state.vscdb`.

### 3.3 Chats compartilhados Claude.ai (URLs)

| URL | Conteúdo (resumo) |
|---|---|
| `https://claude.ai/share/01405edf-562c-47df-b8e8-0608f86de2a1` | Thread longa: Composer 2 (200k, Fast vs Standard), Alibaba AI Coding Plan (URLs DashScope, cotas 6k/5h, 45k/semana, 90k/mês), comparação GLM Pro vs Alibaba, métodos de estimativa, fontes jia.je / opencode-glm-quota. |
| `https://claude.ai/share/687c3a50-12a6-4522-a352-5cf3e07b0f01` | Continuação: divergências briefing vs docs (datas abril/2026), matriz interativa (não exportável sem login), diagnóstico 104M/semana, pedido de dados empíricos GLM; **última mensagem** cola o bloco “CONTEXTO DE CONSUMO” (USD diário + tokens equivalentes). |

**Nota para agente:** leitura via **browser automation** ou cópia manual — `curl` da página share tende a retornar shell SPA sem texto completo; snapshot de acessibilidade **trunca** parágrafos longos.

---

## 4. O que foi feito nesta sessão Cursor (metodologia)

1. **Leitura programática dos `.md` recuperados** (PowerShell / Python): contagem de bubbles `user`/`assistant`, linhas `tool=`, histograma de datas (só 2026-04-23), primeiro/último timestamp, tamanho em caracteres.
2. **Tentativa de correlacionar gasto Anthropic com os `.md`:** conclusão — **impossível** explicar US$ ~977 só com dois fios de um dia; o custo vem de **muito mais sessões** e/ou API fora desses exports.
3. **Inspeção do `state.vscdb`:** Python `sqlite3` — listagem de tabelas; busca de chaves por padrão; arquivo muito grande para varredura ingênua sem hipótese de chave.
4. **Tentativa `curl`** do share Claude.ai — não concluiu de forma útil (SPA / bloqueio / tempo).
5. **MCP browser (cursor-ide-browser):** navegação ao share `687c3a50…`, aceite de cookies quando necessário, expansão “Show more”, snapshots YAML; montagem de export textual parcial + reconstrução do bloco “CONTEXTO DE CONSUMO” onde o snapshot cortava (texto já existia neste fio Cursor).
6. **Estudo do “92% cache”:** pesquisa web + trechos da documentação Anthropic sobre `cache_read_input_tokens`, `cache_creation_input_tokens`, `input_tokens` e fórmula `total_input_tokens = cache_read + cache_creation + input`; conclusão — **92% foi parâmetro de cenário** no chat web, **não** medido no painel; plausibilidade **altamente variável** (relatos de taxas baixas vs artigos sobre sessões “quentes” no Claude Code).

---

## 5. Dados de consumo Anthropic consolidados (para não perder o fio)

**Fonte:** print do painel “Cumulative Spend” (usuário); eixo ~**17/04/2026–24/04/2026**. Em 2026, **17/04 e 24/04 são sextas-feiras**.

| Item | Valor |
|---|---|
| Ciclo atual (tooltip 24/04) | **US$ 977,07** |
| Ciclo anterior (mesmo ponto) | **US$ 9,16** |
| Se subtrair estimativa linear fim 17/04 (~US$ 67) do trecho 17–19→200 | **~US$ 910** em 18–24/04 (aproximação) |

**Δ US$/dia (modelo usado no handoff textual):**  
17~67 | 18~67 | 19~67 | 20~200 | 21~50 | 22~264 | 23~264 | 24~0 — pico em **22–23/04**.

**Tokens equivalentes (hipótese 70% in / 30% out, só para ordem de grandeza):**

| Premissa de preço / M tok | US$ 977 | US$ 910 |
|---|---:|---:|
| Opus **4.6/4.7** (~US$ **11**/M equivalente) | ~**89 M** tok | ~**83 M** tok |
| Opus **4 / 4.1** (~US$ **33**/M equivalente) | ~**30 M** tok | ~**28 M** tok |

**Documentação de preços:** https://docs.anthropic.com/en/about-claude/pricing  

**Documentação de prompt caching / campos `usage`:** https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching  

**Fórmula útil para o agente (por período agregado):**  
somar por requisição ou exportar do console, depois:

`total_input_tokens = cache_read_input_tokens + cache_creation_input_tokens + input_tokens`  

Razão de leitura de cache (exemplo de métrica):  
`sum(cache_read) / sum(cache_read + cache_creation + input)` no intervalo — **substitui** o “92%” hipotético se os dados existirem.

---

## 6. Sobre o número **92%** (cache)

- **Origem:** parâmetro de **widget/cenário** no diagnóstico “104M tokens/semana” no **Claude web** (junto com % GLM-5.1, % pico), **não** derivado do painel Anthropic do usuário.
- **Validação:** só com **`cache_read_input_tokens`** (e demais campos) **reais** no período.
- **Literatura / terceiros:** artigos sobre Claude Code descrevem **taxas altas** possíveis quando o prefixo permanece estável e há TTL quente; **relatos de issues** mostram taxas **muito baixas** em certas configs — logo **92% não deve ser assumido** sem medição.

---

## 7. Hipótese “104M tokens / semana” vs USD

- Apareceu em conversa anterior como **âncora de carga** para comparar planos.
- Com **US$ ~910–977** e preços Opus 4.6/4.7, a conversão 70/30 dá **~83–89 M** “tokens equivalentes” na semana do gráfico — **ordem de magnitude parecida** com 104M, mas **não é prova** de igualdade (semanas diferentes, modelo exato, cache, split in/out).

---

## 8. Próximos passos sugeridos para a LLM agente (checklist)

1. **Extrair uso Anthropic granular:** CSV/API/console — modelo, `input_tokens`, `output_tokens`, `cache_*`, por **dia** 17–24/04. Fechar qual cenário A/B de preço se aplica.
2. **Correlacionar com Cursor:** buscar em `state.vscdb` / logs por UUID dos `composerId` dos `.md` e por horários **22–23/04** (picos USD).
3. **Procurar outros exports** em `F:\KLG Bots\` ou backups com padrão `*recovered*cursor*`, `*composer*`, `*.md` grandes.
4. **Revalidar planos** contra docs oficiais (preços e limites mudam); usar `briefing_planos_ai_coding_2026.md` como lista inicial de URLs.
5. **Se objetivo incluir Kimi:** calcular taxa real de cache no lado Anthropic antes de usar qualquer % no modelo Kimi.

---

## 9. Referências técnicas citadas nesta sessão Cursor

- Anthropic pricing: `https://docs.anthropic.com/en/about-claude/pricing`
- Anthropic prompt caching: `https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching`
- Z.ai DevPack: `https://docs.z.ai/devpack/overview`, FAQ, transition
- Kimi pricing: `https://www.kimi.com/membership/pricing`
- jia.je coding plan KB: `https://jia.je/kb/en/software/coding_plan.html`
- opencode-glm-quota: `https://github.com/guyinwonder168/opencode-glm-quota`
- Alibaba DashScope coding (URLs típicas do estudo):  
  - `https://coding-intl.dashscope.aliyuncs.com/v1`  
  - `https://coding-intl.dashscope.aliyuncs.com/apps/anthropic`
- Material independente sobre caching no Claude Code (intuição, não extrato do usuário):  
  `https://www.claudecodecamp.com/p/how-prompt-caching-actually-works-in-claude-code`
- Issue exemplo de cache baixo no ecossistema (ilustra variância):  
  `https://github.com/anthropics/claude-code/issues/24121`

---

## 10. Avisos finais

- **Nomes:** em fontes distintas aparecem variações do sobrenome (**Urzedo** / **Unitri**) — tratar como a mesma pessoa física até confirmação.
- **“Export completo” de share Claude:** árvore de acessibilidade **corta** texto; para fidelidade byte-a-byte, usar **Copy** por mensagem no site ou ferramenta com sessão logada.
- **Datas:** qualquer coisa “confirmada em 23/04/2026” no briefing web **envelhece** — sempre revalidar.

---

*Documento gerado a partir da sessão Cursor que produziu este handoff. Última atualização de conteúdo: **24/04/2026** (ajustar se o agente incorporar novas evidências).*
