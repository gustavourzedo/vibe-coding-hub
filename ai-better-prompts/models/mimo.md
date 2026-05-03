# MiMo

## Papel recomendado

Use MiMo como motor de volume agentico, especialmente no OpenCode.

Pelo uso pratico, MiMo pareceu render melhor no OpenCode do que no Zed. No Zed houve loops e erros de API/tool com imagens. No OpenCode, ele pareceu mais estavel e produtivo para execucao.

Melhor para:

- execucao longa
- leitura e edicao de repo
- validacoes com terminal
- implementacao incremental
- atualizacao de docs/state
- trabalho com prompts bem sequenciados

Evite para:

- prompts ambigueos com artefatos nao gerados
- analise de imagens sem pipeline confiavel
- repetir a mesma tool apos erro
- threads contaminadas por conclusao antiga

## Como promptar

MiMo precisa de sequencia operacional clara.

Bom:

```text
Ordem obrigatoria:
1. gere o artefato
2. confirme no disco
3. analise
4. compare com log
5. atualize estado

Se a tool falhar, nao repita a mesma chamada mais de 1 vez.
Use alternativa por arquivo/log/comando.
```

Ruim:

```text
Analise os prints recentes e veja se funciona.
```

## Anti-loop

Inclua sempre quando houver risco de tool/image:

```text
Se voce repetir o mesmo raciocinio ou a mesma chamada de tool duas vezes sem progresso, pare, resuma o bloqueio e proponha alternativa.
```

## Caveman com MiMo

Use caveman apenas quando a tarefa estiver ancorada.

Bom uso:

- resposta final curta
- validacao objetiva
- patch pequeno

Mau uso:

- handoff inicial
- interpretacao de divergencia
- correcao de prompt ruim
- analise de premissa falsa

## OpenCode

No OpenCode, prefira prompts que:

- digam exatamente quais comandos rodar
- evitem comandos interativos
- estabelecam timeout/limite
- peçam atualizar docs/state
- definam plano B para imagens/PDFs

## Zed

No Zed, use MiMo com mais cautela:

- evite depender de vision se a integracao falhou
- mantenha tasks menores
- troque de thread ao primeiro loop
- use OpenCode quando precisar de autonomia maior
