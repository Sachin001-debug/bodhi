"use client";

import { useEffect, useRef, useState } from "react";

/**
 * MenuTabs: Sticky navigation tabs for categories with active highlight on scroll,
 * smooth sliding indicator, and horizontal scroll on mobile with auto-centering.
 */
export default function MenuTabs({
  categories = [],
  activeCategory,
  onSelectCategory,
  menuPdf = "",
}) {
  const tabsContainerRef = useRef(null);
  const activeTabRef = useRef(null);

  // Auto-center active tab in horizontal scroll container on mobile
  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const activeEl = activeTabRef.current;
      const containerWidth = container.offsetWidth;
      const elOffset = activeEl.offsetLeft;
      const elWidth = activeEl.offsetWidth;

      container.scrollTo({
        left: elOffset - containerWidth / 2 + elWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  const handleTabClick = (categoryId) => {
    onSelectCategory(categoryId);
    const targetElement = document.getElementById(categoryId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-[calc(var(--navbar-height)-0.75rem)] z-30 bg-surface/95 backdrop-blur-md border-b border-border shadow-xs py-2 transition-all">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Scrollable Tabs */}
        <div
          ref={tabsContainerRef}
          role="tablist"
          aria-label="Menu categories"
          className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar scroll-smooth py-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={isActive ? activeTabRef : null}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => handleTabClick(cat.id)}
                className={`relative shrink-0 px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 select-none rounded-sm cursor-pointer ${
                  isActive
                    ? "text-primary font-semibold bg-primary-soft/60"
                    : "text-text-muted hover:text-text hover:bg-bg-alt"
                }`}
                style={{ scrollSnapAlign: "center" }}
              >
                {cat.name.split("&")[0].trim()}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-primary rounded-full transition-all"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Optional Download PDF Button */}
        {menuPdf && (
          <div className="shrink-0 hidden sm:block">
            <a
              href={menuPdf}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-border text-xs uppercase tracking-[0.14em] text-text-muted hover:text-primary hover:border-primary rounded-sm transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Menu (PDF)</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
