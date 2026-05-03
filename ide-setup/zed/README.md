# Zed Setup

Zed continua importante como IDE secundaria forte.

## Papel atual

- boa superficie de comparacao
- bom agent panel
- util para alguns fluxos com `GLM` e `MiMo`
- nao e mais a IDE principal neste ambiente

## Ponto de atencao

- usar providers OpenAI-compatible
- preferir variaveis de ambiente em vez de segredos inline
- se o agent entrar em loop ou tool/image falhar, abrir thread nova por fase

## Restauracao

1. Copiar `settings.template.json` para:
   - `C:\Users\gusta\AppData\Roaming\Zed\settings.json`
2. Preencher apenas via variaveis de ambiente ou secure storage
3. Reiniciar Zed

## Models esperados

- `ZAI GLM`
  - `glm-5.1`
  - `glm-4.7`
- `Xiaomi MiMo`
  - `mimo-v2.5-pro`
  - `mimo-v2.5`
