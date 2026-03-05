import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Tickets" },
  { icon: "◎", label: "Analytics" },
  { icon: "▣", label: "Knowledge Base" },
  { icon: "◈", label: "Routing" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Open Tickets", value: "142" },
  { label: "Avg Response Time", value: "4.2 min" },
  { label: "SLA Compliance", value: "96.8%" },
  { label: "CSAT", value: "4.6/5" },
];

const TICKETS = [
  {
    id: "TK-4201",
    subject: "Login fails after password reset",
    priority: "Critical",
    agent: "Mia Chen",
    agentInitials: "MC",
    status: "In Progress",
    slaMinutes: 8,
    slaMax: 30,
  },
  {
    id: "TK-4198",
    subject: "Billing page shows incorrect total",
    priority: "High",
    agent: "James Park",
    agentInitials: "JP",
    status: "Open",
    slaMinutes: 22,
    slaMax: 60,
  },
  {
    id: "TK-4195",
    subject: "Cannot export CSV from analytics",
    priority: "Medium",
    agent: "Priya Nair",
    agentInitials: "PN",
    status: "In Progress",
    slaMinutes: 45,
    slaMax: 120,
  },
  {
    id: "TK-4192",
    subject: "Dark mode toggle not persisting",
    priority: "Low",
    agent: "Omar Diaz",
    agentInitials: "OD",
    status: "Waiting",
    slaMinutes: 90,
    slaMax: 240,
  },
  {
    id: "TK-4189",
    subject: "SSO integration returning 403",
    priority: "Critical",
    agent: "Mia Chen",
    agentInitials: "MC",
    status: "In Progress",
    slaMinutes: 12,
    slaMax: 30,
  },
  {
    id: "TK-4186",
    subject: "Webhook payloads missing timestamps",
    priority: "High",
    agent: "James Park",
    agentInitials: "JP",
    status: "Open",
    slaMinutes: 48,
    slaMax: 60,
  },
  {
    id: "TK-4183",
    subject: "Search results not filtering by date",
    priority: "Medium",
    agent: "Priya Nair",
    agentInitials: "PN",
    status: "Waiting",
    slaMinutes: 60,
    slaMax: 120,
  },
  {
    id: "TK-4180",
    subject: "Mobile nav overlaps content on iPad",
    priority: "Low",
    agent: "Omar Diaz",
    agentInitials: "OD",
    status: "Open",
    slaMinutes: 140,
    slaMax: 240,
  },
];

const HOURLY_VOLUME = [
  { hour: "6am", count: 8 },
  { hour: "7am", count: 14 },
  { hour: "8am", count: 26 },
  { hour: "9am", count: 38 },
  { hour: "10am", count: 42 },
  { hour: "11am", count: 35 },
  { hour: "12pm", count: 28 },
  { hour: "1pm", count: 32 },
  { hour: "2pm", count: 40 },
  { hour: "3pm", count: 36 },
  { hour: "4pm", count: 22 },
  { hour: "5pm", count: 15 },
];

const MAX_VOLUME = 42;

function priorityBadge(priority: string): string {
  if (priority === "Critical") return "bg-red-50 text-red-700";
  if (priority === "High") return "bg-orange-50 text-orange-700";
  if (priority === "Medium") return "bg-amber-50 text-amber-700";
  return "bg-neutral-100 text-neutral-500";
}

function statusBadge(status: string): string {
  if (status === "In Progress") return "bg-sky-50 text-sky-700";
  if (status === "Waiting") return "bg-violet-50 text-violet-700";
  return "bg-neutral-100 text-neutral-600";
}

function slaColor(minutes: number, max: number): string {
  const ratio = minutes / max;
  if (ratio <= 0.5) return "from-emerald-400 to-emerald-600";
  if (ratio <= 0.8) return "from-amber-400 to-amber-600";
  return "from-red-400 to-red-600";
}

export function RATicketDashboard() {
  return (
    <SoftShell
      productName="ResolveAI"
      accentColor="sky"
      navItems={NAV_ITEMS}
      activeNav="Tickets"
      title="Ticket Dashboard"
      subtitle="Today's overview"
      actions={
        <button className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-medium text-white">
          + New ticket
        </button>
      }
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-sky-100 bg-white p-4"
            >
              <p className="text-xs text-sky-600/80">{kpi.label}</p>
              <p className="mt-1 text-2xl font-bold text-neutral-900">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-sky-100 bg-white p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-neutral-900">
              Active Tickets
            </h2>
            <div className="rounded-xl border border-sky-200 bg-sky-50/50 px-4 py-2.5">
              <span className="text-xs text-neutral-400">
                Search tickets...
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {TICKETS.map((t) => (
              <div
                key={t.id}
                className="rounded-lg border border-sky-50 bg-white px-4 py-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-xs font-medium text-sky-700">
                    {t.id}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm text-neutral-800">
                    {t.subject}
                  </span>
                  <span
                    className={`shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-medium ${priorityBadge(t.priority)}`}
                  >
                    {t.priority}
                  </span>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[8px] font-bold text-sky-700">
                      {t.agentInitials}
                    </div>
                    <span className="text-[10px] text-neutral-500">
                      {t.agent}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-medium ${statusBadge(t.status)}`}
                  >
                    {t.status}
                  </span>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <div className="h-1.5 w-16 rounded-full bg-sky-100">
                      <div
                        className={`h-1.5 rounded-full bg-gradient-to-r ${slaColor(t.slaMinutes, t.slaMax)}`}
                        style={{
                          width: `${Math.min((t.slaMinutes / t.slaMax) * 100, 100)}%`,
                        }}
                      />
                    </div>
                    <span className="w-6 text-[10px] text-neutral-400">
                      {t.slaMinutes}m
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-sky-100 bg-white p-4">
          <h2 className="text-sm font-semibold text-neutral-900">
            Hourly Ticket Volume
          </h2>
          <div className="mt-6 flex items-end gap-3">
            {HOURLY_VOLUME.map((h) => (
              <div key={h.hour} className="flex flex-1 flex-col items-center">
                <span className="text-xs font-bold text-sky-700">
                  {h.count}
                </span>
                <div
                  className="mt-1 w-full rounded-t-lg bg-gradient-to-t from-sky-500 to-sky-400"
                  style={{ height: `${(h.count / MAX_VOLUME) * 120}px` }}
                />
                <span className="mt-2 text-[10px] text-neutral-500">
                  {h.hour}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SoftShell>
  );
}
