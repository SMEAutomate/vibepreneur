import { AppShell } from "../AppShell";

const features = [
  {
    name: "Automated document collection",
    impact: 9,
    effort: 3,
    quadrant: "Do first",
    votes: 34,
  },
  {
    name: "Tool provisioning (Slack, Google)",
    impact: 8,
    effort: 5,
    quadrant: "Do first",
    votes: 28,
  },
  {
    name: "Compliance checklist with audit trail",
    impact: 8,
    effort: 4,
    quadrant: "Do first",
    votes: 31,
  },
  {
    name: "New hire portal",
    impact: 7,
    effort: 6,
    quadrant: "Schedule",
    votes: 22,
  },
  {
    name: "Manager notification system",
    impact: 6,
    effort: 2,
    quadrant: "Quick win",
    votes: 19,
  },
  {
    name: "Training schedule builder",
    impact: 6,
    effort: 7,
    quadrant: "Schedule",
    votes: 16,
  },
  {
    name: "Multi-language support",
    impact: 3,
    effort: 8,
    quadrant: "Deprioritize",
    votes: 5,
  },
  {
    name: "Custom branding for portal",
    impact: 4,
    effort: 3,
    quadrant: "Quick win",
    votes: 12,
  },
];

const quadrantColors: Record<string, string> = {
  "Do first": "bg-emerald-50 text-emerald-700",
  "Quick win": "bg-brand-50 text-brand-700",
  Schedule: "bg-amber-50 text-amber-700",
  Deprioritize: "bg-neutral-100 text-neutral-500",
};

export function FeaturePrioritizer() {
  return (
    <AppShell
      activeNav="Solutions"
      title="Feature Prioritizer"
      subtitle="OnboardFlow — Impact vs effort scoring"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Add feature
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-3">
          {features.map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-neutral-900">
                    {f.name}
                  </p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${quadrantColors[f.quadrant]}`}
                  >
                    {f.quadrant}
                  </span>
                </div>
                <div className="mt-2 flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-neutral-400">Impact</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-sm ${i < f.impact ? "bg-brand-500" : "bg-neutral-100"}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-medium text-neutral-600">
                      {f.impact}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-neutral-400">Effort</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-sm ${i < f.effort ? "bg-amber-400" : "bg-neutral-100"}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-medium text-neutral-600">
                      {f.effort}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-neutral-900">{f.votes}</p>
                <p className="text-[10px] text-neutral-400">votes</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h3 className="text-xs font-semibold text-neutral-900">
              Quadrant Summary
            </h3>
            <div className="mt-3 space-y-2">
              {[
                { label: "Do first", count: 3, color: "text-emerald-600" },
                { label: "Quick wins", count: 2, color: "text-brand-600" },
                { label: "Schedule", count: 2, color: "text-amber-600" },
                { label: "Deprioritize", count: 1, color: "text-neutral-500" },
              ].map((q) => (
                <div
                  key={q.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-xs text-neutral-600">{q.label}</span>
                  <span className={`text-sm font-bold ${q.color}`}>
                    {q.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50/30 p-5">
            <h3 className="text-xs font-semibold text-brand-800">
              Recommendation
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-brand-700">
              Focus MVP on the 3 &ldquo;Do first&rdquo; features. Ship manager
              notifications and custom branding as quick wins in sprint 2. Delay
              training builder and multi-language.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
