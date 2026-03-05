import { AppShell } from "@/components/demo/AppShell";

export function DMVibeOpportunity() {
  return (
    <AppShell
      activeNav="Opportunities"
      title="Opportunity Detail"
      subtitle="Technical debt visibility for engineering teams"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Build solution →
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Problem Breakdown
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Engineering teams spend 30 to 40% of sprint capacity wrestling
              with technical debt that nobody can quantify. Leadership sees
              velocity dropping but can&apos;t prioritize what they can&apos;t
              see. Debt compounds silently: what starts as a shortcut becomes a
              blocker six months later when the team needs to ship fast.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { label: "Sprint capacity on debt", value: "38%" },
                { label: "Untracked debt items (est.)", value: "60%" },
                { label: "Velocity decline/quarter", value: "12%" },
                { label: "Market size", value: "~150K eng teams" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg bg-neutral-50 p-3">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    {s.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-neutral-900">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Urgency Signals
            </h2>
            <div className="mt-4 space-y-3">
              {[
                "Engineering headcount is flat while codebase complexity grows quarter over quarter",
                "CTOs and VPEs under pressure to show productivity metrics to the board",
                "AI-assisted coding accelerates feature shipping but quietly introduces more debt",
              ].map((signal) => (
                <div
                  key={signal}
                  className="flex items-start gap-2 text-sm text-neutral-600"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">Who Pays</h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Primary buyer
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  VP Engineering / CTO
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Budget holder
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  CTO / Head of Platform
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Champions
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  Staff Engineers, Tech Leads
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
            <h2 className="text-sm font-semibold text-brand-800">
              Suggested Wedge
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-700">
              Offer a free codebase health scan that surfaces the top 10 debt
              hotspots and estimates remediation effort. Teams see the problem
              quantified for the first time, which makes the buy decision
              straightforward.
            </p>
            <div className="mt-4 rounded-lg bg-white p-3">
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Entry format
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-800">
                Free codebase health scan
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Opportunity Score
            </h2>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-bold text-emerald-600">86</span>
              <span className="mb-1 text-sm text-neutral-400">/100</span>
            </div>
            <div className="mt-3 space-y-2">
              {[
                { label: "Market demand", score: 9 },
                { label: "Your fit", score: 8 },
                { label: "Timing", score: 9 },
                { label: "Competition gap", score: 8 },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-neutral-500">{s.label}</span>
                  <span className="font-medium text-neutral-700">
                    {s.score}/10
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
