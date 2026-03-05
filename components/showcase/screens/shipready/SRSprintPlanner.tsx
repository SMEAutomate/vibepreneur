import { TopBarShell } from "../../TopBarShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Roadmap" },
  { icon: "◎", label: "Features" },
  { icon: "▣", label: "Sprints" },
  { icon: "◈", label: "Insights" },
  { icon: "⚙", label: "Settings" },
];

const SPRINT_ITEMS = [
  {
    name: "Real-time collaboration",
    points: 13,
    assignee: "KL",
    status: "done",
  },
  { name: "Custom scoring weights", points: 8, assignee: "JC", status: "done" },
  {
    name: "Stakeholder voting portal",
    points: 13,
    assignee: "MR",
    status: "in-progress",
  },
  {
    name: "Slack notifications",
    points: 5,
    assignee: "AW",
    status: "in-progress",
  },
  { name: "CSV export", points: 5, assignee: "JC", status: "todo" },
  { name: "Dependency mapping", points: 20, assignee: "KL", status: "todo" },
];

const STATUS_COLORS: Record<string, string> = {
  done: "bg-emerald-50 text-emerald-700",
  "in-progress": "bg-amber-50 text-amber-700",
  todo: "bg-neutral-100 text-neutral-500",
};

const STATUS_LABELS: Record<string, string> = {
  done: "Done",
  "in-progress": "In progress",
  todo: "To do",
};

const SPRINT_GOALS = [
  "Launch collaboration MVP for beta users",
  "Complete scoring engine with custom weights",
  "Ship stakeholder voting for enterprise pilot",
];

const VELOCITY = [
  { sprint: "Sprint 12", points: 72 },
  { sprint: "Sprint 13", points: 68 },
  { sprint: "Sprint 14", points: 64 },
];

export function SRSprintPlanner() {
  const totalPoints = SPRINT_ITEMS.reduce((sum, item) => sum + item.points, 0);
  const capacity = 80;
  const pct = Math.round((totalPoints / capacity) * 100);

  return (
    <TopBarShell
      productName="ShipReady"
      accentColor="rose"
      navItems={NAV_ITEMS}
      activeNav="Sprints"
      title="Sprint Planner"
      subtitle="Sprint 14 (Mar 3-14)"
      actions={
        <button className="rounded-md bg-rose-600 px-3 py-1.5 text-xs font-medium text-white">
          Complete sprint
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-neutral-900">
                Capacity
              </h2>
              <span className="text-xs text-neutral-500">
                {totalPoints}/{capacity} points ({pct}%)
              </span>
            </div>
            <div className="mt-3 h-2.5 w-full rounded-md bg-neutral-100">
              <div
                className="h-2.5 rounded-md bg-rose-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <div className="rounded-xl bg-white shadow-sm">
            <div className="border-b border-neutral-100 px-4 py-3">
              <h2 className="text-sm font-semibold text-neutral-900">
                Sprint Items
              </h2>
            </div>
            <div className="divide-y divide-neutral-100">
              {SPRINT_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 px-4 py-3"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-neutral-900">
                      {item.name}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-neutral-600">
                    {item.points} pts
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-[10px] font-bold text-rose-700">
                    {item.assignee}
                  </div>
                  <span
                    className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${STATUS_COLORS[item.status]}`}
                  >
                    {STATUS_LABELS[item.status]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-neutral-900">
              Sprint Goals
            </h3>
            <div className="mt-3 space-y-2">
              {SPRINT_GOALS.map((goal, i) => (
                <div key={goal} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-rose-100 text-[10px] font-bold text-rose-700">
                    {i + 1}
                  </span>
                  <span className="text-xs leading-relaxed text-neutral-700">
                    {goal}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-neutral-900">
              Sprint Stats
            </h3>
            <div className="mt-3 space-y-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Velocity (last 3 sprints)
                </p>
                <div className="mt-2 space-y-1.5">
                  {VELOCITY.map((v) => (
                    <div
                      key={v.sprint}
                      className="flex items-center justify-between"
                    >
                      <span className="text-xs text-neutral-500">
                        {v.sprint}
                      </span>
                      <span className="text-xs font-bold text-neutral-800">
                        {v.points} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-neutral-100 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">
                    Carry-over items
                  </span>
                  <span className="text-xs font-bold text-amber-600">2</span>
                </div>
              </div>
              <div className="border-t border-neutral-100 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">
                    Team capacity
                  </span>
                  <span className="text-xs font-bold text-neutral-800">
                    4 engineers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopBarShell>
  );
}
