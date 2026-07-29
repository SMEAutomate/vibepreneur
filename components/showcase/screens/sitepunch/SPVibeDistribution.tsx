import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function SPVibeDistribution() {
  return (
    <VibeCanvasScreen
      activeNav="Distribution"
      title="Distribution Channels"
      subtitle="SitePunch. Where the buyers actually are."
      actionLabel="Score channels"
      narrativeCards={[
        {
          label: "Channel Thesis",
          content:
            "Superintendents do not read industry publications and do not attend software webinars. They are on site, they talk to each other, and they buy what the person on the last job was using. Distribution has to reach them where that conversation happens.",
        },
        {
          label: "Highest Scoring Channel",
          content:
            "Site trials. One free site produces a superintendent who moves to the next job in four months and asks for the tool by name. The trial is the marketing, and the industry's turnover is the distribution mechanism.",
        },
        {
          label: "What Did Not Work",
          content:
            "Paid search on construction software keywords returned main contractor procurement teams, not subcontractors. Cost per lead was fine and none of them converted. Switched off after six weeks.",
        },
      ]}
      listCards={[
        {
          label: "Channels, Scored",
          items: [
            "Free site trials with superintendent handover (9/10)",
            "Trade supplier counter partnerships and merchant networks (7/10)",
            "Main contractor preferred supplier lists (7/10, slow)",
            "Trade association regional meetings (5/10)",
            "Paid search on construction software terms (2/10, retired)",
          ],
        },
        {
          label: "Referral Mechanics",
          items: [
            "Every superintendent gets their next site free when they bring the tool with them",
            "Contracts managers see a portfolio view once three sites are live",
            "Close-out packs carry a discreet footer that main contractors notice",
            "Trades invited as free collaborators become buyers on their own jobs",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Channel Economics",
          pairs: [
            {
              name: "Site trial",
              detail: "£0 acquisition cost, 38% convert to paid within 90 days",
            },
            {
              name: "Merchant partnership",
              detail: "Revenue share, 11 weeks to first referral, high volume",
            },
            {
              name: "Preferred supplier list",
              detail:
                "Six month cycle, but lands eight to twenty subcontractors at once",
            },
          ],
        },
      ]}
    />
  );
}
