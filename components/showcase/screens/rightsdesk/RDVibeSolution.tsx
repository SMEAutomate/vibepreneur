import { VibeCanvasScreen } from "../../vibe/VibeCanvasScreen";

export function RDVibeSolution() {
  return (
    <VibeCanvasScreen
      activeNav="Solutions"
      title="Solution Builder"
      subtitle="RightsDesk. Scoped for independents, not studios."
      actionLabel="Generate build prompts"
      narrativeCards={[
        {
          label: "The Real Asset",
          content:
            "Elena's spreadsheet held 300 titles across 40 territories and only she could read it. The value was never the spreadsheet. It was the model of how rights, windows, and holdbacks interact, which existed nowhere else in the company.",
        },
        {
          label: "Solution Shape",
          content:
            "A grid that answers one question instantly: what can I sell, where, and when. Everything else in the product exists to keep that grid accurate.",
        },
        {
          label: "Why Independents",
          content:
            "Enterprise rights systems are built for studios with legal departments and cost more than most independents' annual overhead. The segment below that line has spreadsheets and nothing else, which is a market rather than a gap.",
        },
      ]}
      listCards={[
        {
          label: "Core Capability",
          items: [
            "Availability grid across title, territory, window, and rights type",
            "Conflict detection when grants overlap",
            "Deal terms with minimum guarantees and reporting obligations",
            "Participation statements with rights-holder splits and recoupment",
          ],
        },
        {
          label: "Deliberately Out",
          items: [
            "Contract drafting and e-signature",
            "Asset delivery and mastering",
            "Royalty accounting for music publishing",
            "Anything requiring a legal review to configure",
          ],
        },
      ]}
      pairCards={[
        {
          label: "Build Path",
          pairs: [
            {
              name: "Weeks 1 to 4",
              detail:
                "Rights model and grid, validated by migrating Elena's own catalogue",
            },
            {
              name: "Weeks 5 to 8",
              detail: "Deal terms, obligation tracking, and conflict detection",
            },
            {
              name: "Weeks 9 to 12",
              detail:
                "Participation statements, then three catalogues onboarded at a market",
            },
          ],
        },
      ]}
    />
  );
}
