"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

type CmdPage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  category: string;
  tags: string[];
  href: string;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [pages, setPages] = useState<CmdPage[]>([]);

  useEffect(() => {
    fetch("/ai-content-map.json")
      .then((r) => r.json())
      .then((data) => {
        const mapped: CmdPage[] = data.canonicalPages.map(
          (p: { slug: string; title: string; category: string; tags: string[] }) => ({
            slug: p.slug,
            title: p.title,
            eyebrow: p.category,
            summary: "",
            category: p.category,
            tags: p.tags,
            href: p.slug ? `/${p.slug}` : "/",
          }),
        );
        setPages(mapped);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return pages.slice(0, 8);
    return pages.filter((page) => {
      const haystack = [page.title, page.eyebrow, page.category, ...page.tags]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [pages, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-white md:inline-flex"
        aria-label="Abrir busca rapida (Ctrl+K)"
      >
        <Search className="size-3.5" aria-hidden />
        <span>Buscar...</span>
        <kbd className="ml-2 rounded border border-[var(--line-strong)] bg-[var(--surface-strong)] px-1.5 py-0.5 font-mono text-[0.65rem]">Ctrl+K</kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh]" role="dialog" aria-modal="true" aria-label="Busca rapida">
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.65)] backdrop-blur-sm" onClick={close} />
      <div className="relative w-full max-w-xl rounded-lg border border-[var(--line-strong)] bg-[var(--surface-strong)] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-[var(--line)] px-4">
          <Search className="size-4 shrink-0 text-[var(--accent-2)]" aria-hidden />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar paginas, tags, categorias..."
            className="min-w-0 flex-1 bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-[var(--muted)]"
            autoFocus
          />
          <kbd className="rounded border border-[var(--line-strong)] bg-[var(--surface)] px-1.5 py-0.5 font-mono text-[0.65rem] text-[var(--muted)]">ESC</kbd>
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-[var(--muted)]">Nenhum resultado.</p>
          ) : (
            results.map((page) => (
              <Link
                key={page.slug}
                href={page.href}
                onClick={close}
                className="group flex items-center gap-3 rounded-md px-3 py-2.5 transition hover:bg-[var(--surface-soft)]"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-md border border-[var(--line)] bg-[var(--surface)]">
                  {page.slug === "" ? (
                    <Home className="size-3.5 text-[var(--accent)]" aria-hidden />
                  ) : (
                    <ArrowRight className="size-3.5 text-[var(--accent-2)]" aria-hidden />
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm text-white group-hover:text-[var(--accent)]">
                    {page.title}
                  </span>
                  <span className="block truncate font-mono text-[0.68rem] text-[var(--muted)]">
                    {page.eyebrow} &middot; {page.tags.slice(0, 3).join(", ")}
                  </span>
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
