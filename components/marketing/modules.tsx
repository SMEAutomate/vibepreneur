"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { siteCopy } from "@/content/copy";
import { features } from "@/content/features";
import { ScreenSlideshow } from "@/components/marketing/screen-slideshow";

const SLIDESHOW_SCREENS: string[][] = [
  ["OpportunityFinder", "MarketSignals", "CompetitorRadar"],
  ["SolutionBuilder", "PricingPackaging", "UserJourneyMap"],
  ["PositioningCanvas", "MessagingMatrix", "ValuePropWorkshop"],
  ["GoToMarketPlan", "ContentLaunchKit", "OutreachStudio"],
  ["DistributionChannels", "LandingPageBuilder", "SEOKeywordPlanner"],
  ["GrowthDashboard", "ChannelExperiments", "ReferralProgram"],
];

const icons = [
  <svg
    key="insight"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
    />
  </svg>,
  <svg
    key="builder"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    />
  </svg>,
  <svg
    key="positioning"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
    />
  </svg>,
  <svg
    key="gtm"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
    />
  </svg>,
  <svg
    key="distribution"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
    />
  </svg>,
  <svg
    key="growth"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
    />
  </svg>,
];

export function Modules() {
  const { modules } = siteCopy;

  return (
    <Section id="modules" background="light">
      <h2 className="text-center text-display-sm">{modules.headline}</h2>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.items.map((item, i) => {
          const feature = features.find((f) => f.name === item.title);
          const href = feature ? `/features/${feature.slug}` : "#";

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={href} className="block h-full">
                <Card hover className="h-full overflow-hidden p-0">
                  <ScreenSlideshow screenNames={SLIDESHOW_SCREENS[i]}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
                        {icons[i]}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-tight text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-white/85">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScreenSlideshow>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
