"use client";

import { createContext, useContext, type ReactNode } from "react";
import { motion } from "framer-motion";

const MockInViewContext = createContext<boolean | null>(null);

export function MockInViewProvider({
  inView,
  children,
}: {
  inView: boolean;
  children: ReactNode;
}) {
  return (
    <MockInViewContext.Provider value={inView}>
      {children}
    </MockInViewContext.Provider>
  );
}

const BASE_DELAY = 0.4;
const STAGGER_INTERVAL = 0.08;

interface StaggerItemProps {
  index: number;
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ index, children, className }: StaggerItemProps) {
  const mockInView = useContext(MockInViewContext);

  if (mockInView === null) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={mockInView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        delay: BASE_DELAY + index * STAGGER_INTERVAL,
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
