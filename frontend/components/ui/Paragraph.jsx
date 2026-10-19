/**
 * Paragraph: Typography-led body copy component.
 * Uses 16-18px, line-height 1.7, muted color, max ~65ch.
 */
export default function Paragraph({
  children,
  size = "base", // "sm" | "base" | "lg"
  theme = "dark", // "dark" (muted dark text) | "light" (for dark backgrounds)
  lead = false,
  className = "",
  as: Component = "p",
  ...props
}) {
  const getSize = () => {
    if (lead) return "text-lg md:text-xl leading-relaxed";
    switch (size) {
      case "sm":
        return "text-sm leading-normal";
      case "lg":
        return "text-lg leading-relaxed";
      case "base":
      default:
        return "text-base md:text-[17px] leading-[1.75]";
    }
  };

  const getColor = () => {
    if (theme === "light") return "text-white/80";
    return "text-text-muted";
  };

  return (
    <Component
      className={`font-body max-w-[65ch] ${getSize()} ${getColor()} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

