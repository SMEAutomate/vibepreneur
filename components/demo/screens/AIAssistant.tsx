import { AppShell } from "../AppShell";

const messages = [
  {
    role: "assistant",
    content:
      "I&apos;ve analyzed your positioning canvas and outreach results. Here are three things I&apos;d focus on this week:",
  },
  {
    role: "assistant",
    content:
      '1. **Double down on LinkedIn DMs** — your question-first variant is converting at 7.2%. Scale to 100 prospects/week.\n\n2. **Rewrite your landing page hero** — the current headline doesn&apos;t match the pain point that resonates most (time waste, not compliance).\n\n3. **Create a comparison page vs BambooHR** — 1,600 monthly searches for "bamboohr alternative" with low competition.',
  },
  {
    role: "user",
    content:
      "How should I handle the objection that they already use BambooHR?",
  },
  {
    role: "assistant",
    content:
      'Great question. BambooHR is an HRIS — onboarding is a small add-on feature for them. Your angle:\n\n**"BambooHR is great for HR management. OnboardFlow is purpose-built for the onboarding workflow — automated provisioning, compliance tracking, and a new hire portal that BambooHR doesn&apos;t offer. Most of our customers use both."**\n\nThis positions you as complementary, not competitive. It lowers the switching cost in the buyer&apos;s mind.',
  },
];

const suggestedPrompts = [
  "Review my positioning and suggest improvements",
  "Generate 5 cold email subject lines for my ICP",
  "What channels should I prioritize this month?",
  "Analyze my competitor landscape",
  "Help me refine my pricing strategy",
  "Write a LinkedIn post about onboarding pain points",
];

export function AIAssistant() {
  return (
    <AppShell
      activeNav="Home"
      title="AI Strategy Assistant"
      subtitle="OnboardFlow — Your GTM co-pilot"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="flex flex-col rounded-2xl border border-neutral-200 bg-white">
          <div className="flex-1 space-y-4 p-6">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${m.role === "user" ? "bg-brand-600 text-white" : "bg-neutral-50 text-neutral-700"}`}
                >
                  <p
                    className={`text-xs leading-relaxed ${m.role === "user" ? "text-white" : "text-neutral-700"}`}
                  >
                    {m.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-neutral-100 p-4">
            <div className="flex gap-2">
              <div className="flex-1 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5">
                <p className="text-xs text-neutral-400">
                  Ask about your solution, positioning, or GTM strategy...
                </p>
              </div>
              <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h3 className="text-xs font-semibold text-neutral-900">
              Context Loaded
            </h3>
            <div className="mt-3 space-y-1.5">
              {[
                "Positioning canvas",
                "Buyer persona (Jessica M.)",
                "GTM plan (Week 2)",
                "Validation results",
                "Growth dashboard",
              ].map((ctx) => (
                <div
                  key={ctx}
                  className="flex items-center gap-2 text-[10px] text-neutral-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {ctx}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h3 className="text-xs font-semibold text-neutral-900">
              Suggested Prompts
            </h3>
            <div className="mt-3 space-y-1.5">
              {suggestedPrompts.map((p) => (
                <button
                  key={p}
                  className="w-full rounded-lg border border-neutral-100 p-2 text-left text-[10px] text-neutral-600 hover:bg-neutral-50"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
