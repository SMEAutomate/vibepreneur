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
