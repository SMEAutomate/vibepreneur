import { AppShell } from "@/components/demo/AppShell";

export function SLVibeOpportunity() {
  return (
    <AppShell
      activeNav="Opportunities"
      title="Opportunity Detail"
      subtitle="Real-time expense visibility for growing companies"
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
              Finance teams discover budget overruns weeks after they happen.
              Expense data is scattered across 5+ systems (accounting, payroll,
              procurement, expense reports, vendor invoices), making real-time
              visibility nearly impossible. By the time someone notices an
              overspend, the damage is done and correction options are limited.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { label: "Discovery delay", value: "18 days avg" },
                { label: "Systems to check", value: "5+" },
                { label: "Budget surprises/quarter", value: "3.2" },
                { label: "Market size", value: "~85K companies" },
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
                "Headcount growth means more expense approvals, more budget lines, more complexity",
                "Remote and hybrid teams create decentralized spending that is harder to track",
                "Compliance audits are flagging expense documentation gaps at higher rates in 2026",
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
                  VP Finance / Controller
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Budget holder
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  CFO / Head of Finance
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Champions
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  FP&A Analysts, Department Leads
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
            <h2 className="text-sm font-semibold text-brand-800">
              Suggested Wedge
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-700">
              Start with a free spend visibility audit. Connect one data source,
              surface hidden budget risks immediately, and demonstrate the value
              of real-time tracking before the sales conversation.
            </p>
            <div className="mt-4 rounded-lg bg-white p-3">
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Entry format
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-800">
                Free spend audit tool
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Opportunity Score
            </h2>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-bold text-emerald-600">84</span>
              <span className="mb-1 text-sm text-neutral-400">/100</span>
            </div>
            <div className="mt-3 space-y-2">
              {[
                { label: "Market demand", score: 9 },
                { label: "Your fit", score: 7 },
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
