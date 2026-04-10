import SectionRule from "./SectionRule";

const industries = [
  {
    name: "Healthcare",
    blurb:
      "Clinical workflows, operational systems, and interoperability projects where uptime and compliance both matter. We respect how sensitive patient and partner data needs to be handled.",
  },
  {
    name: "Pharmaceuticals",
    blurb:
      "Validated processes, traceability, and technology changes that have to stand up to scrutiny. We align delivery language with how quality and regulatory teams already think.",
  },
  {
    name: "Information Technology",
    blurb:
      "Product engineering groups, internal IT modernization, and vendor-heavy environments. We are comfortable translating between engineering, security, and business sponsors.",
  },
  {
    name: "Telecom",
    blurb:
      "Integration complexity, customer-facing channels, and reliability expectations at scale. We plan for operational handoffs, not just go-live ceremonies.",
  },
  {
    name: "Banking",
    blurb:
      "Controls, auditability, and core systems change where risk management cannot be an afterthought. We structure work so second-line and technology partners see the same facts.",
  },
  {
    name: "Insurance",
    blurb:
      "Policy administration, claims, and distribution technology—often with legacy depth. We help sequence modernization so business teams are not caught between two worlds forever.",
  },
  {
    name: "Manufacturing",
    blurb:
      "Plant systems, supply chain visibility, and the handoff between operations and finance. We care about how data moves from the floor to the forecast.",
  },
  {
    name: "Retail",
    blurb:
      "Omnichannel expectations, inventory truth, and customer experience initiatives. We connect storefront, e-commerce, and back-office systems where mismatches show up as lost revenue.",
  },
  {
    name: "Government",
    blurb:
      "Citizen services, procurement rhythms, and delivery that respects public-sector constraints. We write and speak plainly so mixed technical and policy audiences stay aligned.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-brand-surface py-16 sm:py-20"
      aria-labelledby="industries-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 id="industries-heading" className="ethos-section-title">
            Industries We Serve
          </h2>
          <SectionRule />
          <div className="ethos-section-intro space-y-4">
            <p>
              Depth in an industry shows up in the questions we ask on day one—in how data is governed, how risk is
              discussed, and how quickly we understand what “production” means in your world. We bring patterns from
              similar programs while staying humble about what is unique to your organization.
            </p>
            <p>
              If your sector is not listed but the problem sounds familiar—data, platforms, programs, and people—we
              should still talk. Some of our strongest work has started with a straightforward introduction and a messy
              whiteboard.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <li
              key={ind.name}
              className="rounded-xl border border-neutral-200/90 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold leading-6 text-neutral-900">{ind.name}</h3>
              <p className="mt-3 ethos-prose-sm">{ind.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
