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
  description: "Render PDF pages to PNG screenshots for visual inspection.",
  args: {
    path: z.string().describe("Absolute or workspace-relative path to the PDF file"),
    pages: z.string().optional().describe("Optional page range, for example 1-3 or 5"),
    scale: z.number().optional().describe("Optional screenshot scale factor, default 1.5"),
  },
  async execute(args, context) {
    const worktree = context.worktree || context.directory
    const inputPath = path.isAbsolute(args.path) ? args.path : path.join(worktree, args.path)
    const stat = await fs.stat(inputPath).catch(() => null)
    if (!stat) throw new Error(`PDF not found: ${inputPath}`)

    const outputDir = path.join(worktree, ".opencode-artifacts", "pdf-pages", path.basename(inputPath, path.extname(inputPath)))
    await fs.mkdir(outputDir, { recursive: true })

    const cliArgs = [pdfCli, "screenshot", inputPath, "--output", outputDir, "--scale", String(args.scale ?? 1.5)]
    if (args.pages) cliArgs.push("--pages", args.pages)

    await runProcess(nodeExe, cliArgs, worktree)

    const files = (await fs.readdir(outputDir))
      .filter((file) => file.toLowerCase().endsWith(".png"))
      .sort()

    return [
      `Rendered PDF pages to: ${outputDir}`,
      `PNG files: ${files.length}`,
      ...files.slice(0, 20).map((file) => `- ${path.join(outputDir, file)}`),
    ].join("\n")
  },
}
