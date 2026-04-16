import SectionRule from "./SectionRule";
import FileField from "./FileField";
import { getFormSubmitAction } from "@/lib/form";

export default function Contact() {
  const formAction = getFormSubmitAction();

  return (
    <section id="contact" className="bg-white py-16 sm:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="contact-heading" className="ethos-section-title text-center sm:text-left">
          Get In Touch
        </h2>
        <SectionRule className="mx-auto sm:mx-0" />
        <div className="mt-5 max-w-3xl space-y-4 text-center ethos-prose sm:text-left">
          <p>
            Tell us what you are trying to fix, build, or stabilize. We usually reply within one business day.
          </p>
          <p>
            There is no obligation to move forward—we would rather point you in the right direction than take on work
            that is not a fit.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="lg:col-span-7">
            <div className="h-full rounded-xl border border-neutral-200 p-6 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md sm:p-8">
              <form action={formAction} method="POST" encType="multipart/form-data" className="space-y-5">
                <input type="hidden" name="_subject" value="Ethos website — new inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-neutral-800">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm leading-6 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm leading-6 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-neutral-800">
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm leading-6 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    placeholder="Context, goals, and anything you have already tried."
                  />
                </div>

                <FileField />

                <button
                  type="submit"
                  className="w-full rounded-md bg-brand py-3 text-sm font-semibold leading-6 text-white shadow-sm transition hover:bg-brand-dark"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-xl border border-neutral-200 bg-brand-surface/60 p-6 transition duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md sm:p-8">
                <h3 className="text-base font-semibold text-neutral-900">What Happens Next</h3>
                <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-neutral-700">
                  <li>We read your note and any attachment to understand urgency, scope, and constraints.</li>
                  <li>We reply with clarifying questions or propose a short intro call—usually within one business day.</li>
                  <li>If there is a fit, we suggest a crisp next step (discovery, assessment, or scoped pilot).</li>
                </ol>
              </div>

              <div className="rounded-xl border border-dashed border-brand/35 bg-white p-6 transition duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-brand/50 motion-safe:hover:shadow-md sm:p-8">
                <h3 className="text-base font-semibold text-neutral-900">Attachments That Help</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-neutral-600">
                  <li>A one-page problem summary or timeline</li>
                  <li>Architecture sketches, vendor decks, or redacted requirements</li>
                  <li>Sample exports when the issue is data quality or reconciliation</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
