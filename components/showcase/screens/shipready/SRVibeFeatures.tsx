import { AppShell } from "@/components/demo/AppShell";

const FEATURES = [
  {
    name: "Visual roadmap builder",
    impact: 9,
    effort: 5,
    quadrant: "Do first",
    votes: 52,
  },
  {
    name: "Scoring framework",
    impact: 9,
    effort: 3,
    quadrant: "Do first",
    votes: 47,
  },
  {
    name: "Sprint planning",
    impact: 8,
    effort: 6,
    quadrant: "Do first",
    votes: 39,
  },
  {
    name: "Stakeholder voting",
    impact: 7,
    effort: 4,
    quadrant: "Quick win",
    votes: 34,
  },
  { name: "Jira sync", impact: 6, effort: 7, quadrant: "Schedule", votes: 28 },
  {
    name: "Custom scoring criteria",
    impact: 7,
    effort: 3,
    quadrant: "Quick win",
    votes: 31,
  },
  {
    name: "Roadmap sharing",
    impact: 5,
    effort: 2,
    quadrant: "Quick win",
    votes: 22,
  },
  {
    name: "Analytics dashboard",
    impact: 4,
    effort: 8,
    quadrant: "Deprioritize",
    votes: 11,
  },
];

const QUADRANT_COLORS: Record<string, string> = {
  "Do first": "bg-emerald-50 text-emerald-700",
  "Quick win": "bg-brand-50 text-brand-700",
  Schedule: "bg-amber-50 text-amber-700",
  Deprioritize: "bg-neutral-100 text-neutral-500",
};

export function SRVibeFeatures() {
  return (
    <AppShell
      activeNav="Solutions"
      title="Feature Prioritizer"
      subtitle="ShipReady. Impact vs effort scoring"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Add feature
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-3">
          {FEATURES.map((f) => (
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
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${QUADRANT_COLORS[f.quadrant]}`}
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
                { label: "Quick wins", count: 3, color: "text-brand-600" },
                { label: "Schedule", count: 1, color: "text-amber-600" },
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
              Focus MVP on visual roadmap builder, scoring framework, and sprint
              planning. Ship stakeholder voting, custom criteria, and roadmap
              sharing as quick wins in sprint 2. Defer analytics dashboard and
              Jira sync until post-launch.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
