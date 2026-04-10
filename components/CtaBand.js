import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="bg-brand py-14 text-white sm:py-16" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 id="cta-heading" className="text-xl font-bold leading-8 tracking-tight sm:text-2xl sm:leading-9">
              Taking You Further In The Digital Space
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              The right talent and a grounded plan beat a glossy strategy that never survives contact with your backlog.
              Share where you are stuck—timeline, skills gap, vendor fatigue, or a leadership team that needs one
              shared picture—and we will respond with a clear next step.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold leading-6 text-brand shadow-sm transition hover:bg-neutral-100"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
