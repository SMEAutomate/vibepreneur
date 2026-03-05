import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Vendors" },
  { icon: "◎", label: "Contracts" },
  { icon: "▣", label: "Spend" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  {
    label: "Total Annual Spend",
    value: "$3.2M",
    change: "FY 2026",
    positive: true,
  },
  {
    label: "YoY Change",
    value: "+12%",
    change: "vs $2.86M last year",
    positive: false,
  },
  {
    label: "Duplicate Detection",
    value: "4 found",
    change: "Overlapping services",
    positive: false,
  },
  {
    label: "Potential Savings",
    value: "$180K",
    change: "5 opportunities",
    positive: true,
  },
];

const CATEGORY_SPEND = [
  {
    name: "SaaS Subscriptions",
    amount: "$1.2M",
    pct: 38,
    color: "bg-stone-600",
  },
  {
    name: "Professional Services",
    amount: "$890K",
    pct: 28,
    color: "bg-stone-500",
  },
  {
    name: "Cloud Infrastructure",
    amount: "$640K",
    pct: 20,
    color: "bg-stone-400",
  },
  {
    name: "Hardware & Equipment",
    amount: "$320K",
    pct: 10,
    color: "bg-stone-300",
  },
  { name: "Other", amount: "$180K", pct: 6, color: "bg-stone-200" },
];

const DUPLICATES = [
  {
    vendorA: "Zoom",
    vendorB: "Google Meet",
    overlap: "Video conferencing",
    combined: "$38K",
  },
  {
    vendorA: "Jira",
    vendorB: "Asana",
    overlap: "Project management",
    combined: "$24K",
  },
  {
    vendorA: "Intercom",
    vendorB: "Zendesk",
    overlap: "Customer support",
    combined: "$52K",
  },
  {
    vendorA: "Dropbox",
    vendorB: "Google Drive",
    overlap: "File storage",
    combined: "$16K",
  },
];

const SAVINGS = [
  {
    description: "Consolidate video conferencing tools",
    savings: "$18K",
    effort: "Easy",
  },
  {
    description: "Renegotiate AWS reserved instances",
    savings: "$64K",
    effort: "Medium",
  },
  {
    description: "Eliminate unused Salesforce licenses",
    savings: "$32K",
    effort: "Easy",
  },
  {
    description: "Switch to annual billing for SaaS tools",
    savings: "$41K",
    effort: "Easy",
  },
  {
    description: "Consolidate project management platforms",
    savings: "$25K",
    effort: "Hard",
  },
];

function effortDot(effort: string): string {
  if (effort === "Easy") return "bg-emerald-500";
  if (effort === "Medium") return "bg-amber-500";
  return "bg-red-500";
}

function effortText(effort: string): string {
  if (effort === "Easy") return "text-emerald-700";
  if (effort === "Medium") return "text-amber-700";
  return "text-red-700";
}

export function VVSpendAnalysis() {
  return (
    <CompactShell
      productName="VendorVault"
      accentColor="stone"
      navItems={NAV_ITEMS}
      activeNav="Spend"
      title="Spend Analysis"
      subtitle="Annual overview"
      breadcrumb={["VendorVault", "Spend"]}
      actions={
        <button className="rounded bg-stone-700 px-3 py-1.5 text-xs font-medium text-white">
          Export report
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded border border-neutral-200 bg-white p-4"
            >
              <p className="text-[10px] text-neutral-500">{kpi.label}</p>
              <p className="mt-1 text-xl font-bold text-neutral-900">
                {kpi.value}
              </p>
              <p
                className={`mt-1 text-[10px] font-medium ${
                  kpi.positive ? "text-emerald-600" : "text-amber-600"
                }`}
              >
                {kpi.change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded border border-neutral-200 bg-white p-4">
            <h2 className="text-xs font-semibold text-neutral-800">
              Spend by Category
            </h2>
            <div className="mt-3 space-y-3">
              {CATEGORY_SPEND.map((cat) => (
                <div
                  key={cat.name}
                  className="border-b border-neutral-100 pb-2.5 last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-neutral-700">
                      {cat.name}
                    </span>
                    <span className="font-mono text-sm font-medium text-stone-800">
                      {cat.amount}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="h-1.5 flex-1 rounded-sm bg-neutral-100">
                      <div
                        className={`h-1.5 rounded-sm ${cat.color}`}
                        style={{ width: `${cat.pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-[10px] text-neutral-400">
                      {cat.pct}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded border border-neutral-200 bg-white p-4">
            <h2 className="text-xs font-semibold text-neutral-800">
              Duplicate Vendor Alerts
            </h2>
            <div className="mt-3 space-y-1">
              {DUPLICATES.map((d) => (
                <div
                  key={d.vendorA}
                  className="border-b border-neutral-100 py-3 last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-neutral-900">
                      {d.vendorA} + {d.vendorB}
                    </span>
                    <span className="font-mono text-sm font-medium text-stone-800">
                      {d.combined}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[10px] text-amber-700">
                    {d.overlap}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded border border-neutral-200 bg-white">
          <div className="border-b border-neutral-200 px-4 py-2.5">
            <h2 className="text-xs font-semibold text-neutral-800">
              Savings Opportunities
            </h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {SAVINGS.map((s) => (
              <div
                key={s.description}
                className="border-b border-neutral-100 px-4 py-3 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-700">
                    {s.description}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${effortDot(s.effort)}`}
                      />
                      <span
                        className={`text-[10px] font-medium ${effortText(s.effort)}`}
                      >
                        {s.effort}
                      </span>
                    </div>
                    <span className="font-mono text-sm font-semibold text-emerald-700">
                      {s.savings}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CompactShell>
  );
}
