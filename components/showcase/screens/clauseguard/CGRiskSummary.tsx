import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Review Queue" },
  { icon: "▣", label: "Risk Analysis" },
  { icon: "◈", label: "Templates" },
  { icon: "⚙", label: "Settings" },
];

const RISK_DIST = [
  { level: "Low", pct: 62, color: "bg-emerald-500", dot: "bg-emerald-500" },
  { level: "Medium", pct: 24, color: "bg-amber-400", dot: "bg-amber-400" },
  { level: "High", pct: 11, color: "bg-orange-500", dot: "bg-orange-500" },
  { level: "Critical", pct: 3, color: "bg-red-600", dot: "bg-red-600" },
];

const FLAGGED_TYPES = [
  { type: "Indemnification", count: 34, trend: "up" },
  { type: "Liability limitation", count: 28, trend: "down" },
  { type: "Termination for convenience", count: 22, trend: "up" },
  { type: "Auto-renewal", count: 19, trend: "up" },
  { type: "IP assignment", count: 15, trend: "down" },
  { type: "Non-compete", count: 11, trend: "up" },
];

const COMPLIANCE = [
  { standard: "GDPR", pct: 94 },
  { standard: "SOC 2", pct: 89 },
  { standard: "Industry-specific", pct: 91 },
];

const RECENT_FLAGS = [
  {
    contract: "Vendor Supply Contract",
    id: "VSC-2025-0044",
    clause: "Indemnification",
    description:
      "Unlimited indemnification obligation with no cap or carve-outs",
  },
  {
    contract: "Master Services Agreement",
    id: "MSA-2025-0042",
    clause: "Termination",
    description: "30-day termination window only available to counterparty",
  },
  {
    contract: "Employment Contract (Exec)",
    id: "EC-2025-0048",
    clause: "Non-compete",
    description: "24-month non-compete across all industries and geographies",
  },
  {
    contract: "SaaS Subscription Agreement",
    id: "SSA-2025-0043",
    clause: "Liability cap",
    description: "Liability capped at 1x monthly fees instead of annual",
  },
];

export function CGRiskSummary() {
  return (
    <DarkShell
      productName="ClauseGuard"
      accentColor="slate"
      navItems={NAV_ITEMS}
      activeNav="Risk Analysis"
      title="Risk Summary"
      subtitle="Portfolio risk overview"
      actions={
        <button className="rounded border border-slate-300 bg-slate-700 px-3 py-1.5 text-xs font-medium text-white">
          Export report
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded border border-neutral-300 bg-white p-5">
            <h2 className="border-b border-neutral-200 pb-3 text-sm font-semibold text-neutral-800">
              Risk Distribution
            </h2>
            <div className="mt-4 space-y-3">
              {RISK_DIST.map((r) => (
                <div key={r.level} className="flex items-center gap-4">
                  <div className="flex w-16 shrink-0 items-center gap-2">
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${r.dot}`}
                    />
                    <span className="text-xs font-medium text-neutral-600">
                      {r.level}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div
                      className={`flex h-7 items-center rounded px-3 ${r.color}`}
                      style={{ width: `${Math.max(r.pct, 8)}%` }}
                    >
                      <span className="text-xs font-semibold text-white">
                        {r.pct}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded border border-neutral-300 bg-white p-5">
            <h2 className="border-b border-neutral-200 pb-3 text-sm font-semibold text-neutral-800">
              Most Flagged Clause Types
            </h2>
            <div className="mt-4 space-y-2.5">
              {FLAGGED_TYPES.map((f, i) => (
                <div key={f.type} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-400">{i + 1}.</span>
                    <span className="text-sm text-neutral-700">{f.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-neutral-800">
                      {f.count}
                    </span>
                    <span
                      className={`text-xs ${f.trend === "up" ? "text-red-500" : "text-emerald-500"}`}
                    >
                      {f.trend === "up" ? "↑" : "↓"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded border border-neutral-300 bg-white p-5">
          <h2 className="border-b border-neutral-200 pb-3 text-sm font-semibold text-neutral-800">
            Compliance Status
          </h2>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {COMPLIANCE.map((c) => (
              <div
                key={c.standard}
                className="rounded border border-neutral-200 p-4 text-center"
              >
                <p className="text-xs font-medium text-neutral-500">
                  {c.standard}
                </p>
                <p className="mt-2 text-2xl font-bold text-neutral-900">
                  {c.pct}%
                </p>
                <div className="mx-auto mt-2 h-1 w-16 rounded bg-neutral-100">
                  <div
                    className={`h-1 rounded ${c.pct >= 90 ? "bg-emerald-500" : "bg-amber-500"}`}
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
                <p className="mt-1 text-[10px] text-neutral-400">compliant</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded border border-neutral-300 bg-white">
          <div className="border-b border-neutral-200 px-5 py-3">
            <h2 className="text-sm font-semibold text-neutral-800">
              Recent High-Risk Flags
            </h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {RECENT_FLAGS.map((f) => (
              <div
                key={f.id + f.clause}
                className="flex items-start gap-3 px-5 py-4"
              >
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-red-500" />
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs text-neutral-400">
                      {f.id}
                    </span>
                    <span className="text-sm font-medium text-neutral-900">
                      {f.contract}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-neutral-500">
                    {f.clause}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DarkShell>
  );
}
