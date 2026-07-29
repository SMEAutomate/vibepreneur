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
      { label: "Customers", value: "112" },
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
      { label: "Customers", value: "168" },
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
      { label: "Customers", value: "94" },
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
      { label: "Customers", value: "72" },
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
      { label: "Customers", value: "134" },
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
      { label: "Customers", value: "189" },
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
      { label: "Customers", value: "98" },
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
      { label: "Customers", value: "156" },
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
      { label: "Customers", value: "83" },
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
      { label: "Customers", value: "58" },
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
      { label: "Customers", value: "108" },
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
      { label: "Customers", value: "76" },
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
      { label: "Customers", value: "64" },
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
  {
    slug: "charttrace",
    sector: "Healthcare",
    productName: "ChartTrace",
    tagline:
      "Clinical documentation audits that catch revenue leakage before the payer does",
    builderName: "Dr. Alicia Moreau",
    builderRole:
      "Founder, Former Practice Director, Multi-Site Outpatient Group",
    builderInitials: "AM",
    story:
      "Alicia spent nine years watching outpatient clinics lose six figures a year to downcoded claims and documentation gaps nobody caught until the payer audit landed. She built ChartTrace to run the audit continuously instead of annually, and reached her first twenty clinics before writing a line of marketing copy.",
    metrics: [
      { label: "MRR", value: "$14.6K" },
      { label: "Clinics", value: "74" },
      { label: "Time to first sale", value: "9 weeks" },
    ],
    accentColor: "cyan",
    screens: [
      {
        componentName: "CTAuditDashboard",
        title: "Audit Dashboard",
        description:
          "Documentation risk score, revenue at risk, and open findings across every clinic location.",
        type: "product",
      },
      {
        componentName: "CTChartReview",
        title: "Chart Review",
        description:
          "Encounter-level review with coding gaps, supporting evidence, and one-click clinician queries.",
        type: "product",
      },
      {
        componentName: "CTPayerRisk",
        title: "Payer Risk",
        description:
          "Denial patterns by payer and code family, with projected recovery for each remediation.",
        type: "product",
      },
      {
        componentName: "CTVibeOpportunity",
        title: "Opportunity Detail",
        description:
          "How Alicia validated that mid-size outpatient groups feel the documentation gap hardest.",
        type: "vibepreneur",
      },
      {
        componentName: "CTVibePositioning",
        title: "Positioning Canvas",
        description:
          "ChartTrace positioned against annual audit consultants rather than coding software.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "shelfsignal",
    sector: "Retail",
    productName: "ShelfSignal",
    tagline:
      "Stockout prediction for independent retailers without an ops team",
    builderName: "Dele Adeyemi",
    builderRole: "Founder, Former Regional Merchandising Lead",
    builderInitials: "DA",
    story:
      "Dele managed replenishment for 40 stores on spreadsheets and knew exactly which SKUs would run dry before anyone else did. He built ShelfSignal to encode that judgement so independent chains could see the stockout coming without hiring a demand planner.",
    metrics: [
      { label: "MRR", value: "$9.7K" },
      { label: "Store locations", value: "410" },
      { label: "Time to first sale", value: "7 weeks" },
    ],
    accentColor: "rose",
    screens: [
      {
        componentName: "SHSStockRadar",
        title: "Stock Radar",
        description:
          "Predicted stockouts ranked by lost revenue, with days of cover and reorder urgency per SKU.",
        type: "product",
      },
      {
        componentName: "SHSStorePerformance",
        title: "Store Performance",
        description:
          "Sell-through and availability by location, surfacing which stores drift from plan.",
        type: "product",
      },
      {
        componentName: "SHSReorderPlanner",
        title: "Reorder Planner",
        description:
          "Suggested purchase orders with supplier lead times, minimum order quantities, and cost impact.",
        type: "product",
      },
      {
        componentName: "SHSVibeSolution",
        title: "Solution Builder",
        description:
          "How Dele scoped ShelfSignal to one urgent workflow instead of a full inventory suite.",
        type: "vibepreneur",
      },
      {
        componentName: "SHSVibeGTM",
        title: "Go-To-Market Plan",
        description:
          "ShelfSignal's launch through buying groups and regional retail associations.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "sitepunch",
    sector: "Construction",
    productName: "SitePunch",
    tagline: "Snag lists that close out on time, from the phone in your pocket",
    builderName: "Tomás Rivera",
    builderRole: "Founder, Former Site Superintendent, Commercial Fit-Out",
    builderInitials: "TR",
    story:
      "Tomás lost three weeks on every handover chasing subcontractors through photo threads and paper punch lists. He built SitePunch so the defect, the evidence, the owner, and the deadline live in one record that closes itself out.",
    metrics: [
      { label: "MRR", value: "$11.2K" },
      { label: "Active sites", value: "230" },
      { label: "Time to first sale", value: "6 weeks" },
    ],
    accentColor: "stone",
    screens: [
      {
        componentName: "SPPunchList",
        title: "Punch List",
        description:
          "Open defects by trade and zone, with photo evidence, owner, and days outstanding.",
        type: "product",
      },
      {
        componentName: "SPSiteMap",
        title: "Site Map",
        description:
          "Floor plan overlay showing defect density by zone and which areas block handover.",
        type: "product",
      },
      {
        componentName: "SPHandoverReport",
        title: "Handover Report",
        description:
          "Client-ready close-out pack with sign-offs, outstanding items, and warranty notes.",
        type: "product",
      },
      {
        componentName: "SPVibeOpportunity",
        title: "Opportunity Detail",
        description:
          "How Tomás sized the handover delay problem across commercial fit-out subcontractors.",
        type: "vibepreneur",
      },
      {
        componentName: "SPVibeDistribution",
        title: "Distribution Channels",
        description:
          "SitePunch's channel scoring: trade suppliers, site trials, and superintendent referrals.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "cohortlens",
    sector: "Education",
    productName: "CohortLens",
    tagline:
      "Completion analytics for training providers who get paid on outcomes",
    builderName: "Hannah Beck",
    builderRole: "Founder, Former Head of Learning, Vocational Training Group",
    builderInitials: "HB",
    story:
      "Hannah could tell in week two which learners would drop out, but the reporting only caught it at week twelve when the funding was already at risk. She built CohortLens to move that signal forward far enough to act on.",
    metrics: [
      { label: "MRR", value: "$7.9K" },
      { label: "Providers", value: "58" },
      { label: "Learners tracked", value: "31K+" },
    ],
    accentColor: "purple",
    screens: [
      {
        componentName: "CLCohortDashboard",
        title: "Cohort Dashboard",
        description:
          "Completion forecast, at-risk learner count, and funding exposure across live cohorts.",
        type: "product",
      },
      {
        componentName: "CLLearnerRisk",
        title: "Learner Risk",
        description:
          "Early-warning list with engagement signals, intervention history, and suggested next contact.",
        type: "product",
      },
      {
        componentName: "CLOutcomeReport",
        title: "Outcome Report",
        description:
          "Funder-ready achievement rates by cohort, programme, and delivery site.",
        type: "product",
      },
      {
        componentName: "CLVibeSolution",
        title: "Solution Builder",
        description:
          "How Hannah turned a spreadsheet heuristic into a scoped, sellable product.",
        type: "vibepreneur",
      },
      {
        componentName: "CLVibePositioning",
        title: "Positioning Canvas",
        description:
          "CohortLens positioned against the LMS rather than alongside it.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "laneparity",
    sector: "Logistics",
    productName: "LaneParity",
    tagline:
      "Freight rate benchmarking that tells shippers when they are overpaying",
    builderName: "Ingrid Halvorsen",
    builderRole: "Founder, Former Transport Procurement Manager",
    builderInitials: "IH",
    story:
      "Ingrid renegotiated lane rates twice a year with no reliable view of the market, arguing from instinct against carriers who had the data. She built LaneParity to put a defensible number on every lane before the conversation starts.",
    metrics: [
      { label: "MRR", value: "$16.3K" },
      { label: "Shippers", value: "89" },
      { label: "Lanes benchmarked", value: "12K+" },
    ],
    accentColor: "slate",
    screens: [
      {
        componentName: "LPLaneBenchmark",
        title: "Lane Benchmark",
        description:
          "Rate percentile per lane against market, with overpay exposure and renegotiation priority.",
        type: "product",
      },
      {
        componentName: "LPCarrierScorecard",
        title: "Carrier Scorecard",
        description:
          "Carrier performance on rate, on-time delivery, tender acceptance, and claims.",
        type: "product",
      },
      {
        componentName: "LPRateTrends",
        title: "Rate Trends",
        description:
          "Directional rate movement by corridor with contract renewal timing guidance.",
        type: "product",
      },
      {
        componentName: "LPVibeOpportunity",
        title: "Opportunity Detail",
        description:
          "How Ingrid validated that mid-market shippers lack the data large ones buy.",
        type: "vibepreneur",
      },
      {
        componentName: "LPVibePricing",
        title: "Pricing & Packaging",
        description:
          "LaneParity priced against recovered spend rather than seats.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "tenantloop",
    sector: "Real Estate",
    productName: "TenantLoop",
    tagline: "Lease renewal risk scoring for commercial property managers",
    builderName: "Grace Okonjo",
    builderRole: "Founder, Former Asset Manager, Commercial Portfolio",
    builderInitials: "GO",
    story:
      "Grace lost an anchor tenant she could have kept, because the warning signs sat in three systems nobody read together. She built TenantLoop to score renewal risk continuously so the retention conversation starts twelve months out, not two.",
    metrics: [
      { label: "MRR", value: "$13.1K" },
      { label: "Properties", value: "640" },
      { label: "Time to first sale", value: "10 weeks" },
    ],
    accentColor: "blue",
    screens: [
      {
        componentName: "TLRenewalPipeline",
        title: "Renewal Pipeline",
        description:
          "Upcoming expiries ranked by risk score and annual rent at stake.",
        type: "product",
      },
      {
        componentName: "TLTenantHealth",
        title: "Tenant Health",
        description:
          "Per-tenant signals: payment behaviour, space utilisation, service tickets, and sentiment.",
        type: "product",
      },
      {
        componentName: "TLPortfolioView",
        title: "Portfolio View",
        description:
          "Occupancy, WALT, and income concentration across the managed portfolio.",
        type: "product",
      },
      {
        componentName: "TLVibeSolution",
        title: "Solution Builder",
        description:
          "How Grace structured TenantLoop around a metric asset managers already report on.",
        type: "vibepreneur",
      },
      {
        componentName: "TLVibeGTM",
        title: "Go-To-Market Plan",
        description:
          "TenantLoop's launch through property management networks and industry conferences.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "cycletime",
    sector: "Manufacturing",
    productName: "CycleTime",
    tagline:
      "Changeover loss tracking for contract manufacturers running mixed lines",
    builderName: "Viktor Novak",
    builderRole: "Founder, Former Plant Operations Manager",
    builderInitials: "VN",
    story:
      "Viktor knew changeovers were eating a fifth of his available capacity, but the MES reported uptime, not the cost of switching. He built CycleTime to make that loss visible in hours and in money, and sold the first three plants on a single screenshot.",
    metrics: [
      { label: "MRR", value: "$18.4K" },
      { label: "Plants", value: "47" },
      { label: "Time to first sale", value: "8 weeks" },
    ],
    accentColor: "lime",
    screens: [
      {
        componentName: "CYLineOverview",
        title: "Line Overview",
        description:
          "Changeover time, scrap, and capacity lost per line against the plant target.",
        type: "product",
      },
      {
        componentName: "CYChangeoverDetail",
        title: "Changeover Detail",
        description:
          "Step-by-step breakdown of a single changeover with delay causes and operator notes.",
        type: "product",
      },
      {
        componentName: "CYCapacityImpact",
        title: "Capacity Impact",
        description:
          "Recoverable hours and revenue if changeover time hits the benchmark quartile.",
        type: "product",
      },
      {
        componentName: "CYVibeOpportunity",
        title: "Opportunity Detail",
        description:
          "How Viktor sized the changeover blind spot across mid-size contract manufacturers.",
        type: "vibepreneur",
      },
      {
        componentName: "CYVibeValidation",
        title: "Validation Tracker",
        description:
          "The four plant trials Viktor ran before committing to build.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "rightsdesk",
    sector: "Media",
    productName: "RightsDesk",
    tagline:
      "Licensing and rights tracking for independent studios and catalogues",
    builderName: "Elena Vasquez",
    builderRole: "Founder, Former Head of Distribution, Independent Studio",
    builderInitials: "EV",
    story:
      "Elena managed 300 titles across 40 territories in a spreadsheet that only she understood, and every expiring window was a revenue event nobody saw coming. She built RightsDesk to turn that institutional memory into a system her whole team could run.",
    metrics: [
      { label: "MRR", value: "$10.8K" },
      { label: "Catalogues", value: "52" },
      { label: "Titles tracked", value: "18K+" },
    ],
    accentColor: "red",
    screens: [
      {
        componentName: "RDRightsGrid",
        title: "Rights Grid",
        description:
          "Title by territory by window, showing what is licensed, available, or expiring.",
        type: "product",
      },
      {
        componentName: "RDDealTracker",
        title: "Deal Tracker",
        description:
          "Licensing deals with terms, minimum guarantees, reporting obligations, and payment status.",
        type: "product",
      },
      {
        componentName: "RDRevenueSplit",
        title: "Revenue Split",
        description:
          "Participation statements by title with rights-holder splits and payable balances.",
        type: "product",
      },
      {
        componentName: "RDVibeSolution",
        title: "Solution Builder",
        description:
          "How Elena scoped RightsDesk for independents rather than competing with enterprise systems.",
        type: "vibepreneur",
      },
      {
        componentName: "RDVibeDistribution",
        title: "Distribution Channels",
        description:
          "RightsDesk's route to market through markets, festivals, and distribution consultants.",
        type: "vibepreneur",
      },
    ],
  },
  {
    slug: "scopeguard",
    sector: "Professional Services",
    productName: "ScopeGuard",
    tagline:
      "Scope creep tracking that turns overservicing into a billable conversation",
    builderName: "Callum Fraser",
    builderRole: "Founder, Former Agency Delivery Director",
    builderInitials: "CF",
    story:
      "Callum ran an agency where every account was profitable on paper and thin in reality, because nobody logged the extra round of revisions. He built ScopeGuard to price the drift while there is still time to have the conversation.",
    metrics: [
      { label: "MRR", value: "$8.9K" },
      { label: "Agencies", value: "97" },
      { label: "Time to first sale", value: "5 weeks" },
    ],
    accentColor: "sky",
    screens: [
      {
        componentName: "SGScopeDashboard",
        title: "Scope Dashboard",
        description:
          "Contracted versus delivered effort per account, with margin erosion and drift alerts.",
        type: "product",
      },
      {
        componentName: "SGChangeLog",
        title: "Change Log",
        description:
          "Out-of-scope requests captured at the point of ask, with effort estimate and approval state.",
        type: "product",
      },
      {
        componentName: "SGAccountMargin",
        title: "Account Margin",
        description:
          "Realised rate by account and team, showing which relationships subsidise the others.",
        type: "product",
      },
      {
        componentName: "SGVibeOpportunity",
        title: "Opportunity Detail",
        description:
          "How Callum validated that agencies feel margin erosion long before they measure it.",
        type: "vibepreneur",
      },
      {
        componentName: "SGVibePricing",
        title: "Pricing & Packaging",
        description:
          "ScopeGuard priced on recovered margin, with a free drift audit as the wedge.",
        type: "vibepreneur",
      },
    ],
  },
];
