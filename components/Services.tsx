"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Utensils, GraduationCap, Briefcase, RefreshCw, LifeBuoy, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Premium websites designed to build trust, establish brand authority, and maximize visitor conversions.",
    features: ["SEO Optimization", "Conversion Rate Audits", "Blazing Fast Page Speeds", "Lead Capture Integration"],
  },
  {
    icon: Cpu,
    title: "Custom Web Applications",
    description: "Robust, tailored web systems designed to automate workflows and handle complex operations.",
    features: ["Scalable Architecture", "API Integration", "Secure Authentication", "Real-time Dashboards"],
  },
  {
    icon: Utensils,
    title: "Restaurant Websites",
    description: "Fully-featured systems with custom menus, reservation management, and WhatsApp ordering integrations.",
    features: ["Digital Menu Display", "Table Reservations", "WhatsApp Order Dispatch", "Delivery Management"],
  },
  {
    icon: GraduationCap,
    title: "School Management Systems",
    description: "Comprehensive education management suites connecting students, teachers, parents, and administrative staff.",
    features: ["Student Portals", "Attendance Tracking", "Report Card Managers", "Tuition Payment Portals"],
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description: "Exquisite visual portfolios designed to position individuals, agencies, and companies at the top of their fields.",
    features: ["Premium Typography", "Case Study Layouts", "Interactive Showcases", "Command Palette Hooks"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Modernize slow, outdated legacy websites into stunning, state-of-the-art digital experiences.",
    features: ["UX Refactoring", "Mobile-First Adaptation", "Tech Stack Modernization", "Retained SEO Value"],
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    description: "Continuous monitoring, updates, patches, and feature upgrades to ensure your website runs 24/7.",
    features: ["Daily Backups", "Security Patches", "Content Updates", "Lighthouse Score Maintenance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Our Expertise</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          Digital Solutions Engineered for Enterprise Scale.
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
