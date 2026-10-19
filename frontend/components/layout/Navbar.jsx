"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import LotusMark from "@/components/ornaments/LotusMark";
import MobileMenu from "./MobileMenu";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/weddings", label: "Weddings" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressRef = useRef(null);
  const pathname = usePathname();

  const scrollToTop = () => window.scrollTo(0, 0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 24);

      if (progressRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(y / max, 1) : 0;
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-[height,background-color,border-color,box-shadow] duration-500 ease-[var(--ease-premium)] border-b bg-surface/95 backdrop-blur-md border-border shadow-[var(--shadow-soft)] text-text ${
          isScrolled ? "h-[calc(var(--navbar-height)-0.75rem)]" : "h-[var(--navbar-height)]"
        }`}
      >
        <div className="w-full max-w-[var(--container-max)] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          <Link
            href="/"
            onClick={scrollToTop}
            aria-label={`${siteConfig.name} - Back to Home`}
            className="group flex items-center gap-2.5 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <span className="grid place-items-center w-9 h-9 rounded-full border border-border text-primary transition-colors duration-500 group-hover:border-accent">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3BbLX1MZ-xAsWTZZlAyp5bsZYhQeJ4rf5Tvz76o4Sg&s" className="rounded-full"/>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-[1.4rem] sm:text-[1.55rem] font-medium tracking-[0.03em] text-text transition-colors duration-300 group-hover:text-primary">
                {siteConfig.name}
              </span>
              <span className="mt-1 text-[0.58rem] uppercase tracking-[0.3em] text-accent">
                Restaurant &amp; Weddings
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main menu">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={scrollToTop}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1.5 text-[0.7rem] uppercase tracking-[0.2em] font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-500 after:ease-[var(--ease-premium)] ${
                    isActive
                      ? "text-primary after:scale-x-100"
                      : "text-text-muted hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a
              href={siteConfig.phoneHref}
              className="hidden xl:flex items-center gap-2 text-xs tracking-[0.06em] text-text-muted transition-colors duration-300 hover:text-primary"
            >
              <PhoneIcon className="w-4 h-4" />
              {siteConfig.phone}
            </a>

            <span aria-hidden="true" className="hidden xl:block h-5 w-px bg-border" />

            <Link
              href="/reservations"
              onClick={scrollToTop}
              className="group relative inline-flex items-center gap-2.5 h-10 px-5 text-[0.7rem] uppercase tracking-[0.2em] font-medium rounded-sm border bg-primary text-white border-primary transition-colors duration-500 ease-[var(--ease-premium)] hover:bg-primary-hover hover:border-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[3px] rounded-[1px] border border-accent/0 transition-colors duration-500 group-hover:border-accent/70"
              />
              <span className="relative">Reserve</span>
              <ArrowIcon className="relative w-3.5 h-3.5 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden group grid place-items-center w-11 h-11 -mr-2 rounded-sm cursor-pointer text-text transition-colors duration-300 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <span className="flex flex-col items-end gap-[7px]">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current transition-all duration-300 group-hover:w-6" />
            </span>
          </button>
        </div>

        <span
          ref={progressRef}
          aria-hidden="true"
          style={{ transform: "scaleX(0)" }}
          className="absolute left-0 -bottom-px h-px w-full origin-left bg-accent opacity-100"
        />
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}