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
    label: "Active Contracts",
    value: "127",
    change: "Across all vendors",
    positive: true,
  },
  {
    label: "Expiring in 30 Days",
    value: "8",
    change: "Action required",
    positive: false,
  },
  {
    label: "Auto-Renewal",
    value: "42",
    change: "33% of contracts",
    positive: true,
  },
  {
    label: "Pending Renegotiation",
    value: "5",
    change: "In progress",
    positive: false,
  },
];

const RENEWAL_MONTHS = [
  {
    month: "April 2026",
    contracts: [
      {
        vendor: "Salesforce",
        value: "$156K",
        type: "Manual",
        days: 12,
        action: "Send proposal",
      },
      {
        vendor: "HubSpot",
        value: "$42K",
        type: "Auto",
        days: 18,
        action: "Review terms",
      },
      {
        vendor: "Zendesk",
        value: "$28K",
        type: "Manual",
        days: 24,
        action: "Schedule call",
      },
    ],
  },
  {
    month: "May 2026",
    contracts: [
      {
        vendor: "Datadog",
        value: "$62K",
        type: "Auto",
        days: 45,
        action: "Review pricing",
      },
      {
        vendor: "Figma",
        value: "$18K",
        type: "Manual",
        days: 52,
        action: "Assess usage",
      },
    ],
  },
  {
    month: "June 2026",
    contracts: [
      {
        vendor: "AWS",
        value: "$320K",
        type: "Auto",
        days: 78,
        action: "Negotiate discount",
      },
      {
        vendor: "Snowflake",
        value: "$95K",
        type: "Manual",
        days: 85,
        action: "RFP comparison",
      },
    ],
  },
];

const AUTO_ALERTS = [
  {
    vendor: "Twilio",
    clause: "5% annual price increase",
    value: "$34K",
    renewalDate: "Apr 15",
  },
  {
    vendor: "Intercom",
    clause: "3% CPI adjustment",
    value: "$22K",
    renewalDate: "Apr 28",
  },
  {
    vendor: "PagerDuty",
    clause: "10% tier escalation",
    value: "$18K",
    renewalDate: "May 3",
  },
];

function urgencyColor(days: number): string {
  if (days <= 14) return "bg-red-500";
  if (days <= 30) return "bg-amber-500";
  return "bg-stone-300";
}

export function VVContractStatus() {
  return (
    <CompactShell
      productName="VendorVault"
      accentColor="stone"
      navItems={NAV_ITEMS}
      activeNav="Contracts"
      title="Contract Status"
      subtitle="Renewal calendar"
      breadcrumb={["VendorVault", "Contracts"]}
      actions={
        <button className="rounded bg-stone-700 px-3 py-1.5 text-xs font-medium text-white">
          Export calendar
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

        <div className="rounded border border-neutral-200 bg-white">
          <div className="border-b border-neutral-200 px-4 py-2.5">
            <h2 className="text-xs font-semibold text-neutral-800">
              Renewal Timeline
            </h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {RENEWAL_MONTHS.map((group) => (
              <div key={group.month} className="px-4 py-3">
                <h3 className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                  {group.month}
                </h3>
                <div className="mt-2 space-y-1">
                  {group.contracts.map((c) => (
                    <div
                      key={c.vendor}
                      className="border-b border-neutral-100 py-3 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${urgencyColor(c.days)}`}
                          />
                          <span className="text-xs font-medium text-neutral-900">
                            {c.vendor}
                          </span>
                          <span className="font-mono text-sm font-medium text-stone-800">
                            {c.value}
                          </span>
                          <span className="rounded bg-stone-100 px-2 py-0.5 text-[10px] text-stone-600">
                            {c.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-neutral-400">
                            {c.days} days
                          </span>
                          <button className="rounded bg-stone-700 px-2 py-1 text-[10px] font-medium text-white">
                            {c.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded border border-amber-200 bg-amber-50/40 p-4">
          <h2 className="text-xs font-semibold text-amber-800">
            Auto-Renewal Alerts
          </h2>
          <p className="mt-0.5 text-[10px] text-amber-600">
            Contracts with automatic price increase clauses
          </p>
          <div className="mt-3 space-y-1">
            {AUTO_ALERTS.map((a) => (
              <div
                key={a.vendor}
                className="border-b border-amber-100 py-3 last:border-0 last:pb-0"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-neutral-900">
                      {a.vendor}
                    </span>
                    <span className="text-[10px] text-amber-700">
                      {a.clause}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-medium text-stone-800">
                      {a.value}
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      Renews {a.renewalDate}
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
