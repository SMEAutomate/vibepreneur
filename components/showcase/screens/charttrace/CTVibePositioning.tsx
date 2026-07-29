import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function CTVibePositioning() {
  return (
    <VibeCanvasScreen
      activeNav="Positioning"
      title="Positioning Canvas"
      subtitle="ChartTrace. Define how you win."
      actionLabel="Export canvas"
      narrativeCards={[
        {
          label: "Ideal Customer Profile",
          content:
            "Practice administrators at outpatient groups running 4 to 30 providers across multiple sites. Already billing evaluation and management codes at volume, already worried about audit exposure, and without a dedicated coding department.",
        },
        {
          label: "Promise",
          content:
            "Know your revenue at risk this week, not after the annual audit. Every finding arrives with the evidence and the clinician query that closes it.",
        },
        {
          label: "Why Now",
          content:
            "Payer audit activity on evaluation and management coding keeps rising, consolidation makes documentation risk a diligence item, and coding turnover drains the institutional knowledge practices used to rely on.",
        },
      ]}
      listCards={[
        {
          label: "Core Pains",
          items: [
            "Documentation patterns surface a year late, outside the correction window",
            "Coding review is a sample, so the practice never knows its true exposure",
            "Clinician queries are ad hoc and rarely tracked to resolution",
            "Audit findings arrive as a report, not as work anyone can action",
          ],
        },
        {
          label: "Differentiation",
          items: [
            "Continuous review, not an annual engagement",
            "Priced against recovered revenue, not per coder seat",
            "Ships the clinician query, not just the finding",
            "Built for groups without a coding department",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Competitive Landscape",
          pairs: [
            {
              name: "Annual audit consultants",
              detail:
                "One snapshot a year, findings arrive too late to correct",
            },
            {
              name: "Enterprise CDI platforms",
              detail: "Priced and scoped for hospital systems",
            },
            {
              name: "Coding software add-ons",
              detail: "Checks the code, not whether the note supports it",
            },
          ],
        },
      ]}
    />
  );
}
