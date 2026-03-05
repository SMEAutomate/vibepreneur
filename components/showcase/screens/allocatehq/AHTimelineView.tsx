import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Resources" },
  { icon: "◎", label: "Capacity" },
  { icon: "▣", label: "Timeline" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const PROJECTS = [
  {
    name: "Phoenix v2",
    team: 6,
    start: 0,
    end: 3,
    status: "On Track",
    statusColor: "text-lime-700",
    milestones: [1, 3],
  },
  {
    name: "Data Migration",
    team: 4,
    start: 0,
    end: 2,
    status: "At Risk",
    statusColor: "text-amber-700",
    milestones: [2],
  },
  {
    name: "Mobile App",
    team: 5,
    start: 1,
    end: 4,
    status: "On Track",
    statusColor: "text-lime-700",
    milestones: [2, 4],
  },
  {
    name: "API Rebuild",
    team: 4,
    start: 1,
    end: 5,
    status: "Behind",
    statusColor: "text-red-700",
    milestones: [3, 5],
  },
  {
    name: "Brand Refresh",
    team: 3,
    start: 2,
    end: 4,
    status: "On Track",
    statusColor: "text-lime-700",
    milestones: [4],
  },
  {
    name: "Analytics Platform",
    team: 5,
    start: 3,
    end: 5,
    status: "On Track",
    statusColor: "text-lime-700",
    milestones: [5],
  },
];

const DEPENDENCIES = [
  "API Rebuild depends on Data Migration completion",
  "Mobile App blocked by API Rebuild Phase 1",
  "Analytics Platform requires Brand Refresh assets",
];

const UPCOMING_MILESTONES = [
  {
    date: "Mar 7",
    project: "Data Migration",
    description: "Schema validation complete",
  },
  {
    date: "Mar 14",
    project: "Phoenix v2",
    description: "Beta release to internal users",
  },
  {
    date: "Mar 21",
    project: "Mobile App",
    description: "Design review sign-off",
  },
  {
    date: "Apr 4",
    project: "API Rebuild",
    description: "Phase 1 endpoints deployed",
  },
  {
    date: "Apr 18",
    project: "Brand Refresh",
    description: "Style guide finalized",
  },
];

function barColor(status: string): string {
  if (status === "At Risk") return "bg-amber-400";
  if (status === "Behind") return "bg-red-400";
  return "bg-lime-500";
}

function statusDot(status: string): string {
  if (status === "At Risk") return "bg-amber-500";
  if (status === "Behind") return "bg-red-500";
  return "bg-lime-500";
}

export function AHTimelineView() {
  return (
    <CompactShell
      productName="AllocateHQ"
      accentColor="lime"
      navItems={NAV_ITEMS}
      activeNav="Timeline"
      title="Timeline View"
      subtitle="Q1-Q2 2026"
      breadcrumb={["AllocateHQ", "Timeline"]}
      actions={
        <button className="rounded-lg bg-lime-600 px-3 py-1.5 text-xs font-medium text-white">
          + Add project
        </button>
      }
    >
      <div className="space-y-5">
        <div className="border-neutral-150 rounded-lg border bg-white p-4">
          <h2 className="text-xs font-semibold text-neutral-800">
            Project Timeline
          </h2>
          <div className="mt-4">
            <div className="mb-3 flex">
              <div className="w-44 shrink-0" />
              <div className="flex flex-1">
                {MONTHS.map((m) => (
                  <div
                    key={m}
                    className="flex-1 border-l border-neutral-100 px-2 text-[10px] font-medium uppercase tracking-wider text-neutral-400"
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2.5">
              {PROJECTS.map((proj) => (
                <div key={proj.name} className="flex items-center">
                  <div className="w-44 shrink-0 pr-4">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-medium text-neutral-800">
                        {proj.name}
                      </p>
                      <div className="flex items-center gap-1">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${statusDot(proj.status)}`}
                        />
                        <span
                          className={`text-[10px] font-medium ${proj.statusColor}`}
                        >
                          {proj.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-[10px] text-neutral-400">
                      {proj.team} members
                    </p>
                  </div>
                  <div className="relative flex flex-1">
                    {MONTHS.map((m) => (
                      <div
                        key={m}
                        className="flex-1 border-l border-neutral-50"
                        style={{ height: 28 }}
                      />
                    ))}
                    <div
                      className={`absolute top-1 h-3 rounded-full ${barColor(proj.status)}`}
                      style={{
                        left: `${(proj.start / MONTHS.length) * 100}%`,
                        width: `${((proj.end - proj.start) / MONTHS.length) * 100}%`,
                      }}
                    >
                      {proj.milestones.map((m) => (
                        <span
                          key={m}
                          className="absolute -top-1 -translate-x-1/2 text-xs leading-5 text-lime-600"
                          style={{
                            left: `${((m - proj.start) / (proj.end - proj.start)) * 100}%`,
                          }}
                        >
                          ◆
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="border-neutral-150 rounded-lg border bg-white p-4">
            <h2 className="text-xs font-semibold text-neutral-800">
              Dependencies
            </h2>
            <div className="mt-3 space-y-2">
              {DEPENDENCIES.map((dep) => (
                <div
                  key={dep}
                  className="flex items-start gap-2 rounded-lg border border-neutral-100 p-3 text-xs text-neutral-600"
                >
                  <span className="mt-0.5 shrink-0 text-[10px] text-amber-500">
                    ◆
                  </span>
                  {dep}
                </div>
              ))}
            </div>
          </div>

          <div className="border-neutral-150 rounded-lg border bg-white p-4">
            <h2 className="text-xs font-semibold text-neutral-800">
              Upcoming Milestones
            </h2>
            <div className="mt-3 space-y-2">
              {UPCOMING_MILESTONES.map((ms) => (
                <div
                  key={ms.description}
                  className="flex items-start gap-3 rounded-lg border border-neutral-100 p-3"
                >
                  <span className="shrink-0 font-mono text-xs font-medium tabular-nums text-lime-700">
                    {ms.date}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-neutral-800">
                      {ms.project}
                    </p>
                    <p className="text-[10px] text-neutral-500">
                      {ms.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CompactShell>
  );
}
