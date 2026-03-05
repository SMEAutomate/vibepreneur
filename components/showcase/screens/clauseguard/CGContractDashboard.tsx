import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Review Queue" },
  { icon: "▣", label: "Risk Analysis" },
  { icon: "◈", label: "Templates" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Active Contracts", value: "284" },
  { label: "In Review", value: "18" },
  { label: "Expiring in 30 Days", value: "7" },
  { label: "High Risk", value: "4" },
];

const STATUSES = [
  { label: "Draft", count: 12, dot: "bg-neutral-400" },
  { label: "Under Review", count: 18, dot: "bg-amber-500" },
  { label: "Approved", count: 198, dot: "bg-emerald-500" },
  { label: "Expired", count: 56, dot: "bg-red-500" },
];

const EXPIRING = [
  {
    id: "CSA-2024-0847",
    name: "Cloud Services Agreement",
    counterparty: "Nimbus Corp",
    expiry: "Mar 12, 2026",
    renewal: "Auto",
    action: true,
  },
  {
    id: "DPA-2024-0912",
    name: "Data Processing Addendum",
    counterparty: "Vault Systems",
    expiry: "Mar 18, 2026",
    renewal: "Manual",
    action: true,
  },
  {
    id: "SLA-2025-0031",
    name: "Software License Agreement",
    counterparty: "Apex Logic",
    expiry: "Mar 22, 2026",
    renewal: "Auto",
    action: false,
  },
  {
    id: "MSA-2024-0654",
    name: "Consulting MSA",
    counterparty: "Redline Partners",
    expiry: "Mar 28, 2026",
    renewal: "Manual",
    action: true,
  },
  {
    id: "NDA-2025-0118",
    name: "NDA (Mutual)",
    counterparty: "Stealth AI Inc",
    expiry: "Mar 31, 2026",
    renewal: "Manual",
    action: false,
  },
];

export function CGContractDashboard() {
  return (
    <DarkShell
      productName="ClauseGuard"
      accentColor="slate"
      navItems={NAV_ITEMS}
      activeNav="Dashboard"
      title="Contract Dashboard"
      subtitle="All contracts overview"
      actions={
        <button className="rounded border border-slate-300 bg-slate-700 px-3 py-1.5 text-xs font-medium text-white">
          + New contract
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded border border-neutral-300 bg-white p-5"
            >
              <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                {kpi.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-neutral-900">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded border border-neutral-300 bg-white p-5">
          <h2 className="border-b border-neutral-200 pb-3 text-sm font-semibold text-neutral-800">
            Status Breakdown
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {STATUSES.map((s) => (
              <div
                key={s.label}
                className="rounded border border-neutral-200 p-4"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${s.dot}`}
                  />
                  <span className="text-xs font-medium text-neutral-600">
                    {s.label}
                  </span>
                </div>
                <p className="mt-2 text-2xl font-bold text-neutral-900">
                  {s.count}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded border border-neutral-300 bg-white">
          <div className="border-b border-neutral-200 px-5 py-3">
            <h2 className="text-sm font-semibold text-neutral-800">
              Expiring Soon
            </h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {EXPIRING.map((c) => (
              <div key={c.id} className="flex items-center gap-4 px-5 py-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-neutral-400">
                      {c.id}
                    </span>
                    {c.action && (
                      <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-neutral-900">
                    {c.name}
                  </p>
                  <p className="text-xs text-neutral-500">{c.counterparty}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-neutral-500">{c.expiry}</p>
                  <p className="mt-0.5 text-[10px] text-neutral-400">
                    {c.renewal} renewal
                  </p>
                </div>
                <div className="w-20 shrink-0 text-right">
                  {c.action ? (
                    <span className="text-xs font-medium text-amber-700">
                      Action needed
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-emerald-700">
                      On track
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DarkShell>
  );
}
