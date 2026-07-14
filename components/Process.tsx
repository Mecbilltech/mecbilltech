"use client";

import { motion } from "framer-motion";
import { Compass, Palette, Code, CheckSquare, Rocket, ShieldCheck, Search } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "1. Discovery",
    description:
      "We learn about your business, goals, audience, and brand to create a solution tailored to your needs.",
  },
  {
    icon: Search,
    title: "2. Research",
    description:
      "We analyze your competitors, identify opportunities, and develop a strategy that turns visitors into customers.",
  },
  {
    icon: Palette,
    title: "3. UI/UX Design",
    description:
      "We create clean, intuitive designs that strengthen your brand and deliver a seamless user experience across every device.",
  },
  {
    icon: Code,
    title: "4. Development",
    description:
      "Your website is built with modern technologies for exceptional speed, security, scalability, and long-term maintainability.",
  },
  {
    icon: CheckSquare,
    title: "5. Testing",
    description:
      "Every feature is tested for responsiveness, accessibility, security, and performance to ensure a flawless experience.",
  },
  {
    icon: Rocket,
    title: "6. Deployment",
    description:
      "We launch your website with secure hosting, SSL protection, performance optimization, and search engine indexing.",
  },
  {
    icon: ShieldCheck,
    title: "7. Ongoing Support",
    description:
      "We stay with you after launch through updates, backups, monitoring, security maintenance, and continuous improvements.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Workflow</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          A Proven Process for Delivering Excellence.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-3xl mx-auto">
        {/* Central vertical track */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={step.title} className="relative flex flex-col md:flex-row md:items-center">
                {/* Connector Node */}
                <div className="absolute left-4 md:left-1/2 top-6 md:top-auto size-5 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10" />

                {/* Content Panel */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                  isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                }`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -15 : 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="glass-panel p-6 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-colors"
                  >
                    {/* Icon wrapper */}
                    <div className={`size-9 rounded-lg bg-muted border border-border flex items-center justify-center mb-4 ${
                      isEven ? "md:ml-auto" : ""
                    }`}>
                      <Icon className="size-4 text-foreground" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
