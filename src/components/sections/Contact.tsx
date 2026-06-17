"use client";

import React, { useState } from "react";
import { Mail, Globe, MapPin, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionMarker } from "../ui/SectionMarker";
import { Button } from "../ui/Button";

export const Contact = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "Sumeru Website Contact Form",
          subject: `New Sumeru Inquiry from ${formData.name}`,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Section id="contact" tone="ink" className="bg-px-dark border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
        {/* Left Column: Direct Inquiries Details */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-start text-left font-sans">
          {/* Eyebrow Label */}
          <SectionMarker number="05" label="Contact" tone="onDark" className="mb-6" />

          {/* Heading with contrast optimized orange accent */}
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="h-display text-paper text-[44px] md:text-[64px] leading-[1.05] mt-4"
          >
            Let&apos;s build something{" "}
            <span className="h-accent" style={{ color: "#FF9A5C" }}>
              enduring.
            </span>
          </motion.h2>

          <p className="text-paper/70 text-lg max-w-[440px] mt-6 font-light leading-relaxed">
            For enquiries, partnerships, or to request the Private Placement Memorandum for Sumeru India Growth Fund, write to the Shakti Sphere team.
          </p>

          {/* Icon Contacts Stack */}
          <div className="flex flex-col gap-5 mt-8 w-full">
            {/* Email link */}
            <a
              href="mailto:info@sumerufunds.com"
              className="flex items-center gap-3 group text-paper/90 hover:text-white transition-colors"
            >
              <Mail className="w-[18px] h-[18px] text-brand-soft shrink-0" />
              <span className="font-sans font-medium text-[15px] group-hover:underline leading-none">
                info@sumerufunds.com
              </span>
            </a>

            {/* Website link */}
            <a
              href="https://sumerufunds.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group text-paper/90 hover:text-white transition-colors"
            >
              <Globe className="w-[18px] h-[18px] text-brand-soft shrink-0" />
              <span className="font-sans font-medium text-[15px] group-hover:underline leading-none">
                sumerufunds.com
              </span>
            </a>

            {/* Physical Address */}
            <div className="flex items-start gap-3 text-paper/90">
              <MapPin className="w-[18px] h-[18px] text-brand-soft shrink-0 mt-0.5" />
              <span className="font-sans font-medium text-[15px] leading-relaxed">
                B-253, Kalpataru Horizon, Sudam Kalu Ahire Marg, Worli, Mumbai - 400018
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interaction Form Card */}
        <div className="col-span-1 lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="bg-paper text-ink2 rounded-3xl p-8 md:p-10 border border-line shadow-sm w-full max-w-[500px]">
            {submitted ? (
              /* Success Panel */
              <div className="bg-accentBg rounded-2xl p-6 border border-brand-primary/10 flex flex-col items-center justify-center text-center min-h-[350px]">
                <div className="bg-brand-primary/10 p-4 rounded-full mb-6">
                  <Check className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="h-display text-2xl text-ink mb-2">Message Sent</h3>
                <p className="text-ink2 text-base font-light max-w-xs leading-relaxed">
                  Thanks, we&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              /* Message Form */
              <form onSubmit={handleSubmit} className="flex flex-col w-full font-sans">
                <span className="font-sans font-semibold text-xs tracking-[0.14em] text-brand-deep uppercase mb-6 block leading-none">
                  Send a message
                </span>

                {/* Name and Email fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label htmlFor="form-name" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                      Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      required
                      aria-required="true"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full h-11 bg-card border border-line rounded-xl px-4 text-[15px] text-ink focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="form-email" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      required
                      aria-required="true"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-11 bg-card border border-line rounded-xl px-4 text-[15px] text-ink focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                    />
                  </div>
                </div>

                {/* Phone and City fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label htmlFor="form-phone" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                      Phone
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-11 bg-card border border-line rounded-xl px-4 text-[15px] text-ink focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="form-city" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                      City
                    </label>
                    <input
                      id="form-city"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full h-11 bg-card border border-line rounded-xl px-4 text-[15px] text-ink focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col mb-6">
                  <label htmlFor="form-message" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-card border border-line rounded-xl px-4 py-3 text-[15px] text-ink focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition resize-none font-sans"
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm mb-4 font-medium text-center">
                    {error}
                  </div>
                )}
 
                {/* Submit button */}
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="lg" 
                  withArrow 
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
