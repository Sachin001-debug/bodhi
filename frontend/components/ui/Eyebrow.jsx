/**
 * Eyebrow: Small uppercase label with wide tracking, accent color, and a delicate beside-line.
 */
export default function Eyebrow({
  children,
  className = "",
  align = "start", // "start" | "center" | "end"
  line = true,
  as: Component = "span",
  ...props
}) {
  const getAlignment = () => {
    switch (align) {
      case "center":
        return "justify-center";
      case "end":
        return "justify-end";
      case "start":
      default:
        return "justify-start";
    }
  };

  return (
    <Component
      className={`inline-flex items-center gap-3 text-[var(--text-label)] uppercase font-semibold text-accent tracking-[var(--tracking-label)] ${getAlignment()} ${className}`}
      {...props}
    >
      {line && align === "center" && (
        <span className="inline-block w-5 sm:w-8 h-[1px] bg-accent/60 shrink-0" aria-hidden="true" />
      )}
      <span>{children}</span>
      {line && (
        <span className="inline-block w-5 sm:w-8 h-[1px] bg-accent/60 shrink-0" aria-hidden="true" />
      )}
    </Component>
  );
}

