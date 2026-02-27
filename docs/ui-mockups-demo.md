# UI Mockups Demo Page

Internal tool for reviewing Vibepreneur product UI concepts.

## Access

Visit `/demo` locally or on the deployed site. The page is marked `noindex, nofollow`. it won't appear in search results.

## Features

- **40 product screens** covering the full Insight → Solution → Positioning → GTM → Distribution → Growth flow
- **Search**. filter by screen title or tag
- **Tag filters**. multi-select to narrow by category
- **Density toggle**. comfortable (3-col) or compact (4-col) layout
- **Annotations toggle**. overlays callouts explaining what each screen communicates
- **Full-screen preview modal**. click any card to open; supports keyboard navigation (← → Esc)
- **"Include on site" toggle**. mark screens for the marketing site; persists in localStorage
- **Copy notes**. copies screen title, description, tags, and inclusion status to clipboard
- **Selected counter**. header shows "Selected: X/40"

## File Structure

```
lib/mockScreens.ts              . Screen definitions (id, title, tags, annotations)
components/demo/
  AppShell.tsx                   . Shared product UI chrome (sidebar nav)
  DemoGallery.tsx                . Gallery grid with search, filters, controls
  ScreenPreviewModal.tsx         . Full-screen modal with keyboard nav
  MockScreenRenderer.tsx         . Dynamic import router for screen components
  AnnotationLayer.tsx            . Overlay callouts for each screen
  screens/
    HomeOverview.tsx             . #1
    OpportunityFinder.tsx        . #2
    OpportunityDetail.tsx        . #3
    SolutionBuilder.tsx          . #4
    SolutionBriefExport.tsx      . #5
    PositioningCanvas.tsx        . #6
    MessagingMatrix.tsx          . #7
    PricingPackaging.tsx         . #8
    GoToMarketPlan.tsx           . #9
    DistributionChannels.tsx     . #10
    OutreachStudio.tsx           . #11
    ContentLaunchKit.tsx         . #12
    LandingPageBuilder.tsx       . #13
    LeadMagnetBuilder.tsx        . #14
    ValidationTracker.tsx        . #15
    GrowthDashboard.tsx          . #16
    FeedbackInbox.tsx            . #17
    RoadmapIteration.tsx         . #18
    WorkspaceSettings.tsx        . #19
    OnboardingFlow.tsx           . #20
    ExpertiseAnalyzer.tsx        . #21
    MarketSignals.tsx            . #22
    CompetitorRadar.tsx          . #23
    BuyerPersonaEditor.tsx       . #24
    ObjectionHandler.tsx         . #25
    ValuePropWorkshop.tsx        . #26
    UserJourneyMap.tsx           . #27
    FeaturePrioritizer.tsx       . #28
    ComparisonPageBuilder.tsx    . #29
    ICPDefinition.tsx            . #30
    ChannelExperiments.tsx       . #31
    ReferralProgram.tsx          . #32
    SEOKeywordPlanner.tsx        . #33
    SocialProofCollector.tsx     . #34
    AIAssistant.tsx              . #35
    ExportCenter.tsx             . #36
    TeamWorkspace.tsx            . #37
    NotificationCenter.tsx       . #38
    WinLossAnalysis.tsx          . #39
    RevenueProjection.tsx        . #40
app/demo/
  layout.tsx                     . Standalone layout (no marketing nav/footer)
  page.tsx                       . Entry point
```

## Adding a New Screen

1. Create a component in `components/demo/screens/NewScreen.tsx`
2. Add an entry to `mockScreens` in `lib/mockScreens.ts`
3. Add a dynamic import in `components/demo/MockScreenRenderer.tsx`
