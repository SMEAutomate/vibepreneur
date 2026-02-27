import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-neutral-100 bg-white p-6 ${hover ? "transition-shadow duration-200 hover:shadow-md" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
