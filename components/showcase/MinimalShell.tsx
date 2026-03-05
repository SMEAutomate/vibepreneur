import { ReactNode } from "react";

interface NavItem {
  icon: string;
  label: string;
}

interface MinimalShellProps {
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
  { underline: string; text: string; logoBorder: string }
> = {
  violet: {
    underline: "bg-violet-600",
    text: "text-violet-700",
    logoBorder: "border-violet-200",
  },
  purple: {
    underline: "bg-purple-600",
    text: "text-purple-700",
    logoBorder: "border-purple-200",
  },
};

export function MinimalShell({
  children,
  productName,
  accentColor,
  navItems,
  activeNav,
  title,
  subtitle,
  actions,
}: MinimalShellProps) {
  const c = ACCENT[accentColor] ?? ACCENT.violet;

  return (
    <div className="flex h-full min-h-[600px] flex-col bg-neutral-50">
      <header className="bg-white">
        <div className="flex items-center justify-between px-8 py-5">
          <div>
            <div className="flex items-center gap-3">
              <div
                className={`rounded-lg border-2 ${c.logoBorder} px-2 py-0.5`}
              >
                <span className={`text-xs font-bold ${c.text}`}>
                  {productName}
                </span>
              </div>
              {title && (
                <h1 className="text-lg font-semibold text-neutral-900">
                  {title}
                </h1>
              )}
            </div>
            {subtitle && (
              <p className="mt-1 pl-0 text-sm text-neutral-500">{subtitle}</p>
            )}
          </div>
          {actions && <div className="flex items-center gap-3">{actions}</div>}
        </div>
        <nav className="flex gap-0 border-t border-neutral-100 px-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              <div
                className={`px-4 py-3 text-xs font-medium transition-colors ${
                  activeNav === item.label
                    ? `${c.text}`
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {item.label}
              </div>
              {activeNav === item.label && (
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${c.underline}`}
                />
              )}
            </div>
          ))}
        </nav>
      </header>
      <div className="flex-1 overflow-auto p-8">{children}</div>
    </div>
  );
}
