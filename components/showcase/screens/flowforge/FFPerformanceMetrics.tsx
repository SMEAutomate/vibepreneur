import { MinimalShell } from "../../MinimalShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Workflows" },
  { icon: "◎", label: "Library" },
  { icon: "▣", label: "Runs" },
  { icon: "◈", label: "Metrics" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Total Runs", value: "3,847", change: "+12.4%", positive: true },
  { label: "Success Rate", value: "97.2%", change: "+1.8pp", positive: true },
  { label: "Time Saved", value: "412 hrs", change: "+68 hrs", positive: true },
  { label: "Error Rate", value: "2.8%", change: "-1.8pp", positive: true },
];

const TOP_WORKFLOWS = [
  {
    name: "Employee Onboarding",
    runs: 842,
    avgDuration: "4m 12s",
    success: "98.4%",
    timeSaved: "96 hrs",
  },
  {
    name: "Invoice Approval",
    runs: 634,
    avgDuration: "2m 48s",
    success: "97.8%",
    timeSaved: "78 hrs",
  },
  {
    name: "Access Provisioning",
    runs: 521,
    avgDuration: "1m 32s",
    success: "99.1%",
    timeSaved: "64 hrs",
  },
  {
    name: "PTO Request",
    runs: 498,
    avgDuration: "0m 45s",
    success: "99.6%",
    timeSaved: "52 hrs",
  },
  {
    name: "Expense Reporting",
    runs: 412,
    avgDuration: "3m 21s",
    success: "96.1%",
    timeSaved: "48 hrs",
  },
  {
    name: "Lead Routing",
    runs: 387,
    avgDuration: "0m 18s",
    success: "94.3%",
    timeSaved: "38 hrs",
  },
];

const ERROR_LOG = [
  {
    workflow: "Lead Routing",
    step: "Territory Lookup",
    error: "API timeout",
    timestamp: "12 min ago",
  },
  {
    workflow: "Expense Reporting",
    step: "Receipt OCR",
    error: "Parse failure",
    timestamp: "2 hrs ago",
  },
  {
    workflow: "Invoice Approval",
    step: "Budget Check",
    error: "Missing PO number",
    timestamp: "5 hrs ago",
  },
  {
    workflow: "Access Provisioning",
    step: "Okta Sync",
    error: "Rate limit exceeded",
    timestamp: "8 hrs ago",
  },
];

function errorColor(error: string): string {
  if (error === "API timeout" || error === "Rate limit exceeded")
    return "bg-amber-100 text-amber-700";
  return "bg-red-100 text-red-700";
}

export function FFPerformanceMetrics() {
  return (
    <MinimalShell
      productName="FlowForge"
      accentColor="violet"
      navItems={NAV_ITEMS}
      activeNav="Metrics"
      title="Performance Metrics"
      subtitle="Last 30 days"
      actions={
        <button className="rounded-xl bg-violet-600 px-4 py-2 text-xs font-medium text-white">
          Export report
        </button>
      }
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div key={kpi.label} className="rounded-2xl bg-white p-5 shadow">
              <p className="text-xs text-neutral-500">{kpi.label}</p>
              <p className="mt-1 text-3xl font-bold text-violet-600">
                {kpi.value}
              </p>
              <p
                className={`mt-1 text-xs font-medium ${kpi.positive ? "text-emerald-600" : "text-red-500"}`}
              >
                {kpi.change} vs last period
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-white shadow">
          <div className="border-b border-neutral-100 px-6 py-4">
            <h2 className="text-sm font-semibold text-neutral-900">
              Top Workflows
            </h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-100 text-left text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                <th className="px-6 py-3">Workflow</th>
                <th className="px-4 py-3">Runs</th>
                <th className="px-4 py-3">Avg Duration</th>
                <th className="px-4 py-3">Success %</th>
                <th className="px-4 py-3">Time Saved</th>
              </tr>
            </thead>
            <tbody>
              {TOP_WORKFLOWS.map((w) => (
                <tr
                  key={w.name}
                  className="border-b border-neutral-50 last:border-0"
                >
                  <td className="px-6 py-3 text-sm font-medium text-neutral-900">
                    {w.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600">
                    {w.runs}
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600">
                    {w.avgDuration}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-emerald-600">
                    {w.success}
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600">
                    {w.timeSaved}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl bg-white shadow">
          <div className="border-b border-neutral-100 px-6 py-4">
            <h2 className="text-sm font-semibold text-neutral-900">
              Recent Errors
            </h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-100 text-left text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                <th className="px-6 py-3">Workflow</th>
                <th className="px-4 py-3">Step</th>
                <th className="px-4 py-3">Error</th>
                <th className="px-4 py-3">When</th>
              </tr>
            </thead>
            <tbody>
              {ERROR_LOG.map((e) => (
                <tr
                  key={`${e.workflow}-${e.step}`}
                  className="border-b border-neutral-50 last:border-0"
                >
                  <td className="px-6 py-3 text-sm font-medium text-neutral-900">
                    {e.workflow}
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600">
                    {e.step}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-lg px-2 py-0.5 text-[10px] font-medium ${errorColor(e.error)}`}
                    >
                      {e.error}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-neutral-500">
                    {e.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MinimalShell>
  );
}
