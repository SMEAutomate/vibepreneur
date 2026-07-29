import { VibeOpportunityScreen } from "../../vibe/VibeOpportunityScreen";

export function CYVibeOpportunity() {
  return (
    <VibeOpportunityScreen
      subtitle="Changeover loss visibility for contract manufacturers"
      problem="Manufacturing execution systems report uptime, downtime, and output. None of them price the changeover. A plant running mixed lines can lose a fifth of its available capacity to switching between products and still show healthy OEE, because changeover is booked as planned downtime and planned downtime is invisible. Plant managers feel the loss in missed schedules and cannot put a number on it, which means it never competes for capital."
      signals={[
        { label: "Capacity lost", value: "14 to 22%" },
        { label: "Currently measured", value: "Rarely" },
        { label: "Plants in segment", value: "~28K" },
        { label: "Payback period", value: "Under 3 months" },
      ]}
      urgency={[
        "Order sizes keep shrinking as customers hold less inventory, so changeover frequency rises every year",
        "Capital for new lines is harder to justify in 2026 than recovering capacity from existing ones",
        "Experienced operators retiring takes changeover knowledge with them, and times are drifting up",
      ]}
      primaryBuyer="Plant Operations Manager"
      budgetHolder="Operations Director / VP Manufacturing"
      champions="Continuous Improvement Lead, Line Supervisors"
      wedge="Two weeks of manual changeover logging on one line, returned as a single number for annual recoverable capacity. It is a screenshot, and it sells the plant."
      entryFormat="Two week single line pilot"
      score={91}
      scoreLines={[
        { label: "Market demand", score: 9 },
        { label: "Your fit", score: 10 },
        { label: "Timing", score: 9 },
        { label: "Competition gap", score: 9 },
      ]}
    />
  );
}
