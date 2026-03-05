import { AppShell } from "@/components/demo/AppShell";

export function CIQVibePositioning() {
  return (
    <AppShell
      activeNav="Positioning"
      title="Positioning Canvas"
      subtitle="ChannelIQ. Define how you win."
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
              "VP Marketing or Head of Demand Gen at B2B companies spending $50K+/month across 5+ channels. 100 to 500 employees, Series B through D. Currently using spreadsheets or last-click models for attribution.",
          },
          {
            label: "Core Pains",
            items: [
              "23% of marketing budget wasted on poorly attributed channels",
              "8+ hours/week building manual attribution reports",
              "No confidence in channel ROI during board reviews",
              "Cannot connect top-of-funnel activity to closed revenue",
            ],
          },
          {
            label: "Promise",
            content:
              "See exactly which channels drive pipeline and revenue. Make budget decisions backed by multi-touch attribution data, not guesswork. Set up in days, not months.",
          },
          {
            label: "Differentiation",
            items: [
              "Built for mid-market (not enterprise complexity pricing)",
              "Multi-touch attribution out of the box, no data science team needed",
              "Connects ad spend to closed revenue, not just leads",
              "Live dashboard, not quarterly reports that arrive too late",
            ],
          },
          {
            label: "Why Now",
            content:
              "Cookie deprecation and privacy changes are breaking last-click attribution. Boards are demanding marketing accountability. Multi-channel strategies are expanding faster than teams can track them manually.",
          },
          {
            label: "Competitive Landscape",
            items: [
              {
                name: "HubSpot Attribution",
                gap: "Requires enterprise tier, complex setup",
              },
              {
                name: "Google Analytics",
                gap: "Last-click only, no revenue connection",
              },
              {
                name: "Dreamdata",
                gap: "Too expensive for mid-market ($2K+/mo)",
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
