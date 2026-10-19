import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import MenuItem from "@/components/menu/MenuItem";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";
import { menuData } from "@/data/menu";

/**
 * MenuPreview: Homepage preview showcasing 6 signature culinary dishes.
 */
export default function MenuPreview() {
  // Collect 6 signature dishes across categories
  const featuredDishes = menuData.categories
    .flatMap((cat) => cat.items)
    .filter((item) => item.tags && item.tags.includes("Chef's Pick"))
    .slice(0, 6);

  return (
    <Section bg="default" pad="lg">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-border pb-6 gap-6">
          <div className="max-w-2xl">
            <Reveal variant="fade-up">
              <Eyebrow>Culinary Selections • Served Daily</Eyebrow>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <Heading level="h2" accent="artisan flavors" className="mt-2">
                A taste of our signature artisan flavors
              </Heading>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <Paragraph className="mt-3">
                From clay-pot Himalayan specialties to delicate modern desserts, each dish celebrates fresh herbs, organic mustard oils, and honest preparation.
              </Paragraph>
            </Reveal>
          </div>

          <Reveal variant="fade-left" delay={200} className="shrink-0">
            <Button href="/menu" variant="secondary">
              View Full Menu ({menuData.categories.reduce((acc, c) => acc + c.items.length, 0)} Items)
            </Button>
          </Reveal>
        </div>

        {/* 2-Column Dish Grid */}
        <Stagger
          staggerDelay={90}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2 mb-10"
        >
          {featuredDishes.map((dish) => (
            <MenuItem key={dish.id} item={dish} currency={menuData.currency} />
          ))}
        </Stagger>

        {/* Bottom Note & Action */}
        <Reveal variant="fade-up" delay={300} className="text-center pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted italic">
            {menuData.priceNote}
          </p>
          <Button href="/reservations?type=table" variant="primary" size="sm">
            Reserve a Dining Table
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}

