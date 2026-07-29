import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Chart Review" },
  { icon: "▣", label: "Payer Risk" },
  { icon: "◈", label: "Clinics" },
  { icon: "⚙", label: "Settings" },
];

const ENCOUNTER = {
  id: "ENC-48213",
  patient: "Patient 4471",
  provider: "Dr. R. Ellison",
  date: "12 July 2026",
  billed: "99214",
  supported: "99213",
  delta: "-$41.20",
};

const GAPS = [
  {
    label: "Time statement absent",
    detail:
      "Note records history and exam but no total time or counselling breakdown.",
    severity: "High",
  },
  {
    label: "MDM complexity unsupported",
    detail:
      "Two stable chronic conditions documented. Billed level implies moderate risk.",
    severity: "High",
  },
  {
    label: "Review of systems incomplete",
    detail:
      "Two systems documented where the billed level expects a minimum of three.",
    severity: "Medium",
  },
];

const EVIDENCE = [
  { section: "Chief complaint", status: "Complete" },
  { section: "History of present illness", status: "Complete" },
  { section: "Review of systems", status: "Partial" },
  { section: "Physical exam", status: "Complete" },
  { section: "Medical decision making", status: "Insufficient" },
  { section: "Time documentation", status: "Missing" },
];

function severityBadge(severity: string): string {
  if (severity === "High") return "bg-red-50 text-red-700";
  if (severity === "Medium") return "bg-amber-50 text-amber-700";
  return "bg-neutral-100 text-neutral-600";
}

function statusColor(status: string): string {
  if (status === "Complete") return "text-emerald-600";
  if (status === "Partial") return "text-amber-600";
  return "text-red-600";
}

export function CTChartReview() {
  return (
    <SoftShell
      productName="ChartTrace"
      accentColor="cyan"
      navItems={NAV_ITEMS}
      activeNav="Chart Review"
      title="Chart Review"
      subtitle={`${ENCOUNTER.id} · ${ENCOUNTER.date}`}
      actions={
        <button className="rounded-lg bg-cyan-600 px-3 py-1.5 text-xs font-medium text-white">
          Send clinician query
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-xl border border-cyan-100 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  {ENCOUNTER.patient}
                </p>
                <p className="text-[11px] text-neutral-500">
                  {ENCOUNTER.provider}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                    Billed
                  </p>
                  <p className="font-semibold text-neutral-800">
                    {ENCOUNTER.billed}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                    Supported
                  </p>
                  <p className="font-semibold text-amber-700">
                    {ENCOUNTER.supported}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                    Exposure
                  </p>
                  <p className="font-semibold text-red-600">
                    {ENCOUNTER.delta}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-cyan-100 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Documentation gaps
            </p>
            <div className="mt-4 space-y-3">
              {GAPS.map((gap) => (
                <div
                  key={gap.label}
                  className="rounded-lg border border-neutral-100 bg-neutral-50/60 p-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-neutral-800">
                      {gap.label}
                    </p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${severityBadge(gap.severity)}`}
                    >
                      {gap.severity}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">
                    {gap.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-cyan-100 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Note sections
            </p>
            <div className="mt-4 space-y-2.5">
              {EVIDENCE.map((item) => (
                <div
                  key={item.section}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-neutral-600">{item.section}</span>
                  <span className={`font-medium ${statusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-cyan-100 bg-cyan-50/60 p-5">
            <p className="text-sm font-semibold text-cyan-900">
              Suggested query
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cyan-800">
              Ask the provider to document total encounter time and the risk
              considered in the management plan. If both are added, the billed
              level stands and the exposure closes.
            </p>
          </div>
        </div>
      </div>
    </SoftShell>
  );
}
