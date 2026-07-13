"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Utensils, GraduationCap, Briefcase, RefreshCw, LifeBuoy, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Web Development",
    description: "No templates. No cookie-cutter layouts. Every site is custom architected from the ground up to match your brand, load instantly, and turn visitors into clients.",
    features: ["Next.js & React Framework", "0% Page Builder Bloat", "99+ Lighthouse Scores", "Responsive Mobile-First UX"],
  },
  {
    icon: Cpu,
    title: "Web Apps & Custom Systems",
    description: "Automate manual operations, connect third-party APIs, and build responsive portals for your business (like student portals or WhatsApp reservation tools).",
    features: ["Custom Database Architecture", "Secure User Authentication", "API & Payment Integrations", "Real-time Workflows"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign & Migration",
    description: "If your current site is slow or outdated, we rebuild it using modern standards with zero downtime and complete protection of your existing search rankings.",
    features: ["UX Flow Auditing", "Database & Asset Migration", "Zero-Downtime Deployment", "Preserved Search Authority"],
  },
  {
    icon: Briefcase,
    title: "Search Engine Optimization",
    description: "Your site could be beautiful and completely invisible to Google. We fix that by integrating technical SEO, schema markups, and keywords from the start.",
    features: ["Technical SEO Schema", "On-Page Keyword Strategy", "Speed Optimization Indexing", "Google Search Console Setup"],
  },
  {
    icon: GraduationCap,
    title: "High-Converting Copywriting",
    description: "Copy is the actual engine of your website. We craft compelling, SEO-friendly messaging that speaks directly to your users' pain points and drives action.",
    features: ["Audience Psychology Angles", "SEO-Optimized Layout Copy", "Clear Call-to-Action Flows", "Value Proposition Alignment"],
  },
  {
    icon: LifeBuoy,
    title: "Website Management & Support",
    description: "Ongoing technical maintenance, package updates, daily cloud backups, and proactive security monitoring to ensure your site is blazing fast 24/7.",
    features: ["Daily Cloud Backups", "Security Firewalls & Patches", "Package Dependency Updates", "Ongoing Performance Audits"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Services</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          Engineered for Performance, Built to Convert.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4 }}
              className="glass-panel group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20"
            >
              {/* Service Icon */}
              <div className="size-10 rounded-xl bg-muted flex items-center justify-center mb-6 border border-border">
                <Icon className="size-5 text-foreground" />
              </div>

              {/* Header */}
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>

              {/* Features bullets */}
              <ul className="space-y-2 border-t border-border pt-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="size-3.5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
