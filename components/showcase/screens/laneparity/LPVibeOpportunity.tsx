import { VibeOpportunityScreen } from "../../vibe/VibeOpportunityScreen";

export function LPVibeOpportunity() {
  return (
    <VibeOpportunityScreen
      subtitle="Freight rate benchmarking for mid-market shippers"
      problem="Carriers price with market data. Mid-market shippers price with last year's number and a feeling. The benchmarking services that would close that gap are sold at enterprise contract values and assume a transport analytics team, so a company moving $8M of freight a year negotiates blind against a counterparty that is not. The asymmetry is well understood by everyone in the room and nobody in the segment has tooling to fix it."
      signals={[
        { label: "Typical overpay", value: "4 to 9%" },
        { label: "Negotiation cadence", value: "Twice yearly" },
        { label: "Shippers in segment", value: "~34K" },
        { label: "Existing tools", value: "Enterprise only" },
      ]}
      urgency={[
        "Rate volatility through 2026 has widened the gap between well-informed and under-informed shippers",
        "Procurement headcount stayed flat while lane counts grew, so nobody has time to build the analysis",
        "Carriers consolidated further, which strengthens their side of every negotiation",
      ]}
      primaryBuyer="Transport Procurement Manager"
      budgetHolder="Supply Chain Director"
      champions="Logistics Analyst, Finance Business Partner"
      wedge="Upload a rate file, get back the percentile on every lane and one number for annual overpay. That report is the entire first conversation, and it costs nothing to produce."
      entryFormat="Free lane benchmark report"
      score={89}
      scoreLines={[
        { label: "Market demand", score: 9 },
        { label: "Your fit", score: 10 },
        { label: "Timing", score: 9 },
        { label: "Competition gap", score: 8 },
      ]}
    />
  );
}
