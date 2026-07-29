import { MinimalShell } from "../../MinimalShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Cohorts" },
  { icon: "◎", label: "Learners" },
  { icon: "▣", label: "Outcomes" },
  { icon: "◈", label: "Programmes" },
  { icon: "⚙", label: "Settings" },
];

const LEARNERS = [
  {
    ref: "L-2841",
    cohort: "Digital Skills, May",
    score: 91,
    driver: "3 late submissions, no tutor contact in 18 days",
    action: "Call scheduled",
  },
  {
    ref: "L-2776",
    cohort: "Data Analyst, Mar",
    score: 88,
    driver: "Attendance fell from 94% to 61% over four weeks",
    action: "Not started",
  },
  {
    ref: "L-2903",
    cohort: "Digital Skills, May",
    score: 84,
    driver: "Portfolio evidence 5 weeks behind plan",
    action: "Not started",
  },
  {
    ref: "L-2688",
    cohort: "Customer Service, Jan",
    score: 79,
    driver: "Employer contact lapsed, review overdue",
    action: "Email sent",
  },
  {
    ref: "L-2812",
    cohort: "Business Admin, Sep",
    score: 72,
    driver: "Two assessment resits pending",
    action: "In progress",
  },
];

const SIGNALS = [
  { name: "Submission lateness", weight: 31 },
  { name: "Attendance decline", weight: 26 },
  { name: "Tutor contact gap", weight: 19 },
  { name: "Portfolio lag", weight: 14 },
  { name: "Employer disengagement", weight: 10 },
];

function scoreColor(score: number): string {
  if (score >= 85) return "bg-red-50 text-red-700";
  if (score >= 75) return "bg-amber-50 text-amber-700";
  return "bg-neutral-100 text-neutral-600";
}

export function CLLearnerRisk() {
  return (
    <MinimalShell
      productName="CohortLens"
      accentColor="purple"
      navItems={NAV_ITEMS}
      activeNav="Learners"
      title="Learner Risk"
      subtitle="Ranked by withdrawal probability"
      actions={
        <button className="rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-medium text-white">
          Assign interventions
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-neutral-200 bg-white p-5 lg:col-span-2">
          <p className="text-sm font-semibold text-neutral-900">
            Early warning list
          </p>
          <div className="mt-4 space-y-3">
            {LEARNERS.map((learner) => (
              <div
                key={learner.ref}
                className="border-b border-neutral-100 pb-3 last:border-0 last:pb-0"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${scoreColor(learner.score)}`}
                    >
                      {learner.score}
                    </span>
                    <span className="font-mono text-xs text-neutral-500">
                      {learner.ref}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      {learner.cohort}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-purple-700">
                    {learner.action}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-neutral-700">
                  {learner.driver}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Signal weighting
            </p>
            <div className="mt-4 space-y-3">
              {SIGNALS.map((signal) => (
                <div key={signal.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-600">{signal.name}</span>
                    <span className="font-medium text-neutral-800">
                      {signal.weight}%
                    </span>
                  </div>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-purple-500"
                      style={{ width: `${signal.weight * 3}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-purple-100 bg-purple-50/60 p-5">
            <p className="text-sm font-semibold text-purple-900">
              Intervention window
            </p>
            <p className="mt-2 text-xs leading-relaxed text-purple-800">
              Learners contacted within ten days of first flag complete at 71%.
              After thirty days that falls to 34%. The list is ordered so the
              window stays open.
            </p>
          </div>
        </div>
      </div>
    </MinimalShell>
  );
}
