export interface PricingTier {
  name: string;
  price: string;
  period: string;
  idealFor: string;
  features: string[];
  capacity: string;
  cta: string;
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    idealFor: "Exploring what you could build from your experience.",
    features: [
      "1 solution concept",
      "Basic positioning framework",
      "Opportunity assessment",
      "Community access",
    ],
    capacity: "Limited capacity",
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    idealFor:
      "Professionals ready to validate and launch their first solution.",
    features: [
      "5 solution concepts per month",
      "Full positioning engine",
      "Go-to-market playbook",
      "ICP definition + messaging",
      "Channel strategy",
      "Email outreach templates",
    ],
    capacity: "Standard capacity",
    cta: "Join Waitlist — Pro",
    highlighted: true,
  },
  {
    name: "Max",
    price: "$79",
    period: "per month",
    idealFor: "Serious builders running multiple solutions or experiments.",
    features: [
      "Unlimited solution concepts",
      "Advanced positioning + competitive analysis",
      "Full GTM engine with experiments",
      "Growth system with traction playbooks",
      "Referral + visibility strategy",
      "Priority support",
    ],
    capacity: "High capacity",
    cta: "Join Waitlist — Max",
  },
  {
    name: "Ultra",
    price: "$199",
    period: "per month",
    idealFor:
      "Teams and portfolio builders scaling multiple solutions to market.",
    features: [
      "Everything in Max",
      "Team collaboration",
      "Portfolio dashboard",
      "Custom distribution frameworks",
      "Strategic growth advisor sessions",
      "White-glove onboarding",
    ],
    capacity: "Maximum capacity",
    cta: "Join Waitlist — Ultra",
  },
];

export const pricingFaq = [
  {
    question: "Do I need to code?",
    answer:
      "No. Vibepreneur handles the technical structuring. You bring the expertise and market knowledge — the platform handles everything from concept to go-to-market plan.",
  },
  {
    question: "Is this a course?",
    answer:
      "No. Vibepreneur is a platform, not educational content. It produces real outputs — solution concepts, positioning frameworks, launch playbooks, and growth experiments — that you execute.",
  },
  {
    question: "When do you launch?",
    answer:
      "Early access is launching soon. Join the waitlist to be first in line and receive your personalised solution ideas immediately.",
  },
  {
    question: "How is capacity measured?",
    answer:
      "Each tier includes a simple usage allocation based on the outputs you generate — solution concepts, GTM plans, growth experiments, and more. Full details will be available at launch.",
  },
];
