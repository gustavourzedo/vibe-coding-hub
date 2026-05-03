# Documentação de Uso Recente - VibeCoding Study Case
**Atualizado em**: 27/04/2026 15:23 BRT  
**Foco**: Detalhamento máximo do uso real, mecanismo de coleta e correções de análises anteriores

---

## 1. Mecanismo de Coleta de Telemetria
A aplicação combina coleta automática e fontes manuais, processadas via script Python:

### Script Automatizado
- Arquivo: `scripts/update_telemetry.py`
- Fonte automática: Banco SQLite do Cursor (`C:\Users\gusta\.cursor\ai-tracking\ai-code-tracking.db`)
- Coleta:
  - Eventos totais de uso (198.258 no Cursor)
  - Janela de 7 dias (90.643 eventos no Cursor)
  - Modelos mais usados (ex: claude-opus-4-7-xhigh = 71% dos últimos 7d)
  - Projetos com maior uso (ex: empty-window / f-KLG-Bots = 28.125 eventos)
  - Contagem diária dos últimos 14 dias

### Fontes Manuais
- Arquivo: `telemetry/manual_sources.json`
- Inserção manual de snapshots de:
  - OpenCode Go (telemetria extraída de `opencode.db` local)
  - ChatGPT Plus + Codex Desktop
  - Status operacional do Cursor

### Saída Final
- Arquivo: `telemetry/latest_telemetry.json` (compilado automaticamente em 27/04/2026 15:23 BRT)
- Consumido pela página `telemetria.html` para exibição

---

## 2. Detalhamento Máximo de Uso Recente
Todos os dados extraídos de arquivos de workspace reais:

### 2.1 OpenCode Go (Ativo)
- **Período de uso**: 18h totais (26/04 21:30 → 27/04 15:22 BRT)
- **Versão**: 1.14.28
- **Métricas de sessão**:
  - 8 sessões, 522 mensagens (prompts do usuário)
  - 2209 parts, 680 tool calls, 412 reasoning blocks
  - 68 edições de arquivo, 168 leituras, 353 comandos bash, 14 buscas grep
  - 644 adições de código, 117 deleções, 14 arquivos alterados
  - 1 pergunta ao usuário apenas
- **Workspaces usados**:
  1. F:\KLG Bots
  2. G:\Work\Movida\Git\RCA_Vetor_Abril2026
  3. G:\Work\Movida\Projetos\SigNoz
  4. G:\Work\NTT DATA\Projeto Compra Agora
  5. G:\Work\Up Cloud\projetos\VibeCoding - Study Case
- **Top 3 sessões**:
  1. *Retomada KLG Bots validacao E2E Sprint 14*: 232 mensagens, 1053 min (17,55h), 516 adições, 117 deleções
  2. *SigNoz CS Brasil apresentacao comparativa*: 123 mensagens, 39 min
  3. *Continuidade RCA Vetor Frotas rastreio causa raiz*: 70 mensagens, 86 min
- **Relato de uso**: 31% da quota mensal consumida em 0,5 dia
- **Cálculo de taxa**: 522 mensagens / 18h = ~29 prompts/hora (uso leve, dúvidas pontuais)

### 2.2 Cursor (Degradado)
- **Status**: Quota principal estourada, uso limitado a composer-2
- **Dados totais**: 198.258 eventos desde 30/03/2026
- **Últimos 7 dias (20/04 → 27/04)**:
  - 90.643 eventos (89,8% modelos frontier)
  - Top modelos:
    1. claude-opus-4-7-xhigh (64.346 eventos, 71%)
    2. composer-2 (9.212 eventos, 10,2%)
    3. claude-4.6-opus-max (7.336 eventos, 8,1%)
  - Top projetos:
    1. empty-window / f-KLG-Bots (28.125 eventos)
    2. c-Users-gusta-cursor / empty-window (18.887 eventos)
    3. SERVIDOR-Drive-GnBots (16.257 eventos)
  - Contagem diária (últimos 7 dias):
    - 27/04: 2.236 eventos
    - 24/04: 259 eventos
    - 23/04: 49.821 eventos
    - 22/04: 27.052 eventos
    - 21/04: 4.308 eventos
    - 20/04: 6.965 eventos

### 2.3 ChatGPT Plus + Codex Desktop (Ativo)
- **Snapshot**: 24/04/2026 02:05 BRT
- **Quotas**:
  - 5h: 24% restante (76% usado)
  - Semanal: 88% restante (12% usado)
- **Uso**: Estudo de viabilidade pesado + trabalho no KLG Bots

---

## 3. Correções de Análises Anteriores (Erros Cometidos)
| Erro Anterior | Correção |
|---------------|----------|
| Confundir "prompt" (mensagem do usuário) com "invocações" (tool calls + reasoning blocks) | 1 prompt = 1 mensagem sua (ex: 522 prompts no OpenCode Go). Invocações são 15-20 por prompt (doc oficial GLM) |
| Cálculo errado de 1300 invocações/dia | Correto: 1092 invocações totais / 0,75 dias = ~1450 invocações/dia (irrelevante para cálculo de planos GLM, que contam prompts) |
| Aplicar taxa de prompts atual (29/h, dúvidas leves) ao uso planejado de GLM-5.1 | Uso pesado de coding (estilo KLG Bots) é 13 prompts/h (232 mensagens / 1053 min), não 29/h |
| Subestimar consumo de GLM-5.1 | Multiplicador de 3× pico aplica-se a **prompts do usuário**, não invocações internas |

---

## 4. Padrões de Uso Identificados
| Perfil | Exemplo | Prompts/hora | Fonte no Workspace |
|--------|---------|--------------|--------------------|
| Leve (atual, OpenCode Go) | Dúvidas pontuais, curtas | ~29/h (522 mensagens / 18h) | manual_sources.json |
| Pesado (planejado, GLM-5.1) | Coding complexo, sessões longas | ~13/h (232 mensagens / 1053 min) | Sessão KLG Bots no OpenCode Go |

---

## 5. Avaliação de Planos para Seu Uso
### GLM Coding Plan Pro (US$ 72/mês)
- Limite: 2.000 prompts/semana = ~286 prompts/dia
- Seu uso pesado: ~100 prompts/dia (700/semana)
- Com multiplicador 3× pico: 700 *3 = 2100 equivalentes/semana (margem mínima)
- Com promo 1× off-peak (até junho): 700 equivalentes/semana (35% do limite)
- **Veredito**: Suficiente para uso pesado, folga com promo de off-peak

### Alibaba Cloud Pro (US$ 50/mês)
- Limite: 90.000 requests/mês = ~3225 requests/dia
- Seu uso pesado de 100 prompts/dia é 3% do limite
- **Veredito**: Excessivamente folgado, mas não inclui modelos GLM-5.1 de ponta

---

## 6. Dados Brutos Extraídos (JSON)
### OpenCode Go (manual_sources.json)
```json
{
  "sessions": 8,
  "messages": 522,
  "parts": 2209,
  "tool_calls": 680,
  "file_edits": 68,
  "file_reads": 168,
  "bash_commands": 353,
  "grep_searches": 14,
  "reasoning_blocks": 412,
  "questions_to_user": 1,
  "code_additions": 644,
  "code_deletions": 117,
  "files_changed": 14
}
```

### Cursor (latest_telemetry.json)
- Eventos totais: 198.258
- Eventos últimos 7d: 90.643
- Share frontier últimos 7d: 89,8%
- Top modelos últimos 7d:
  1. claude-opus-4-7-xhigh: 64.346 (71,0%)
  2. composer-2: 9.212 (10,2%)
  3. claude-4.6-opus-max: 7.336 (8,1%)
  4. claude-opus-4-7-max: 6.255 (6,9%)
  5. gpt-5.3-codex-xhigh: 1.533 (1,7%)

---

**Próximo passo recomendado**: Testar GLM Coding Plan Pro para uso pesado de coding, monitorando consumo de prompts na primeira semana.
