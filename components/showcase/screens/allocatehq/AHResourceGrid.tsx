import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Resources" },
  { icon: "◎", label: "Capacity" },
  { icon: "▣", label: "Timeline" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const PROJECTS = [
  "Phoenix v2",
  "Data Migration",
  "Mobile App",
  "API Rebuild",
  "Brand Refresh",
];

const TEAM = [
  {
    name: "Sarah M.",
    role: "Design Lead",
    total: 95,
    alloc: [30, 0, 25, 0, 40],
  },
  {
    name: "Mike T.",
    role: "Senior Dev",
    total: 110,
    alloc: [40, 30, 0, 40, 0],
  },
  { name: "Lisa C.", role: "PM", total: 75, alloc: [25, 15, 20, 15, 0] },
  {
    name: "James R.",
    role: "Backend Dev",
    total: 85,
    alloc: [0, 35, 0, 50, 0],
  },
  {
    name: "Priya K.",
    role: "Frontend Dev",
    total: 105,
    alloc: [35, 0, 45, 25, 0],
  },
  { name: "Omar S.", role: "QA Lead", total: 60, alloc: [20, 15, 10, 15, 0] },
  { name: "Rachel W.", role: "DevOps", total: 90, alloc: [15, 25, 20, 30, 0] },
  {
    name: "David L.",
    role: "UX Designer",
    total: 115,
    alloc: [25, 0, 30, 20, 40],
  },
];

function cellColor(pct: number): string {
  if (pct === 0) return "bg-neutral-50 text-neutral-300";
  if (pct <= 30) return "bg-lime-100 text-lime-800";
  if (pct <= 80) return "bg-amber-100 text-amber-800";
  return "bg-red-100 text-red-800";
}

function totalColor(pct: number): string {
  if (pct <= 80) return "text-lime-700";
  if (pct <= 100) return "text-amber-700";
  return "text-red-700";
}

export function AHResourceGrid() {
  return (
    <CompactShell
      productName="AllocateHQ"
      accentColor="lime"
      navItems={NAV_ITEMS}
      activeNav="Resources"
      title="Resource Grid"
      subtitle="Team allocation overview"
      breadcrumb={["AllocateHQ", "Resources"]}
      actions={
        <button className="rounded-lg bg-lime-600 px-3 py-1.5 text-xs font-medium text-white">
          + Add resource
        </button>
      }
    >
      <div className="space-y-5">
        <div className="border-neutral-150 rounded-lg border bg-white p-4">
          <h2 className="text-xs font-semibold text-neutral-800">
            Allocation Heatmap
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="pb-2.5 pr-4 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                    Team Member
                  </th>
                  {PROJECTS.map((p) => (
                    <th
                      key={p}
                      className="pb-2.5 pr-2 text-center text-[10px] font-medium uppercase tracking-wider text-neutral-500"
                    >
                      {p}
                    </th>
                  ))}
                  <th className="pb-2.5 text-center text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {TEAM.map((member) => (
                  <tr
                    key={member.name}
                    className="border-b border-neutral-100 last:border-0"
                  >
                    <td className="py-2.5 pr-4">
                      <p className="text-xs font-medium text-neutral-800">
                        {member.name}
                      </p>
                      <p className="text-[10px] text-neutral-400">
                        {member.role}
                      </p>
                    </td>
                    {member.alloc.map((pct, i) => (
                      <td key={PROJECTS[i]} className="py-2.5 pr-2 text-center">
                        <span
                          className={`inline-block w-12 rounded py-2 text-center font-mono text-[10px] font-bold ${cellColor(pct)}`}
                        >
                          {pct > 0 ? `${pct}%` : "-"}
                        </span>
                      </td>
                    ))}
                    <td className="py-2.5 text-center">
                      <span
                        className={`font-mono text-sm font-bold ${totalColor(member.total)}`}
                      >
                        {member.total}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Under-allocated (<80%)", count: 3, color: "bg-lime-500" },
            { label: "Optimal (80-100%)", count: 3, color: "bg-amber-500" },
            { label: "Over-allocated (>100%)", count: 2, color: "bg-red-500" },
          ].map((s) => (
            <div
              key={s.label}
              className="border-neutral-150 rounded-lg border bg-white p-4"
            >
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${s.color}`} />
                <p className="text-[10px] text-neutral-500">{s.label}</p>
              </div>
              <p className="mt-1 text-xl font-bold text-neutral-900">
                {s.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CompactShell>
  );
}
