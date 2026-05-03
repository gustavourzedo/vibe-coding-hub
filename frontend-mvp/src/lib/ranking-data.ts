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
  { rank: 1, tier: "top", name: "GLM Coding Plan", slug: "glm", price: "US$ 18–160/mes", models: "GLM-5.1, GLM-5-Turbo, GLM-4.7, GLM-4.5-Air", quota: "Tokens totais; multiplicadores 3x pico, 1x off-peak", capacityRange: "55–85%", qualityRange: "75–88%", consolidatedRange: "68–85%", verdict: "Melhor camada de precisao. Fortissimo, mas quota em campo derrubou a tese de motor unico." },
  { rank: 2, tier: "top", name: "Xiaomi MiMo", slug: "mimo", price: "US$ 6–100/mes", models: "MiMo-V2.5-Pro, V2.5, V2-Flash", quota: "Token Plan por creditos; off-peak 0.8x", capacityRange: "65–100%", qualityRange: "62–85%", consolidatedRange: "68–88%", verdict: "Melhor nova camada de volume. Standard = piloto serio; Pro = compra forte." },
  { rank: 3, tier: "top", name: "OpenCode Go", slug: "opencode-go", price: "US$ 10/mes", models: "GLM-5/5.1, Kimi K2.5/2.6, MiniMax M2.7, MiMo, Qwen, DeepSeek V4", quota: "Budget interno por valor (US$ 12/5h, US$ 30/sem, US$ 60/mes)", capacityRange: "50–80%", qualityRange: "50–72%", consolidatedRange: "50–75%", verdict: "Melhor MVP barato e daily driver economico." },
  { rank: 4, tier: "mid", name: "Alibaba Coding Plan Pro", slug: "alibaba", price: "US$ 50/mes", models: "qwen3.6-plus, kimi-k2.5, glm-5, MiniMax-M2.5, DeepSeek V4", quota: "6K req/5h, 45K/sem, 90K/mes", capacityRange: "80–105%", qualityRange: "50–70%", consolidatedRange: "55–80%", verdict: "Melhor dark horse de capacidade. MiMo ficou mais limpa para este caso." },
  { rank: 5, tier: "mid", name: "Google AI Pro / Ultra", slug: "google-ai", price: "US$ 20–250/mes", models: "Gemini CLI, Code Assist, Jules, Gemini 3 Pro", quota: "1.500–2.000 req/dia; 120 req/min", capacityRange: "35–80%", qualityRange: "50–75%", consolidatedRange: "35–70%", verdict: "Nova candidata real com mais transparencia." },
  { rank: 6, tier: "mid", name: "Cursor Pro / Pro+ / Ultra", slug: "cursor", price: "US$ 20–200/mes", models: "IDE agentica: OpenAI, Claude, Gemini, MCPs, cloud agents", quota: "Uso incluido + overage; Pro+ 3x, Ultra 20x", capacityRange: "20–105%", qualityRange: "80–95%", consolidatedRange: "30–90%", verdict: "Melhor experiencia de IDE, nao melhor tese economica." },
  { rank: 7, tier: "mid", name: "Claude Max", slug: "claude-max", price: "US$ 100–200/mes", models: "Claude web/desktop/mobile + Claude Code", quota: "5x ou 20x do Pro por sessao; caps semanais", capacityRange: "85–100%", qualityRange: "95–100%", consolidatedRange: "85–100%", verdict: "Melhor referencia premium de qualidade." },
  { rank: 8, tier: "mid", name: "Kiro (AWS)", slug: "kiro", price: "US$ 0–200/mes", models: "Kiro IDE, CLI, ACP; Sonnet, Opus, Haiku", quota: "Creditos incluidos + overage", capacityRange: "25–80%", qualityRange: "75–90%", consolidatedRange: "35–75%", verdict: "Produto serio, billing menos intuitivo." },
  { rank: 9, tier: "mid", name: "Factory Pro / Max", slug: "factory", price: "US$ 20–200/mes", models: "Workspace agentico com desktop, web, CLI", quota: "Planos por workspace; Max 10x do Pro", capacityRange: "40–85%", qualityRange: "75–90%", consolidatedRange: "45–80%", verdict: "Workspace premium, mais plataforma do que tese economica." },
  { rank: 10, tier: "mid", name: "Windsurf Pro / Max", slug: "windsurf", price: "US$ 20–200/mes", models: "SWE-1.6, SWE-1.5, Adaptive, Claude/GPT/BYOK", quota: "Budget diario/semanal por tokens/modelo", capacityRange: "35–85%", qualityRange: "55–80%", consolidatedRange: "35–70%", verdict: "IDE relevante, risco de friccao operacional." },
  { rank: 11, tier: "mid", name: "Ollama Pro / Max", slug: "ollama", price: "US$ 20–100/mes", models: "Open models locais e cloud", quota: "Cloud medido por utilizacao; local ilimitado", capacityRange: "45–85%", qualityRange: "45–70%", consolidatedRange: "45–75%", verdict: "Alternativa real para open-model cloud." },
  { rank: 12, tier: "low", name: "MiniMax Token Plan", slug: "minimax", price: "US$ 10–150/mes", models: "MiniMax M2.7, Speech 2.8, Hailuo 2.3", quota: "Requests por 5h e semanal 10x", capacityRange: "60–95%", qualityRange: "40–65%", consolidatedRange: "30–60%", verdict: "Atrativa para throughput, moderada como substituicao principal." },
  { rank: 13, tier: "low", name: "Devin Pro / Max / Teams", slug: "devin", price: "US$ 20–200/mes", models: "Agente autonomo com ACUs e sessoes delegadas", quota: "Quota incluida + PAYG", capacityRange: "20–70%", qualityRange: "70–90%", consolidatedRange: "20–60%", verdict: "Boa autonomia, fraca como resposta economica." },
  { rank: 14, tier: "low", name: "Kimi Code / Membership", slug: "kimi", price: "Varia", models: "K2.6 e stack Kimi Code", quota: "Tokens nao-cacheados, janela semanal", capacityRange: "25–55%", qualityRange: "60–75%", consolidatedRange: "25–50%", verdict: "Promissor, arriscado como plano principal." },
  { rank: 15, tier: "low", name: "OpenAI / ChatGPT / Codex", slug: "openai-codex", price: "US$ 20–200/mes", models: "ChatGPT Plus/Pro, Codex, GPT-5.5/5.4/5.3", quota: "Limites mistos: 5h, semanal, creditos Codex", capacityRange: "10–85%", qualityRange: "70–90%", consolidatedRange: "10–75%", verdict: "Produto forte, opaco e menos previsivel." },
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
