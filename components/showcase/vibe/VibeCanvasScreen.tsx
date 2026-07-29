import { AppShell } from "@/components/demo/AppShell";

export interface VibeNarrativeCard {
  label: string;
  content: string;
}

export interface VibeListCard {
  label: string;
  items: string[];
}

export interface VibePairCard {
  label: string;
  pairs: { name: string; detail: string }[];
}

export interface VibeCanvasScreenProps {
  activeNav: string;
  title: string;
  subtitle: string;
  actionLabel: string;
  narrativeCards?: VibeNarrativeCard[];
  listCards?: VibeListCard[];
  pairCards?: VibePairCard[];
}

export function VibeCanvasScreen({
  activeNav,
  title,
  subtitle,
  actionLabel,
  narrativeCards = [],
  listCards = [],
  pairCards = [],
}: VibeCanvasScreenProps) {
  return (
    <AppShell
      activeNav={activeNav}
      title={title}
      subtitle={subtitle}
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          {actionLabel}
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {narrativeCards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-600">
              {card.label}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {card.content}
            </p>
          </div>
        ))}

        {listCards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-600">
              {card.label}
            </p>
            <ul className="mt-3 space-y-2">
              {card.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-neutral-600"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {pairCards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-600">
              {card.label}
            </p>
            <div className="mt-3 space-y-3">
              {card.pairs.map((pair) => (
                <div key={pair.name}>
                  <p className="text-sm font-medium text-neutral-800">
                    {pair.name}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500">
                    {pair.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
