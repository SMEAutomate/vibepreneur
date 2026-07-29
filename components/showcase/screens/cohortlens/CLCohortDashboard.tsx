import { MinimalShell } from "../../MinimalShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Cohorts" },
  { icon: "◎", label: "Learners" },
  { icon: "▣", label: "Outcomes" },
  { icon: "◈", label: "Programmes" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Forecast Completion", value: "74.2%", note: "Target 78%" },
  { label: "Learners At Risk", value: "218", note: "Of 1,940 active" },
  { label: "Funding Exposure", value: "£412K", note: "If unaddressed" },
  { label: "Interventions Open", value: "96", note: "34 overdue" },
];

const COHORTS = [
  {
    name: "Level 3 Business Admin, Sep intake",
    learners: 284,
    forecast: 81,
    risk: 28,
    site: "Manchester",
  },
  {
    name: "Level 2 Customer Service, Jan intake",
    learners: 196,
    forecast: 76,
    risk: 31,
    site: "Leeds",
  },
  {
    name: "Level 4 Data Analyst, Mar intake",
    learners: 142,
    forecast: 68,
    risk: 44,
    site: "Birmingham",
  },
  {
    name: "Level 3 Team Leader, Sep intake",
    learners: 231,
    forecast: 79,
    risk: 22,
    site: "Manchester",
  },
  {
    name: "Level 2 Digital Skills, May intake",
    learners: 167,
    forecast: 62,
    risk: 51,
    site: "Bristol",
  },
];

function forecastColor(forecast: number): string {
  if (forecast >= 78) return "text-emerald-600";
  if (forecast >= 70) return "text-amber-600";
  return "text-red-600";
}

export function CLCohortDashboard() {
  return (
    <MinimalShell
      productName="CohortLens"
      accentColor="purple"
      navItems={NAV_ITEMS}
      activeNav="Cohorts"
      title="Cohort Dashboard"
      subtitle="Live cohorts, July 2026"
      actions={
        <button className="rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-medium text-white">
          Export for funder
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div key={kpi.label} className="border-l-2 border-purple-200 pl-4">
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {kpi.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-neutral-900">
                {kpi.value}
              </p>
              <p className="mt-0.5 text-[11px] text-neutral-500">{kpi.note}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <p className="text-sm font-semibold text-neutral-900">
            Completion forecast by cohort
          </p>
          <div className="mt-4 space-y-4">
            {COHORTS.map((cohort) => (
              <div
                key={cohort.name}
                className="border-b border-neutral-100 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium text-neutral-800">
                      {cohort.name}
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      {cohort.learners} learners · {cohort.site} · {cohort.risk}{" "}
                      at risk
                    </p>
                  </div>
                  <span
                    className={`text-sm font-semibold ${forecastColor(cohort.forecast)}`}
                  >
                    {cohort.forecast}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className="h-full rounded-full bg-purple-500"
                    style={{ width: `${cohort.forecast}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-purple-100 bg-purple-50/60 p-5">
          <p className="text-sm font-semibold text-purple-900">
            What the forecast is reacting to
          </p>
          <p className="mt-2 text-xs leading-relaxed text-purple-800">
            Digital Skills, May intake dropped nine points in three weeks. The
            driver is submission lateness, not attendance, which historically
            precedes withdrawal by about five weeks. There is still time.
          </p>
        </div>
      </div>
    </MinimalShell>
  );
}
