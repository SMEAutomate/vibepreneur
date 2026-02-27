interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "live" | "progress" | "planned";
}

const variants = {
  default: "bg-neutral-100 text-neutral-700",
  live: "bg-emerald-50 text-emerald-700",
  progress: "bg-amber-50 text-amber-700",
  planned: "bg-brand-50 text-brand-700",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
