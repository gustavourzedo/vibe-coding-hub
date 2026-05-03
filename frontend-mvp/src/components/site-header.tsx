"use client";

import { useState } from "react";
import Link from "next/link";
import { Activity, Braces, Menu, X } from "lucide-react";
import { CommandPalette } from "@/components/command-palette";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/ranking", label: "Ranking" },
  { href: "/benchmarks", label: "Benchmarks" },
  { href: "/harnesses", label: "IDEs" },
  { href: "/mcp-skills-plugins", label: "MCPs" },
  { href: "/telemetria", label: "Telemetria" },
  { href: "/ai-better-prompts", label: "Prompts" },
  { href: "/ai-index", label: "Para IA" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[rgba(11,15,20,0.92)] backdrop-blur-md">
        <div className="mx-auto flex min-h-14 w-full max-w-7xl items-center gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5"
            aria-label="Vibe Coding Hub"
          >
            <span className="grid size-8 place-items-center rounded-md border border-[var(--line-strong)] bg-[var(--surface-strong)]">
              <Activity className="size-4 text-[var(--accent)]" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-white">
                Vibe Coding Hub
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2.5 py-1.5 text-[0.82rem] text-[var(--muted-strong)] transition duration-200 hover:bg-[var(--surface-soft)] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5 md:ml-2">
            <CommandPalette />
            <Link
              href="/ai-index"
              className="grid size-8 place-items-center rounded-md border border-[var(--line)] bg-[var(--surface)] text-[var(--muted-strong)] transition hover:border-[var(--accent)] hover:text-white"
              aria-label="Abrir AI Index"
              title="AI Index"
            >
              <Braces className="size-3.5" aria-hidden />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="grid size-8 place-items-center rounded-md border border-[var(--line)] bg-[var(--surface)] text-[var(--muted-strong)] transition hover:border-[var(--accent)] hover:text-white md:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-[var(--line)] bg-[rgba(11,15,20,0.98)] md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-3">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm text-[var(--muted-strong)] transition hover:bg-[var(--surface-soft)] hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
