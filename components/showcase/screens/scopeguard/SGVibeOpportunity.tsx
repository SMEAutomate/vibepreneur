import { VibeOpportunityScreen } from "../../vibe/VibeOpportunityScreen";

export function SGVibeOpportunity() {
  return (
    <VibeOpportunityScreen
      subtitle="Scope drift tracking for agencies and professional services firms"
      problem="Agencies price on estimated effort and deliver on actual effort, and nobody reconciles the two until the account is already unprofitable. The extra revision round, the added stakeholder review, the resize request: each is too small to raise and collectively they are the margin. Time tracking captures hours but not the request that caused them, so the data exists and the conversation never happens."
      signals={[
        { label: "Typical scope drift", value: "11 to 18%" },
        { label: "Requests logged", value: "Under 20%" },
        { label: "Firms in segment", value: "~120K" },
        { label: "Margin sensitivity", value: "Very high" },
      ]}
      urgency={[
        "Buyers fatigued by open-ended contracts pushed the market toward fixed-scope retainers through 2026, which makes drift a direct margin hit rather than a billing conversation",
        "AI compressed delivery time on some tasks and clients now expect more iterations for the same fee",
        "Agency margins are thin enough that a five point swing decides whether the year works",
      ]}
      primaryBuyer="Delivery Director / Head of Operations"
      budgetHolder="Managing Director"
      champions="Account Directors, Finance Lead"
      wedge="A free drift audit against ninety days of existing time data. The agency already has the hours. The audit turns them into a number nobody in the leadership team has seen before."
      entryFormat="Free 90 day drift audit"
      score={85}
      scoreLines={[
        { label: "Market demand", score: 9 },
        { label: "Your fit", score: 10 },
        { label: "Timing", score: 8 },
        { label: "Competition gap", score: 6 },
      ]}
    />
  );
}
