import { MinimalShell } from "../../MinimalShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Cohorts" },
  { icon: "◎", label: "Learners" },
  { icon: "▣", label: "Outcomes" },
  { icon: "◈", label: "Programmes" },
  { icon: "⚙", label: "Settings" },
];

const PROGRAMMES = [
  {
    name: "Business Administration L3",
    achieved: 84,
    benchmark: 76,
    starts: 512,
  },
  { name: "Team Leader L3", achieved: 81, benchmark: 74, starts: 388 },
  { name: "Customer Service L2", achieved: 78, benchmark: 79, starts: 441 },
  { name: "Data Analyst L4", achieved: 69, benchmark: 71, starts: 214 },
  { name: "Digital Skills L2", achieved: 64, benchmark: 73, starts: 297 },
];

const SITES = [
  { name: "Manchester", achieved: 82, learners: 618 },
  { name: "Leeds", achieved: 79, learners: 442 },
  { name: "Birmingham", achieved: 74, learners: 401 },
  { name: "Bristol", achieved: 68, learners: 391 },
];

const SUMMARY = [
  { label: "Overall achievement", value: "76.4%" },
  { label: "National benchmark", value: "74.1%" },
  { label: "Learners completed", value: "1,412" },
  { label: "Reporting period", value: "Aug 25 to Jul 26" },
];

export function CLOutcomeReport() {
  return (
    <MinimalShell
      productName="CohortLens"
      accentColor="purple"
      navItems={NAV_ITEMS}
      activeNav="Outcomes"
      title="Outcome Report"
      subtitle="Funder submission draft"
      actions={
        <button className="rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-medium text-white">
          Generate submission
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {SUMMARY.map((item) => (
            <div key={item.label} className="border-l-2 border-purple-200 pl-4">
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {item.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-neutral-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 lg:col-span-2">
            <p className="text-sm font-semibold text-neutral-900">
              Achievement against benchmark
            </p>
            <div className="mt-4 space-y-4">
              {PROGRAMMES.map((programme) => (
                <div key={programme.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-700">{programme.name}</span>
                    <span className="text-neutral-500">
                      {programme.starts} starts
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-3">
                    <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-full rounded-full bg-purple-500"
                        style={{ width: `${programme.achieved}%` }}
                      />
                      <div
                        className="absolute top-0 h-full w-0.5 bg-neutral-800"
                        style={{ left: `${programme.benchmark}%` }}
                      />
                    </div>
                    <span
                      className={`w-20 text-right text-xs font-medium ${programme.achieved >= programme.benchmark ? "text-emerald-600" : "text-red-600"}`}
                    >
                      {programme.achieved}% vs {programme.benchmark}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[10px] text-neutral-400">
              Vertical marker shows the national benchmark for each programme.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              By delivery site
            </p>
            <div className="mt-4 space-y-3">
              {SITES.map((site) => (
                <div
                  key={site.name}
                  className="flex items-center justify-between border-b border-neutral-100 pb-2.5 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm text-neutral-800">{site.name}</p>
                    <p className="text-[11px] text-neutral-500">
                      {site.learners} learners
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-neutral-900">
                    {site.achieved}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MinimalShell>
  );
}
