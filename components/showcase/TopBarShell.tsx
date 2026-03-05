import { ReactNode } from "react";

interface NavItem {
  icon: string;
  label: string;
}

interface TopBarShellProps {
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
  { activeBg: string; activeText: string; logoBg: string; logoText: string }
> = {
  indigo: {
    activeBg: "bg-indigo-50",
    activeText: "text-indigo-700",
    logoBg: "bg-indigo-600",
    logoText: "text-white",
  },
  rose: {
    activeBg: "bg-rose-50",
    activeText: "text-rose-700",
    logoBg: "bg-rose-600",
    logoText: "text-white",
  },
};

export function TopBarShell({
  children,
  productName,
  accentColor,
  navItems,
  activeNav,
  title,
  subtitle,
  actions,
}: TopBarShellProps) {
  const c = ACCENT[accentColor] ?? ACCENT.indigo;

  return (
    <div className="flex h-full min-h-[600px] flex-col bg-white">
      <header className="border-b border-neutral-200">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-md ${c.logoBg}`}
              >
                <span className={`text-xs font-bold ${c.logoText}`}>
                  {productName.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-semibold text-neutral-900">
                {productName}
              </span>
            </div>
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeNav === item.label
                      ? `${c.activeBg} ${c.activeText}`
                      : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-neutral-100 text-center text-[10px] font-bold leading-7 text-neutral-600">
              U
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto">
        {(title || actions) && (
          <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50/50 px-6 py-4">
            <div>
              {title && (
                <h1 className="text-base font-semibold text-neutral-900">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="mt-0.5 text-xs text-neutral-500">{subtitle}</p>
              )}
            </div>
            {actions && (
              <div className="flex items-center gap-2">{actions}</div>
            )}
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
