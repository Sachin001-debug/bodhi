"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import TableReservationForm from "@/components/forms/TableReservationForm";
import WeddingReservationForm from "@/components/forms/WeddingReservationForm";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/contact";

/**
 * ReservationsPanel: Two-tab reservation hub with URL query sync (?type=table or ?type=wedding),
 * and side information card with direct contact details.
 */
export default function ReservationsPanel() {
  const searchParams = useSearchParams();
  const queryType = searchParams.get("type");

  const [activeTab, setActiveTab] = useState(
    queryType === "wedding" ? "wedding" : "table"
  );

  useEffect(() => {
    if (queryType === "wedding" || queryType === "table") {
      setActiveTab(queryType);
    }
  }, [queryType]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Main Forms Column */}
      <div className="lg:col-span-8 space-y-6">
        {/* Two-Tab Navigation */}
        <div
          role="tablist"
          aria-label="Reservation Type"
          className="grid grid-cols-2 p-1.5 bg-bg-alt border border-border rounded-sm select-none"
        >
          <button
            role="tab"
            type="button"
            aria-selected={activeTab === "table"}
            onClick={() => setActiveTab("table")}
            className={`min-h-[46px] flex items-center justify-center text-xs uppercase tracking-[0.16em] font-medium rounded-xs transition-all duration-200 cursor-pointer ${
              activeTab === "table"
                ? "bg-primary text-white shadow-xs font-semibold"
                : "text-text-muted hover:text-text hover:bg-surface"
            }`}
          >
            Table Reservation (Dining)
          </button>
          <button
            role="tab"
            type="button"
            aria-selected={activeTab === "wedding"}
            onClick={() => setActiveTab("wedding")}
            className={`min-h-[46px] flex items-center justify-center text-xs uppercase tracking-[0.16em] font-medium rounded-xs transition-all duration-200 cursor-pointer ${
              activeTab === "wedding"
                ? "bg-primary text-white shadow-xs font-semibold"
                : "text-text-muted hover:text-text hover:bg-surface"
            }`}
          >
            Wedding & Event Booking
          </button>
        </div>

        {/* Tab Panels */}
        <div className="transition-all duration-300">
          {activeTab === "table" ? (
            <TableReservationForm />
          ) : (
            <WeddingReservationForm />
          )}
        </div>
      </div>

      {/* Side Panel: Contact Info & Peak Dates Warning */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-surface border border-border p-6 sm:p-7 rounded-sm shadow-soft space-y-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent block">
              Direct Assistance
            </span>
            <h3 className="font-heading text-xl text-text mt-1 font-medium">
              Prefer to book directly?
            </h3>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm text-text-muted divide-y divide-border/60">
            <div className="pt-2 first:pt-0">
              <span className="text-xs uppercase tracking-wider text-text font-semibold block mb-0.5">
                WhatsApp Concierge
              </span>
              <a
                href={buildWhatsAppLink(
                  `Namaste Bodhi Villa! I would like to inquire about a ${
                    activeTab === "table" ? "table reservation" : "wedding booking"
                  }.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline text-sm sm:text-base"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
                {siteConfig.whatsappDisplay}
              </a>
            </div>

            <div className="pt-3">
              <span className="text-xs uppercase tracking-wider text-text font-semibold block mb-0.5">
                Direct Phone
              </span>
              <a
                href={siteConfig.phoneHref}
                className="text-primary font-medium hover:underline text-sm sm:text-base"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div className="pt-3">
              <span className="text-xs uppercase tracking-wider text-text font-semibold block mb-0.5">
                Email Desk
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary font-medium hover:underline break-all"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="pt-3">
              <span className="text-xs uppercase tracking-wider text-text font-semibold block mb-0.5">
                Location & Hours
              </span>
              <p className="text-text font-medium">{siteConfig.address}</p>
              <p className="text-text-muted mt-0.5">{siteConfig.hours}</p>
            </div>
          </div>

          {/* Peak Date Note */}
          <div className="p-4 bg-primary-soft/50 border border-primary/20 rounded-xs">
            <p className="text-xs text-primary font-medium flex items-center gap-1.5">
              <span>✦</span>
              <strong>Notice:</strong> Peak wedding dates book early.
            </p>
            <p className="text-[0.72rem] text-text-muted mt-1 leading-relaxed">
              We recommend reserving auspicious Vivah and reception dates 3 to 6 months in advance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

