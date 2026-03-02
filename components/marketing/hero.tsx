"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientOrb } from "@/components/ui/gradient-orb";
import { siteCopy } from "@/content/copy";

export function Hero() {
  const { hero } = siteCopy;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const mockY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/50 to-white"
    >
      <GradientOrb
        className="-right-32 -top-32 hidden lg:block"
        size={500}
        color="bg-brand-100/40"
      />

      <div className="container-content px-6 pb-16 pt-20 sm:px-8 sm:pt-28 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ y: textY }}
          >
            <h1 className="text-display-md lg:text-display-lg">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              {hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/waitlist" size="lg">
                {hero.ctaPrimary}
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                {hero.ctaSecondary}
              </Button>
            </div>
            <p className="mt-6 text-sm text-neutral-500">{hero.trustLine}</p>
          </motion.div>

          <motion.div className="hidden lg:block" style={{ y: mockY }}>
            <Image
              src="/logo.png"
              alt="Vibepreneur"
              width={500}
              height={500}
              className="mx-auto w-full max-w-md"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
