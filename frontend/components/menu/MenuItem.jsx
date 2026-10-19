import Badge from "@/components/ui/Badge";

/**
 * MenuItem: Refined dotted-leader / thin-line item layout.
 * Shows item name, description, formatted NPR price, and tags.
 */
export default function MenuItem({ item, currency = "NPR" }) {
  const { name, description, price, tags = [] } = item;

  return (
    <article className="group flex flex-col justify-between py-3.5 border-b border-border/70 hover:border-accent/40 transition-colors">
      <div className="flex items-baseline justify-between gap-3">
        {/* Name and Tags */}
        <div className="flex items-center flex-wrap gap-2 min-w-0">
          <h4 className="font-heading text-lg sm:text-xl text-text font-medium group-hover:text-primary transition-colors">
            {name}
          </h4>
          {tags && tags.length > 0 && (
            <div className="inline-flex items-center gap-1">
              {tags.map((tag) => (
                <Badge key={tag} variant={tag}>
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Dotted leader on desktop */}
        <div
          className="hidden sm:block flex-1 mx-2 border-b border-dotted border-border group-hover:border-accent/40 transition-colors"
          aria-hidden="true"
        />

        {/* Price */}
        <div className="text-right shrink-0">
          <span className="font-heading text-lg sm:text-xl font-medium text-text group-hover:text-primary transition-colors">
            {currency} {price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed max-w-prose">
          {description}
        </p>
      )}
    </article>
  );
}

