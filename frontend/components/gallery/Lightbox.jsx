"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

/**
 * Lightbox: Keyboard-accessible, swipe-friendly modal image viewer.
 * Supports Escape, ArrowLeft, ArrowRight, and mobile touch swiping.
 */
export default function Lightbox({
  items = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onIndexChange,
}) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (!items.length) return;
    const newIdx = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onIndexChange(newIdx);
  }, [currentIndex, items.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (!items.length) return;
    const newIdx = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onIndexChange(newIdx);
  }, [currentIndex, items.length, onIndexChange]);

  // Lock body scroll and listen for key presses
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex flex-col bg-black/92 backdrop-blur-md select-none"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close */}
      <div
        className="w-full flex items-center justify-between px-6 py-4 text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xs uppercase tracking-[0.18em] text-white/70">
          Photo {currentIndex + 1} of {items.length}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer rounded-sm"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Image Frame */}
      <div
        className="flex-1 relative flex items-center justify-center p-4 sm:p-10"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Arrow Left */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous image"
          className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors cursor-pointer z-10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Current Image */}
        <div className="relative w-full h-full max-w-5xl max-h-[75vh] flex items-center justify-center">
          <Image
            src={currentItem.src}
            alt={currentItem.alt || "Bodhi Villa Gallery"}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Arrow Right */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next image"
          className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors cursor-pointer z-10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Caption */}
      <div
        className="w-full text-center px-6 py-4 bg-black/40 text-white/90 text-sm max-w-2xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {currentItem.caption && (
          <p className="font-heading text-lg tracking-wide text-white">
            {currentItem.caption}
          </p>
        )}
        <p className="text-xs text-white/60 uppercase tracking-widest mt-1">
          {currentItem.category} • Bodhi Villa
        </p>
      </div>
    </div>
  );
}

