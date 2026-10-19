"use client";

import { useState } from "react";
import FilterTabs from "./FilterTabs";
import MasonryGrid from "./MasonryGrid";
import { galleryCategories, galleryItems } from "@/data/gallery";

/**
 * GalleryClient: Interactive filter tab state and masonry grid renderer.
 */
export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex justify-center">
        <FilterTabs
          categories={galleryCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      {/* Masonry Grid */}
      <MasonryGrid items={filteredItems} />
    </div>
  );
}

