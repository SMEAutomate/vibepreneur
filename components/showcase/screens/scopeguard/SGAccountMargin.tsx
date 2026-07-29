import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Change Log" },
  { icon: "▣", label: "Margin" },
  { icon: "◈", label: "Accounts" },
  { icon: "⚙", label: "Settings" },
];

const ACCOUNTS = [
  {
    name: "Meridian Foods",
    fee: "$196K",
    realised: 142,
    target: 125,
    margin: 46,
  },
  {
    name: "Calder & Voss",
    fee: "$88K",
    realised: 134,
    target: 125,
    margin: 41,
  },
  {
    name: "Pinehurst Labs",
    fee: "$142K",
    realised: 118,
    target: 125,
    margin: 34,
  },
  {
    name: "Wexford Retail Group",
    fee: "$104K",
    realised: 102,
    target: 125,
    margin: 24,
  },
  {
    name: "Ardent Financial",
    fee: "$188K",
    realised: 91,
    target: 125,
    margin: 18,
  },
];

const TEAMS = [
  { name: "Strategy", realised: 168, utilisation: 74 },
  { name: "Creative", realised: 121, utilisation: 88 },
  { name: "Production", realised: 96, utilisation: 92 },
  { name: "Analytics", realised: 144, utilisation: 68 },
];

function marginColor(margin: number): string {
  if (margin >= 40) return "text-emerald-600";
  if (margin >= 30) return "text-amber-600";
  return "text-red-600";
}

export function SGAccountMargin() {
  return (
    <SoftShell
      productName="ScopeGuard"
      accentColor="sky"
      navItems={NAV_ITEMS}
      activeNav="Margin"
      title="Account Margin"
      subtitle="Realised hourly rate against target"
      actions={
        <button className="rounded-lg border border-sky-200 px-3 py-1.5 text-xs font-medium text-sky-700">
          Rolling 12 months
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-sky-100 bg-white p-5 lg:col-span-2">
          <p className="text-sm font-semibold text-neutral-900">
            Realised rate by account
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left">
              <thead>
                <tr className="border-b border-neutral-100">
                  {[
                    "Account",
                    "Annual fee",
                    "Realised",
                    "Target",
                    "Margin",
                  ].map((h) => (
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
                {ACCOUNTS.map((account) => (
                  <tr key={account.name} className="border-b border-neutral-50">
                    <td className="py-2.5 text-sm text-neutral-800">
                      {account.name}
                    </td>
                    <td className="py-2.5 text-sm text-neutral-600">
                      {account.fee}
                    </td>
                    <td
                      className={`py-2.5 text-sm font-medium ${account.realised >= account.target ? "text-emerald-600" : "text-red-600"}`}
                    >
                      ${account.realised}/h
                    </td>
                    <td className="py-2.5 text-sm text-neutral-500">
                      ${account.target}/h
                    </td>
                    <td
                      className={`py-2.5 text-sm font-semibold ${marginColor(account.margin)}`}
                    >
                      {account.margin}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            Meridian and Calder subsidise Ardent. On paper all three are
            profitable accounts. On realised rate, one of them is being funded
            by the other two.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-sky-100 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Realised rate by team
            </p>
            <div className="mt-4 space-y-3">
              {TEAMS.map((team) => (
                <div key={team.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-600">{team.name}</span>
                    <span className="font-medium text-neutral-800">
                      ${team.realised}/h
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-400">
                    {team.utilisation}% utilised
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-5">
            <p className="text-sm font-semibold text-sky-900">Pattern</p>
            <p className="mt-2 text-xs leading-relaxed text-sky-800">
              Production runs at 92% utilisation and the lowest realised rate.
              It is absorbing the revision rounds that never got logged as
              change requests, which is where the margin goes.
            </p>
          </div>
        </div>
      </div>
    </SoftShell>
  );
}
