import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function TLVibeSolution() {
  return (
    <VibeCanvasScreen
      activeNav="Solutions"
      title="Solution Builder"
      subtitle="TenantLoop. Built on a metric they already report."
      actionLabel="Generate build prompts"
      narrativeCards={[
        {
          label: "Anchor Metric",
          content:
            "Asset managers already report retention rate and WALT to their investment committee every quarter. TenantLoop attaches to those two numbers rather than introducing a new one, which is why it got past the first meeting.",
        },
        {
          label: "Solution Shape",
          content:
            "A renewal risk score per lease, refreshed monthly, with the signals that produced it and a recommended action. The recommendation is deliberately specific, because a score with no next step gets read once and ignored.",
        },
        {
          label: "Integration Reality",
          content:
            "Property management systems are old and closed. TenantLoop reads nightly exports rather than demanding an API, which removed the IT objection entirely and cut the pilot start from months to days.",
        },
      ]}
      listCards={[
        {
          label: "Core Capability",
          items: [
            "Renewal risk score twelve months ahead of expiry",
            "Signal breakdown across payment, utilisation, service, and engagement",
            "Recommended retention action per tenant",
            "Portfolio roll-up for occupancy, WALT, and income concentration",
          ],
        },
        {
          label: "Not In Scope",
          items: [
            "Rent collection and accounting",
            "Lease document management",
            "Facilities and maintenance workflow",
            "Valuation and investment modelling",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Build Path",
          pairs: [
            {
              name: "Weeks 1 to 5",
              detail:
                "Risk model built against six years of renewal outcomes from two friendly managers",
            },
            {
              name: "Weeks 6 to 9",
              detail:
                "Nightly export ingestion for the three dominant PMS platforms",
            },
            {
              name: "Week 10",
              detail: "First paid portfolio, 140 leases across four properties",
            },
          ],
        },
      ]}
    />
  );
}
