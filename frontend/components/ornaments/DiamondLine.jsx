/**
 * DiamondLine: Refined diamond-and-line divider for subtle section accents.
 */
export default function DiamondLine({ className = "w-full max-w-sm mx-auto my-6", ...props }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-border ${className}`}
      aria-hidden="true"
      {...props}
    >
      <div className="h-[1px] flex-1 bg-border" />
      <div className="flex items-center gap-1.5 text-accent">
        <div className="w-1 h-1 rotate-45 border border-current" />
        <div className="w-2 h-2 rotate-45 border border-current bg-accent/20" />
        <div className="w-1 h-1 rotate-45 border border-current" />
      </div>
      <div className="h-[1px] flex-1 bg-border" />
    </div>
  );
}

