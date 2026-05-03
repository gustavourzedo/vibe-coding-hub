# Anthropic Opus / Sonnet

## Papel recomendado

Opus e Sonnet sao fortes para interpretacao, codigo complexo, escrita clara e manutencao de contexto.

Use Opus para:

- RCA dificil
- arquitetura
- interpretacao ambigua
- revisao de plano critico

Use Sonnet para:

- execucao de coding diaria
- refactors moderados
- revisao de implementacao
- sessoes agenticas longas com boa disciplina

## Como promptar

Anthropic tende a responder bem a instrucoes de papel e criterio.

```text
Atue como engenheiro senior.
Primeiro reconstrua o estado.
Depois escolha a menor proxima etapa segura.
Nao edite ate confirmar o plano, a menos que a tarefa seja explicitamente de execucao.
```

Para execucao:

```text
Implemente o menor delta seguro.
Nao expandir escopo.
Valide com teste/comando real.
Atualize docs/state se comportamento mudou.
Resposta final curta.
```

## Caveman

Evite caveman em Opus quando ele esta sendo usado justamente por nuance.

Use compactacao so no fim:

```text
Resumo final compacto, mas preserve detalhes tecnicos que impactam a proxima sessao.
```

## Melhor uso na stack

- Opus revisa tese e bloqueios caros.
- Sonnet executa tarefas com bom equilibrio.
- MiMo/Qwen/DeepSeek carregam volume quando a etapa esta clara.
