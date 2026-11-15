"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { PrimaryCta } from "./Cta";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="leading-tight" onClick={() => setOpen(false)}>
          <span className="block text-sm font-bold tracking-[0.18em]">{SITE.name.toUpperCase()}</span>
          <span className="block text-[10px] tracking-[0.22em] text-accent">
            {SITE.descriptor.toUpperCase()}
          </span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="transition-colors hover:text-paper">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <PrimaryCta className="py-2.5" />
        </div>

        <button
          type="button"
          className="border border-line px-3 py-2 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ink lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="block py-3 text-muted hover:text-paper"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <PrimaryCta className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
