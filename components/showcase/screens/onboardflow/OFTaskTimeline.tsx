import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Onboardings" },
  { icon: "▣", label: "Templates" },
  { icon: "◈", label: "Portal" },
  { icon: "⚙", label: "Settings" },
];

const PHASES = [
  {
    name: "Pre-boarding",
    range: "Days -7 to 0",
    color: "bg-cyan-100 text-cyan-800",
    barColor: "bg-cyan-200",
    width: "28%",
    tasks: [
      { task: "Contract signed", status: "done", assignee: "HR" },
      { task: "Equipment ordered", status: "done", assignee: "IT" },
      { task: "Accounts created", status: "done", assignee: "IT" },
    ],
  },
  {
    name: "Day 1",
    range: "Day 1",
    color: "bg-cyan-200 text-cyan-900",
    barColor: "bg-cyan-300",
    width: "14%",
    tasks: [
      { task: "Welcome session", status: "done", assignee: "HR" },
      { task: "Team intro", status: "done", assignee: "Manager" },
      { task: "Workspace setup", status: "done", assignee: "IT" },
    ],
  },
  {
    name: "Week 1",
    range: "Days 2-5",
    color: "bg-cyan-300 text-cyan-900",
    barColor: "bg-cyan-400",
    width: "28%",
    tasks: [
      { task: "Security training", status: "done", assignee: "Security" },
      { task: "Product overview", status: "in-progress", assignee: "PM" },
      {
        task: "Dev environment setup",
        status: "in-progress",
        assignee: "Buddy",
      },
    ],
  },
  {
    name: "Week 2",
    range: "Days 8-12",
    color: "bg-cyan-400 text-cyan-900",
    barColor: "bg-cyan-500",
    width: "28%",
    tasks: [
      { task: "First task assigned", status: "pending", assignee: "Manager" },
      { task: "Buddy check-in", status: "pending", assignee: "Buddy" },
      { task: "Manager 1:1", status: "pending", assignee: "Manager" },
    ],
  },
  {
    name: "Week 3-4",
    range: "Days 15-28",
    color: "bg-cyan-500 text-white",
    barColor: "bg-cyan-600",
    width: "42%",
    tasks: [
      { task: "First PR", status: "pending", assignee: "Alex" },
      { task: "Performance baseline", status: "pending", assignee: "Manager" },
      { task: "30-day review", status: "pending", assignee: "HR" },
    ],
  },
];

function statusStyle(status: string): string {
  if (status === "done") return "bg-emerald-50 text-emerald-700";
  if (status === "in-progress") return "bg-cyan-50 text-cyan-700";
  return "bg-neutral-100 text-neutral-500";
}

function statusLabel(status: string): string {
  if (status === "done") return "Done";
  if (status === "in-progress") return "In Progress";
  return "Pending";
}

export function OFTaskTimeline() {
  return (
    <SoftShell
      productName="OnboardFlow"
      accentColor="cyan"
      navItems={NAV_ITEMS}
      activeNav="Onboardings"
      title="Task Timeline"
      subtitle="Alex Thompson, Senior Engineer"
      actions={
        <button className="rounded-xl bg-cyan-600 px-4 py-2 text-xs font-medium text-white">
          Edit timeline
        </button>
      }
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-cyan-100/50 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-900">
            Onboarding Phases
          </h2>
          <div className="mt-4 space-y-3">
            {PHASES.map((phase) => (
              <div key={phase.name} className="flex items-center gap-4">
                <span className="w-20 shrink-0 text-xs font-medium text-neutral-500">
                  {phase.name}
                </span>
                <div className="flex-1">
                  <div
                    className={`flex h-8 items-center rounded-full ${phase.barColor} px-3`}
                    style={{ width: phase.width }}
                  >
                    <span className="text-[10px] font-medium text-cyan-900">
                      {phase.range}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {PHASES.map((phase) => (
            <div key={phase.name} className="border-l-3 border-l-cyan-400 pl-4">
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${phase.color}`}
                >
                  {phase.name}
                </span>
                <span className="text-xs text-neutral-400">{phase.range}</span>
              </div>
              <div className="mt-3 space-y-2">
                {phase.tasks.map((t) => (
                  <div
                    key={t.task}
                    className="flex items-center justify-between rounded-2xl border border-cyan-100/50 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-lg text-[10px] ${
                          t.status === "done"
                            ? "bg-emerald-100 text-emerald-600"
                            : t.status === "in-progress"
                              ? "bg-cyan-100 text-cyan-600"
                              : "bg-neutral-100 text-neutral-400"
                        }`}
                      >
                        {t.status === "done"
                          ? "✓"
                          : t.status === "in-progress"
                            ? "●"
                            : "○"}
                      </span>
                      <span className="text-sm text-neutral-700">{t.task}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl bg-cyan-50 px-2 py-0.5 text-[10px] text-cyan-600">
                        {t.assignee}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusStyle(t.status)}`}
                      >
                        {statusLabel(t.status)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SoftShell>
  );
}
