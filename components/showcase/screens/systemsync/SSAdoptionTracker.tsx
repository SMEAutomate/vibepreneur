import { MinimalShell } from "../../MinimalShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Components" },
  { icon: "◎", label: "Tokens" },
  { icon: "▣", label: "Adoption" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const TEAMS = [
  {
    name: "Product",
    adoption: 92,
    trend: "up",
    drifts: 3,
    compliance: "Compliant",
    overrides: 4,
  },
  {
    name: "Marketing",
    adoption: 78,
    trend: "down",
    drifts: 12,
    compliance: "Warning",
    overrides: 18,
  },
  {
    name: "Mobile",
    adoption: 86,
    trend: "up",
    drifts: 7,
    compliance: "Compliant",
    overrides: 9,
  },
  {
    name: "Platform",
    adoption: 89,
    trend: "up",
    drifts: 5,
    compliance: "Compliant",
    overrides: 6,
  },
  {
    name: "Growth",
    adoption: 71,
    trend: "down",
    drifts: 16,
    compliance: "Warning",
    overrides: 22,
  },
  {
    name: "Internal Tools",
    adoption: 64,
    trend: "down",
    drifts: 24,
    compliance: "Non-compliant",
    overrides: 31,
  },
];

const OUTDATED = [
  {
    component: "Button",
    team: "Internal Tools",
    current: "v1.4.0",
    latest: "v2.1.0",
  },
  { component: "Modal", team: "Growth", current: "v2.1.0", latest: "v3.0.0" },
  { component: "Tabs", team: "Marketing", current: "v0.8.2", latest: "v1.0.0" },
  {
    component: "Dropdown",
    team: "Internal Tools",
    current: "v1.6.1",
    latest: "v2.0.3",
  },
  { component: "Input", team: "Mobile", current: "v2.2.0", latest: "v2.4.1" },
];

function complianceDot(status: string): string {
  if (status === "Compliant") return "bg-emerald-500";
  if (status === "Warning") return "bg-amber-500";
  return "bg-red-500";
}

export function SSAdoptionTracker() {
  return (
    <MinimalShell
      productName="SystemSync"
      accentColor="purple"
      navItems={NAV_ITEMS}
      activeNav="Adoption"
      title="Adoption Tracker"
      subtitle="Team-level metrics"
      actions={
        <button className="rounded-full bg-purple-600 px-4 py-2 text-xs font-medium text-white">
          Generate report
        </button>
      }
    >
      <div className="space-y-6">
        <div className="rounded-3xl border border-neutral-100 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-neutral-900">
              Overall Adoption
            </h2>
            <span className="text-2xl font-bold text-purple-600">84%</span>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-neutral-100">
            <div
              className="h-2 rounded-full bg-purple-500"
              style={{ width: "84%" }}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-100 bg-white p-6">
          <h2 className="text-sm font-medium text-neutral-900">
            Team Breakdown
          </h2>
          <div className="mt-5 space-y-5">
            {TEAMS.map((t) => (
              <div key={t.name} className="flex items-center gap-6">
                <span className="w-28 shrink-0 text-sm font-medium text-neutral-800">
                  {t.name}
                </span>
                <div className="flex flex-1 items-center gap-3">
                  <div className="h-2 w-full rounded-full bg-neutral-100">
                    <div
                      className="h-2 rounded-full bg-purple-500"
                      style={{ width: `${t.adoption}%` }}
                    />
                  </div>
                  <span className="w-10 shrink-0 text-right text-xs font-semibold text-neutral-700">
                    {t.adoption}%
                  </span>
                </div>
                <span
                  className={
                    t.trend === "up"
                      ? "text-xs text-emerald-600"
                      : "text-xs text-red-500"
                  }
                >
                  {t.trend === "up" ? "↑" : "↓"}
                </span>
                <span className="w-12 shrink-0 text-right text-xs text-neutral-500">
                  {t.drifts} drifts
                </span>
                <span className="w-10 shrink-0 text-right text-xs text-neutral-500">
                  {t.overrides}
                </span>
                <div className="flex w-24 shrink-0 items-center gap-1.5">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${complianceDot(t.compliance)}`}
                  />
                  <span className="text-[10px] text-neutral-500">
                    {t.compliance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-100 bg-white p-6">
          <h2 className="text-sm font-medium text-neutral-900">
            Outdated Usage Warnings
          </h2>
          <div className="mt-5 space-y-4">
            {OUTDATED.map((o) => (
              <div
                key={`${o.component}-${o.team}`}
                className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
                  <div>
                    <p className="text-sm font-medium text-neutral-800">
                      {o.component}
                    </p>
                    <p className="text-[10px] text-neutral-400">{o.team}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-red-500">{o.current}</p>
                  <p className="text-[10px] text-neutral-400">
                    latest {o.latest}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MinimalShell>
  );
}
