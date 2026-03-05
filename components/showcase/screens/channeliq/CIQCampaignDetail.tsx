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
    label: "Total Spend",
    value: "$34.2K",
    change: "+12% vs plan",
    positive: true,
  },
  {
    label: "Leads Generated",
    value: "189",
    change: "+31 this week",
    positive: true,
  },
  {
    label: "Pipeline Created",
    value: "$1.2M",
    change: "3.8x spend",
    positive: true,
  },
  {
    label: "Closed Revenue",
    value: "$340K",
    change: "9.9x ROI",
    positive: true,
  },
];

const CHANNEL_CONTRIBUTIONS = [
  { channel: "LinkedIn Ads", pct: 38, amount: "$456K", color: "bg-indigo-500" },
  {
    channel: "Google Search",
    pct: 26,
    amount: "$312K",
    color: "bg-indigo-400",
  },
  {
    channel: "Webinar Series",
    pct: 18,
    amount: "$216K",
    color: "bg-indigo-300",
  },
  {
    channel: "Email Nurture",
    pct: 12,
    amount: "$144K",
    color: "bg-indigo-200",
  },
  {
    channel: "Content Syndication",
    pct: 6,
    amount: "$72K",
    color: "bg-indigo-100",
  },
];

const CONVERSION_PATHS = [
  {
    account: "Meridian Corp",
    deal: "$86K",
    touches: [
      { channel: "LinkedIn Ad", type: "First touch" },
      { channel: "Webinar", type: "Engagement" },
      { channel: "Email sequence", type: "Nurture" },
      { channel: "Sales call", type: "Closing" },
    ],
  },
  {
    account: "Apex Solutions",
    deal: "$124K",
    touches: [
      { channel: "Google Search", type: "First touch" },
      { channel: "Content download", type: "Engagement" },
      { channel: "LinkedIn retarget", type: "Re-engagement" },
      { channel: "Demo request", type: "Closing" },
    ],
  },
  {
    account: "Pinnacle Tech",
    deal: "$67K",
    touches: [
      { channel: "Content syndication", type: "First touch" },
      { channel: "Email nurture", type: "Engagement" },
      { channel: "Webinar", type: "Engagement" },
      { channel: "Outbound call", type: "Closing" },
    ],
  },
];

export function CIQCampaignDetail() {
  return (
    <TopBarShell
      productName="ChannelIQ"
      accentColor="indigo"
      navItems={NAV_ITEMS}
      activeNav="Campaigns"
      title="Q1 ABM Push: Enterprise Segment"
      subtitle="Jan 6 - Mar 28, 2026"
      actions={
        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white">
          Edit campaign
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
              <p className="mt-1 text-xs font-medium text-emerald-600">
                {kpi.change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-neutral-200/60 bg-white p-5 shadow-sm lg:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Channel Contribution
            </h2>
            <div className="mt-4 space-y-4">
              {CHANNEL_CONTRIBUTIONS.map((ch) => (
                <div key={ch.channel}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-neutral-700">
                      {ch.channel}
                    </span>
                    <span className="font-medium text-indigo-600">
                      {ch.amount}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 w-full rounded-md bg-neutral-100">
                    <div
                      className={`h-2 rounded-md ${ch.color}`}
                      style={{ width: `${ch.pct}%` }}
                    />
                  </div>
                  <p className="mt-0.5 text-[10px] text-neutral-400">
                    {ch.pct}% of pipeline
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Conversion Paths
            </h2>
            {CONVERSION_PATHS.map((path) => (
              <div
                key={path.account}
                className="rounded-lg border border-neutral-200/60 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-800">
                    {path.account}
                  </span>
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    {path.deal} closed
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-1">
                  {path.touches.map((touch, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className="rounded-md bg-indigo-50/80 px-3 py-2">
                        <p className="text-[10px] text-neutral-400">
                          {touch.type}
                        </p>
                        <p className="text-xs font-medium text-indigo-700">
                          {touch.channel}
                        </p>
                      </div>
                      {i < path.touches.length - 1 && (
                        <span className="text-neutral-300">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TopBarShell>
  );
}
