"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import Reveal from "@/components/animations/Reveal";
import FrameCorner from "@/components/ornaments/FrameCorner";

/**
 * MasonryGrid: Responsive masonry image grid for wedding and restaurant photos.
 * 1 column on mobile (360px), 2 on tablets (768px), 3-4 on desktop.
 */
export default function MasonryGrid({ items = [] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const getAspectClasses = (aspect) => {
    switch (aspect) {
      case "tall":
        return "aspect-[3/4]";
      case "wide":
        return "aspect-[16/10]";
      case "square":
      default:
        return "aspect-square";
    }
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {items.map((item, index) => (
          <Reveal
            key={item.id}
            variant="scale-in"
            delay={(index % 4) * 80}
            className="break-inside-avoid"
          >
            <div
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-surface border border-border shadow-soft transition-all duration-300 hover:shadow-lg focus:outline-none"
              tabIndex={0}
              role="button"
              aria-label={`View photo: ${item.caption || item.alt}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              {/* Image Frame */}
              <div className={`relative w-full ${getAspectClasses(item.aspect)} overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.alt || "Bodhi Villa Photo"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] md:group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Fine corner frame ornaments */}
                <FrameCorner position="top-left" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                <FrameCorner position="bottom-right" className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Caption and category label */}
              <div className="p-4 bg-surface border-t border-border/60">
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-accent font-semibold block mb-1">
                  {item.category === "weddings" ? "Wedding & Celebration" : "Restaurant & Dining"}
                </span>
                <p className="font-heading text-lg text-text leading-snug group-hover:text-primary transition-colors">
                  {item.caption}
                </p>

                {/* Subtle gold accent underline growing on hover */}
                <div className="w-0 group-hover:w-full h-[1px] bg-accent transition-all duration-500 mt-2" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={items}
        currentIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={(idx) => setSelectedIndex(idx)}
      />
    </>
  );
}

