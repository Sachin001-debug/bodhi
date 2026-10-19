"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import {
  validateName,
  validatePhone,
  validateEmail,
  validateMessage,
} from "@/lib/validators";
import { submitContactInquiry } from "@/lib/submitReservation";

/**
 * ContactForm: General inquiries form for events, feedback, or visits.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
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

    const emailErr = validateEmail(formData.email, true);
    if (emailErr) newErrors.email = emailErr;

    const msgErr = validateMessage(formData.message);
    if (msgErr) newErrors.message = msgErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const result = await submitContactInquiry(formData);
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
      subject: "",
      message: "",
    });
    setSubmissionResult(null);
    setErrors({});
  };

  if (submissionResult) {
    return (
      <div className="bg-surface border border-primary/20 rounded-sm p-6 sm:p-8 text-center space-y-5 animate-fade-in shadow-soft">
        <div className="w-14 h-14 mx-auto rounded-full bg-primary-soft flex items-center justify-center text-primary">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="space-y-1.5">
          <h3 className="font-heading text-2xl text-text">
            Message Formatted Successfully
          </h3>
          <p className="text-sm text-text-muted max-w-sm mx-auto">
            Choose how you would like to deliver your inquiry to the Bodhi Villa management team:
          </p>
        </div>

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
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 bg-surface border border-border p-6 sm:p-8 rounded-sm shadow-soft">
      <div className="border-b border-border pb-3 mb-2">
        <h3 className="font-heading text-xl sm:text-2xl text-text">
          Send Us a Note
        </h3>
        <p className="text-xs text-text-muted mt-0.5">
          We respond promptly to all messages during working hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Maya Gautam"
          required
          error={errors.name}
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+977 98XXXXXXXX"
          required
          error={errors.phone}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="maya@domain.com"
          required
          error={errors.email}
        />
        <Input
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Private dinner, festival query"
        />
      </div>

      <Textarea
        label="Message"
        name="message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        placeholder="How can we assist your visit or celebration today?"
        required
        error={errors.message}
      />

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          fullWidth
          size="lg"
        >
          {isSubmitting ? "Preparing Message..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

