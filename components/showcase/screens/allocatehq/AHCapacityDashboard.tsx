import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Resources" },
  { icon: "◎", label: "Capacity" },
  { icon: "▣", label: "Timeline" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Team Size", value: "24" },
  { label: "Avg Utilization", value: "82%" },
  { label: "Overallocated", value: "3" },
  { label: "Bench Available", value: "4" },
];

const CAPACITY = [
  {
    name: "Sarah M.",
    role: "Design Lead",
    allocated: 38,
    available: 40,
    pct: 95,
  },
  {
    name: "Mike T.",
    role: "Senior Dev",
    allocated: 44,
    available: 40,
    pct: 110,
  },
  { name: "Lisa C.", role: "PM", allocated: 30, available: 40, pct: 75 },
  {
    name: "James R.",
    role: "Backend Dev",
    allocated: 34,
    available: 40,
    pct: 85,
  },
  {
    name: "Priya K.",
    role: "Frontend Dev",
    allocated: 42,
    available: 40,
    pct: 105,
  },
  { name: "Omar S.", role: "QA Lead", allocated: 24, available: 40, pct: 60 },
  { name: "Rachel W.", role: "DevOps", allocated: 36, available: 40, pct: 90 },
  {
    name: "David L.",
    role: "UX Designer",
    allocated: 46,
    available: 40,
    pct: 115,
  },
];

const OVERALLOCATED = [
  {
    name: "Mike T.",
    overBy: 4,
    projects: "Phoenix v2, Data Migration, API Rebuild",
  },
  {
    name: "Priya K.",
    overBy: 2,
    projects: "Phoenix v2, Mobile App, API Rebuild",
  },
  {
    name: "David L.",
    overBy: 6,
    projects: "Phoenix v2, Mobile App, Brand Refresh",
  },
];

const BENCH = [
  { name: "Nina F.", skills: "React, TypeScript, Node.js" },
  { name: "Carlos D.", skills: "Python, Data Engineering, SQL" },
  { name: "Amy Z.", skills: "Product Design, Figma, Prototyping" },
  { name: "Tom B.", skills: "DevOps, AWS, Terraform" },
];

function barColor(pct: number): string {
  if (pct <= 80) return "bg-lime-500";
  if (pct <= 100) return "bg-amber-500";
  return "bg-red-500";
}

export function AHCapacityDashboard() {
  return (
    <CompactShell
      productName="AllocateHQ"
      accentColor="lime"
      navItems={NAV_ITEMS}
      activeNav="Capacity"
      title="Capacity Dashboard"
      subtitle="Current sprint"
      breadcrumb={["AllocateHQ", "Capacity"]}
      actions={
        <button className="rounded-lg bg-lime-600 px-3 py-1.5 text-xs font-medium text-white">
          Rebalance team
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="border-neutral-150 rounded-lg border bg-white p-4"
            >
              <p className="text-[10px] text-neutral-500">{kpi.label}</p>
              <p className="mt-1 text-xl font-bold text-neutral-900">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        <div className="border-neutral-150 rounded-lg border bg-white p-4">
          <h2 className="text-xs font-semibold text-neutral-800">
            Team Capacity
          </h2>
          <div className="mt-4 space-y-3">
            {CAPACITY.map((person) => (
              <div key={person.name} className="flex items-center gap-4">
                <div className="w-28 shrink-0">
                  <p className="text-xs font-medium text-neutral-800">
                    {person.name}
                  </p>
                  <p className="text-[10px] text-neutral-400">{person.role}</p>
                </div>
                <div className="flex-1">
                  <div className="h-2.5 w-full rounded-full bg-neutral-100">
                    <div
                      className={`h-2.5 rounded-full ${barColor(person.pct)}`}
                      style={{ width: `${Math.min(person.pct, 100)}%` }}
                    />
                  </div>
                </div>
                <span className="w-20 shrink-0 text-right font-mono text-xs tabular-nums text-neutral-500">
                  {person.allocated}h / {person.available}h
                </span>
                <span
                  className={`w-12 shrink-0 text-right font-mono text-xs font-bold tabular-nums ${
                    person.pct <= 80
                      ? "text-lime-700"
                      : person.pct <= 100
                        ? "text-amber-700"
                        : "text-red-700"
                  }`}
                >
                  {person.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-red-200 bg-red-50/30 p-4">
            <h2 className="text-xs font-semibold text-red-800">
              Overallocation Warnings
            </h2>
            <div className="mt-3 space-y-2">
              {OVERALLOCATED.map((person) => (
                <div key={person.name} className="rounded-lg bg-white p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-neutral-800">
                      {person.name}
                    </p>
                    <span className="rounded-full bg-red-100 px-2 py-0.5 font-mono text-[10px] font-bold text-red-800">
                      +{person.overBy}h
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] text-neutral-500">
                    {person.projects}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-neutral-150 rounded-lg border bg-white p-4">
            <h2 className="text-xs font-semibold text-neutral-800">
              Bench Available
            </h2>
            <div className="mt-3 space-y-2">
              {BENCH.map((person) => (
                <div
                  key={person.name}
                  className="rounded-lg border border-neutral-100 p-3"
                >
                  <p className="text-xs font-medium text-neutral-800">
                    {person.name}
                  </p>
                  <p className="mt-0.5 text-[10px] text-neutral-500">
                    {person.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CompactShell>
  );
}
