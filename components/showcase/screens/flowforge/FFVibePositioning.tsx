import { AppShell } from "@/components/demo/AppShell";

export function FFVibePositioning() {
  return (
    <AppShell
      activeNav="Positioning"
      title="Positioning Canvas"
      subtitle="FlowForge. Define how you win."
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
              "Ops directors at 100 to 500 person companies. Running 50+ manual processes across spreadsheets, email, and Slack. Engineering backlog means no help coming for months.",
          },
          {
            label: "Core Pains",
            items: [
              "18+ hours/week on manual process execution",
              "Every workflow change requires an engineering ticket",
              "15% error rate on manual handoffs",
              "Zero visibility into process status or bottlenecks",
            ],
          },
          {
            label: "Promise",
            content:
              "Build, deploy, and iterate on any ops workflow in hours, not months. No engineering tickets, no code, no waiting.",
          },
          {
            label: "Differentiation",
            items: [
              "Built for ops teams, not developers",
              "Visual workflow builder, not code",
              "Deploys in hours, not months",
              "Purpose-built for operational processes",
            ],
          },
          {
            label: "Why Now",
            content:
              "Ops headcount is frozen while process volume grows 20% year over year. Engineering teams are refusing non-product work. Compliance requirements demand documented, auditable processes.",
          },
          {
            label: "Competitive Landscape",
            items: [
              { name: "Zapier", gap: "Too simple for complex ops workflows" },
              { name: "Workato", gap: "Too expensive for mid-market teams" },
              { name: "Custom code", gap: "Too slow, requires engineering" },
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
