import dynamic from "next/dynamic";

const screenComponents: Record<string, React.ComponentType> = {
  HomeOverview: dynamic(
    () =>
      import("./screens/HomeOverview").then((m) => ({
        default: m.HomeOverview,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  OpportunityFinder: dynamic(
    () =>
      import("./screens/OpportunityFinder").then((m) => ({
        default: m.OpportunityFinder,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  OpportunityDetail: dynamic(
    () =>
      import("./screens/OpportunityDetail").then((m) => ({
        default: m.OpportunityDetail,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SolutionBuilder: dynamic(
    () =>
      import("./screens/SolutionBuilder").then((m) => ({
        default: m.SolutionBuilder,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SolutionBriefExport: dynamic(
    () =>
      import("./screens/SolutionBriefExport").then((m) => ({
        default: m.SolutionBriefExport,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  PositioningCanvas: dynamic(
    () =>
      import("./screens/PositioningCanvas").then((m) => ({
        default: m.PositioningCanvas,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  MessagingMatrix: dynamic(
    () =>
      import("./screens/MessagingMatrix").then((m) => ({
        default: m.MessagingMatrix,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  PricingPackaging: dynamic(
    () =>
      import("./screens/PricingPackaging").then((m) => ({
        default: m.PricingPackaging,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  GoToMarketPlan: dynamic(
    () =>
      import("./screens/GoToMarketPlan").then((m) => ({
        default: m.GoToMarketPlan,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  DistributionChannels: dynamic(
    () =>
      import("./screens/DistributionChannels").then((m) => ({
        default: m.DistributionChannels,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  OutreachStudio: dynamic(
    () =>
      import("./screens/OutreachStudio").then((m) => ({
        default: m.OutreachStudio,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  ContentLaunchKit: dynamic(
    () =>
      import("./screens/ContentLaunchKit").then((m) => ({
        default: m.ContentLaunchKit,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  LandingPageBuilder: dynamic(
    () =>
      import("./screens/LandingPageBuilder").then((m) => ({
        default: m.LandingPageBuilder,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  LeadMagnetBuilder: dynamic(
    () =>
      import("./screens/LeadMagnetBuilder").then((m) => ({
        default: m.LeadMagnetBuilder,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  ValidationTracker: dynamic(
    () =>
      import("./screens/ValidationTracker").then((m) => ({
        default: m.ValidationTracker,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  GrowthDashboard: dynamic(
    () =>
      import("./screens/GrowthDashboard").then((m) => ({
        default: m.GrowthDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  FeedbackInbox: dynamic(
    () =>
      import("./screens/FeedbackInbox").then((m) => ({
        default: m.FeedbackInbox,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  RoadmapIteration: dynamic(
    () =>
      import("./screens/RoadmapIteration").then((m) => ({
        default: m.RoadmapIteration,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  WorkspaceSettings: dynamic(
    () =>
      import("./screens/WorkspaceSettings").then((m) => ({
        default: m.WorkspaceSettings,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  OnboardingFlow: dynamic(
    () =>
      import("./screens/OnboardingFlow").then((m) => ({
        default: m.OnboardingFlow,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  ExpertiseAnalyzer: dynamic(
    () =>
      import("./screens/ExpertiseAnalyzer").then((m) => ({
        default: m.ExpertiseAnalyzer,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  MarketSignals: dynamic(
    () =>
      import("./screens/MarketSignals").then((m) => ({
        default: m.MarketSignals,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CompetitorRadar: dynamic(
    () =>
      import("./screens/CompetitorRadar").then((m) => ({
        default: m.CompetitorRadar,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  BuyerPersonaEditor: dynamic(
    () =>
      import("./screens/BuyerPersonaEditor").then((m) => ({
        default: m.BuyerPersonaEditor,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  ObjectionHandler: dynamic(
    () =>
      import("./screens/ObjectionHandler").then((m) => ({
        default: m.ObjectionHandler,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  ValuePropWorkshop: dynamic(
    () =>
      import("./screens/ValuePropWorkshop").then((m) => ({
        default: m.ValuePropWorkshop,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  UserJourneyMap: dynamic(
    () =>
      import("./screens/UserJourneyMap").then((m) => ({
        default: m.UserJourneyMap,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  FeaturePrioritizer: dynamic(
    () =>
      import("./screens/FeaturePrioritizer").then((m) => ({
        default: m.FeaturePrioritizer,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  ComparisonPageBuilder: dynamic(
    () =>
      import("./screens/ComparisonPageBuilder").then((m) => ({
        default: m.ComparisonPageBuilder,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  ICPDefinition: dynamic(
    () =>
      import("./screens/ICPDefinition").then((m) => ({
        default: m.ICPDefinition,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  ChannelExperiments: dynamic(
    () =>
      import("./screens/ChannelExperiments").then((m) => ({
        default: m.ChannelExperiments,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  ReferralProgram: dynamic(
    () =>
      import("./screens/ReferralProgram").then((m) => ({
        default: m.ReferralProgram,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SEOKeywordPlanner: dynamic(
    () =>
      import("./screens/SEOKeywordPlanner").then((m) => ({
        default: m.SEOKeywordPlanner,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SocialProofCollector: dynamic(
    () =>
      import("./screens/SocialProofCollector").then((m) => ({
        default: m.SocialProofCollector,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  AIAssistant: dynamic(
    () =>
      import("./screens/AIAssistant").then((m) => ({
        default: m.AIAssistant,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  ExportCenter: dynamic(
    () =>
      import("./screens/ExportCenter").then((m) => ({
        default: m.ExportCenter,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  TeamWorkspace: dynamic(
    () =>
      import("./screens/TeamWorkspace").then((m) => ({
        default: m.TeamWorkspace,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  NotificationCenter: dynamic(
    () =>
      import("./screens/NotificationCenter").then((m) => ({
        default: m.NotificationCenter,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  WinLossAnalysis: dynamic(
    () =>
      import("./screens/WinLossAnalysis").then((m) => ({
        default: m.WinLossAnalysis,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  RevenueProjection: dynamic(
    () =>
      import("./screens/RevenueProjection").then((m) => ({
        default: m.RevenueProjection,
      })),
    { loading: () => <ScreenLoading /> }
  ),
};

function ScreenLoading() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-sm text-neutral-400">Loading screen...</div>
    </div>
  );
}

interface MockScreenRendererProps {
  componentName: string;
}

export function MockScreenRenderer({ componentName }: MockScreenRendererProps) {
  const Component = screenComponents[componentName];
  if (!Component)
    return (
      <div className="p-8 text-sm text-neutral-400">
        Screen not found: {componentName}
      </div>
    );
  return <Component />;
}
