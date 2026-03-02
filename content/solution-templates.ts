export type SolutionType =
  | "automation"
  | "framework"
  | "training"
  | "assessment"
  | "community"
  | "internal-tool"
  | "marketplace"
  | "saas";

export const SOLUTION_TYPE_LABELS: Record<SolutionType, string> = {
  automation: "Process Automation",
  framework: "Framework",
  training: "Training Product",
  assessment: "Assessment Tool",
  community: "Community",
  "internal-tool": "Internal Tool",
  marketplace: "Marketplace",
  saas: "SaaS Product",
};

export interface SolutionTemplate {
  problem: string;
  buyer: string;
  offer: string;
  pricingModel: string;
  distributionChannel: string;
  firstMoves: [string, string, string];
  solutionType: SolutionType;
  valueProposition: string;
  vibepreneurHook: string;
  roleAffinity: string[];
}

export interface RoleTemplates {
  label: string;
  solutions: [SolutionTemplate, SolutionTemplate, SolutionTemplate];
}

export interface IndustrySolutionPool {
  label: string;
  sectorContext: string;
  solutions: SolutionTemplate[];
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
        distributionChannel:
          "Marketing communities and CMO peer groups on Slack and LinkedIn.",
        firstMoves: [
          "Publish a 'Channel-Fit Score' free assessment tool",
          "Guest post on 3 marketing ops blogs with real channel data",
          "Run targeted LinkedIn ads to B2B marketing directors",
        ],
        solutionType: "assessment",
        valueProposition:
          "Eliminates guesswork from channel allocation so every marketing dollar goes where it actually converts.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you package this diagnostic with clear buyer messaging and competitive differentiation.",
        roleAffinity: ["marketing", "consulting", "operations"],
      },
      {
        problem:
          "Content teams produce volume without strategy, resulting in blog posts nobody reads and social content that doesn't convert.",
        buyer: "Head of Content at companies with 10-100 employees",
        offer:
          "Content-revenue mapping system that connects content production to pipeline metrics and recommends what to create, update, or kill.",
        pricingModel: "Per-seat monthly subscription",
        distributionChannel:
          "Content marketing newsletters and SEO-focused communities.",
        firstMoves: [
          "Create a 'Content ROI Calculator' as a free lead magnet",
          "Partner with 5 content marketing newsletters for sponsored features",
          "Host a webinar: 'Kill 50% of your content and grow faster'",
        ],
        solutionType: "saas",
        valueProposition:
          "Gives content leaders a defensible business case for every piece they publish or retire.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps your launch sequence from free tool to paid subscriptions.",
        roleAffinity: ["marketing", "product", "consulting"],
      },
      {
        problem:
          "Marketing attribution is broken for most mid-market companies. They can't connect spend to revenue with confidence.",
        buyer: "VP of Marketing at B2B SaaS companies with $5M-$50M ARR",
        offer:
          "Lightweight attribution system that integrates with existing tools and provides clear spend-to-revenue visibility without enterprise complexity.",
        pricingModel: "Usage-based with monthly minimum",
        distributionChannel:
          "SaaS marketing leader communities and RevOps Slack groups.",
        firstMoves: [
          "Write 'The attribution stack that actually works for mid-market'",
          "Build a free attribution audit questionnaire",
          "Cold outreach to 200 VPs of Marketing at target companies",
        ],
        solutionType: "internal-tool",
        valueProposition:
          "Mid-market teams finally see which spend drives revenue without paying for enterprise attribution platforms.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you validate demand and iterate pricing before full build.",
        roleAffinity: ["marketing", "engineering", "finance"],
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
        distributionChannel:
          "Sales leadership communities and revenue operations networks.",
        firstMoves: [
          "Publish 'The follow-up timing playbook' with real data",
          "Partner with sales training platforms for co-marketing",
          "Run a free pipeline audit for 20 early adopters",
        ],
        solutionType: "automation",
        valueProposition:
          "Reps close more deals by acting on real buyer signals instead of guessing when and how to follow up.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you articulate the ROI story that gets VPs of Sales to buy in.",
        roleAffinity: ["sales", "operations", "engineering"],
      },
      {
        problem:
          "Sales enablement content sits unused in drives and wikis. Reps can't find the right asset for each deal stage.",
        buyer: "Sales Enablement Manager at mid-market companies",
        offer:
          "Context-aware content delivery that surfaces the right sales asset based on deal stage, buyer persona, and objection history.",
        pricingModel: "Monthly subscription with team tiers",
        distributionChannel: "Sales enablement communities and CRO podcasts.",
        firstMoves: [
          "Survey 100 sales reps on content usage and publish findings",
          "Create a free 'Sales content audit template'",
          "Guest on 3 sales-focused podcasts",
        ],
        solutionType: "internal-tool",
        valueProposition:
          "Sales teams finally use the content you already created, increasing asset ROI and deal velocity.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps your path from free template to paid platform with clear conversion milestones.",
        roleAffinity: ["sales", "marketing", "product"],
      },
      {
        problem:
          "Outbound prospecting produces diminishing returns because teams use the same templates and targeting everyone else does.",
        buyer: "SDR/BDR team leads at scaling startups",
        offer:
          "Differentiated outbound system that uses market signals and competitor gaps to craft unique angles and timing for outreach.",
        pricingModel: "Monthly subscription with usage tiers",
        distributionChannel:
          "SDR communities on LinkedIn and outbound-focused newsletters.",
        firstMoves: [
          "Publish 'Why your cold emails sound like everyone else's'",
          "Build a free 'Cold email differentiation scorer'",
          "Run a challenge: '5 days to a unique outbound playbook'",
        ],
        solutionType: "framework",
        valueProposition:
          "SDR teams stand out in crowded inboxes by using signals competitors ignore.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework validates which outbound angles resonate before you scale.",
        roleAffinity: ["sales", "marketing", "consulting"],
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
        distributionChannel:
          "Operations leadership communities and COO peer networks.",
        firstMoves: [
          "Publish 'The $2M problem hiding between your teams'",
          "Offer free handoff audit to 15 operations leaders",
          "Partner with ops-focused consultancies for referrals",
        ],
        solutionType: "automation",
        valueProposition:
          "Cross-team handoff failures cost mid-size companies millions annually. This system makes the invisible gaps visible and fixable.",
        vibepreneurHook:
          "Vibepreneur's positioning engine clarifies who pays for this and why, turning an internal pain into a sellable product.",
        roleAffinity: ["operations", "project-management", "consulting"],
      },
      {
        problem:
          "Process documentation is always outdated. Teams document once and never maintain, so new hires learn wrong processes.",
        buyer: "Operations managers at fast-growing companies",
        offer:
          "Living process documentation that auto-detects when workflows change and prompts owners to update, with version history and adoption tracking.",
        pricingModel: "Per-workspace monthly subscription",
        distributionChannel:
          "Process improvement communities and Lean/Six Sigma networks.",
        firstMoves: [
          "Create a 'Process documentation maturity assessment'",
          "Write a case study: 'How outdated SOPs cost one company $500k'",
          "Target operations managers through LinkedIn content",
        ],
        solutionType: "saas",
        valueProposition:
          "Eliminates the most common ops bottleneck: new hires following outdated processes while the real process lives in someone's head.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps your path from assessment lead magnet to recurring SaaS revenue.",
        roleAffinity: ["operations", "hr", "admin"],
      },
      {
        problem:
          "Vendor management across multiple suppliers is chaotic. No single view of performance, contracts, or renewal dates.",
        buyer: "Procurement or Operations Director at mid-market companies",
        offer:
          "Vendor performance dashboard that consolidates contracts, tracks SLAs, and flags upcoming renewals with renegotiation recommendations.",
        pricingModel: "Monthly subscription by vendor count",
        distributionChannel:
          "Procurement communities and supply chain management forums.",
        firstMoves: [
          "Build a free 'Vendor spend analyser' tool",
          "Partner with procurement consultants for co-marketing",
          "Publish benchmarking data on vendor management practices",
        ],
        solutionType: "internal-tool",
        valueProposition:
          "Operations leaders get a single view of all vendor relationships, saving renegotiation leverage and preventing missed renewals.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you validate willingness to pay before building the full dashboard.",
        roleAffinity: ["operations", "finance", "legal"],
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
        distributionChannel:
          "HR community newsletters and People Ops LinkedIn groups.",
        firstMoves: [
          "Publish '5 signs your onboarding is costing you $50k per hire'",
          "Partner with 3 HR-focused newsletters for featured placement",
          "Run a free onboarding audit offer targeting Series B-C companies",
        ],
        solutionType: "automation",
        valueProposition:
          "Cuts new hire ramp time in half, saving tens of thousands per employee in lost productivity.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you articulate the cost-of-delay story that gets People VPs to buy.",
        roleAffinity: ["hr", "operations", "admin"],
      },
      {
        problem:
          "Exit interviews happen too late. By the time someone leaves, the damage is done and the real reasons are sanitised.",
        buyer: "Chief People Officer at companies with 500+ employees",
        offer:
          "Continuous retention signal system that detects flight risk early through engagement patterns, manager interactions, and workplace sentiment, before the resignation email.",
        pricingModel: "Per-employee monthly pricing with annual commitment",
        distributionChannel:
          "CHRO peer networks and HR technology conferences.",
        firstMoves: [
          "Publish 'The 7 signals someone will quit, 90 days before they do'",
          "Offer free retention risk assessment to 20 companies",
          "Speak at 2 HR technology events on predictive retention",
        ],
        solutionType: "assessment",
        valueProposition:
          "HR leaders catch flight risk 90 days earlier, saving replacement costs averaging 1.5x annual salary per departure.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you pilot the assessment with target companies and prove ROI before scaling.",
        roleAffinity: ["hr", "operations", "consulting"],
      },
      {
        problem:
          "Performance reviews are dreaded busywork that produce vague feedback nobody acts on.",
        buyer: "HR Director at companies with 100-1000 employees",
        offer:
          "Continuous feedback system that replaces annual reviews with structured, actionable check-ins tied to actual work output and growth goals.",
        pricingModel: "Per-seat monthly subscription",
        distributionChannel:
          "People management communities and HR tech newsletters.",
        firstMoves: [
          "Create 'The performance review replacement guide'",
          "Partner with management training platforms",
          "Run a pilot program with 10 companies and publish results",
        ],
        solutionType: "framework",
        valueProposition:
          "Managers get a repeatable feedback structure that employees actually value, replacing annual review dread with continuous growth.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps the transition from free guide to paid platform with clear upgrade triggers.",
        roleAffinity: ["hr", "project-management", "consulting"],
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
        distributionChannel:
          "CFO peer networks and finance-specific Slack communities.",
        firstMoves: [
          "Create a 'Finance reporting maturity assessment' free tool",
          "Guest on 3 finance-focused podcasts discussing reporting bottlenecks",
          "Cold outreach to 100 Finance Directors with personalised audit offer",
        ],
        solutionType: "automation",
        valueProposition:
          "Finance teams reclaim 15+ hours monthly and catch anomalies in real time instead of discovering them during close.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you craft the ROI narrative CFOs need to approve new tooling.",
        roleAffinity: ["finance", "operations", "engineering"],
      },
      {
        problem:
          "Expense management at growing companies is a mess of spreadsheets, late receipts, and policy violations nobody catches until audit time.",
        buyer: "Finance Manager at companies with 50-500 employees",
        offer:
          "Policy-aware expense system that catches violations in real-time, automates approvals, and provides instant visibility into spend patterns.",
        pricingModel: "Per-employee monthly pricing",
        distributionChannel:
          "Finance operations communities and accounting firm partnerships.",
        firstMoves: [
          "Publish 'The true cost of manual expense management'",
          "Offer free expense policy audit to 25 companies",
          "Partner with 5 accounting firms for referral program",
        ],
        solutionType: "saas",
        valueProposition:
          "Growing companies stop policy violations before audit time, saving both money and compliance headaches.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps the accounting firm partnership channel that drives trusted referrals.",
        roleAffinity: ["finance", "operations", "admin"],
      },
      {
        problem:
          "Cash flow forecasting relies on gut feel and spreadsheets. Most companies can't predict cash position 90 days out with any confidence.",
        buyer: "CFO at companies with $5M-$50M revenue",
        offer:
          "Scenario-based cash flow forecasting that pulls live data, models multiple scenarios, and alerts on risks before they materialise.",
        pricingModel: "Monthly subscription with annual option",
        distributionChannel:
          "CFO forums, finance newsletters, and fractional CFO networks.",
        firstMoves: [
          "Build a free 'Cash flow health check' tool",
          "Write '3 cash flow blind spots that kill growing companies'",
          "Partner with fractional CFO firms for distribution",
        ],
        solutionType: "internal-tool",
        valueProposition:
          "CFOs predict cash position 90 days out with confidence, preventing the surprises that sink growing companies.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you validate willingness to pay with fractional CFOs before full development.",
        roleAffinity: ["finance", "consulting", "operations"],
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
        distributionChannel:
          "Legal operations communities and in-house counsel networks.",
        firstMoves: [
          "Publish 'How to cut contract review time by 60%'",
          "Offer free contract workflow audit to 20 legal teams",
          "Partner with legal tech consultants for referrals",
        ],
        solutionType: "automation",
        valueProposition:
          "Legal teams clear contract backlogs 60% faster by routing only true exceptions to human review.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you differentiate from existing CLM tools and target the underserved mid-market.",
        roleAffinity: ["legal", "operations", "consulting"],
      },
      {
        problem:
          "Compliance requirements change constantly and teams discover gaps during audits instead of proactively managing them.",
        buyer: "Chief Compliance Officer at regulated industries",
        offer:
          "Continuous compliance monitoring system that tracks regulatory changes, maps them to your obligations, and assigns remediation tasks automatically.",
        pricingModel: "Monthly subscription by regulation count",
        distributionChannel:
          "Compliance officer networks and regulatory industry events.",
        firstMoves: [
          "Create a 'Compliance gap assessment' tool",
          "Present at 2 regulatory compliance conferences",
          "Build partnerships with compliance consulting firms",
        ],
        solutionType: "saas",
        valueProposition:
          "Compliance teams stay ahead of regulatory changes instead of discovering gaps during costly audits.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps the conference-to-pilot pipeline that works in regulated industries.",
        roleAffinity: ["legal", "finance", "operations"],
      },
      {
        problem:
          "Legal teams can't easily track what's been agreed across hundreds of active contracts. Key dates, obligations, and renewals get missed.",
        buyer: "Legal Operations Manager at mid-market companies",
        offer:
          "Contract intelligence dashboard that extracts key terms, tracks obligations, and sends proactive alerts for renewals, deadlines, and compliance requirements.",
        pricingModel: "Per-contract monthly pricing",
        distributionChannel:
          "Legal operations Slack communities and CLM industry analysts.",
        firstMoves: [
          "Build a free 'Contract risk score calculator'",
          "Write a benchmark report on contract management maturity",
          "Targeted outreach to legal ops managers at 500+ employee companies",
        ],
        solutionType: "internal-tool",
        valueProposition:
          "Legal ops teams prevent missed renewals and obligations across hundreds of active contracts with proactive alerts.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you test demand with a free risk calculator before building the full dashboard.",
        roleAffinity: ["legal", "operations", "finance"],
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
        distributionChannel:
          "Product management communities and PM newsletters.",
        firstMoves: [
          "Publish 'Why your roadmap is wrong (and how to fix it with data)'",
          "Create a free 'Feature prioritisation framework' template",
          "Host a product leadership roundtable with 20 VPs of Product",
        ],
        solutionType: "saas",
        valueProposition:
          "Product leaders make roadmap decisions backed by real demand signals instead of whoever argues loudest.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you articulate why this beats spreadsheet-based prioritisation frameworks.",
        roleAffinity: ["product", "engineering", "marketing"],
      },
      {
        problem:
          "User feedback lives in 10 different tools and nobody synthesises it. PMs make decisions without the full picture.",
        buyer: "Product Manager at scaling startups",
        offer:
          "Unified feedback intelligence system that pulls from support, NPS, reviews, and sales calls into one view with theme detection and sentiment tracking.",
        pricingModel: "Per-product monthly subscription",
        distributionChannel:
          "Product management Slack groups and user research communities.",
        firstMoves: [
          "Build a free 'Feedback fragmentation audit' tool",
          "Write '10 decisions you're making without all the data'",
          "Partner with user research platforms for integration",
        ],
        solutionType: "internal-tool",
        valueProposition:
          "PMs finally see the complete feedback picture across all channels, eliminating blind spots in product decisions.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you validate which feedback sources buyers value most before scaling.",
        roleAffinity: ["product", "customer-support", "design"],
      },
      {
        problem:
          "Product launches are chaotic. Marketing, sales, and CS learn about new features on release day. No coordination system exists.",
        buyer: "Product Marketing Manager at B2B companies",
        offer:
          "Launch coordination system that syncs product, marketing, sales, and CS around every release with automated timelines, asset creation, and enablement checklists.",
        pricingModel: "Monthly subscription by team size",
        distributionChannel:
          "Product marketing communities and PMM-specific newsletters.",
        firstMoves: [
          "Publish 'The launch that failed because nobody told sales'",
          "Create a free 'Launch readiness checklist' template",
          "Run a challenge: 'Plan your next launch in 5 days'",
        ],
        solutionType: "framework",
        valueProposition:
          "Cross-functional teams ship coordinated launches instead of chaotic releases where sales learns about features from customers.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook turns your launch checklist into a paid product with a clear path from template to platform.",
        roleAffinity: ["product", "marketing", "project-management"],
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
        distributionChannel: "Customer support communities and CX newsletters.",
        firstMoves: [
          "Publish 'The 80/20 rule of support tickets (and how to eliminate the 80)'",
          "Create a free 'Ticket deflection calculator'",
          "Partner with helpdesk platforms for co-marketing",
        ],
        solutionType: "automation",
        valueProposition:
          "Support teams deflect 80% of repeat tickets, freeing agents to handle the complex issues that actually need humans.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you differentiate from generic knowledge bases with a clear deflection ROI story.",
        roleAffinity: ["customer-support", "product", "engineering"],
      },
      {
        problem:
          "Escalation management is inconsistent. Some issues get fast resolution while others bounce between teams for weeks.",
        buyer: "Support Operations Manager at mid-market companies",
        offer:
          "Escalation intelligence system that classifies urgency, routes to the right team, sets SLA expectations, and tracks resolution patterns.",
        pricingModel: "Per-agent monthly subscription",
        distributionChannel:
          "Support ops communities and customer experience conferences.",
        firstMoves: [
          "Write 'The hidden cost of bad escalation management'",
          "Offer free escalation workflow audit to 15 support teams",
          "Partner with support training companies",
        ],
        solutionType: "internal-tool",
        valueProposition:
          "Support ops teams stop the bounce between departments, cutting escalation resolution time by half or more.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps the path from free audit to paid system using the conference circuit for distribution.",
        roleAffinity: ["customer-support", "operations", "project-management"],
      },
      {
        problem:
          "Support teams have no visibility into which customers are at risk of churning based on support interaction patterns.",
        buyer: "VP of Customer Success at B2B SaaS companies",
        offer:
          "Customer health scoring system that uses support interaction patterns, sentiment, and resolution times to predict churn risk and trigger proactive outreach.",
        pricingModel: "Per-customer monthly pricing",
        distributionChannel:
          "Customer success communities and CS platform partner programs.",
        firstMoves: [
          "Publish 'The support signals that predict churn 60 days out'",
          "Build a free 'Customer health assessment'",
          "Target CS leaders through LinkedIn thought leadership",
        ],
        solutionType: "assessment",
        valueProposition:
          "CS leaders spot churn risk 60 days out from support patterns, turning reactive saves into proactive retention.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you validate the scoring model with early adopters before scaling.",
        roleAffinity: ["customer-support", "sales", "product"],
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
        distributionChannel:
          "PMO communities and project management newsletters.",
        firstMoves: [
          "Publish 'The status report nobody believes (and how to fix it)'",
          "Create a free 'Project health diagnostic' tool",
          "Partner with PM tool vendors for integration announcements",
        ],
        solutionType: "automation",
        valueProposition:
          "PMO leaders get honest project status from real data instead of hours of manual reporting theatre.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you articulate the time-savings story that resonates with PMO buyers.",
        roleAffinity: ["project-management", "operations", "engineering"],
      },
      {
        problem:
          "Resource allocation across projects is guesswork. Teams are over- or under-staffed, and nobody knows until deadlines slip.",
        buyer: "Resource Manager or PMO lead at professional services firms",
        offer:
          "Capacity intelligence system that visualises real availability, predicts conflicts, and recommends allocation changes before projects fall behind.",
        pricingModel: "Per-resource monthly subscription",
        distributionChannel:
          "Professional services communities and resource management forums.",
        firstMoves: [
          "Build a free 'Resource utilisation calculator'",
          "Write 'Why your team is simultaneously overworked and underutilised'",
          "Partner with professional services consultancies",
        ],
        solutionType: "internal-tool",
        valueProposition:
          "Resource managers predict staffing conflicts before deadlines slip, ending the cycle of over/under allocation.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you pilot with professional services firms and prove utilisation gains.",
        roleAffinity: ["project-management", "operations", "hr"],
      },
      {
        problem:
          "Lessons learned from completed projects never transfer. Every new project repeats the same mistakes because knowledge stays in people's heads.",
        buyer: "VP of Delivery at consulting and services firms",
        offer:
          "Project knowledge capture system that extracts lessons during project execution (not just at the end) and surfaces relevant insights for new projects.",
        pricingModel: "Monthly subscription by team size",
        distributionChannel:
          "Knowledge management communities and PM methodology forums.",
        firstMoves: [
          "Publish 'The most expensive sentence in project management: we tried that before'",
          "Offer free project retrospective facilitation for 10 teams",
          "Present at PMI chapter events",
        ],
        solutionType: "framework",
        valueProposition:
          "Delivery teams stop repeating the same mistakes by capturing and surfacing lessons during execution, not after.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps the PMI chapter events pipeline for reaching delivery leaders at scale.",
        roleAffinity: ["project-management", "consulting", "operations"],
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
        distributionChannel:
          "Office management communities and admin professional networks.",
        firstMoves: [
          "Publish 'The $200k problem nobody on the exec team sees'",
          "Create a free 'Admin workload calculator'",
          "Partner with office management training providers",
        ],
        solutionType: "assessment",
        valueProposition:
          "Admin leaders finally quantify their team's impact with data, turning invisible work into a defensible budget line.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you frame this as an executive visibility tool, not another admin app.",
        roleAffinity: ["admin", "operations", "hr"],
      },
      {
        problem:
          "Scheduling across departments, rooms, and resources is a coordination nightmare managed through emails and calendar tricks.",
        buyer: "Administrative Director at multi-location companies",
        offer:
          "Unified scheduling system that coordinates rooms, resources, catering, and equipment across locations with conflict detection and automated allocation.",
        pricingModel: "Monthly subscription by location and resource count",
        distributionChannel:
          "Facilities management communities and administrative assistant networks.",
        firstMoves: [
          "Build a free 'Meeting room utilisation calculator'",
          "Write 'How much does poor scheduling cost your company?'",
          "Target admin leaders through LinkedIn and professional groups",
        ],
        solutionType: "automation",
        valueProposition:
          "Multi-location companies eliminate scheduling conflicts and wasted resources with a single coordination system.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps the facilities management channel for reaching multi-location admin directors.",
        roleAffinity: ["admin", "operations", "project-management"],
      },
      {
        problem:
          "Document management and filing systems are inconsistent across departments. Finding the right document takes longer than the task itself.",
        buyer:
          "Operations Manager at companies transitioning from paper to digital",
        offer:
          "Document organisation system that creates consistent filing structures, automates classification, and makes any document findable in seconds.",
        pricingModel: "Per-user monthly subscription",
        distributionChannel:
          "Digital transformation communities and admin professional forums.",
        firstMoves: [
          "Publish 'The true cost of spending 20 minutes finding a file'",
          "Offer free document management audit to 15 companies",
          "Partner with digital transformation consultants",
        ],
        solutionType: "internal-tool",
        valueProposition:
          "Teams find any document in seconds instead of minutes, saving hours of cumulative search time per week.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you validate demand with companies mid-digital transformation.",
        roleAffinity: ["admin", "operations", "legal"],
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
        distributionChannel:
          "Engineering leadership communities and CTO newsletters.",
        firstMoves: [
          "Publish 'What your CEO wishes engineering could show them'",
          "Build a free 'Engineering impact scorecard' template",
          "Host a CTO roundtable on engineering-business alignment",
        ],
        solutionType: "internal-tool",
        valueProposition:
          "Engineering leaders connect code to revenue, making the business case for technical investments with real data.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you frame this for VP/CTO buyers who need to justify engineering spend.",
        roleAffinity: ["engineering", "product", "finance"],
      },
      {
        problem:
          "Technical debt compounds silently until velocity drops. Nobody has a systematic way to measure, prioritise, or justify paying it down.",
        buyer: "Engineering Manager at scaling startups",
        offer:
          "Technical debt tracking system that quantifies impact on velocity, assigns severity scores, and generates business cases for remediation sprints.",
        pricingModel: "Per-repository monthly subscription",
        distributionChannel:
          "Developer communities, engineering blogs, and tech podcasts.",
        firstMoves: [
          "Create a free 'Tech debt impact calculator'",
          "Write 'How to convince your CEO to invest in tech debt'",
          "Partner with developer tooling companies",
        ],
        solutionType: "assessment",
        valueProposition:
          "Engineering managers quantify tech debt impact on velocity, turning gut-feel arguments into funded remediation sprints.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you validate the scoring model with early engineering teams.",
        roleAffinity: ["engineering", "product", "consulting"],
      },
      {
        problem:
          "Developer onboarding takes weeks. New engineers can't contribute meaningfully because codebases are undocumented and tribal knowledge rules.",
        buyer:
          "Engineering Director at companies hiring 10+ engineers per year",
        offer:
          "Developer onboarding system that auto-generates codebase guides, creates learning paths, and tracks new hire progress to first meaningful contribution.",
        pricingModel: "Per-developer monthly subscription",
        distributionChannel:
          "Engineering management communities and developer experience forums.",
        firstMoves: [
          "Publish 'The first 30 days: why your engineering onboarding is broken'",
          "Offer free onboarding assessment to 20 engineering teams",
          "Partner with developer education platforms",
        ],
        solutionType: "training",
        valueProposition:
          "New engineers contribute meaningfully in days instead of weeks, cutting the hidden cost of slow ramp-up.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps the engineering community distribution channel for reaching hiring-heavy teams.",
        roleAffinity: ["engineering", "hr", "operations"],
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
        distributionChannel:
          "Design systems communities and front-end developer networks.",
        firstMoves: [
          "Publish 'The design system gap: why Figma and code don't match'",
          "Build a free 'Design system drift detector' tool",
          "Partner with Figma plugin developers for distribution",
        ],
        solutionType: "saas",
        valueProposition:
          "Design teams stop the Figma-to-code drift that causes developers to rebuild components instead of reusing them.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you carve out the design-systems niche from broader design tool positioning.",
        roleAffinity: ["design", "engineering", "product"],
      },
      {
        problem:
          "Design feedback loops are slow and unstructured. Stakeholders give contradictory input, and revision cycles balloon.",
        buyer: "Design Manager at agencies and product teams",
        offer:
          "Structured design review system that captures feedback in context, resolves conflicts before they reach the designer, and tracks approval status.",
        pricingModel: "Per-seat monthly subscription",
        distributionChannel:
          "UX design communities and design leadership newsletters.",
        firstMoves: [
          "Write 'How to halve your design revision cycles'",
          "Create a free 'Design review process template'",
          "Run a workshop on structured feedback for design teams",
        ],
        solutionType: "framework",
        valueProposition:
          "Design managers cut revision cycles in half by resolving contradictory stakeholder feedback before it reaches designers.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps the workshop-to-platform path for converting free attendees into paying users.",
        roleAffinity: ["design", "product", "project-management"],
      },
      {
        problem:
          "User research insights get lost after the presentation. Teams reference old research that may no longer be valid.",
        buyer: "UX Research Lead at companies with dedicated research teams",
        offer:
          "Research repository that captures insights with shelf-life dates, makes findings searchable, and proactively surfaces relevant past research for new projects.",
        pricingModel: "Per-researcher monthly subscription",
        distributionChannel:
          "UX research communities and research operations networks.",
        firstMoves: [
          "Publish 'The research you already did but can't find'",
          "Offer free research repository audit to 15 teams",
          "Partner with research tool vendors for co-marketing",
        ],
        solutionType: "internal-tool",
        valueProposition:
          "Research teams stop redoing studies by making past insights searchable with freshness dates that flag stale findings.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you validate demand with ResearchOps communities before building.",
        roleAffinity: ["design", "product", "marketing"],
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
        distributionChannel:
          "Consulting communities and freelance professional networks.",
        firstMoves: [
          "Publish 'Stop selling hours: 5 ways to productize your consulting'",
          "Create a free 'Productization readiness assessment'",
          "Partner with consulting communities for distribution",
        ],
        solutionType: "framework",
        valueProposition:
          "Consultants break free from the billable hours ceiling by packaging their methodology into products that sell while they sleep.",
        vibepreneurHook:
          "Vibepreneur's positioning engine helps you identify which piece of your methodology is most productizable and how to position it.",
        roleAffinity: ["consulting", "marketing", "sales"],
      },
      {
        problem:
          "Proposal creation is manual and inconsistent. Every proposal starts from scratch, and win rates are hard to improve without data.",
        buyer: "Managing Director at mid-size consulting firms",
        offer:
          "Proposal intelligence system that standardises creation, tracks win/loss patterns, and recommends improvements based on what's actually winning business.",
        pricingModel: "Monthly subscription by user count",
        distributionChannel:
          "Consulting firm networks and business development communities.",
        firstMoves: [
          "Build a free 'Proposal win rate calculator'",
          "Write 'What your won and lost proposals are trying to tell you'",
          "Target consulting firm partners through LinkedIn",
        ],
        solutionType: "saas",
        valueProposition:
          "Consulting firms improve win rates by learning from their own proposal data instead of starting every pitch from scratch.",
        vibepreneurHook:
          "Vibepreneur's GTM playbook maps the consulting partner network for reaching managing directors who control tooling budgets.",
        roleAffinity: ["consulting", "sales", "project-management"],
      },
      {
        problem:
          "Knowledge transfer from senior consultants to juniors is informal. When senior people leave, client relationships and methodologies go with them.",
        buyer: "HR Director at consulting firms with 50+ consultants",
        offer:
          "Knowledge capture system that documents methodologies, client relationship context, and decision frameworks from senior consultants in a structured, searchable format.",
        pricingModel: "Per-consultant monthly subscription",
        distributionChannel:
          "Consulting firm HR networks and knowledge management communities.",
        firstMoves: [
          "Publish 'The $1M risk walking out your door every Friday'",
          "Offer free knowledge audit to 10 consulting firms",
          "Partner with consulting industry associations",
        ],
        solutionType: "training",
        valueProposition:
          "Consulting firms retain methodology and client context when senior people leave, protecting millions in institutional knowledge.",
        vibepreneurHook:
          "Vibepreneur's growth experiments framework helps you pilot the capture system with firms and prove retention value.",
        roleAffinity: ["consulting", "hr", "operations"],
      },
    ],
  },
};
