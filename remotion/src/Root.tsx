import React from "react";
import { Composition } from "remotion";
import { fps, sizes } from "./lib/brand";

import { ResumeToRevenue } from "./videos/v01-resume-to-revenue";
import { SevenDayFounder } from "./videos/v02-seven-day-founder";
import { BrowseVsBuild } from "./videos/v03-browse-vs-build";
import { Manifesto } from "./videos/v04-manifesto";
import { OpportunityEngine } from "./videos/v05-opportunity-engine";
import { PositioningCanvas } from "./videos/v06-positioning-canvas";
import { LaunchBuilder } from "./videos/v07-launch-builder";
import { DailyBrief } from "./videos/v08-daily-brief";
import { CockpitTour } from "./videos/v09-cockpit-tour";
import { AIBuildPrompts } from "./videos/v10-ai-build-prompts";
import { ConsultantStory } from "./videos/v11-consultant";
import { OperatorStory } from "./videos/v12-operator";
import { DomainExpertStory } from "./videos/v13-domain-expert";
import { NotAnotherCourse } from "./videos/v14-not-another-course";
import { PovTabs } from "./videos/v15-pov-tabs";
import { ThingsINoLongerDo } from "./videos/v16-things-i-no-longer-do";
import { RedFlags } from "./videos/v17-red-flags";
import { UISatisfaction } from "./videos/v18-ui-satisfaction";
import { FourQuestions } from "./videos/v19-four-questions";
import { SevenDaysCalendar } from "./videos/v20-seven-days-calendar";
import { CustomerStory } from "./videos/v21-customer-story";
import { BehindTheScore } from "./videos/v22-behind-the-score";
import { Comparison } from "./videos/v23-comparison";
import { Welcome } from "./videos/v24-welcome";
import { Changelog } from "./videos/v25-changelog";
import { ReEngagement } from "./videos/v26-re-engagement";

interface VideoSpec {
  slug: string;
  component: React.FC;
  duration: number;
}

const videos: VideoSpec[] = [
  { slug: "resume-to-revenue", component: ResumeToRevenue, duration: 900 },
  { slug: "seven-day-founder", component: SevenDayFounder, duration: 900 },
  { slug: "browse-vs-build", component: BrowseVsBuild, duration: 900 },
  { slug: "manifesto", component: Manifesto, duration: 900 },
  { slug: "opportunity-engine", component: OpportunityEngine, duration: 900 },
  { slug: "positioning-canvas", component: PositioningCanvas, duration: 900 },
  { slug: "launch-builder", component: LaunchBuilder, duration: 900 },
  { slug: "daily-brief", component: DailyBrief, duration: 900 },
  { slug: "cockpit-tour", component: CockpitTour, duration: 900 },
  { slug: "ai-build-prompts", component: AIBuildPrompts, duration: 900 },
  { slug: "consultant-productized", component: ConsultantStory, duration: 900 },
  { slug: "operator-side-bet", component: OperatorStory, duration: 900 },
  { slug: "domain-expert", component: DomainExpertStory, duration: 900 },
  { slug: "not-another-course", component: NotAnotherCourse, duration: 900 },
  { slug: "pov-tabs", component: PovTabs, duration: 450 },
  {
    slug: "things-i-no-longer-do",
    component: ThingsINoLongerDo,
    duration: 600,
  },
  { slug: "red-flags", component: RedFlags, duration: 750 },
  { slug: "ui-satisfaction", component: UISatisfaction, duration: 510 },
  { slug: "four-questions", component: FourQuestions, duration: 750 },
  { slug: "seven-days-calendar", component: SevenDaysCalendar, duration: 600 },
  { slug: "customer-story", component: CustomerStory, duration: 900 },
  { slug: "behind-the-score", component: BehindTheScore, duration: 900 },
  { slug: "comparison", component: Comparison, duration: 900 },
  { slug: "welcome", component: Welcome, duration: 900 },
  { slug: "changelog-update", component: Changelog, duration: 900 },
  { slug: "re-engagement", component: ReEngagement, duration: 900 },
];

export const Root: React.FC = () => {
  return (
    <>
      {videos.flatMap((v) => [
        <Composition
          key={`${v.slug}-16x9`}
          id={`${v.slug}-16x9`}
          component={v.component}
          durationInFrames={v.duration}
          fps={fps}
          width={sizes["16x9"].width}
          height={sizes["16x9"].height}
        />,
        <Composition
          key={`${v.slug}-9x16`}
          id={`${v.slug}-9x16`}
          component={v.component}
          durationInFrames={v.duration}
          fps={fps}
          width={sizes["9x16"].width}
          height={sizes["9x16"].height}
        />,
      ])}
    </>
  );
};
