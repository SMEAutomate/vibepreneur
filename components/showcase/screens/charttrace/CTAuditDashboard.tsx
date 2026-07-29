import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Chart Review" },
  { icon: "▣", label: "Payer Risk" },
  { icon: "◈", label: "Clinics" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Revenue at Risk", value: "$412K", note: "Rolling 90 days" },
  { label: "Documentation Score", value: "78/100", note: "Up 6 this quarter" },
  { label: "Open Findings", value: "146", note: "31 high severity" },
  { label: "Recovered YTD", value: "$268K", note: "Across 74 clinics" },
];

const CLINICS = [
  { name: "Northside Family Medicine", score: 91, risk: "$18K", trend: "up" },
  { name: "Lakeview Orthopaedics", score: 84, risk: "$34K", trend: "up" },
  { name: "Cedar Park Internal Med", score: 72, risk: "$61K", trend: "flat" },
  { name: "Riverside Cardiology", score: 68, risk: "$77K", trend: "down" },
  { name: "Eastgate Paediatrics", score: 63, risk: "$92K", trend: "down" },
];

const FINDING_TYPES = [
  { name: "Missing time documentation", count: 42, pct: 29 },
  { name: "Unsupported E/M level", count: 38, pct: 26 },
  { name: "Absent medical necessity", count: 31, pct: 21 },
  { name: "Incomplete procedure note", count: 21, pct: 15 },
  { name: "Modifier omission", count: 14, pct: 9 },
];

function scoreColor(score: number): string {
  if (score >= 85) return "text-emerald-600";
  if (score >= 70) return "text-amber-600";
  return "text-red-600";
}

function trendMark(trend: string): string {
  if (trend === "up") return "↑";
  if (trend === "down") return "↓";
  return "→";
}

export function CTAuditDashboard() {
  return (
    <SoftShell
      productName="ChartTrace"
      accentColor="cyan"
      navItems={NAV_ITEMS}
      activeNav="Dashboard"
      title="Audit Dashboard"
      subtitle="Continuous documentation review"
      actions={
        <button className="rounded-lg bg-cyan-600 px-3 py-1.5 text-xs font-medium text-white">
          Export findings
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-cyan-100 bg-white p-4"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {kpi.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-neutral-900">
                {kpi.value}
              </p>
              <p className="mt-1 text-[11px] text-neutral-500">{kpi.note}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          <div className="rounded-xl border border-cyan-100 bg-white p-5 lg:col-span-3">
            <p className="text-sm font-semibold text-neutral-900">
              Clinics by documentation score
            </p>
            <div className="mt-4 space-y-3">
              {CLINICS.map((clinic) => (
                <div
                  key={clinic.name}
                  className="flex items-center justify-between border-b border-neutral-100 pb-3 last:border-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-neutral-800">
                      {clinic.name}
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      {clinic.risk} at risk
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-neutral-400">
                      {trendMark(clinic.trend)}
                    </span>
                    <span
                      className={`text-sm font-semibold ${scoreColor(clinic.score)}`}
                    >
                      {clinic.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-cyan-100 bg-white p-5 lg:col-span-2">
            <p className="text-sm font-semibold text-neutral-900">
              Findings by type
            </p>
            <div className="mt-4 space-y-3">
              {FINDING_TYPES.map((type) => (
                <div key={type.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-600">{type.name}</span>
                    <span className="font-medium text-neutral-800">
                      {type.count}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-cyan-500"
                      style={{ width: `${type.pct * 3.4}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SoftShell>
  );
}
