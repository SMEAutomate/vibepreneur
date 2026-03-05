import { AppShell } from "@/components/demo/AppShell";

export function SSVibePositioning() {
  return (
    <AppShell
      activeNav="Positioning"
      title="Positioning Canvas"
      subtitle="SystemSync. Define how you win."
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
              "Design systems leads and front-end platform teams at companies with 100+ engineers. Series B through public. Currently tracking adoption via spreadsheets or not at all.",
          },
          {
            label: "Core Pains",
            items: [
              "No visibility into which teams actually use the design system",
              "Token drift compounds silently until the next visual audit",
              "Quarterly manual audits take weeks and are outdated immediately",
              "Cannot justify design system investment without adoption data",
            ],
          },
          {
            label: "Promise",
            content:
              "See exactly how your design system is used, adopted, and drifting across every team. Replace quarterly audits with real-time analytics. Prove your system's ROI with data.",
          },
          {
            label: "Differentiation",
            items: [
              "Analytics layer that no design tool provides today",
              "Tracks actual code usage, not just Figma layer adoption",
              "Team-level compliance scoring with automated drift alerts",
              "Bridges the gap between design tools and production code",
            ],
          },
          {
            label: "Why Now",
            content:
              "Design systems teams are under pressure to prove ROI. Engineering orgs are scaling faster than design system teams can manually audit. Component libraries are growing beyond what spreadsheets can track.",
          },
          {
            label: "Competitive Landscape",
            items: [
              {
                name: "Storybook",
                gap: "No adoption or usage analytics",
              },
              {
                name: "Figma",
                gap: "Design-side only, no code tracking",
              },
              {
                name: "Manual audits",
                gap: "Quarterly at best, outdated on delivery",
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
