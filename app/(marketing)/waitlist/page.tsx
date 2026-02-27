"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Input, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { roles, industries, waitlistBenefits } from "@/content/waitlist";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [industry, setIndustry] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
          industry: industry || undefined,
          consent,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong");
      }

      const params = new URLSearchParams({ role });
      if (industry) params.set("industry", industry);
      window.location.href = `/waitlist/thanks?${params.toString()}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setSubmitting(false);
    }
  }

  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h1 className="text-display-md">Join the Waitlist</h1>
          <p className="mt-4 text-lg text-neutral-600">
            Be first in line when we launch. Get personalised solution ideas
            immediately.
          </p>

          <ul className="mt-8 space-y-4">
            {waitlistBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-neutral-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="you@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error && error.includes("email") ? error : undefined}
            />

            <Select
              label="Your role"
              options={roles}
              placeholder="Select your role"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />

            <Select
              label="Industry (optional)"
              options={industries}
              placeholder="Select your industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 rounded border-neutral-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="text-xs text-neutral-500">
                I agree to receive weekly emails about building from expertise.
                Unsubscribe any time.
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
              No spam. One email per week, max.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
