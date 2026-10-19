/**
 * Container: Centers content up to 1200px with responsive horizontal padding.
 */
export default function Container({
  children,
  className = "",
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={`w-full max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

