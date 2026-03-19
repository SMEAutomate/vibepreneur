"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Input, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { roles, industries } from "@/content/waitlist";
import { WaitlistSocialProof } from "@/components/marketing/waitlist-social-proof";

const PERSONA_OPTIONS = [
  { value: "corporate", label: "Corporate professional" },
  { value: "consultant", label: "Consultant" },
  { value: "operator", label: "Operator" },
  { value: "marketer", label: "Marketer / growth leader" },
  { value: "founder", label: "Founder with an existing business" },
  { value: "other", label: "Other expert" },
];

const GOAL_OPTIONS = [
  { value: "start-new", label: "Start something new" },
  { value: "grow-existing", label: "Grow what I already have" },
  { value: "productise", label: "Productise my expertise" },
  { value: "explore", label: "Explore business ideas" },
  { value: "build-software", label: "Build a niche software product" },
  { value: "build-service", label: "Build a scalable service system" },
];

const PREVIEW_CARDS: Record<
  string,
  { opportunity: string; model: string; firstMove: string }
> = {
  corporate: {
    opportunity:
      "Niche industry tool solving a workflow problem you see every day",
    model: "SaaS or productised service with subscription pricing",
    firstMove:
      "Validate demand with 20 target buyers through LinkedIn outreach",
  },
  consultant: {
    opportunity: "Productised version of your most-repeated engagement",
    model: "Tiered service product with self-serve and premium options",
    firstMove:
      "Launch a free assessment or audit as a lead magnet to existing network",
  },
  operator: {
    opportunity: "Automation tool for the manual process you manage daily",
    model: "Vertical SaaS targeting companies with the same operational pain",
    firstMove:
      "Build a landing page and validate with 50 ops leaders via cold outreach",
  },
  marketer: {
    opportunity: "Distribution-first product in a niche you know how to reach",
    model: "Lead generation service or niche marketing tool",
    firstMove:
      "Create content demonstrating the methodology and capture early interest",
  },
  founder: {
    opportunity: "Structured growth system for your existing offer",
    model:
      "Optimised positioning, expanded channels, and repeatable growth loops",
    firstMove: "Audit current positioning and launch 3 channel experiments",
  },
  other: {
    opportunity: "Business built from your specific domain expertise",
    model: "Matched to your background during onboarding",
    firstMove:
      "Complete your profile to receive personalised opportunity scoring",
  },
};

const TOTAL_STEPS = 5;

export function WaitlistContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [persona, setPersona] = useState("");
  const [goal, setGoal] = useState("");
  const [role, setRole] = useState("");
  const [industry, setIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refParam = searchParams.get("ref") ?? undefined;
  const tierParam = searchParams.get("tier") ?? undefined;
  const preview = PREVIEW_CARDS[persona] || PREVIEW_CARDS.other;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          role,
          industry,
          consent,
          persona,
          goal,
          ref: refParam,
          source: tierParam ? `pricing-${tierParam}` : undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong");
      }

      const data = await res.json();
      const params = new URLSearchParams({ role, industry });
      if (data.id) params.set("ref", data.id);
      window.location.href = `/waitlist/thanks?${params.toString()}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setSubmitting(false);
    }
  }

  function canAdvance(): boolean {
    if (step === 1) return !!persona;
    if (step === 2) return !!goal;
    if (step === 3) return !!role;
    return true;
  }

  return (
    <>
      <WaitlistSocialProof />
      <Section>
        <div className="mx-auto max-w-xl">
          <div className="mb-8 flex items-center gap-2">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i < step ? "bg-brand-600" : "bg-neutral-200"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <StepWrapper key="step1">
                <h1 className="text-display-sm">Who are you?</h1>
                <p className="mt-2 text-neutral-600">
                  This helps us tailor your experience.
                </p>
                <div className="mt-6 space-y-2">
                  {PERSONA_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setPersona(opt.value)}
                      className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                        persona === opt.value
                          ? "border-brand-300 bg-brand-50 font-medium text-brand-800"
                          : "border-neutral-200 text-neutral-700 hover:border-neutral-300"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </StepWrapper>
            )}

            {step === 2 && (
              <StepWrapper key="step2">
                <h2 className="text-display-sm">What do you want to do?</h2>
                <p className="mt-2 text-neutral-600">
                  Select the path that best describes your intent.
                </p>
                <div className="mt-6 space-y-2">
                  {GOAL_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setGoal(opt.value)}
                      className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                        goal === opt.value
                          ? "border-brand-300 bg-brand-50 font-medium text-brand-800"
                          : "border-neutral-200 text-neutral-700 hover:border-neutral-300"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </StepWrapper>
            )}

            {step === 3 && (
              <StepWrapper key="step3">
                <h2 className="text-display-sm">What is your background?</h2>
                <p className="mt-2 text-neutral-600">
                  Help us match opportunities to your expertise.
                </p>
                <div className="mt-6 space-y-4">
                  <Select
                    label="Your role"
                    options={roles}
                    placeholder="Select your role"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <Select
                    label="Industry"
                    options={industries}
                    placeholder="Select your industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  />
                </div>
              </StepWrapper>
            )}

            {step === 4 && (
              <StepWrapper key="step4">
                <h2 className="text-display-sm">Your preview</h2>
                <p className="mt-2 text-neutral-600">
                  Based on your profile, here is what Vibepreneur might build
                  for you.
                </p>
                <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                        Likely opportunity
                      </p>
                      <p className="mt-1 text-sm font-medium text-neutral-800">
                        {preview.opportunity}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                        Likely business model
                      </p>
                      <p className="mt-1 text-sm font-medium text-neutral-800">
                        {preview.model}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                        Likely first move
                      </p>
                      <p className="mt-1 text-sm font-medium text-neutral-800">
                        {preview.firstMove}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-neutral-500">
                  Full personalised directions are generated after signup.
                </p>
              </StepWrapper>
            )}

            {step === 5 && (
              <StepWrapper key="step5">
                <h2 className="text-display-sm">
                  Get early access and your first tailored business directions.
                </h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error && error.includes("email") ? error : undefined}
                  />

                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 rounded border-neutral-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-xs text-neutral-500">
                      I agree to the{" "}
                      <Link
                        href="/privacy"
                        target="_blank"
                        className="underline hover:text-neutral-700"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/terms"
                        target="_blank"
                        className="underline hover:text-neutral-700"
                      >
                        Terms of Service
                      </Link>
                      , and to receive weekly emails about building from
                      expertise. Unsubscribe any time.
                    </span>
                  </label>

                  {error && !error.includes("email") && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? "Joining..." : "Join the Waitlist"}
                  </Button>

                  <p className="text-center text-xs text-neutral-400">
                    Free to start. No credit card required.
                  </p>
                </form>
              </StepWrapper>
            )}
          </AnimatePresence>

          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-sm font-medium text-neutral-500 hover:text-neutral-700"
              >
                Back
              </button>
            ) : (
              <div />
            )}
            {step < TOTAL_STEPS && (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canAdvance()}
                size="sm"
              >
                Continue
              </Button>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function StepWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
