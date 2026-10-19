import { buildWhatsAppLink, buildMailtoLink } from "./contact";
import { siteConfig } from "@/data/site";

/**
 * Handles client-side submission for Table Reservations.
 * Formats a clear, elegant message and produces direct WhatsApp and Email handoffs.
 * 
 * // TODO: replace with real API / database / notification service in future backend iteration
 */
export async function submitTableReservation(formData) {
  // Simulate network dispatch delay for realistic UI feedback
  await new Promise((resolve) => setTimeout(resolve, 600));

  const { name, phone, email, date, timeSlot, guests, specialRequests } = formData;

  const summary = [
    `*TABLE RESERVATION REQUEST - BODHI VILLA*`,
    `----------------------------------------`,
    `Guest Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Date: ${date}`,
    `Time: ${timeSlot}`,
    `Party Size: ${guests} guest${guests > 1 ? "s" : ""}`,
    specialRequests ? `Special Requests: ${specialRequests}` : null,
    `----------------------------------------`,
    `Requested via Bodhi Villa Website (${siteConfig.name})`,
  ]
    .filter(Boolean)
    .join("\n");

  const emailSubject = `Table Reservation Request: ${name} (${date} at ${timeSlot})`;
  const emailBody = summary;

  const whatsappUrl = buildWhatsAppLink(summary);
  const mailtoUrl = buildMailtoLink(emailSubject, emailBody);

  return {
    success: true,
    data: formData,
    summary,
    whatsappUrl,
    mailtoUrl,
  };
}

/**
 * Handles client-side submission for Wedding Reservations.
 * Formats a rich, respectful message and produces direct WhatsApp and Email handoffs.
 * 
 * // TODO: replace with real API / database / notification service in future backend iteration
 */
export async function submitWeddingReservation(formData) {
  // Simulate network dispatch delay for realistic UI feedback
  await new Promise((resolve) => setTimeout(resolve, 750));

  const {
    name,
    phone,
    email,
    weddingDate,
    alternateDate,
    guestCount,
    services,
    budgetRange,
    vision,
  } = formData;

  const selectedServices = Array.isArray(services) && services.length > 0
    ? services.join(", ")
    : "Full Event Consultation";

  const summary = [
    `*WEDDING & CELEBRATION RESERVATION - BODHI VILLA*`,
    `----------------------------------------`,
    `Couple / Contact: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Preferred Date: ${weddingDate}`,
    alternateDate ? `Alternate Date: ${alternateDate}` : null,
    `Estimated Guests: ${guestCount}`,
    `Services Needed: ${selectedServices}`,
    budgetRange ? `Estimated Budget: ${budgetRange}` : null,
    `\nCouple's Vision & Details:`,
    vision,
    `----------------------------------------`,
    `Requested via Bodhi Villa Website (${siteConfig.name})`,
  ]
    .filter(Boolean)
    .join("\n");

  const emailSubject = `Wedding Enquiry: ${name} - ${weddingDate} (${guestCount} Guests)`;
  const emailBody = summary;

  const whatsappUrl = buildWhatsAppLink(summary);
  const mailtoUrl = buildMailtoLink(emailSubject, emailBody);

  return {
    success: true,
    data: formData,
    summary,
    whatsappUrl,
    mailtoUrl,
  };
}

/**
 * Handles client-side submission for General Inquiries.
 * 
 * // TODO: replace with real API / database / notification service in future backend iteration
 */
export async function submitContactInquiry(formData) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const { name, phone, email, subject, message } = formData;

  const summary = [
    `*NEW INQUIRY - BODHI VILLA*`,
    `----------------------------------------`,
    `Name: ${name}`,
    phone ? `Phone: ${phone}` : null,
    `Email: ${email}`,
    subject ? `Subject: ${subject}` : null,
    `\nMessage:`,
    message,
    `----------------------------------------`,
  ]
    .filter(Boolean)
    .join("\n");

  const emailSubject = subject ? `Inquiry: ${subject} - ${name}` : `Inquiry from ${name}`;
  const whatsappUrl = buildWhatsAppLink(summary);
  const mailtoUrl = buildMailtoLink(emailSubject, summary);

  return {
    success: true,
    data: formData,
    summary,
    whatsappUrl,
    mailtoUrl,
  };
}

