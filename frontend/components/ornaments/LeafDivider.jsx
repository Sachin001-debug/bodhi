/**
 * LeafDivider: Thin botanical leaf motif with delicate horizontal line extensions.
 */
export default function LeafDivider({ className = "w-full max-w-xs mx-auto my-6", ...props }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-border ${className}`}
      aria-hidden="true"
      {...props}
    >
      <div className="h-[1px] flex-1 bg-border" />
      <svg
        viewBox="0 0 48 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-5 text-accent shrink-0"
      >
        <path
          d="M24 19C24 19 20 14 20 9C20 6.5 21.5 4 24 3C26.5 4 28 6.5 28 9C28 14 24 19 24 19Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M17 17C14 14 13 11 15 8C17 9 20 12 21 15"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M31 17C34 14 35 11 33 8C31 9 28 12 27 15"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="24" cy="21" r="1" fill="currentColor" />
      </svg>
      <div className="h-[1px] flex-1 bg-border" />
    </div>
  );
}

