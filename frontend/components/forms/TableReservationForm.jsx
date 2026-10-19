"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import {
  validateName,
  validatePhone,
  validateEmail,
  validateDate,
  validateTimeSlot,
  validateGuestCount,
} from "@/lib/validators";
import { submitTableReservation } from "@/lib/submitReservation";

const TIME_SLOTS = [
  { value: "11:30 AM", label: "11:30 AM (Early Lunch)" },
  { value: "12:30 PM", label: "12:30 PM (Lunch)" },
  { value: "01:30 PM", label: "01:30 PM (Late Lunch)" },
  { value: "03:30 PM", label: "03:30 PM (Garden High Tea)" },
  { value: "05:00 PM", label: "05:00 PM (Sunset Refreshment)" },
  { value: "06:30 PM", label: "06:30 PM (Early Dinner)" },
  { value: "07:30 PM", label: "07:30 PM (Prime Dinner)" },
  { value: "08:30 PM", label: "08:30 PM (Late Dinner)" },
];

const GUEST_OPTIONS = [
  { value: "1", label: "1 Guest (Solo Table)" },
  { value: "2", label: "2 Guests (Intimate Table)" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests (Standard Family)" },
  { value: "5", label: "5 Guests" },
  { value: "6", label: "6 Guests" },
  { value: "8", label: "8 Guests (Family Group)" },
  { value: "10", label: "10+ Guests (Large Celebration)" },
  { value: "15", label: "15+ Guests (Garden Cabana Request)" },
];

/**
 * TableReservationForm: Client-validated table booking with WhatsApp & Email confirmation handoffs.
 */
export default function TableReservationForm() {
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: todayStr,
    timeSlot: "07:30 PM",
    guests: "2",
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    const nameErr = validateName(formData.name);
    if (nameErr) newErrors.name = nameErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const emailErr = validateEmail(formData.email, false);
    if (emailErr) newErrors.email = emailErr;

    const dateErr = validateDate(formData.date, "reservation date");
    if (dateErr) newErrors.date = dateErr;

    const timeErr = validateTimeSlot(formData.timeSlot);
    if (timeErr) newErrors.timeSlot = timeErr;

    const guestErr = validateGuestCount(formData.guests, 1, 50);
    if (guestErr) newErrors.guests = guestErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const result = await submitTableReservation(formData);
      setSubmissionResult(result);
    } catch (err) {
      console.error("Submission failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: todayStr,
      timeSlot: "07:30 PM",
      guests: "2",
      specialRequests: "",
    });
    setSubmissionResult(null);
    setErrors({});
  };

  if (submissionResult) {
    return (
      <div className="bg-surface border border-primary/20 rounded-sm p-6 sm:p-8 text-center space-y-6 animate-fade-in shadow-soft">
        {/* Animated Check SVG */}
        <div className="w-16 h-16 mx-auto rounded-full bg-primary-soft flex items-center justify-center text-primary">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            Reservation Prepared
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl text-text">
            Table Request Ready for Confirmation
          </h3>
          <p className="text-sm text-text-muted max-w-md mx-auto">
            Your table reservation details for{" "}
            <strong className="text-text">{formData.guests} guests</strong> on{" "}
            <strong className="text-text">{formData.date}</strong> at{" "}
            <strong className="text-text">{formData.timeSlot}</strong> have been prepared.
          </p>
          <p className="text-xs text-text-muted italic">
            // TODO: We’ll confirm your table within 24 hours of receiving your message.
          </p>
        </div>

        {/* Handoff Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={submissionResult.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[46px] px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.16em] font-medium rounded-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <span>Send via WhatsApp</span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            href={submissionResult.mailtoUrl}
            className="w-full sm:w-auto min-h-[46px] px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase tracking-[0.16em] font-medium rounded-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <span>Send via Email</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="pt-4 border-t border-border">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs uppercase tracking-[0.14em] text-text-muted hover:text-primary transition-colors link-underline"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-surface border border-border p-6 sm:p-8 rounded-sm shadow-soft">
      <div className="border-b border-border pb-4 mb-2">
        <h3 className="font-heading text-2xl text-text">
          Reserve Your Table
        </h3>
        <p className="text-xs text-text-muted mt-1">
          Enjoy peaceful dining in our serene gardens or indoor pavilion. Served daily.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Siddhartha Shakya"
          required
          error={errors.name}
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          inputMode="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+977 98XXXXXXXX"
          required
          error={errors.phone}
          helperText="We confirm reservations via WhatsApp/Call"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Email (Optional)"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="name@domain.com"
          error={errors.email}
        />
        <Input
          label="Dining Date"
          name="date"
          type="date"
          min={todayStr}
          value={formData.date}
          onChange={handleChange}
          required
          error={errors.date}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Preferred Time Slot"
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleChange}
          options={TIME_SLOTS}
          required
          error={errors.timeSlot}
        />
        <Select
          label="Number of Guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          options={GUEST_OPTIONS}
          required
          error={errors.guests}
        />
      </div>

      <Textarea
        label="Special Requests or Dietary Preferences (Optional)"
        name="specialRequests"
        value={formData.specialRequests}
        onChange={handleChange}
        rows={3}
        placeholder="e.g. Garden cabana seating preferred, anniversary dessert, vegetarian preferences..."
      />

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          fullWidth
          size="lg"
        >
          {isSubmitting ? "Preparing Reservation..." : "Submit Table Reservation"}
        </Button>
      </div>

      <p className="text-[0.72rem] text-center text-text-muted pt-1">
        No immediate payment required. We will verify availability and confirm promptly.
      </p>
    </form>
  );
}

