# OpenCode Setup

OpenCode virou a superficie principal deste ambiente.

## Objetivo do setup

- autonomia alta no Windows
- bom throughput com `MiMo`
- fallback facil para `GLM`
- terminal menos propenso a loop
- pipeline canonico para PDF e artefatos visuais

## Estrategia operacional

- host principal: `Windows nativo`
- WSL: trilha auxiliar, nao host principal
- roots amplos no filesystem MCP:
  - `C:\Users\gusta`
  - `C:\LDPlayer`
  - `D:\`
  - `E:\`
  - `F:\`
  - `G:\`

## Providers

- `zai-glm`
  - `zai-glm/glm-5.1`
  - `zai-glm/glm-4.7`
- `xiaomi-mimo`
  - `xiaomi-mimo/mimo-v2.5-pro`
  - `xiaomi-mimo/mimo-v2.5`

## MCPs principais

- `filesystem`
- `sequential-thinking`
- `context7`
- `zai-mcp-server`
- `web-search-prime`
- `web-reader`
- `zread`
- `playwright`
- `chrome-devtools`

## Estabilizacao aplicada

- `compaction.auto = true`
- `compaction.prune = true`
- `permission.doom_loop = deny`
- `watcher.ignore` para artefatos ruidosos
- `bash` sem asks intermediarios no fluxo normal

## Memoria anti-terminal-travado

Regra permanente para OpenCode neste PC:

- usar comandos nao interativos
- qualquer comando que possa ficar rodando precisa de timeout, janela de observacao ou execucao destacada com log
- nao rodar watcher, servidor, emulador, ADB daemon, bot runner ou GUI app de forma sincrona
- preferir `Start-Process -WindowStyle Hidden` + arquivo de log para processos longos no Windows
- para validacao runtime, gerar logs/artefatos/snapshots, encerrar e analisar os outputs
- se um comando nao retornar no tempo esperado, parar, reportar o bloqueio e mudar a estrategia
- nao repetir a mesma acao de terminal depois de travar

Prompt padrao:

```text
Use comandos nao interativos.
Qualquer comando que possa ficar rodando deve ter timeout, janela de observacao ou execucao destacada com log.
Nao rode watcher, servidor, emulador, ADB daemon, bot runner ou GUI app de forma sincrona.
Se um comando nao retornar no tempo esperado, pare, reporte o bloqueio e mude a estrategia.
```

## Limites conhecidos

- OpenCode e texto/tool-first.
- Nao tratar PDF cru ou imagem crua como entrada ideal.
- Para PDF:
  - usar `pdf_extract_text`
  - usar `pdf_render_pages` se layout importar
- Para visao:
  - identificar arquivos concretos primeiro
  - usar comando de artifact vision
  - se a analise visual falhar, nao insistir em retry cego

## Restauracao

1. Copiar `opencode.template.jsonc` para `C:\Users\gusta\.config\opencode\opencode.jsonc`
2. Copiar `tools/` para `C:\Users\gusta\.config\opencode\tools\`
3. Copiar `commands/` para `C:\Users\gusta\.config\opencode\commands\`
4. Copiar/mesclar `AGENTS.global.template.md` em `C:\Users\gusta\.config\opencode\AGENTS.md`
5. Garantir as variaveis:
   - `Z_AI_API_KEY`
   - `Z_AI_MODE`
   - `XIAOMI_MIMO_API_KEY`
6. Reiniciar o OpenCode
