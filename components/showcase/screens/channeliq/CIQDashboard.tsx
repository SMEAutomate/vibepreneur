import { TopBarShell } from "../../TopBarShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Campaigns" },
  { icon: "▣", label: "Channels" },
  { icon: "◈", label: "Attribution" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  {
    label: "Total Attributed Revenue",
    value: "$2.4M",
    change: "+18.3%",
    positive: true,
  },
  {
    label: "Marketing-Sourced Pipeline",
    value: "$8.1M",
    change: "+24.1%",
    positive: true,
  },
  {
    label: "Avg Attribution Confidence",
    value: "87%",
    change: "+3.2pp",
    positive: true,
  },
  { label: "Active Campaigns", value: "24", change: "+4", positive: true },
];

const CHANNELS = [
  {
    name: "LinkedIn Ads",
    spend: "$42.8K",
    leads: 312,
    pipeline: "$2.1M",
    closed: "$680K",
    roi: "15.9x",
  },
  {
    name: "Google Search",
    spend: "$38.4K",
    leads: 487,
    pipeline: "$1.9M",
    closed: "$520K",
    roi: "13.5x",
  },
  {
    name: "Content Syndication",
    spend: "$18.2K",
    leads: 198,
    pipeline: "$1.4M",
    closed: "$410K",
    roi: "22.5x",
  },
  {
    name: "Webinars",
    spend: "$12.6K",
    leads: 156,
    pipeline: "$1.6M",
    closed: "$480K",
    roi: "38.1x",
  },
  {
    name: "Email Nurture",
    spend: "$8.1K",
    leads: 89,
    pipeline: "$1.1M",
    closed: "$310K",
    roi: "38.3x",
  },
];

const FUNNEL_STAGES = [
  { stage: "Impressions", value: "1.2M", width: "100%" },
  { stage: "Clicks", value: "48.3K", width: "78%" },
  { stage: "Leads", value: "1,242", width: "56%" },
  { stage: "MQL", value: "634", width: "40%" },
  { stage: "SQL", value: "287", width: "26%" },
  { stage: "Closed", value: "89", width: "14%" },
];

export function CIQDashboard() {
  return (
    <TopBarShell
      productName="ChannelIQ"
      accentColor="indigo"
      navItems={NAV_ITEMS}
      activeNav="Dashboard"
      title="Attribution Dashboard"
      subtitle="Multi-touch channel performance overview"
      actions={
        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white">
          Export report
        </button>
      }
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-lg border border-l-4 border-neutral-200/60 border-l-indigo-500 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {kpi.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-indigo-600">
                {kpi.value}
              </p>
              <p
                className={`mt-1 text-xs font-medium ${
                  kpi.positive ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {kpi.change} vs last quarter
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-neutral-200/60 bg-white p-5 shadow-sm">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Channel Performance
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-neutral-100">
                  {[
                    "Channel",
                    "Spend",
                    "Leads",
                    "Pipeline",
                    "Closed Revenue",
                    "ROI",
                  ].map((h) => (
                    <th
                      key={h}
                      className="pb-3 pr-4 text-xs font-semibold uppercase tracking-wider text-neutral-400"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {CHANNELS.map((ch) => (
                  <tr key={ch.name}>
                    <td className="py-3 pr-4 font-medium text-neutral-800">
                      {ch.name}
                    </td>
                    <td className="py-3 pr-4 text-neutral-600">{ch.spend}</td>
                    <td className="py-3 pr-4 text-neutral-600">{ch.leads}</td>
                    <td className="py-3 pr-4 text-neutral-600">
                      {ch.pipeline}
                    </td>
                    <td className="py-3 pr-4 text-neutral-600">{ch.closed}</td>
                    <td className="py-3 pr-4 font-medium text-indigo-600">
                      {ch.roi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200/60 bg-white p-5 shadow-sm">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Attribution Funnel
          </h2>
          <div className="mt-4 space-y-3">
            {FUNNEL_STAGES.map((s) => (
              <div key={s.stage} className="flex items-center gap-4">
                <span className="w-24 shrink-0 text-xs font-medium text-neutral-500">
                  {s.stage}
                </span>
                <div className="flex-1">
                  <div
                    className="flex h-8 items-center rounded-md bg-indigo-50 px-3"
                    style={{ width: s.width }}
                  >
                    <span className="text-xs font-semibold text-indigo-600">
                      {s.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TopBarShell>
  );
}
