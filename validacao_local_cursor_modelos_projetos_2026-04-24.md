# Validação local do uso real no Cursor por projeto

> Data: **24/04/2026**  
> Objetivo: validar, com artefatos locais do computador, se o consumo pesado da semana pode ou não ser atribuído principalmente ao `composer-2`.

---

## 1. Conclusão curta

**Não.**  
Os artefatos locais indicam com folga que o uso pesado da semana **não** foi predominantemente `composer-2`.

Nos projetos mais relevantes citados pelo usuário, os registros locais mostram forte predominância de variantes de:

- `claude-opus-4-7-xhigh`
- `claude-opus-4-7-max`
- `claude-4.6-opus-max`

O `composer-2` aparece em alguns fluxos, mas como parcela **secundária** ou **marginal** em comparação com o volume associado ao Opus.

---

## 2. Fontes locais usadas

### 2.1 Banco principal de tracking

Arquivo:

- `C:\Users\gusta\.cursor\ai-tracking\ai-code-tracking.db`

Tabelas encontradas:

- `ai_code_hashes`
- `ai_deleted_files`
- `conversation_summaries`
- `scored_commits`
- `tracked_file_content`
- `tracking_state`

### 2.2 Projetos locais do Cursor encontrados

Pastas relevantes em:

- `C:\Users\gusta\.cursor\projects`

Projetos confirmados:

- `f-KLG-Bots`
- `SERVIDOR-Drive-GnBots`
- `c-Users-gusta-cursor`

Além disso, foi identificada atividade de projeto de vídeo em:

- `C:\Users\gusta\.cursor\workspace\pessoal\clipforge`

Esse projeto aparece ligado a transcripts dentro de `c-Users-gusta-cursor`.

---

## 3. Evidência estrutural de atividade pesada

### 3.1 KLG Bots

Transcripts relevantes:

- `C:\Users\gusta\.cursor\projects\f-KLG-Bots\agent-transcripts\54d34188-457c-4f70-bb06-bba1545c69e5\54d34188-457c-4f70-bb06-bba1545c69e5.jsonl`
- `C:\Users\gusta\.cursor\projects\f-KLG-Bots\agent-transcripts\69358812-d143-409b-a74f-9d8556e230bf\69358812-d143-409b-a74f-9d8556e230bf.jsonl`

Volume observado:

- transcript principal com **2.289.382 bytes**
- **1.533 linhas**
- **55 mensagens de usuário**
- **1.531 tool uses**

Isso sozinho já mostra uma sessão agentic pesada, muito longe de um uso trivial.

### 3.2 GnBots

Transcripts relevantes:

- `C:\Users\gusta\.cursor\projects\SERVIDOR-Drive-GnBots\agent-transcripts\a05a8964-ff8d-42b9-b5b1-2e0cf07c2248\a05a8964-ff8d-42b9-b5b1-2e0cf07c2248.jsonl`
- `C:\Users\gusta\.cursor\projects\SERVIDOR-Drive-GnBots\agent-transcripts\5c2f81c7-2c19-46d3-9424-e835978bfb85\5c2f81c7-2c19-46d3-9424-e835978bfb85.jsonl`
- `C:\Users\gusta\.cursor\projects\SERVIDOR-Drive-GnBots\agent-transcripts\2fbb3b4d-7d3d-4269-83b2-d6bb4efdbf84\2fbb3b4d-7d3d-4269-83b2-d6bb4efdbf84.jsonl`

Volume observado:

- transcript de **1.077.184 bytes**
- transcript de **455.187 bytes**
- transcript de **434.644 bytes**

Também é atividade muito forte de agente, com múltiplas sessões grandes.

### 3.3 Projeto `.cursor` / ClipForge

Transcripts relevantes em `c-Users-gusta-cursor`:

- `C:\Users\gusta\.cursor\projects\c-Users-gusta-cursor\agent-transcripts\5f09bd07-bc8a-4011-83ab-560c384f4187\5f09bd07-bc8a-4011-83ab-560c384f4187.jsonl`
- `C:\Users\gusta\.cursor\projects\c-Users-gusta-cursor\agent-transcripts\6fc050a3-e892-46e3-9b8b-f12d5dbfd0de\6fc050a3-e892-46e3-9b8b-f12d5dbfd0de.jsonl`

Volume observado:

- transcript de **796.004 bytes**
- transcript de **2.190.384 bytes**

No conteúdo desses transcripts aparece explicitamente o projeto:

- `Workspace: C:\Users\gusta\.cursor\workspace\pessoal (projeto ClipForge)`

Ou seja: o trabalho de edição de vídeo ficou de fato registrado localmente e com alta intensidade.

---

## 4. Evidência de modelo por conversa

O banco `ai_code_hashes` trouxe contagens por `conversationId`, o que permite validar os modelos associados às conversas dos projetos.

### 4.1 KLG Bots

#### Conversa `54d34188-457c-4f70-bb06-bba1545c69e5`

- `claude-opus-4-7-xhigh`: **24.871**
- `composer-2`: **82**

#### Conversa `69358812-d143-409b-a74f-9d8556e230bf`

- `claude-opus-4-7-xhigh`: **3.172**

### Leitura

Em KLG Bots, o uso validado localmente é **claramente dominado por Opus 4.7 xhigh**.  
`composer-2` existe, mas é residual perto do volume de Opus.

---

### 4.2 GnBots

#### Conversa `a05a8964-ff8d-42b9-b5b1-2e0cf07c2248`

- `claude-4.6-opus-max`: **7.336**
- `gpt-5.3-codex-xhigh`: **1.533**
- `composer-2`: **1.470**
- `claude-opus-4-7-max`: **92**
- `claude-opus-4-7-xhigh`: **13**

#### Conversa `5c2f81c7-2c19-46d3-9424-e835978bfb85`

- `claude-opus-4-7-xhigh`: **912**

#### Conversa `2fbb3b4d-7d3d-4269-83b2-d6bb4efdbf84`

- `claude-opus-4-7-xhigh`: **4.060**

### Leitura

GnBots mostra um perfil mais misto do que KLG Bots, mas ainda assim **não** é um cenário “basicamente composer-2”.

O que aparece com força ali é:

- `claude-4.6-opus-max`
- `claude-opus-4-7-xhigh`
- `gpt-5.3-codex-xhigh`

O `composer-2` existe, mas é apenas uma fração do total relevante.

---

### 4.3 Projeto `.cursor` / ClipForge

#### Conversa `5f09bd07-bc8a-4011-83ab-560c384f4187`

- `claude-opus-4-7-max`: **6.164**
- `claude-opus-4-7-xhigh`: **5.632**
- `composer-2`: **102**

#### Conversa `6fc050a3-e892-46e3-9b8b-f12d5dbfd0de`

- `claude-opus-4-7-xhigh`: **18.887**

### Leitura

No projeto de vídeo / ClipForge, a dominância de Opus é ainda mais clara.

Especialmente importante:

- uma conversa sozinha com **18.887** registros em `claude-opus-4-7-xhigh`
- outra com mais de **11 mil** registros combinando `opus-4-7-max` e `opus-4-7-xhigh`
- apenas **102** registros de `composer-2` nessa conversa mista

Isso praticamente elimina a hipótese de que esse trabalho pesado tenha sido sustentado majoritariamente por `composer-2`.

---

### 4.4 Conversa vazia / estudo atual

Para contraste, a conversa do estudo atual em `empty-window`:

#### Conversa `5d056e7e-40cc-4842-808e-fc31d4ae0163`

- `composer-2`: **174**

### Leitura

Essa é justamente a conversa que podia enviesar a interpretação, porque ela é uma sessão recente e dominada por `composer-2`.  
Mas ela **não representa** o padrão dos projetos pesados da semana.

---

## 5. Agregado da semana no banco local

Consulta agregada em `ai_code_hashes` para a janela estudada trouxe:

- `claude-opus-4-7-xhigh`: **74.171**
- `claude-opus-4-7-high`: **11.373**
- `claude-4.6-opus-max`: **7.336**
- `composer-2`: **6.715**
- `claude-opus-4-7-thinking-high`: **6.557**
- `claude-opus-4-7-max`: **6.256**
- `gpt-5.3-codex-xhigh`: **1.533**

### Leitura

Mesmo no agregado, `composer-2` fica muito abaixo do conjunto de variantes Opus.

Somando apenas algumas variantes mais diretamente relevantes:

- `claude-opus-4-7-xhigh`
- `claude-opus-4-7-high`
- `claude-opus-4-7-thinking-high`
- `claude-opus-4-7-max`
- `claude-4.6-opus-max`

o volume fica muito acima do registrado para `composer-2`.

---

## 6. O que isso prova para o estudo de viabilidade

### 6.1 O que fica invalidado

Fica invalidada a leitura simplista de que:

- o custo extremo da semana pode ter vindo principalmente de `composer-2`;
- ou que a atividade mais pesada estava concentrada em um LLM tecnicamente bem inferior.

### 6.2 O que fica reforçado

Fica reforçado que:

- seu parâmetro extremo de referência é legítimo;
- o benchmark mental correto para a substituição continua sendo um cenário fortemente baseado em **Opus topo**;
- a recomendação deve mirar um substituto para **uso frontier-heavy**, não para uso barato de modelo mediano.

### 6.3 Impacto na recomendação de assinatura

Essa validação local fortalece ainda mais a orientação anterior:

- se a meta é chegar o mais perto possível da experiência real que você teve,
- então o plano principal continua tendo que ser comparado com **Opus-heavy real**,
- e não com `composer-2`.

Em outras palavras:

**a barra de qualidade do estudo sobe, não desce.**

---

## 7. Conclusão final

Com base nos arquivos locais do próprio Cursor e dos projetos:

### o uso pesado da semana foi, de fato, majoritariamente associado a variantes fortes de Opus

Principalmente:

- `claude-opus-4-7-xhigh`
- `claude-opus-4-7-max`
- `claude-4.6-opus-max`

O `composer-2` aparece, mas:

- não domina KLG Bots;
- não domina GnBots;
- não domina o projeto de vídeo ClipForge;
- e não explica sozinho, nem de longe, o perfil extremo observado.

Portanto, o estudo de assinatura deve continuar usando como referência um cenário de **uso frontier pesado real**, com Opus como padrão de comparação.
