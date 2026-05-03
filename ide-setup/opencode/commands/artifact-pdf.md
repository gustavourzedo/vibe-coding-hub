---
description: Prepare a PDF for agentic analysis
---

Treat PDF handling as a pipeline, not a raw file read.

For `$ARGUMENTS`:

1. Use `pdf_extract_text` first.
2. If visual layout matters, use `pdf_render_pages`.
3. Read the generated text artifact from `.opencode-artifacts/pdf-text/`.
4. If screenshots were rendered and the active model supports images, inspect the relevant PNGs. If not, state that visual inspection needs an image-capable model or MCP.
5. Return a concise summary of:
   - what was extracted
   - where the artifacts were written
   - what can be concluded now
   - what still needs visual inspection
