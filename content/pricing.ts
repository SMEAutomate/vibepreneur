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
    idealFor:
      "Explore opportunities from your background and see what you could build.",
    features: [
      "1 opportunity assessment",
      "Basic positioning framework",
      "Venture readiness score",
      "Community access",
    ],
    capacity: "Explore",
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    idealFor:
      "Build and launch one structured business system with full execution support.",
    features: [
      "5 venture concepts per month",
      "Full Offer & Positioning Studio",
      "Launch Builder with asset generation",
      "Go-to-market playbook",
      "Daily progress briefs",
      "Growth experiment tracking",
      "Email outreach sequences",
    ],
    capacity: "Build & Launch",
    cta: "Join Waitlist: Pro",
    highlighted: true,
  },
  {
    name: "Max",
    price: "$149",
    period: "per month",
    idealFor:
      "Run multiple experiments and ventures in parallel with advanced execution.",
    features: [
      "Unlimited venture concepts",
      "Advanced competitive analysis",
      "Multi-venture execution cockpit",
      "Full growth system with loops",
      "Traction playbooks per channel",
      "Referral + visibility strategy",
      "Priority support",
    ],
    capacity: "Scale",
    cta: "Join Waitlist: Max",
  },
  {
    name: "Ultra",
    price: "$299",
    period: "per month",
    idealFor:
      "Scale a portfolio of ventures with team collaboration and advanced workflows.",
    features: [
      "Everything in Max",
      "Team collaboration",
      "Portfolio dashboard",
      "Custom growth frameworks",
      "Strategic advisory sessions",
      "White-glove onboarding",
    ],
    capacity: "Portfolio",
    cta: "Join Waitlist: Ultra",
  },
];

export interface FeatureRow {
  feature: string;
  free: string | boolean;
  pro: string | boolean;
  max: string | boolean;
  ultra: string | boolean;
}

export const featureMatrix: FeatureRow[] = [
  {
    feature: "Venture concepts",
    free: "1",
    pro: "5/mo",
    max: "Unlimited",
    ultra: "Unlimited",
  },
  {
    feature: "Opportunity assessment",
    free: true,
    pro: true,
    max: true,
    ultra: true,
  },
  {
    feature: "Positioning framework",
    free: "Basic",
    pro: "Full",
    max: "Full",
    ultra: "Custom",
  },
  {
    feature: "Venture readiness score",
    free: true,
    pro: true,
    max: true,
    ultra: true,
  },
  {
    feature: "Community access",
    free: true,
    pro: true,
    max: true,
    ultra: true,
  },
  {
    feature: "Offer & Positioning Studio",
    free: false,
    pro: true,
    max: true,
    ultra: true,
  },
  { feature: "Launch Builder", free: false, pro: true, max: true, ultra: true },
  {
    feature: "Go-to-market playbook",
    free: false,
    pro: true,
    max: true,
    ultra: true,
  },
  {
    feature: "Daily progress briefs",
    free: false,
    pro: true,
    max: true,
    ultra: true,
  },
  {
    feature: "Growth experiment tracking",
    free: false,
    pro: true,
    max: true,
    ultra: true,
  },
  {
    feature: "Email outreach sequences",
    free: false,
    pro: true,
    max: true,
    ultra: true,
  },
  {
    feature: "Competitive analysis",
    free: false,
    pro: false,
    max: "Advanced",
    ultra: "Advanced",
  },
  {
    feature: "Multi-venture cockpit",
    free: false,
    pro: false,
    max: true,
    ultra: true,
  },
  { feature: "Growth loops", free: false, pro: false, max: true, ultra: true },
  {
    feature: "Traction playbooks",
    free: false,
    pro: false,
    max: true,
    ultra: true,
  },
  {
    feature: "Team collaboration",
    free: false,
    pro: false,
    max: false,
    ultra: true,
  },
  {
    feature: "Portfolio dashboard",
    free: false,
    pro: false,
    max: false,
    ultra: true,
  },
  {
    feature: "Strategic advisory",
    free: false,
    pro: false,
    max: false,
    ultra: true,
  },
  {
    feature: "Support",
    free: "Community",
    pro: "Email",
    max: "Priority",
    ultra: "White-glove",
  },
];

export const pricingFaq = [
  {
    question: "Do I need a technical background?",
    answer:
      "No. Vibepreneur produces structured business systems, launch assets, and growth plans. If you want to build software, it generates build-ready specs you can take to any development tool or developer. You bring the expertise. The platform handles the rest.",
  },
  {
    question: "Do I need an existing audience?",
    answer:
      "No. The system is designed for professionals starting from zero. It builds distribution strategies, outreach sequences, and validation campaigns that work without an existing following.",
  },
  {
    question: "Do I own what gets created?",
    answer:
      "Yes. Every offer, asset, strategy, and audience you build inside Vibepreneur belongs to you. The platform is the operating system. The business is yours.",
  },
  {
    question: "Is this for services, software, or both?",
    answer:
      "Both. Vibepreneur supports software products, service businesses, hybrid models, templates, frameworks, and productised consulting. The system adapts to whatever business model fits your opportunity best.",
  },
  {
    question: "Is the platform fully autonomous?",
    answer:
      "No, and intentionally so. Vibepreneur handles structuring, research, asset creation, and execution support. You make the strategic decisions, approve directions, and provide the domain expertise. You direct. The system executes.",
  },
  {
    question: "What stage is Vibepreneur at today?",
    answer:
      "We are in early access development. The Opportunity Engine, Venture Structuring, and Launch Systems are live. Execution Automation and Growth Loops are being built. Join the waitlist to be among the first users and help shape the platform.",
  },
];
