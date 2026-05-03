# Templates de prompts

Copie, ajuste e use. Estes templates foram escritos para funcionar em Zed, OpenCode, Cursor, Codex, Claude Code e outros agentes.

## Retomada sem editar

```text
Retomada de trabalho neste repo.
Nao edite nada ainda.

Leia primeiro:
- AGENTS.md
- docs/CURRENT-STATE.md
- docs/SPRINT-*.md mais relevante
- qualquer plano/handoff indicado no estado atual

Quero que voce reconstrua:
- objetivo atual
- ultimo ponto realmente validado
- diferenca entre implementado, exercitado e validado
- riscos principais
- menor proxima etapa segura
- arquivos que governam esta frente

Resposta curta, mas nao use caveman full. Priorize interpretacao correta.
```

## Escolher menor proxima etapa

```text
Com base no estado atual, escolha a menor proxima etapa segura.

Criterios:
- menor custo de validacao
- menor risco
- maior poder de confirmar ou invalidar a hipotese principal
- menor dependencia externa

Nao edite nada ainda.

Resposta:
1. etapa
2. motivo
3. criterio de sucesso
4. comando ou arquivo inicial
```

## Execucao de ponta a ponta

```text
Execute a etapa escolhida de ponta a ponta, com o maximo de trabalho util neste prompt.

Ordem:
1. confirme o estado atual nos arquivos relevantes
2. aplique a menor alteracao segura
3. rode a validacao minima real
4. se falhar, diagnostique o primeiro bloqueio real e pare no menor ponto util
5. atualize docs/state se o comportamento real mudou

Regras:
- nao refatorar fora do escopo
- nao assumir sucesso por build apenas
- separar implementado, exercitado e validado
- nao pedir confirmacao intermediaria se puder continuar com seguranca

Resposta final:
- arquivos alterados
- comandos executados
- validacao
- estado/docs atualizados
- proximo passo
```

## Observabilidade com screenshots

```text
Validacao visual/runtime.

Nao confie apenas no log.

Ordem obrigatoria:
1. rode o fluxo que deve gerar snapshots/screenshots
2. verifique se os artefatos foram criados no disco
3. liste manifest/LATEST/ultimos arquivos com timestamp
4. analise as imagens mais recentes
5. compare imagem, log e estado esperado
6. conclua apenas com base em evidencia real

Se nenhum artefato for gerado, nao invente analise visual.
Pare e explique qual flag/comando/feature nao foi exercitada.
```

## OpenCode anti-terminal-travado

```text
Memoria operacional para esta sessao OpenCode:

Use comandos nao interativos.
Qualquer comando que possa ficar rodando deve ter timeout, janela de observacao ou execucao destacada com log.
Nao rode watcher, servidor, emulador, ADB daemon, bot runner ou GUI app de forma sincrona.
Para validacao runtime, rode por N segundos, gere logs/artefatos/snapshots, encerre e analise outputs.
Se um comando nao retornar no tempo esperado, pare, reporte o primeiro bloqueio real e mude a estrategia.
Nao repita a mesma acao de terminal depois de travar.
```

## Corrigir falsa premissa

```text
Suspeito que a conclusao anterior pode ter assumido uma premissa falsa.

Nao continue a partir da conclusao anterior.
Revalide pelos arquivos atuais e pelo runtime.

Verifique:
- o que o codigo realmente implementa
- o que foi realmente executado
- quais artefatos existem
- o que os logs provam
- o que ainda e inferencia

Resposta:
- premissa confirmada ou corrigida
- evidencia
- menor proxima acao
```

## Atualizar estado/documentacao

```text
Atualize a documentacao de estado do projeto.

Leia:
- AGENTS.md
- docs/CURRENT-STATE.md
- plano/sprint relevante
- logs/artefatos da ultima validacao

Registre:
- o que foi implementado
- o que foi exercitado
- o que foi validado
- evidencias objetivas
- divergencias encontradas
- proximo comando exato
- riscos/bloqueios

Nao transforme inferencia em validacao.
```

## Handoff para thread nova

```text
Gere um handoff compacto para a proxima thread.

Inclua:
- objetivo atual
- fonte de verdade
- ultimo ponto validado
- arquivos alterados
- comandos que passaram/falharam
- artefatos relevantes
- riscos
- proximo prompt recomendado

Formato objetivo. O handoff deve permitir retomar sem ler a thread inteira.
```

## Modo economico seguro

```text
Resposta compacta.
Sem filler.
Mas nao sacrifique interpretacao correta.

Mantenha:
- nomes exatos de arquivos
- comandos exatos
- diferenca entre implementado/exercitado/validado
- riscos reais
- proximo passo
```
