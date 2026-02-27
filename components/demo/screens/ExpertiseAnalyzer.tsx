import { AppShell } from "../AppShell";

const detectedSkills = [
  { skill: "People Operations", confidence: 94 },
  { skill: "Process Automation", confidence: 89 },
  { skill: "Employee Onboarding", confidence: 87 },
  { skill: "Compliance Management", confidence: 82 },
  { skill: "HRIS Implementation", confidence: 78 },
  { skill: "Change Management", confidence: 71 },
];

const marketGaps = [
  {
    gap: "Mid-market onboarding automation",
    match: 92,
    demand: "High",
    competition: "Low",
  },
  {
    gap: "Compliance workflow tooling",
    match: 78,
    demand: "Medium",
    competition: "Medium",
  },
  {
    gap: "Remote hiring coordination",
    match: 74,
    demand: "High",
    competition: "High",
  },
];

export function ExpertiseAnalyzer() {
  return (
    <AppShell
      activeNav="Opportunities"
      title="Expertise Analyzer"
      subtitle="Mapping your experience to market opportunities"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Re-analyze
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Source Material
            </h2>
            <div className="mt-4 rounded-lg border-2 border-dashed border-neutral-200 bg-neutral-50 p-6 text-center">
              <p className="text-sm font-medium text-neutral-600">
                SarahChen_Resume_2026.pdf
              </p>
              <p className="mt-1 text-xs text-neutral-400">
                Uploaded 27 Feb 2026 · 2 pages analyzed
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="rounded-lg border border-neutral-200 px-3 py-1.5 text-[10px] font-medium text-neutral-600">
                Upload new
              </button>
              <button className="rounded-lg border border-neutral-200 px-3 py-1.5 text-[10px] font-medium text-neutral-600">
                Add LinkedIn profile
              </button>
              <button className="rounded-lg border border-neutral-200 px-3 py-1.5 text-[10px] font-medium text-neutral-600">
                Describe manually
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Detected Skills
            </h2>
            <div className="mt-4 space-y-3">
              {detectedSkills.map((s) => (
                <div key={s.skill}>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-neutral-700">
                      {s.skill}
                    </span>
                    <span className="text-neutral-500">{s.confidence}%</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-brand-500"
                      style={{ width: `${s.confidence}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-brand-100 bg-brand-50/30 p-6">
            <h2 className="text-sm font-semibold text-brand-800">
              Expertise Score
            </h2>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-bold text-brand-700">87</span>
              <span className="mb-1 text-xs text-brand-600">/100</span>
            </div>
            <p className="mt-2 text-xs text-brand-600">
              Strong fit for B2B SaaS in the HR/People Ops space. Your
              operational experience maps directly to 3 underserved market
              segments.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Market Gap Matches
            </h2>
            <div className="mt-4 space-y-3">
              {marketGaps.map((g) => (
                <div
                  key={g.gap}
                  className="rounded-lg border border-neutral-100 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-neutral-800">
                      {g.gap}
                    </p>
                    <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                      {g.match}% match
                    </span>
                  </div>
                  <div className="mt-2 flex gap-3">
                    <span className="text-[10px] text-neutral-500">
                      Demand:{" "}
                      <span className="font-medium text-neutral-700">
                        {g.demand}
                      </span>
                    </span>
                    <span className="text-[10px] text-neutral-500">
                      Competition:{" "}
                      <span className="font-medium text-neutral-700">
                        {g.competition}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
