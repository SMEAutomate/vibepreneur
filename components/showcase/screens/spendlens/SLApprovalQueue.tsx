import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Approvals" },
  { icon: "▣", label: "Budgets" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const QUEUE_ITEMS = [
  {
    requester: "Maya Chen",
    department: "Engineering",
    amount: "$12,400",
    category: "Software",
    urgency: "High",
    date: "Mar 3",
  },
  {
    requester: "James Park",
    department: "Marketing",
    amount: "$8,750",
    category: "Advertising",
    urgency: "High",
    date: "Mar 2",
  },
  {
    requester: "Lisa Patel",
    department: "Sales",
    amount: "$6,200",
    category: "Travel",
    urgency: "Medium",
    date: "Mar 2",
  },
  {
    requester: "Tom Rivera",
    department: "Engineering",
    amount: "$5,100",
    category: "Infrastructure",
    urgency: "High",
    date: "Mar 1",
  },
  {
    requester: "Sarah Kim",
    department: "Operations",
    amount: "$4,800",
    category: "Equipment",
    urgency: "Medium",
    date: "Mar 1",
  },
  {
    requester: "Alex Novak",
    department: "HR",
    amount: "$3,950",
    category: "Training",
    urgency: "Low",
    date: "Feb 28",
  },
  {
    requester: "Rachel Wong",
    department: "Marketing",
    amount: "$3,200",
    category: "Events",
    urgency: "Medium",
    date: "Feb 28",
  },
  {
    requester: "David Liu",
    department: "Engineering",
    amount: "$2,800",
    category: "Software",
    urgency: "Low",
    date: "Feb 27",
  },
];

const URGENCY_BREAKDOWN = [
  { level: "High", count: 3, amount: "$26.3K", color: "bg-red-500" },
  { level: "Medium", count: 3, amount: "$14.2K", color: "bg-amber-500" },
  { level: "Low", count: 2, amount: "$6.7K", color: "bg-neutral-300" },
];

function urgencyBadge(urgency: string): string {
  if (urgency === "High") return "bg-red-50 text-red-700";
  if (urgency === "Medium") return "bg-amber-50 text-amber-700";
  return "bg-neutral-100 text-neutral-600";
}

export function SLApprovalQueue() {
  return (
    <CompactShell
      productName="SpendLens"
      accentColor="amber"
      navItems={NAV_ITEMS}
      activeNav="Approvals"
      title="Approval Queue"
      subtitle="14 pending requests"
      breadcrumb={["SpendLens", "Approvals"]}
      actions={
        <button className="rounded-md bg-amber-600 px-3 py-1.5 text-xs font-medium text-white">
          Bulk approve
        </button>
      }
    >
      <div className="grid gap-5 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <div className="rounded-md border border-neutral-200 bg-white">
            <div className="bg-neutral-50 px-4 py-2">
              <h2 className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
                Pending Requests
              </h2>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-50 text-left text-[10px] uppercase tracking-wider text-neutral-500">
                  <th className="px-4 py-2 font-medium">Requester</th>
                  <th className="px-3 py-2 font-medium">Dept</th>
                  <th className="px-3 py-2 font-medium">Category</th>
                  <th className="px-3 py-2 font-medium">Amount</th>
                  <th className="px-3 py-2 font-medium">Urgency</th>
                  <th className="px-3 py-2 font-medium">Date</th>
                  <th className="px-3 py-2 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {QUEUE_ITEMS.map((item) => (
                  <tr key={item.requester}>
                    <td className="px-4 py-2.5 text-xs font-medium text-neutral-900">
                      {item.requester}
                    </td>
                    <td className="px-3 py-2.5 text-xs text-neutral-600">
                      {item.department}
                    </td>
                    <td className="px-3 py-2.5 text-xs text-neutral-600">
                      {item.category}
                    </td>
                    <td className="px-3 py-2.5 font-mono text-sm font-semibold tabular-nums text-neutral-800">
                      {item.amount}
                    </td>
                    <td className="px-3 py-2.5">
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${urgencyBadge(item.urgency)}`}
                      >
                        {item.urgency}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-neutral-500">
                      {item.date}
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex gap-1.5">
                        <button className="rounded bg-emerald-600 px-2 py-1 text-[10px] font-medium text-white">
                          Approve
                        </button>
                        <button className="rounded bg-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-700">
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-md border border-t-2 border-neutral-200 border-t-amber-400 bg-white p-4">
            <h2 className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
              Summary
            </h2>
            <div className="mt-3 space-y-3">
              <div>
                <p className="text-[10px] text-neutral-500">Total Pending</p>
                <p className="mt-0.5 font-mono text-lg font-semibold tabular-nums text-neutral-900">
                  $47.2K
                </p>
              </div>
              <div>
                <p className="text-[10px] text-neutral-500">Avg Wait Time</p>
                <p className="mt-0.5 font-mono text-lg font-semibold tabular-nums text-neutral-900">
                  1.4 days
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-neutral-200 bg-white p-4">
            <h2 className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
              By Urgency
            </h2>
            <div className="mt-3 space-y-2.5">
              {URGENCY_BREAKDOWN.map((u) => (
                <div key={u.level}>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-sm ${u.color}`} />
                      <span className="font-medium text-neutral-700">
                        {u.level}
                      </span>
                    </div>
                    <span className="font-mono tabular-nums text-neutral-500">
                      {u.amount}
                    </span>
                  </div>
                  <p className="mt-0.5 pl-3.5 text-[10px] text-neutral-400">
                    {u.count} requests
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
