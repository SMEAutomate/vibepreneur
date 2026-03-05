import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Approvals" },
  { icon: "▣", label: "Budgets" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const DEPARTMENTS = [
  {
    name: "Engineering",
    budget: "$400K",
    used: 78,
    spent: "$312K",
    remaining: "$88K",
  },
  {
    name: "Marketing",
    budget: "$250K",
    used: 92,
    spent: "$230K",
    remaining: "$20K",
  },
  {
    name: "Sales",
    budget: "$180K",
    used: 64,
    spent: "$115K",
    remaining: "$65K",
  },
  {
    name: "Operations",
    budget: "$150K",
    used: 71,
    spent: "$107K",
    remaining: "$43K",
  },
  { name: "HR", budget: "$120K", used: 45, spent: "$54K", remaining: "$66K" },
];

const AT_RISK = [
  {
    department: "Marketing",
    projected: "$268K",
    overrun: "+$18K",
    pct: "107%",
  },
  {
    department: "Engineering",
    projected: "$418K",
    overrun: "+$18K",
    pct: "105%",
  },
];

function utilizationColor(pct: number): string {
  if (pct > 95) return "bg-red-500";
  if (pct >= 80) return "bg-amber-500";
  return "bg-emerald-500";
}

function utilizationBadge(pct: number): string {
  if (pct > 95) return "text-red-600";
  if (pct >= 80) return "text-amber-600";
  return "text-emerald-600";
}

export function SLBudgetTracker() {
  return (
    <CompactShell
      productName="SpendLens"
      accentColor="amber"
      navItems={NAV_ITEMS}
      activeNav="Budgets"
      title="Budget Tracker"
      subtitle="Q1 2026"
      breadcrumb={["SpendLens", "Budgets"]}
      actions={
        <button className="rounded-md bg-amber-600 px-3 py-1.5 text-xs font-medium text-white">
          Adjust budgets
        </button>
      }
    >
      <div className="space-y-5">
        <div className="rounded-md border border-neutral-200 bg-white">
          <div className="bg-neutral-50 px-4 py-2">
            <h2 className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
              Department Budgets
            </h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-50 text-left text-[10px] uppercase tracking-wider text-neutral-500">
                <th className="px-4 py-2 font-medium">Department</th>
                <th className="px-3 py-2 font-medium">Budget</th>
                <th className="px-3 py-2 font-medium">Spent</th>
                <th className="px-3 py-2 font-medium">Remaining</th>
                <th className="w-48 px-3 py-2 font-medium">Utilization</th>
                <th className="px-3 py-2 text-right font-medium">%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {DEPARTMENTS.map((dept) => (
                <tr key={dept.name}>
                  <td className="px-4 py-3 text-xs font-medium text-neutral-900">
                    {dept.name}
                  </td>
                  <td className="px-3 py-3 font-mono text-sm tabular-nums text-neutral-600">
                    {dept.budget}
                  </td>
                  <td className="px-3 py-3 font-mono text-sm font-semibold tabular-nums text-neutral-800">
                    {dept.spent}
                  </td>
                  <td className="px-3 py-3 font-mono text-sm tabular-nums text-neutral-500">
                    {dept.remaining}
                  </td>
                  <td className="px-3 py-3">
                    <div className="h-1.5 w-full rounded-sm bg-neutral-100">
                      <div
                        className={`h-1.5 rounded-sm ${utilizationColor(dept.used)}`}
                        style={{ width: `${dept.used}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <span
                      className={`font-mono text-xs font-bold tabular-nums ${utilizationBadge(dept.used)}`}
                    >
                      {dept.used}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-md border-l-2 border-l-amber-500 bg-amber-50 p-3">
          <h2 className="text-xs font-semibold text-amber-800">
            Overspend Forecast
          </h2>
          <p className="mt-0.5 text-[10px] text-amber-600">
            2 departments projected to exceed budget by end of quarter
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {AT_RISK.map((r) => (
              <div
                key={r.department}
                className="rounded-md border border-amber-200 bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-900">
                    {r.department}
                  </span>
                  <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-medium text-red-700">
                    {r.pct} projected
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                      Projected spend
                    </p>
                    <p className="mt-0.5 font-mono text-sm font-semibold tabular-nums text-neutral-900">
                      {r.projected}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                      Over budget
                    </p>
                    <p className="mt-0.5 font-mono text-sm font-semibold tabular-nums text-red-600">
                      {r.overrun}
                    </p>
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
