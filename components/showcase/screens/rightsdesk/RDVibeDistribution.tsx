import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function RDVibeDistribution() {
  return (
    <VibeCanvasScreen
      activeNav="Distribution"
      title="Distribution Channels"
      subtitle="RightsDesk. The industry gathers four times a year."
      actionLabel="Score channels"
      narrativeCards={[
        {
          label: "Channel Thesis",
          content:
            "This industry does not buy software from websites. It buys from people it has met at a market. Four events a year account for most of the relationships in independent distribution, and being present at them is effectively the entire top of funnel.",
        },
        {
          label: "Highest Scoring Channel",
          content:
            "Markets. Not a stand, a hotel suite and twenty scheduled demonstrations of a prospect's own catalogue loaded in advance. Preparation converts, presence alone does not.",
        },
        {
          label: "The Multiplier",
          content:
            "Distribution consultants advise multiple catalogues each. Winning one consultant reaches four to nine potential customers with a recommendation that carries more weight than any campaign.",
        },
      ]}
      listCards={[
        {
          label: "Channels, Scored",
          items: [
            "Film and TV markets with pre-booked demonstrations (9/10)",
            "Distribution and sales consultants as referral partners (8/10)",
            "Festival industry programmes and producer labs (6/10)",
            "Trade press and industry newsletters (4/10, credibility not leads)",
            "Paid search (1/10, the segment does not search for this)",
          ],
        },
        {
          label: "Market Playbook",
          items: [
            "Load the prospect's real catalogue before the meeting, never a generic demo",
            "Lead with the conflict detection, because everyone has been burned by one",
            "Offer migration of the existing spreadsheet as part of onboarding",
            "Follow up within 72 hours, before the market fades from memory",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Channel Economics",
          pairs: [
            {
              name: "Market attendance",
              detail:
                "€6,400 per market, 20 meetings, typically 5 to 7 conversions",
            },
            {
              name: "Consultant referral",
              detail: "Revenue share, no upfront cost, 62% close rate",
            },
            {
              name: "Festival programmes",
              detail: "Low cost, slow, builds the catalogue of case studies",
            },
          ],
        },
      ]}
    />
  );
}
