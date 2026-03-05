import { MinimalShell } from "../../MinimalShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Workflows" },
  { icon: "◎", label: "Library" },
  { icon: "▣", label: "Runs" },
  { icon: "◈", label: "Metrics" },
  { icon: "⚙", label: "Settings" },
];

const STEPS = [
  {
    icon: "⚡",
    label: "Trigger: Employee Marked as Leaving",
    status: "Active",
    team: "HR",
  },
  { icon: "✉", label: "Notify Manager", status: "Active", team: "HR" },
  { icon: "🔒", label: "Revoke Access", status: "Active", team: "IT" },
  { icon: "📦", label: "Collect Equipment", status: "Pending", team: "IT" },
  { icon: "🗣", label: "Exit Interview", status: "Pending", team: "HR" },
  { icon: "💰", label: "Final Payroll", status: "Active", team: "Finance" },
  { icon: "🗃", label: "Archive Records", status: "Pending", team: "HR" },
];

const TRIGGER_CONFIG = [
  { label: "Event Source", value: "HRIS Webhook" },
  { label: "Trigger Field", value: "employment_status = 'leaving'" },
  { label: "Delay", value: "None (immediate)" },
  { label: "Conditions", value: "Active employees only" },
  { label: "Last Triggered", value: "2 days ago" },
];

export function FFWorkflowCanvas() {
  return (
    <MinimalShell
      productName="FlowForge"
      accentColor="violet"
      navItems={NAV_ITEMS}
      activeNav="Workflows"
      title="Workflow Canvas"
      subtitle="Employee Offboarding Process"
      actions={
        <button className="rounded-xl bg-violet-600 px-4 py-2 text-xs font-medium text-white">
          Publish workflow
        </button>
      }
    >
      <div className="flex gap-6">
        <div className="flex-1 space-y-1">
          {STEPS.map((step, i) => (
            <div key={step.label}>
              <div className="rounded-xl border-2 border-violet-200 bg-violet-50/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-sm">
                      {step.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        {step.label}
                      </p>
                      <p className="text-xs text-neutral-400">
                        Assigned to {step.team}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`rounded-lg px-2 py-0.5 text-[10px] font-medium ${
                      step.status === "Active"
                        ? "bg-violet-500 text-white"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {step.status}
                  </span>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <span className="text-lg font-bold text-violet-400">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-72 shrink-0">
          <div className="rounded-2xl bg-white p-5 shadow">
            <h2 className="text-sm font-semibold text-neutral-900">
              Trigger Configuration
            </h2>
            <div className="mt-4 space-y-4">
              {TRIGGER_CONFIG.map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full rounded-xl bg-violet-600 px-4 py-2 text-xs font-medium text-white">
              Edit trigger
            </button>
          </div>
        </div>
      </div>
    </MinimalShell>
  );
}
