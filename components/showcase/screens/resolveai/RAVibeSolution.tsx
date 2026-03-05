import { AppShell } from "@/components/demo/AppShell";

export function RAVibeSolution() {
  return (
    <AppShell
      activeNav="Solutions"
      title="Solution Builder"
      subtitle="Structuring: ResolveAI"
      actions={
        <>
          <button className="rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600">
            Save draft
          </button>
          <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
            Generate brief →
          </button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Offer Definition
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Solution name
                </label>
                <div className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-800">
                  ResolveAI
                </div>
              </div>
              <div>
                <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  One-line promise
                </label>
                <div className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-800">
                  Get customers to answers 60% faster with AI-powered routing
                  and KB
                </div>
              </div>
              <div>
                <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Format
                </label>
                <div className="mt-1 flex gap-2">
                  {["SaaS platform", "Service", "Template kit", "Course"].map(
                    (f) => (
                      <span
                        key={f}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${f === "SaaS platform" ? "bg-brand-100 text-brand-700" : "bg-neutral-100 text-neutral-500"}`}
                      >
                        {f}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Core Features
            </h2>
            <div className="mt-4 space-y-2">
              {[
                "AI ticket classification and priority detection",
                "Smart routing engine with skill-based assignment",
                "Knowledge base gap detection from ticket patterns",
                "Response templates with dynamic personalization",
                "SLA monitoring with automated escalation alerts",
              ].map((f, i) => (
                <div
                  key={f}
                  className="flex items-center gap-3 rounded-lg border border-neutral-100 p-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-50 text-[10px] font-bold text-brand-700">
                    {i + 1}
                  </span>
                  <span className="text-sm text-neutral-700">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Buyer Outcomes
            </h2>
            <div className="mt-4 space-y-3">
              {[
                {
                  outcome:
                    "Resolve tickets 60% faster with intelligent routing",
                  metric: "60% faster",
                },
                {
                  outcome: "Eliminate 40% of misrouted tickets automatically",
                  metric: "40% fewer",
                },
                {
                  outcome: "Increase customer satisfaction scores",
                  metric: "25% higher CSAT",
                },
                {
                  outcome: "Free up agent time with AI-assisted responses",
                  metric: "20 hrs/wk saved",
                },
              ].map((o) => (
                <div
                  key={o.outcome}
                  className="flex items-start gap-3 rounded-lg bg-neutral-50 p-3"
                >
                  <div className="flex-1">
                    <p className="text-sm text-neutral-700">{o.outcome}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    {o.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Pricing Suggestion
            </h2>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                {
                  tier: "Starter",
                  price: "$99/mo",
                  for: "Up to 500 tickets/mo",
                },
                {
                  tier: "Growth",
                  price: "$249/mo",
                  for: "Up to 2,000 tickets/mo",
                },
                { tier: "Scale", price: "$549/mo", for: "Unlimited tickets" },
              ].map((t) => (
                <div
                  key={t.tier}
                  className={`rounded-xl border p-4 text-center ${t.tier === "Growth" ? "border-brand-200 bg-brand-50/30" : "border-neutral-200"}`}
                >
                  <p className="text-xs font-medium text-neutral-500">
                    {t.tier}
                  </p>
                  <p className="mt-1 text-lg font-bold text-neutral-900">
                    {t.price}
                  </p>
                  <p className="mt-1 text-[10px] text-neutral-400">{t.for}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50/30 p-6">
            <h2 className="text-sm font-semibold text-brand-800">
              Solution Readiness
            </h2>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-2xl font-bold text-brand-700">80%</span>
            </div>
            <p className="mt-2 text-xs text-brand-600">
              Add integration guides and competitive comparison to reach 95%.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
