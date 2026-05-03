# Zed

## Papel recomendado

Zed e bom como IDE principal visual e workspace agentico, mas a combinacao modelo + agent pode variar muito.

No uso recente:

- Zed Agent funcionou para conversa e contexto
- MiMo no Zed teve sinais de loop e erro de API/tool com imagem
- OpenCode entregou melhor para MiMo em execucao pesada

## Como promptar no Zed

Use tarefas menores quando:

- o provider e novo
- ha risco de tool/vision
- a thread ja esta longa
- o agente comecou a repetir raciocinio

Prompt seguro:

```text
Tarefa pequena e verificavel.
Nao expandir escopo.
Se houver erro de API/tool, pare e reporte o bloqueio.
Nao tente a mesma chamada mais de uma vez sem mudar estrategia.
```

## Agentes externos

Zed pode funcionar como painel para:

- Zed Agent
- Codex CLI
- Claude Agent
- Cursor
- GitHub Copilot

Escolha o agente pela tarefa, nao pelo modelo sozinho.

## Quando sair do Zed

Use OpenCode/Codex quando:

- precisa de terminal mais autonomo
- precisa rodar ferramentas locais longas
- precisa analisar artefatos via pipeline
- o provider no Zed falha com imagem/tool

## Caveman no Zed

Caveman pode atrapalhar porque Zed ja compacta parte da experiencia em UI/thread.

Use so quando:

- tarefa esta clara
- resposta final deve ser curta
- nao ha ambiguidade

Evite em:

- retomada
- correcao de erro
- validacao de artefatos
- contexto complexo
