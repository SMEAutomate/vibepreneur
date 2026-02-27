export interface MockScreen {
  id: string;
  title: string;
  description: string;
  tags: string[];
  componentName: string;
  annotations: Annotation[];
}

export interface Annotation {
  label: string;
  description: string;
  x: string;
  y: string;
}

export const ALL_TAGS = [
  "Insight",
  "Solution",
  "Positioning",
  "GTM",
  "Distribution",
  "Growth",
  "Settings",
  "Onboarding",
  "Export",
  "Validation",
] as const;

export const mockScreens: MockScreen[] = [
  {
    id: "home-overview",
    title: "Home Overview",
    description:
      "Your daily command center: top opportunity, next GTM moves, and launch readiness at a glance.",
    tags: ["Insight", "GTM"],
    componentName: "HomeOverview",
    annotations: [
      {
        label: "Focus area",
        description: "Shows the single most valuable opportunity today",
        x: "10%",
        y: "15%",
      },
      {
        label: "GTM moves",
        description: "Actionable next steps, not theory",
        x: "55%",
        y: "45%",
      },
      {
        label: "Readiness",
        description: "Quick pulse on launch preparedness",
        x: "55%",
        y: "15%",
      },
    ],
  },
  {
    id: "opportunity-finder",
    title: "Opportunity Finder",
    description:
      "Problems detected from your role and industry, scored by market potential.",
    tags: ["Insight"],
    componentName: "OpportunityFinder",
    annotations: [
      {
        label: "Scoring",
        description:
          "Opportunity Score reflects urgency, market size, and your fit",
        x: "70%",
        y: "12%",
      },
      {
        label: "Filters",
        description: "Narrow by industry, urgency, or score range",
        x: "10%",
        y: "12%",
      },
    ],
  },
  {
    id: "opportunity-detail",
    title: "Opportunity Detail",
    description:
      "Deep dive on a single opportunity: who pays, urgency signals, and the best entry wedge.",
    tags: ["Insight"],
    componentName: "OpportunityDetail",
    annotations: [
      {
        label: "Buyer profile",
        description: "Who actually pays and why",
        x: "10%",
        y: "30%",
      },
      {
        label: "Wedge",
        description: "Suggested entry point to this market",
        x: "55%",
        y: "60%",
      },
    ],
  },
  {
    id: "solution-builder",
    title: "Solution Builder",
    description:
      "Transform an opportunity into a structured solution: offer, features, and outcomes.",
    tags: ["Solution"],
    componentName: "SolutionBuilder",
    annotations: [
      {
        label: "Structure",
        description: "Guided framework, not blank canvas",
        x: "10%",
        y: "20%",
      },
      {
        label: "Outcomes",
        description: "What the buyer gets, in their language",
        x: "55%",
        y: "55%",
      },
    ],
  },
  {
    id: "solution-brief-export",
    title: "Solution Brief Export",
    description:
      "A shareable one-pager: positioning, pricing, proof points, and scope.",
    tags: ["Solution", "Export"],
    componentName: "SolutionBriefExport",
    annotations: [
      {
        label: "Export ready",
        description: "Copy, download, or share directly",
        x: "70%",
        y: "8%",
      },
      {
        label: "Brief format",
        description: "Designed for stakeholder review, not internal notes",
        x: "10%",
        y: "20%",
      },
    ],
  },
  {
    id: "positioning-canvas",
    title: "Positioning Canvas",
    description:
      "Define your ICP, pains, promise, differentiation, and 'why now' on a single canvas.",
    tags: ["Positioning"],
    componentName: "PositioningCanvas",
    annotations: [
      {
        label: "Canvas layout",
        description: "Visual positioning at a glance",
        x: "10%",
        y: "15%",
      },
      {
        label: "Why now",
        description: "Timing signal that creates urgency",
        x: "55%",
        y: "65%",
      },
    ],
  },
  {
    id: "messaging-matrix",
    title: "Messaging Matrix",
    description:
      "Three audiences, three angles — each with headline, hook, and proof point.",
    tags: ["Positioning"],
    componentName: "MessagingMatrix",
    annotations: [
      {
        label: "Matrix",
        description: "Systematic coverage across segments",
        x: "10%",
        y: "15%",
      },
      {
        label: "Copy-ready",
        description: "Headlines you can use immediately",
        x: "55%",
        y: "30%",
      },
    ],
  },
  {
    id: "pricing-packaging",
    title: "Pricing & Packaging",
    description: "Build tiers with value metrics and capacity framing.",
    tags: ["Solution"],
    componentName: "PricingPackaging",
    annotations: [
      {
        label: "Tier logic",
        description: "Based on value delivered, not features",
        x: "10%",
        y: "15%",
      },
      {
        label: "Capacity",
        description: "What each tier includes in real terms",
        x: "55%",
        y: "40%",
      },
    ],
  },
  {
    id: "gtm-plan",
    title: "Go-To-Market Plan",
    description:
      "A 30-day plan: channels, experiments, timeline, and resources.",
    tags: ["GTM"],
    componentName: "GoToMarketPlan",
    annotations: [
      {
        label: "Timeline",
        description: "Week-by-week execution, not vague strategy",
        x: "10%",
        y: "15%",
      },
      {
        label: "Experiments",
        description: "Small bets to validate before scaling",
        x: "55%",
        y: "55%",
      },
    ],
  },
  {
    id: "distribution-channels",
    title: "Distribution Channels",
    description:
      "Channel fit scoring with a recommended sequence: start here, then scale.",
    tags: ["Distribution"],
    componentName: "DistributionChannels",
    annotations: [
      {
        label: "Fit scores",
        description: "Not all channels are equal for your solution",
        x: "10%",
        y: "20%",
      },
      {
        label: "Sequence",
        description: "Order matters — start narrow, then expand",
        x: "55%",
        y: "45%",
      },
    ],
  },
  {
    id: "outreach-studio",
    title: "Outreach Studio",
    description:
      "Email and LinkedIn message templates with follow-up sequences in a human tone.",
    tags: ["Distribution"],
    componentName: "OutreachStudio",
    annotations: [
      {
        label: "Templates",
        description: "Personalised, not robotic",
        x: "10%",
        y: "20%",
      },
      {
        label: "Sequences",
        description: "Multi-touch follow-ups that feel natural",
        x: "55%",
        y: "45%",
      },
    ],
  },
  {
    id: "content-launch-kit",
    title: "Content Launch Kit",
    description:
      "7-day launch content calendar with post templates and distribution plan.",
    tags: ["Distribution", "GTM"],
    componentName: "ContentLaunchKit",
    annotations: [
      {
        label: "Calendar",
        description: "What to publish and when",
        x: "10%",
        y: "15%",
      },
      {
        label: "Templates",
        description: "Ready-to-use copy for each platform",
        x: "55%",
        y: "50%",
      },
    ],
  },
  {
    id: "landing-page-builder",
    title: "Landing Page Builder",
    description:
      "Section outline, preview cards, and CTA variants — marketing-ready.",
    tags: ["Distribution", "Export"],
    componentName: "LandingPageBuilder",
    annotations: [
      {
        label: "Sections",
        description: "Drag-and-drop section ordering",
        x: "10%",
        y: "20%",
      },
      {
        label: "CTAs",
        description: "Multiple variants to test",
        x: "55%",
        y: "60%",
      },
    ],
  },
  {
    id: "lead-magnet-builder",
    title: "Lead Magnet Builder",
    description:
      "Generate audit, checklist, or calculator concepts with a distribution plan.",
    tags: ["Distribution", "Growth"],
    componentName: "LeadMagnetBuilder",
    annotations: [
      {
        label: "Format",
        description: "Choose the right lead magnet type for your audience",
        x: "10%",
        y: "20%",
      },
      {
        label: "Distribution",
        description: "How to get it in front of the right people",
        x: "55%",
        y: "55%",
      },
    ],
  },
  {
    id: "validation-tracker",
    title: "Validation Tracker",
    description:
      "Track hypotheses, tests, results, and decisions: pivot, iterate, or scale.",
    tags: ["Validation", "Growth"],
    componentName: "ValidationTracker",
    annotations: [
      {
        label: "Hypotheses",
        description: "What you believe vs. what the market tells you",
        x: "10%",
        y: "15%",
      },
      {
        label: "Decisions",
        description: "Clear framework: pivot, iterate, or scale",
        x: "55%",
        y: "55%",
      },
    ],
  },
  {
    id: "growth-dashboard",
    title: "Growth Dashboard",
    description:
      "Activation, retention proxies, traffic sources, and experiment results.",
    tags: ["Growth"],
    componentName: "GrowthDashboard",
    annotations: [
      {
        label: "Metrics",
        description: "The numbers that matter at your stage",
        x: "10%",
        y: "12%",
      },
      {
        label: "Experiments",
        description: "Which bets are paying off",
        x: "55%",
        y: "55%",
      },
    ],
  },
  {
    id: "feedback-inbox",
    title: "Feedback Inbox",
    description:
      "Collect user notes, auto-tagged by theme, with suggested next actions.",
    tags: ["Growth", "Validation"],
    componentName: "FeedbackInbox",
    annotations: [
      {
        label: "Tags",
        description: "Automatic categorisation of feedback themes",
        x: "10%",
        y: "12%",
      },
      {
        label: "Actions",
        description: "Suggested response for each piece of feedback",
        x: "55%",
        y: "45%",
      },
    ],
  },
  {
    id: "roadmap-iteration",
    title: "Roadmap & Iteration",
    description: "Now / Next / Later tied to traction signals, not guesswork.",
    tags: ["Growth"],
    componentName: "RoadmapIteration",
    annotations: [
      {
        label: "Columns",
        description: "Prioritised by what the market is telling you",
        x: "10%",
        y: "15%",
      },
      {
        label: "Signals",
        description: "Each item linked to real traction data",
        x: "55%",
        y: "40%",
      },
    ],
  },
  {
    id: "workspace-settings",
    title: "Workspace Settings",
    description:
      "Brand voice, tone, audience defaults, and consent preferences.",
    tags: ["Settings"],
    componentName: "WorkspaceSettings",
    annotations: [
      {
        label: "Voice",
        description: "Set once, applied everywhere",
        x: "10%",
        y: "20%",
      },
      {
        label: "Defaults",
        description: "Save time on every new solution",
        x: "55%",
        y: "45%",
      },
    ],
  },
  {
    id: "onboarding-flow",
    title: "Onboarding: From Role to First Solution",
    description:
      "Guided stepper: role, problems, choose, generate, and first GTM moves.",
    tags: ["Onboarding"],
    componentName: "OnboardingFlow",
    annotations: [
      {
        label: "Stepper",
        description: "Clear progress from start to first output",
        x: "10%",
        y: "8%",
      },
      {
        label: "First output",
        description: "Value in minutes, not days",
        x: "55%",
        y: "55%",
      },
    ],
  },
];
