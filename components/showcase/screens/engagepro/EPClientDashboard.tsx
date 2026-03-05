import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Clients" },
  { icon: "◎", label: "Proposals" },
  { icon: "▣", label: "Engagements" },
  { icon: "◈", label: "Billing" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Active Clients", value: "18" },
  { label: "Revenue This Month", value: "$47.2K" },
  { label: "Proposals Pending", value: "4" },
  { label: "Avg Engagement Length", value: "4.2 months" },
];

const CLIENTS = [
  {
    company: "TechCorp",
    status: "Active",
    revenue: "$8,200",
    health: 5,
    action: "Quarterly review",
    lastContact: "Mar 1",
  },
  {
    company: "Meridian Solutions",
    status: "Active",
    revenue: "$6,500",
    health: 4,
    action: "Scope extension",
    lastContact: "Feb 28",
  },
  {
    company: "Atlas Group",
    status: "Proposal",
    revenue: "$0",
    health: 3,
    action: "Follow up on proposal",
    lastContact: "Feb 25",
  },
  {
    company: "Pinnacle Ventures",
    status: "Active",
    revenue: "$5,800",
    health: 5,
    action: "Invoice due",
    lastContact: "Mar 2",
  },
  {
    company: "Redwood Analytics",
    status: "Active",
    revenue: "$9,100",
    health: 2,
    action: "Address feedback",
    lastContact: "Feb 18",
  },
  {
    company: "Sterling Partners",
    status: "Completed",
    revenue: "$4,200",
    health: 4,
    action: "Case study request",
    lastContact: "Feb 22",
  },
  {
    company: "Horizon Digital",
    status: "Proposal",
    revenue: "$0",
    health: 3,
    action: "Send revised pricing",
    lastContact: "Feb 27",
  },
  {
    company: "Northgate Industries",
    status: "Active",
    revenue: "$13,400",
    health: 1,
    action: "Escalation meeting",
    lastContact: "Feb 10",
  },
];

function statusBadge(status: string): string {
  if (status === "Active") return "bg-emerald-50 text-emerald-700";
  if (status === "Proposal") return "bg-blue-50 text-blue-700";
  return "bg-neutral-100 text-neutral-600";
}

function healthColor(score: number): string {
  if (score >= 4) return "text-emerald-500";
  if (score === 3) return "text-amber-500";
  return "text-red-500";
}

function healthLabel(score: number): string {
  if (score >= 4) return "Healthy";
  if (score === 3) return "Neutral";
  return "At Risk";
}

export function EPClientDashboard() {
  return (
    <SoftShell
      productName="EngagePro"
      accentColor="blue"
      navItems={NAV_ITEMS}
      activeNav="Clients"
      title="Client Dashboard"
      subtitle="Active relationships"
      actions={
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-medium text-white">
          + New client
        </button>
      }
    >
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-blue-100/50 bg-white p-5 shadow-sm"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-blue-400">
                {kpi.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-neutral-900">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-blue-100/50 bg-white shadow-sm">
          <div className="border-b border-blue-50 px-6 py-3">
            <h2 className="text-sm font-semibold text-neutral-900">Clients</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-blue-50 text-left text-[10px] font-medium uppercase tracking-wider text-blue-500">
                <th className="px-6 py-3">Company</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Monthly Revenue</th>
                <th className="px-4 py-3">Health</th>
                <th className="px-4 py-3">Next Action</th>
                <th className="px-4 py-3">Last Contact</th>
              </tr>
            </thead>
            <tbody>
              {CLIENTS.map((c) => (
                <tr
                  key={c.company}
                  className="border-b border-blue-50/50 last:border-0"
                >
                  <td className="px-6 py-3 text-sm font-medium text-neutral-900">
                    {c.company}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusBadge(c.status)}`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-sm font-medium text-neutral-800">
                    {c.revenue}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-sm ${healthColor(c.health)}`}>
                      {"●"}{" "}
                      <span className="text-xs">{healthLabel(c.health)}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-neutral-600">
                    {c.action}
                  </td>
                  <td className="px-4 py-3 text-xs text-neutral-500">
                    {c.lastContact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SoftShell>
  );
}
