# Escolha de modelo por tipo de tarefa

Escolher modelo errado e uma das formas mais caras de errar prompt.

## Principio

Use o modelo mais barato que consegue concluir a fase atual com confianca.

Nao use modelo frontier para:

- listar arquivos
- aplicar patch simples
- rodar comando repetitivo
- atualizar doc mecanica
- formatar resumo

Use modelo forte para:

- root cause analysis dificil
- decisao arquitetural
- leitura de repo ambigua
- bugs que cruzam runtime, logs e codigo
- revisao de prompt/plano antes de execucao cara

## Matriz rapida

| Tarefa | Modelo/harness sugerido |
| --- | --- |
| Retomada de projeto complexo | GLM, Sonnet, Opus, ChatGPT/Codex |
| Execucao longa com tools | MiMo em OpenCode, Sonnet/Claude Code, Codex |
| Refactor seguro pequeno | MiMo base, Qwen, DeepSeek, mini forte |
| RCA dificil | GLM, Opus, GPT frontier |
| Validacao runtime repetitiva | OpenCode com MiMo/Qwen/DeepSeek |
| Escrita de docs/state | MiMo, Qwen, mini, ChatGPT |
| Prompt design/meta-raciocinio | GLM, ChatGPT, Opus/Sonnet |
| Loop barato de exploracao | DeepSeek/Qwen/OpenCode Go |

## Quando trocar de modelo

Troque quando:

- o agente repetiu a mesma ideia duas vezes
- houve erro de tool/API e ele nao mudou estrategia
- a tarefa virou RCA e o modelo barato esta chutando
- a tarefa virou execucao mecanica e o modelo caro esta queimando quota
- a IDE/harness esta atrapalhando mais que o modelo

## Quando trocar de thread

Troque antes de trocar de modelo se:

- a thread esta longa
- existe conclusao antiga falsa
- o agente esta preso no mesmo raciocinio
- o prompt atual nao separou fases
- o historico contradiz o estado do repo

## Regra pratica

Para projetos pesados:

1. Modelo forte escolhe plano.
2. Modelo eficiente executa.
3. Modelo forte revisa bloqueio dificil.
4. Modelo barato atualiza docs e prepara handoff.

Isso tende a ser mais barato do que deixar um unico modelo premium tentar tudo.
