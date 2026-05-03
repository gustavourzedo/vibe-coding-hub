"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { HubPage } from "@/lib/content";

export function SearchPanel({ pages }: { pages: HubPage[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return pages;

    return pages.filter((page) => {
      const haystack = [
        page.title,
        page.eyebrow,
        page.summary,
        page.category,
        ...page.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(term);
    });
  }, [pages, query]);

  return (
    <div id="search" className="grid gap-4">
      <label className="flex min-h-12 items-center gap-3 rounded-md border border-[var(--line-strong)] bg-[var(--surface)] px-3">
        <Search className="size-5 shrink-0 text-[var(--accent-2)]" aria-hidden />
        <span className="sr-only">Buscar no hub</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar no hub"
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[var(--muted)]"
        />
      </label>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {results.map((page) => (
          <Link
            key={page.slug}
            href={page.href}
            className="group min-h-36 rounded-md border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)] hover:bg-[var(--surface-strong)]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase text-[var(--accent)]">
                {page.eyebrow}
              </span>
              <span className="rounded-md bg-[rgba(255,255,255,0.05)] px-2 py-1 font-mono text-xs text-[var(--muted)]">
                {page.priority}
              </span>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-white group-hover:text-[var(--accent)]">
              {page.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
              {page.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
