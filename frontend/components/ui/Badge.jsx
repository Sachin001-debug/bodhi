/**
 * Badge: Small refined tag for menu dietary indicators and package highlights.
 */
export default function Badge({
  children,
  variant = "default", // "default" | "veg" | "spicy" | "chef" | "gold"
  className = "",
  ...props
}) {
  const getStyles = () => {
    switch (variant.toLowerCase()) {
      case "veg":
        return "border-emerald-800/20 bg-emerald-50 text-emerald-800";
      case "spicy":
        return "border-amber-800/20 bg-amber-50 text-amber-900";
      case "chef's pick":
      case "chef":
      case "gold":
        return "border-accent/40 bg-accent/10 text-accent font-medium";
      case "default":
      default:
        return "border-border bg-bg-alt text-text-muted";
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[0.68rem] tracking-wider uppercase font-medium border rounded-[2px] select-none ${getStyles()} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

