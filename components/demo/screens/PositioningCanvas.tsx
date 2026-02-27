import { AppShell } from "../AppShell";

export function PositioningCanvas() {
  return (
    <AppShell
      activeNav="Positioning"
      title="Positioning Canvas"
      subtitle="OnboardFlow — Define how you win."
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
              "VP People Ops at 50–200 person tech companies. Growing fast, hiring 5–10/month. Current process is manual, spread across email, spreadsheets, and Slack.",
          },
          {
            label: "Core Pains",
            items: [
              "12+ hours/week on repetitive tasks",
              "New hires feel lost in week one",
              "Compliance gaps from missed steps",
              "No visibility into onboarding status",
            ],
          },
          {
            label: "Promise",
            content:
              "Go from offer letter to productive employee in one day, not five. Automated, trackable, and zero tasks forgotten.",
          },
          {
            label: "Differentiation",
            items: [
              "Built for mid-market (not enterprise bloat)",
              "Works with existing tools, not instead of them",
              "Visible from day one — no 6-month implementation",
              "Human-first design, not IT-first",
            ],
          },
          {
            label: "Why Now",
            content:
              "Remote and hybrid work makes manual handoffs unreliable. Compliance requirements tightening in 2026. Growing companies can't afford to lose new hires in the first 90 days.",
          },
          {
            label: "Competitive Landscape",
            items: [
              { name: "BambooHR", gap: "Onboarding is an afterthought" },
              { name: "Rippling", gap: "Over-engineered for mid-market" },
              { name: "Manual", gap: "Error-prone, unscalable" },
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
                        <span className="text-neutral-400">— {item.gap}</span>
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
