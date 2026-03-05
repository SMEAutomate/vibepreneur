import { ReactNode } from "react";

interface NavItem {
  icon: string;
  label: string;
}

interface CompactShellProps {
  children: ReactNode;
  productName: string;
  accentColor: string;
  navItems: NavItem[];
  activeNav?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  breadcrumb?: string[];
}

const ACCENT: Record<
  string,
  { activeBg: string; activeText: string; headerAccent: string }
> = {
  amber: {
    activeBg: "bg-amber-100",
    activeText: "text-amber-800",
    headerAccent: "border-l-amber-500",
  },
  stone: {
    activeBg: "bg-stone-200",
    activeText: "text-stone-800",
    headerAccent: "border-l-stone-500",
  },
  lime: {
    activeBg: "bg-lime-100",
    activeText: "text-lime-800",
    headerAccent: "border-l-lime-500",
  },
};

export function CompactShell({
  children,
  productName,
  accentColor,
  navItems,
  activeNav,
  title,
  subtitle,
  actions,
  breadcrumb,
}: CompactShellProps) {
  const c = ACCENT[accentColor] ?? ACCENT.amber;

  return (
    <div className="flex h-full min-h-[600px] bg-neutral-100">
      <aside className="flex w-12 shrink-0 flex-col items-center border-r border-neutral-200 bg-white py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-neutral-900">
          <span className="text-[10px] font-bold text-white">
            {productName.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <nav className="mt-4 flex flex-col items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              title={item.label}
              className={`flex h-8 w-8 items-center justify-center rounded text-[10px] transition-colors ${
                activeNav === item.label
                  ? `${c.activeBg} ${c.activeText}`
                  : "text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
              }`}
            >
              {item.icon}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header
          className={`flex items-center justify-between border-b border-l-4 border-neutral-200 ${c.headerAccent} bg-white px-5 py-3`}
        >
          <div>
            {breadcrumb && (
              <div className="mb-1 flex items-center gap-1 text-[10px] text-neutral-400">
                {breadcrumb.map((b, i) => (
                  <span key={b}>
                    {i > 0 && <span className="mx-1">&gt;</span>}
                    {b}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center gap-3">
              {title && (
                <h1 className="text-sm font-semibold text-neutral-900">
                  {title}
                </h1>
              )}
              {subtitle && (
                <span className="text-xs text-neutral-400">{subtitle}</span>
              )}
            </div>
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </header>
        <div className="flex-1 overflow-auto p-5">{children}</div>
      </div>
    </div>
  );
}
