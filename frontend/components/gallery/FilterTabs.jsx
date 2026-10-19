/**
 * FilterTabs: Refined category filter bar for the visual gallery.
 */
export default function FilterTabs({
  categories = [],
  activeCategory = "all",
  onSelectCategory,
}) {
  return (
    <div
      role="tablist"
      aria-label="Gallery category filters"
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat.id)}
            className={`min-h-[40px] px-5 py-1.5 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 rounded-sm cursor-pointer select-none ${
              isActive
                ? "bg-primary text-white shadow-xs"
                : "border border-border bg-surface text-text-muted hover:text-text hover:border-text-muted"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

