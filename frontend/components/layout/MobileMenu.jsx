"use client";

import { useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/contact";
import LotusMark from "@/components/ornaments/LotusMark";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/weddings", label: "Weddings" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

/**
 * MobileMenu: Fullscreen slide-in drawer with large serif links and locked body scroll.
 */
export default function MobileMenu({ isOpen, onClose }) {
  const handleNavigation = () => {
    document.body.style.overflow = "";
    window.scrollTo(0, 0);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-surface text-text md:hidden overflow-y-auto"
    >
      {/* Top Header bar with Close button */}
      <div className="flex items-center justify-between px-6 h-[var(--navbar-height)] border-b border-border">
        <Link
          href="/"
          onClick={handleNavigation}
          className="flex items-center gap-2.5 text-primary group"
        >
          <LotusMark className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <div className="flex flex-col">
            <span className="font-heading text-xl tracking-wider text-text font-medium leading-none">
              {siteConfig.name}
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.2em] text-accent mt-0.5">
              Bhairahawa
            </span>
          </div>
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 -mr-2 text-text hover:text-primary transition-colors cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Large Serif Links */}
      <div className="flex-1 flex flex-col justify-center px-8 py-10 space-y-6">
        <span className="text-[0.7rem] uppercase tracking-[0.22em] text-accent font-medium">
          Navigation
        </span>
        <nav className="flex flex-col space-y-4" role="navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavigation}
              className="font-heading text-3xl sm:text-4xl text-text hover:text-primary hover:italic transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-border flex flex-col gap-3">
          <Link
            href="/reservations"
            onClick={handleNavigation}
            className="w-full min-h-[48px] flex items-center justify-center bg-primary text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-primary-hover transition-colors"
          >
            Reserve Table or Wedding →
          </Link>
          <a
            href={buildWhatsAppLink("Namaste! I would like to inquire with Bodhi Villa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[46px] flex items-center justify-center border border-border text-text hover:border-primary hover:text-primary text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Footer Contact Snippet */}
      <div className="px-8 py-6 bg-bg-alt border-t border-border text-xs text-text-muted space-y-1">
        <p className="font-medium text-text">{siteConfig.address}</p>
        <p>Direct: <a href={siteConfig.phoneHref} className="text-primary underline">{siteConfig.phone}</a></p>
        <p>Hours: {siteConfig.hours}</p>
      </div>
    </div>
  );
}
