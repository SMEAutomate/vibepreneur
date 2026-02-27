"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MockScreen } from "@/lib/mockScreens";
import { MockScreenRenderer } from "./MockScreenRenderer";
import { AnnotationLayer } from "./AnnotationLayer";

interface ScreenPreviewModalProps {
  screen: MockScreen | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  showAnnotations: boolean;
  included: boolean;
  onToggleInclude: () => void;
}

export function ScreenPreviewModal({
  screen,
  onClose,
  onPrev,
  onNext,
  showAnnotations,
  included,
  onToggleInclude,
}: ScreenPreviewModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (!screen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [screen, handleKeyDown]);

  const handleCopyNotes = () => {
    if (!screen) return;
    const text = `${screen.title}\n\nWhat it's for: ${screen.description}\n\nTags: ${screen.tags.join(", ")}\n\nInclude on marketing site: ${included ? "Yes" : "No"}`;
    navigator.clipboard.writeText(text);
  };

  return (
    <AnimatePresence>
      {screen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-neutral-900/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-neutral-800 bg-neutral-900 px-6 py-3">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="rounded-md px-2 py-1 text-xs text-neutral-400 hover:text-white"
              >
                ✕ Close
              </button>
              <div>
                <h2 className="text-sm font-semibold text-white">
                  {screen.title}
                </h2>
                <p className="text-xs text-neutral-400">{screen.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {screen.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={handleCopyNotes}
                className="rounded-md border border-neutral-700 px-3 py-1 text-[10px] font-medium text-neutral-300 hover:bg-neutral-800"
              >
                Copy notes
              </button>
              <button
                onClick={onToggleInclude}
                className={`rounded-md px-3 py-1 text-[10px] font-medium ${included ? "bg-brand-600 text-white" : "border border-neutral-700 text-neutral-300 hover:bg-neutral-800"}`}
              >
                {included ? "Included ✓" : "Include on site"}
              </button>
              <div className="flex gap-1">
                <button
                  onClick={onPrev}
                  className="rounded-md border border-neutral-700 px-2 py-1 text-xs text-neutral-300 hover:bg-neutral-800"
                >
                  ← Prev
                </button>
                <button
                  onClick={onNext}
                  className="rounded-md border border-neutral-700 px-2 py-1 text-xs text-neutral-300 hover:bg-neutral-800"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex-1 overflow-auto p-4">
            <motion.div
              key={screen.id}
              className="relative mx-auto h-full max-w-7xl overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <MockScreenRenderer componentName={screen.componentName} />
              <AnnotationLayer
                annotations={screen.annotations}
                visible={showAnnotations}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
