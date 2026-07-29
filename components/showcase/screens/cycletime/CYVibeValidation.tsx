import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function CYVibeValidation() {
  return (
    <VibeCanvasScreen
      activeNav="Insights"
      title="Validation Tracker"
      subtitle="CycleTime. Four trials before committing to build."
      actionLabel="Log next trial"
      narrativeCards={[
        {
          label: "What Was Being Tested",
          content:
            "Not whether changeover loss exists. Viktor already knew it did. The question was whether a plant manager would pay for visibility into a number they had been ignoring for years, and whether they would act on it once they had it.",
        },
        {
          label: "Kill Criteria, Set Upfront",
          content:
            "If fewer than three of four trial plants took an improvement action within thirty days of seeing their number, the idea was dead. Measuring something nobody acts on is a report, not a product.",
        },
        {
          label: "Result",
          content:
            "Four of four acted. Three did so within two weeks, and two of those chose actions requiring no capital at all. The build proceeded, and all four became paying customers.",
        },
      ]}
      listCards={[
        {
          label: "Trial Design",
          items: [
            "Two weeks of manual changeover logging, one line per plant",
            "One page returned: hours lost, benchmark gap, annualised value",
            "No product, no software, a spreadsheet and a site visit",
            "Follow-up at thirty days asking only what they had changed",
          ],
        },
        {
          label: "What The Trials Changed",
          items: [
            "Delay causes mattered more than total duration, so the product leads with them",
            "Plant managers wanted the business case format, not the raw analysis",
            "Scrap at restart was consistently forgotten and consistently significant",
            "Multi-plant comparison was the feature that unlocked group-level budget",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Trial Outcomes",
          pairs: [
            {
              name: "Plant A, packaging",
              detail:
                "Resequenced runs in week 2, recovered 480 hrs annualised",
            },
            {
              name: "Plant B, food",
              detail: "Staged tooling kits, 11% reduction in changeover time",
            },
            {
              name: "Plant C, pharma",
              detail: "Approved a calibration jig, slowest to act at 26 days",
            },
            {
              name: "Plant D, cosmetics",
              detail: "Changed shift handover timing, no capital required",
            },
          ],
        },
      ]}
    />
  );
}
