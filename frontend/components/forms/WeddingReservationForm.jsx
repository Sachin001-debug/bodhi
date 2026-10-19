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
  validateGuestCount,
  validateServices,
  validateVision,
} from "@/lib/validators";
import { submitWeddingReservation } from "@/lib/submitReservation";

const AVAILABLE_SERVICES = [
  "Venue (Lawn & Pavilion)",
  "Decor & Styling",
  "Catering & Banquets",
  "Stage & Lighting Architecture",
  "Mandap & Ritual Setup",
  "Bridal Suite & Hospitality",
];

const GUEST_RANGES = [
  { value: "100-250", label: "100 – 250 Guests (Intimate / Mehendi)" },
  { value: "250-500", label: "250 – 500 Guests (Medium Celebration)" },
  { value: "500-800", label: "500 – 800 Guests (Grand Wedding)" },
  { value: "800-1200", label: "800 – 1,200 Guests (Royal Gala)" },
  { value: "1200+", label: "1,200+ Guests (Full Estate Buyout)" },
];

const BUDGET_RANGES = [
  { value: "Below NPR 10 Lakhs", label: "Under NPR 10 Lakhs (Intimate Gathering)" },
  { value: "NPR 10 - 20 Lakhs", label: "NPR 10 Lakhs – 20 Lakhs (Standard Wedding)" },
  { value: "NPR 20 - 35 Lakhs", label: "NPR 20 Lakhs – 35 Lakhs (Signature Royal)" },
  { value: "NPR 35 Lakhs+", label: "NPR 35 Lakhs+ (Luxury Multi-Day Grand)" },
  { value: "To be decided", label: "To be discussed during consultation" },
];

/**
 * WeddingReservationForm: Comprehensive client-validated wedding enquiry form.
 * Generates structured handoff payload for WhatsApp and Email.
 */
export default function WeddingReservationForm() {
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    weddingDate: "",
    alternateDate: "",
    guestCount: "250-500",
    services: ["Venue (Lawn & Pavilion)", "Decor & Styling"],
    budgetRange: "NPR 10 - 20 Lakhs",
    vision: "",
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

  const toggleService = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const updated = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updated };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    const nameErr = validateName(formData.name);
    if (nameErr) newErrors.name = nameErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const emailErr = validateEmail(formData.email, true);
    if (emailErr) newErrors.email = emailErr;

    const dateErr = validateDate(formData.weddingDate, "wedding date");
    if (dateErr) newErrors.weddingDate = dateErr;

    const guestErr = validateGuestCount(formData.guestCount ? 100 : 0, 1, 3000);
    if (guestErr) newErrors.guestCount = guestErr;

    const serviceErr = validateServices(formData.services);
    if (serviceErr) newErrors.services = serviceErr;

    const visionErr = validateVision(formData.vision);
    if (visionErr) newErrors.vision = visionErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const result = await submitWeddingReservation(formData);
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
      weddingDate: "",
      alternateDate: "",
      guestCount: "250-500",
      services: ["Venue (Lawn & Pavilion)", "Decor & Styling"],
      budgetRange: "NPR 10 - 20 Lakhs",
      vision: "",
    });
    setSubmissionResult(null);
    setErrors({});
  };

  if (submissionResult) {
    return (
      <div className="bg-surface border border-primary/20 rounded-sm p-6 sm:p-8 text-center space-y-6 animate-fade-in shadow-soft">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary-soft flex items-center justify-center text-primary">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            Wedding Enquiry Formatted
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl text-text">
            Your Vision Has Been Prepared
          </h3>
          <p className="text-sm text-text-muted max-w-md mx-auto">
            Thank you, <strong className="text-text">{formData.name}</strong>. Your wedding enquiry for{" "}
            <strong className="text-text">{formData.weddingDate}</strong> ({formData.guestCount} guests) is ready to send to our event directors.
          </p>
          <p className="text-xs text-text-muted italic">
            // TODO: We’ll review your date and confirm consultation availability within 24 hours.
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
            <span>Send Details via WhatsApp</span>
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
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 bg-surface border border-border p-6 sm:p-8 rounded-sm shadow-soft">
      <div className="border-b border-border pb-4 mb-2">
        <h3 className="font-heading text-2xl text-text">
          Book Your Wedding Date
        </h3>
        <p className="text-xs text-text-muted mt-1">
          Tell us about your celebration. We craft bespoke styling, mandaps, lawns, and culinary feasts.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name (Bride / Groom / Contact)"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Aayush & Shreya"
          required
          error={errors.name}
        />
        <Input
          label="WhatsApp / Phone Number"
          name="phone"
          type="tel"
          inputMode="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+977 98XXXXXXXX"
          required
          error={errors.phone}
          helperText="For swift planning discussions"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="couple@domain.com"
          required
          error={errors.email}
          helperText="We send written proposals & moodboards here"
        />
        <Select
          label="Estimated Guest Count"
          name="guestCount"
          value={formData.guestCount}
          onChange={handleChange}
          options={GUEST_RANGES}
          required
          error={errors.guestCount}
        />
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Preferred Wedding Date"
          name="weddingDate"
          type="date"
          min={todayStr}
          value={formData.weddingDate}
          onChange={handleChange}
          required
          error={errors.weddingDate}
        />
        <Input
          label="Alternate Date (Optional)"
          name="alternateDate"
          type="date"
          min={todayStr}
          value={formData.alternateDate}
          onChange={handleChange}
          helperText="Helpful if your primary auspicious date is booked"
        />
      </div>

      {/* Services Multi-Select Chips */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.14em] font-medium text-text block">
          Services Needed <span className="text-accent">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_SERVICES.map((service) => {
            const isSelected = formData.services.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`min-h-[38px] px-3.5 py-1.5 text-xs tracking-wider rounded-sm border transition-all cursor-pointer select-none text-left ${
                  isSelected
                    ? "bg-primary text-white border-primary font-medium shadow-xs"
                    : "bg-surface text-text-muted border-border hover:border-text-muted hover:text-text"
                }`}
              >
                {isSelected ? "✓ " : "+ "}
                {service}
              </button>
            );
          })}
        </div>
        {errors.services && (
          <p className="text-xs text-rose-600 font-medium mt-1">{errors.services}</p>
        )}
      </div>

      {/* Budget Range */}
      <Select
        label="Estimated Budget Range (Optional)"
        name="budgetRange"
        value={formData.budgetRange}
        onChange={handleChange}
        options={BUDGET_RANGES}
        helperText="Helps us tailor stage setups and floral tiers realistically"
      />

      {/* Vision Textarea */}
      <Textarea
        label="Tell Us About Your Vision & Special Traditions"
        name="vision"
        value={formData.vision}
        onChange={handleChange}
        rows={4}
        required
        placeholder="Share your dream themes, favorite color palettes, Mehendi/Haldi details, or any special ceremonies you envision..."
        error={errors.vision}
        helperText="Minimum 10 characters"
      />

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          fullWidth
          size="lg"
        >
          {isSubmitting ? "Formatting Wedding Proposal..." : "Submit Wedding Reservation Enquiry"}
        </Button>
      </div>

      <p className="text-[0.72rem] text-center text-text-muted pt-1">
        Peak wedding dates fill quickly. Submitting this form holds no financial obligation.
      </p>
    </form>
  );
}

