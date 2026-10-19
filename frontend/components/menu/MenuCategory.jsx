import MenuItem from "./MenuItem";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";

/**
 * MenuCategory: Category section with headline, description, and two-column item grid.
 */
export default function MenuCategory({ category, currency = "NPR" }) {
  return (
    <section id={category.id} className="scroll-mt-[calc(var(--navbar-height)+60px)] py-8 md:py-12">
      <Reveal variant="fade-up" className="mb-6 border-b border-border pb-3">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <h3 className="font-heading text-2xl sm:text-3xl text-text font-normal">
            {category.name}
          </h3>
          <span className="text-xs uppercase tracking-[0.16em] text-accent font-medium">
            {category.items.length} Offerings
          </span>
        </div>
        {category.description && (
          <p className="text-sm text-text-muted mt-1 max-w-2xl">
            {category.description}
          </p>
        )}
      </Reveal>

      {/* Grid: 2 columns on desktop, 1 on mobile */}
      <Stagger
        staggerDelay={80}
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-1"
      >
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} currency={currency} />
        ))}
      </Stagger>
    </section>
  );
}

