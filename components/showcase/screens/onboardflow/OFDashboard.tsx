import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Onboardings" },
  { icon: "▣", label: "Templates" },
  { icon: "◈", label: "Portal" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Active Onboardings", value: "12" },
  { label: "Completion Rate", value: "94%" },
  { label: "Avg Time to Productive", value: "4.2 days" },
  { label: "Upcoming Hires", value: "8" },
];

const ACTIVE_ONBOARDINGS = [
  {
    name: "Alex Thompson",
    role: "Senior Engineer",
    start: "Feb 24",
    progress: 72,
    status: "On Track",
    initials: "AT",
  },
  {
    name: "Maria Santos",
    role: "Product Designer",
    start: "Feb 26",
    progress: 58,
    status: "On Track",
    initials: "MS",
  },
  {
    name: "James Chen",
    role: "Data Analyst",
    start: "Feb 20",
    progress: 91,
    status: "Completing",
    initials: "JC",
  },
  {
    name: "Priya Patel",
    role: "Engineering Manager",
    start: "Feb 27",
    progress: 35,
    status: "On Track",
    initials: "PP",
  },
  {
    name: "Omar Hassan",
    role: "Sales Rep",
    start: "Feb 18",
    progress: 100,
    status: "Complete",
    initials: "OH",
  },
  {
    name: "Lisa Park",
    role: "Marketing Lead",
    start: "Mar 3",
    progress: 12,
    status: "Starting",
    initials: "LP",
  },
];

const UPCOMING_HIRES = [
  { name: "David Kim", dept: "Engineering", start: "Mar 10", initials: "DK" },
  { name: "Sarah Mitchell", dept: "Product", start: "Mar 12", initials: "SM" },
  { name: "Ryan Cooper", dept: "Sales", start: "Mar 17", initials: "RC" },
  {
    name: "Emma Watson",
    dept: "Customer Success",
    start: "Mar 24",
    initials: "EW",
  },
];

function statusBadge(status: string): string {
  if (status === "Complete") return "bg-emerald-50 text-emerald-700";
  if (status === "Completing") return "bg-cyan-50 text-cyan-700";
  if (status === "Starting") return "bg-amber-50 text-amber-700";
  return "bg-cyan-50 text-cyan-700";
}

function progressColor(progress: number): string {
  if (progress === 100) return "bg-emerald-500";
  if (progress >= 70) return "bg-cyan-500";
  return "bg-cyan-400";
}

export function OFDashboard() {
  return (
    <SoftShell
      productName="OnboardFlow"
      accentColor="cyan"
      navItems={NAV_ITEMS}
      activeNav="Dashboard"
      title="Onboarding Dashboard"
      subtitle="Q1 2026 Overview"
      actions={
        <button className="rounded-xl bg-cyan-600 px-4 py-2 text-xs font-medium text-white">
          + New onboarding
        </button>
      }
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-2xl bg-gradient-to-br from-cyan-50 to-white p-5"
            >
              <p className="text-xs text-cyan-600/80">{kpi.label}</p>
              <p className="mt-1 text-2xl font-bold text-neutral-900">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-cyan-100/50 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-900">
            Active Onboardings
          </h2>
          <div className="mt-4 space-y-2.5">
            {ACTIVE_ONBOARDINGS.map((o) => (
              <div
                key={o.name}
                className="border-l-3 flex items-center gap-4 rounded-r-2xl border-l-cyan-400 bg-white py-3 pl-4 pr-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-[10px] font-bold text-cyan-700">
                  {o.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-neutral-800">
                      {o.name}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusBadge(o.status)}`}
                    >
                      {o.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-500">
                    {o.role} · Started {o.start}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2.5">
                  <div className="h-3 w-28 rounded-full bg-cyan-100">
                    <div
                      className={`h-3 rounded-full ${progressColor(o.progress)}`}
                      style={{ width: `${o.progress}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-xs font-medium text-neutral-600">
                    {o.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-cyan-50 p-6">
          <h2 className="text-sm font-semibold text-neutral-900">
            Upcoming Hires
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {UPCOMING_HIRES.map((h) => (
              <div
                key={h.name}
                className="flex items-center gap-3 rounded-2xl border border-cyan-100/50 bg-white p-4 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-[10px] font-bold text-cyan-700">
                  {h.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-neutral-800">
                    {h.name}
                  </p>
                  <p className="text-[10px] text-neutral-500">
                    {h.dept} · {h.start}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SoftShell>
  );
}
