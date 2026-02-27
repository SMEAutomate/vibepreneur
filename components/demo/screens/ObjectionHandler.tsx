import { AppShell } from "../AppShell";

const objections = [
  {
    objection: "We already have BambooHR for onboarding.",
    category: "Competition",
    response:
      "BambooHR is great for core HR, but onboarding is a bolt-on feature there. OnboardFlow is purpose-built for the onboarding workflow. automated provisioning, compliance tracking, and a new hire portal that BambooHR doesn&apos;t offer.",
    confidence: 92,
    frequency: "High",
  },
  {
    objection: "We don&apos;t have budget for another tool right now.",
    category: "Budget",
    response:
      "Your team spends 12+ hours a week on manual onboarding. At an average HR salary, that&apos;s roughly $2,400/month in hidden costs. OnboardFlow starts at $49/mo. the ROI is immediate.",
    confidence: 88,
    frequency: "High",
  },
  {
    objection: "Our onboarding process works fine as-is.",
    category: "Status quo",
    response:
      "That might be true today, but can it handle 2x the hiring volume? Most teams hit a breaking point around 5+ hires per month. The audit checklist can help you spot gaps before they become visible.",
    confidence: 78,
    frequency: "Medium",
  },
  {
    objection: "How long does implementation take?",
    category: "Implementation",
    response:
      "Most teams are live in under a week. OnboardFlow integrates with your existing tools (Slack, Google Workspace, your HRIS). no rip-and-replace. You can run your first automated onboarding on day one.",
    confidence: 95,
    frequency: "Medium",
  },
  {
    objection: "I need to get buy-in from IT first.",
    category: "Decision process",
    response:
      "Totally understand. OnboardFlow is designed for People Ops teams. no IT involvement needed for setup. We can share a security overview for your IT team, and most approve it in under a day.",
    confidence: 82,
    frequency: "Low",
  },
];

const confidenceColor = (c: number) =>
  c >= 90
    ? "text-emerald-700 bg-emerald-50"
    : c >= 75
      ? "text-amber-700 bg-amber-50"
      : "text-red-600 bg-red-50";

export function ObjectionHandler() {
  return (
    <AppShell
      activeNav="Positioning"
      title="Objection Handler"
      subtitle="OnboardFlow. Prepared responses for every pushback"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Add objection
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Total objections", value: "5" },
          { label: "Avg confidence", value: "87%" },
          { label: "High frequency", value: "2" },
          { label: "Needs work", value: "1" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <p className="text-xs text-neutral-500">{m.label}</p>
            <p className="mt-2 text-2xl font-bold text-neutral-900">
              {m.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {objections.map((o) => (
          <div
            key={o.category}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600">
                    {o.category}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-500">
                    {o.frequency} frequency
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-900">
                  &ldquo;{o.objection}&rdquo;
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${confidenceColor(o.confidence)}`}
              >
                {o.confidence}%
              </span>
            </div>

            <div className="mt-4 rounded-lg bg-brand-50/30 p-4">
              <p className="text-[10px] font-medium uppercase tracking-wider text-brand-600">
                Suggested Response
              </p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700">
                {o.response}
              </p>
            </div>

            <div className="mt-3 flex gap-2">
              <button className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-600">
                Edit
              </button>
              <button className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-600">
                Copy
              </button>
              <button className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-600">
                Practice
              </button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
