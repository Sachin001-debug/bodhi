"use client";

import { useEffect, useState } from "react";
import { buildWhatsAppLink } from "@/lib/contact";

const WELCOME_MESSAGE = "Welocome to Bodhi villa! You can contact via whatsapp too.";

export default function WhatsAppFloat() {
  const [typedMessage, setTypedMessage] = useState("");
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    let characterIndex = 0;
    const typingInterval = window.setInterval(() => {
      characterIndex += 1;
      setTypedMessage(WELCOME_MESSAGE.slice(0, characterIndex));

      if (characterIndex >= WELCOME_MESSAGE.length) {
        window.clearInterval(typingInterval);
      }
    }, 35);
    const hideTimeout = window.setTimeout(() => setShowMessage(false), 5000);

    return () => {
      window.clearInterval(typingInterval);
      window.clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-4 z-40 flex max-w-[calc(100vw-2rem)] items-end gap-2.5 md:bottom-6 md:right-6 md:gap-3">
      {showMessage && (
        <div className="whatsapp-welcome whitespace-nowrap rounded-lg border border-border bg-surface px-3 py-2.5 text-xs leading-snug text-text shadow-[var(--shadow-soft)]">
          {typedMessage}
        </div>
      )}
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Bodhi Villa on WhatsApp"
        className="whatsapp-glow grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:h-14 md:w-14"
      >
        <svg
          viewBox="0 0 32 32"
          className="whatsapp-icon h-6 w-6 md:h-7 md:w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.01 3.2A12.73 12.73 0 0 0 5.09 22.46L3.3 28.8l6.49-1.7A12.73 12.73 0 1 0 16.01 3.2Zm0 23.13c-1.98 0-3.92-.53-5.62-1.54l-.4-.24-3.85 1.01 1.03-3.75-.26-.41a10.37 10.37 0 1 1 9.1 4.93Zm5.69-7.77c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.39-.02-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.07 1.05-1.07 2.57 0 1.52 1.1 2.99 1.25 3.2.15.21 2.16 3.3 5.22 4.63.73.31 1.3.5 1.75.64.74.23 1.41.2 1.94.12.59-.09 1.82-.75 2.08-1.48.25-.73.25-1.36.18-1.49-.08-.13-.28-.2-.59-.36Z" />
        </svg>
      </a>
    </div>
  );
}
