import { ReactNode } from "react";

const COLOR_MAP: Record<
  string,
  {
    bg: string;
    text: string;
    activeBg: string;
    activeText: string;
    border: string;
    avatarBg: string;
    avatarText: string;
  }
> = {
  indigo: {
    bg: "bg-indigo-900",
    text: "text-indigo-300",
    activeBg: "bg-indigo-800",
    activeText: "text-white",
    border: "border-indigo-800",
    avatarBg: "bg-indigo-700",
    avatarText: "text-indigo-200",
  },
  emerald: {
    bg: "bg-emerald-900",
    text: "text-emerald-300",
    activeBg: "bg-emerald-800",
    activeText: "text-white",
    border: "border-emerald-800",
    avatarBg: "bg-emerald-700",
    avatarText: "text-emerald-200",
  },
  violet: {
    bg: "bg-violet-900",
    text: "text-violet-300",
    activeBg: "bg-violet-800",
    activeText: "text-white",
    border: "border-violet-800",
    avatarBg: "bg-violet-700",
    avatarText: "text-violet-200",
  },
  cyan: {
    bg: "bg-cyan-900",
    text: "text-cyan-300",
    activeBg: "bg-cyan-800",
    activeText: "text-white",
    border: "border-cyan-800",
    avatarBg: "bg-cyan-700",
    avatarText: "text-cyan-200",
  },
  amber: {
    bg: "bg-amber-900",
    text: "text-amber-300",
    activeBg: "bg-amber-800",
    activeText: "text-white",
    border: "border-amber-800",
    avatarBg: "bg-amber-700",
    avatarText: "text-amber-200",
  },
  slate: {
    bg: "bg-slate-900",
    text: "text-slate-300",
    activeBg: "bg-slate-800",
    activeText: "text-white",
    border: "border-slate-800",
    avatarBg: "bg-slate-700",
    avatarText: "text-slate-200",
  },
  rose: {
    bg: "bg-rose-900",
    text: "text-rose-300",
    activeBg: "bg-rose-800",
    activeText: "text-white",
    border: "border-rose-800",
    avatarBg: "bg-rose-700",
    avatarText: "text-rose-200",
  },
  sky: {
    bg: "bg-sky-900",
    text: "text-sky-300",
    activeBg: "bg-sky-800",
    activeText: "text-white",
    border: "border-sky-800",
    avatarBg: "bg-sky-700",
    avatarText: "text-sky-200",
  },
  lime: {
    bg: "bg-lime-900",
    text: "text-lime-300",
    activeBg: "bg-lime-800",
    activeText: "text-white",
    border: "border-lime-800",
    avatarBg: "bg-lime-700",
    avatarText: "text-lime-200",
  },
  stone: {
    bg: "bg-stone-900",
    text: "text-stone-300",
    activeBg: "bg-stone-800",
    activeText: "text-white",
    border: "border-stone-800",
    avatarBg: "bg-stone-700",
    avatarText: "text-stone-200",
  },
  red: {
    bg: "bg-red-900",
    text: "text-red-300",
    activeBg: "bg-red-800",
    activeText: "text-white",
    border: "border-red-800",
    avatarBg: "bg-red-700",
    avatarText: "text-red-200",
  },
  purple: {
    bg: "bg-purple-900",
    text: "text-purple-300",
    activeBg: "bg-purple-800",
    activeText: "text-white",
    border: "border-purple-800",
    avatarBg: "bg-purple-700",
    avatarText: "text-purple-200",
  },
  blue: {
    bg: "bg-blue-900",
    text: "text-blue-300",
    activeBg: "bg-blue-800",
    activeText: "text-white",
    border: "border-blue-800",
    avatarBg: "bg-blue-700",
    avatarText: "text-blue-200",
  },
};

interface NavItem {
  icon: string;
  label: string;
}

interface ProductShellProps {
  children: ReactNode;
  productName: string;
  accentColor: string;
  navItems: NavItem[];
  activeNav?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}

export function ProductShell({
  children,
  productName,
  accentColor,
  navItems,
  activeNav,
  title,
  subtitle,
  actions,
}: ProductShellProps) {
  const colors = COLOR_MAP[accentColor] ?? COLOR_MAP.indigo;

  return (
    <div className="flex h-full min-h-[600px] bg-neutral-50">
      <aside className={`flex w-52 shrink-0 flex-col ${colors.bg}`}>
        <div className={`border-b ${colors.border} px-5 py-4`}>
          <span className="text-sm font-bold tracking-tight text-white">
            {productName}
          </span>
        </div>
        <nav className="flex-1 space-y-0.5 px-3 py-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                activeNav === item.label
                  ? `${colors.activeBg} ${colors.activeText}`
                  : `${colors.text} hover:${colors.activeBg} hover:text-white`
              }`}
            >
              <span className="text-[10px]">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>
        <div className={`border-t ${colors.border} px-4 py-3`}>
          <div className="flex items-center gap-2">
            <div
              className={`h-6 w-6 rounded-full ${colors.avatarBg} text-center text-[10px] font-bold leading-6 ${colors.avatarText}`}
            >
              U
            </div>
            <span className={`text-xs ${colors.text}`}>User</span>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        {(title || actions) && (
          <header className="flex items-center justify-between border-b border-neutral-200 bg-white px-8 py-5">
            <div>
              {title && (
                <h1 className="text-lg font-semibold text-neutral-900">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="mt-0.5 text-sm text-neutral-500">{subtitle}</p>
              )}
            </div>
            {actions && (
              <div className="flex items-center gap-3">{actions}</div>
            )}
          </header>
        )}
        <div className="flex-1 overflow-auto p-8">{children}</div>
      </div>
    </div>
  );
}
