import { ReactNode } from "react";

interface NavItem {
  icon: string;
  label: string;
}

interface SoftShellProps {
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
  {
    sidebarBg: string;
    activeBg: string;
    activeText: string;
    text: string;
    logoBg: string;
    logoText: string;
    border: string;
  }
> = {
  cyan: {
    sidebarBg: "bg-cyan-50",
    activeBg: "bg-white",
    activeText: "text-cyan-700",
    text: "text-cyan-600/70",
    logoBg: "bg-cyan-100",
    logoText: "text-cyan-800",
    border: "border-cyan-100",
  },
  sky: {
    sidebarBg: "bg-sky-50",
    activeBg: "bg-white",
    activeText: "text-sky-700",
    text: "text-sky-600/70",
    logoBg: "bg-sky-100",
    logoText: "text-sky-800",
    border: "border-sky-100",
  },
  blue: {
    sidebarBg: "bg-blue-50",
    activeBg: "bg-white",
    activeText: "text-blue-700",
    text: "text-blue-600/70",
    logoBg: "bg-blue-100",
    logoText: "text-blue-800",
    border: "border-blue-100",
  },
};

export function SoftShell({
  children,
  productName,
  accentColor,
  navItems,
  activeNav,
  title,
  subtitle,
  actions,
}: SoftShellProps) {
  const c = ACCENT[accentColor] ?? ACCENT.cyan;

  return (
    <div className="flex h-full min-h-[600px] bg-white">
      <aside className={`flex w-56 shrink-0 flex-col ${c.sidebarBg}`}>
        <div className={`border-b ${c.border} px-5 py-5`}>
          <div className="flex items-center gap-2.5">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-xl ${c.logoBg}`}
            >
              <span className={`text-xs font-bold ${c.logoText}`}>
                {productName.charAt(0)}
              </span>
            </div>
            <span className={`text-sm font-semibold ${c.logoText}`}>
              {productName}
            </span>
          </div>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium transition-colors ${
                activeNav === item.label
                  ? `${c.activeBg} ${c.activeText} shadow-sm`
                  : `${c.text} hover:bg-white/60`
              }`}
            >
              <span className="text-[11px]">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>
        <div className={`border-t ${c.border} px-4 py-4`}>
          <div className="flex items-center gap-2.5">
            <div
              className={`h-7 w-7 rounded-xl ${c.logoBg} text-center text-[10px] font-bold leading-7 ${c.logoText}`}
            >
              U
            </div>
            <span className={`text-xs ${c.text}`}>User</span>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        {(title || actions) && (
          <header className="flex items-center justify-between border-b border-neutral-100 px-8 py-5">
            <div>
              {title && (
                <h1 className="text-lg font-semibold text-neutral-900">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="mt-0.5 text-sm text-neutral-400">{subtitle}</p>
              )}
            </div>
            {actions && (
              <div className="flex items-center gap-3">{actions}</div>
            )}
          </header>
        )}
        <div className="flex-1 overflow-auto bg-neutral-50/50 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
