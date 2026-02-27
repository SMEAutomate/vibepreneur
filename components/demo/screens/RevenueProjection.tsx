import { AppShell } from "../AppShell";

const months = [
  { month: "Mar", mrr: 347, customers: 5 },
  { month: "Apr", mrr: 845, customers: 11 },
  { month: "May", mrr: 1490, customers: 18 },
  { month: "Jun", mrr: 2340, customers: 27 },
  { month: "Jul", mrr: 3580, customers: 38 },
  { month: "Aug", mrr: 5120, customers: 52 },
];

const maxMrr = 5120;

const scenarios = [
  {
    name: "Conservative",
    arr: "$42K",
    customers: "35",
    growth: "15% MoM",
    churn: "5%",
  },
  {
    name: "Base case",
    arr: "$61K",
    customers: "52",
    growth: "25% MoM",
    churn: "3%",
    highlighted: true,
  },
  {
    name: "Optimistic",
    arr: "$94K",
    customers: "78",
    growth: "35% MoM",
    churn: "2%",
  },
];

export function RevenueProjection() {
  return (
    <AppShell
      activeNav="Growth"
      title="Revenue Projection"
      subtitle="OnboardFlow — 6-month financial outlook"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Export model
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Current MRR", value: "$347", change: "Month 1" },
          {
            label: "Projected MRR (6mo)",
            value: "$5,120",
            change: "Base case",
          },
          { label: "Target customers", value: "52", change: "By Aug 2026" },
          { label: "ARPU", value: "$98", change: "Blended avg" },
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
          {months.map((m) => (
            <div key={m.month} className="flex flex-1 flex-col items-center">
              <span className="text-xs font-bold text-brand-700">
                ${(m.mrr / 1000).toFixed(1)}k
              </span>
              <div
                className="mt-1 w-full rounded-t-md bg-brand-500"
                style={{ height: `${(m.mrr / maxMrr) * 160}px` }}
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
        {scenarios.map((s) => (
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
              value: "$49 Starter / $149 Growth / $399 Scale",
            },
            { label: "Mix", value: "60% Starter, 30% Growth, 10% Scale" },
            { label: "Acquisition cost", value: "$0 (organic + referral)" },
            { label: "Time to close", value: "14–21 days average" },
            {
              label: "Lead sources",
              value:
                "LinkedIn (40%), Audit tool (30%), SEO (20%), Referral (10%)",
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
