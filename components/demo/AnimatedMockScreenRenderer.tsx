import dynamic from "next/dynamic";
import { MockScreenRenderer } from "./MockScreenRenderer";

function ScreenLoading() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-sm text-neutral-400">Loading screen...</div>
    </div>
  );
}

const animatedScreens: Record<string, React.ComponentType> = {
  HomeOverview: dynamic(
    () =>
      import("./animated-screens/animated-home-overview").then((m) => ({
        default: m.AnimatedHomeOverview,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  OpportunityFinder: dynamic(
    () =>
      import("./animated-screens/animated-opportunity-finder").then((m) => ({
        default: m.AnimatedOpportunityFinder,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SolutionBuilder: dynamic(
    () =>
      import("./animated-screens/animated-solution-builder").then((m) => ({
        default: m.AnimatedSolutionBuilder,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  PositioningCanvas: dynamic(
    () =>
      import("./animated-screens/animated-positioning-canvas").then((m) => ({
        default: m.AnimatedPositioningCanvas,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  GoToMarketPlan: dynamic(
    () =>
      import("./animated-screens/animated-go-to-market-plan").then((m) => ({
        default: m.AnimatedGoToMarketPlan,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  DistributionChannels: dynamic(
    () =>
      import("./animated-screens/animated-distribution-channels").then((m) => ({
        default: m.AnimatedDistributionChannels,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  GrowthDashboard: dynamic(
    () =>
      import("./animated-screens/animated-growth-dashboard").then((m) => ({
        default: m.AnimatedGrowthDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  RoadmapIteration: dynamic(
    () =>
      import("./animated-screens/animated-roadmap-iteration").then((m) => ({
        default: m.AnimatedRoadmapIteration,
      })),
    { loading: () => <ScreenLoading /> }
  ),
};

interface AnimatedMockScreenRendererProps {
  componentName: string;
}

export function AnimatedMockScreenRenderer({
  componentName,
}: AnimatedMockScreenRendererProps) {
  const Animated = animatedScreens[componentName];
  if (Animated) return <Animated />;
  return <MockScreenRenderer componentName={componentName} />;
}
