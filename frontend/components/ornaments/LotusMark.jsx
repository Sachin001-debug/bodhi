/**
 * LotusMark: Minimal, elegant lotus & bodhi leaf brand mark.
 * Uses currentColor to inherit theme colors dynamically.
 */
export default function LotusMark({ className = "w-8 h-8", ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Central Bodhi leaf / Lotus petal */}
      <path
        d="M32 6C32 6 22 20 22 34C22 41 26.5 48 32 50C37.5 48 42 41 42 34C42 20 32 6 32 6Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central vein */}
      <path
        d="M32 16V46"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Left blooming petal */}
      <path
        d="M23 23C16 29 12 37 14 44C16 48 20 50 25 48C21.5 42 21 34 23 23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right blooming petal */}
      <path
        d="M41 23C48 29 52 37 50 44C48 48 44 50 39 48C42.5 42 43 34 41 23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base water/earth cradle curve */}
      <path
        d="M10 52C22 56 42 56 54 52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="54.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

