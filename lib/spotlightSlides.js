import {
  spotlightImageAccess,
  spotlightImageClarity,
  spotlightImageDelivery,
  spotlightImagePace,
} from "@/lib/images";

/** Slides for the home page spotlight carousel (see AutoCarousel). */
export const spotlightSlides = [
  {
    key: "clarity",
    kicker: "Clarity first",
    heading: "Decisions your teams can defend in the next meeting",
    body: "We translate messy reality into options, trade-offs, and a sensible sequence—so sponsors, security, and delivery leads are looking at the same picture instead of three different versions of “almost done.”",
    image: spotlightImageClarity,
    imageAlt: "Team collaborating around a laptop in an open office",
  },
  {
    key: "delivery",
    kicker: "Hands-on delivery",
    heading: "Architecture and governance before go-live pressure",
    body: "From integrations and data contracts to testing discipline and cutover rehearsals, we plan for production behavior—not a demo that falls apart the first week your users lean on it.",
    image: spotlightImageDelivery,
    imageAlt: "Developers working together at a desk with laptops",
  },
  {
    key: "access",
    kicker: "Direct access",
    heading: "Fewer layers between you and the people doing the work",
    body: "You should be able to ask a sharp question and get a straight answer. Our engagements are built around experienced leads who stay close to scope, risk, and the weekly details that determine whether a program lands.",
    image: spotlightImageAccess,
    imageAlt: "Colleagues reviewing a presentation in a meeting room",
  },
  {
    key: "pace",
    kicker: "Measured pace",
    heading: "Change that matches what your organization can absorb",
    body: "The best roadmap in the world fails if teams are underwater. We help you stage work so adoption, training, and support keep up—reducing the “big bang” risk that exhausts stakeholders before value shows up.",
    image: spotlightImagePace,
    imageAlt: "Bright modern workspace with natural light",
  },
];
