/**
 * Tabs: Accessible tab list component with refined typography and active indicator.
 */
export default function Tabs({
  tabs = [], // array of { id, label, count }
  activeTab,
  onChange,
  className = "",
  tabClassName = "",
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter options"
      className={`inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 p-1.5 bg-bg-alt border border-border rounded-sm ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`min-h-[38px] px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 rounded-[2px] cursor-pointer select-none ${
              isActive
                ? "bg-primary text-white shadow-sm"
                : "text-text-muted hover:text-text hover:bg-surface/60"
            } ${tabClassName}`}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={`ml-1.5 text-[0.65rem] ${
                  isActive ? "text-white/80" : "text-text-muted/60"
                }`}
              >
                ({tab.count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

