"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal: Smooth, performant scroll-reveal driven by IntersectionObserver and CSS transitions.
 * Animates only opacity and transform.
 * Respects prefers-reduced-motion and adjusts threshold on mobile.
 */
export default function Reveal({
  children,
  variant = "fade-up", // "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in"
  delay = 0, // delay in ms
  duration, // optional custom duration string e.g. "var(--dur-base)"
  className = "",
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Mobile check to lower threshold
    const isMobile = window.innerWidth < 768;
    const threshold = isMobile ? 0.05 : 0.15;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const style = {
    transitionDelay: `${delay}ms`,
    transitionDuration: duration || "var(--dur-base)",
  };

  return (
    <Component
      ref={ref}
      style={style}
      className={`reveal-init ${variant} ${isRevealed ? "revealed" : ""} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

