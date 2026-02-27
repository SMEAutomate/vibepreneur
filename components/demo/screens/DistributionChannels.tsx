import { AppShell } from "../AppShell";

const channels = [
  {
    name: "LinkedIn organic",
    fit: 92,
    effort: "Low",
    stage: "Start here",
    description: "Your ICP is active daily. Positioning content performs well.",
  },
  {
    name: "Cold email outreach",
    fit: 84,
    effort: "Medium",
    stage: "Start here",
    description:
      "Direct access to VP-level buyers. High intent when personalised.",
  },
  {
    name: "Free tool (audit checklist)",
    fit: 80,
    effort: "Medium",
    stage: "Start here",
    description:
      "Lead magnet that qualifies buyers by showing them their problem.",
  },
  {
    name: "SEO / Blog content",
    fit: 72,
    effort: "High",
    stage: "Next",
    description:
      "Long-tail keywords around onboarding problems. Compounds over time.",
  },
  {
    name: "HR community partnerships",
    fit: 68,
    effort: "Medium",
    stage: "Next",
    description: "Guest content in SHRM, HR Morning, People Managing People.",
  },
  {
    name: "Webinars / virtual events",
    fit: 61,
    effort: "High",
    stage: "Later",
    description: "Co-host with complementary tools. Good for trust-building.",
  },
  {
    name: "Paid ads (LinkedIn)",
    fit: 55,
    effort: "High",
    stage: "Later",
    description:
      "Consider after organic channels are proven. High CPC in HR space.",
  },
];

export function DistributionChannels() {
  return (
    <AppShell
      activeNav="Distribution"
      title="Distribution Channels"
      subtitle="OnboardFlow — Channel fit analysis"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Save sequence
        </button>
      }
    >
      <div className="space-y-3">
        {channels.map((ch) => (
          <div
            key={ch.name}
            className="flex items-center gap-5 rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <div className="w-12 text-center">
              <span
                className={`text-lg font-bold ${ch.fit >= 80 ? "text-emerald-600" : ch.fit >= 65 ? "text-amber-600" : "text-neutral-400"}`}
              >
                {ch.fit}
              </span>
              <p className="text-[9px] text-neutral-400">fit</p>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium text-neutral-900">
                  {ch.name}
                </p>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${ch.stage === "Start here" ? "bg-emerald-50 text-emerald-700" : ch.stage === "Next" ? "bg-amber-50 text-amber-700" : "bg-neutral-100 text-neutral-500"}`}
                >
                  {ch.stage}
                </span>
              </div>
              <p className="mt-1 text-xs text-neutral-500">{ch.description}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Effort
              </p>
              <p className="text-xs font-medium text-neutral-700">
                {ch.effort}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/30 p-6">
        <h2 className="text-sm font-semibold text-brand-800">
          Recommended Sequence
        </h2>
        <div className="mt-4 flex items-center gap-3">
          {["LinkedIn organic", "Cold email", "Free audit tool"].map(
            (step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="rounded-lg bg-white px-4 py-2 text-xs font-medium text-brand-700 shadow-sm">
                  {step}
                </div>
                {i < 2 && <span className="text-neutral-300">→</span>}
              </div>
            )
          )}
        </div>
        <p className="mt-3 text-xs text-brand-600">
          Start with these three channels simultaneously. Add SEO and
          partnerships once you have 20+ conversations.
        </p>
      </div>
    </AppShell>
  );
}
