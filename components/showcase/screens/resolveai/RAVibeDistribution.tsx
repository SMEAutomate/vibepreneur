import { AppShell } from "@/components/demo/AppShell";

const CHANNELS = [
  {
    name: "Support communities",
    fit: 90,
    effort: "Low",
    stage: "Start here",
    description:
      "Active forums where support leaders discuss tooling. High trust, low cost.",
  },
  {
    name: "Customer success LinkedIn groups",
    fit: 85,
    effort: "Low",
    stage: "Start here",
    description:
      "CS and support managers share wins and pain points. Ideal for case studies.",
  },
  {
    name: "Cold email to support leaders",
    fit: 82,
    effort: "Medium",
    stage: "Start here",
    description:
      "Direct outreach to VP Support and CS directors. Personalize with their team size.",
  },
  {
    name: "SaaS review sites",
    fit: 74,
    effort: "Medium",
    stage: "Next",
    description:
      "G2, Capterra listings build credibility. Buyers check reviews before demos.",
  },
  {
    name: "SEO / Blog",
    fit: 70,
    effort: "High",
    stage: "Next",
    description:
      "Long-tail keywords around ticket routing and support automation. Compounds over time.",
  },
  {
    name: "Webinars",
    fit: 63,
    effort: "High",
    stage: "Later",
    description:
      "Co-host with CRM or helpdesk platforms. Good for building authority in the space.",
  },
  {
    name: "Paid ads",
    fit: 52,
    effort: "High",
    stage: "Later",
    description:
      "Consider after organic channels prove ROI. Support software CPCs are competitive.",
  },
];

export function RAVibeDistribution() {
  return (
    <AppShell
      activeNav="Distribution"
      title="Distribution Channels"
      subtitle="ResolveAI. Channel fit analysis"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Save sequence
        </button>
      }
    >
      <div className="space-y-3">
        {CHANNELS.map((ch) => (
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
          {["Support communities", "LinkedIn groups", "Cold email"].map(
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
          Start with these three channels simultaneously. Add SaaS review sites
          and SEO once you have 30+ conversations from outbound.
        </p>
      </div>
    </AppShell>
  );
}
