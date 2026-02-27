import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { roadmapColumns, weeklyUpdates } from "@/content/roadmap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap — Vibepreneur",
  description: "Follow our progress. We build in public.",
};

const statusVariant: Record<string, "live" | "progress" | "planned"> = {
  live: "live",
  "in-progress": "progress",
  planned: "planned",
};

const statusLabel: Record<string, string> = {
  live: "Live",
  "in-progress": "In Progress",
  planned: "Planned",
};

export default function RoadmapPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-display-md">Building in public.</h1>
          <p className="mt-4 text-lg text-neutral-600">
            We share what we&apos;re building, why, and what&apos;s coming next.
            No roadmaps locked behind a login.
          </p>
        </div>
      </Section>

      <Section background="light">
        <div className="grid gap-8 md:grid-cols-3">
          {(["now", "next", "later"] as const).map((key) => {
            const column = roadmapColumns[key];
            return (
              <div key={key}>
                <h2 className="mb-6 text-lg font-semibold text-neutral-900">
                  {column.label}
                </h2>
                <div className="space-y-4">
                  {column.items.map((item) => (
                    <Card key={item.title}>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-neutral-900">
                          {item.title}
                        </h3>
                        <Badge variant={statusVariant[item.status]}>
                          {statusLabel[item.status]}
                        </Badge>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                        {item.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <h2 className="text-display-sm">Weekly updates</h2>
        <p className="mt-3 text-neutral-600">
          What we shipped, what we learned, and what&apos;s next.
        </p>

        <div className="mt-12 space-y-8">
          {weeklyUpdates.map((update) => (
            <div key={update.week} className="border-l-2 border-brand-100 pl-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-brand-700">
                  {update.week}
                </span>
                <span className="text-xs text-neutral-400">{update.date}</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-neutral-900">
                {update.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {update.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">Want to shape what we build?</h2>
          <p className="mt-4 text-neutral-600">
            Join the waitlist and help us prioritise what matters most.
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
