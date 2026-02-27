"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedHeadline } from "@/components/ui/animated-headline";
import { InlineScreenMock } from "./inline-screen-mock";
import { AnnotatedScreenExplainer } from "./annotated-screen-explainer";
import { FeatureScreenGallery } from "./feature-screen-gallery";
import { mockScreens } from "@/lib/mockScreens";
import type { FeatureConfig } from "@/content/features";

interface FeaturePageContentProps {
  feature: FeatureConfig;
}

export function FeaturePageContent({ feature }: FeaturePageContentProps) {
  const featureScreens = useMemo(
    () =>
      feature.screenNames
        .map((name) => mockScreens.find((s) => s.componentName === name))
        .filter(Boolean),
    [feature.screenNames]
  );

  const featuredScreenData = featureScreens.find(
    (s) => s!.componentName === feature.featuredScreen
  );

  const galleryScreens = featureScreens.filter(
    (s) => s!.componentName !== feature.featuredScreen
  );

  return (
    <>
      {/* Hero */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={feature.iconPath}
              />
            </svg>
          </div>
          <AnimatedHeadline
            text={feature.headline}
            as="h1"
            className="text-display-md"
          />
          <motion.p
            className="mt-6 text-lg leading-relaxed text-neutral-600"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {feature.description}
          </motion.p>
        </div>

        {/* Hero mockup */}
        {featuredScreenData && (
          <div className="mx-auto mt-12 max-w-5xl">
            <InlineScreenMock
              componentName={feature.featuredScreen}
              caption={`${featuredScreenData.title} — ${featuredScreenData.description}`}
            />
          </div>
        )}
      </Section>

      {/* Capabilities */}
      <Section background="light">
        <h2 className="text-center text-display-sm">What&apos;s inside</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {feature.capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card hover className="h-full">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={cap.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-neutral-900">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {cap.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Annotated Screen Explainer (when callouts exist) or plain featured screen */}
      {featuredScreenData && (
        <Section>
          <h2 className="text-center text-display-sm">
            {feature.callouts ? "How it works" : "See it in action"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            {feature.callouts
              ? `Every section of the ${featuredScreenData.title} serves a specific purpose.`
              : featuredScreenData.description}
          </p>
          <div className="mx-auto mt-12 max-w-5xl">
            {feature.callouts ? (
              <AnnotatedScreenExplainer
                componentName={feature.featuredScreen}
                callouts={feature.callouts}
                title={featuredScreenData.title}
              />
            ) : (
              <InlineScreenMock
                componentName={feature.featuredScreen}
                caption={`${featuredScreenData.title} — ${featuredScreenData.description}`}
              />
            )}
          </div>
        </Section>
      )}

      {/* Screen Gallery */}
      {galleryScreens.length > 0 && (
        <Section background="light">
          <h2 className="text-center text-display-sm">
            Explore all {feature.name} screens
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Click any screen to preview the full interface.
          </p>
          <div className="mt-12">
            <FeatureScreenGallery
              screens={galleryScreens as typeof mockScreens}
            />
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">
            Ready to put your {feature.name.toLowerCase()} to work?
          </h2>
          <p className="mt-4 text-neutral-600">
            Join the waitlist and get early access to the full platform.
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
