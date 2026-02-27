import { AppShell } from "../AppShell";

const variants = [
  {
    label: "Outcome-led",
    headline: "Cut onboarding time by 80%",
    subline:
      "Automated workflows replace manual tasks. New hires are productive in one day, not five.",
    score: 91,
    winner: true,
  },
  {
    label: "Pain-led",
    headline: "Stop losing 12 hours a week to onboarding busywork",
    subline:
      "Your HR team has better things to do than chase signatures and provision Slack channels.",
    score: 84,
    winner: false,
  },
  {
    label: "Identity-led",
    headline: "The onboarding platform built for growing teams",
    subline:
      "Enterprise-grade automation without enterprise-grade complexity. Purpose-built for 50–200 person companies.",
    score: 77,
    winner: false,
  },
];

const testSuggestions = [
  {
    test: "LinkedIn post A/B",
    variant: "Outcome-led vs Pain-led headlines",
    metric: "Engagement rate",
    effort: "Low",
  },
  {
    test: "Landing page hero",
    variant: "Swap hero headline with winner",
    metric: "Signup conversion",
    effort: "Low",
  },
  {
    test: "Cold email subject line",
    variant: "All 3 angles as subject lines",
    metric: "Open rate",
    effort: "Medium",
  },
];

export function ValuePropWorkshop() {
  return (
    <AppShell
      activeNav="Positioning"
      title="Value Prop Workshop"
      subtitle="OnboardFlow — Test and refine your core message"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Generate variants
        </button>
      }
    >
      <div className="space-y-4">
        {variants.map((v) => (
          <div
            key={v.label}
            className={`rounded-2xl border bg-white p-6 ${v.winner ? "border-brand-200" : "border-neutral-200"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-medium text-neutral-600">
                    {v.label}
                  </span>
                  {v.winner && (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700">
                      Recommended
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">
                  {v.headline}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">{v.subline}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-brand-700">{v.score}</p>
                <p className="text-[10px] text-neutral-400">Score</p>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="rounded-md border border-neutral-200 px-3 py-1 text-[10px] font-medium text-neutral-600">
                Edit
              </button>
              <button className="rounded-md border border-neutral-200 px-3 py-1 text-[10px] font-medium text-neutral-600">
                Copy
              </button>
              <button className="rounded-md border border-neutral-200 px-3 py-1 text-[10px] font-medium text-neutral-600">
                Use in landing page
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-neutral-900">
          Suggested Tests
        </h2>
        <div className="mt-4 space-y-3">
          {testSuggestions.map((t) => (
            <div
              key={t.test}
              className="flex items-center gap-4 rounded-lg border border-neutral-100 p-3"
            >
              <div className="flex-1">
                <p className="text-xs font-medium text-neutral-800">{t.test}</p>
                <p className="mt-0.5 text-[10px] text-neutral-500">
                  {t.variant}
                </p>
              </div>
              <span className="text-[10px] text-neutral-400">
                Metric: {t.metric}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${t.effort === "Low" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}
              >
                {t.effort} effort
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
