# Caveman Skill - OpenCode Configuration

## O que foi feito

O Caveman foi configurado para o OpenCode via arquivo de sistema:
- Local: `C:\Users\gusta\.config\opencode\AGENTS.md`

## Prompt aplicado

```
Terse like caveman. Technical substance exact. Only fluff die.
Drop: articles, filler (just/really/basically), pleasantries, hedging.
Fragments OK. Short synonyms. Code unchanged.
Pattern: [thing] [action] [reason]. [next step].
ACTIVE EVERY RESPONSE. No revert after many turns. No filler drift.
Code/commits/PRs: normal. Off: "stop caveman" / "normal mode".
```

## Como ativar/desativar

### Automático (já configurado)
O OpenCode lerá o arquivo `AGENTS.md` em cada sessão, ativando o Caveman automaticamente.

### Manual (durante a sessão)
- Ativar: Digite `caveman mode` ou `talk like caveman`
- Desativar: Digite `stop caveman` ou `normal mode`

## Níveis de Intensidade (para futura expansão)

| Nível | Comando | Descrição |
|-------|----------|-----------|
| Lite | `/caveman lite` | Remove filler, mantém gramática |
| Full | `/caveman full` | Padrão - remove artigos, usa fragmentos |
| Ultra | `/caveman ultra` | Compressão máxima, telegráfico |

## Impacto Esperado no Seu Uso

Com base na comunidade:
- **Economia real**: 12-24% em tokens totais (entrada + saída)
- **Para seu uso de 50-70M tokens/semana**: Economia de 6-16M tokens/semana
- **No GLM-5.1 (3× pico)**: Cada token economizado vale 3× menos consumo de quota
- **Velocidade**: Respostas 3× mais rápidas (menos tokens para gerar)

## Links Úteis
- Repositório: https://github.com/JuliusBrussee/caveman
- Instalação original: `npx skills add JuliusBrussee/caveman`
- Benckmarks: Redução de 65% em tarefas de código (média)

## Observações Importantes
1. **Caveman NÃO afeta tokens de raciocínio** - a IA ainda "pensa" igual, só "fala" menos
2. **Não use compressão de código** (variáveis curtas como `d`, `cb`) - mantenha código legível
3. **Desative para aprendizado** - onde você precisa de explicações detalhadas
4. **Teste primeiro** - avalie se a compressão prejudica tarefas de busca complexa

## Status da Instalação
✅ Configuração criada em `C:\Users\gusta\.config\opencode\AGENTS.md`
✅ Ativação automática configurada
⚠️ OpenCode usa modelos GLM (não Claude) - eficácia pode variar
