import { AppShell } from "@/components/demo/AppShell";

export function CGVibePositioning() {
  return (
    <AppShell
      activeNav="Positioning"
      title="Positioning Canvas"
      subtitle="ClauseGuard. Define how you win."
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Export canvas
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            label: "Ideal Customer Profile",
            content:
              "Legal ops managers at companies with 200 to 2,000 employees. Reviewing 20+ contracts per month across vendors, partnerships, and employment. Current process involves manual redlining and outside counsel for anything complex.",
          },
          {
            label: "Core Pains",
            items: [
              "Contract reviews take days, delaying deals and renewals",
              "High-risk clauses slip through when volume spikes",
              "Outside counsel fees consuming 30%+ of legal budget",
              "No centralized view of contract risk across the portfolio",
            ],
          },
          {
            label: "Promise",
            content:
              "Review contracts in minutes, not days. AI flags every risky clause so your team can focus on negotiation, not reading. Full audit trail, zero surprises at renewal.",
          },
          {
            label: "Differentiation",
            items: [
              "Purpose-built for risk flagging, not workflow management",
              "Works alongside existing CLM tools, not replacing them",
              "Configurable risk rules that match your company's standards",
              "Transparent AI reasoning for every flag, not a black box",
            ],
          },
          {
            label: "Why Now",
            content:
              "AI quality has crossed the threshold for reliable clause extraction. Compliance pressure is increasing across industries. Legal teams are understaffed and expected to do more with less. Contract volume is growing faster than headcount.",
          },
          {
            label: "Competitive Landscape",
            items: [
              {
                name: "Ironclad",
                gap: "Enterprise overkill, 6-month implementation",
              },
              {
                name: "Juro",
                gap: "Workflow focused, not risk-first",
              },
              {
                name: "Manual review",
                gap: "Slow, expensive, and error-prone at scale",
              },
            ],
          },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {card.label}
            </h3>
            {"content" in card && (
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {card.content}
              </p>
            )}
            {"items" in card && card.items && (
              <ul className="mt-3 space-y-2">
                {card.items.map((item) => (
                  <li
                    key={typeof item === "string" ? item : item.name}
                    className="flex items-start gap-2 text-sm text-neutral-600"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <span>
                        {item.name}{" "}
                        <span className="text-neutral-400">- {item.gap}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </AppShell>
  );
}
