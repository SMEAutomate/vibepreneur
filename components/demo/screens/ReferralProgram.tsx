import { AppShell } from "../AppShell";

export function ReferralProgram() {
  return (
    <AppShell
      activeNav="Growth"
      title="Referral Program"
      subtitle="OnboardFlow. Turn customers into advocates"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Launch program
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Program Design
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Incentive model
                </p>
                <div className="mt-2 flex gap-2">
                  {[
                    { label: "Two-sided", selected: true },
                    { label: "Referrer only", selected: false },
                    { label: "Credits", selected: false },
                  ].map((opt) => (
                    <span
                      key={opt.label}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${opt.selected ? "bg-brand-100 text-brand-700" : "bg-neutral-100 text-neutral-500"}`}
                    >
                      {opt.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    Referrer gets
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-800">
                    1 month free
                  </p>
                  <p className="mt-0.5 text-[10px] text-neutral-500">
                    Per qualified referral
                  </p>
                </div>
                <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    Referee gets
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-800">
                    20% off first 3 months
                  </p>
                  <p className="mt-0.5 text-[10px] text-neutral-500">
                    Applied at signup
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Sharing Channels
            </h2>
            <div className="mt-4 space-y-2">
              {[
                {
                  channel: "Unique referral link",
                  detail: "vbprnr.com/r/sarah-chen",
                  enabled: true,
                },
                {
                  channel: "Email invite",
                  detail: "Pre-written template with personal note",
                  enabled: true,
                },
                {
                  channel: "LinkedIn share",
                  detail: "One-click post with referral link",
                  enabled: true,
                },
                {
                  channel: "Slack community",
                  detail: "Shareable card for workspaces",
                  enabled: false,
                },
              ].map((ch) => (
                <div
                  key={ch.channel}
                  className="flex items-center justify-between rounded-lg border border-neutral-100 p-3"
                >
                  <div>
                    <p className="text-xs font-medium text-neutral-800">
                      {ch.channel}
                    </p>
                    <p className="text-[10px] text-neutral-500">{ch.detail}</p>
                  </div>
                  <div
                    className={`h-5 w-9 rounded-full p-0.5 ${ch.enabled ? "bg-brand-600" : "bg-neutral-200"}`}
                  >
                    <div
                      className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${ch.enabled ? "translate-x-4" : ""}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Projected Impact
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { label: "Referrals (90 days)", value: "35–60" },
                { label: "Qualified leads", value: "15–25" },
                { label: "Cost per acquisition", value: "$12" },
                { label: "LTV:CAC ratio", value: "18:1" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg bg-neutral-50 p-3 text-center"
                >
                  <p className="text-lg font-bold text-brand-700">{m.value}</p>
                  <p className="mt-0.5 text-[10px] text-neutral-500">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Referral Leaderboard
            </h2>
            <div className="mt-4 space-y-2">
              {[
                {
                  name: "Alex Rivera",
                  company: "TechCorp",
                  referrals: 7,
                  earned: "3 months free",
                },
                {
                  name: "Maya Patel",
                  company: "ScaleUp Inc",
                  referrals: 4,
                  earned: "2 months free",
                },
                {
                  name: "David Kim",
                  company: "GrowthCo",
                  referrals: 3,
                  earned: "1 month free",
                },
                {
                  name: "Sarah Chen",
                  company: "OnboardFlow",
                  referrals: 2,
                  earned: "1 month free",
                },
              ].map((r, i) => (
                <div
                  key={r.name}
                  className="flex items-center gap-3 rounded-lg border border-neutral-100 p-3"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-[10px] font-bold text-brand-700">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-neutral-800">
                      {r.name}
                    </p>
                    <p className="text-[10px] text-neutral-400">{r.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-brand-700">
                      {r.referrals}
                    </p>
                    <p className="text-[10px] text-neutral-400">{r.earned}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
