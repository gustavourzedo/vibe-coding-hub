# VibeCoding Study Case - Agent Rules

Global guidance for this hub and its operational docs.

- Check project `AGENTS.md` first when present.
- Prefer concise execution over long narration.
- Use browser/runtime tools for UI validation instead of guessing from code alone.
- Use screenshots, PDFs and saved artifacts when the workspace includes them.
- For large refactors or root-cause analysis, plan first, then edit.
- For frontend work, prefer live validation in browser and align code with design tokens/components when design context exists.
- For Figma-driven work, use the official Figma MCP/plugin when available in the host app before falling back to screenshots or copied specs.
- For architecture diagrams, prefer Mermaid for versioned docs, PlantUML for UML/C4-style diagrams, and draw.io or Excalidraw assets when the workspace already uses them.

## OpenCode terminal anti-hang policy

OpenCode terminal/tools can hang when a command starts a long-running child process, watcher, GUI app, emulator, server, daemon or process that keeps stdout/stderr pipes open.

Default rule:

- Use non-interactive commands.
- Any command that can keep running must have an explicit timeout, observation window or detached execution plan.
- Do not run watchers, dev servers, emulators, ADB daemons, bot runners or GUI processes synchronously unless the user explicitly asks for an interactive run.
- Prefer detached `Start-Process -WindowStyle Hidden` plus logs for long-running Windows processes.
- If a command does not return in the expected window, stop treating it as normal progress and report the first real blocking point.
- Do not repeat the same terminal action after a hang without changing strategy.
- For validation runs, generate logs/artifacts/snapshots, then stop the process and analyze outputs.

Prompt rule for OpenCode sessions:

```text
Use comandos nao interativos.
Qualquer comando que possa ficar rodando deve ter timeout, janela de observacao ou execucao destacada com log.
Nao rode watcher, servidor, emulador, ADB daemon, bot runner ou GUI app de forma sincrona.
Se um comando nao retornar no tempo esperado, pare, reporte o bloqueio e mude a estrategia.
```

## Optional token-economy mode

- If user asks for `caveman`, `modo economico` or `resposta compacta`, switch to terse execution style.
- Keep technical substance exact. Remove filler, hedging and repetition.
- Fragments OK when clarity survives.
- Code, names, commits and diffs stay normal and readable.
