import { TopBarShell } from "../../TopBarShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Roadmap" },
  { icon: "◎", label: "Features" },
  { icon: "▣", label: "Sprints" },
  { icon: "◈", label: "Insights" },
  { icon: "⚙", label: "Settings" },
];

const FEATURES = [
  {
    name: "Real-time collaboration",
    impact: 9,
    effort: 4,
    quadrant: "Do first",
    votes: 41,
  },
  {
    name: "Custom scoring weights",
    impact: 8,
    effort: 3,
    quadrant: "Do first",
    votes: 36,
  },
  {
    name: "Stakeholder voting portal",
    impact: 8,
    effort: 5,
    quadrant: "Do first",
    votes: 33,
  },
  {
    name: "Slack notifications",
    impact: 6,
    effort: 2,
    quadrant: "Quick win",
    votes: 24,
  },
  {
    name: "CSV export",
    impact: 5,
    effort: 2,
    quadrant: "Quick win",
    votes: 19,
  },
  {
    name: "Dependency mapping",
    impact: 7,
    effort: 7,
    quadrant: "Schedule",
    votes: 28,
  },
  {
    name: "Resource allocation view",
    impact: 7,
    effort: 6,
    quadrant: "Schedule",
    votes: 22,
  },
  {
    name: "Multi-language UI",
    impact: 3,
    effort: 8,
    quadrant: "Deprioritize",
    votes: 7,
  },
];

const QUADRANT_COLORS: Record<string, string> = {
  "Do first": "bg-emerald-50 text-emerald-700",
  "Quick win": "bg-rose-50 text-rose-700",
  Schedule: "bg-amber-50 text-amber-700",
  Deprioritize: "bg-neutral-100 text-neutral-500",
};

export function SRFeatureScoring() {
  return (
    <TopBarShell
      productName="ShipReady"
      accentColor="rose"
      navItems={NAV_ITEMS}
      activeNav="Features"
      title="Feature Scoring"
      subtitle="Impact vs effort analysis"
      actions={
        <button className="rounded-md bg-rose-600 px-3 py-1.5 text-xs font-medium text-white">
          Add feature
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-3">
          {FEATURES.map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-neutral-900">
                    {f.name}
                  </p>
                  <span
                    className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${QUADRANT_COLORS[f.quadrant]}`}
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
                          className={`h-2 w-2 rounded-sm ${i < f.impact ? "bg-rose-500" : "bg-neutral-100"}`}
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
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-neutral-900">
              Quadrant Summary
            </h3>
            <div className="mt-3 space-y-2">
              {[
                { label: "Do first", count: 3, color: "text-emerald-600" },
                { label: "Quick wins", count: 2, color: "text-rose-600" },
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

          <div className="rounded-xl bg-rose-50/50 p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-rose-800">
              Recommendation
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-rose-700">
              Prioritize the 3 &ldquo;Do first&rdquo; features for the next
              sprint. Ship Slack notifications and CSV export as quick wins
              alongside. Defer multi-language UI until core adoption metrics are
              met.
            </p>
          </div>
        </div>
      </div>
    </TopBarShell>
  );
}
