# MCP Ecosystem Reference - May 2026

A comprehensive reference of MCP servers, registries, skills systems, and tools relevant to vibe coding.

---

## 1. MCP Registries & Discovery

| Name | Description | URL | Status |
|------|-------------|-----|--------|
| **Official MCP Registry** | Canonical registry by MCP contributors | https://registry.modelcontextprotocol.io | Active |
| **MCP.so** | Third-party marketplace, 20,627+ servers | https://mcp.so | Active |
| **Smithery** | Registry with 7,909+ MCPs, built-in auth handling | https://smithery.ai | Active |
| **Glama** | 22,708+ servers, categories, quality grades | https://glama.ai/mcp/servers | Active |
| **GitHub MCP Registry** | GitHub's own MCP integration hub | https://github.com/mcp | Active |
| **Awesome MCP Servers** | Curated list by punkpeye | https://github.com/punkpeye/awesome-mcp-servers | Active |
| **Awesome MCP (wong2)** | Curated list, also at mcpservers.org | https://github.com/wong2/awesome-mcp-servers | Active |
| **MCPHub** | High-quality servers + user reviews | https://www.mcphub.com | Active |
| **PulseMCP** | Community hub + weekly newsletter | https://www.pulsemcp.com | Active |
| **OpenTools** | Open registry for discovering/installing MCPs | https://opentools.com | Active |
| **mkinf** | Open source hosted MCP registry | https://mkinf.io | Active |
| **AiMCP** | Client and server discovery tool | https://www.aimcp.info | Active |
| **Loaditout** | 20,000+ security-graded MCP servers | https://loaditout.com | Active |
| **MCP Hunt** | Trending servers, momentum tracking | https://mcp-hunt.com | Active |

---

## 2. Official Reference MCP Servers

These are maintained by the MCP steering group (Anthropic + community) in the official [servers repo](https://github.com/modelcontextprotocol/servers) (85k stars).

### Active Reference Servers

| Server | Description | Install | Price |
|--------|-------------|---------|-------|
| **Filesystem** | Secure file ops with configurable access controls | `npx -y @modelcontextprotocol/server-filesystem /path` | Free |
| **Memory** | Knowledge graph-based persistent memory system | `npx -y @modelcontextprotocol/server-memory` | Free |
| **Fetch** | Web content fetching and conversion for LLMs | `npx -y @modelcontextprotocol/server-fetch` | Free |
| **Git** | Read, search, and manipulate Git repositories | `uvx mcp-server-git` | Free |
| **Sequential Thinking** | Dynamic problem-solving through thought sequences | `npx -y @modelcontextprotocol/server-sequentialthinking` | Free |
| **Time** | Time and timezone conversion | `npx -y @modelcontextprotocol/server-time` | Free |
| **Everything** | Reference/test server with prompts, resources, tools | `npx -y @modelcontextprotocol/server-everything` | Free |

### Archived Reference Servers (now community-maintained)

| Server | Description | Notes |
|--------|-------------|-------|
| **GitHub** | Repository management and GitHub API | Moved to archived repo |
| **PostgreSQL** | Read-only DB access with schema inspection | Moved to archived repo |
| **Puppeteer** | Browser automation and web scraping | Moved to archived repo |
| **SQLite** | Database interaction and BI capabilities | Moved to archived repo |
| **Redis** | Redis key-value store access | Moved to archived repo |
| **Slack** | Channel management and messaging | Now by Zencoder |
| **GitLab** | GitLab API project management | Moved to archived repo |
| **Google Drive** | File access and search | Moved to archived repo |
| **Google Maps** | Location services, directions, places | Moved to archived repo |
| **Sentry** | Issue retrieval and analysis | Moved to archived repo |
| **Brave Search** | Web and local search via Brave API | Now official by Brave |
| **AWS KB Retrieval** | AWS Knowledge Base via Bedrock | Moved to archived repo |

**Archived repo**: https://github.com/modelcontextprotocol/servers-archived

---

## 3. Essential Developer MCP Servers

### Browser & Testing

| Server | Description | URL | Price |
|--------|-------------|-----|-------|
| **Playwright MCP** (Microsoft) | LLMs interact with web pages via accessibility snapshots | https://github.com/microsoft/playwright-mcp | Free (2.3M+ downloads on Glama) |
| **Puppeteer** | Browser automation and web scraping | Archived in official repo | Free |
| **Browserbase** | Cloud browser automation via Stagehand | https://browserbase.com (on Smithery) | Free tier + paid |
| **WebDriverIO** | Browser + mobile app automation (iOS/Android) | https://github.com/webdriverio/mcp | Free |
| **wopee-mcp** | Autonomous end-to-end testing with Playwright | On Glama registry | Free |

### Database

| Server | Description | URL | Price |
|--------|-------------|-----|-------|
| **PostgreSQL** | Read-only DB access with schema inspection | Archived in official repo | Free |
| **SQLite** | Database interaction and BI capabilities | Archived in official repo | Free |
| **Redis** | Redis key-value store access | Archived in official repo | Free |
| **WhoDB CLI** | Multi-DB management with TUI + MCP (Postgres, MySQL, SQLite, MongoDB) | https://github.com/clidey/whodb | Free (Apache 2.0) |
| **ThinAir Data** | PostgreSQL, MySQL, SQL Server - 24 dialect-aware tools | On Glama | Free |
| **mcp-oceanbase** | OceanBase database integration | https://github.com/oceanbase/awesome-oceanbase-mcp | Free (Apache 2.0) |

### Version Control & CI/CD

| Server | Description | URL | Price |
|--------|-------------|-----|-------|
| **GitHub MCP** | Repo management, issues, PRs, workflows | https://github.com/github (on Smithery 3.66k users) | Free |
| **GitLab** | GitLab API project management | Archived in official repo | Free |
| **stepsecurity-mcp** | Supply-chain and CI/CD security investigation | On Glama | Free |

### Search & Web

| Server | Description | URL | Price |
|--------|-------------|-----|-------|
| **Brave Search** | Web, local business, image, video, news search | https://github.com/brave/brave-search-mcp-server | Free (API key required) |
| **Exa Search** | Fast web search + code context for agents | https://smithery.ai/servers/exa (55.7k users) | Free tier |
| **Jina AI** | AI search, page content reading, structured data | https://smithery.ai/servers/jina (6.58k users) | Free tier |
| **Context7** | Up-to-date version-specific docs for 9000+ libraries | https://mcp.context7.com/mcp | Free (API key for higher limits) |
| **Grep by Vercel** | Search code snippets on GitHub | https://mcp.grep.app | Free |
| **Firecrawl** | Web scraping for Cursor, Claude, LLM clients | https://github.com/mendableai/firecrawl-mcp-server | Free |
| **Perplexity Ask** | Web search via Perplexity API | On mcp.so | Free |
| **Linkup** | Real-time web search with source-backed answers | On Smithery (28.43k users) | Free tier |
| **Serper MCP** | Search engine for LLMs | On mcp.so | Free tier |

### Design-to-Code

| Server | Description | URL | Price |
|--------|-------------|-----|-------|
| **Figma MCP** | Design-to-code via Figma API | https://github.com/nicholasgriffintn/figma-mcp-server (community) | Free |
| **CopyWeb** | Convert screenshots/URLs into code components | https://copyweb.ai | Paid |

### Documentation

| Server | Description | URL | Price |
|--------|-------------|-----|-------|
| **Context7** | Version-specific docs for 9000+ libraries | https://context7.com | Free |
| **Docfork** | Daily-refreshed docs for 9000+ libraries in AI editors | On Glama | Free (MIT) |

### Productivity & Communication

| Server | Description | URL | Price |
|--------|-------------|-----|-------|
| **Gmail** | Manage Gmail end-to-end | On Smithery (31.38k users) | Free |
| **Google Sheets** | Read, write, format spreadsheets | On Smithery (45.59k users) | Free |
| **Google Drive** | File management in cloud | On Smithery (7.45k users) | Free |
| **Notion** | Search workspace, manage pages/databases | On Smithery (2.65k users) | Free |
| **Slack** | Channel-based messaging | On Smithery (9.16k users) | Free |
| **Linear** | Issue/project/cycle management | On Smithery (1.58k users) | Free |
| **Reddit** | Reddit API integration | On Smithery (31.88k users) | Free |
| **Supabase** | DB management, Edge Functions, migrations | On Smithery (6.06k users) | Free |

### Monitoring & Error Tracking

| Server | Description | URL | Price |
|--------|-------------|-----|-------|
| **Sentry** | Issue retrieval and analysis | Remote MCP at mcp.sentry.dev | Free tier |
| **Google Analytics** | Official GA MCP server | On Glama (140 stars) | Free |
| **Clamp Analytics** | Pageviews, visitors, referrers, events | On Glama | Free (MIT) |

---

## 4. Skills Systems

### OpenCode Skills

OpenCode supports "Agent Skills" via `SKILL.md` files.

**How it works:**
- Create `.opencode/skills/<name>/SKILL.md` (project) or `~/.config/opencode/skills/<name>/SKILL.md` (global)
- Also compatible with `.claude/skills/` and `.agents/skills/` directories
- Skills have YAML frontmatter: `name`, `description`, `license`, `compatibility`, `metadata`
- Agents discover skills via the `skill` tool and load on demand
- Permission patterns: `allow`, `deny`, `ask` per skill with glob support
- Can be disabled per agent or globally

**SKILL.md format:**
```yaml
---
name: git-release
description: Create consistent releases and changelogs
license: MIT
compatibility: opencode
metadata:
  audience: maintainers
  workflow: github
---
## What I do
- Draft release notes from merged PRs
- Propose a version bump
```

**Docs**: https://opencode.ai/docs/skills/

### OpenCode MCP Integration

OpenCode supports both **local** and **remote** MCP servers via `opencode.json`:

```json
{
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp"
    },
    "filesystem": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-filesystem", "/path"],
      "enabled": true
    }
  }
}
```

- OAuth auto-detection for remote servers
- Per-agent MCP tool enable/disable
- Glob pattern matching for tool management
- Built-in `opencode mcp auth` and `opencode mcp debug` commands

**Docs**: https://opencode.ai/docs/mcp-servers/

### Cursor Plugins/Extensions

Cursor supports MCP servers natively via settings:
- `~/.cursor/mcp.json` for global config
- `.cursor/mcp.json` for project-level config
- Same MCP protocol as Claude Desktop

### Claude Code / Claude Desktop Skills

Claude Desktop and Claude Code support MCP servers via:
- `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)
- `%APPDATA%\Claude\claude_desktop_config.json` (Windows)
- Same JSON format with `mcpServers` key

---

## 5. MCP Frameworks & SDKs

### Official SDKs (by language)

| SDK | Language | URL |
|-----|----------|-----|
| TypeScript SDK | TypeScript/JS | https://github.com/modelcontextprotocol/typescript-sdk |
| Python SDK | Python | https://github.com/modelcontextprotocol/python-sdk |
| Go SDK | Go | https://github.com/modelcontextprotocol/go-sdk |
| Java SDK | Java | https://github.com/modelcontextprotocol/java-sdk |
| Kotlin SDK | Kotlin | https://github.com/modelcontextprotocol/kotlin-sdk |
| C# SDK | C# | https://github.com/modelcontextprotocol/csharp-sdk |
| Ruby SDK | Ruby | https://github.com/modelcontextprotocol/ruby-sdk |
| Rust SDK | Rust | https://github.com/modelcontextprotocol/rust-sdk |
| Swift SDK | Swift | https://github.com/modelcontextprotocol/swift-sdk |
| PHP SDK | PHP | https://github.com/modelcontextprotocol/php-sdk |

### Server Frameworks

| Framework | Language | Description |
|-----------|----------|-------------|
| **FastMCP** | TypeScript | Fast MCP server framework |
| **MCP-Framework** | TypeScript | CLI to create projects in <5 min |
| **EasyMCP** | TypeScript | Simple MCP server creation |
| **FastAPI to MCP** | Python | Zero-config FastAPI-to-MCP auto-generator |
| **Foxy Contexts** | Go | Build MCP servers in Golang |
| **Quarkus MCP** | Java | Java MCP server SDK |
| **Spring AI MCP** | Java | Spring Boot auto-configuration |
| **Anubis MCP** | Elixir | High-performance, "LiveView for MCP" |
| **Foobara MCP** | Ruby | Expose Ruby commands as MCP tools |

---

## 6. MCP Management Tools

| Tool | Description | URL |
|------|-------------|-----|
| **mcpm (MCP Manager)** | Homebrew-like service for MCP servers | https://mcpm.sh |
| **mcp-get** | CLI for installing/managing MCP servers | https://mcp-get.com |
| **MCP Router** | Windows/macOS GUI for MCP management | https://github.com/mcp-router/mcp-router |
| **Toolbase** | Desktop GUI for MCP management | https://gettoolbase.ai |
| **ToolHive** | Containerized MCP server management | https://github.com/StacklokLabs/toolhive |
| **MCPProxy** | Local multi-MCP access with isolation | https://github.com/smart-mcp-proxy/mcpproxy-go |
| **MCP Watch** | Security scanner for MCP servers | https://github.com/kapilduraphe/mcp-watch |
| **OpenMCP Client** | VS Code/Cursor plugin for MCP debugging | https://github.com/LSTM-Kirigaya/openmcp-client |

---

## 7. Smithery Auth Integration

Smithery handles OAuth/credentials for MCP servers:

```bash
npx smithery auth login
npx smithery mcp add notion
npx smithery tool list
```

Key features:
- Zero auth plumbing (OAuth, credentials, retries handled)
- Connections carry across runtimes (Claude, GPT, open-source)
- Powered by open-source agent.pw vault

---

## 8. Key Stats (May 2026)

- **MCP.so**: 20,627 servers indexed
- **Glama**: 22,708 servers indexed
- **Smithery**: 7,909+ MCPs
- **Official MCP repo**: 85k GitHub stars, 10.6k forks
- **Playwright MCP**: 2.38M+ downloads (Glama)
- **OpenCode**: 150k GitHub stars, 6.5M monthly devs
- **MCP SDKs**: 10 official language implementations

---

*Generated May 2026. Verify URLs before use - this ecosystem moves fast.*
