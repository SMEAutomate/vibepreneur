import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Review Queue" },
  { icon: "▣", label: "Risk Analysis" },
  { icon: "◈", label: "Templates" },
  { icon: "⚙", label: "Settings" },
];

const CONTRACTS = [
  {
    id: "MSA-2025-0042",
    name: "Master Services Agreement",
    counterparty: "Orion Labs",
    risk: 82,
    flagged: 6,
    submitted: "Feb 28",
    reviewer: "Sarah M.",
  },
  {
    id: "SSA-2025-0043",
    name: "SaaS Subscription Agreement",
    counterparty: "Pinnacle Corp",
    risk: 45,
    flagged: 3,
    submitted: "Mar 1",
    reviewer: "David K.",
  },
  {
    id: "VSC-2025-0044",
    name: "Vendor Supply Contract",
    counterparty: "Atlas Freight",
    risk: 91,
    flagged: 8,
    submitted: "Mar 1",
    reviewer: "Sarah M.",
  },
  {
    id: "PA-2025-0045",
    name: "Partnership Agreement",
    counterparty: "Nova Ventures",
    risk: 28,
    flagged: 1,
    submitted: "Mar 2",
    reviewer: "Unassigned",
  },
  {
    id: "DPA-2025-0046",
    name: "Data Processing Agreement",
    counterparty: "CloudVault Inc",
    risk: 63,
    flagged: 4,
    submitted: "Mar 2",
    reviewer: "Lisa T.",
  },
  {
    id: "LA-2025-0047",
    name: "Licensing Agreement",
    counterparty: "Prism Software",
    risk: 17,
    flagged: 0,
    submitted: "Mar 3",
    reviewer: "David K.",
  },
  {
    id: "EC-2025-0048",
    name: "Employment Contract (Exec)",
    counterparty: "Internal",
    risk: 74,
    flagged: 5,
    submitted: "Mar 3",
    reviewer: "Sarah M.",
  },
  {
    id: "CSA-2025-0049",
    name: "Consulting Services Agreement",
    counterparty: "Meridian Group",
    risk: 38,
    flagged: 2,
    submitted: "Mar 4",
    reviewer: "Lisa T.",
  },
];

const TOP_CLAUSES = [
  { type: "Indemnification", count: 8 },
  { type: "Liability cap", count: 6 },
  { type: "Termination", count: 5 },
  { type: "Auto-renewal", count: 4 },
  { type: "IP assignment", count: 3 },
];

function riskColor(score: number): string {
  if (score <= 30) return "text-emerald-700";
  if (score <= 70) return "text-amber-700";
  return "text-red-700";
}

function riskUnderline(score: number): string {
  if (score <= 30) return "border-emerald-400";
  if (score <= 70) return "border-amber-400";
  return "border-red-400";
}

function riskDot(score: number): string {
  if (score <= 30) return "bg-emerald-500";
  if (score <= 70) return "bg-amber-500";
  return "bg-red-500";
}

export function CGReviewQueue() {
  return (
    <DarkShell
      productName="ClauseGuard"
      accentColor="slate"
      navItems={NAV_ITEMS}
      activeNav="Review Queue"
      title="Review Queue"
      subtitle="18 contracts pending review"
      actions={
        <button className="rounded border border-slate-300 bg-slate-700 px-3 py-1.5 text-xs font-medium text-white">
          Assign reviewer
        </button>
      }
    >
      <div className="flex gap-5">
        <div className="flex-1 rounded border border-neutral-300 bg-white">
          <div className="border-b border-neutral-200 px-5 py-3">
            <h2 className="text-sm font-semibold text-neutral-800">
              Pending Contracts
            </h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {CONTRACTS.map((c) => (
              <div key={c.id} className="flex items-center gap-4 px-5 py-3">
                <span
                  className={`inline-block h-2 w-2 shrink-0 rounded-full ${riskDot(c.risk)}`}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs text-neutral-400">
                      {c.id}
                    </span>
                    <span className="text-sm font-medium text-neutral-900">
                      {c.name}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500">{c.counterparty}</p>
                </div>
                <div className="shrink-0 text-center">
                  <span
                    className={`inline-block border-b-2 pb-0.5 text-sm font-bold ${riskColor(c.risk)} ${riskUnderline(c.risk)}`}
                  >
                    {c.risk}
                  </span>
                  <p className="text-[10px] text-neutral-400">risk</p>
                </div>
                <div className="w-12 shrink-0 text-center">
                  <span className="text-sm font-semibold text-neutral-700">
                    {c.flagged}
                  </span>
                  <p className="text-[10px] text-neutral-400">flags</p>
                </div>
                <div className="w-20 shrink-0 text-right">
                  <p className="text-xs text-neutral-500">{c.submitted}</p>
                  <p className="text-[10px] text-neutral-400">{c.reviewer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-52 shrink-0 rounded border border-neutral-300 bg-white p-5">
          <h2 className="border-b border-neutral-200 pb-3 text-sm font-semibold text-neutral-800">
            Top Flagged Clauses
          </h2>
          <div className="mt-4 space-y-3">
            {TOP_CLAUSES.map((cl, i) => (
              <div key={cl.type} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400">{i + 1}.</span>
                  <span className="text-sm text-neutral-700">{cl.type}</span>
                </div>
                <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-bold text-slate-700">
                  {cl.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DarkShell>
  );
}
