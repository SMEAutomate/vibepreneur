import { ReactNode } from "react";

interface NavItem {
  icon: string;
  label: string;
}

interface DarkShellProps {
  children: ReactNode;
  productName: string;
  accentColor: string;
  navItems: NavItem[];
  activeNav?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}

const ACCENT: Record<
  string,
  { accent: string; accentMuted: string; headerBg: string }
> = {
  emerald: {
    accent: "text-emerald-400",
    accentMuted: "bg-emerald-500/20",
    headerBg: "border-neutral-700",
  },
  slate: {
    accent: "text-slate-400",
    accentMuted: "bg-slate-500/20",
    headerBg: "border-neutral-700",
  },
  red: {
    accent: "text-red-400",
    accentMuted: "bg-red-500/20",
    headerBg: "border-neutral-700",
  },
};

export function DarkShell({
  children,
  productName,
  accentColor,
  navItems,
  activeNav,
  title,
  subtitle,
  actions,
}: DarkShellProps) {
  const c = ACCENT[accentColor] ?? ACCENT.emerald;

  return (
    <div className="flex h-full min-h-[600px] bg-neutral-900">
      <aside className="flex w-14 shrink-0 flex-col items-center border-r border-neutral-800 bg-neutral-950 py-4">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${c.accentMuted}`}
        >
          <span className={`text-xs font-bold ${c.accent}`}>
            {productName.charAt(0)}
          </span>
        </div>
        <nav className="mt-6 flex flex-col items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              title={item.label}
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-[10px] transition-colors ${
                activeNav === item.label
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-500 hover:bg-neutral-800/50 hover:text-neutral-300"
              }`}
            >
              {item.icon}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header
          className={`flex items-center justify-between border-b ${c.headerBg} bg-neutral-900 px-6 py-4`}
        >
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-white">
              {productName}
            </span>
            {title && (
              <>
                <span className="text-neutral-700">/</span>
                <span className="text-sm text-neutral-400">{title}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            {actions}
            <div className="h-7 w-7 rounded-full bg-neutral-800 text-center text-[10px] font-bold leading-7 text-neutral-400">
              U
            </div>
          </div>
        </header>
        {subtitle && (
          <div className="border-b border-neutral-800 bg-neutral-900/50 px-6 py-2">
            <p className="text-xs text-neutral-500">{subtitle}</p>
          </div>
        )}
        <div className="flex-1 overflow-auto bg-neutral-50 p-6">{children}</div>
      </div>
    </div>
  );
}
