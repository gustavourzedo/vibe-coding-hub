# Prompt For The Next AI Agent

Use this prompt when continuing the VibeCoding Hub frontend in another IDE or agent environment.

```text
You are continuing the VibeCoding Hub project.

Workspace:
G:\Work\Up Cloud\projetos\VibeCoding - Study Case

First read:
- AGENTS.md
- docs/PROJECT_CONTEXT_STATE.md
- docs/FRONTEND_REFACTOR_PLAN.md
- docs/AI_DISCOVERY_STRATEGY.md
- frontend-mvp/README.md

Project goal:
Evolve the VibeCoding Hub frontend into a beautiful, modern, technological, responsive and intuitive product while preserving existing content and page divisions. The hub compares AI coding plans, models, IDEs, harnesses, orchestrators, benchmarks, telemetry and prompt playbooks.

Important product constraints:
- Do not alter editorial content unless explicitly asked.
- Do not change page divisions without approval.
- Do not remove root legacy HTML files without approval.
- Improve UI/UX, navigation, motion, responsiveness and table readability.
- Keep the site easy for AI agents to read through llms.txt, ai-content-map.json, AI Index, semantic HTML and JSON-LD.
- Use browser/runtime validation for UI; do not guess from code alone.
- Do not revert unrelated dirty worktree changes.

Current app:
- Modern frontend lives in frontend-mvp/
- It is a Next.js 16 App Router app with React 19, TypeScript and Tailwind CSS v4.
- It renders legacy HTML from frontend-mvp/content/ using a modern shell.
- The page manifest is frontend-mvp/public/ai-content-map.json.
- AI-readable file is frontend-mvp/public/llms.txt.
- Current MVP deployment: https://frontend-mvp-rouge.vercel.app
- This is a separate Vercel project and may not be the official production domain.

Useful commands:
cd frontend-mvp
npm install
npm run dev -- --hostname 127.0.0.1 --port 3100
npm run lint
npm run build

Key files:
- frontend-mvp/src/app/page.tsx
- frontend-mvp/src/app/[slug]/page.tsx
- frontend-mvp/src/app/ai-index/page.tsx
- frontend-mvp/src/app/globals.css
- frontend-mvp/src/components/site-header.tsx
- frontend-mvp/src/components/primary-dock.tsx
- frontend-mvp/src/components/search-panel.tsx
- frontend-mvp/src/components/page-actions.tsx
- frontend-mvp/src/components/legacy-content.tsx
- frontend-mvp/src/lib/content.ts

Current UX decisions:
- Top nav should show page groups/intents, not random vendor names.
- Home should have a strong visual menu/dock for Ranking, Benchmarks, Telemetria, Modelos, IDEs and Better Prompts.
- Ranking and benchmark tables must be readable and not clipped.
- Every page should have useful navigation actions: Home, Buscar, AI Index, related pages and back flow where appropriate.
- Motion should add life and orientation while respecting prefers-reduced-motion.

Recommended next work:
1. Run git status and inspect current changes.
2. Start the Next app locally.
3. Validate /, /ranking, /benchmarks, /telemetria and /ai-index in browser.
4. Continue page-by-page visual refinement, especially dense legacy pages and tables.
5. Add or improve sitemap/robots if missing.
6. Add stronger search/command-palette UX if time.
7. Run lint/build.
8. Deploy or prepare promotion to the official Vercel domain only after user approval.

Expected communication:
Be concise but explicit. Show what changed, how it was validated and what remains risky.
```
