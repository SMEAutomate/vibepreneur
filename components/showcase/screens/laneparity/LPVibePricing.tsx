import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function LPVibePricing() {
  return (
    <VibeCanvasScreen
      activeNav="Solutions"
      title="Pricing & Packaging"
      subtitle="LaneParity. Priced against what it recovers."
      actionLabel="Model pricing"
      narrativeCards={[
        {
          label: "Pricing Principle",
          content:
            "The product recovers freight spend, so it is priced as a fraction of that recovery rather than per user. Nobody in procurement has ever been told to add seats, and every one of them has been told to cut spend.",
        },
        {
          label: "The Anchor",
          content:
            "The free benchmark report produces a specific annual overpay number before any price is discussed. Every plan is then quoted as a percentage of that number, which makes the decision arithmetic rather than budgetary.",
        },
        {
          label: "What Was Rejected",
          content:
            "Per-lane pricing punished exactly the customers with the most to gain. Per-seat pricing capped accounts at two users. Both were tested with six prospects and both stalled at the same objection.",
        },
      ]}
      listCards={[
        {
          label: "Tiers",
          items: [
            "Benchmark: free, one rate file, percentile report, no ongoing access",
            "Core: $890 per month, up to 150 lanes, quarterly refresh, carrier scorecard",
            "Portfolio: $2,400 per month, unlimited lanes, monthly refresh, trend and renewal timing",
            "Portfolio plus advisory: $4,100 per month, adds two negotiation prep sessions per quarter",
          ],
        },
        {
          label: "Expansion Levers",
          items: [
            "Lane count grows naturally as customers add corridors",
            "Refresh frequency upgrades during contract season",
            "Carrier scorecard pulls in the supplier management budget",
            "Advisory sessions convert procurement teams into internal champions",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Unit Economics",
          pairs: [
            {
              name: "Median customer recovery",
              detail: "$186K annually against $10,680 in subscription",
            },
            {
              name: "Payback for the customer",
              detail: "First renegotiation, typically inside 60 days",
            },
            {
              name: "Net revenue retention",
              detail: "118%, driven by lane growth rather than price rises",
            },
          ],
        },
      ]}
    />
  );
}
