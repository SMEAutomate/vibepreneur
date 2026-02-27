"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { MockScreen } from "@/lib/mockScreens";
import { Card } from "@/components/ui/card";
import { ScreenPreviewModal } from "@/components/demo/ScreenPreviewModal";

interface FeatureScreenGalleryProps {
  screens: MockScreen[];
}

export function FeatureScreenGallery({ screens }: FeatureScreenGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedScreen = selectedIndex !== null ? screens[selectedIndex] : null;

  const handleClose = useCallback(() => setSelectedIndex(null), []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + screens.length) % screens.length : null
    );
  }, [screens.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((i) => (i !== null ? (i + 1) % screens.length : null));
  }, [screens.length]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {screens.map((screen, i) => (
          <motion.div
            key={screen.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <button
              onClick={() => setSelectedIndex(i)}
              className="w-full text-left"
            >
              <Card className="h-full transition-shadow hover:shadow-md">
                <h3 className="text-sm font-semibold text-neutral-900">
                  {screen.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                  {screen.description}
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-brand-700">
                  Preview &rarr;
                </span>
              </Card>
            </button>
          </motion.div>
        ))}
      </div>

      <ScreenPreviewModal
        screen={selectedScreen}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
        showAnnotations={false}
        included={false}
        onToggleInclude={() => {}}
      />
    </>
  );
}
