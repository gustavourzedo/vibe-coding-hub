# OpenCode

## Papel recomendado

OpenCode virou a superficie principal para execucao com MiMo neste setup.

Motivos:

- melhor autonomia de terminal
- melhor comportamento do MiMo em execucao
- configuracao flexivel de providers
- bom encaixe para tools locais
- pode operar como harness pesado para repos grandes

## Como promptar no OpenCode

OpenCode precisa de comandos nao interativos e limites claros.

```text
Use comandos nao interativos.
Evite abrir prompts que travam terminal.
Se comando puder ficar rodando, use timeout, janela de observacao ou execucao destacada com log.
Nao rode watcher, servidor, emulador, ADB daemon, bot runner ou GUI app de forma sincrona.
Para validacao runtime, gere logs/artefatos/snapshots, encerre e analise a saida.
Se comando nao retornar no tempo esperado, pare, reporte o bloqueio e mude a estrategia.
Nao repetir mesma tool apos falha sem mudar estrategia.
```

## Politica anti-terminal-travado

Esta regra deve ser tratada como memoria operacional do projeto.

Comandos perigosos por padrao:

- `dotnet run` quando inicia processo longo
- `adb`/`adb.exe` quando inicia ou depende do daemon
- `ldconsole`/LDPlayer
- `klgbots.exe start`
- `npm run dev`, watchers e servidores
- scripts de batch/pipeline sem limite
- qualquer `Start-Process -Wait` em GUI ou daemon

Padrao seguro:

```powershell
Start-Process -FilePath "cmd.exe" -ArgumentList '/c <script>.bat' -WindowStyle Hidden
Get-Content "<log>" -Tail 80
```

Para runs de validacao, prefira "rodar por N segundos, salvar artefatos, parar, analisar" em vez de deixar o terminal preso no processo vivo.

## Artefatos nao-texto

Se a IDE/modelo nao le bem imagem/PDF:

- converta PDF para texto
- renderize paginas para PNG
- copie imagem para pasta do projeto
- use ferramenta de visao quando disponivel
- se a tool falhar, registre o bloqueio e use log/manifest como fallback

## Windows + WSL

Melhor dos dois mundos:

- Windows nativo para LDPlayer, ADB, caminhos reais, tools do PC
- WSL para bash, grep/sed, pipelines Unix e isolamento quando fizer sentido

Nao forcar WSL quando a tarefa depende de programas Windows.

## Regra de autonomia

Se o usuario autorizou execucao ampla, o prompt deve dizer:

```text
Nao me pergunte confirmacao intermediaria.
Continue ate concluir a etapa ou encontrar bloqueio real.
```

Mas ainda deve preservar:

- backups quando perigoso
- escopo claro
- nada destrutivo fora do repo sem motivo explicito
