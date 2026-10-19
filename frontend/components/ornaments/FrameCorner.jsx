/**
 * FrameCorner: Fine luxury corner frames for framed photo cards and hero statements.
 */
export default function FrameCorner({
  position = "top-left",
  size = "w-4 h-4",
  className = "",
  ...props
}) {
  const getBorders = () => {
    switch (position) {
      case "top-left":
        return "top-3 left-3 border-t border-l";
      case "top-right":
        return "top-3 right-3 border-t border-r";
      case "bottom-left":
        return "bottom-3 left-3 border-b border-l";
      case "bottom-right":
        return "bottom-3 right-3 border-b border-r";
      default:
        return "top-3 left-3 border-t border-l";
    }
  };

  return (
    <div
      className={`absolute pointer-events-none border-accent/60 transition-all duration-500 ${size} ${getBorders()} ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}

/**
 * Convenience wrapper that renders all 4 luxury corner brackets.
 */
export function FrameCorners({ inset = "inset-3", className = "" }) {
  return (
    <div className={`absolute ${inset} pointer-events-none z-10`} aria-hidden="true">
      <div className={`absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-accent/70 ${className}`} />
      <div className={`absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-accent/70 ${className}`} />
      <div className={`absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-accent/70 ${className}`} />
      <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-accent/70 ${className}`} />
    </div>
  );
}

