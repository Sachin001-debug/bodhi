"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import MenuTabs from "./MenuTabs";
import MenuCategory from "./MenuCategory";
import Button from "@/components/ui/Button";
import FrameCorner from "@/components/ornaments/FrameCorner";
import { menuData } from "@/data/menu";

// Curated high quality food photo breaks
const PHOTO_BREAKS = [
  {
    afterCategoryId: "nepali-specials",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
    caption: "Traditional clay-oven and charcoal cooking at Bodhi Villa",
    alt: "Charcoal grill and tandoor feast",
  },
  {
    afterCategoryId: "rice-noodles",
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80",
    caption: "Peaceful garden dining veranda, served daily from 10:00 AM",
    alt: "Bodhi Villa garden dining tables",
  },
];

/**
 * MenuContent: Handles active scroll detection, sticky category tabs,
 * photo breaks, and category rendering.
 */
export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState(
    menuData.categories[0]?.id || ""
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = menuData.categories.length - 1; i >= 0; i--) {
        const cat = menuData.categories[i];
        const el = document.getElementById(cat.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Category Tabs */}
      <MenuTabs
        categories={menuData.categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        menuPdf={menuData.menuPdf}
      />

      <Section pad="default" bg="default">
        <Container>
          {menuData.categories.map((category) => {
            const photoBreak = PHOTO_BREAKS.find(
              (p) => p.afterCategoryId === category.id
            );

            return (
              <div key={category.id}>
                {/* Category Section */}
                <MenuCategory category={category} currency={menuData.currency} />

                {/* Optional Photo Break */}
                {photoBreak && (
                  <div className="my-12 md:my-16">
                    <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden rounded-sm bg-surface border border-border shadow-soft group">
                      <Image
                        src={photoBreak.src}
                        alt={photoBreak.alt}
                        fill
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <FrameCorner position="top-left" />
                      <FrameCorner position="bottom-right" />
                      <div className="absolute bottom-4 left-6 right-6 text-white text-xs sm:text-sm font-heading tracking-wide">
                        {photoBreak.caption}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Pricing & Dietary Disclaimer Note */}
          <div className="mt-12 pt-6 border-t border-border text-center space-y-4">
            <p className="text-xs text-text-muted italic max-w-xl mx-auto">
              {menuData.priceNote}
            </p>
            <div className="flex justify-center">
              <Button href="/reservations?type=table" variant="primary" size="md">
                Reserve a Table for Dining
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

