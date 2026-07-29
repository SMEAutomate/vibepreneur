import { VibeOpportunityScreen } from "../../vibe/VibeOpportunityScreen";

export function SPVibeOpportunity() {
  return (
    <VibeOpportunityScreen
      subtitle="Handover close-out for fit-out subcontractors"
      problem="Every commercial fit-out ends with the same three weeks. Defects live in photo threads, paper lists, and one superintendent's memory. Nobody can say which items block handover, so retention sits unpaid while the same conversation repeats daily. The main contractor platforms handle this well and cost more than a subcontractor's annual software budget, so the subcontractor keeps using WhatsApp."
      signals={[
        { label: "Avg handover slip", value: "17 days" },
        { label: "Retention held", value: "5% of contract" },
        { label: "Firms in segment", value: "~48K" },
        { label: "Current tooling", value: "Photos and paper" },
      ]}
      urgency={[
        "Fit-out programmes compressed again in 2026 as tenants sign later and demand earlier occupancy",
        "Labour scarcity means chasing trades by phone costs more supervisor time than it used to",
        "Main contractors increasingly require digital close-out packs that subcontractors cannot produce",
      ]}
      primaryBuyer="Site Superintendent"
      budgetHolder="Contracts Manager / Director"
      champions="Project Coordinator, Foreman"
      wedge="Free for one site. The superintendent uploads a floor plan and logs defects from their phone that afternoon. Adoption happens on site before anyone signs anything."
      entryFormat="Single free site"
      score={82}
      scoreLines={[
        { label: "Market demand", score: 8 },
        { label: "Your fit", score: 10 },
        { label: "Timing", score: 8 },
        { label: "Competition gap", score: 7 },
      ]}
    />
  );
}
