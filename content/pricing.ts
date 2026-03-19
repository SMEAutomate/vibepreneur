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
      "Discover where your expertise has commercial advantage before committing.",
    features: [
      "1 opportunity assessment",
      "Positioning snapshot (read-only)",
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
      "Find your concept, refine positioning, and ship a first launch with room to iterate.",
    features: [
      "10 opportunity assessments/mo",
      "10 positioning iterations/mo",
      "10 asset generations/mo",
      "5 outreach sequences/mo",
      "Go-to-market playbook",
      "Daily progress briefs",
      "Email support",
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
      "Full system with growth experiments and high iteration depth for live ventures.",
    features: [
      "30 opportunity assessments/mo",
      "30 positioning iterations/mo",
      "30 asset generations/mo",
      "15 outreach sequences/mo",
      "15 growth experiments/mo",
      "Traction playbooks per channel",
      "Advanced competitive analysis",
      "Referral + distribution strategy",
      "Priority support",
    ],
    capacity: "Grow",
    cta: "Join Waitlist: Max",
  },
];

export interface FeatureRow {
  feature: string;
  free: string | boolean;
  pro: string | boolean;
  max: string | boolean;
}

export const featureMatrix: FeatureRow[] = [
  {
    feature: "Opportunity assessments",
    free: "1",
    pro: "10/mo",
    max: "30/mo",
  },
  {
    feature: "Positioning iterations",
    free: "Snapshot",
    pro: "10/mo",
    max: "30/mo",
  },
  {
    feature: "Asset generations",
    free: false,
    pro: "10/mo",
    max: "30/mo",
  },
  {
    feature: "Outreach sequences",
    free: false,
    pro: "5/mo",
    max: "15/mo",
  },
  {
    feature: "Growth experiments",
    free: false,
    pro: false,
    max: "15/mo",
  },
  {
    feature: "Venture readiness score",
    free: true,
    pro: true,
    max: true,
  },
  {
    feature: "Go-to-market playbook",
    free: false,
    pro: true,
    max: true,
  },
  {
    feature: "Daily progress briefs",
    free: false,
    pro: true,
    max: true,
  },
  {
    feature: "Traction playbooks",
    free: false,
    pro: false,
    max: true,
  },
  {
    feature: "Competitive analysis",
    free: false,
    pro: false,
    max: "Advanced",
  },
  {
    feature: "Referral + distribution strategy",
    free: false,
    pro: false,
    max: true,
  },
  {
    feature: "Community access",
    free: true,
    pro: true,
    max: true,
  },
  {
    feature: "Support",
    free: "Community",
    pro: "Email",
    max: "Priority",
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
    question: "What happens when I hit my iteration limits?",
    answer:
      "Your existing work stays accessible. You can review, edit, and use everything you have already generated. To run new assessments, positioning iterations, or asset generations, you can wait for your monthly reset or upgrade to a higher tier for more iteration depth.",
  },
  {
    question: "What stage is Vibepreneur at today?",
    answer:
      "We are in early access development. The Opportunity Engine, Venture Structuring, and Launch Systems are live. Growth Loops and Execution Automation are being built. Join the waitlist to be among the first users and help shape the platform.",
  },
];
