import { siteConfig } from "@/data/site";

/**
 * Builds a direct WhatsApp chat link using the centralized whatsappNumber.
 * All WhatsApp links throughout the application MUST use this helper.
 * @param {string} [message=""] - Pre-filled message for the chat
 * @returns {string} Fully formatted wa.me URL
 */
export function buildWhatsAppLink(message = "") {
  const cleanNumber = (siteConfig.whatsappNumber || "").replace(/[^0-9]/g, "");
  if (!cleanNumber) return "#";
  if (!message) {
    return `https://wa.me/${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Builds a mailto link using the centralized site email.
 * @param {string} [subject=""] - Pre-filled email subject
 * @param {string} [body=""] - Pre-filled email body
 * @returns {string} Formatted mailto: URI
 */
export function buildMailtoLink(subject = "", body = "") {
  const email = siteConfig.email;
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  const query = params.length > 0 ? `?${params.join("&")}` : "";
  return `mailto:${email}${query}`;
}

