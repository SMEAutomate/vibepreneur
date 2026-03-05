import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Clients" },
  { icon: "◎", label: "Proposals" },
  { icon: "▣", label: "Engagements" },
  { icon: "◈", label: "Billing" },
  { icon: "⚙", label: "Settings" },
];

const PHASES = [
  {
    name: "Phase 1: Discovery",
    weeks: "Weeks 1-2",
    status: "complete",
    color: "bg-blue-500",
    deliverables: [
      { text: "Stakeholder interview transcripts", done: true },
      { text: "Current systems inventory", done: true },
      { text: "Preliminary findings deck", done: true },
    ],
    billing: { label: "Phase 1 Payment", amount: "$10,000", status: "Paid" },
  },
  {
    name: "Phase 2: Assessment",
    weeks: "Weeks 3-6",
    status: "in-progress",
    color: "bg-blue-400",
    deliverables: [
      { text: "Gap analysis report", done: true },
      { text: "Industry benchmark comparison", done: false },
      { text: "Technology evaluation matrix", done: false },
      { text: "Risk assessment document", done: false },
    ],
    billing: { label: "Phase 2 Payment", amount: "$20,000", status: "Due" },
    approval: "Client sign-off on gap analysis",
  },
  {
    name: "Phase 3: Roadmap",
    weeks: "Weeks 7-8",
    status: "pending",
    color: "bg-blue-300",
    deliverables: [
      { text: "Prioritized initiative list", done: false },
      { text: "Cost projection model", done: false },
      { text: "Implementation timeline", done: false },
      { text: "Final presentation deck", done: false },
    ],
    billing: {
      label: "Phase 3 Payment",
      amount: "$10,000",
      status: "Upcoming",
    },
    approval: "Final deliverable acceptance",
  },
];

function phaseStatusBadge(status: string): string {
  if (status === "complete") return "bg-emerald-50 text-emerald-700";
  if (status === "in-progress") return "bg-blue-50 text-blue-700";
  return "bg-neutral-100 text-neutral-500";
}

function phaseStatusLabel(status: string): string {
  if (status === "complete") return "Complete";
  if (status === "in-progress") return "In Progress";
  return "Pending";
}

function billingPill(status: string): string {
  if (status === "Paid") return "bg-emerald-50 text-emerald-700";
  if (status === "Due") return "bg-amber-50 text-amber-700";
  return "bg-neutral-100 text-neutral-400";
}

export function EPEngagementTimeline() {
  return (
    <SoftShell
      productName="EngagePro"
      accentColor="blue"
      navItems={NAV_ITEMS}
      activeNav="Engagements"
      title="Engagement Timeline"
      subtitle="TechCorp, In Progress"
      actions={
        <>
          <button className="rounded-xl border border-blue-200 px-4 py-2 text-xs font-medium text-blue-600">
            Export report
          </button>
          <button className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-medium text-white">
            Update status
          </button>
        </>
      }
    >
      <div className="space-y-6">
        <div className="rounded-xl border border-blue-100/50 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-900">
            Timeline Overview
          </h2>
          <div className="mt-3 flex gap-1">
            {PHASES.map((p) => (
              <div
                key={p.name}
                className={`flex h-4 flex-1 items-center justify-center rounded-full ${p.status === "pending" ? "bg-neutral-100" : p.color}`}
              >
                <p
                  className={`text-[8px] font-bold ${p.status === "pending" ? "text-neutral-500" : "text-white"}`}
                >
                  {p.name.replace(/Phase \d: /, "")}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-1">
            {PHASES.map((p) => (
              <div key={p.name} className="flex-1 text-center">
                <p className="text-[10px] text-neutral-400">{p.weeks}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PHASES.map((p, i) => (
            <div
              key={p.name}
              className="rounded-xl border border-blue-100/50 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {p.name.replace(/Phase \d: /, "")}
                  </h3>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${phaseStatusBadge(p.status)}`}
                >
                  {phaseStatusLabel(p.status)}
                </span>
              </div>
              <p className="mt-1 text-[10px] text-neutral-400">{p.weeks}</p>

              <div className="mt-4 space-y-2">
                <p className="text-[10px] font-medium uppercase tracking-wider text-blue-400">
                  Deliverables
                </p>
                {p.deliverables.map((d) => (
                  <div
                    key={d.text}
                    className="flex items-center gap-2 rounded-lg border border-blue-50 p-2.5"
                  >
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] ${d.done ? "bg-emerald-100 text-emerald-600" : "bg-blue-50 text-blue-300"}`}
                    >
                      {d.done ? "✓" : "○"}
                    </span>
                    <span
                      className={`text-xs ${d.done ? "text-neutral-500 line-through" : "text-neutral-700"}`}
                    >
                      {d.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg bg-blue-50/50 p-3">
                <p className="text-[10px] font-medium uppercase tracking-wider text-blue-400">
                  Billing Milestone
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs text-neutral-700">
                    {p.billing.label}
                  </span>
                  <span className="font-mono text-sm font-bold text-neutral-900">
                    {p.billing.amount}
                  </span>
                </div>
                <div className="mt-1">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${billingPill(p.billing.status)}`}
                  >
                    {p.billing.status}
                  </span>
                </div>
              </div>

              {p.approval && (
                <div className="mt-3 flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50/50 p-2.5">
                  <span className="text-[10px] text-amber-600">⚑</span>
                  <span className="text-[10px] font-medium text-amber-700">
                    {p.approval}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SoftShell>
  );
}
