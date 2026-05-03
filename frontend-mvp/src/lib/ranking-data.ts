export type RankingEntry = {
  rank: number;
  tier: "top" | "mid" | "low";
  name: string;
  slug: string;
  price: string;
  models: string;
  quota: string;
  capacityRange: string;
  qualityRange: string;
  consolidatedRange: string;
  verdict: string;
};

export const rankingData: RankingEntry[] = [
  { rank: 1, tier: "top", name: "GLM Coding Plan", slug: "glm", price: "US$ 18–160/mes", models: "GLM-5.1, GLM-5-Turbo, GLM-5V-Turbo, GLM-4.7, GLM-4.5-Air, GLM-4.7-Flash (gratuito)", quota: "Quota semanal + 5h; GLM-5.1/5-Turbo: 3x pico, 2x off-peak; promo 1x off-peak ate jun/2026", capacityRange: "55–85%", qualityRange: "75–88%", consolidatedRange: "68–85%", verdict: "Melhor camada de precisao. GLM-5.1 e flagship desde Abr/2026. Novo: GLM-5V-Turbo multimodal e GLM-4.7-Flash gratuito." },
  { rank: 2, tier: "top", name: "Xiaomi MiMo", slug: "mimo", price: "US$ 6–100/mes", models: "MiMo-V2.5-Pro (1T MoE, multimodal nativo), MiMo-V2.5, MiMo-V2-Flash", quota: "Credit system reformulado: V2.5 = 1x, V2.5-Pro = 2x; off-peak 0.8x; planos mensais+anuais", capacityRange: "65–100%", qualityRange: "62–85%", consolidatedRange: "68–88%", verdict: "V2.5-Pro = novo flagship (Abr/2026). Multimodal nativo, ~1000 tool calls/sessao, savings 40-60% vs concorrentes." },
  { rank: 3, tier: "top", name: "OpenCode Go", slug: "opencode-go", price: "US$ 10/mes", models: "14 modelos: GLM-5/5.1, Kimi K2.5/2.6, MiMo V2.5-Pro/V2.5, MiniMax M2.7, Qwen 3.5/3.6, DeepSeek V4 Pro/Flash", quota: "Budget interno: US$ 12/5h, US$ 30/sem, US$ 60/mes", capacityRange: "50–80%", qualityRange: "50–72%", consolidatedRange: "50–75%", verdict: "Melhor MVP barato. Roster de modelos triplicou (3→14). Preco e limites inalterados." },
  { rank: 4, tier: "mid", name: "Alibaba Coding Plan Pro", slug: "alibaba", price: "US$ 50/mes", models: "qwen3.6-plus (1M ctx), kimi-k2.5, glm-5, MiniMax-M2.5, DeepSeek V4", quota: "6K req/5h, 45K/sem, 90K/mes; Lite descontinuado", capacityRange: "80–105%", qualityRange: "50–70%", consolidatedRange: "55–80%", verdict: "Preco e quota inalterados. qwen3.6-plus confirmado como top model. Novo: Team Edition Token Plan." },
  { rank: 5, tier: "mid", name: "Google AI Pro / Ultra", slug: "google-ai", price: "US$ 0–250/mes", models: "Gemini 3.1 Pro, Gemini 3 Flash, Jules, Gemini Agent (Ultra)", quota: "Free: 1K req/dia; Pro/Ultra: limites maiores; 60 req/min free", capacityRange: "35–80%", qualityRange: "50–75%", consolidatedRange: "35–70%", verdict: "Gemini 3.1 Pro = novo flagship. Novos: Gemini Agent (Ultra), Deep Think, Antigravity platform." },
  { rank: 6, tier: "mid", name: "Cursor Pro / Pro+ / Ultra", slug: "cursor", price: "US$ 20–200/mes", models: "IDE agentica: OpenAI, Claude, Gemini, MCPs, cloud agents, Composer 2", quota: "Pro: padrao, Pro+ ($60): 3x, Ultra ($200): 20x", capacityRange: "20–105%", qualityRange: "80–95%", consolidatedRange: "30–90%", verdict: "Pro+ ($60/mes) = novo tier. Novos: Composer 2, Cursor SDK, Multitask, Canvases, Bugbot." },
  { rank: 7, tier: "mid", name: "Claude Max", slug: "claude-max", price: "US$ 100–200/mes", models: "Opus 4.7, Sonnet 4.6, Haiku 4.5 + Claude Code + Claude Cowork", quota: "5x ou 20x do Pro; Claude Code incluso no Pro", capacityRange: "85–100%", qualityRange: "95–100%", consolidatedRange: "85–100%", verdict: "Opus 4.7 = novo flagship. Claude Code agora incluso no Pro. Novo: Claude Cowork." },
  { rank: 8, tier: "mid", name: "Kiro (AWS)", slug: "kiro", price: "US$ 0–200/mes", models: "Sonnet 4/4.5, Haiku 4.5, Opus 4.5/4.6/4.7, Auto", quota: "Free: 50 credits; Pro ($20): 1K; Pro+ ($40): 2K; Power ($200): 10K", capacityRange: "25–80%", qualityRange: "75–90%", consolidatedRange: "35–75%", verdict: "Novo tier Pro+ ($40/mes). Agent preview incluido. Modelos ate Opus 4.7." },
  { rank: 9, tier: "mid", name: "Factory Pro / Max", slug: "factory", price: "US$ 20–200/mes", models: "Workspace agentico com desktop, web, CLI", quota: "Droid Core (fallback gratuito), Extra Usage ($10 min creditos)", capacityRange: "40–85%", qualityRange: "75–90%", consolidatedRange: "45–80%", verdict: "Novos: Droid Core (fallback open-weight), Missions (agentes autonomos), Droid Computers." },
  { rank: 10, tier: "mid", name: "Windsurf Pro / Max", slug: "windsurf", price: "US$ 20–200/mes", models: "SWE-1.5 (novo fast agent), Claude/GPT/BYOK, Devin Cloud", quota: "Budget diario/semanal; Devin Cloud sessions inclusas", capacityRange: "35–85%", qualityRange: "55–80%", consolidatedRange: "35–70%", verdict: "SWE-1.5 = novo fast agent model. Devin Cloud sessions e deploys incluidos." },
  { rank: 11, tier: "mid", name: "Ollama Pro / Max", slug: "ollama", price: "US$ 20–100/mes", models: "Open models locais + cloud (via NVIDIA)", quota: "Cloud: GPU-time based; local: ilimitado", capacityRange: "45–85%", qualityRange: "45–70%", consolidatedRange: "45–75%", verdict: "Novo: cloud-hosted models via NVIDIA. Uso baseado em GPU-time, nao tokens." },
  { rank: 12, tier: "low", name: "MiniMax Token Plan", slug: "minimax", price: "US$ 10–150/mes", models: "M2.7, M2.7-highspeed, Speech 2.8, Hailuo-2.3, Music-2.6, image-01", quota: "Requests/5h + semanal 10x; Highspeed tiers ate $150", capacityRange: "60–95%", qualityRange: "40–65%", consolidatedRange: "30–60%", verdict: "Novos: M2.7-highspeed, Hailuo-2.3 video, Music-2.6. Multimodal expandido." },
  { rank: 13, tier: "low", name: "Devin Pro / Max / Teams", slug: "devin", price: "US$ 20–200/mes", models: "Agente autonomo + Windsurf IDE (bundle)", quota: "Quota incluida + PAYG; ate 10 sessoes concorrentes", capacityRange: "20–70%", qualityRange: "70–90%", consolidatedRange: "20–60%", verdict: "Bundle com Windsurf IDE. Advanced Capabilities: Managed Devins paralelos, playbooks." },
  { rank: 14, tier: "low", name: "Kimi Code / Membership", slug: "kimi", price: "Varia", models: "Kimi K2.6 (256K ctx, multimodal, thinking nativo)", quota: "API: $0.16/M cache hit, $0.95/M miss, $4/M output", capacityRange: "25–55%", qualityRange: "60–75%", consolidatedRange: "25–50%", verdict: "K2.6 = upgrade significativo. Cache hit $0.16/M = extremamente competitivo." },
  { rank: 15, tier: "low", name: "OpenAI / ChatGPT / Codex", slug: "openai-codex", price: "US$ 20–200/mes", models: "GPT-5.5 ($5/$30), GPT-5.5-pro ($30/$180), GPT-5.4, GPT-5.3-codex", quota: "Limites mistos: 5h, semanal, creditos Codex", capacityRange: "10–85%", qualityRange: "70–90%", consolidatedRange: "10–75%", verdict: "GPT-5.5 = novo flagship ($5/$30/M). GPT-5.5-pro = premium ($30/$180/M)." },
  { rank: 16, tier: "low", name: "Chutes Pro / Plus", slug: "chutes", price: "US$ 10–20/mes", models: "Infra hibrida, modelos, PAYG", quota: "Assinatura leve + uso adicional", capacityRange: "35–80%", qualityRange: "40–65%", consolidatedRange: "30–60%", verdict: "Vale como hibrida barata, nao como substituto." },
];

export function tierColor(tier: RankingEntry["tier"]) {
  if (tier === "top") return "var(--accent)";
  if (tier === "mid") return "var(--accent-2)";
  return "var(--muted)";
}

export function tierBg(tier: RankingEntry["tier"]) {
  if (tier === "top") return "rgba(66,217,166,0.08)";
  if (tier === "mid") return "rgba(90,167,255,0.08)";
  return "rgba(147,164,173,0.06)";
}
