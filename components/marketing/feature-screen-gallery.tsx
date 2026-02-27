"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { MockScreen } from "@/lib/mockScreens";
import { Card } from "@/components/ui/card";

interface FeatureScreenGalleryProps {
  screens: MockScreen[];
  featureSlug: string;
}

export function FeatureScreenGallery({
  screens,
  featureSlug,
}: FeatureScreenGalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {screens.map((screen, i) => (
        <motion.div
          key={screen.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
        >
          <Link
            href={`/features/${featureSlug}/${screen.id}`}
            className="block h-full"
          >
            <Card className="h-full transition-shadow hover:shadow-md">
              <h3 className="text-sm font-semibold text-neutral-900">
                {screen.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                {screen.description}
              </p>
              <span className="mt-3 inline-block text-xs font-medium text-brand-700">
                View screen &rarr;
              </span>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
