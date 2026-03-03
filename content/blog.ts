export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
}

export const defaultAuthor: BlogAuthor = {
  name: "The Vibepreneur Team",
  role: "Vibepreneur",
  bio: "Practical frameworks for professionals turning expertise into scalable solutions.",
};

export interface BlogPost {
  slug: string;
  title: string;
  category: "Career Pivot" | "Building" | "Mindset";
  date: string;
  updatedDate?: string;
  excerpt: string;
  readTime: string;
  body: string[];
  pullquote: string;
  author?: BlogAuthor;
  steps?: { label: string; text: string }[];
  comparison?: {
    left: string;
    right: string;
    items: { left: string; right: string }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "first-7-days-after-ai-replaces-role",
    title: "What to Do in the First 7 Days After AI Replaces Your Role",
    category: "Career Pivot",
    date: "2026-01-02",
    excerpt:
      "The first week after losing your role to AI is critical. Not for panicking, not for upskilling. For making three specific moves that set up everything that follows.",
    readTime: "6 min read",
    body: [
      "You just got the news. Your role is being automated, restructured, or eliminated. The AI tools your company piloted last quarter worked well enough. Now you have a severance timeline and a login to an outplacement portal that feels like an insult.",
      "The first instinct is to update your CV and start applying. The second instinct is to enrol in an AI course. Both feel productive. Neither addresses the actual problem: the job market you're re-entering has fundamentally changed since you last looked.",
      "Here is what to do instead in the first seven days.",
      "Day one and two: grieve, then audit. Let the emotional hit land. Then sit down with a blank page and write out every problem you have solved professionally in the last five years. Not your job titles. Not your responsibilities. The actual problems. 'Reduced onboarding time from 90 days to 30 days' is useful. 'Managed HR operations' is not.",
      "Day three and four: research demand. Take your list of problems and search LinkedIn, Reddit, and industry forums for people complaining about those same problems. If other companies struggle with what you already solved, you have a potential market. Screenshot everything.",
      "Day five: identify three opportunities. From your research, pick three problems where demand is visible, the existing solutions are weak, and your experience gives you an unfair advantage. You do not need to build anything yet. You need to validate that people will pay to solve these problems.",
      "Day six: talk to five people. Reach out to former colleagues, industry contacts, or LinkedIn connections who fit the buyer profile for your top opportunity. Ask one question: 'How are you currently handling [problem]?' Listen for frustration, workarounds, and budget.",
      "Day seven: make a decision. Based on what you heard, pick one opportunity to explore further. Not to commit to forever. To spend the next three weeks validating with real conversations and lightweight tests.",
      "The goal of week one is not to have a business. The goal is to stop thinking like a job seeker and start thinking like someone who solves problems for a market. That shift changes everything that follows.",
      "Most displaced professionals spend their first week refreshing job boards. The ones who recover fastest spend it identifying what the market actually needs from someone with their specific experience.",
    ],
    pullquote:
      "The goal of week one is not to have a business. The goal is to stop thinking like a job seeker and start thinking like someone who solves problems for a market.",
    steps: [
      {
        label: "Day 1-2",
        text: "Grieve, then audit every problem you have solved professionally",
      },
      {
        label: "Day 3-4",
        text: "Research demand for those problems across industries",
      },
      {
        label: "Day 5",
        text: "Identify three opportunities with visible demand",
      },
      { label: "Day 6", text: "Talk to five people who fit the buyer profile" },
      {
        label: "Day 7",
        text: "Pick one opportunity to validate over the next three weeks",
      },
    ],
  },
  {
    slug: "30-day-plan-replace-salary",
    title:
      "The 30-Day Plan to Replace Your Salary With a Small Internet Business",
    category: "Building",
    date: "2026-01-02",
    excerpt:
      "You do not need a year-long runway or a venture-backed idea. You need 30 focused days and a structured plan to get your first paying customer.",
    readTime: "8 min read",
    body: [
      "Replacing a salary sounds impossible until you break it down. A senior professional earning $120k per year needs $10k per month. Ten clients paying $1,000 per month. Or 100 clients paying $100 per month. Or one high-value consulting engagement at $10k. The maths is simpler than the emotions.",
      "This 30-day plan is not about building a startup. It is about creating a small, focused internet business that generates revenue from your existing expertise. No fundraising. No app development. No audience building.",
      "Week one: validate the problem. Pick one problem from your professional experience where you have seen companies waste money, time, or talent. Talk to ten potential buyers. Your only question: 'What is this problem costing you right now?' If you cannot find ten people to talk to, the problem is not specific enough.",
      "Week two: package the solution. Create a simple offer document. One page. It should answer: what is the problem, who has it, what does your solution deliver, and what does it cost. Do not build a product. Build a clear description of what you will deliver and the outcome the buyer gets.",
      "Week three: sell before you build. Reach out to the ten people you spoke with in week one. Share your offer document. Ask for a paid pilot at a reduced rate. You need one yes. One person willing to pay you to solve their problem, even at a discount, proves the business is real.",
      "Week four: deliver and systematise. Deliver on your first engagement. Document every step. What did you do? What tools did you use? What was the client outcome? This documentation becomes the foundation of a repeatable service or product.",
      "The biggest risk in this plan is not failure. It is spending too long on preparation. Every day you spend researching tools, designing logos, or writing business plans is a day you are not talking to buyers. The market validates ideas faster than any research ever will.",
      "By day 30, you should have one paying client, a documented process, and a clear understanding of whether this business can scale. That is more progress than most people make in six months of job searching.",
      "This plan works because it leverages what you already have: professional knowledge, an industry network, and the ability to solve complex problems. You are not starting from zero. You are redirecting skills that someone already paid you to develop.",
    ],
    pullquote: "Replacing a salary sounds impossible until you break it down.",
    steps: [
      {
        label: "Week 1",
        text: "Validate the problem with ten potential buyers",
      },
      {
        label: "Week 2",
        text: "Package the solution in a one-page offer document",
      },
      { label: "Week 3", text: "Sell before you build. Get one paid pilot." },
      {
        label: "Week 4",
        text: "Deliver, document every step, and systematise",
      },
    ],
  },
  {
    slug: "learning-tools-vs-building-assets",
    title:
      "The Biggest Mistake Displaced Professionals Make: Learning Tools Instead of Building Assets",
    category: "Mindset",
    date: "2026-01-02",
    excerpt:
      "After getting displaced by AI, the reflex is to learn new tools. But tools change every six months. Assets compound forever. Here is how to focus on the right thing.",
    readTime: "5 min read",
    body: [
      "Within 48 hours of losing a role to AI, most professionals do the same thing: they sign up for a course. Prompt engineering. Python. Machine learning fundamentals. It feels like progress. It is not.",
      "Learning tools is the professional equivalent of rearranging deck chairs. The tools will change. They always do. The Python you learn today will be abstracted away by a better tool next year. The prompt engineering course will be irrelevant when the next model generation handles context automatically.",
      "Assets are different. An asset is something that generates value whether you are present or not. A documented process that companies pay to license. A productised service with clear inputs and outputs. A content library that attracts buyers while you sleep. An email list of people who trust your expertise.",
      "The distinction matters because tools make you employable and assets make you independent. Employable means someone else decides your value. Independent means the market decides your value, and you can influence the market.",
      "Here is a practical test. Before investing time in any activity, ask: 'Will this still generate revenue for me in 12 months if I stop doing it tomorrow?' If the answer is no, it is a tool activity. If the answer is yes, it is an asset activity.",
      "Writing a LinkedIn post about your industry expertise is an asset activity. The post continues attracting buyers after you write it. Taking a certification course is a tool activity. The certificate has a shelf life shorter than milk.",
      "This does not mean you should never learn new tools. It means you should learn them in service of building an asset. Learn Webflow because you are building a landing page for your service. Learn automation tools because you are productising your consulting. The tool serves the asset, not the other way around.",
      "The professionals who recover fastest from AI displacement are the ones who spend 80% of their time building assets and 20% learning just enough tooling to support those assets. The ones who struggle are still taking courses six months later, waiting to feel ready.",
    ],
    pullquote: "Tools make you employable. Assets make you independent.",
    comparison: {
      left: "Learning Tools",
      right: "Building Assets",
      items: [
        {
          left: "Skills with a shelf life",
          right: "Value that compounds over time",
        },
        {
          left: "Someone else decides your worth",
          right: "The market decides your worth",
        },
        {
          left: "Requires your presence to earn",
          right: "Generates revenue while you sleep",
        },
        {
          left: "Certification courses, tutorials",
          right: "Products, content libraries, email lists",
        },
      ],
    },
  },
  {
    slug: "not-technical-is-your-advantage",
    title:
      '"I\'m Not Technical" Is Your Advantage: How Domain Expertise Wins in 2026',
    category: "Mindset",
    date: "2026-01-02",
    excerpt:
      "The professionals most threatened by AI are generalists with shallow technical skills. The ones most positioned to win are domain experts who understand problems deeply.",
    readTime: "6 min read",
    body: [
      "For a decade, the career advice was clear: learn to code. Get technical. Understand the tools. The professionals who followed that advice built shallow technical skills on top of deep domain knowledge. Now AI handles the shallow technical work better than they ever could.",
      "Here is what AI cannot do: understand why a mid-market CFO rejects vendor proposals on Tuesdays. Know that the real reason onboarding fails is not the process but the relationship between HR and department heads. Recognise that the support ticket data everyone ignores contains the product roadmap the company needs.",
      "That kind of knowledge comes from years of working inside an industry, seeing patterns, building relationships, and understanding the unwritten rules. No model has been trained on your company's politics, your industry's blind spots, or your buyer's unstated preferences.",
      "In 2026, the competitive advantage is not knowing how to build. Building is increasingly automated. The advantage is knowing what to build, who to build it for, and why they will pay. That is domain expertise. That is what 'non-technical' professionals have in abundance.",
      "The most valuable businesses being built right now are not coming from developers. They are coming from HR leaders who productised their onboarding frameworks. Finance directors who automated their reporting processes. Operations managers who turned their workflow optimisations into SaaS tools.",
      "These people did not learn to code. They partnered with AI tools that handled the building, while they provided the context that made the product actually useful. The code was generic. The context was irreplaceable.",
      "If you have spent ten or fifteen years in a domain and you call yourself 'non-technical,' you are dramatically undervaluing your position. You are not missing a skill. You have the skill that matters most, and the technical gap that used to hold you back has been closed by the same technology that displaced you.",
      "The irony is real: AI eliminated your role and simultaneously made your domain expertise more valuable than ever. The question is whether you will use it.",
    ],
    pullquote:
      "AI eliminated your role and simultaneously made your domain expertise more valuable than ever.",
    comparison: {
      left: "Technical Skills",
      right: "Domain Expertise",
      items: [
        {
          left: "Increasingly automated by AI",
          right: "Cannot be replicated by any model",
        },
        {
          left: "Generic and transferable",
          right: "Built from years inside an industry",
        },
        {
          left: "Knowing how to build",
          right: "Knowing what to build and for whom",
        },
        {
          left: "Commoditised and competitive",
          right: "Irreplaceable context and insight",
        },
      ],
    },
  },
  {
    slug: "pick-business-idea-low-confidence",
    title: "How to Pick a Business Idea When Your Confidence Is Shot",
    category: "Mindset",
    date: "2026-01-02",
    excerpt:
      "Getting displaced does a number on your confidence. You cannot wait for confidence to return before making decisions. You need a framework that works without it.",
    readTime: "5 min read",
    body: [
      "Confidence is a lagging indicator. It follows action, not the other way around. Waiting to feel confident before picking a business idea is like waiting to feel fit before going to the gym. The order is wrong.",
      "After a job loss, especially one driven by technology, the internal narrative is brutal. 'If I was good enough, they would have kept me.' 'I do not know enough to run a business.' 'Who would pay me for advice when a chatbot can do what I do?' These thoughts feel true. They are not.",
      "Here is a framework that works without confidence. It replaces gut feeling with evidence.",
      "Step one: list ten problems you have solved for employers. Not aspirational skills. Actual problems where your work produced measurable results. Reduced costs. Saved time. Increased revenue. Improved retention. Specific, quantifiable outcomes.",
      "Step two: for each problem, search LinkedIn and industry forums for people currently complaining about that problem. Screenshot the posts. Save the comments. Count the engagement. You are looking for problems with visible demand from identifiable buyers.",
      "Step three: rank by three criteria. Demand (are people actively searching for solutions?), Competition (are existing solutions good or terrible?), and Fit (do you have genuine expertise here, not just familiarity?). Score each 1 to 5. Multiply the scores. Pick the top three.",
      "Step four: have five conversations about your top-ranked problem. Not sales calls. Research calls. 'I am exploring solutions for [problem]. How are you currently handling it?' The quality of these conversations will tell you more than any course or framework.",
      "Step five: pick the problem where conversations were easiest and buyers were most frustrated. Not the one that excites you most. Not the one with the biggest market. The one where real people told you real things about a real problem and you understood exactly what they meant.",
      "This framework works because it externalises the decision. You are not asking 'what am I confident enough to do?' You are asking 'where does the market need someone with my exact experience?' Confidence follows from seeing demand for what you already know.",
    ],
    pullquote:
      "Confidence is a lagging indicator. It follows action, not the other way around.",
    steps: [
      {
        label: "Step 1",
        text: "List ten problems you have solved for employers with measurable results",
      },
      {
        label: "Step 2",
        text: "Search for people currently complaining about those problems",
      },
      {
        label: "Step 3",
        text: "Rank by demand, competition, and fit. Score and multiply.",
      },
      {
        label: "Step 4",
        text: "Have five research conversations about your top-ranked problem",
      },
      {
        label: "Step 5",
        text: "Pick where conversations were easiest and buyers most frustrated",
      },
    ],
  },
  {
    slug: "employee-operator-owner",
    title: "The New Career Ladder: Employee to Operator to Owner",
    category: "Career Pivot",
    date: "2026-01-02",
    excerpt:
      "The traditional career ladder (junior, senior, director, VP) is collapsing. The new ladder has three rungs: employee, operator, owner. Here is how to climb it.",
    readTime: "7 min read",
    body: [
      "The corporate career ladder was designed for a world where companies grew slowly and people stayed for decades. That world is gone. Organisations are flattening. Middle management is being automated. The path from analyst to VP that took your manager twenty years may not exist for you at all.",
      "The new career ladder has three positions. Employee: you trade time for salary. Someone else owns the system and you operate within it. Operator: you run a system that generates revenue. You have leverage because the system works with or without any single employer. Owner: you own the system itself. The assets, the customer relationships, the intellectual property.",
      "Most professionals get stuck at employee because the jump to operator feels too large. It is not. An operator is someone who has a repeatable process for generating revenue from their expertise. A consultant with a defined methodology and a pipeline. A productised service with documented inputs and outputs. A small SaaS tool built from domain knowledge.",
      "The transition from employee to operator usually looks like this. You identify a problem you solve well. You document how you solve it. You find people outside your employer who have the same problem. You offer to solve it for them. You charge money. You have become an operator.",
      "The transition from operator to owner happens when you systematise. You turn your process into a product. You replace your time with automation, templates, or software. You build assets that generate revenue independently of your direct involvement. The documentation from your operator phase becomes the architecture of your owner phase.",
      "AI has accelerated this ladder. The employee rung is getting shorter as companies need fewer people to do the same work. But the operator and owner rungs are getting more accessible because the tools to build, automate, and distribute are cheaper and more powerful than ever.",
      "If you have just been displaced from the employee rung, do not try to climb back onto it at a different company. The rung is getting shorter everywhere. Instead, use your severance period to jump to operator. It is a harder transition but a more durable position.",
      "The most important thing to understand about this ladder is that each rung requires a different mindset. Employees optimise for performance within a system. Operators optimise for building a system. Owners optimise for building systems that build systems. The skills transfer, but the focus changes at each level.",
    ],
    pullquote:
      "The employee rung is getting shorter. The operator and owner rungs are getting more accessible.",
    steps: [
      {
        label: "Employee",
        text: "Trade time for salary. Someone else owns the system.",
      },
      {
        label: "Operator",
        text: "Run a system that generates revenue with leverage.",
      },
      {
        label: "Owner",
        text: "Own the assets, customer relationships, and IP.",
      },
    ],
  },
  {
    slug: "explain-your-pivot",
    title: "How to Explain Your Pivot to Friends, Family, and Recruiters",
    category: "Career Pivot",
    date: "2026-01-02",
    excerpt:
      "The hardest part of pivoting after AI displacement is not the business. It is the conversation at dinner when someone asks what you do now.",
    readTime: "5 min read",
    body: [
      "You have decided to build something instead of applying for jobs. You have a plan. Maybe even a first client. But then your parents call, or a friend asks at dinner, or a former colleague reaches out on LinkedIn. 'So, what are you doing now?'",
      "And suddenly the plan that felt solid in your head sounds flimsy out loud. 'I am, um, sort of starting a consulting thing. Or maybe a product. It is early.' Their face tells you everything.",
      "The problem is not your plan. The problem is that you are translating your new path into the old vocabulary. When people ask 'what do you do,' they expect a job title and a company name. 'Senior Operations Manager at Acme Corp.' That format does not accommodate what you are doing now.",
      "Here is the formula that works: 'I help [specific buyer] solve [specific problem]. I am doing this independently after seeing the market gap firsthand during my years in [industry].' That is it. No apology. No disclaimer about it being early stage. No mention of AI or layoffs unless they ask.",
      "For family who worry: 'I am using my [industry] experience to build a business that helps companies with [problem]. I have already talked to [number] potential clients and the demand is real. This is not a gamble. It is a calculated transition based on what I know the market needs.'",
      "For recruiters: 'I am currently building a consultancy focused on [problem] for [buyer]. I am open to conversations but I am also exploring the independent path seriously. What I am looking for is [specific thing], not just any role.'",
      "For LinkedIn: update your headline to '[Problem] Consultant | Helping [buyer] achieve [outcome].' Remove the 'Open to Work' banner unless you genuinely want a traditional role. Your profile should look like someone who chose this path, because you did.",
      "The confidence in your explanation will grow over time. But even at the start, using specific language about the problem you solve and the buyer you serve signals competence. People trust specificity. 'I help mid-market finance teams cut their monthly close from 15 days to 5' is a hundred times more powerful than 'I am exploring my options.'",
    ],
    pullquote: "People trust specificity.",
  },
  {
    slug: "cv-to-business-ideas",
    title: "How to Turn Your CV Into 10 Business Ideas (and Pick the Best One)",
    category: "Building",
    date: "2026-01-02",
    excerpt:
      "Your CV is not just a document for job applications. It is a catalogue of problems solved, processes improved, and markets understood. Here is how to mine it.",
    readTime: "7 min read",
    body: [
      "Open your CV. Not to send to recruiters. To read it differently. Every line on that document represents a problem that a company paid you to solve. Some of those problems exist at thousands of other companies. That is your starting inventory of business ideas.",
      "Here is the exercise. Go through each role and each bullet point. Rewrite every achievement as a problem-solution pair. 'Managed a team of 12' becomes 'Companies with 200+ employees struggle to coordinate across teams without losing information.' 'Reduced churn by 15%' becomes 'SaaS companies lose customers because they cannot identify dissatisfaction signals early enough.'",
      "Do this for every role you have held. You should end up with 15 to 30 problem statements. Now filter.",
      "Filter one: universality. Does this problem exist at more than 50 companies? If it is specific to your former employer's unique setup, it is not a business. If every company in your industry faces it, it might be.",
      "Filter two: pain intensity. How much does this problem cost companies in money, time, or reputation? The higher the cost, the more they will pay for a solution. A problem that costs $5,000 per year is a blog post. A problem that costs $500,000 per year is a business.",
      "Filter three: existing solutions. Search for tools, consultancies, and courses that already address this problem. If there are zero solutions, the market might not exist. If there are ten mediocre solutions, you have a massive opportunity to build something better with insider knowledge.",
      "Filter four: your edge. For each remaining problem, ask: 'What do I know about this problem that an outsider would take two years to learn?' If the answer is substantial, you have an unfair advantage. That advantage is your moat.",
      "After filtering, you should have five to ten viable ideas. Rank them by the combination of market size, pain intensity, and your personal edge. Your top three are worth validating with real buyer conversations.",
      "The CV exercise works because it grounds your thinking in evidence rather than aspiration. You are not inventing problems. You are recognising ones you have already solved. The market is already paying people to address these issues. The question is whether you can capture some of that spend independently.",
      "One final note: the best business idea from your CV is rarely the one that excites you most. It is the one where your expertise creates the widest gap between you and anyone else trying to solve the same problem. Excitement fades. Competitive advantage compounds.",
    ],
    pullquote:
      "The best business idea from your CV is rarely the one that excites you most.",
    steps: [
      {
        label: "Filter 1",
        text: "Universality: does this problem exist at 50+ companies?",
      },
      {
        label: "Filter 2",
        text: "Pain intensity: how much does it cost in money, time, or reputation?",
      },
      {
        label: "Filter 3",
        text: "Existing solutions: zero means no market, ten mediocre means opportunity",
      },
      {
        label: "Filter 4",
        text: "Your edge: what would take an outsider two years to learn?",
      },
    ],
  },
  {
    slug: "stop-applying-for-jobs",
    title: 'Why "Apply for More Jobs" Is the Wrong Default in 2026',
    category: "Career Pivot",
    date: "2026-01-02",
    excerpt:
      "The default response to job loss is to apply for more jobs. In 2026, this default is broken. Here is why, and what to do instead.",
    readTime: "6 min read",
    body: [
      "When you lose a job, every person in your life gives the same advice: apply for more jobs. Update your CV. Talk to recruiters. Cast a wide net. This advice made sense in 2015. In 2026, it is actively harmful for many professionals.",
      "Here is what has changed. Companies are hiring fewer people for the same output. AI tools have compressed teams. A department that needed twelve people in 2023 might need six in 2026. The roles that remain are either highly specialised (hard to apply broadly) or highly commoditised (race to the bottom on salary).",
      "The job application process itself has become adversarial. Companies receive hundreds of AI-generated applications for every posting. Hiring managers use AI screening tools that reject candidates for arbitrary keyword mismatches. You are an experienced professional competing with bots for the attention of a different bot.",
      "Meanwhile, the time you spend applying for jobs is time you are not spending on the one activity that consistently works in 2026: building direct relationships with people who have problems you can solve. Every hour spent customising a CV for an ATS system is an hour not spent talking to potential clients.",
      "The alternative is not 'start a business immediately.' The alternative is to add a second track alongside your job search. Spend 50% of your time on traditional applications if you want. But spend the other 50% validating whether your expertise has independent market value.",
      "That validation process is simple. Identify a problem you solve well. Find ten people who have that problem. Talk to them. If three or more would pay for a solution, you have something worth pursuing. If none would pay, you have saved yourself months of building the wrong thing.",
      "The professionals who recover fastest in 2026 are the ones running both tracks simultaneously. They apply for select roles that genuinely fit their expertise, while also exploring independent paths. They treat the job search as one option, not the only option.",
      "The worst outcome is not failing to start a business. The worst outcome is spending six months in the application cycle, burning through savings and confidence, only to accept a role that pays 30% less and gets automated two years later. The default path is not safe. It just feels familiar.",
    ],
    pullquote: "The default path is not safe. It just feels familiar.",
    comparison: {
      left: "Apply for Jobs",
      right: "Build Something",
      items: [
        {
          left: "Compete with AI-generated applications",
          right: "Build direct relationships with buyers",
        },
        {
          left: "Race to the bottom on salary",
          right: "Set your own value in the market",
        },
        {
          left: "One option, all-or-nothing",
          right: "Parallel track alongside selective applications",
        },
        {
          left: "Risk: accept 30% less, get automated again",
          right: "Risk: spend weeks validating, learn the market",
        },
      ],
    },
  },
  {
    slug: "weekly-operating-system-pivot",
    title: "The Calm Way to Rebuild: A Weekly Operating System for Your Pivot",
    category: "Building",
    date: "2026-01-02",
    excerpt:
      "Pivoting after displacement is stressful. Most of the stress comes from having no structure. Here is a weekly operating system that makes the pivot manageable.",
    readTime: "6 min read",
    body: [
      "The most exhausting part of a career pivot is not the work. It is the ambiguity. When you had a job, someone else provided structure: meetings, deadlines, quarterly goals. Now you wake up with an empty calendar and a thousand possible things to do. That freedom quickly becomes paralysis.",
      "You need an operating system. Not a productivity hack. Not a morning routine from a podcast. A simple weekly structure that ensures you make progress on the things that actually matter, even when motivation is low.",
      "Here is the system. It has five blocks, one for each weekday. Each block is two to four hours of focused work. The rest of the day is yours.",
      "Monday is research day. Spend the block reading industry forums, LinkedIn posts, and competitor sites related to your chosen opportunity. Take notes on problems people mention, language they use, and solutions they complain about. This keeps your market understanding current and feeds the rest of the week.",
      "Tuesday is outreach day. Send five messages to potential buyers, partners, or collaborators. Not sales pitches. Genuine conversations. 'I noticed you posted about [problem]. I have been working on something related. Would you be open to a quick chat?' Five messages per week is 20 per month. That is enough pipeline to validate any idea.",
      "Wednesday is build day. Work on your actual product, service, or content. Write the offer document. Design the landing page. Record the video. Create the template. Whatever your business needs built, Wednesday is when it gets built. Protect this time aggressively.",
      "Thursday is follow-up day. Reply to conversations from Tuesday. Send thank-you notes. Update your CRM (even if your CRM is a spreadsheet). Review what you learned from this week's conversations and adjust your approach. Most business is won in follow-ups, not first messages.",
      "Friday is reflection day. Spend 30 minutes reviewing the week. What worked? What did you avoid? What conversations surprised you? Write three goals for next week based on what you learned. Then stop working. Rest is not optional in a pivot. Burnout kills more businesses than bad ideas do.",
      "This system works because it is simple enough to follow when you are exhausted and structured enough to compound over time. Five outreach messages per week does not feel like much. But after four weeks, you have had 20 conversations. After eight weeks, 40. That is more market validation than most startups do in a year.",
      "The goal is not intensity. The goal is consistency. A calm, repeatable weekly rhythm that moves you forward without requiring motivation, confidence, or inspiration. Those things come later, as a byproduct of the progress you have already made.",
    ],
    pullquote: "The goal is not intensity. The goal is consistency.",
    steps: [
      {
        label: "Monday",
        text: "Research: read industry forums, LinkedIn, competitor sites",
      },
      {
        label: "Tuesday",
        text: "Outreach: send five genuine messages to potential buyers",
      },
      {
        label: "Wednesday",
        text: "Build: work on your product, service, or content",
      },
      {
        label: "Thursday",
        text: "Follow-up: reply, thank, adjust based on conversations",
      },
      {
        label: "Friday",
        text: "Reflect: review the week, write three goals for next week",
      },
    ],
  },
  {
    slug: "positioning-before-product",
    title: "Why Positioning Comes Before Product",
    category: "Building",
    date: "2025-12-28",
    excerpt:
      "Most people build first and figure out who it is for later. That sequence costs months. Positioning first means every build decision has a buyer in mind.",
    readTime: "5 min read",
    body: [
      "The instinct is understandable. You have an idea. You are excited. You want to start building. So you open your laptop and start creating the product, the course, the template, the service offering. Weeks later, you have something that exists but no clear story about who it is for or why they should care.",
      "This is the most common mistake professionals make when turning expertise into a business. They treat positioning as marketing fluff that happens after the real work. In reality, positioning is the foundation that makes everything else easier.",
      "Positioning answers four questions: Who is this for? What problem does it solve? Why is this approach better than the alternatives? Why should they trust you to deliver it? When you answer these before building, every subsequent decision becomes obvious. Feature scope, pricing, distribution channel, messaging, even the name.",
      "Without positioning, you build based on assumptions. You guess what features matter. You set prices based on what feels reasonable rather than what the market values. You write copy that describes what the product does instead of what the buyer gets. You launch to silence because you never figured out where your buyers pay attention.",
      "With positioning, you build based on evidence. You talk to 10 potential buyers before writing a line of code. You learn their language, their frustrations, their budget constraints. You discover that the feature you thought was core is actually irrelevant, and the throwaway idea you almost cut is the reason they would pay.",
      "The positioning process does not need to be complicated. Start with a one-page canvas: ideal customer profile, their top three pains, your promise, your differentiation, and why now. Fill it in based on conversations, not assumptions. Revise it after every buyer conversation. By the time you start building, you already know what to build, who to build it for, and how to talk about it.",
      "The professionals who skip this step end up rebuilding. They launch, get lukewarm reception, pivot the messaging, realise the audience was wrong, pivot again. Six months of iteration that could have been two weeks of conversations.",
      "Position first. Build second. Everything else follows.",
    ],
    pullquote: "Position first. Build second. Everything else follows.",
  },
  {
    slug: "first-ten-customers",
    title: "Your First 10 Customers Will Not Come from Marketing",
    category: "Building",
    date: "2025-12-21",
    excerpt:
      "Forget funnels, ads, and content calendars. Your first 10 customers come from direct conversations with people who already have the problem you solve.",
    readTime: "5 min read",
    body: [
      "New founders love to plan marketing campaigns. Social media strategies, content calendars, SEO keyword research, email funnels. All of that matters eventually. None of it matters for your first 10 customers.",
      "Your first 10 customers will come from direct, one-to-one conversations. DMs, emails, phone calls, coffee meetings. You reaching out to a specific person with a specific problem and offering a specific solution. No funnel required.",
      "This is uncomfortable because it feels like it does not scale. That is exactly the point. You are not trying to scale yet. You are trying to learn. Every conversation with a potential first customer teaches you something that no amount of market research can: whether real humans will actually pay for what you are building.",
      "Here is the process. Make a list of 50 people who have the problem you solve. Not a demographic profile. Actual names. Pull them from LinkedIn, your professional network, industry communities, and past colleagues. These are people whose specific situations you understand because you have worked alongside them.",
      "Send 10 messages per week. Not a sales pitch. A genuine, specific message: 'I noticed you are dealing with [specific problem]. I have been building something that addresses this. Would you be open to a 15-minute conversation about whether it could help?' Personalise every message. Reference something real about their situation.",
      "From those 10 messages, expect 3 to 4 replies. From those replies, expect 1 to 2 conversations. From 5 weeks of this, you will have had 5 to 10 real conversations with potential buyers. Some will become customers. All will teach you something.",
      "The knowledge you gain from these conversations is irreplaceable. You will learn which features matter and which are irrelevant. You will hear the exact language buyers use to describe their problem, which becomes your marketing copy. You will discover objections you never anticipated and discover buying triggers you never considered.",
      "Only after you have your first 10 customers does marketing start to matter. Because now you know who your buyer is, what they care about, and what language makes them pay attention. Your marketing becomes a system for replicating the conversations that already worked, at scale.",
      "Start with conversations. Scale with systems.",
    ],
    pullquote: "Start with conversations. Scale with systems.",
    steps: [
      {
        label: "Week 1",
        text: "Build a list of 50 people with the problem you solve",
      },
      {
        label: "Week 2-3",
        text: "Send 10 personalised messages per week, expect 3-4 replies",
      },
      {
        label: "Week 4-5",
        text: "Have 5-10 conversations, learn what matters to real buyers",
      },
      {
        label: "Week 6+",
        text: "Convert conversations to customers, then build systems to replicate",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
