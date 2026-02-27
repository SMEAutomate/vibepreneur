export interface SolutionTemplate {
  problem: string;
  buyer: string;
  offer: string;
  pricingModel: string;
  distributionWedge: string;
  firstMoves: [string, string, string];
}

export interface RoleTemplates {
  label: string;
  solutions: [SolutionTemplate, SolutionTemplate, SolutionTemplate];
}

export const roleTemplates: Record<string, RoleTemplates> = {
  marketing: {
    label: "Marketing",
    solutions: [
      {
        problem:
          "Small businesses waste budget on campaigns without understanding which channels actually convert for their specific market.",
        buyer: "Marketing directors at B2B companies with $1M-$10M revenue",
        offer:
          "Channel-fit diagnostic that analyses past spend data, maps it to industry benchmarks, and produces a prioritised channel strategy with budget allocation.",
        pricingModel: "Monthly subscription with tiered capacity",
        distributionWedge:
          "Marketing communities and CMO peer groups on Slack and LinkedIn.",
        firstMoves: [
          "Publish a 'Channel-Fit Score' free assessment tool",
          "Guest post on 3 marketing ops blogs with real channel data",
          "Run targeted LinkedIn ads to B2B marketing directors",
        ],
      },
      {
        problem:
          "Content teams produce volume without strategy, resulting in blog posts nobody reads and social content that doesn't convert.",
        buyer: "Head of Content at companies with 10-100 employees",
        offer:
          "Content-revenue mapping system that connects content production to pipeline metrics and recommends what to create, update, or kill.",
        pricingModel: "Per-seat monthly subscription",
        distributionWedge:
          "Content marketing newsletters and SEO-focused communities.",
        firstMoves: [
          "Create a 'Content ROI Calculator' as a free lead magnet",
          "Partner with 5 content marketing newsletters for sponsored features",
          "Host a webinar: 'Kill 50% of your content and grow faster'",
        ],
      },
      {
        problem:
          "Marketing attribution is broken for most mid-market companies. They can't connect spend to revenue with confidence.",
        buyer: "VP of Marketing at B2B SaaS companies with $5M-$50M ARR",
        offer:
          "Lightweight attribution system that integrates with existing tools and provides clear spend-to-revenue visibility without enterprise complexity.",
        pricingModel: "Usage-based with monthly minimum",
        distributionWedge:
          "SaaS marketing leader communities and RevOps Slack groups.",
        firstMoves: [
          "Write 'The attribution stack that actually works for mid-market'",
          "Build a free attribution audit questionnaire",
          "Cold outreach to 200 VPs of Marketing at target companies",
        ],
      },
    ],
  },
  sales: {
    label: "Sales",
    solutions: [
      {
        problem:
          "Sales teams lose deals because follow-up timing and messaging is inconsistent. Reps guess instead of using signals.",
        buyer: "VP of Sales at B2B companies with 10-50 AEs",
        offer:
          "Signal-based follow-up system that triggers the right message at the right time based on buyer behaviour and engagement data.",
        pricingModel: "Per-seat monthly subscription",
        distributionWedge:
          "Sales leadership communities and revenue operations networks.",
        firstMoves: [
          "Publish 'The follow-up timing playbook' with real data",
          "Partner with sales training platforms for co-marketing",
          "Run a free pipeline audit for 20 early adopters",
        ],
      },
      {
        problem:
          "Sales enablement content sits unused in drives and wikis. Reps can't find the right asset for each deal stage.",
        buyer: "Sales Enablement Manager at mid-market companies",
        offer:
          "Context-aware content delivery that surfaces the right sales asset based on deal stage, buyer persona, and objection history.",
        pricingModel: "Monthly subscription with team tiers",
        distributionWedge: "Sales enablement communities and CRO podcasts.",
        firstMoves: [
          "Survey 100 sales reps on content usage and publish findings",
          "Create a free 'Sales content audit template'",
          "Guest on 3 sales-focused podcasts",
        ],
      },
      {
        problem:
          "Outbound prospecting produces diminishing returns because teams use the same templates and targeting everyone else does.",
        buyer: "SDR/BDR team leads at scaling startups",
        offer:
          "Differentiated outbound system that uses market signals and competitor gaps to craft unique angles and timing for outreach.",
        pricingModel: "Monthly subscription with usage tiers",
        distributionWedge:
          "SDR communities on LinkedIn and outbound-focused newsletters.",
        firstMoves: [
          "Publish 'Why your cold emails sound like everyone else's'",
          "Build a free 'Cold email differentiation scorer'",
          "Run a challenge: '5 days to a unique outbound playbook'",
        ],
      },
    ],
  },
  operations: {
    label: "Operations",
    solutions: [
      {
        problem:
          "Operational handoffs between teams create delays, errors, and finger-pointing. Nobody owns the gaps between departments.",
        buyer: "COO or Head of Operations at companies with 100-500 employees",
        offer:
          "Cross-functional handoff system that maps, monitors, and optimises the spaces between teams where work gets stuck.",
        pricingModel: "Monthly subscription by team count",
        distributionWedge:
          "Operations leadership communities and COO peer networks.",
        firstMoves: [
          "Publish 'The $2M problem hiding between your teams'",
          "Offer free handoff audit to 15 operations leaders",
          "Partner with ops-focused consultancies for referrals",
        ],
      },
      {
        problem:
          "Process documentation is always outdated. Teams document once and never maintain, so new hires learn wrong processes.",
        buyer: "Operations managers at fast-growing companies",
        offer:
          "Living process documentation that auto-detects when workflows change and prompts owners to update, with version history and adoption tracking.",
        pricingModel: "Per-workspace monthly subscription",
        distributionWedge:
          "Process improvement communities and Lean/Six Sigma networks.",
        firstMoves: [
          "Create a 'Process documentation maturity assessment'",
          "Write a case study: 'How outdated SOPs cost one company $500k'",
          "Target operations managers through LinkedIn content",
        ],
      },
      {
        problem:
          "Vendor management across multiple suppliers is chaotic. No single view of performance, contracts, or renewal dates.",
        buyer: "Procurement or Operations Director at mid-market companies",
        offer:
          "Vendor performance dashboard that consolidates contracts, tracks SLAs, and flags upcoming renewals with renegotiation recommendations.",
        pricingModel: "Monthly subscription by vendor count",
        distributionWedge:
          "Procurement communities and supply chain management forums.",
        firstMoves: [
          "Build a free 'Vendor spend analyser' tool",
          "Partner with procurement consultants for co-marketing",
          "Publish benchmarking data on vendor management practices",
        ],
      },
    ],
  },
  hr: {
    label: "Human Resources",
    solutions: [
      {
        problem:
          "New hires at mid-size companies take 3+ months to become productive. HR teams run the same manual onboarding processes across every department.",
        buyer: "VP of People Operations at companies with 200-2000 employees",
        offer:
          "Structured onboarding system that adapts to department, role, and seniority. Reduces time-to-productivity with automated check-ins and progress tracking.",
        pricingModel: "Per-employee monthly subscription",
        distributionWedge:
          "HR community newsletters and People Ops LinkedIn groups.",
        firstMoves: [
          "Publish '5 signs your onboarding is costing you $50k per hire'",
          "Partner with 3 HR-focused newsletters for featured placement",
          "Run a free onboarding audit offer targeting Series B-C companies",
        ],
      },
      {
        problem:
          "Exit interviews happen too late. By the time someone leaves, the damage is done and the real reasons are sanitised.",
        buyer: "Chief People Officer at companies with 500+ employees",
        offer:
          "Continuous retention signal system that detects flight risk early through engagement patterns, manager interactions, and workplace sentiment, before the resignation email.",
        pricingModel: "Per-employee monthly pricing with annual commitment",
        distributionWedge: "CHRO peer networks and HR technology conferences.",
        firstMoves: [
          "Publish 'The 7 signals someone will quit, 90 days before they do'",
          "Offer free retention risk assessment to 20 companies",
          "Speak at 2 HR technology events on predictive retention",
        ],
      },
      {
        problem:
          "Performance reviews are dreaded busywork that produce vague feedback nobody acts on.",
        buyer: "HR Director at companies with 100-1000 employees",
        offer:
          "Continuous feedback system that replaces annual reviews with structured, actionable check-ins tied to actual work output and growth goals.",
        pricingModel: "Per-seat monthly subscription",
        distributionWedge:
          "People management communities and HR tech newsletters.",
        firstMoves: [
          "Create 'The performance review replacement guide'",
          "Partner with management training platforms",
          "Run a pilot program with 10 companies and publish results",
        ],
      },
    ],
  },
  finance: {
    label: "Finance",
    solutions: [
      {
        problem:
          "Finance teams spend 15+ hours per month manually reconciling data from multiple systems for reports that arrive outdated.",
        buyer: "CFO or Finance Director at companies with $10M-$100M revenue",
        offer:
          "Automated reporting pipeline that reconciles from existing tools, delivers daily dashboards, and flags anomalies before they become problems.",
        pricingModel: "Monthly subscription by data source count",
        distributionWedge:
          "CFO peer networks and finance-specific Slack communities.",
        firstMoves: [
          "Create a 'Finance reporting maturity assessment' free tool",
          "Guest on 3 finance-focused podcasts discussing reporting bottlenecks",
          "Cold outreach to 100 Finance Directors with personalised audit offer",
        ],
      },
      {
        problem:
          "Expense management at growing companies is a mess of spreadsheets, late receipts, and policy violations nobody catches until audit time.",
        buyer: "Finance Manager at companies with 50-500 employees",
        offer:
          "Policy-aware expense system that catches violations in real-time, automates approvals, and provides instant visibility into spend patterns.",
        pricingModel: "Per-employee monthly pricing",
        distributionWedge:
          "Finance operations communities and accounting firm partnerships.",
        firstMoves: [
          "Publish 'The true cost of manual expense management'",
          "Offer free expense policy audit to 25 companies",
          "Partner with 5 accounting firms for referral program",
        ],
      },
      {
        problem:
          "Cash flow forecasting relies on gut feel and spreadsheets. Most companies can't predict cash position 90 days out with any confidence.",
        buyer: "CFO at companies with $5M-$50M revenue",
        offer:
          "Scenario-based cash flow forecasting that pulls live data, models multiple scenarios, and alerts on risks before they materialise.",
        pricingModel: "Monthly subscription with annual option",
        distributionWedge:
          "CFO forums, finance newsletters, and fractional CFO networks.",
        firstMoves: [
          "Build a free 'Cash flow health check' tool",
          "Write '3 cash flow blind spots that kill growing companies'",
          "Partner with fractional CFO firms for distribution",
        ],
      },
    ],
  },
  legal: {
    label: "Legal",
    solutions: [
      {
        problem:
          "Contract review is a bottleneck. Every agreement goes through legal, and the backlog grows while deals wait.",
        buyer: "General Counsel at companies with 200-2000 employees",
        offer:
          "Guided contract review system that pre-screens standard clauses, flags deviations from approved terms, and routes only exceptions to legal review.",
        pricingModel: "Monthly subscription by contract volume",
        distributionWedge:
          "Legal operations communities and in-house counsel networks.",
        firstMoves: [
          "Publish 'How to cut contract review time by 60%'",
          "Offer free contract workflow audit to 20 legal teams",
          "Partner with legal tech consultants for referrals",
        ],
      },
      {
        problem:
          "Compliance requirements change constantly and teams discover gaps during audits instead of proactively managing them.",
        buyer: "Chief Compliance Officer at regulated industries",
        offer:
          "Continuous compliance monitoring system that tracks regulatory changes, maps them to your obligations, and assigns remediation tasks automatically.",
        pricingModel: "Monthly subscription by regulation count",
        distributionWedge:
          "Compliance officer networks and regulatory industry events.",
        firstMoves: [
          "Create a 'Compliance gap assessment' tool",
          "Present at 2 regulatory compliance conferences",
          "Build partnerships with compliance consulting firms",
        ],
      },
      {
        problem:
          "Legal teams can't easily track what's been agreed across hundreds of active contracts. Key dates, obligations, and renewals get missed.",
        buyer: "Legal Operations Manager at mid-market companies",
        offer:
          "Contract intelligence dashboard that extracts key terms, tracks obligations, and sends proactive alerts for renewals, deadlines, and compliance requirements.",
        pricingModel: "Per-contract monthly pricing",
        distributionWedge:
          "Legal operations Slack communities and CLM industry analysts.",
        firstMoves: [
          "Build a free 'Contract risk score calculator'",
          "Write a benchmark report on contract management maturity",
          "Targeted outreach to legal ops managers at 500+ employee companies",
        ],
      },
    ],
  },
  product: {
    label: "Product Management",
    solutions: [
      {
        problem:
          "Product teams ship features based on loudest-customer feedback instead of systematic demand analysis. Roadmaps reflect politics, not market reality.",
        buyer: "VP of Product at B2B SaaS companies with $5M-$50M ARR",
        offer:
          "Demand-signal aggregator that combines support tickets, sales calls, churn reasons, and market data into prioritised opportunity scores for the roadmap.",
        pricingModel: "Monthly subscription by data source",
        distributionWedge: "Product management communities and PM newsletters.",
        firstMoves: [
          "Publish 'Why your roadmap is wrong (and how to fix it with data)'",
          "Create a free 'Feature prioritisation framework' template",
          "Host a product leadership roundtable with 20 VPs of Product",
        ],
      },
      {
        problem:
          "User feedback lives in 10 different tools and nobody synthesises it. PMs make decisions without the full picture.",
        buyer: "Product Manager at scaling startups",
        offer:
          "Unified feedback intelligence system that pulls from support, NPS, reviews, and sales calls into one view with theme detection and sentiment tracking.",
        pricingModel: "Per-product monthly subscription",
        distributionWedge:
          "Product management Slack groups and user research communities.",
        firstMoves: [
          "Build a free 'Feedback fragmentation audit' tool",
          "Write '10 decisions you're making without all the data'",
          "Partner with user research platforms for integration",
        ],
      },
      {
        problem:
          "Product launches are chaotic. Marketing, sales, and CS learn about new features on release day. No coordination system exists.",
        buyer: "Product Marketing Manager at B2B companies",
        offer:
          "Launch coordination system that syncs product, marketing, sales, and CS around every release with automated timelines, asset creation, and enablement checklists.",
        pricingModel: "Monthly subscription by team size",
        distributionWedge:
          "Product marketing communities and PMM-specific newsletters.",
        firstMoves: [
          "Publish 'The launch that failed because nobody told sales'",
          "Create a free 'Launch readiness checklist' template",
          "Run a challenge: 'Plan your next launch in 5 days'",
        ],
      },
    ],
  },
  "customer-support": {
    label: "Customer Support",
    solutions: [
      {
        problem:
          "Support teams answer the same questions hundreds of times. Knowledge isn't captured in ways that prevent repeat tickets.",
        buyer: "Head of Support at SaaS companies with 1000+ customers",
        offer:
          "Self-service knowledge system that learns from resolved tickets, generates help content, and deflects repeat issues before they become tickets.",
        pricingModel: "Monthly subscription by ticket volume",
        distributionWedge: "Customer support communities and CX newsletters.",
        firstMoves: [
          "Publish 'The 80/20 rule of support tickets (and how to eliminate the 80)'",
          "Create a free 'Ticket deflection calculator'",
          "Partner with helpdesk platforms for co-marketing",
        ],
      },
      {
        problem:
          "Escalation management is inconsistent. Some issues get fast resolution while others bounce between teams for weeks.",
        buyer: "Support Operations Manager at mid-market companies",
        offer:
          "Escalation intelligence system that classifies urgency, routes to the right team, sets SLA expectations, and tracks resolution patterns.",
        pricingModel: "Per-agent monthly subscription",
        distributionWedge:
          "Support ops communities and customer experience conferences.",
        firstMoves: [
          "Write 'The hidden cost of bad escalation management'",
          "Offer free escalation workflow audit to 15 support teams",
          "Partner with support training companies",
        ],
      },
      {
        problem:
          "Support teams have no visibility into which customers are at risk of churning based on support interaction patterns.",
        buyer: "VP of Customer Success at B2B SaaS companies",
        offer:
          "Customer health scoring system that uses support interaction patterns, sentiment, and resolution times to predict churn risk and trigger proactive outreach.",
        pricingModel: "Per-customer monthly pricing",
        distributionWedge:
          "Customer success communities and CS platform partner programs.",
        firstMoves: [
          "Publish 'The support signals that predict churn 60 days out'",
          "Build a free 'Customer health assessment'",
          "Target CS leaders through LinkedIn thought leadership",
        ],
      },
    ],
  },
  "project-management": {
    label: "Project Management",
    solutions: [
      {
        problem:
          "Project status reporting is manual theatre. PMs spend hours creating updates that don't reflect reality and nobody reads carefully.",
        buyer: "PMO Director at companies with 50+ concurrent projects",
        offer:
          "Automated project intelligence that pulls real progress from tools teams already use and generates honest status reports with risk flags.",
        pricingModel: "Monthly subscription by project count",
        distributionWedge:
          "PMO communities and project management newsletters.",
        firstMoves: [
          "Publish 'The status report nobody believes (and how to fix it)'",
          "Create a free 'Project health diagnostic' tool",
          "Partner with PM tool vendors for integration announcements",
        ],
      },
      {
        problem:
          "Resource allocation across projects is guesswork. Teams are over- or under-staffed, and nobody knows until deadlines slip.",
        buyer: "Resource Manager or PMO lead at professional services firms",
        offer:
          "Capacity intelligence system that visualises real availability, predicts conflicts, and recommends allocation changes before projects fall behind.",
        pricingModel: "Per-resource monthly subscription",
        distributionWedge:
          "Professional services communities and resource management forums.",
        firstMoves: [
          "Build a free 'Resource utilisation calculator'",
          "Write 'Why your team is simultaneously overworked and underutilised'",
          "Partner with professional services consultancies",
        ],
      },
      {
        problem:
          "Lessons learned from completed projects never transfer. Every new project repeats the same mistakes because knowledge stays in people's heads.",
        buyer: "VP of Delivery at consulting and services firms",
        offer:
          "Project knowledge capture system that extracts lessons during project execution (not just at the end) and surfaces relevant insights for new projects.",
        pricingModel: "Monthly subscription by team size",
        distributionWedge:
          "Knowledge management communities and PM methodology forums.",
        firstMoves: [
          "Publish 'The most expensive sentence in project management: we tried that before'",
          "Offer free project retrospective facilitation for 10 teams",
          "Present at PMI chapter events",
        ],
      },
    ],
  },
  admin: {
    label: "Administration",
    solutions: [
      {
        problem:
          "Office and administrative operations are invisible work. Nobody measures the impact until something breaks.",
        buyer:
          "Head of Operations or Office Manager at companies with 100-500 employees",
        offer:
          "Administrative operations dashboard that quantifies the work, identifies bottlenecks, and justifies headcount with data instead of anecdotes.",
        pricingModel: "Monthly subscription by location",
        distributionWedge:
          "Office management communities and admin professional networks.",
        firstMoves: [
          "Publish 'The $200k problem nobody on the exec team sees'",
          "Create a free 'Admin workload calculator'",
          "Partner with office management training providers",
        ],
      },
      {
        problem:
          "Scheduling across departments, rooms, and resources is a coordination nightmare managed through emails and calendar tricks.",
        buyer: "Administrative Director at multi-location companies",
        offer:
          "Unified scheduling system that coordinates rooms, resources, catering, and equipment across locations with conflict detection and automated allocation.",
        pricingModel: "Monthly subscription by location and resource count",
        distributionWedge:
          "Facilities management communities and administrative assistant networks.",
        firstMoves: [
          "Build a free 'Meeting room utilisation calculator'",
          "Write 'How much does poor scheduling cost your company?'",
          "Target admin leaders through LinkedIn and professional groups",
        ],
      },
      {
        problem:
          "Document management and filing systems are inconsistent across departments. Finding the right document takes longer than the task itself.",
        buyer:
          "Operations Manager at companies transitioning from paper to digital",
        offer:
          "Document organisation system that creates consistent filing structures, automates classification, and makes any document findable in seconds.",
        pricingModel: "Per-user monthly subscription",
        distributionWedge:
          "Digital transformation communities and admin professional forums.",
        firstMoves: [
          "Publish 'The true cost of spending 20 minutes finding a file'",
          "Offer free document management audit to 15 companies",
          "Partner with digital transformation consultants",
        ],
      },
    ],
  },
  engineering: {
    label: "Engineering",
    solutions: [
      {
        problem:
          "Engineering teams don't know the business impact of their work. They ship features but can't connect code to revenue.",
        buyer: "VP of Engineering at B2B SaaS companies",
        offer:
          "Engineering impact dashboard that maps releases to business metrics: feature adoption, revenue impact, and customer satisfaction changes.",
        pricingModel: "Monthly subscription by team size",
        distributionWedge:
          "Engineering leadership communities and CTO newsletters.",
        firstMoves: [
          "Publish 'What your CEO wishes engineering could show them'",
          "Build a free 'Engineering impact scorecard' template",
          "Host a CTO roundtable on engineering-business alignment",
        ],
      },
      {
        problem:
          "Technical debt compounds silently until velocity drops. Nobody has a systematic way to measure, prioritise, or justify paying it down.",
        buyer: "Engineering Manager at scaling startups",
        offer:
          "Technical debt tracking system that quantifies impact on velocity, assigns severity scores, and generates business cases for remediation sprints.",
        pricingModel: "Per-repository monthly subscription",
        distributionWedge:
          "Developer communities, engineering blogs, and tech podcasts.",
        firstMoves: [
          "Create a free 'Tech debt impact calculator'",
          "Write 'How to convince your CEO to invest in tech debt'",
          "Partner with developer tooling companies",
        ],
      },
      {
        problem:
          "Developer onboarding takes weeks. New engineers can't contribute meaningfully because codebases are undocumented and tribal knowledge rules.",
        buyer:
          "Engineering Director at companies hiring 10+ engineers per year",
        offer:
          "Developer onboarding system that auto-generates codebase guides, creates learning paths, and tracks new hire progress to first meaningful contribution.",
        pricingModel: "Per-developer monthly subscription",
        distributionWedge:
          "Engineering management communities and developer experience forums.",
        firstMoves: [
          "Publish 'The first 30 days: why your engineering onboarding is broken'",
          "Offer free onboarding assessment to 20 engineering teams",
          "Partner with developer education platforms",
        ],
      },
    ],
  },
  design: {
    label: "Design",
    solutions: [
      {
        problem:
          "Design systems exist in Figma but not in production. Components drift, and developers rebuild instead of reusing.",
        buyer: "Head of Design at product companies with 5+ designers",
        offer:
          "Design-development sync system that keeps Figma components and code components aligned, flags drift, and generates change reports.",
        pricingModel: "Monthly subscription by component count",
        distributionWedge:
          "Design systems communities and front-end developer networks.",
        firstMoves: [
          "Publish 'The design system gap: why Figma and code don't match'",
          "Build a free 'Design system drift detector' tool",
          "Partner with Figma plugin developers for distribution",
        ],
      },
      {
        problem:
          "Design feedback loops are slow and unstructured. Stakeholders give contradictory input, and revision cycles balloon.",
        buyer: "Design Manager at agencies and product teams",
        offer:
          "Structured design review system that captures feedback in context, resolves conflicts before they reach the designer, and tracks approval status.",
        pricingModel: "Per-seat monthly subscription",
        distributionWedge:
          "UX design communities and design leadership newsletters.",
        firstMoves: [
          "Write 'How to halve your design revision cycles'",
          "Create a free 'Design review process template'",
          "Run a workshop on structured feedback for design teams",
        ],
      },
      {
        problem:
          "User research insights get lost after the presentation. Teams reference old research that may no longer be valid.",
        buyer: "UX Research Lead at companies with dedicated research teams",
        offer:
          "Research repository that captures insights with shelf-life dates, makes findings searchable, and proactively surfaces relevant past research for new projects.",
        pricingModel: "Per-researcher monthly subscription",
        distributionWedge:
          "UX research communities and research operations networks.",
        firstMoves: [
          "Publish 'The research you already did but can't find'",
          "Offer free research repository audit to 15 teams",
          "Partner with research tool vendors for co-marketing",
        ],
      },
    ],
  },
  consulting: {
    label: "Consulting",
    solutions: [
      {
        problem:
          "Consultants trade time for money. Their expertise doesn't scale beyond billable hours.",
        buyer: "Independent consultants and small consulting firms",
        offer:
          "Expertise productization system that packages consulting methodologies into scalable digital products: assessments, frameworks, and guided implementations.",
        pricingModel: "Revenue share or monthly subscription",
        distributionWedge:
          "Consulting communities and freelance professional networks.",
        firstMoves: [
          "Publish 'Stop selling hours: 5 ways to productize your consulting'",
          "Create a free 'Productization readiness assessment'",
          "Partner with consulting communities for distribution",
        ],
      },
      {
        problem:
          "Proposal creation is manual and inconsistent. Every proposal starts from scratch, and win rates are hard to improve without data.",
        buyer: "Managing Director at mid-size consulting firms",
        offer:
          "Proposal intelligence system that standardises creation, tracks win/loss patterns, and recommends improvements based on what's actually winning business.",
        pricingModel: "Monthly subscription by user count",
        distributionWedge:
          "Consulting firm networks and business development communities.",
        firstMoves: [
          "Build a free 'Proposal win rate calculator'",
          "Write 'What your won and lost proposals are trying to tell you'",
          "Target consulting firm partners through LinkedIn",
        ],
      },
      {
        problem:
          "Knowledge transfer from senior consultants to juniors is informal. When senior people leave, client relationships and methodologies go with them.",
        buyer: "HR Director at consulting firms with 50+ consultants",
        offer:
          "Knowledge capture system that documents methodologies, client relationship context, and decision frameworks from senior consultants in a structured, searchable format.",
        pricingModel: "Per-consultant monthly subscription",
        distributionWedge:
          "Consulting firm HR networks and knowledge management communities.",
        firstMoves: [
          "Publish 'The $1M risk walking out your door every Friday'",
          "Offer free knowledge audit to 10 consulting firms",
          "Partner with consulting industry associations",
        ],
      },
    ],
  },
};

export const industryModifiers: Record<
  string,
  { label: string; contextPrefix: string; buyerSuffix: string }
> = {
  healthcare: {
    label: "Healthcare",
    contextPrefix:
      "In healthcare, where compliance and patient outcomes drive every decision,",
    buyerSuffix: "in healthcare organisations",
  },
  retail: {
    label: "Retail",
    contextPrefix:
      "In retail, where margins are thin and customer experience is everything,",
    buyerSuffix: "in retail and e-commerce",
  },
  construction: {
    label: "Construction",
    contextPrefix:
      "In construction, where project coordination and safety compliance are critical,",
    buyerSuffix: "in construction and building",
  },
  finance: {
    label: "Finance & Banking",
    contextPrefix:
      "In financial services, where regulatory compliance and risk management are non-negotiable,",
    buyerSuffix: "in financial services",
  },
  education: {
    label: "Education",
    contextPrefix:
      "In education, where budget constraints and outcome measurement shape every decision,",
    buyerSuffix: "in educational institutions",
  },
  saas: {
    label: "SaaS & Technology",
    contextPrefix: "In SaaS, where speed to market and retention drive growth,",
    buyerSuffix: "at SaaS and technology companies",
  },
  logistics: {
    label: "Logistics & Supply Chain",
    contextPrefix:
      "In logistics, where timing, tracking, and cost optimisation are everything,",
    buyerSuffix: "in logistics and supply chain",
  },
  "professional-services": {
    label: "Professional Services",
    contextPrefix:
      "In professional services, where expertise is the product and utilisation drives revenue,",
    buyerSuffix: "at professional services firms",
  },
  "real-estate": {
    label: "Real Estate",
    contextPrefix:
      "In real estate, where deal flow and relationship management drive success,",
    buyerSuffix: "in real estate",
  },
  manufacturing: {
    label: "Manufacturing",
    contextPrefix:
      "In manufacturing, where efficiency and quality control directly impact margins,",
    buyerSuffix: "in manufacturing",
  },
  media: {
    label: "Media & Entertainment",
    contextPrefix:
      "In media, where content velocity and audience engagement define success,",
    buyerSuffix: "in media and entertainment",
  },
};
