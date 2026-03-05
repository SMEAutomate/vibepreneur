import { AppShell } from "@/components/demo/AppShell";

export function CIQVibeOpportunity() {
  return (
    <AppShell
      activeNav="Opportunities"
      title="Opportunity Detail"
      subtitle="B2B channel attribution gap in mid-market marketing"
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
              B2B marketers spending $50K+/month across 5 or more channels have
              no reliable way to attribute pipeline and revenue back to specific
              touchpoints. Most rely on last-click attribution or gut feel,
              leading to misallocated budgets and wasted spend. The problem
              worsens as buying cycles lengthen and involve more stakeholders.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { label: "Budget wasted", value: "23% avg" },
                { label: "Time on reports", value: "8 hrs/week" },
                { label: "Market size", value: "~120K companies" },
                { label: "Tool satisfaction", value: "34/100" },
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
                "Marketing budgets under scrutiny as boards demand pipeline accountability",
                "Privacy changes breaking traditional tracking (cookies, iOS restrictions)",
                "Multi-channel strategies expanding, making manual attribution impossible",
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
                  VP of Marketing / CMO
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Budget holder
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  Head of Demand Gen / CFO
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Champions
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  Marketing Ops, RevOps Managers
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
            <h2 className="text-sm font-semibold text-brand-800">
              Suggested Wedge
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-700">
              Offer a free channel efficiency audit that analyzes their current
              spend allocation vs. attributed pipeline. Surfaces the waste
              immediately and positions ChannelIQ as the fix.
            </p>
            <div className="mt-4 rounded-lg bg-white p-3">
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Entry format
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-800">
                Free attribution audit
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Opportunity Score
            </h2>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-bold text-emerald-600">91</span>
              <span className="mb-1 text-sm text-neutral-400">/100</span>
            </div>
            <div className="mt-3 space-y-2">
              {[
                { label: "Market demand", score: 10 },
                { label: "Your fit", score: 9 },
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
