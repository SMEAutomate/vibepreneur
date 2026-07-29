import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function CLVibeSolution() {
  return (
    <VibeCanvasScreen
      activeNav="Solutions"
      title="Solution Builder"
      subtitle="CohortLens. From spreadsheet heuristic to product."
      actionLabel="Generate build prompts"
      narrativeCards={[
        {
          label: "The Original Asset",
          content:
            "Hannah had a spreadsheet that scored learners on five signals and predicted withdrawal about five weeks out. It was accurate, it was hers, and it did not survive being handed to anyone else. The product is that spreadsheet, made transferable.",
        },
        {
          label: "Solution Shape",
          content:
            "A risk score per learner, a ranked list, and an intervention log. The score explains itself in one sentence so a tutor can act without interpreting a model.",
        },
        {
          label: "Why Not An LMS Feature",
          content:
            "Providers run two or three learning systems and will not migrate. CohortLens reads from all of them and owns none of the delivery, which is what made procurement short rather than long.",
        },
      ]}
      listCards={[
        {
          label: "Core Capability",
          items: [
            "Withdrawal risk score with a plain-language driver",
            "Cohort completion forecast against the funding target",
            "Intervention log with owner, date, and outcome",
            "Funder-ready achievement reporting by programme and site",
          ],
        },
        {
          label: "Scope Held Back",
          items: [
            "Course delivery and content",
            "Assessment and portfolio tooling",
            "Timetabling and attendance capture",
            "Anything that competes with the incumbent LMS",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Build Path",
          pairs: [
            {
              name: "Weeks 1 to 4",
              detail:
                "Port the scoring heuristic and validate it against three years of historical cohorts",
            },
            {
              name: "Weeks 5 to 9",
              detail:
                "Connectors for the two dominant LMS platforms, plus a CSV fallback",
            },
            {
              name: "Weeks 10 to 12",
              detail: "Funder reporting, then first two paid providers",
            },
          ],
        },
      ]}
    />
  );
}
