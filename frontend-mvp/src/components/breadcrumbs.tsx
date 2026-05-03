import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { HubPage } from "@/lib/content";
import { getCategoryLabel } from "@/lib/content";

export function Breadcrumbs({ page }: { page: HubPage }) {
  const crumbs = [
    { label: "Hub", href: "/" },
    { label: getCategoryLabel(page.category), href: null },
    { label: page.title.replace(/ - Vibe Coding Hub$/, ""), href: null },
  ];

  return (
    <nav aria-label="Breadcrumbs" className="mb-4 flex flex-wrap items-center gap-1.5 font-mono text-xs text-[var(--muted)]">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="size-3" aria-hidden />}
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="flex items-center gap-1 transition hover:text-white"
            >
              {i === 0 && <Home className="size-3" aria-hidden />}
              {crumb.label}
            </Link>
          ) : (
            <span className="text-[var(--muted-strong)]">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
