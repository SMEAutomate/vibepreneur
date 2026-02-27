"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MockScreenRenderer } from "@/components/demo/MockScreenRenderer";
import type { MockScreen } from "@/lib/mockScreens";
import type { FeatureConfig } from "@/content/features";

interface ScreenPageContentProps {
  feature: FeatureConfig;
  screen: MockScreen;
  featureScreens: MockScreen[];
}

export function ScreenPageContent({
  feature,
  screen,
  featureScreens,
}: ScreenPageContentProps) {
  const currentIndex = featureScreens.findIndex((s) => s.id === screen.id);
  const prevScreen = currentIndex > 0 ? featureScreens[currentIndex - 1] : null;
  const nextScreen =
    currentIndex < featureScreens.length - 1
      ? featureScreens[currentIndex + 1]
      : null;

  return (
    <>
      <Section>
        <div className="mb-8 flex items-center justify-between">
          <Link
            href={`/features/${feature.slug}`}
            className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            {feature.name}
          </Link>
          <div className="flex items-center gap-1">
            {screen.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-medium text-brand-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-display-sm">{screen.title}</h1>
          <motion.p
            className="mt-4 text-lg leading-relaxed text-neutral-600"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {screen.description}
          </motion.p>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <span className="ml-3 text-xs font-medium text-neutral-400">
                {screen.title}
              </span>
            </div>
            <div className="relative h-[520px] overflow-hidden sm:h-[600px] lg:h-[700px]">
              <div
                className="origin-top-left"
                style={{
                  transform: "scale(0.75)",
                  width: "133.33%",
                  height: "133.33%",
                }}
              >
                <MockScreenRenderer componentName={screen.componentName} />
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Prev / Next navigation */}
      <Section background="light">
        <div className="flex items-center justify-between">
          {prevScreen ? (
            <Link
              href={`/features/${feature.slug}/${prevScreen.id}`}
              className="group flex items-center gap-3"
            >
              <svg
                className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <div>
                <p className="text-xs text-neutral-400">Previous</p>
                <p className="text-sm font-medium text-neutral-700 transition-colors group-hover:text-neutral-900">
                  {prevScreen.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextScreen ? (
            <Link
              href={`/features/${feature.slug}/${nextScreen.id}`}
              className="group flex items-center gap-3 text-right"
            >
              <div>
                <p className="text-xs text-neutral-400">Next</p>
                <p className="text-sm font-medium text-neutral-700 transition-colors group-hover:text-neutral-900">
                  {nextScreen.title}
                </p>
              </div>
              <svg
                className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">See this in your own workspace</h2>
          <p className="mt-4 text-neutral-600">
            Join the waitlist and get early access to the full{" "}
            {feature.name.toLowerCase()}.
          </p>
          <div className="mt-8">
            <Button href="/waitlist" size="lg">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
