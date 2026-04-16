"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur transition-shadow duration-300 supports-[backdrop-filter]:bg-white/80 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="min-w-0 shrink"
          onClick={() => setOpen(false)}
          aria-label="Ethos Consulting Group home"
        >
          <span className="block font-bold uppercase leading-tight tracking-tight text-brand sm:leading-snug">
            <span className="block text-[0.8rem] sm:text-sm lg:text-base xl:text-lg">
              Ethos Consulting Group
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-neutral-700 underline-offset-4 transition hover:bg-brand-surface hover:text-brand-dark hover:underline xl:px-3"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-1 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark xl:ml-2"
          >
            Get In Touch
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-neutral-200 p-2 text-neutral-800 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-neutral-200 bg-white px-4 py-3 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-neutral-800 hover:bg-brand-surface"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 rounded-md bg-brand px-3 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
