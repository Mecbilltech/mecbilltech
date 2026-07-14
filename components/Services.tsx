"use client";

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Cpu, GraduationCap, Briefcase, RefreshCw, LifeBuoy, Check, ChevronLeft, ChevronRight, ArrowRight, Network, PenTool, Search } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Custom Web Development",
    tagline: "Zero templates. Pure performance.",
    description:
      "Every website is custom-built from the ground up to reflect your brand and achieve your business goals. We develop clean, scalable applications with Next.js and React—free from page builder bloat—delivering exceptional speed, responsiveness, and a seamless user experience across all devices.",
    features: [
      "Next.js & React Development",
      "Hand-Coded Performance",
      "Mobile-First Responsive Design",
      "Optimized Core Web Vitals",
    ],
    color: "blue",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Web Applications & Custom Systems",
    tagline: "Software built around your workflow.",
    description:
      "We design and develop secure, scalable web applications tailored to the way your business operates. Whether you need a customer portal, booking platform, CRM, inventory system, or internal dashboard, every solution is engineered to improve efficiency and automate repetitive tasks.",
    features: [
      "Custom Database Architecture",
      "Secure User Authentication",
      "API & Payment Integrations",
      "Real-Time Workflows",
    ],
    color: "indigo",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Website Redesign & Migration",
    tagline: "Modern performance without starting over.",
    description:
      "Transform outdated or underperforming websites into fast, modern digital experiences. We carefully migrate your content, preserve your search visibility, and deploy your new website with minimal disruption to your business.",
    features: [
      "UX & Performance Audit",
      "Content & Database Migration",
      "Minimal-Downtime Deployment",
      "SEO Preservation",
    ],
    color: "purple",
  },
  {
    number: "04",
    icon: Search,
    title: "Search Engine Optimization",
    tagline: "Get found by the people searching for you.",
    description:
      "A beautiful website means little if customers can't find it. We build SEO into the foundation of every project with technical optimization, structured data, Core Web Vitals improvements, and search engine best practices that increase your visibility.",
    features: [
      "Technical SEO Optimization",
      "Schema Structured Data",
      "Core Web Vitals Optimization",
      "Google Search Console Setup",
    ],
    color: "emerald",
  },
  {
    number: "05",
    icon: PenTool,
    title: "Conversion Copywriting",
    tagline: "Messaging that turns visitors into customers.",
    description:
      "Great design attracts attention, but persuasive messaging drives action. We write clear, conversion-focused copy that communicates your value, builds trust, improves search visibility, and encourages visitors to take the next step.",
    features: [
      "Conversion-Focused Messaging",
      "SEO-Optimized Website Copy",
      "Strategic Call-to-Actions",
      "Clear Value Proposition",
    ],
    color: "amber",
  },
  {
    number: "06",
    icon: LifeBuoy,
    title: "Website Maintenance & Support",
    tagline: "Reliable performance long after launch.",
    description:
      "Your website deserves ongoing care. We provide proactive maintenance, security monitoring, software updates, cloud backups, and regular performance optimization to keep your website secure, reliable, and running at its best.",
    features: [
      "Daily Cloud Backups",
      "Security Monitoring & Patches",
      "Framework & Software Updates",
      "Performance Optimization",
    ],
    color: "rose",
  },
  {
  number: "07",
  icon: Network,
  title: "API Development & Integrations",
  tagline: "Powering modern applications with secure APIs.",
  description:
    "We design and develop secure, scalable RESTful and real-time APIs using Laravel and Node.js. Whether you're connecting mobile apps, third-party services, payment gateways, or building a backend for your SaaS product, we create reliable APIs that are fast, maintainable, and built to scale.",
  features: [
    "Laravel & Node.js APIs",
    "RESTful & Real-Time Architecture",
    "Third-Party API Integrations",
    "Authentication & Security (JWT/OAuth)",
  ],
  color: "amber",
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
