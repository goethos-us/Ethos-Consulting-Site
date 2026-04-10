import Link from "next/link";
import SectionRule from "./SectionRule";

export default function Hero() {
  return (
    <section
      id="home"
      className="border-b border-neutral-200 bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          IT consulting &amp; delivery partners
        </p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
        >
          The Right Talent And Clear Thinking For Technology That Actually Moves The Business
        </h1>
        <SectionRule className="!w-24 sm:!w-40 lg:!w-56" />
        <div className="mt-6 max-w-2xl space-y-4 ethos-prose">
          <p>
            Ethos Consulting Group LLC is a small, senior-led consultancy. We help clients plan and execute work
            across digital change, data and AI, custom software, Salesforce, ERP, and complex programs—without the
            noise and handoffs you often get from larger firms.
          </p>
          <p>
            Whether you need a focused project team, specialists to strengthen an in-flight initiative, or an honest
            second opinion before you commit budget, we stay close to the work. You talk to people who can scope,
            build, and explain trade-offs in plain language.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
          >
            Contact Us
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 transition hover:border-brand hover:text-brand-dark"
          >
            Browse Services
          </Link>
        </div>
        <dl className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {[
            {
              t: "Practical Strategy",
              d: "Roadmaps and priorities tied to how your teams really operate—not slide decks that sit in a folder.",
            },
            {
              t: "Hands-On Delivery",
              d: "Architecture, integration, and governance considered early so you are not patching surprises late.",
            },
            {
              t: "A Partner You Can Reach",
              d: "Direct access to experienced leads; fewer layers between you and the people doing the work.",
            },
          ].map((x) => (
            <div key={x.t} className="border-l-2 border-brand pl-4">
              <dt className="text-sm font-semibold leading-6 text-neutral-900">{x.t}</dt>
              <dd className="mt-2 ethos-prose-sm">{x.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
