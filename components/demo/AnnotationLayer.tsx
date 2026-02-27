import type { Annotation } from "@/lib/mockScreens";

interface AnnotationLayerProps {
  annotations: Annotation[];
  visible: boolean;
}

export function AnnotationLayer({
  annotations,
  visible,
}: AnnotationLayerProps) {
  if (!visible) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {annotations.map((a) => (
        <div
          key={a.label}
          className="pointer-events-auto absolute"
          style={{ left: a.x, top: a.y }}
        >
          <div className="rounded-lg border border-brand-200 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-700">
              {a.label}
            </p>
            <p className="mt-0.5 max-w-[200px] text-[10px] leading-relaxed text-neutral-600">
              {a.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
