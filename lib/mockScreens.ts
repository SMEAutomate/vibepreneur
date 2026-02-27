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
  {
    id: "expertise-analyzer",
    title: "Expertise Analyzer",
    description:
      "Upload your CV or describe your role — the platform maps skills to market gaps and scores your fit.",
    tags: ["Insight"],
    componentName: "ExpertiseAnalyzer",
    annotations: [
      {
        label: "Source input",
        description: "CV upload, LinkedIn, or manual description",
        x: "10%",
        y: "20%",
      },
      {
        label: "Gap matching",
        description: "Skills mapped to underserved market segments",
        x: "55%",
        y: "45%",
      },
    ],
  },
  {
    id: "market-signals",
    title: "Market Signals",
    description:
      "Real-time demand intelligence: search trends, hiring signals, funding data, and complaint patterns.",
    tags: ["Insight", "Growth"],
    componentName: "MarketSignals",
    annotations: [
      {
        label: "Signal feed",
        description: "Curated signals from multiple data sources",
        x: "10%",
        y: "35%",
      },
      {
        label: "Strength scoring",
        description: "Not all signals are equal — strength helps prioritise",
        x: "55%",
        y: "20%",
      },
    ],
  },
  {
    id: "competitor-radar",
    title: "Competitor Radar",
    description:
      "Track competitors: strengths, weaknesses, pricing, threat level, and your competitive edge.",
    tags: ["Insight", "Positioning"],
    componentName: "CompetitorRadar",
    annotations: [
      {
        label: "Threat level",
        description: "Ranked by how directly they compete with you",
        x: "70%",
        y: "12%",
      },
      {
        label: "Your edge",
        description: "What you do better, distilled clearly",
        x: "10%",
        y: "75%",
      },
    ],
  },
  {
    id: "buyer-persona-editor",
    title: "Buyer Persona Editor",
    description:
      "Detailed personas: demographics, goals, pains, buying triggers, and where they hang out.",
    tags: ["Positioning", "GTM"],
    componentName: "BuyerPersonaEditor",
    annotations: [
      {
        label: "Full profile",
        description: "Every detail your GTM team needs",
        x: "10%",
        y: "20%",
      },
      {
        label: "Completeness",
        description: "Track how well-defined each persona is",
        x: "70%",
        y: "55%",
      },
    ],
  },
  {
    id: "objection-handler",
    title: "Objection Handler",
    description:
      "Pre-written responses for every buyer pushback, scored by confidence and frequency.",
    tags: ["Positioning", "Distribution"],
    componentName: "ObjectionHandler",
    annotations: [
      {
        label: "Responses",
        description: "Copy-ready answers grounded in your positioning",
        x: "10%",
        y: "35%",
      },
      {
        label: "Confidence",
        description: "How strong each response is — improve weak ones",
        x: "70%",
        y: "20%",
      },
    ],
  },
  {
    id: "value-prop-workshop",
    title: "Value Prop Workshop",
    description:
      "Generate and score multiple value proposition variants. Test them across channels.",
    tags: ["Positioning"],
    componentName: "ValuePropWorkshop",
    annotations: [
      {
        label: "Variants",
        description: "Outcome-led, pain-led, identity-led angles",
        x: "10%",
        y: "20%",
      },
      {
        label: "Test plan",
        description: "Where and how to validate each variant",
        x: "10%",
        y: "70%",
      },
    ],
  },
  {
    id: "user-journey-map",
    title: "User Journey Map",
    description:
      "Five-stage journey from stranger to advocate: touchpoints, emotions, and drop-off analysis.",
    tags: ["Solution"],
    componentName: "UserJourneyMap",
    annotations: [
      {
        label: "Stages",
        description: "Aware → Consider → Decide → Onboard → Expand",
        x: "10%",
        y: "15%",
      },
      {
        label: "Drop-offs",
        description: "Where you lose people and how to fix it",
        x: "10%",
        y: "75%",
      },
    ],
  },
  {
    id: "feature-prioritizer",
    title: "Feature Prioritizer",
    description:
      "Impact vs effort scoring for every feature. Quadrant-based recommendations for your MVP.",
    tags: ["Solution", "Validation"],
    componentName: "FeaturePrioritizer",
    annotations: [
      {
        label: "Scoring",
        description: "Visual impact and effort bars for quick comparison",
        x: "10%",
        y: "20%",
      },
      {
        label: "Quadrants",
        description: "Do first, quick win, schedule, or deprioritise",
        x: "70%",
        y: "15%",
      },
    ],
  },
  {
    id: "comparison-page-builder",
    title: "Comparison Page Builder",
    description:
      "Build SEO-optimised 'vs' pages with feature tables, meta, and performance tracking.",
    tags: ["Distribution", "Positioning"],
    componentName: "ComparisonPageBuilder",
    annotations: [
      {
        label: "Feature table",
        description: "Side-by-side comparison that sells your strengths",
        x: "10%",
        y: "20%",
      },
      {
        label: "SEO meta",
        description: "Title, description, and target keywords included",
        x: "10%",
        y: "60%",
      },
    ],
  },
  {
    id: "icp-definition",
    title: "ICP Definition",
    description:
      "Define your ideal customer: firmographics, technographics, intent signals, and disqualifiers.",
    tags: ["GTM", "Positioning"],
    componentName: "ICPDefinition",
    annotations: [
      {
        label: "Firmographics",
        description: "Size, revenue, industry, growth stage",
        x: "10%",
        y: "15%",
      },
      {
        label: "Intent signals",
        description: "How to spot ready buyers in the wild",
        x: "55%",
        y: "20%",
      },
    ],
  },
  {
    id: "channel-experiments",
    title: "Channel Experiments",
    description:
      "Run structured experiments across channels: hypothesis, metric, result, and scale/iterate/pivot.",
    tags: ["Growth", "Validation"],
    componentName: "ChannelExperiments",
    annotations: [
      {
        label: "Experiments",
        description: "Each one has a clear hypothesis and success metric",
        x: "10%",
        y: "30%",
      },
      {
        label: "Decisions",
        description: "Scale what works, iterate what shows promise",
        x: "55%",
        y: "20%",
      },
    ],
  },
  {
    id: "referral-program",
    title: "Referral Program",
    description:
      "Design your referral program: incentives, sharing channels, projections, and leaderboard.",
    tags: ["Growth", "Distribution"],
    componentName: "ReferralProgram",
    annotations: [
      {
        label: "Incentives",
        description: "Two-sided rewards that motivate sharing",
        x: "10%",
        y: "20%",
      },
      {
        label: "Projections",
        description: "Expected referrals, leads, and LTV:CAC ratio",
        x: "55%",
        y: "15%",
      },
    ],
  },
  {
    id: "seo-keyword-planner",
    title: "SEO Keyword Planner",
    description:
      "Keyword research with volume, difficulty, intent, and a 3-month content roadmap.",
    tags: ["Distribution", "Growth"],
    componentName: "SEOKeywordPlanner",
    annotations: [
      {
        label: "Keywords",
        description: "Ranked by volume, difficulty, and commercial intent",
        x: "10%",
        y: "30%",
      },
      {
        label: "Roadmap",
        description: "Phased content plan from quick wins to pillar content",
        x: "10%",
        y: "75%",
      },
    ],
  },
  {
    id: "social-proof-collector",
    title: "Social Proof Collector",
    description:
      "Collect, organise, and deploy testimonials across your marketing pages.",
    tags: ["Growth", "Validation"],
    componentName: "SocialProofCollector",
    annotations: [
      {
        label: "Testimonials",
        description: "Quotes with attribution, rating, and source",
        x: "10%",
        y: "30%",
      },
      {
        label: "Deployment",
        description: "Track where each testimonial is being used",
        x: "55%",
        y: "55%",
      },
    ],
  },
  {
    id: "ai-assistant",
    title: "AI Strategy Assistant",
    description:
      "Chat-based GTM co-pilot that knows your positioning, ICP, and current traction.",
    tags: ["Insight", "Solution"],
    componentName: "AIAssistant",
    annotations: [
      {
        label: "Context-aware",
        description: "Loaded with your positioning, persona, and results",
        x: "70%",
        y: "15%",
      },
      {
        label: "Actionable",
        description: "Answers tied to your specific GTM situation",
        x: "10%",
        y: "40%",
      },
    ],
  },
  {
    id: "export-center",
    title: "Export Center",
    description:
      "All your GTM assets in one place: briefs, plans, sequences, and landing pages.",
    tags: ["Export", "Settings"],
    componentName: "ExportCenter",
    annotations: [
      {
        label: "All assets",
        description: "Every exportable artifact from your workspace",
        x: "10%",
        y: "30%",
      },
      {
        label: "Formats",
        description: "PDF, CSV, HTML, Notion, clipboard — your choice",
        x: "55%",
        y: "40%",
      },
    ],
  },
  {
    id: "team-workspace",
    title: "Team Workspace",
    description:
      "Invite teammates, assign roles, track activity, and manage your GTM collaboration.",
    tags: ["Settings"],
    componentName: "TeamWorkspace",
    annotations: [
      {
        label: "Roles",
        description: "Owner, Editor, Viewer — control who does what",
        x: "10%",
        y: "20%",
      },
      {
        label: "Activity",
        description: "See who did what and when",
        x: "70%",
        y: "40%",
      },
    ],
  },
  {
    id: "notification-center",
    title: "Notification Center",
    description:
      "Activity feed with market signals, experiment results, team updates, and content reminders.",
    tags: ["Settings"],
    componentName: "NotificationCenter",
    annotations: [
      {
        label: "Categories",
        description: "Insights, growth, team, content, system",
        x: "10%",
        y: "10%",
      },
      {
        label: "Actionable",
        description: "Each notification links to the relevant screen",
        x: "70%",
        y: "35%",
      },
    ],
  },
  {
    id: "win-loss-analysis",
    title: "Win/Loss Analysis",
    description:
      "Track every deal outcome: reasons, channels, cycle length, and pattern analysis.",
    tags: ["Validation", "Growth"],
    componentName: "WinLossAnalysis",
    annotations: [
      {
        label: "Outcomes",
        description: "Won and lost deals with clear reasons",
        x: "10%",
        y: "30%",
      },
      {
        label: "Patterns",
        description: "Why you win and why you lose — distilled",
        x: "10%",
        y: "75%",
      },
    ],
  },
  {
    id: "revenue-projection",
    title: "Revenue Projection",
    description:
      "6-month MRR forecast with scenario modelling, assumptions, and growth visualisation.",
    tags: ["Growth", "GTM"],
    componentName: "RevenueProjection",
    annotations: [
      {
        label: "MRR chart",
        description: "Month-by-month revenue projection",
        x: "10%",
        y: "30%",
      },
      {
        label: "Scenarios",
        description: "Conservative, base, and optimistic models",
        x: "10%",
        y: "60%",
      },
    ],
  },
];
