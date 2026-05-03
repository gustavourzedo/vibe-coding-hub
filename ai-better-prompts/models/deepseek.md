# DeepSeek

## Papel recomendado

DeepSeek entra como camada de custo-beneficio e loop barato.

Melhor para:

- exploracao inicial
- tarefas mecanicas
- validacoes repetitivas
- patches pequenos
- atualizacao de docs
- revisar logs simples

Evite para:

- decisoes arquiteturais finais sem revisao
- RCA muito sutil
- interpretacao de estado contraditorio em projeto grande

## Como promptar

Use prompts fechados e verificaveis.

```text
Faca apenas esta etapa.
Nao expandir escopo.
Se encontrar bloqueio, pare no primeiro bloqueio real.
Resposta curta com evidencia.
```

## Boa estrategia

DeepSeek funciona bem como "batedor":

1. localizar arquivos
2. resumir pontos provaveis
3. sugerir patch minimo
4. deixar modelo forte revisar se for critico

## Cuidados

Nao confunda "bom o bastante" com "fonte final".

Em projeto pesado, DeepSeek pode acelerar muito, mas a validacao precisa ser objetiva.
