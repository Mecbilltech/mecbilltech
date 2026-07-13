"use client";

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Cpu, GraduationCap, Briefcase, RefreshCw, LifeBuoy, Check, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Custom Web Development",
    description: "No templates. No cookie-cutter layouts. Every site is custom architected from the ground up to match your brand, load instantly, and turn visitors into clients.",
    features: ["Next.js & React Framework", "0% Page Builder Bloat", "99+ Lighthouse Scores", "Responsive Mobile-First UX"],
    color: "blue",
  },
  {
    icon: Cpu,
    title: "Web Apps & Custom Systems",
    description: "Automate manual operations, connect third-party APIs, and build responsive portals for your business (like student portals or WhatsApp reservation tools).",
    features: ["Custom Database Architecture", "Secure User Authentication", "API & Payment Integrations", "Real-time Workflows"],
    color: "indigo",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign & Migration",
    description: "If your current site is slow or outdated, we rebuild it using modern standards with zero downtime and complete protection of your existing search rankings.",
    features: ["UX Flow Auditing", "Database & Asset Migration", "Zero-Downtime Deployment", "Preserved Search Authority"],
    color: "purple",
  },
  {
    icon: Briefcase,
    title: "Search Engine Optimization",
    description: "Your site could be beautiful and completely invisible to Google. We fix that by integrating technical SEO, schema markups, and keywords from the start.",
    features: ["Technical SEO Schema", "On-Page Keyword Strategy", "Speed Optimization Indexing", "Google Search Console Setup"],
    color: "emerald",
  },
  {
    icon: GraduationCap,
    title: "High-Converting Copywriting",
    description: "Copy is the actual engine of your website. We craft compelling, SEO-friendly messaging that speaks directly to your users' pain points and drives action.",
    features: ["Audience Psychology Angles", "SEO-Optimized Layout Copy", "Clear Call-to-Action Flows", "Value Proposition Alignment"],
    color: "amber",
  },
  {
    icon: LifeBuoy,
    title: "Website Management & Support",
    description: "Ongoing technical maintenance, package updates, daily cloud backups, and proactive security monitoring to ensure your site is blazing fast 24/7.",
    features: ["Daily Cloud Backups", "Security Firewalls & Patches", "Package Dependency Updates", "Ongoing Performance Audits"],
    color: "rose",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-500",
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-500",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
  amber: "bg-amber-500/10 border-amber-500/20 text-amber-500",
  rose: "bg-rose-500/10 border-rose-500/20 text-rose-500",
};

const CARD_WIDTH = 320;
const CARD_GAP = 24;

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const max = services.length - 1;

  const scrollTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, max));
    setCurrent(clamped);
    trackRef.current?.scrollTo({ left: clamped * (CARD_WIDTH + CARD_GAP), behavior: "smooth" });
  }, [max]);

  return (
    <section id="services" className="py-12 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Services</h2>
          <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl max-w-lg">
            Engineered for Performance, Built to Convert.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => scrollTo(current - 1)}
            disabled={current === 0}
            aria-label="Previous service"
            className="size-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="text-xs font-mono text-muted-foreground tabular-nums w-10 text-center">
            {current + 1} / {services.length}
          </span>
          <button
            onClick={() => scrollTo(current + 1)}
            disabled={current === max}
            aria-label="Next service"
            className="size-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          const iconClass = colorMap[service.color];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: Math.min(index * 0.05, 0.25), duration: 0.4 }}
              className="glass-panel group relative flex-none rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 snap-start flex flex-col"
              style={{ width: CARD_WIDTH, minHeight: 320 }}
            >
              {/* Icon */}
              <div className={`size-10 rounded-xl flex items-center justify-center mb-5 border ${iconClass}`}>
                <Icon className="size-5" />
              </div>

              {/* Index Badge */}
              <span className="absolute top-5 right-5 text-[10px] font-mono text-muted-foreground/40 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-base font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{service.description}</p>

              {/* Features */}
              <ul className="space-y-1.5 border-t border-border/60 pt-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <Check className="size-3 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Dot Indicators + CTA */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-1.5">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all rounded-full cursor-pointer ${current === i ? "bg-primary w-5 h-1.5" : "bg-border w-1.5 h-1.5 hover:bg-muted-foreground"}`}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          View All Services
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
