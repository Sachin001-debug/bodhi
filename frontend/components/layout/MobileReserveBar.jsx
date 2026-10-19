import Link from "next/link";

/**
 * MobileReserveBar: Fixed sticky bottom bar on mobile screens (<768px).
 * Gives one-tap access to Table Reservation and Wedding Booking.
 * Respects iOS safe-area-inset-bottom.
 */
export default function MobileReserveBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-surface/95 backdrop-blur-md border-t border-border shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))]"
      role="region"
      aria-label="Quick reservation bar"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <Link
          href="/reservations?type=table"
          className="min-h-[44px] flex items-center justify-center bg-primary-soft text-primary border border-primary/20 text-[0.72rem] uppercase tracking-[0.14em] font-semibold rounded-sm active:bg-primary-soft/80 transition-colors"
        >
          Reserve Table
        </Link>
        <Link
          href="/reservations?type=wedding"
          className="min-h-[44px] flex items-center justify-center bg-primary text-white text-[0.72rem] uppercase tracking-[0.14em] font-semibold rounded-sm active:bg-primary-hover shadow-xs transition-colors"
        >
          Book Wedding
        </Link>
      </div>
    </div>
  );
}

