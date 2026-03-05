import { AppShell } from "@/components/demo/AppShell";

const MONTHS = [
  { month: "Mar", mrr: 490, customers: 2 },
  { month: "Apr", mrr: 1180, customers: 5 },
  { month: "May", mrr: 2450, customers: 9 },
  { month: "Jun", mrr: 4200, customers: 13 },
  { month: "Jul", mrr: 6800, customers: 18 },
  { month: "Aug", mrr: 9700, customers: 22 },
];

const MAX_MRR = 9700;

const SCENARIOS = [
  {
    name: "Conservative",
    arr: "$62K",
    customers: "15",
    growth: "18% MoM",
    churn: "5%",
  },
  {
    name: "Base case",
    arr: "$116K",
    customers: "22",
    growth: "28% MoM",
    churn: "3%",
    highlighted: true,
  },
  {
    name: "Optimistic",
    arr: "$178K",
    customers: "32",
    growth: "38% MoM",
    churn: "2%",
  },
];

export function SLVibeRevenue() {
  return (
    <AppShell
      activeNav="Growth"
      title="Revenue Projection"
      subtitle="SpendLens. 6-month financial outlook"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Export model
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Current MRR", value: "$490", change: "Month 1" },
          {
            label: "Projected MRR (6mo)",
            value: "$9,700",
            change: "Base case",
          },
          { label: "Target customers", value: "22", change: "By Aug 2026" },
          { label: "ARPU", value: "$441", change: "Blended avg" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <p className="text-xs text-neutral-500">{m.label}</p>
            <p className="mt-2 text-2xl font-bold text-neutral-900">
              {m.value}
            </p>
            <p className="mt-1 text-[10px] text-neutral-400">{m.change}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-neutral-900">
          MRR Growth (6-Month Projection)
        </h2>
        <div className="mt-6 flex items-end gap-3">
          {MONTHS.map((m) => (
            <div key={m.month} className="flex flex-1 flex-col items-center">
              <span className="text-xs font-bold text-brand-700">
                ${(m.mrr / 1000).toFixed(1)}k
              </span>
              <div
                className="mt-1 w-full rounded-t-md bg-brand-500"
                style={{ height: `${(m.mrr / MAX_MRR) * 160}px` }}
              />
              <span className="mt-2 text-[10px] text-neutral-500">
                {m.month}
              </span>
              <span className="text-[10px] text-neutral-400">
                {m.customers} customers
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {SCENARIOS.map((s) => (
          <div
            key={s.name}
            className={`rounded-2xl border p-6 ${s.highlighted ? "border-brand-200 bg-brand-50/30" : "border-neutral-200 bg-white"}`}
          >
            <h3
              className={`text-sm font-semibold ${s.highlighted ? "text-brand-800" : "text-neutral-900"}`}
            >
              {s.name}
            </h3>
            <div className="mt-4 space-y-3">
              {[
                { label: "Projected ARR", value: s.arr },
                { label: "Customers", value: s.customers },
                { label: "Growth rate", value: s.growth },
                { label: "Monthly churn", value: s.churn },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-xs">
                  <span
                    className={
                      s.highlighted ? "text-brand-600" : "text-neutral-500"
                    }
                  >
                    {r.label}
                  </span>
                  <span
                    className={`font-medium ${s.highlighted ? "text-brand-800" : "text-neutral-800"}`}
                  >
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-neutral-900">
          Key Assumptions
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            {
              label: "Pricing",
              value: "$199 Starter / $449 Growth / $899 Enterprise",
            },
            { label: "Mix", value: "50% Starter, 35% Growth, 15% Enterprise" },
            { label: "Acquisition cost", value: "$0 (organic + referral)" },
            { label: "Time to close", value: "21-30 days average" },
            {
              label: "Lead sources",
              value:
                "LinkedIn (35%), Audit tool (30%), SEO (25%), Referral (10%)",
            },
            { label: "Expansion revenue", value: "Not modeled yet" },
          ].map((a) => (
            <div
              key={a.label}
              className="rounded-lg border border-neutral-100 p-3"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {a.label}
              </p>
              <p className="mt-1 text-xs text-neutral-700">{a.value}</p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
