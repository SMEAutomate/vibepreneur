import { ReactNode } from "react";

const navItems = [
  { icon: "◆", label: "Home" },
  { icon: "◎", label: "Opportunities" },
  { icon: "▣", label: "Solutions" },
  { icon: "◈", label: "Positioning" },
  { icon: "▶", label: "Go-To-Market" },
  { icon: "◇", label: "Distribution" },
  { icon: "△", label: "Growth" },
  { icon: "◉", label: "Insights" },
  { icon: "⚙", label: "Settings" },
];

interface AppShellProps {
  children: ReactNode;
  activeNav?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}

export function AppShell({
  children,
  activeNav = "Home",
  title,
  subtitle,
  actions,
}: AppShellProps) {
  return (
    <div className="flex h-full min-h-[600px] bg-neutral-50">
      <aside className="flex w-52 shrink-0 flex-col border-r border-neutral-200 bg-white">
        <div className="border-b border-neutral-100 px-5 py-4">
          <span className="text-sm font-bold tracking-tight text-neutral-900">
            vibepreneur
          </span>
        </div>
        <nav className="flex-1 space-y-0.5 px-3 py-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                activeNav === item.label
                  ? "bg-brand-50 text-brand-700"
                  : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700"
              }`}
            >
              <span className="text-[10px]">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>
        <div className="border-t border-neutral-100 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-brand-100 text-center text-[10px] font-bold leading-6 text-brand-700">
              S
            </div>
            <span className="text-xs text-neutral-600">Sarah Chen</span>
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
