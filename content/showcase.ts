export interface ShowcaseScreen {
  componentName: string;
  title: string;
  description: string;
  type: "product" | "vibepreneur";
}

export interface ShowcaseProject {
  slug: string;
  sector: string;
  productName: string;
  tagline: string;
  builderName: string;
  builderRole: string;
  builderInitials: string;
  story: string;
  metrics: { label: string; value: string }[];
  accentColor: string;
  screens: ShowcaseScreen[];
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    slug: "channeliq",
    sector: "Marketing",
    productName: "ChannelIQ",
    tagline:
      "B2B channel attribution analytics that actually shows what converts",
    builderName: "Marcus Chen",
    builderRole: "Founder, Former Head of Growth, Series B SaaS",
    builderInitials: "MC",
    story:
      "After watching three companies waste six figures on channels that looked great in dashboards but never closed deals, Marcus built ChannelIQ to give B2B marketers attribution they can trust. He went from idea to first paying customer in 11 weeks using Vibepreneur.",
    metrics: [
      { label: "MRR", value: "$8.2K" },
      { label: "Customers", value: "34" },
      { label: "Time to first sale", value: "11 weeks" },
    ],
    accentColor: "indigo",
    screens: [
      {
        componentName: "CIQDashboard",
        title: "Attribution Dashboard",
        description:
          "KPI cards, channel performance chart, and attribution funnel showing which channels actually drive revenue.",
        type: "product",
      },
      {
        componentName: "CIQCampaignDetail",
        title: "Campaign Detail",
        description:
          "Deep dive into campaign metrics with channel contribution breakdown and conversion path analysis.",
        type: "product",
      },
      {
        componentName: "CIQChannelComparison",
        title: "Channel Comparison",
        description:
          "Side-by-side channel performance matrix comparing spend, leads, pipeline, and closed revenue.",
        type: "product",
      },
      {
        componentName: "CIQVibeOpportunity",
        title: "Opportunity Detail",
        description:
          "How Marcus used Vibepreneur to validate the B2B attribution gap before writing a single line of code.",
        type: "vibepreneur",
      },
      {
        componentName: "CIQVibePositioning",
        title: "Positioning Canvas",
        description:
          "ChannelIQ's positioning strategy: who it's for, what makes it different, and why now.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "dealscore",
    sector: "Sales",
    productName: "DealScore",
    tagline: "Predictive deal qualification that tells reps where to focus",
    builderName: "Priya Sharma",
    builderRole: "Founder, Ex-VP Sales, Enterprise SaaS",
    builderInitials: "PS",
    story:
      "Priya watched her team chase 200+ deals a quarter with no way to know which ones would close. She built DealScore to give every rep an AI-powered scoring system that surfaces the 20% of deals worth 80% of revenue.",
    metrics: [
      { label: "MRR", value: "$12.4K" },
      { label: "Customers", value: "18" },
      { label: "Avg deal size", value: "$690/mo" },
    ],
    accentColor: "emerald",
    screens: [
      {
        componentName: "DSDPipeline",
        title: "Pipeline Overview",
        description:
          "Deal grid with AI scores, pipeline stages, and forecast bar showing predicted close rates.",
        type: "product",
      },
      {
        componentName: "DSDScorecard",
        title: "Deal Scorecard",
        description:
          "Individual deal scoring breakdown with risk factors, buying signals, and recommended actions.",
        type: "product",
      },
      {
        componentName: "DSDForecast",
        title: "Revenue Forecast",
        description:
          "Revenue forecast chart with win probability distribution and scenario modeling.",
        type: "product",
      },
      {
        componentName: "DSDVibeSolution",
        title: "Solution Builder",
        description:
          "How Priya structured DealScore's offer, pricing, and core features using Solution Builder.",
        type: "vibepreneur",
      },
      {
        componentName: "DSDVibeGTM",
        title: "Go-To-Market Plan",
        description:
          "DealScore's 30-day launch plan: LinkedIn outreach to sales leaders, free pipeline audit, and demo sequence.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "flowforge",
    sector: "Operations",
    productName: "FlowForge",
    tagline: "Visual process automation for ops teams who hate writing code",
    builderName: "James Okafor",
    builderRole: "Founder, Operations Director, Mid-Market",
    builderInitials: "JO",
    story:
      "James spent years building automations in spreadsheets and duct-taping Zapier workflows. He built FlowForge so ops teams can design, test, and deploy process automations visually, without depending on engineering.",
    metrics: [
      { label: "MRR", value: "$6.8K" },
      { label: "Customers", value: "42" },
      { label: "Workflows created", value: "1,240+" },
    ],
    accentColor: "violet",
    screens: [
      {
        componentName: "FFWorkflowCanvas",
        title: "Workflow Canvas",
        description:
          "Visual node-based workflow builder with drag-and-drop steps, conditions, and integrations.",
        type: "product",
      },
      {
        componentName: "FFAutomationLibrary",
        title: "Automation Library",
        description:
          "Grid of pre-built automation templates organized by category with one-click deployment.",
        type: "product",
      },
      {
        componentName: "FFPerformanceMetrics",
        title: "Performance Metrics",
        description:
          "Run statistics, time saved, error rates, and workflow health scores across all automations.",
        type: "product",
      },
      {
        componentName: "FFVibeOpportunity",
        title: "Opportunity Detail",
        description:
          "How James validated the ops automation gap and identified his ideal buyer persona.",
        type: "vibepreneur",
      },
      {
        componentName: "FFVibePositioning",
        title: "Positioning Canvas",
        description:
          "FlowForge's positioning: no-code for ops, not just another Zapier clone.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "onboardflow",
    sector: "HR",
    productName: "OnboardFlow",
    tagline: "New hire onboarding that runs itself so HR can focus on people",
    builderName: "Sarah Kim",
    builderRole: "Founder, People Ops Lead, Tech Startup",
    builderInitials: "SK",
    story:
      "Sarah onboarded 47 people in one quarter using spreadsheets, Slack DMs, and prayer. She built OnboardFlow to automate everything from document collection to tool provisioning, giving new hires a polished first week.",
    metrics: [
      { label: "MRR", value: "$5.1K" },
      { label: "Customers", value: "38" },
      { label: "Hires onboarded", value: "2,100+" },
    ],
    accentColor: "cyan",
    screens: [
      {
        componentName: "OFDashboard",
        title: "Onboarding Dashboard",
        description:
          "Active onboardings, completion rates, upcoming hires, and team workload at a glance.",
        type: "product",
      },
      {
        componentName: "OFTaskTimeline",
        title: "Task Timeline",
        description:
          "Gantt-style timeline per hire showing task statuses, dependencies, and deadlines.",
        type: "product",
      },
      {
        componentName: "OFNewHirePortal",
        title: "New Hire Portal",
        description:
          "Employee-facing view with welcome message, checklist progress, resources, and team introductions.",
        type: "product",
      },
      {
        componentName: "OFVibeSolution",
        title: "Solution Builder",
        description:
          "How Sarah defined OnboardFlow's offer, features, pricing, and buyer outcomes.",
        type: "vibepreneur",
      },
      {
        componentName: "OFVibeGrowth",
        title: "Growth Dashboard",
        description:
          "OnboardFlow's traction metrics: signups, demo requests, channel performance, and experiments.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "spendlens",
    sector: "Finance",
    productName: "SpendLens",
    tagline:
      "Real-time expense visibility so finance teams never get surprised",
    builderName: "David Park",
    builderRole: "Founder, Former Controller, Growth-Stage Startup",
    builderInitials: "DP",
    story:
      "David discovered a $180K budget overrun three weeks after it happened because expense data was scattered across five systems. He built SpendLens to give finance teams a single, real-time view of every dollar going out the door.",
    metrics: [
      { label: "MRR", value: "$9.7K" },
      { label: "Customers", value: "22" },
      { label: "Spend tracked", value: "$14M+/mo" },
    ],
    accentColor: "amber",
    screens: [
      {
        componentName: "SLSpendDashboard",
        title: "Spend Dashboard",
        description:
          "Spend by category, trend lines, budget vs actual, and anomaly alerts in one view.",
        type: "product",
      },
      {
        componentName: "SLApprovalQueue",
        title: "Approval Queue",
        description:
          "Pending expense approvals with amounts, urgency flags, requester info, and one-click actions.",
        type: "product",
      },
      {
        componentName: "SLBudgetTracker",
        title: "Budget Tracker",
        description:
          "Department budgets with utilization bars, forecast overspend warnings, and drill-down.",
        type: "product",
      },
      {
        componentName: "SLVibeOpportunity",
        title: "Opportunity Detail",
        description:
          "How David validated the finance visibility gap and sized the market opportunity.",
        type: "vibepreneur",
      },
      {
        componentName: "SLVibeRevenue",
        title: "Revenue Projection",
        description:
          "SpendLens 6-month financial model with pricing tiers and growth scenarios.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "clauseguard",
    sector: "Legal",
    productName: "ClauseGuard",
    tagline: "AI contract review that catches the risks your team misses",
    builderName: "Elena Vasquez",
    builderRole: "Founder, Former Legal Ops Manager, Fortune 500",
    builderInitials: "EV",
    story:
      "Elena reviewed 300+ contracts a year and watched her team miss critical clauses under time pressure. She built ClauseGuard to give legal teams AI-powered risk flagging that works in seconds, not days.",
    metrics: [
      { label: "MRR", value: "$14.2K" },
      { label: "Customers", value: "16" },
      { label: "Contracts reviewed", value: "4,800+" },
    ],
    accentColor: "slate",
    screens: [
      {
        componentName: "CGContractDashboard",
        title: "Contract Dashboard",
        description:
          "Contracts by status, review queue depth, expiring soon alerts, and team workload.",
        type: "product",
      },
      {
        componentName: "CGReviewQueue",
        title: "Review Queue",
        description:
          "Contract list with risk scores, flagged clause highlights, AI recommendations, and priority ranking.",
        type: "product",
      },
      {
        componentName: "CGRiskSummary",
        title: "Risk Summary",
        description:
          "Risk distribution chart, most flagged clause types, compliance status, and trend analysis.",
        type: "product",
      },
      {
        componentName: "CGVibeSolution",
        title: "Solution Builder",
        description:
          "How Elena structured ClauseGuard's offer, core features, and pricing for legal teams.",
        type: "vibepreneur",
      },
      {
        componentName: "CGVibePositioning",
        title: "Positioning Canvas",
        description:
          "ClauseGuard vs legacy legal tech: faster, cheaper, built for in-house teams.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "shipready",
    sector: "Product Mgmt",
    productName: "ShipReady",
    tagline: "Feature prioritization that aligns product, eng, and leadership",
    builderName: "Alex Rivera",
    builderRole: "Founder, Senior PM, B2B SaaS",
    builderInitials: "AR",
    story:
      "Alex was tired of roadmap fights where the loudest voice won. He built ShipReady to give product teams a structured scoring system that turns subjective debates into data-driven decisions.",
    metrics: [
      { label: "MRR", value: "$7.3K" },
      { label: "Customers", value: "29" },
      { label: "Features scored", value: "3,400+" },
    ],
    accentColor: "rose",
    screens: [
      {
        componentName: "SRRoadmapView",
        title: "Roadmap View",
        description:
          "Now/Next/Later kanban board with feature cards, priority tags, and team assignments.",
        type: "product",
      },
      {
        componentName: "SRFeatureScoring",
        title: "Feature Scoring",
        description:
          "Impact/effort matrix with quadrant visualization and stakeholder vote counts.",
        type: "product",
      },
      {
        componentName: "SRSprintPlanner",
        title: "Sprint Planner",
        description:
          "Sprint view with capacity bar, feature assignments, and effort estimates.",
        type: "product",
      },
      {
        componentName: "SRVibeFeatures",
        title: "Feature Prioritizer",
        description:
          "How Alex used Vibepreneur's Feature Prioritizer to scope ShipReady's MVP.",
        type: "vibepreneur",
      },
      {
        componentName: "SRVibeValidation",
        title: "Validation Tracker",
        description:
          "ShipReady's hypothesis testing: which assumptions were validated and what pivoted.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "resolveai",
    sector: "Customer Support",
    productName: "ResolveAI",
    tagline: "Intelligent ticket routing that gets customers to answers faster",
    builderName: "Nina Petrov",
    builderRole: "Founder, Head of Support, SaaS Scale-Up",
    builderInitials: "NP",
    story:
      "Nina managed a 12-person support team drowning in 800+ tickets a week. Half were misrouted, a third were repeat questions. She built ResolveAI to auto-route tickets, surface KB articles, and cut resolution time by 60%.",
    metrics: [
      { label: "MRR", value: "$11.5K" },
      { label: "Customers", value: "24" },
      { label: "Tickets processed", value: "89K+/mo" },
    ],
    accentColor: "sky",
    screens: [
      {
        componentName: "RATicketDashboard",
        title: "Ticket Dashboard",
        description:
          "Ticket grid with SLA status bars, team assignment, volume chart, and priority breakdown.",
        type: "product",
      },
      {
        componentName: "RAResolutionAnalytics",
        title: "Resolution Analytics",
        description:
          "CSAT trends, first-response time, resolution rates, and team performance metrics.",
        type: "product",
      },
      {
        componentName: "RAKnowledgeBase",
        title: "Knowledge Base",
        description:
          "Article list with search, coverage gap analysis, and AI-suggested new articles.",
        type: "product",
      },
      {
        componentName: "RAVibeSolution",
        title: "Solution Builder",
        description:
          "How Nina defined ResolveAI's offer, pricing tiers, and support team buyer outcomes.",
        type: "vibepreneur",
      },
      {
        componentName: "RAVibeDistribution",
        title: "Distribution Channels",
        description:
          "ResolveAI's GTM channel strategy: support communities, LinkedIn, and partnership plays.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "allocatehq",
    sector: "Project Mgmt",
    productName: "AllocateHQ",
    tagline: "Resource planning that prevents burnout before it happens",
    builderName: "Tom Brennan",
    builderRole: "Founder, Delivery Director, Professional Services",
    builderInitials: "TB",
    story:
      "Tom managed 40 consultants across 15 projects and tracked capacity in a spreadsheet that was always wrong. He built AllocateHQ to give project leaders real-time visibility into who's available, who's overloaded, and what's at risk.",
    metrics: [
      { label: "MRR", value: "$6.1K" },
      { label: "Customers", value: "19" },
      { label: "Resources managed", value: "1,800+" },
    ],
    accentColor: "lime",
    screens: [
      {
        componentName: "AHResourceGrid",
        title: "Resource Grid",
        description:
          "Team members x projects heatmap with utilization percentages and availability indicators.",
        type: "product",
      },
      {
        componentName: "AHCapacityDashboard",
        title: "Capacity Dashboard",
        description:
          "Team capacity bars, overallocation warnings, and bench availability for upcoming projects.",
        type: "product",
      },
      {
        componentName: "AHTimelineView",
        title: "Timeline View",
        description:
          "Project timelines with dependencies, milestones, and resource allocation overlays.",
        type: "product",
      },
      {
        componentName: "AHVibeOpportunity",
        title: "Opportunity Detail",
        description:
          "How Tom validated the resource planning gap in professional services firms.",
        type: "vibepreneur",
      },
      {
        componentName: "AHVibeGTM",
        title: "Go-To-Market Plan",
        description:
          "AllocateHQ's launch plan: PMO communities, cold outreach to delivery directors, and free capacity audit.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "vendorvault",
    sector: "Administration",
    productName: "VendorVault",
    tagline: "Vendor management that stops duplicate spend and missed renewals",
    builderName: "Rachel Nguyen",
    builderRole: "Founder, Former Office Manager",
    builderInitials: "RN",
    story:
      "Rachel discovered her company was paying for three overlapping project management tools and had missed two contract renewals with auto-increase clauses. She built VendorVault to give admin teams a single source of truth for every vendor relationship.",
    metrics: [
      { label: "MRR", value: "$4.3K" },
      { label: "Customers", value: "31" },
      { label: "Savings identified", value: "$2.1M+" },
    ],
    accentColor: "stone",
    screens: [
      {
        componentName: "VVVendorDirectory",
        title: "Vendor Directory",
        description:
          "Vendor list with categories, annual spend, contract status, and owner assignments.",
        type: "product",
      },
      {
        componentName: "VVContractStatus",
        title: "Contract Status",
        description:
          "Renewal calendar, expiring contracts, auto-renewal flags, and renegotiation opportunities.",
        type: "product",
      },
      {
        componentName: "VVSpendAnalysis",
        title: "Spend Analysis",
        description:
          "Vendor spend trends, duplicate detection, category consolidation, and savings opportunities.",
        type: "product",
      },
      {
        componentName: "VVVibeSolution",
        title: "Solution Builder",
        description:
          "How Rachel structured VendorVault's offer for office managers and procurement teams.",
        type: "vibepreneur",
      },
      {
        componentName: "VVVibePricing",
        title: "Pricing Packaging",
        description:
          "VendorVault's three-tier pricing strategy and value metric analysis.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "debtmap",
    sector: "Engineering",
    productName: "DebtMap",
    tagline: "Technical debt tracking that makes the invisible visible",
    builderName: "Kai Tanaka",
    builderRole: "Founder, Staff Engineer, Platform Team",
    builderInitials: "KT",
    story:
      "Kai's team spent 40% of every sprint on untracked technical debt. Nobody could quantify it, prioritize it, or explain its impact to leadership. He built DebtMap to give engineering teams a shared language for debt that connects to business outcomes.",
    metrics: [
      { label: "MRR", value: "$7.9K" },
      { label: "Customers", value: "26" },
      { label: "Debt items tracked", value: "8,200+" },
    ],
    accentColor: "red",
    screens: [
      {
        componentName: "DMDebtDashboard",
        title: "Debt Dashboard",
        description:
          "Debt items by severity, age, affected services, and estimated remediation effort.",
        type: "product",
      },
      {
        componentName: "DMCodeHealth",
        title: "Code Health",
        description:
          "Service health grades, trend lines, hotspot visualization, and quality metrics.",
        type: "product",
      },
      {
        componentName: "DMSprintImpact",
        title: "Sprint Impact",
        description:
          "Debt items affecting velocity, remediation plan, and sprint capacity allocation.",
        type: "product",
      },
      {
        componentName: "DMVibeOpportunity",
        title: "Opportunity Detail",
        description:
          "How Kai validated that engineering teams need dedicated debt visibility tooling.",
        type: "vibepreneur",
      },
      {
        componentName: "DMVibeFeatures",
        title: "Feature Prioritizer",
        description:
          "DebtMap's MVP feature scoring: what to build first and what to defer.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "systemsync",
    sector: "Design",
    productName: "SystemSync",
    tagline:
      "Design system management that tracks adoption, not just components",
    builderName: "Mia Johansson",
    builderRole: "Founder, Design Systems Lead, FinTech",
    builderInitials: "MJ",
    story:
      "Mia built a beautiful design system that nobody used. Adoption was invisible, drift was constant, and she had no data to make the case for investment. She built SystemSync to give design teams the analytics layer their system needs.",
    metrics: [
      { label: "MRR", value: "$5.6K" },
      { label: "Customers", value: "21" },
      { label: "Components tracked", value: "12,000+" },
    ],
    accentColor: "purple",
    screens: [
      {
        componentName: "SSComponentLibrary",
        title: "Component Library",
        description:
          "Component grid with usage stats, version badges, status indicators, and team ownership.",
        type: "product",
      },
      {
        componentName: "SSTokenDashboard",
        title: "Token Dashboard",
        description:
          "Color, typography, and spacing tokens with adoption percentages and drift alerts.",
        type: "product",
      },
      {
        componentName: "SSAdoptionTracker",
        title: "Adoption Tracker",
        description:
          "Team-level adoption metrics, drift detection, outdated usage warnings, and compliance scores.",
        type: "product",
      },
      {
        componentName: "SSVibeSolution",
        title: "Solution Builder",
        description:
          "How Mia defined SystemSync's offer for design systems teams and their stakeholders.",
        type: "vibepreneur",
      },
      {
        componentName: "SSVibePositioning",
        title: "Positioning Canvas",
        description:
          "SystemSync vs Storybook/Figma: the missing analytics layer for design systems.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "engagepro",
    sector: "Consulting",
    productName: "EngagePro",
    tagline: "Client engagement automation for consultants who bill, not admin",
    builderName: "Robert Walsh",
    builderRole: "Founder, Independent Management Consultant",
    builderInitials: "RW",
    story:
      "Robert spent 15 hours a week on proposals, invoicing, and client updates instead of billable work. He built EngagePro to automate the business side of consulting so independents and small firms can focus on delivering value.",
    metrics: [
      { label: "MRR", value: "$4.8K" },
      { label: "Customers", value: "44" },
      { label: "Proposals sent", value: "1,900+" },
    ],
    accentColor: "blue",
    screens: [
      {
        componentName: "EPClientDashboard",
        title: "Client Dashboard",
        description:
          "Client list with engagement status, revenue tracking, next actions, and relationship health.",
        type: "product",
      },
      {
        componentName: "EPProposalBuilder",
        title: "Proposal Builder",
        description:
          "Proposal sections editor with pricing table, timeline, deliverables, and one-click send.",
        type: "product",
      },
      {
        componentName: "EPEngagementTimeline",
        title: "Engagement Timeline",
        description:
          "Gantt-style view with phases, deliverables, billing milestones, and client approval gates.",
        type: "product",
      },
      {
        componentName: "EPVibeSolution",
        title: "Solution Builder",
        description:
          "How Robert structured EngagePro's offer for independent consultants and boutique firms.",
        type: "vibepreneur",
      },
      {
        componentName: "EPVibeGTM",
        title: "Go-To-Market Plan",
        description:
          "EngagePro's launch plan: consulting communities, LinkedIn thought leadership, and referral program.",
        type: "vibepreneur",
      },
    ],
  },
];
