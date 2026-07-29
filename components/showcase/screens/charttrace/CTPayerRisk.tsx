import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Chart Review" },
  { icon: "▣", label: "Payer Risk" },
  { icon: "◈", label: "Clinics" },
  { icon: "⚙", label: "Settings" },
];

const PAYERS = [
  {
    name: "Meridian Health",
    denials: "8.4%",
    exposure: "$118K",
    trend: "+1.2",
  },
  {
    name: "Statewide Mutual",
    denials: "6.1%",
    exposure: "$94K",
    trend: "+0.4",
  },
  { name: "Unity Care Plan", denials: "5.7%", exposure: "$71K", trend: "-0.8" },
  { name: "Northbridge PPO", denials: "4.2%", exposure: "$62K", trend: "-0.3" },
  {
    name: "Regional Medicaid",
    denials: "3.9%",
    exposure: "$44K",
    trend: "+0.1",
  },
];

const CODE_FAMILIES = [
  { code: "99213-99215", label: "Office visit, established", rate: 71 },
  { code: "99203-99205", label: "Office visit, new", rate: 58 },
  { code: "20610", label: "Joint injection", rate: 44 },
  { code: "93000", label: "Electrocardiogram", rate: 31 },
  { code: "96372", label: "Therapeutic injection", rate: 22 },
];

const REMEDIATIONS = [
  {
    action: "Standardise time documentation template",
    recovery: "$148K",
    effort: "Low",
  },
  {
    action: "Provider coaching on MDM narrative",
    recovery: "$96K",
    effort: "Medium",
  },
  {
    action: "Pre-bill review for new patient visits",
    recovery: "$61K",
    effort: "Medium",
  },
];

function effortBadge(effort: string): string {
  if (effort === "Low") return "bg-emerald-50 text-emerald-700";
  if (effort === "Medium") return "bg-amber-50 text-amber-700";
  return "bg-red-50 text-red-700";
}

export function CTPayerRisk() {
  return (
    <SoftShell
      productName="ChartTrace"
      accentColor="cyan"
      navItems={NAV_ITEMS}
      activeNav="Payer Risk"
      title="Payer Risk"
      subtitle="Denial patterns and recovery paths"
      actions={
        <button className="rounded-lg border border-cyan-200 px-3 py-1.5 text-xs font-medium text-cyan-700">
          Compare quarters
        </button>
      }
    >
      <div className="space-y-5">
        <div className="rounded-xl border border-cyan-100 bg-white p-5">
          <p className="text-sm font-semibold text-neutral-900">
            Denial rate by payer
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left">
              <thead>
                <tr className="border-b border-neutral-100">
                  {["Payer", "Denial rate", "Exposure", "QoQ"].map((h) => (
                    <th
                      key={h}
                      className="pb-2 text-[10px] font-medium uppercase tracking-wider text-neutral-400"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PAYERS.map((payer) => (
                  <tr key={payer.name} className="border-b border-neutral-50">
                    <td className="py-2.5 text-sm text-neutral-800">
                      {payer.name}
                    </td>
                    <td className="py-2.5 text-sm font-medium text-neutral-900">
                      {payer.denials}
                    </td>
                    <td className="py-2.5 text-sm text-neutral-600">
                      {payer.exposure}
                    </td>
                    <td
                      className={`py-2.5 text-xs font-medium ${payer.trend.startsWith("+") ? "text-red-600" : "text-emerald-600"}`}
                    >
                      {payer.trend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-cyan-100 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Documentation support by code family
            </p>
            <div className="mt-4 space-y-3">
              {CODE_FAMILIES.map((family) => (
                <div key={family.code}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-700">
                      <span className="font-medium">{family.code}</span>{" "}
                      <span className="text-neutral-500">{family.label}</span>
                    </span>
                    <span className="font-medium text-neutral-800">
                      {family.rate}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-cyan-500"
                      style={{ width: `${family.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-cyan-100 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Recovery actions
            </p>
            <div className="mt-4 space-y-3">
              {REMEDIATIONS.map((item) => (
                <div
                  key={item.action}
                  className="rounded-lg border border-neutral-100 p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm text-neutral-800">{item.action}</p>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${effortBadge(item.effort)}`}
                    >
                      {item.effort}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-neutral-500">
                    Projected recovery{" "}
                    <span className="font-semibold text-emerald-600">
                      {item.recovery}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SoftShell>
  );
}
