import { MinimalShell } from "../../MinimalShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Workflows" },
  { icon: "◎", label: "Library" },
  { icon: "▣", label: "Runs" },
  { icon: "◈", label: "Metrics" },
  { icon: "⚙", label: "Settings" },
];

const CATEGORIES = ["All", "HR", "Finance", "IT", "Sales", "Operations"];

const TEMPLATES = [
  {
    name: "Employee Onboarding",
    category: "HR",
    description:
      "Automate new hire provisioning, document collection, and training schedule creation.",
    teams: 34,
  },
  {
    name: "Invoice Approval",
    category: "Finance",
    description:
      "Route invoices through multi-level approval with budget checks and PO matching.",
    teams: 28,
  },
  {
    name: "Access Provisioning",
    category: "IT",
    description:
      "Grant and revoke tool access based on role changes and department transfers.",
    teams: 41,
  },
  {
    name: "Lead Routing",
    category: "Sales",
    description:
      "Assign inbound leads to reps based on territory, segment, and capacity rules.",
    teams: 22,
  },
  {
    name: "Vendor Onboarding",
    category: "Operations",
    description:
      "Collect vendor documents, run compliance checks, and set up payment terms.",
    teams: 19,
  },
  {
    name: "Expense Reporting",
    category: "Finance",
    description:
      "Automate receipt capture, policy checks, and reimbursement workflows.",
    teams: 31,
  },
  {
    name: "Contract Renewal",
    category: "Operations",
    description:
      "Track contract expiry dates, trigger renewal reviews, and route for signature.",
    teams: 16,
  },
  {
    name: "PTO Request",
    category: "HR",
    description:
      "Handle time-off requests with manager approval, calendar sync, and coverage planning.",
    teams: 38,
  },
];

export function FFAutomationLibrary() {
  return (
    <MinimalShell
      productName="FlowForge"
      accentColor="violet"
      navItems={NAV_ITEMS}
      activeNav="Library"
      title="Automation Library"
      subtitle="142 templates available"
      actions={
        <button className="rounded-xl bg-violet-600 px-4 py-2 text-xs font-medium text-white">
          Upload template
        </button>
      }
    >
      <div className="space-y-6">
        <div className="flex gap-2">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                i === 0
                  ? "bg-violet-100 text-violet-700"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {TEMPLATES.map((t) => (
            <div
              key={t.name}
              className="rounded-xl bg-gradient-to-br from-white to-violet-50/30 p-4 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {t.name}
                  </h3>
                  <span className="mt-1 inline-block rounded-lg bg-violet-100 px-2.5 py-1 text-[10px] font-medium text-violet-700">
                    {t.category}
                  </span>
                </div>
                <button className="rounded-xl bg-violet-600 px-4 py-2 text-xs font-medium text-white">
                  Deploy
                </button>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {t.description}
              </p>
              <p className="mt-3 text-xs text-neutral-400">
                Used by {t.teams} teams
              </p>
            </div>
          ))}
        </div>
      </div>
    </MinimalShell>
  );
}
