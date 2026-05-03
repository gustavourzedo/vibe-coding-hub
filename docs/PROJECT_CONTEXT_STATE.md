# VibeCoding Hub - Project Context And State

Last updated: 2026-05-03

Purpose: give another AI agent enough context to continue the frontend/product work in another IDE without depending on this chat history.

## 1. Product North Star

VibeCoding Hub is a technical decision hub for heavy AI coding workflows. It compares plans, models, IDEs, harnesses, orchestrators, benchmarks, community evidence, telemetry and prompt playbooks.

The frontend direction is not a generic static documentation site. It should feel like a modern technical intelligence console: visually strong, dynamic, easy to navigate, responsive, and readable both by humans and AI agents.

Primary requirements from the user:

- Preserve the existing content and page divisions.
- Make the UI/UX much more intuitive, beautiful, modern, technological and dynamic.
- Improve navigation with clear page groups such as Ranking, Benchmarks, Telemetria, Modelos, IDEs and Better Prompts.
- Avoid confusing nav labels such as `GLM` in the global top menu when it is only one solution/model page.
- Fix ranking/table layouts that were clipped, broken or visually poor.
- Add meaningful buttons for navigation: home, back, search, related pages and AI index.
- Keep the site easy for AI search and AI readers through machine-readable maps and semantic HTML.
- Validate UI in a real browser before considering a refactor complete.

## 2. Repository Layout

Workspace root:

```text
G:\Work\Up Cloud\projetos\VibeCoding - Study Case
```

Important root files:

```text
AGENTS.md
README.md
index.html
ranking.html
benchmarks.html
telemetria.html
ai-better-prompts.html
ai-content-map.json
llms.txt
vercel.json
.vercelignore
docs/FRONTEND_REFACTOR_PLAN.md
docs/AI_DISCOVERY_STRATEGY.md
docs/PROJECT_CONTEXT_STATE.md
docs/NEXT_AGENT_PROMPT.md
frontend-mvp/
```

The root currently contains the original static HTML hub plus operational docs and data. The modern frontend work lives in `frontend-mvp/`.

## 3. Current Frontend State

The modern frontend is a Next.js app in:

```text
frontend-mvp/
```

Stack:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- lucide-react
- zod
- clsx
- tailwind-merge
- class-variance-authority
- @tailwindcss/typography
- playwright-core for browser validation

Useful commands:

```powershell
cd frontend-mvp
npm install
npm run dev -- --hostname 127.0.0.1 --port 3100
npm run lint
npm run build
```

Current production deployment for the MVP:

```text
https://frontend-mvp-rouge.vercel.app
```

Important caveat: this MVP was deployed as a separate Vercel project. It has not necessarily replaced the official root/static production project.

Known official/static URL mentioned in README:

```text
https://vibe-coding-hub-vercel.vercel.app/
```

## 4. Frontend App Architecture

Key source files:

```text
frontend-mvp/src/app/layout.tsx
frontend-mvp/src/app/page.tsx
frontend-mvp/src/app/[slug]/page.tsx
frontend-mvp/src/app/ai-index/page.tsx
frontend-mvp/src/app/globals.css
frontend-mvp/src/components/site-header.tsx
frontend-mvp/src/components/primary-dock.tsx
frontend-mvp/src/components/search-panel.tsx
frontend-mvp/src/components/page-frame.tsx
frontend-mvp/src/components/page-actions.tsx
frontend-mvp/src/components/legacy-content.tsx
frontend-mvp/src/lib/content.ts
```

Content flow:

- `frontend-mvp/public/ai-content-map.json` is the page manifest used by the app.
- `frontend-mvp/public/llms.txt` is published for AI readers.
- `frontend-mvp/content/*.html` contains copied legacy HTML content used by the Next app.
- `src/lib/content.ts` reads the manifest, loads legacy HTML, sanitizes/remaps it, builds related pages and route metadata.
- `src/app/[slug]/page.tsx` statically generates canonical pages from the manifest.
- `src/app/ai-index/page.tsx` exposes an AI-readable hub map.

The app currently renders the legacy HTML inside a modern shell. This preserves content and divisions while allowing visual/navigation improvements around and over the old content.

## 5. Design System State

Implemented direction:

- Dark technological editorial interface.
- Signal/grid background and subtle motion.
- Interactive home dock with main areas.
- Cleaner top navigation: Inicio, Ranking, Benchmarks, Telemetria, Prompts, Para IA.
- Page action panel with Home, Buscar, AI Index and related links.
- Improved table styling and wider page frame for dense comparison tables.
- Responsive layouts for desktop and mobile.
- `prefers-reduced-motion` support in CSS.

Areas that still need more work:

- Full visual pass on every canonical page, not just home/ranking.
- More intentional visual hierarchy in long legacy articles.
- Better transformed data tables instead of relying only on legacy HTML tables.
- More advanced search UX, possibly command palette.
- More micro-interactions, but only where they improve orientation.
- Better accessibility QA: keyboard flow, focus order, contrast and reduced-motion review.

## 6. AI Discovery State

Already created:

- Root `llms.txt`
- Root `ai-content-map.json`
- `frontend-mvp/public/llms.txt`
- `frontend-mvp/public/ai-content-map.json`
- `frontend-mvp/src/app/ai-index/page.tsx`
- Metadata/JSON-LD patterns in Next pages

Strategy:

- Humans navigate through visual nav, dock, search, related links and page actions.
- AI agents navigate through `llms.txt`, `ai-content-map.json`, `/ai-index`, semantic headings and JSON-LD.
- Important content should exist in server-rendered HTML, not only client-side JS.

Reference docs:

```text
docs/AI_DISCOVERY_STRATEGY.md
docs/FRONTEND_REFACTOR_PLAN.md
```

## 7. Deployment And Validation State

The MVP was deployed successfully to:

```text
https://frontend-mvp-rouge.vercel.app
```

Production routes previously validated with HTTP 200:

```text
/
/ranking
/benchmarks
/telemetria
/ai-index
/llms.txt
/ai-content-map.json
```

Browser sanity check previously generated screenshots in:

```text
frontend-mvp/screenshots/prod-home.png
frontend-mvp/screenshots/prod-ranking.png
```

Previous browser validation found 0 console errors for the checked production pages.

Before any next release, rerun:

```powershell
cd frontend-mvp
npm run lint
npm run build
```

Then validate key pages in a real browser at desktop and mobile widths.

## 8. Git And Dirty Worktree Caution

The repository has many modified/untracked files. Do not assume every dirty file belongs to the current frontend work.

Important rule for the next AI:

- Do not revert unrelated changes.
- Do not delete root HTML files unless the user explicitly approves the migration plan.
- Treat `frontend-mvp/`, `docs/`, `ai-content-map.json`, `llms.txt` and README changes as part of the frontend modernization effort.
- Check `git status --short` before editing.

Useful command:

```powershell
git status --short
```

## 9. Immediate Next Steps

Recommended continuation order:

1. Open `AGENTS.md`, this file, `docs/FRONTEND_REFACTOR_PLAN.md` and `docs/AI_DISCOVERY_STRATEGY.md`.
2. Run the app locally from `frontend-mvp/`.
3. Validate `/`, `/ranking`, `/benchmarks`, `/telemetria`, `/ai-index` in browser.
4. Review screenshots in `frontend-mvp/screenshots/`.
5. Continue visual refinement page by page, preserving content and route divisions.
6. Replace or wrap legacy tables with responsive components where tables are still visually weak.
7. Add sitemap/robots generation if not already present in the app.
8. Decide with the user whether to promote `frontend-mvp` to the official production domain or keep it as a preview project.

## 10. Product Decisions To Preserve

- Global navigation should represent user intent and page groups, not individual vendors unless inside a specific section.
- The home should be a beautiful, useful entry point, not just a technical status panel.
- The ranking page must be decision-first and readable; tables must not clip important columns.
- Motion should make the product feel alive, but not become decorative noise.
- The project serves two audiences equally: humans deciding what to use and AI agents indexing/reading the hub.
- Content accuracy matters; do not rewrite technical claims during visual refactors unless the task explicitly includes editorial updates.

## 11. Known Risks

- The Next app currently copies root HTML into `frontend-mvp/content/`; future content edits in root HTML may not automatically sync into the app.
- The MVP deployment is separate from the official static deployment.
- Some legacy HTML may contain styles/structures that fight the new design shell.
- Tables are dense and need explicit QA at multiple widths.
- Tooling and dependency versions are current as of late April/early May 2026; revalidate if upgrading.

## 12. Definition Of Done For The Next Frontend Pass

A pass is not done until:

- `npm run lint` passes.
- `npm run build` passes.
- Main routes return HTTP 200.
- Browser validation checks desktop and mobile.
- No obvious horizontal overflow or clipped table content remains.
- Navigation labels make sense to a new visitor.
- AI files remain available and valid.
- The user can visually compare before/after through screenshots or deployment URL.
