import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function SGVibePricing() {
  return (
    <VibeCanvasScreen
      activeNav="Solutions"
      title="Pricing & Packaging"
      subtitle="ScopeGuard. Priced on the margin it protects."
      actionLabel="Model pricing"
      narrativeCards={[
        {
          label: "Pricing Principle",
          content:
            "Agencies buy things that protect margin and resist things that add cost per head. Pricing is banded by fee income rather than by user, so adding the whole delivery team costs nothing and adoption is never a budget decision.",
        },
        {
          label: "The Wedge",
          content:
            "The free drift audit produces one number: unbilled effort over ninety days. Every subscription tier is quoted against that number, so the buyer is comparing a price to a loss they now know the size of.",
        },
        {
          label: "What Was Rejected",
          content:
            "Per-seat pricing was tested first and failed for the obvious reason. If the account manager who takes the request is not in the tool, the request never gets logged, and the product stops working. Seats were the wrong unit for this product.",
        },
      ]}
      listCards={[
        {
          label: "Tiers",
          items: [
            "Drift audit: free, ninety days of historical time data, one report",
            "Studio: $340 per month, up to $2M fee income, unlimited users",
            "Agency: $780 per month, up to $8M fee income, adds team margin analysis",
            "Group: $1,900 per month, multi-entity, adds cross-agency benchmarking",
          ],
        },
        {
          label: "Why It Retains",
          items: [
            "The change log becomes the evidence base for every renewal negotiation",
            "Historical drift data gets more valuable each quarter it accumulates",
            "Finance starts using realised rate in forecasting, which embeds it",
            "Cancelling means going back to discovering overservicing at year end",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Unit Economics",
          pairs: [
            {
              name: "Median recovered effort",
              detail: "$62K annually against $4,080 in subscription",
            },
            {
              name: "Time to value",
              detail: "First billable change request, typically inside 3 weeks",
            },
            {
              name: "Gross retention",
              detail:
                "94%, with churn concentrated in agencies under $1M fee income",
            },
          ],
        },
      ]}
    />
  );
}
