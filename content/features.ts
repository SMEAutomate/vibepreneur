import type { ScreenCallout } from "@/components/marketing/annotated-screen-explainer";

export interface FeatureCapability {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureConfig {
  slug: string;
  tag: string;
  name: string;
  headline: string;
  description: string;
  iconPath: string;
  capabilities: FeatureCapability[];
  featuredScreen: string;
  screenNames: string[];
  callouts?: ScreenCallout[];
}

export const features: FeatureConfig[] = [
  {
    slug: "insight-engine",
    tag: "Insight",
    name: "Insight Engine",
    headline: "Surface opportunities hidden in your expertise",
    description:
      "The Insight Engine analyses your professional background, identifies underserved market segments, and scores opportunities by demand, urgency, and your personal fit. Stop guessing where to start. Let the data point the way.",
    iconPath:
      "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    capabilities: [
      {
        icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
        title: "Opportunity Discovery",
        description:
          "Automatically detect market gaps from your role, industry, and skill set.",
      },
      {
        icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
        title: "Demand Scoring",
        description:
          "Every opportunity ranked by market size, urgency, and how well you fit.",
      },
      {
        icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
        title: "Competitive Intelligence",
        description:
          "Track competitors, spot weaknesses, and identify your unfair advantage.",
      },
      {
        icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z",
        title: "AI Strategy Assistant",
        description:
          "A context-aware co-pilot that knows your positioning and traction data.",
      },
    ],
    featuredScreen: "OpportunityFinder",
    screenNames: [
      "HomeOverview",
      "OpportunityFinder",
      "OpportunityDetail",
      "ExpertiseAnalyzer",
      "MarketSignals",
      "CompetitorRadar",
      "AIAssistant",
    ],
    callouts: [
      {
        number: 1,
        label: "Search & Filters",
        description:
          "Narrow by industry, urgency, or keyword to find the opportunities that match your background.",
        x: "40%",
        y: "13%",
      },
      {
        number: 2,
        label: "Opportunity Score",
        description:
          "Each opportunity scored 0–100 based on market size, urgency, and your personal fit.",
        x: "17%",
        y: "22%",
      },
      {
        number: 3,
        label: "Buyer & Industry Context",
        description:
          "See who actually pays and which industry vertical the opportunity belongs to.",
        x: "34%",
        y: "26%",
      },
      {
        number: 4,
        label: "Urgency Signal",
        description:
          "High, Medium, or Low, based on market timing, competitive density, and demand velocity.",
        x: "76%",
        y: "22%",
      },
      {
        number: 5,
        label: "Deep-Dive Action",
        description:
          "Click Explore to open the full opportunity detail: buyer profile, wedge strategy, and next steps.",
        x: "87%",
        y: "22%",
      },
      {
        number: 6,
        label: "Market Category Tags",
        description:
          "Industry and solution type labels so you can scan opportunities by the markets you know best.",
        x: "40%",
        y: "35%",
      },
    ],
  },
  {
    slug: "solution-builder",
    tag: "Solution",
    name: "Solution Builder",
    headline: "Turn insight into a structured, buildable solution",
    description:
      "The Solution Builder transforms raw opportunities into complete product concepts with positioning, pricing tiers, user journeys, feature prioritisation, and tool-ready build outputs. Structure replaces guesswork.",
    iconPath:
      "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9",
    capabilities: [
      {
        icon: "M11.42 15.17l-5.384-3.07A1.5 1.5 0 015 10.815V3.75a.75.75 0 01.75-.75h12.5a.75.75 0 01.75.75v7.065a1.5 1.5 0 01-1.036 1.285l-5.384 3.07a1.5 1.5 0 01-1.66 0z",
        title: "Guided Concept Framework",
        description:
          "Not a blank canvas. A structured flow from problem to packaged offer.",
      },
      {
        icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
        title: "Pricing & Packaging",
        description:
          "Build tiers based on value metrics, not feature checklists.",
      },
      {
        icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        title: "User Journey Mapping",
        description:
          "Five-stage journey from stranger to advocate with drop-off analysis.",
      },
      {
        icon: "M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122",
        title: "Solution Brief Export",
        description:
          "A shareable one-pager with positioning, pricing, and proof points.",
      },
      {
        icon: "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
        title: "AI Build Prompt Generator",
        description:
          "Structured prompts optimised for Cursor, Bolt, Lovable, Replit, and Claude Code. Plus visual and video asset prompts for Midjourney, DALL-E, and Sora.",
      },
    ],
    featuredScreen: "SolutionBuilder",
    screenNames: [
      "SolutionBuilder",
      "SolutionBriefExport",
      "PricingPackaging",
      "UserJourneyMap",
      "FeaturePrioritizer",
      "AIAssistant",
      "ExportCenter",
    ],
    callouts: [
      {
        number: 1,
        label: "Offer Definition",
        description:
          "Name, one-line promise, and format. The foundation of your solution concept.",
        x: "18%",
        y: "14%",
      },
      {
        number: 2,
        label: "Core Features",
        description:
          "Numbered feature list with prioritisation. What you actually build first.",
        x: "18%",
        y: "48%",
      },
      {
        number: 3,
        label: "Buyer Outcomes",
        description:
          "Quantified results your buyer gets. The language that closes deals.",
        x: "55%",
        y: "14%",
      },
      {
        number: 4,
        label: "Pricing Tiers",
        description:
          "Suggested pricing based on value metrics, not feature checklists.",
        x: "55%",
        y: "48%",
      },
      {
        number: 5,
        label: "Solution Readiness",
        description:
          "Completeness score showing what's done and what's needed before launch.",
        x: "55%",
        y: "70%",
      },
      {
        number: 6,
        label: "Export & Share",
        description:
          "Generate a shareable solution brief for stakeholders, co-founders, or early testers.",
        x: "82%",
        y: "4%",
      },
    ],
  },
  {
    slug: "positioning-engine",
    tag: "Positioning",
    name: "Positioning Studio",
    headline: "Define how your solution wins, then prove it",
    description:
      "The Positioning Studio gives you a complete messaging toolkit: ICP definition, positioning canvas, messaging matrix, objection handling, and competitive comparison pages. Every word grounded in your actual market context.",
    iconPath:
      "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5",
    capabilities: [
      {
        icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z",
        title: "Positioning Canvas",
        description:
          "ICP, pains, promise, differentiation, and 'why now' on one visual canvas.",
      },
      {
        icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
        title: "Messaging Matrix",
        description:
          "Three audiences, three angles, each with headline, hook, and proof.",
      },
      {
        icon: "M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z",
        title: "Objection Handler",
        description:
          "Pre-written responses for buyer pushback, scored by confidence.",
      },
      {
        icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
        title: "Competitive Comparison",
        description:
          "Build SEO-optimised 'vs' pages with feature tables and meta tags.",
      },
    ],
    featuredScreen: "PositioningCanvas",
    screenNames: [
      "PositioningCanvas",
      "MessagingMatrix",
      "BuyerPersonaEditor",
      "ObjectionHandler",
      "ValuePropWorkshop",
      "ComparisonPageBuilder",
      "ICPDefinition",
    ],
    callouts: [
      {
        number: 1,
        label: "Ideal Customer Profile",
        description:
          "Define exactly who you're building for: role, company size, and buying triggers.",
        x: "18%",
        y: "14%",
      },
      {
        number: 2,
        label: "Core Pains",
        description:
          "The specific problems your ICP faces, in their own words. Drives all messaging.",
        x: "42%",
        y: "14%",
      },
      {
        number: 3,
        label: "Promise",
        description:
          "Your one-sentence transformation statement. The outcome buyers pay for.",
        x: "68%",
        y: "14%",
      },
      {
        number: 4,
        label: "Differentiation",
        description:
          "What makes you different from alternatives. Not features, positioning angles.",
        x: "18%",
        y: "52%",
      },
      {
        number: 5,
        label: "Why Now",
        description:
          "The timing signal that creates urgency. Market shifts, regulatory changes, or emerging trends.",
        x: "42%",
        y: "52%",
      },
      {
        number: 6,
        label: "Competitive Landscape",
        description:
          "Named competitors with their specific gaps. Your entry points.",
        x: "68%",
        y: "52%",
      },
    ],
  },
  {
    slug: "go-to-market",
    tag: "GTM",
    name: "Go-To-Market Planner",
    headline: "From strategy to execution in 30 days",
    description:
      "The Go-To-Market Planner generates a complete launch plan: ideal customer profile, channel strategy, content calendar, and revenue projections. Not theory. Executable steps with clear timelines.",
    iconPath:
      "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    capabilities: [
      {
        icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        title: "ICP Definition",
        description:
          "Firmographics, technographics, intent signals, and disqualifiers.",
      },
      {
        icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
        title: "Launch Planning",
        description:
          "Week-by-week execution timeline with channels and experiments.",
      },
      {
        icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.625a2.25 2.25 0 01-2.25-2.25V8.625c0-.621.504-1.125 1.125-1.125H6.75",
        title: "Content Launch Kit",
        description:
          "7-day content calendar with templates and distribution plan.",
      },
      {
        icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
        title: "Revenue Projections",
        description:
          "6-month MRR forecast with conservative, base, and optimistic scenarios.",
      },
    ],
    featuredScreen: "GoToMarketPlan",
    screenNames: [
      "HomeOverview",
      "GoToMarketPlan",
      "ContentLaunchKit",
      "ICPDefinition",
      "RevenueProjection",
      "OutreachStudio",
      "LandingPageBuilder",
    ],
    callouts: [
      {
        number: 1,
        label: "Week 1: Foundation",
        description:
          "Start with positioning content, landing page, and your first lead magnet.",
        x: "22%",
        y: "12%",
      },
      {
        number: 2,
        label: "Week 2: Outreach",
        description:
          "Direct outreach to 50 target buyers plus content publishing for inbound.",
        x: "40%",
        y: "12%",
      },
      {
        number: 3,
        label: "Week 3: Content Push",
        description:
          "Webinars, polls, and follow-ups to build momentum from initial conversations.",
        x: "58%",
        y: "12%",
      },
      {
        number: 4,
        label: "Week 4: Conversion",
        description:
          "Convert leads to demos, publish comparison content, and run a traction review.",
        x: "76%",
        y: "12%",
      },
      {
        number: 5,
        label: "Task Status Tracking",
        description:
          "Every task has a status (done, in progress, or planned) so nothing falls through.",
        x: "22%",
        y: "50%",
      },
      {
        number: 6,
        label: "Resources & Budget",
        description:
          "Realistic estimates: time commitment, budget, and tools needed to execute.",
        x: "22%",
        y: "80%",
      },
    ],
  },
  {
    slug: "distribution",
    tag: "Distribution",
    name: "Distribution Toolkit",
    headline: "Reach buyers where they actually look",
    description:
      "The Distribution Toolkit handles the hardest part of launching: getting your solution in front of the right people. Channel scoring, outreach sequences, landing pages, lead magnets, and SEO, all from one workspace.",
    iconPath:
      "M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z",
    capabilities: [
      {
        icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5",
        title: "Channel Fit Scoring",
        description:
          "Not all channels work for every solution. See which ones fit yours.",
      },
      {
        icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
        title: "Outreach Studio",
        description:
          "Email and LinkedIn templates with multi-touch follow-up sequences.",
      },
      {
        icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
        title: "Landing Page Builder",
        description:
          "Section outlines, preview cards, and CTA variants. Marketing-ready.",
      },
      {
        icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
        title: "SEO, Lead Magnets & Creative Assets",
        description:
          "Keyword research, content roadmaps, lead magnet concepts, and creative asset prompts for ad images (Midjourney, DALL-E), video content (Sora), and social media visuals.",
      },
    ],
    featuredScreen: "DistributionChannels",
    screenNames: [
      "DistributionChannels",
      "OutreachStudio",
      "ContentLaunchKit",
      "LandingPageBuilder",
      "LeadMagnetBuilder",
      "ReferralProgram",
      "SEOKeywordPlanner",
    ],
    callouts: [
      {
        number: 1,
        label: "Channel Fit Score",
        description:
          "Each channel scored 0–100 based on your ICP, content style, and competitive density.",
        x: "17%",
        y: "12%",
      },
      {
        number: 2,
        label: "Stage Prioritisation",
        description:
          "Start here, Next, or Later, so you focus on what works now, not everything at once.",
        x: "42%",
        y: "12%",
      },
      {
        number: 3,
        label: "Effort Estimate",
        description:
          "Low, Medium, or High. Realistic assessment of what each channel demands.",
        x: "85%",
        y: "12%",
      },
      {
        number: 4,
        label: "Channel Description",
        description:
          "Why this channel works (or doesn't) for your specific solution and market.",
        x: "38%",
        y: "30%",
      },
      {
        number: 5,
        label: "Recommended Sequence",
        description:
          "The suggested order to launch channels. Start narrow, then expand as you learn.",
        x: "17%",
        y: "82%",
      },
      {
        number: 6,
        label: "Content & Outreach Assets",
        description:
          "Pre-built templates for email sequences, landing pages, and lead magnets tied to each channel.",
        x: "55%",
        y: "85%",
      },
    ],
  },
  {
    slug: "growth-system",
    tag: "Growth",
    name: "Growth System",
    headline: "Build momentum that compounds over time",
    description:
      "The Growth System tracks what matters after launch: traction experiments, channel performance, referral loops, feedback patterns, and revenue projections. Designed to build compounding growth, not just awareness.",
    iconPath:
      "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
    capabilities: [
      {
        icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
        title: "Growth Dashboard",
        description:
          "Activation, retention proxies, traffic sources, and experiment results.",
      },
      {
        icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
        title: "Channel Experiments",
        description:
          "Structured hypothesis-metric-result cycles across every channel.",
      },
      {
        icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
        title: "Referral Program",
        description:
          "Two-sided incentives, sharing channels, and projected referral growth.",
      },
      {
        icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
        title: "Feedback & Iteration",
        description:
          "Collect user feedback, auto-tagged by theme, with suggested next actions.",
      },
    ],
    featuredScreen: "GrowthDashboard",
    screenNames: [
      "LeadMagnetBuilder",
      "ValidationTracker",
      "GrowthDashboard",
      "FeedbackInbox",
      "RoadmapIteration",
      "ChannelExperiments",
      "ReferralProgram",
      "SEOKeywordPlanner",
      "SocialProofCollector",
      "WinLossAnalysis",
      "RevenueProjection",
      "AIAssistant",
      "ExportCenter",
    ],
    callouts: [
      {
        number: 1,
        label: "Key Metrics",
        description:
          "Signups, activations, demo requests, and conversion rate. The numbers that matter at your stage.",
        x: "25%",
        y: "8%",
      },
      {
        number: 2,
        label: "Traffic Sources",
        description:
          "Which channels drive visitors and signups, with conversion rates per source.",
        x: "25%",
        y: "38%",
      },
      {
        number: 3,
        label: "Experiment Results",
        description:
          "Structured tests with clear outcomes. Winners get scaled, losers get cut.",
        x: "62%",
        y: "38%",
      },
      {
        number: 4,
        label: "Next Growth Moves",
        description:
          "AI-suggested next actions based on what's working in your data right now.",
        x: "25%",
        y: "78%",
      },
      {
        number: 5,
        label: "Referral Tracking",
        description:
          "Two-sided referral incentives with sharing channels and projected viral growth curves.",
        x: "62%",
        y: "65%",
      },
      {
        number: 6,
        label: "Revenue Projection",
        description:
          "6-month MRR forecast with conservative, base, and optimistic scenarios tied to experiment results.",
        x: "62%",
        y: "78%",
      },
    ],
  },
  {
    slug: "launch-builder",
    tag: "Build",
    name: "Launch Builder",
    headline: "Choose a task. Pick a path. Get prompts that build it.",
    description:
      "The Launch Builder turns your venture specs into structured, sequential prompts optimised for any leading AI tool. Choose a task, select a delivery approach, and the system generates copy-paste-ready prompts using the best available prompt model. Apps, landing pages, ad creatives, brand assets, automation scripts. You build with the tools you already use.",
    iconPath:
      "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
    capabilities: [
      {
        icon: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z",
        title: "Task Selection",
        description:
          "Choose what you need to build: a full-stack app, landing page, ad creative set, brand identity, automation script, or video content. The system pulls context from your venture data automatically.",
      },
      {
        icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
        title: "Delivery Path Suggestions",
        description:
          "For each task, the system offers 2 to 3 delivery approaches matched to your skill level and preferred tools. Build a SaaS dashboard in Cursor, prototype it in Bolt, or scaffold it in Lovable. You pick the path.",
      },
      {
        icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z",
        title: "Optimised Prompt Generation",
        description:
          "Sequential prompts generated using the current best prompt-creation model with framework controls that ensure consistent, high-quality outputs. Each prompt builds on the last. Copy, paste, get the result.",
      },
      {
        icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
        title: "Any Tool, Any Model",
        description:
          "Prompts optimised for Cursor, Bolt, Lovable, Replit, Claude Code, Midjourney, DALL-E, Sora, and more. As new tools and models emerge, the system adapts. Native in-app building comes later with Vibepreneur Builder.",
      },
      {
        icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
        title: "Venture-Aware Context",
        description:
          "Every prompt is pre-loaded with your positioning, buyer profile, offer structure, and brand direction. No starting from scratch. The system knows what you are building and for whom.",
      },
    ],
    featuredScreen: "ExportCenter",
    screenNames: [
      "ExportCenter",
      "SolutionBuilder",
      "LandingPageBuilder",
      "ContentLaunchKit",
      "AIAssistant",
    ],
    callouts: [
      {
        number: 1,
        label: "Export Format",
        description:
          "Choose your output format: structured prompts, project specs, or ready-to-use templates.",
        x: "18%",
        y: "14%",
      },
      {
        number: 2,
        label: "Target Tool",
        description:
          "Select the AI tool you want to build with. Prompts are optimised for each tool's strengths.",
        x: "55%",
        y: "14%",
      },
      {
        number: 3,
        label: "Venture Context",
        description:
          "Your positioning, buyer profile, and offer data are automatically included in every prompt.",
        x: "18%",
        y: "48%",
      },
      {
        number: 4,
        label: "Sequential Prompts",
        description:
          "Numbered prompt sequence. Run them in order. Each builds on the output of the last.",
        x: "55%",
        y: "48%",
      },
      {
        number: 5,
        label: "Copy & Execute",
        description:
          "One-click copy for each prompt. Paste into your tool, get the output, move to the next step.",
        x: "18%",
        y: "75%",
      },
      {
        number: 6,
        label: "Output Preview",
        description:
          "See what you will get before you start. Expected deliverables listed for each prompt sequence.",
        x: "55%",
        y: "75%",
      },
    ],
  },
];

export function getFeatureBySlug(slug: string): FeatureConfig | undefined {
  return features.find((f) => f.slug === slug);
}
