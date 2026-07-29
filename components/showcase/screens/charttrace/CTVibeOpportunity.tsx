import { VibeOpportunityScreen } from "../../vibe/VibeOpportunityScreen";

export function CTVibeOpportunity() {
  return (
    <VibeOpportunityScreen
      subtitle="Continuous documentation audit for outpatient groups"
      problem="Outpatient clinics bill thousands of encounters a month and review a sample of them once a year. By the time an annual audit finds a documentation pattern, the affected claims sit outside the correction window and the practice has already absorbed the loss. Everyone in the segment knows the gap exists. Almost nobody measures it continuously, because the tooling assumes a coding department that mid-size groups do not have."
      signals={[
        { label: "Avg revenue leakage", value: "3.1% of billings" },
        { label: "Audit cadence today", value: "Annual" },
        { label: "Clinics in segment", value: "~62K" },
        { label: "Willingness to pay", value: "High" },
      ]}
      urgency={[
        "Payer audit activity on evaluation and management coding rose again through the first half of 2026",
        "Outpatient groups are consolidating, and acquirers price documentation risk into the deal",
        "Coding staff turnover means institutional knowledge leaves faster than it can be rebuilt",
      ]}
      primaryBuyer="Practice Administrator"
      budgetHolder="Managing Partner / CFO"
      champions="Revenue Cycle Lead, Lead Coder"
      wedge="Run a free retrospective on 200 encounters and return a single number for revenue at risk. The number sells the subscription, because the practice cannot unsee it."
      entryFormat="Free retrospective audit"
      score={87}
      scoreLines={[
        { label: "Market demand", score: 9 },
        { label: "Your fit", score: 10 },
        { label: "Timing", score: 8 },
        { label: "Competition gap", score: 7 },
      ]}
    />
  );
}
