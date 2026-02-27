import { AppShell } from "../AppShell";

const stages = [
  {
    stage: "Aware",
    description: "Prospect realizes onboarding is a problem",
    touchpoints: [
      "LinkedIn post about onboarding pain",
      "Google search: onboarding automation",
      "Peer recommendation in Slack community",
    ],
    emotion: "Frustrated",
    action: "Reads content, bookmarks for later",
  },
  {
    stage: "Consider",
    description: "Evaluates solutions and compares options",
    touchpoints: [
      "Downloads onboarding audit checklist",
      "Visits OnboardFlow landing page",
      "Reads comparison: manual vs automated",
    ],
    emotion: "Curious",
    action: "Shares audit results with team, evaluates fit",
  },
  {
    stage: "Decide",
    description: "Makes purchase decision and gets buy-in",
    touchpoints: [
      "Books demo call",
      "Reviews pricing page",
      "Shares solution brief with CFO",
    ],
    emotion: "Hopeful",
    action: "Gets budget approval, signs up",
  },
  {
    stage: "Onboard",
    description: "Sets up platform and runs first workflow",
    touchpoints: [
      "Guided setup wizard",
      "Connects HRIS and Slack",
      "Runs first automated onboarding",
    ],
    emotion: "Excited",
    action: "Configures workflows, invites team",
  },
  {
    stage: "Expand",
    description: "Deepens usage and becomes advocate",
    touchpoints: [
      "Adds compliance tracking",
      "Enables manager notifications",
      "Refers two peer companies",
    ],
    emotion: "Confident",
    action: "Upgrades plan, writes testimonial",
  },
];

const emotionColors: Record<string, string> = {
  Frustrated: "text-red-600",
  Curious: "text-amber-600",
  Hopeful: "text-blue-600",
  Excited: "text-emerald-600",
  Confident: "text-brand-600",
};

export function UserJourneyMap() {
  return (
    <AppShell
      activeNav="Solutions"
      title="User Journey Map"
      subtitle="OnboardFlow. From stranger to advocate"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Export journey
        </button>
      }
    >
      <div className="flex gap-3 overflow-x-auto pb-4">
        {stages.map((s, i) => (
          <div
            key={s.stage}
            className="min-w-[220px] flex-1 rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-[10px] font-bold text-brand-700">
                {i + 1}
              </span>
              <h3 className="text-sm font-semibold text-neutral-900">
                {s.stage}
              </h3>
            </div>
            <p className="mt-2 text-xs text-neutral-500">{s.description}</p>

            <div className="mt-4">
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Touchpoints
              </p>
              <ul className="mt-2 space-y-1.5">
                {s.touchpoints.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-1.5 text-[10px] text-neutral-600"
                  >
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 border-t border-neutral-100 pt-3">
              <p className="text-[10px] text-neutral-400">
                Emotion:{" "}
                <span className={`font-medium ${emotionColors[s.emotion]}`}>
                  {s.emotion}
                </span>
              </p>
              <p className="mt-1 text-[10px] text-neutral-400">
                Action: <span className="text-neutral-600">{s.action}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/30 p-6">
        <h2 className="text-sm font-semibold text-brand-800">
          Key Drop-off Points
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {[
            {
              point: "Aware → Consider",
              rate: "38% drop",
              fix: "Stronger CTA in content posts",
            },
            {
              point: "Consider → Decide",
              rate: "52% drop",
              fix: "Add social proof to landing page",
            },
            {
              point: "Onboard → Expand",
              rate: "24% drop",
              fix: "Trigger upsell after first successful workflow",
            },
          ].map((d) => (
            <div key={d.point} className="rounded-lg bg-white p-3">
              <p className="text-xs font-medium text-brand-800">{d.point}</p>
              <p className="mt-1 text-sm font-bold text-red-600">{d.rate}</p>
              <p className="mt-1 text-[10px] text-neutral-500">Fix: {d.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
