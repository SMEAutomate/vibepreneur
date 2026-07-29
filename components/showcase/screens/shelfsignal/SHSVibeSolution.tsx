import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function SHSVibeSolution() {
  return (
    <VibeCanvasScreen
      activeNav="Solutions"
      title="Solution Builder"
      subtitle="ShelfSignal. One workflow, done properly."
      actionLabel="Generate build prompts"
      narrativeCards={[
        {
          label: "Solution Shape",
          content:
            "A prediction and a purchase order. ShelfSignal reads point of sale and stock data, forecasts which SKUs run dry in the next fourteen days, and hands back an order that prevents it. Nothing else.",
        },
        {
          label: "Scope Boundary",
          content:
            "No warehouse management, no planograms, no supplier portal. Every feature request that does not shorten the path from signal to purchase order gets declined and logged.",
        },
        {
          label: "Data In",
          content:
            "Nightly export from the till system, current stock on hand, and a supplier file with lead times and minimum order quantities. Three inputs, all of which the retailer already produces.",
        },
      ]}
      listCards={[
        {
          label: "Core Capability",
          items: [
            "Fourteen day stockout forecast ranked by lost revenue",
            "Reorder quantities that respect lead time and minimum order size",
            "Store level drift alerts when a location leaves plan",
            "Overstock offset so slow movers help clear order minimums",
          ],
        },
        {
          label: "Deliberately Excluded",
          items: [
            "Full inventory management",
            "Supplier negotiation and contracts",
            "Ecommerce and marketplace stock",
            "Anything requiring a real-time integration",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Build Path",
          pairs: [
            {
              name: "Weeks 1 to 3",
              detail:
                "Forecast engine against twelve months of historical till data from one friendly chain",
            },
            {
              name: "Weeks 4 to 6",
              detail:
                "Reorder logic, supplier constraints, and the single dashboard screen",
            },
            {
              name: "Week 7",
              detail: "First paid pilot across fourteen stores",
            },
          ],
        },
      ]}
    />
  );
}
