"use client";

import { useEffect, useRef } from "react";

/**
 * Parallax: Desktop-only, rAF-throttled subtle vertical parallax effect.
 * Completely disabled on mobile devices (<768px) and for users with reduced motion.
 */
export default function Parallax({
  children,
  speed = 0.12, // subtle movement factor
  className = "",
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    // Disable if mobile or reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile) return;

    let animationFrameId = null;
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Only compute if within or near viewport
        if (rect.bottom > -100 && rect.top < viewportHeight + 100) {
          const centerY = rect.top + rect.height / 2;
          const delta = (centerY - viewportHeight / 2) * speed;
          element.style.transform = `translate3d(0, ${delta.toFixed(1)}px, 0)`;
        }
        animationFrameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`} {...props}>
      {children}
    </div>
  );
}

