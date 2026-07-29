import dynamic from "next/dynamic";

function ScreenLoading() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-sm text-neutral-400">Loading screen...</div>
    </div>
  );
}

const screenComponents: Record<string, React.ComponentType> = {
  // ChannelIQ
  CIQDashboard: dynamic(
    () =>
      import("./screens/channeliq/CIQDashboard").then((m) => ({
        default: m.CIQDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CIQCampaignDetail: dynamic(
    () =>
      import("./screens/channeliq/CIQCampaignDetail").then((m) => ({
        default: m.CIQCampaignDetail,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CIQChannelComparison: dynamic(
    () =>
      import("./screens/channeliq/CIQChannelComparison").then((m) => ({
        default: m.CIQChannelComparison,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CIQVibeOpportunity: dynamic(
    () =>
      import("./screens/channeliq/CIQVibeOpportunity").then((m) => ({
        default: m.CIQVibeOpportunity,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CIQVibePositioning: dynamic(
    () =>
      import("./screens/channeliq/CIQVibePositioning").then((m) => ({
        default: m.CIQVibePositioning,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // DealScore
  DSDPipeline: dynamic(
    () =>
      import("./screens/dealscore/DSDPipeline").then((m) => ({
        default: m.DSDPipeline,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  DSDScorecard: dynamic(
    () =>
      import("./screens/dealscore/DSDScorecard").then((m) => ({
        default: m.DSDScorecard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  DSDForecast: dynamic(
    () =>
      import("./screens/dealscore/DSDForecast").then((m) => ({
        default: m.DSDForecast,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  DSDVibeSolution: dynamic(
    () =>
      import("./screens/dealscore/DSDVibeSolution").then((m) => ({
        default: m.DSDVibeSolution,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  DSDVibeGTM: dynamic(
    () =>
      import("./screens/dealscore/DSDVibeGTM").then((m) => ({
        default: m.DSDVibeGTM,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // FlowForge
  FFWorkflowCanvas: dynamic(
    () =>
      import("./screens/flowforge/FFWorkflowCanvas").then((m) => ({
        default: m.FFWorkflowCanvas,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  FFAutomationLibrary: dynamic(
    () =>
      import("./screens/flowforge/FFAutomationLibrary").then((m) => ({
        default: m.FFAutomationLibrary,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  FFPerformanceMetrics: dynamic(
    () =>
      import("./screens/flowforge/FFPerformanceMetrics").then((m) => ({
        default: m.FFPerformanceMetrics,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  FFVibeOpportunity: dynamic(
    () =>
      import("./screens/flowforge/FFVibeOpportunity").then((m) => ({
        default: m.FFVibeOpportunity,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  FFVibePositioning: dynamic(
    () =>
      import("./screens/flowforge/FFVibePositioning").then((m) => ({
        default: m.FFVibePositioning,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // OnboardFlow
  OFDashboard: dynamic(
    () =>
      import("./screens/onboardflow/OFDashboard").then((m) => ({
        default: m.OFDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  OFTaskTimeline: dynamic(
    () =>
      import("./screens/onboardflow/OFTaskTimeline").then((m) => ({
        default: m.OFTaskTimeline,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  OFNewHirePortal: dynamic(
    () =>
      import("./screens/onboardflow/OFNewHirePortal").then((m) => ({
        default: m.OFNewHirePortal,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  OFVibeSolution: dynamic(
    () =>
      import("./screens/onboardflow/OFVibeSolution").then((m) => ({
        default: m.OFVibeSolution,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  OFVibeGrowth: dynamic(
    () =>
      import("./screens/onboardflow/OFVibeGrowth").then((m) => ({
        default: m.OFVibeGrowth,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // SpendLens
  SLSpendDashboard: dynamic(
    () =>
      import("./screens/spendlens/SLSpendDashboard").then((m) => ({
        default: m.SLSpendDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SLApprovalQueue: dynamic(
    () =>
      import("./screens/spendlens/SLApprovalQueue").then((m) => ({
        default: m.SLApprovalQueue,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SLBudgetTracker: dynamic(
    () =>
      import("./screens/spendlens/SLBudgetTracker").then((m) => ({
        default: m.SLBudgetTracker,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SLVibeOpportunity: dynamic(
    () =>
      import("./screens/spendlens/SLVibeOpportunity").then((m) => ({
        default: m.SLVibeOpportunity,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SLVibeRevenue: dynamic(
    () =>
      import("./screens/spendlens/SLVibeRevenue").then((m) => ({
        default: m.SLVibeRevenue,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // ClauseGuard
  CGContractDashboard: dynamic(
    () =>
      import("./screens/clauseguard/CGContractDashboard").then((m) => ({
        default: m.CGContractDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CGReviewQueue: dynamic(
    () =>
      import("./screens/clauseguard/CGReviewQueue").then((m) => ({
        default: m.CGReviewQueue,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CGRiskSummary: dynamic(
    () =>
      import("./screens/clauseguard/CGRiskSummary").then((m) => ({
        default: m.CGRiskSummary,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CGVibeSolution: dynamic(
    () =>
      import("./screens/clauseguard/CGVibeSolution").then((m) => ({
        default: m.CGVibeSolution,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CGVibePositioning: dynamic(
    () =>
      import("./screens/clauseguard/CGVibePositioning").then((m) => ({
        default: m.CGVibePositioning,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // ShipReady
  SRRoadmapView: dynamic(
    () =>
      import("./screens/shipready/SRRoadmapView").then((m) => ({
        default: m.SRRoadmapView,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SRFeatureScoring: dynamic(
    () =>
      import("./screens/shipready/SRFeatureScoring").then((m) => ({
        default: m.SRFeatureScoring,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SRSprintPlanner: dynamic(
    () =>
      import("./screens/shipready/SRSprintPlanner").then((m) => ({
        default: m.SRSprintPlanner,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SRVibeFeatures: dynamic(
    () =>
      import("./screens/shipready/SRVibeFeatures").then((m) => ({
        default: m.SRVibeFeatures,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SRVibeValidation: dynamic(
    () =>
      import("./screens/shipready/SRVibeValidation").then((m) => ({
        default: m.SRVibeValidation,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // ResolveAI
  RATicketDashboard: dynamic(
    () =>
      import("./screens/resolveai/RATicketDashboard").then((m) => ({
        default: m.RATicketDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  RAResolutionAnalytics: dynamic(
    () =>
      import("./screens/resolveai/RAResolutionAnalytics").then((m) => ({
        default: m.RAResolutionAnalytics,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  RAKnowledgeBase: dynamic(
    () =>
      import("./screens/resolveai/RAKnowledgeBase").then((m) => ({
        default: m.RAKnowledgeBase,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  RAVibeSolution: dynamic(
    () =>
      import("./screens/resolveai/RAVibeSolution").then((m) => ({
        default: m.RAVibeSolution,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  RAVibeDistribution: dynamic(
    () =>
      import("./screens/resolveai/RAVibeDistribution").then((m) => ({
        default: m.RAVibeDistribution,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // AllocateHQ
  AHResourceGrid: dynamic(
    () =>
      import("./screens/allocatehq/AHResourceGrid").then((m) => ({
        default: m.AHResourceGrid,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  AHCapacityDashboard: dynamic(
    () =>
      import("./screens/allocatehq/AHCapacityDashboard").then((m) => ({
        default: m.AHCapacityDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  AHTimelineView: dynamic(
    () =>
      import("./screens/allocatehq/AHTimelineView").then((m) => ({
        default: m.AHTimelineView,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  AHVibeOpportunity: dynamic(
    () =>
      import("./screens/allocatehq/AHVibeOpportunity").then((m) => ({
        default: m.AHVibeOpportunity,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  AHVibeGTM: dynamic(
    () =>
      import("./screens/allocatehq/AHVibeGTM").then((m) => ({
        default: m.AHVibeGTM,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // VendorVault
  VVVendorDirectory: dynamic(
    () =>
      import("./screens/vendorvault/VVVendorDirectory").then((m) => ({
        default: m.VVVendorDirectory,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  VVContractStatus: dynamic(
    () =>
      import("./screens/vendorvault/VVContractStatus").then((m) => ({
        default: m.VVContractStatus,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  VVSpendAnalysis: dynamic(
    () =>
      import("./screens/vendorvault/VVSpendAnalysis").then((m) => ({
        default: m.VVSpendAnalysis,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  VVVibeSolution: dynamic(
    () =>
      import("./screens/vendorvault/VVVibeSolution").then((m) => ({
        default: m.VVVibeSolution,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  VVVibePricing: dynamic(
    () =>
      import("./screens/vendorvault/VVVibePricing").then((m) => ({
        default: m.VVVibePricing,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // DebtMap
  DMDebtDashboard: dynamic(
    () =>
      import("./screens/debtmap/DMDebtDashboard").then((m) => ({
        default: m.DMDebtDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  DMCodeHealth: dynamic(
    () =>
      import("./screens/debtmap/DMCodeHealth").then((m) => ({
        default: m.DMCodeHealth,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  DMSprintImpact: dynamic(
    () =>
      import("./screens/debtmap/DMSprintImpact").then((m) => ({
        default: m.DMSprintImpact,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  DMVibeOpportunity: dynamic(
    () =>
      import("./screens/debtmap/DMVibeOpportunity").then((m) => ({
        default: m.DMVibeOpportunity,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  DMVibeFeatures: dynamic(
    () =>
      import("./screens/debtmap/DMVibeFeatures").then((m) => ({
        default: m.DMVibeFeatures,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // SystemSync
  SSComponentLibrary: dynamic(
    () =>
      import("./screens/systemsync/SSComponentLibrary").then((m) => ({
        default: m.SSComponentLibrary,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SSTokenDashboard: dynamic(
    () =>
      import("./screens/systemsync/SSTokenDashboard").then((m) => ({
        default: m.SSTokenDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SSAdoptionTracker: dynamic(
    () =>
      import("./screens/systemsync/SSAdoptionTracker").then((m) => ({
        default: m.SSAdoptionTracker,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SSVibeSolution: dynamic(
    () =>
      import("./screens/systemsync/SSVibeSolution").then((m) => ({
        default: m.SSVibeSolution,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SSVibePositioning: dynamic(
    () =>
      import("./screens/systemsync/SSVibePositioning").then((m) => ({
        default: m.SSVibePositioning,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // EngagePro
  EPClientDashboard: dynamic(
    () =>
      import("./screens/engagepro/EPClientDashboard").then((m) => ({
        default: m.EPClientDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  EPProposalBuilder: dynamic(
    () =>
      import("./screens/engagepro/EPProposalBuilder").then((m) => ({
        default: m.EPProposalBuilder,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  EPEngagementTimeline: dynamic(
    () =>
      import("./screens/engagepro/EPEngagementTimeline").then((m) => ({
        default: m.EPEngagementTimeline,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  EPVibeSolution: dynamic(
    () =>
      import("./screens/engagepro/EPVibeSolution").then((m) => ({
        default: m.EPVibeSolution,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  EPVibeGTM: dynamic(
    () =>
      import("./screens/engagepro/EPVibeGTM").then((m) => ({
        default: m.EPVibeGTM,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // ChartTrace
  CTAuditDashboard: dynamic(
    () =>
      import("./screens/charttrace/CTAuditDashboard").then((m) => ({
        default: m.CTAuditDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CTChartReview: dynamic(
    () =>
      import("./screens/charttrace/CTChartReview").then((m) => ({
        default: m.CTChartReview,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CTPayerRisk: dynamic(
    () =>
      import("./screens/charttrace/CTPayerRisk").then((m) => ({
        default: m.CTPayerRisk,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CTVibeOpportunity: dynamic(
    () =>
      import("./screens/charttrace/CTVibeOpportunity").then((m) => ({
        default: m.CTVibeOpportunity,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CTVibePositioning: dynamic(
    () =>
      import("./screens/charttrace/CTVibePositioning").then((m) => ({
        default: m.CTVibePositioning,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // ShelfSignal
  SHSStockRadar: dynamic(
    () =>
      import("./screens/shelfsignal/SHSStockRadar").then((m) => ({
        default: m.SHSStockRadar,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SHSStorePerformance: dynamic(
    () =>
      import("./screens/shelfsignal/SHSStorePerformance").then((m) => ({
        default: m.SHSStorePerformance,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SHSReorderPlanner: dynamic(
    () =>
      import("./screens/shelfsignal/SHSReorderPlanner").then((m) => ({
        default: m.SHSReorderPlanner,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SHSVibeSolution: dynamic(
    () =>
      import("./screens/shelfsignal/SHSVibeSolution").then((m) => ({
        default: m.SHSVibeSolution,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SHSVibeGTM: dynamic(
    () =>
      import("./screens/shelfsignal/SHSVibeGTM").then((m) => ({
        default: m.SHSVibeGTM,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // SitePunch
  SPPunchList: dynamic(
    () =>
      import("./screens/sitepunch/SPPunchList").then((m) => ({
        default: m.SPPunchList,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SPSiteMap: dynamic(
    () =>
      import("./screens/sitepunch/SPSiteMap").then((m) => ({
        default: m.SPSiteMap,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SPHandoverReport: dynamic(
    () =>
      import("./screens/sitepunch/SPHandoverReport").then((m) => ({
        default: m.SPHandoverReport,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SPVibeOpportunity: dynamic(
    () =>
      import("./screens/sitepunch/SPVibeOpportunity").then((m) => ({
        default: m.SPVibeOpportunity,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SPVibeDistribution: dynamic(
    () =>
      import("./screens/sitepunch/SPVibeDistribution").then((m) => ({
        default: m.SPVibeDistribution,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // CohortLens
  CLCohortDashboard: dynamic(
    () =>
      import("./screens/cohortlens/CLCohortDashboard").then((m) => ({
        default: m.CLCohortDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CLLearnerRisk: dynamic(
    () =>
      import("./screens/cohortlens/CLLearnerRisk").then((m) => ({
        default: m.CLLearnerRisk,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CLOutcomeReport: dynamic(
    () =>
      import("./screens/cohortlens/CLOutcomeReport").then((m) => ({
        default: m.CLOutcomeReport,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CLVibeSolution: dynamic(
    () =>
      import("./screens/cohortlens/CLVibeSolution").then((m) => ({
        default: m.CLVibeSolution,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CLVibePositioning: dynamic(
    () =>
      import("./screens/cohortlens/CLVibePositioning").then((m) => ({
        default: m.CLVibePositioning,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // LaneParity
  LPLaneBenchmark: dynamic(
    () =>
      import("./screens/laneparity/LPLaneBenchmark").then((m) => ({
        default: m.LPLaneBenchmark,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  LPCarrierScorecard: dynamic(
    () =>
      import("./screens/laneparity/LPCarrierScorecard").then((m) => ({
        default: m.LPCarrierScorecard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  LPRateTrends: dynamic(
    () =>
      import("./screens/laneparity/LPRateTrends").then((m) => ({
        default: m.LPRateTrends,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  LPVibeOpportunity: dynamic(
    () =>
      import("./screens/laneparity/LPVibeOpportunity").then((m) => ({
        default: m.LPVibeOpportunity,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  LPVibePricing: dynamic(
    () =>
      import("./screens/laneparity/LPVibePricing").then((m) => ({
        default: m.LPVibePricing,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // TenantLoop
  TLRenewalPipeline: dynamic(
    () =>
      import("./screens/tenantloop/TLRenewalPipeline").then((m) => ({
        default: m.TLRenewalPipeline,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  TLTenantHealth: dynamic(
    () =>
      import("./screens/tenantloop/TLTenantHealth").then((m) => ({
        default: m.TLTenantHealth,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  TLPortfolioView: dynamic(
    () =>
      import("./screens/tenantloop/TLPortfolioView").then((m) => ({
        default: m.TLPortfolioView,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  TLVibeSolution: dynamic(
    () =>
      import("./screens/tenantloop/TLVibeSolution").then((m) => ({
        default: m.TLVibeSolution,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  TLVibeGTM: dynamic(
    () =>
      import("./screens/tenantloop/TLVibeGTM").then((m) => ({
        default: m.TLVibeGTM,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // CycleTime
  CYLineOverview: dynamic(
    () =>
      import("./screens/cycletime/CYLineOverview").then((m) => ({
        default: m.CYLineOverview,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CYChangeoverDetail: dynamic(
    () =>
      import("./screens/cycletime/CYChangeoverDetail").then((m) => ({
        default: m.CYChangeoverDetail,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CYCapacityImpact: dynamic(
    () =>
      import("./screens/cycletime/CYCapacityImpact").then((m) => ({
        default: m.CYCapacityImpact,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CYVibeOpportunity: dynamic(
    () =>
      import("./screens/cycletime/CYVibeOpportunity").then((m) => ({
        default: m.CYVibeOpportunity,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  CYVibeValidation: dynamic(
    () =>
      import("./screens/cycletime/CYVibeValidation").then((m) => ({
        default: m.CYVibeValidation,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // RightsDesk
  RDRightsGrid: dynamic(
    () =>
      import("./screens/rightsdesk/RDRightsGrid").then((m) => ({
        default: m.RDRightsGrid,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  RDDealTracker: dynamic(
    () =>
      import("./screens/rightsdesk/RDDealTracker").then((m) => ({
        default: m.RDDealTracker,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  RDRevenueSplit: dynamic(
    () =>
      import("./screens/rightsdesk/RDRevenueSplit").then((m) => ({
        default: m.RDRevenueSplit,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  RDVibeSolution: dynamic(
    () =>
      import("./screens/rightsdesk/RDVibeSolution").then((m) => ({
        default: m.RDVibeSolution,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  RDVibeDistribution: dynamic(
    () =>
      import("./screens/rightsdesk/RDVibeDistribution").then((m) => ({
        default: m.RDVibeDistribution,
      })),
    { loading: () => <ScreenLoading /> }
  ),

  // ScopeGuard
  SGScopeDashboard: dynamic(
    () =>
      import("./screens/scopeguard/SGScopeDashboard").then((m) => ({
        default: m.SGScopeDashboard,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SGChangeLog: dynamic(
    () =>
      import("./screens/scopeguard/SGChangeLog").then((m) => ({
        default: m.SGChangeLog,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SGAccountMargin: dynamic(
    () =>
      import("./screens/scopeguard/SGAccountMargin").then((m) => ({
        default: m.SGAccountMargin,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SGVibeOpportunity: dynamic(
    () =>
      import("./screens/scopeguard/SGVibeOpportunity").then((m) => ({
        default: m.SGVibeOpportunity,
      })),
    { loading: () => <ScreenLoading /> }
  ),
  SGVibePricing: dynamic(
    () =>
      import("./screens/scopeguard/SGVibePricing").then((m) => ({
        default: m.SGVibePricing,
      })),
    { loading: () => <ScreenLoading /> }
  ),
};

interface ShowcaseScreenRendererProps {
  componentName: string;
}

export function ShowcaseScreenRenderer({
  componentName,
}: ShowcaseScreenRendererProps) {
  const Component = screenComponents[componentName];
  if (!Component)
    return (
      <div className="p-8 text-sm text-neutral-400">
        Screen not found: {componentName}
      </div>
    );
  return <Component />;
}
