/**
 * Heading: Typography-led serif heading with Cormorant Garamond.
 * Supports highlighting an italic accent phrase or word.
 */
export default function Heading({
  children,
  level = "h2", // "display" | "h1" | "h2" | "h3" | "h4"
  accent, // string to highlight with italic accent styling
  className = "",
  theme = "dark", // "dark" (standard dark text) | "light" (for dark backgrounds)
  as,
  ...props
}) {
  const Component = as || (level === "display" ? "h1" : level);

  const getFontSize = () => {
    switch (level) {
      case "display":
        return "text-[var(--text-display)] leading-[1.08] font-normal tracking-[-0.02em]";
      case "h1":
        return "text-[var(--text-h1)] leading-[1.12] font-normal tracking-[-0.015em]";
      case "h2":
        return "text-[var(--text-h2)] leading-[1.2] font-normal tracking-[-0.01em]";
      case "h3":
        return "text-2xl md:text-3xl leading-[1.25] font-normal";
      case "h4":
        return "text-xl md:text-2xl leading-[1.3] font-normal";
      default:
        return "text-[var(--text-h2)] leading-[1.2]";
    }
  };

  const getTextColor = () => {
    if (theme === "light") return "text-white";
    return "text-text";
  };

  // Helper to highlight accent word if provided as a string
  const renderContent = () => {
    if (!accent || typeof children !== "string") {
      return children;
    }

    const parts = children.split(new RegExp(`(${accent})`, "gi"));
    const accentColor = theme === "light" ? "text-accent italic font-normal" : "text-primary italic font-normal";

    return parts.map((part, index) =>
      part.toLowerCase() === accent.toLowerCase() ? (
        <span key={index} className={accentColor}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <Component
      className={`font-heading ${getFontSize()} ${getTextColor()} ${className}`}
      {...props}
    >
      {renderContent()}
    </Component>
  );
}

