# Alibaba Cloud Coding Plan - Model Analysis for Agentic Coding

## Summary of Available Models on Alibaba Cloud Model Studio

Alibaba Cloud's Model Studio offers multiple models through their API. The "Coding Plan" likely refers to their various subscription tiers that provide access to these models. As of April 2026, the key models available include:

---

## 1. Qwen3-Max (Commercial API: `qwen3-max`)

- **Open-weight equivalent**: Qwen3-235B-A22B (MoE, 235B total / 22B activated)
- **Context window**: 262,144 tokens
- **Max output**: 65,536 tokens (thinking: 81,920 CoT + 32,768 output)
- **Tool calling**: Yes (OpenAI-compatible)
- **Pricing (Global/International)**:
  - 0-32K input: $0.359/$1.2 per 1M tokens (input/output)
  - 32K-128K: $0.574/$2.4
  - 128K-252K: $1.004/$3
- **SWE-bench Verified (Qwen3-Max-Thinking)**: ~75.3%
- **Key feature**: Best for complex, multi-step tasks; supports thinking mode with web search + code interpreter tools

---

## 2. Qwen3.5-Plus (Commercial API: `qwen3.5-plus-2026-02-15`)

- **Open-weight equivalent**: Qwen3.5-397B-A17B (MoE, 397B total / 17B activated)
- **Context window**: 1,000,000 tokens
- **Max output**: 65,536 tokens (thinking: 81,920 CoT + 65,536 output)
- **Tool calling**: Yes (OpenAI-compatible + MCP support)
- **Pricing (International)**:
  - 0-256K input: $0.4/$2.4 per 1M tokens (input/output)
  - 256K-1M: $0.5/$3
- **Thinking mode**: Enabled by default
- **Multimodal**: Supports text, image, and video inputs
- **Open-weight benchmark data (Qwen3.5-397B-A17B)**:

### Coding Agent Benchmarks
| Benchmark | Qwen3.5-397B-A17B | Claude 4.5 Opus | GPT-5.2 |
|---|---|---|---|
| **SWE-bench Verified** | **76.4%** | 80.9% | 80.0% |
| SWE-bench Multilingual | 69.3% | 77.5% | 72.0% |
| SecCodeBench | 68.3% | 68.6% | 68.7% |
| Terminal Bench 2 | 52.5% | 59.3% | 54.0% |
| LiveCodeBench v6 | 83.6% | 84.8% | 87.7% |

### General Agent Benchmarks
| Benchmark | Qwen3.5-397B-A17B | Claude 4.5 Opus | GPT-5.2 |
|---|---|---|---|
| BFCL-V4 (tool use) | 72.9 | 77.5 | 63.1 |
| TAU2-Bench | 86.7 | 91.6 | 87.1 |
| VITA-Bench | 49.7 | 56.3 | 38.2 |
| DeepPlanning | 34.3 | 33.9 | 44.6 |
| MCPMark | 46.1 | 42.3 | 57.5 |

---

## 3. Qwen3.6-27B (Open-source, available via API as `qwen3.6-27b`)

- **Architecture**: Dense 27B model with Gated DeltaNet + Attention hybrid
- **Context window**: 262,144 (extensible to 1,010,000)
- **Tool calling**: Yes (with `qwen3_coder` parser)
- **Preserve Thinking**: New feature that retains reasoning context across conversation history
- **Key focus**: Agentic coding, frontend workflows, repository-level reasoning

### Coding Agent Benchmarks
| Benchmark | Qwen3.6-27B | Qwen3.6-35B-A3B | Qwen3.5-397B-A17B | Claude 4.5 Opus |
|---|---|---|---|---|
| **SWE-bench Verified** | **77.2%** | 73.4% | 76.4% | 80.9% |
| SWE-bench Pro | 53.5% | 49.5% | 50.9% | 57.1% |
| SWE-bench Multilingual | 71.3% | 67.2% | 69.3% | 77.5% |
| Terminal Bench 2.0 | **59.3%** | 51.5% | 52.5% | 59.3% |
| SkillsBench Avg5 | **48.2%** | 28.7% | 30.0% | 45.3% |
| QwenWebBench | 1487 | 1397 | 1186 | 1536 |
| NL2Repo | 36.2 | 29.4 | 32.2 | 43.2 |
| Claw-Eval Avg | 72.4 | 68.7 | 70.7 | 76.6 |
| Claw-Eval Pass^3 | **60.6%** | 50.0% | 48.1% | 59.6% |
| QwenClawBench | 53.4 | 52.6 | 51.8 | 52.3 |

---

## 4. Qwen3.6-35B-A3B (Open-source, MoE)

- **Architecture**: MoE 35B total / 3B activated
- **Context window**: 262,144 (extensible to 1,010,000)
- **Tool calling**: Yes
- **SWE-bench Verified**: 73.4%
- **Pricing advantage**: Much cheaper to self-host; API pricing not separately listed

### General Agent Benchmarks (Qwen3.6-35B-A3B)
| Benchmark | Score |
|---|---|
| TAU3-Bench | 67.2 |
| MCPMark | 37.0 |
| MCP-Atlas | 62.8 |
| WideSearch | 60.1 |

---

## 5. Qwen-Plus (Commercial API, currently Qwen3-based)

- **Current version**: `qwen-plus-2025-12-01` (Qwen3 series)
- **Context window**: 1,000,000 tokens
- **Max output**: 32,768 tokens (thinking mode: 81,920 CoT + 32,768)
- **Pricing (International)**:
  - Non-thinking: $0.4/$1.2 per 1M tokens (0-256K); $1.2/$3.6 (256K-1M)
  - Thinking: $4/$4 output per 1M (0-256K); $12/$12 (256K-1M)
- **Tool calling**: Yes
- Note: This is being superseded by Qwen3.5-Plus

---

## 6. "qwen3-coder-plus" / "qwen3-coder-next"

**These model names do NOT exist** in the current Alibaba Cloud Model Studio lineup. The platform does not offer separate "coder" branded models in the Qwen3 generation. Instead:

- **Qwen3.6-27B** and **Qwen3.6-35B-A3B** are specifically positioned as coding/agentic models
- **Qwen Code** (https://github.com/QwenLM/qwen-code) is their open-source AI coding agent (terminal-based, similar to Claude Code)
- The "Coder" models listed on the platform page appear to be Qwen2.5-Coder series, which are older

---

## 7. Kimi-K2.5 on Alibaba Platform

Available on Chinese mainland deployment only (under Third-party models > Kimi). The platform lists `[Kimi](#82d3721d122dy)` as a general category. K2.5-1T-A32B is referenced in the Qwen3.5 benchmark comparisons:

| Benchmark | K2.5-1T-A32B |
|---|---|
| SWE-bench Verified | 76.8% |
| SWE-bench Multilingual | 73.0% |
| Terminal Bench 2 | 50.8% |
| LiveCodeBench v6 | 85.0% |
| MMLU-Pro | 87.1% |
| AIME26 | 93.3% |

Kimi K2.5 is a strong competitor in coding, particularly on SWE-bench Multilingual (73.0%).

---

## 8. GLM-5 (Zhipu AI) on Alibaba Platform

Available on Chinese mainland deployment only (under Third-party models > GLM). Specific GLM-5 benchmark data was not found in the Alibaba documentation or recent public sources. Zhipu AI's models are listed as available through the platform but technical specifications are not detailed in the Alibaba docs.

---

## 9. MiniMax-M2.5 on Alibaba Platform

**Not found** on the Alibaba Cloud Model Studio model list. MiniMax is not currently listed as a third-party provider on the platform.

---

## Comparison: Alibaba Models vs. Claude Opus 4.5 / GPT-5.x

### SWE-bench Verified (Agentic Coding Benchmark)

| Model | Score | Notes |
|---|---|---|
| **Claude 4.5 Opus** | **80.9%** | Current SOTA for agentic coding |
| **GPT-5.2** | **80.0%** | Close second |
| Qwen3.6-27B | 77.2% | Best open-source Qwen model; 3.7pts behind Opus |
| Qwen3.5-397B-A17B | 76.4% | Commercial "Plus" tier |
| K2.5-1T-A32B | 76.8% | Kimi's flagship |
| Qwen3-Max-Thinking | ~75.3% | Qwen3-Max commercial API |
| Qwen3.5-27B | 75.0% | Smaller Qwen3.5 |
| Qwen3.6-35B-A3B | 73.4% | Efficient MoE; 7.5pts behind Opus |

### Terminal Bench 2.0 (Real-world coding agent benchmark)

| Model | Score | Notes |
|---|---|---|
| **Claude 4.5 Opus** | **59.3%** | Tied for best |
| **Qwen3.6-27B** | **59.3%** | Tied with Opus! |
| GPT-5.2 | 54.0% | |
| Qwen3.5-397B-A17B | 52.5% | |
| Qwen3.6-35B-A3B | 51.5% | |
| K2.5-1T-A32B | 50.8% | |

### Tool Use / Function Calling Quality

| Model | BFCL-V4 | MCPMark | Tool Decathlon |
|---|---|---|---|
| GPT-5.2 | 63.1 | 57.5 | 43.8 |
| **Claude 4.5 Opus** | **77.5** | 42.3 | **43.5** |
| Qwen3.5-397B-A17B | 72.9 | 46.1 | 38.3 |
| Qwen3.6-27B | N/A | N/A | N/A |

---

## Key Findings for Agentic Coding Use

### Strengths of Qwen Models for Agentic Coding

1. **Qwen3.6-27B is surprisingly strong** - Ties Claude 4.5 Opus on Terminal Bench 2.0 (59.3%) and achieves 77.2% on SWE-bench Verified
2. **Massive context windows** - Qwen3.5-Plus offers 1M tokens, making it suitable for large codebase analysis
3. **Tool calling support** - OpenAI-compatible API with MCP support, compatible with Claude Code/Cline/Cursor
4. **Thinking mode** - All commercial models support hybrid thinking/non-thinking
5. **Preserve Thinking** (Qwen3.6) - New feature that retains reasoning context across turns, specifically useful for agentic scenarios
6. **Qwen Code** - Alibaba's own open-source terminal coding agent (similar to Claude Code)

### Limitations

1. **Still behind Claude Opus/GPT-5 on SWE-bench Verified** by ~4-8 points
2. **Tool calling quality** - BFCL-V4 score of 72.9 vs 77.5 for Claude Opus
3. **MCPMark** - Qwen3.5 scores 46.1 vs GPT-5.2's 57.5
4. **Terminal Bench** - Only the Qwen3.6-27B matches Opus; other Qwen models are 7-10 points behind
5. **US/EU regional restrictions** - Some models only available in certain regions; the cheapest pricing is Global region
6. **Agentic tools compatibility** - No direct reports of usage with Claude Code, Cline, or Cursor found in community discussions

### Pricing Comparison (for agentic coding use cases)

| Model | Input/Output per 1M tokens | Context | Notes |
|---|---|---|---|
| Qwen3.5-Plus | $0.4/$2.4 | 1M | Best value for coding tasks |
| Qwen3-Max (thinking) | $0.359/$1.434 | 262K | Most capable Qwen commercial model |
| Claude Opus 4.5 | $15/$75 | 200K | ~30x more expensive per token |
| GPT-5.2 | ~$10/$30 | 128K+ | Estimated pricing |
| Qwen-Plus (non-thinking) | $0.4/$1.2 | 1M | Budget option |

**Cost analysis**: Qwen3.5-Plus is roughly **30-60x cheaper** than Claude Opus 4.5 for input tokens, making it extremely cost-effective for agentic coding workflows that consume many tokens.

---

## Community Reports: Alibaba Cloud + Agentic Coding Tools

**No community reports were found** on Reddit or forums specifically about using Alibaba Cloud Coding Plan with Claude Code, Cline, or Cursor. This is likely because:

1. **Alibaba Cloud's OpenAI-compatible API** allows integration with any tool that supports OpenAI API format (Cline, Cursor, Continue, etc.)
2. **Qwen Code** is Alibaba's own terminal agent (https://github.com/QwenLM/qwen-code) - an alternative to Claude Code
3. The "Coding Plan" is not a widely-discussed product in Western developer communities
4. Most community discussion happens on Chinese platforms (V2EX, CSDN, 掘金)

### How to Use Alibaba Cloud Models with Agentic Tools

Since all models expose an OpenAI-compatible API endpoint, you can configure:

- **Claude Code**: Not directly compatible (uses Anthropic API format), but Alibaba Cloud now also provides Anthropic-compatible API
- **Cline/Continue**: Set `base_url` to `https://dashscope.aliyuncs.com/compatible-mode/v1` (Chinese mainland) or the appropriate regional endpoint
- **Cursor**: Configure custom OpenAI API base URL in settings
- **Qwen Code**: Native support via Alibaba Cloud Model Studio

---

## Recommendations for Agentic Coding

1. **Best overall**: Qwen3.5-Plus (API: `qwen3.5-plus`) - Cheapest with 1M context, strong coding scores (76.4% SWE-bench), tool calling support
2. **Best coding-specific**: Qwen3.6-27B (when self-hosted or available via API as `qwen3.6-27b`) - Highest Terminal Bench score, specifically optimized for agentic coding
3. **Budget option**: Qwen-Plus (non-thinking mode at $0.4/$1.2) for simpler coding tasks
4. **Maximum capability**: Qwen3-Max (thinking mode) for complex multi-step coding problems
5. **Gap vs. Claude/GPT**: Expect ~5-8% lower success rate on complex agentic coding tasks compared to Claude 4.5 Opus, but at ~30-60x lower cost per token