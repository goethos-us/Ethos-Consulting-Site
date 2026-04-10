import SectionRule from "./SectionRule";

const pillars = [
  {
    title: "One Place For Honest Guidance",
    text: "We help you compare options, sequence work, and avoid buying more platform than you can absorb. Small teams win when decisions are clear and everyone knows what “done” means.",
  },
  {
    title: "Depth Where It Matters",
    text: "You get practitioners who have lived through data migrations, Salesforce rollouts, ERP cutovers, and long-running product builds—not just advisors who disappear after the workshop.",
  },
  {
    title: "Outcomes You Can Explain",
    text: "We document assumptions, risks, and interfaces so your internal owners can support what we leave behind. Knowledge transfer is part of the delivery, not an afterthought.",
  },
  {
    title: "Flexibility In How We Engage",
    text: "Scoped projects, embedded support during peak periods, or a steady cadence of reviews alongside your team. We fit the model to the problem instead of forcing a one-size contract.",
  },
  {
    title: "Respect For Your Constraints",
    text: "Timeline, budget, compliance, and legacy systems are real. We plan for them up front rather than treating them as surprises halfway through the plan.",
  },
];

export default function Approach() {
  return (
    <section id="about" className="bg-brand-surface py-16 sm:py-20" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200/80 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12">
          <h2 className="ethos-section-title text-center sm:text-left">What We Believe</h2>
          <SectionRule className="mx-auto sm:mx-0" />
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center ethos-prose sm:text-left">
            <p>
              Great people deserve to work with partners who tell the truth, show up when it is hard, and care about the
              result after the invoice is paid. That idea guides how Ethos shows up for clients every week.
            </p>
            <p>
              Technology only creates leverage when it lines up with how decisions are made, how teams work, and what
              customers expect. Our job is to connect those dots with patience, rigor, and a bias for work that holds up
              in production.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 id="about-heading" className="ethos-section-title">
            Who We Are And How We Work
          </h2>
          <SectionRule />
          <p className="ethos-section-intro">
            We are a compact consulting practice built for organizations that want senior judgment without enterprise
            overhead. You will find us in working sessions with your leads, in documentation that your teams can reuse,
            and in follow-through after go-live when questions still surface.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-neutral-200/90 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold leading-6 text-neutral-900">Our Story</h3>
              <div className="mt-4 space-y-4 ethos-prose-sm">
                <p>
                  Ethos Consulting Group LLC exists to make complex technology initiatives feel manageable. We have sat
                  on the client side and the delivery side, which shapes how we communicate scope, risk, and cost.
                </p>
                <p>
                  We are not trying to be the biggest name on the slide. We are trying to be the team your stakeholders
                  trust when the plan needs to change, when data does not line up the first time, or when you need a
                  calm path through a tough cutover weekend.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200/90 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold leading-6 text-neutral-900">How Engagements Feel</h3>
              <div className="mt-4 space-y-4 ethos-prose-sm">
                <p>
                  Most relationships start with a conversation about what is broken, what is changing in the business,
                  and what you have already tried. From there we propose a sensible next step—a short discovery, a
                  focused assessment, or a small pilot—before anyone talks about a multi-year program.
                </p>
                <p>
                  Throughout, we keep communication direct: written summaries of decisions, visible backlog priorities,
                  and regular checkpoints so sponsors know what is landing and what still needs air cover.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-200/80 pt-16">
          <h2 className="ethos-section-title">Why Teams Choose Ethos</h2>
          <SectionRule />
          <p className="ethos-section-intro">
            You have options when you hire outside help. Clients tend to stay with us because we combine the structure
            you expect from a serious technology partner with the accountability of a small shop—clear ownership,
            fewer layers, and advice that still sounds human when the pressure is on.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <li
                key={p.title}
                className="rounded-xl border border-neutral-200/90 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold leading-6 text-neutral-900">{p.title}</h3>
                <p className="mt-3 ethos-prose-sm">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
