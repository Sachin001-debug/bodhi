/**
 * Card: Architectural card container with subtle borders and optional hover interactions.
 */
export default function Card({
  children,
  className = "",
  hoverLine = false,
  bordered = true,
  bg = "surface", // "surface" | "alt" | "transparent"
  as: Component = "div",
  ...props
}) {
  const getBg = () => {
    switch (bg) {
      case "alt":
        return "bg-bg-alt";
      case "transparent":
        return "bg-transparent";
      case "surface":
      default:
        return "bg-surface";
    }
  };

  return (
    <Component
      className={`card-hover-group relative rounded-sm ${bordered ? "border border-border" : ""} ${getBg()} ${
        hoverLine ? "card-hover-line" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

