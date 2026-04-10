import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-base leading-7 text-neutral-600">
          We provide practical support for your company—whether that means shaping a program, delivering a critical
          workstream, or helping you bring the right people in-house once the path is clear. We build tailored plans,
          communicate plainly, and care about finishing well—not just starting loudly.
        </p>

        <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand">Ethos Consulting Group LLC</p>
            <address className="mt-4 not-italic text-sm text-neutral-600">
              <div className="space-y-0.5 leading-6">
                <p>30 N Gould St, # N</p>
                <p>Sheridan, WY 82801</p>
              </div>
              <p className="mt-5 leading-6">
                <a href="tel:+13213459567" className="text-brand hover:text-brand-dark">
                  321-345-9567
                </a>
                <span className="mx-2 text-neutral-300" aria-hidden>
                  |
                </span>
                <a href="mailto:contact@goethos.us" className="text-brand hover:text-brand-dark">
                  contact@goethos.us
                </a>
              </p>
            </address>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Quick Links</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm leading-7">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-700 hover:text-brand-dark">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-neutral-200 pt-8 text-center text-xs leading-5 text-neutral-500 sm:text-left">
          © {year} Ethos Consulting Group LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
