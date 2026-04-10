import SectionRule from "./SectionRule";
import { getFormSubmitAction } from "@/lib/form";

export default function Contact() {
  const formAction = getFormSubmitAction();

  return (
    <section id="contact" className="bg-white py-16 sm:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <h2 id="contact-heading" className="ethos-section-title text-center sm:text-left">
          Get In Touch
        </h2>
        <SectionRule className="mx-auto sm:mx-0" />
        <div className="mt-5 space-y-4 text-center ethos-prose sm:text-left">
          <p>
            Tell us what you are trying to fix, build, or stabilize. We usually reply within one business day.
          </p>
          <p>
            There is no obligation to move forward—we would rather point you in the right direction than take on work
            that is not a fit.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-neutral-200 p-8 shadow-sm">
          <p className="ethos-prose-sm">
            Use the form below to send a message. Delivery is handled by{" "}
            <a
              href="https://formsubmit.co"
              className="font-medium text-brand underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              FormSubmit
            </a>
            . If this is the first time your destination inbox has been used, check email and confirm the activation
            link so submissions are not dropped.
          </p>

          <form action={formAction} method="POST" className="mt-6 space-y-5">
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
            <button
              type="submit"
              className="w-full rounded-md bg-brand py-3 text-sm font-semibold leading-6 text-white shadow-sm transition hover:bg-brand-dark"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
