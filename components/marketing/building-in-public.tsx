import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteCopy } from "@/content/copy";
import { roadmapColumns } from "@/content/roadmap";

const statusBadge: Record<string, "live" | "progress" | "planned"> = {
  live: "live",
  "in-progress": "progress",
  planned: "planned",
};

const statusLabel: Record<string, string> = {
  live: "Live",
  "in-progress": "In Progress",
  planned: "Planned",
};

export function BuildingInPublic() {
  const { buildingInPublic } = siteCopy;
  const nowItems = roadmapColumns.now.items.slice(0, 3);
  const nextItems = roadmapColumns.next.items.slice(0, 2);

  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-display-sm">{buildingInPublic.headline}</h2>
        <p className="mt-4 text-neutral-600">{buildingInPublic.body}</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...nowItems, ...nextItems].slice(0, 3).map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-neutral-100 p-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-neutral-900">
                {item.title}
              </h4>
              <Badge variant={statusBadge[item.status]}>
                {statusLabel[item.status]}
              </Badge>
            </div>
            <p className="mt-2 text-xs text-neutral-500">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button href="/roadmap" variant="secondary">
          {buildingInPublic.cta}
        </Button>
      </div>
    </Section>
  );
}
