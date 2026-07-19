"use client";

import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#sports", label: "Sports" },
  { href: "#community", label: "Community" },
  { href: "#download", label: "Launch Status" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-semibold tracking-tight">Rovicu</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="hidden rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90 md:inline-block"
        >
          Get Early Access
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-slate-100" />
          <span className="h-0.5 w-6 bg-slate-100" />
          <span className="h-0.5 w-6 bg-slate-100" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/5 bg-slate-950 px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
