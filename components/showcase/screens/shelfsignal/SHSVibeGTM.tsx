import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function SHSVibeGTM() {
  return (
    <VibeCanvasScreen
      activeNav="Go-To-Market"
      title="Go-To-Market Plan"
      subtitle="ShelfSignal. First ninety days."
      actionLabel="Export plan"
      narrativeCards={[
        {
          label: "Ideal First Customer",
          content:
            "Independent grocery or convenience chains running eight to sixty stores, with a single person responsible for replenishment across all of them. Large enough to feel the loss, small enough to have no demand planner.",
        },
        {
          label: "Primary Motion",
          content:
            "Buying groups. One relationship reaches forty member chains, and the group itself benefits when members order more predictably. Land the group, then run store trials member by member.",
        },
        {
          label: "Proof Asset",
          content:
            "A backtest. Feed a prospect twelve months of their own till data and show the stockouts ShelfSignal would have caught, priced in lost revenue. No claims, just their own history.",
        },
      ]}
      listCards={[
        {
          label: "Channels, Scored",
          items: [
            "Buying groups and symbol group head offices (highest intent, slowest cycle)",
            "Regional retail association events and trade shows",
            "Till system partners who want a retention story",
            "Replenishment manager communities on LinkedIn and WhatsApp",
          ],
        },
        {
          label: "First Ninety Days",
          items: [
            "Weeks 1 to 4: ten backtests run free for named chains",
            "Weeks 5 to 8: convert three to paid trials across all their stores",
            "Weeks 9 to 12: first buying group agreement with member pricing",
            "Ongoing: one case study per member conversion",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Objections and Answers",
          pairs: [
            {
              name: "Our system already flags low stock",
              detail:
                "It flags what already happened. This flags what happens in twelve days, while there is still time to order.",
            },
            {
              name: "We do not have clean data",
              detail:
                "The backtest runs on whatever the till exports. If it is too messy, that shows up free, before any commitment.",
            },
            {
              name: "Another subscription",
              detail:
                "Priced below the revenue recovered in the first month of the trial, and cancellable at any point.",
            },
          ],
        },
      ]}
    />
  );
}
