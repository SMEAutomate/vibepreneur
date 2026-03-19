"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

function ThanksInner() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") ?? "";
  const industry = searchParams.get("industry") ?? "";
  const [copied, setCopied] = useState(false);

  const solutionsUrl = `/waitlist/your-solutions?role=${encodeURIComponent(role)}&industry=${encodeURIComponent(industry)}`;
  const ref = searchParams.get("ref") ?? "";
  const baseShareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/waitlist`
      : "https://vibepreneur.com/waitlist";
  const shareUrl = ref ? `${baseShareUrl}?ref=${ref}` : baseShareUrl;

  function handleCopy() {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <svg
            className="h-8 w-8 text-emerald-600"
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
        </div>

        <h1 className="text-display-sm">You&apos;re in.</h1>
        <p className="mt-4 text-lg text-neutral-600">
          We&apos;ll be in touch with early access details and weekly insights
          on building from expertise.
        </p>

        <div className="mt-10 space-y-4">
          <Button href={solutionsUrl} size="lg" className="w-full sm:w-auto">
            See Your Fit Test Results
          </Button>

          <div className="mt-8 rounded-lg border border-neutral-100 p-6">
            <p className="text-sm font-medium text-neutral-900">
              Know someone who should see this?
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Share your unique link
            </p>
            <div className="mt-3 flex gap-2">
              <input
                readOnly
                value={shareUrl}
                className="flex-1 rounded-lg border border-neutral-200 px-3 py-2 text-xs text-neutral-600"
              />
              <button
                onClick={handleCopy}
                className="shrink-0 rounded-lg bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-200"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ThanksContent() {
  return (
    <Suspense
      fallback={
        <Section>
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-display-sm">You&apos;re in.</h1>
          </div>
        </Section>
      }
    >
      <ThanksInner />
    </Suspense>
  );
}
