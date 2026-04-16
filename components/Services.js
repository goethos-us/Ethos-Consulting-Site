import Image from "next/image";
import Link from "next/link";
import { servicesImage } from "@/lib/images";
import ScrollReveal from "./ScrollReveal";
import SectionRule from "./SectionRule";

/** Six major capability areas (merged technology lines). */
const items = [
  {
    title: "Digital Transformation & Strategy",
    body: [
      "Your technology roadmap should read like an extension of your business plan—not a list of tools purchased quarter by quarter. We help executives and program sponsors prioritize initiatives, align stakeholders, and sequence change so people, process, and systems move together.",
      "That can mean shaping a transformation office, reframing a stalled program, or building the business case for a platform investment before you sign. We stay pragmatic about cost, risk, and what your teams can realistically adopt.",
    ],
  },
  {
    title: "Data, Analytics & AI",
    body: [
      "Reliable analytics and AI rest on trustworthy data. We support pipelines, warehousing, modeling, business intelligence, and advanced analytics—so leaders see consistent numbers and teams spend less time reconciling spreadsheets.",
      "For AI, we focus on use cases that survive contact with real workflows: responsible design, integration with existing systems, and measurement so you know what changed. We keep the conversation grounded in privacy, security, and maintainability—not buzzwords.",
    ],
  },
  {
    title: "Software Engineering & Integration",
    body: [
      "We design and build web and application software, APIs, and integrations with an eye toward long-term ownership. That includes greenfield products, modernization of legacy systems, and the glue work that makes platforms actually talk to each other.",
      "Documentation, code review discipline, and sensible architecture choices matter to us because your internal teams—or the next partner—will live with the result. We aim for delivery you can operate after the engagement winds down.",
    ],
  },
  {
    title: "Salesforce & Customer Platforms",
    body: [
      "Salesforce works best when configuration, data, and adoption line up. We help with implementations, enhancements, integrations, and cleanup of orgs that grew faster than governance could keep pace.",
      "We emphasize workflows sales and service teams will actually use, admin-friendly patterns, and integration points to billing, marketing, and support tools so the customer record tells one coherent story.",
    ],
  },
  {
    title: "ERP & Enterprise Applications",
    body: [
      "ERP touches finance, supply chain, HR, and reporting—when the fit is right, work gets simpler; when it is wrong, everything feels heavier. We support selection alignment, blueprinting, implementation planning, testing support, and stabilization.",
      "We are mindful of cutover risk, master data quality, and the change management reality of asking hundreds of people to work differently on a Monday morning.",
    ],
  },
  {
    title: "Program Leadership & Business Analytics",
    body: [
      "Strong delivery needs clear priorities, visible progress, and honest status. We provide program and project leadership, PMO-style structure where it helps, and business analytics support—KPIs, dashboards, and operating rhythms that keep sponsors informed.",
      "This category is where schedules, dependencies, vendor coordination, and executive communication come together so technical work stays tied to outcomes stakeholders recognize.",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-y border-neutral-200 bg-white py-16 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 id="services-heading" className="ethos-section-title">
              What Services We Offer
            </h2>
            <SectionRule />
            <div className="ethos-section-intro space-y-4">
              <p>
                Below is how we group our work for clients. Each area can stand alone or combine with others when your
                initiative spans strategy, platforms, and delivery. If you are unsure where to start, tell us what is
                on fire—we will suggest a sensible first step.
              </p>
              <p>
                We provide the right support for your situation, whether that means embedding with your team for a
                season, leading a defined workstream, or helping you hire and onboard the right full-time talent once the
                hardest risks are behind you.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <figure className="group relative mx-auto mt-12 aspect-[21/9] max-h-[min(22rem,50vw)] w-full max-w-5xl overflow-hidden rounded-2xl bg-neutral-100 shadow-md ring-1 ring-neutral-200/80">
            <Image
              src={servicesImage}
              alt="Analytics and business data on a laptop—representing data-driven consulting"
              fill
              className="object-cover object-center transition-transform duration-[1.4s] ease-out motion-safe:group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </figure>
        </ScrollReveal>

        <ul className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {items.map((s, index) => (
            <li key={s.title} className="h-full">
              <ScrollReveal delay={index * 85} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-neutral-200 p-8 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-md">
                  <h3 className="text-lg font-semibold leading-6 text-neutral-900">{s.title}</h3>
                  <div className="mt-4 flex-1 space-y-4">
                    {s.body.map((para, i) => (
                      <p key={i} className="ethos-prose-sm">
                        {para}
                      </p>
                    ))}
                  </div>
                  <Link
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold leading-6 text-brand transition hover:gap-2 hover:text-brand-dark"
                  >
                    Learn More
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
