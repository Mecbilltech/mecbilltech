"use client";

import { motion } from "framer-motion";
import { Compass, Palette, Code, CheckSquare, Rocket, ShieldCheck, Search } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "1. Discovery",
    description: "Deep dive workshops to understand your brand identity, business model, user requirements, and technical constraints.",
  },
  {
    icon: Search,
    title: "2. Research",
    description: "Competitor audit, technology stack feasibility analysis, and planning of search patterns to construct high conversions paths.",
  },
  {
    icon: Palette,
    title: "3. UI/UX Design",
    description: "Crafting modern, award-winning interactive layouts, bespoke design systems, color harmonies, and fluid micro-animations.",
  },
  {
    icon: Code,
    title: "4. Development",
    description: "Writing semantic, type-safe, and scalable code using Next.js, React 19, TypeScript, and clean architecture structures.",
  },
  {
    icon: CheckSquare,
    title: "5. Testing",
    description: "Rigorous cross-device quality checks, security checks, accessibility compliance, and Lighthouse performance tuning.",
  },
  {
    icon: Rocket,
    title: "6. Deployment",
    description: "Zero-downtime deployment on Vercel or AWS, serverless setups, DNS handshakes, and indexing search engine bots.",
  },
  {
    icon: ShieldCheck,
    title: "7. Ongoing Support",
    description: "Long-term partnership with weekly backups, version upgrades, search engine performance reports, and expansion updates.",
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
        <div className="space-y-12">
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
