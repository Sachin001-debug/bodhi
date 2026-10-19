/**
 * Section: Semantic section wrapper with standardized generous vertical padding.
 */
export default function Section({
  children,
  className = "",
  pad = "default", // "default" | "sm" | "lg" | "none"
  bg = "default", // "default" | "alt" | "primary" | "surface" | "tint"
  id,
  as: Component = "section",
  ...props
}) {
  const getPadding = () => {
    switch (pad) {
      case "sm":
        return "py-12 md:py-16";
      case "lg":
        return "py-20 md:py-32";
      case "none":
        return "py-0";
      case "default":
      default:
        return "py-[var(--section-pad-y)]";
    }
  };

  const getBackground = () => {
    switch (bg) {
      case "alt":
        return "bg-bg-alt";
      case "primary":
        return "bg-primary text-white";
      case "surface":
        return "bg-surface";
      case "tint":
        return "bg-primary-soft/40";
      case "default":
      default:
        return "bg-bg";
    }
  };

  return (
    <Component
      id={id}
      className={`relative w-full ${getPadding()} ${getBackground()} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

