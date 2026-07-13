"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, MapPin, Sparkles, Send, CheckCircle2 } from "lucide-react";
import { Linkedin } from "@/components/Icons";
import { Button } from "@/components/ui/button";

// Validations Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  budget: z.string().min(1, "Please select a budget range"),
  details: z.string().min(10, "Please provide some project details (min 10 chars)"),
});

const previewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  websiteUrl: z.string().optional(),
  industry: z.string().min(2, "Please specify your industry"),
  competitor: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type PreviewFormValues = z.infer<typeof previewSchema>;

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"inquiry" | "preview">("inquiry");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", email: "", budget: "", details: "" },
  });

  const previewForm = useForm<PreviewFormValues>({
    resolver: zodResolver(previewSchema),
    defaultValues: { name: "", email: "", websiteUrl: "", industry: "", competitor: "" },
  });

  const onInquirySubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSubmitted(true);
        contactForm.reset();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  const onPreviewSubmit = async (data: PreviewFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/preview-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSubmitted(true);
        previewForm.reset();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Get in Touch</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          Let's Build Something Amazing Together.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch">
        {/* Contact Info Panels Left */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="glass-panel rounded-2xl border border-border bg-card p-6 md:p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Direct Channels</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Ready to transform your ideas? Use the contact details below to reach out directly, or complete our consultation/preview proposal sheets.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:mecbilltech@gmail.com" className="flex items-center gap-4 group text-muted-foreground hover:text-foreground transition-colors">
                <div className="size-9 rounded-xl bg-muted border border-border flex items-center justify-center">
                  <Mail className="size-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider">Email Address</span>
                  <span className="text-sm font-semibold">mecbilltech@gmail.com</span>
                </div>
              </a>

              <a href="https://wa.me/2348105219630" target="_blank" rel="noopener" className="flex items-center gap-4 group text-muted-foreground hover:text-foreground transition-colors">
                <div className="size-9 rounded-xl bg-muted border border-border flex items-center justify-center">
                  <MessageCircle className="size-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider">WhatsApp</span>
                  <span className="text-sm font-semibold">+234 810 521 9630</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/mecbilltech" target="_blank" rel="noopener" className="flex items-center gap-4 group text-muted-foreground hover:text-foreground transition-colors">
                <div className="size-9 rounded-xl bg-muted border border-border flex items-center justify-center">
                  <Linkedin className="size-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider">LinkedIn</span>
                  <span className="text-sm font-semibold">linkedin.com/in/mecbilltech</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="size-9 rounded-xl bg-muted border border-border flex items-center justify-center">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider">Location</span>
                  <span className="text-sm font-semibold">Ondo, Nigeria & Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Panel Right */}
        <div id="preview-form" className="lg:col-span-7">
          <div className="glass-panel rounded-2xl border border-border bg-card p-6 md:p-8 min-h-[500px] flex flex-col justify-between relative overflow-hidden">
            {/* Success Animation */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-background/95 z-50 flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle2 className="size-14 text-primary mb-5" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-foreground mb-3">Proposal Received!</h3>
                  <p className="text-sm text-muted-foreground max-w-sm mb-6">
                    Thank you for reaching out. We have logged your system request and will contact you via email within the next 12 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="rounded-full px-6"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              {/* Form Tab Switches */}
              <div className="flex border-b border-border pb-4 mb-6">
                <button
                  onClick={() => setActiveTab("inquiry")}
                  className={`flex-1 pb-2 text-center text-xs font-extrabold uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === "inquiry"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Consultation Inquiry
                </button>
                <button
                  onClick={() => setActiveTab("preview")}
                  className={`flex-1 pb-2 text-center text-xs font-extrabold uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === "preview"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Request Homepage Preview
                </button>
              </div>

              {/* Consultation Form */}
              {activeTab === "inquiry" && (
                <form onSubmit={contactForm.handleSubmit(onInquirySubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider mb-1 text-muted-foreground">Full Name</label>
                      <input
                        type="text"
                        {...contactForm.register("name")}
                        className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                        placeholder="John Doe"
                      />
                      {contactForm.formState.errors.name && (
                        <p className="text-xs text-red-500 mt-1">{contactForm.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider mb-1 text-muted-foreground">Company Name</label>
                      <input
                        type="text"
                        {...contactForm.register("company")}
                        className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider mb-1 text-muted-foreground">Email Address</label>
                    <input
                      type="email"
                      {...contactForm.register("email")}
                      className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                      placeholder="john@company.com"
                    />
                    {contactForm.formState.errors.email && (
                      <p className="text-xs text-red-500 mt-1">{contactForm.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider mb-1 text-muted-foreground">Estimated Budget</label>
                    <select
                      {...contactForm.register("budget")}
                      className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                    >
                      <option value="">Select a range...</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-3k">$1,000 - $3,000</option>
                      <option value="3k-10k">$3,000 - $10,000</option>
                      <option value="above-10k">$10,000+</option>
                    </select>
                    {contactForm.formState.errors.budget && (
                      <p className="text-xs text-red-500 mt-1">{contactForm.formState.errors.budget.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider mb-1 text-muted-foreground">Project Details</label>
                    <textarea
                      rows={4}
                      {...contactForm.register("details")}
                      className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary resize-none"
                      placeholder="Please outline your objectives, core features, timeline expectations, etc."
                    />
                    {contactForm.formState.errors.details && (
                      <p className="text-xs text-red-500 mt-1">{contactForm.formState.errors.details.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full text-white font-bold"
                  >
                    <Send className="size-4 mr-2" />
                    {submitting ? "Sending Request..." : "Book Consultation"}
                  </Button>
                </form>
              )}

              {/* Homepage Preview Form */}
              {activeTab === "preview" && (
                <form onSubmit={previewForm.handleSubmit(onPreviewSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider mb-1 text-muted-foreground">Your Name</label>
                      <input
                        type="text"
                        {...previewForm.register("name")}
                        className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                        placeholder="John Doe"
                      />
                      {previewForm.formState.errors.name && (
                        <p className="text-xs text-red-500 mt-1">{previewForm.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider mb-1 text-muted-foreground">Business Industry</label>
                      <input
                        type="text"
                        {...previewForm.register("industry")}
                        className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                        placeholder="e.g. Fintech, Restaurant"
                      />
                      {previewForm.formState.errors.industry && (
                        <p className="text-xs text-red-500 mt-1">{previewForm.formState.errors.industry.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider mb-1 text-muted-foreground">Email Address</label>
                    <input
                      type="email"
                      {...previewForm.register("email")}
                      className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                      placeholder="john@company.com"
                    />
                    {previewForm.formState.errors.email && (
                      <p className="text-xs text-red-500 mt-1">{previewForm.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider mb-1 text-muted-foreground">Current Website URL</label>
                    <input
                      type="text"
                      {...previewForm.register("websiteUrl")}
                      className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                      placeholder="e.g. currentsite.com (Optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider mb-1 text-muted-foreground">Top Competitor URL</label>
                    <input
                      type="text"
                      {...previewForm.register("competitor")}
                      className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                      placeholder="e.g. competitor.com (Optional)"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full text-white font-bold"
                  >
                    <Sparkles className="size-4 mr-2" />
                    {submitting ? "Sending Request..." : "Request Free Design Draft"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
