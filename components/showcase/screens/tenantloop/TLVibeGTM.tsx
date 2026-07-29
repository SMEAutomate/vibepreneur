import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function TLVibeGTM() {
  return (
    <VibeCanvasScreen
      activeNav="Go-To-Market"
      title="Go-To-Market Plan"
      subtitle="TenantLoop. First ninety days."
      actionLabel="Export plan"
      narrativeCards={[
        {
          label: "Ideal First Customer",
          content:
            "Commercial property managers running 300 to 1,500 leases across a mixed portfolio, where one asset manager covers more properties than they can hold in their head. Large enough to lose a tenant expensively, small enough to have no analytics function.",
        },
        {
          label: "Primary Motion",
          content:
            "Warm introductions through the asset management network Grace already had. In a market this small, a named referral converts at a rate no cold channel approaches, and the sector treats unfamiliar vendors with justified suspicion.",
        },
        {
          label: "Proof Asset",
          content:
            "A retrospective on the last twenty-four months of the prospect's own renewals. Showing which departures TenantLoop would have flagged, and when, ends the credibility conversation in one meeting.",
        },
      ]}
      listCards={[
        {
          label: "Channels, Scored",
          items: [
            "Warm referrals within the asset management network (9/10)",
            "Property management trade bodies and regional chapters (7/10)",
            "Industry conferences with a retrospective on stage (6/10)",
            "PMS vendor partnerships as a value-add module (5/10, long cycle)",
          ],
        },
        {
          label: "First Ninety Days",
          items: [
            "Weeks 1 to 3: eight retrospectives run for named contacts",
            "Weeks 4 to 7: three convert to paid portfolios",
            "Weeks 8 to 11: first trade body speaking slot with anonymised findings",
            "Week 12: two referrals from the first cohort, no outbound required",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Objections and Answers",
          pairs: [
            {
              name: "We know our tenants",
              detail:
                "The retrospective names the ones you lost. That conversation only goes one way.",
            },
            {
              name: "Our PMS cannot integrate",
              detail:
                "It exports a nightly file. That is the whole integration requirement.",
            },
            {
              name: "Risk scores are a black box",
              detail:
                "Every score lists its contributing signals with the underlying data behind each one.",
            },
          ],
        },
      ]}
    />
  );
}
