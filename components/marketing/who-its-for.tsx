import { Section } from "@/components/ui/section";
import { siteCopy } from "@/content/copy";

export function WhoItsFor() {
  const { whoItsFor } = siteCopy;

  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-display-sm">{whoItsFor.headline}</h2>
        <p className="mt-4 text-lg text-neutral-600">{whoItsFor.body}</p>
        <ul className="mt-8 space-y-4">
          {whoItsFor.profiles.map((profile) => (
            <li key={profile} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span className="text-neutral-700">{profile}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
