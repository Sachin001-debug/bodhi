import Link from "next/link";

/**
 * Button: Quiet luxury interactive button and link component.
 * Follows strict styling: solid primary, 1px outline secondary, or animated text link.
 */
export default function Button({
  children,
  href,
  variant = "primary", // "primary" | "secondary" | "outline-white" | "ghost" | "link"
  size = "md", // "sm" | "md" | "lg"
  fullWidth = false,
  arrow = true,
  className = "",
  type = "button",
  onClick,
  disabled = false,
  ...props
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white border border-primary hover:bg-primary-hover hover:border-primary-hover shadow-sm active:translate-y-[1px]";
      case "secondary":
        return "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300";
      case "outline-white":
        return "bg-transparent text-white border border-white/80 hover:bg-white hover:text-primary transition-colors duration-300";
      case "ghost":
        return "bg-transparent text-primary hover:bg-primary-soft transition-colors duration-250";
      case "link":
        return "bg-transparent text-primary p-0 h-auto min-h-0 link-underline font-medium";
      default:
        return "bg-primary text-white";
    }
  };

  const getSizeStyles = () => {
    if (variant === "link") return "";
    switch (size) {
      case "sm":
        return "min-h-[38px] px-4 py-2 text-[0.7rem]";
      case "lg":
        return "min-h-[52px] px-8 py-3.5 text-xs sm:text-[0.8rem]";
      case "md":
      default:
        return "min-h-[46px] px-6 py-2.5 text-xs";
    }
  };

  const baseStyles = [
    "group inline-flex items-center justify-center font-body uppercase tracking-[0.18em] font-medium transition-all select-none rounded-sm",
    "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    getVariantStyles(),
    getSizeStyles(),
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && variant !== "link" && (
        <span
          className="ml-2.5 inline-block transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      )}
      {arrow && variant === "link" && (
        <span
          className="ml-1.5 inline-block transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={baseStyles}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}

