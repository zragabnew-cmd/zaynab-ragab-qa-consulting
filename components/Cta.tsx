import Link from "next/link";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-colors";

export function PrimaryCta({
  children = "Book a Discovery Call",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  const href = SITE.bookingUrl || "/#contact";
  const external = href.startsWith("http");
  const cls = `${base} bg-accent text-ink hover:bg-paper ${className}`;
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SecondaryCta({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${base} border border-line text-paper hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </Link>
  );
}
