/**
 * Client-side validation helpers for reservations and contact forms.
 */

export function validateName(name) {
  if (!name || !name.trim()) {
    return "Please enter your full name.";
  }
  if (name.trim().length < 2) {
    return "Name must be at least 2 characters.";
  }
  return null;
}

export function validatePhone(phone) {
  if (!phone || !phone.trim()) {
    return "Please enter a contact phone number.";
  }
  const cleaned = phone.replace(/[\s\-\+\(\)]/g, "");
  if (cleaned.length < 7 || cleaned.length > 15 || !/^\d+$/.test(cleaned)) {
    return "Please enter a valid phone number.";
  }
  return null;
}

export function validateEmail(email, isRequired = false) {
  if (!email || !email.trim()) {
    if (isRequired) return "Please enter your email address.";
    return null;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return "Please enter a valid email address.";
  }
  return null;
}

export function validateDate(dateStr, label = "date") {
  if (!dateStr) {
    return `Please select a preferred ${label}.`;
  }
  const selectedDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (isNaN(selectedDate.getTime())) {
    return "Please enter a valid date.";
  }
  if (selectedDate < today) {
    return `The ${label} cannot be in the past.`;
  }
  return null;
}

export function validateTimeSlot(timeSlot) {
  if (!timeSlot || !timeSlot.trim()) {
    return "Please choose a dining time slot.";
  }
  return null;
}

export function validateGuestCount(count, min = 1, max = 2000) {
  const num = parseInt(count, 10);
  if (!count || isNaN(num)) {
    return "Please indicate the number of guests.";
  }
  if (num < min) {
    return `Guest count must be at least ${min}.`;
  }
  if (num > max) {
    return `Guest count exceeds maximum capacity of ${max}.`;
  }
  return null;
}

export function validateServices(services) {
  if (!services || services.length === 0) {
    return "Please select at least one service needed.";
  }
  return null;
}

export function validateVision(vision) {
  if (!vision || vision.trim().length < 10) {
    return "Please share a few words about your celebration or vision (at least 10 characters).";
  }
  return null;
}

export function validateMessage(message) {
  if (!message || message.trim().length < 10) {
    return "Please enter your message (at least 10 characters).";
  }
  return null;
}

