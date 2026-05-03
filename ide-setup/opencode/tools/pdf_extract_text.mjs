import { z } from "zod"
import { spawn } from "node:child_process"
import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const pdfCli = path.join(__dirname, "..", "node_modules", "pdf-parse", "bin", "cli.mjs")
const nodeExe = process.execPath

function runProcess(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    })
    let stdout = ""
    let stderr = ""
    child.stdout.on("data", (chunk) => { stdout += chunk.toString() })
    child.stderr.on("data", (chunk) => { stderr += chunk.toString() })
    child.on("error", reject)
    child.on("close", (code) => {
      if (code === 0) resolve({ stdout, stderr })
      else reject(new Error(stderr || stdout || `pdf-parse exited with code ${code}`))
    })
  })
}

export default {
  description: "Extract text from a PDF into a workspace artifact file so OpenCode can read it reliably.",
  args: {
    path: z.string().describe("Absolute or workspace-relative path to the PDF file"),
    pages: z.string().optional().describe("Optional page range, for example 1-3 or 5"),
  },
  async execute(args, context) {
    const worktree = context.worktree || context.directory
    const inputPath = path.isAbsolute(args.path) ? args.path : path.join(worktree, args.path)
    const stat = await fs.stat(inputPath).catch(() => null)
    if (!stat) throw new Error(`PDF not found: ${inputPath}`)

    const outputDir = path.join(worktree, ".opencode-artifacts", "pdf-text")
    await fs.mkdir(outputDir, { recursive: true })
    const base = path.basename(inputPath, path.extname(inputPath))
    const suffix = args.pages ? `__pages_${args.pages.replace(/[^0-9a-zA-Z_-]+/g, "_")}` : ""
    const outputPath = path.join(outputDir, `${base}${suffix}.txt`)

    const cliArgs = [pdfCli, "text", inputPath, "--output", outputPath]
    if (args.pages) cliArgs.push("--pages", args.pages)

    await runProcess(nodeExe, cliArgs, worktree)

    const text = await fs.readFile(outputPath, "utf8")
    const preview = text.slice(0, 1500)

    return [
      `Extracted PDF text to: ${outputPath}`,
      `Characters: ${text.length}`,
      "",
      "Preview:",
      preview || "(empty)",
    ].join("\n")
  },
}
