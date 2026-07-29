import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function CLVibePositioning() {
  return (
    <VibeCanvasScreen
      activeNav="Positioning"
      title="Positioning Canvas"
      subtitle="CohortLens. Define how you win."
      actionLabel="Export canvas"
      narrativeCards={[
        {
          label: "Ideal Customer Profile",
          content:
            "Heads of quality or curriculum at independent training providers delivering 800 to 6,000 learners a year under outcome-linked funding. Already reporting achievement rates, already penalised when they slip.",
        },
        {
          label: "Promise",
          content:
            "See the withdrawal five weeks before it happens, while an intervention still changes the outcome. Then evidence what you did about it.",
        },
        {
          label: "Why Now",
          content:
            "Funding is tied to achievement more tightly each year, provider margins are thin enough that a three point completion swing decides viability, and inspection regimes increasingly ask what the provider did with early warning data.",
        },
      ]}
      listCards={[
        {
          label: "Core Pains",
          items: [
            "Withdrawal shows up in reporting long after the point of influence",
            "Risk lives in individual tutors' heads and leaves when they do",
            "Intervention effort is invisible at inspection because nobody logs it",
            "Funder reporting is rebuilt by hand every submission window",
          ],
        },
        {
          label: "Differentiation",
          items: [
            "Sits above the LMS rather than replacing it",
            "Scores explain themselves in one sentence",
            "Built by a head of learning, not a data vendor",
            "Priced per provider, not per learner, so growth is not penalised",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Competitive Landscape",
          pairs: [
            {
              name: "LMS reporting modules",
              detail: "Descriptive, not predictive, and one system per report",
            },
            {
              name: "MIS providers",
              detail: "Compliance first, intervention never",
            },
            {
              name: "Consultant-built dashboards",
              detail: "Accurate once, stale within a term",
            },
          ],
        },
      ]}
    />
  );
}
