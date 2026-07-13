"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Eye, LineChart, ShieldAlert, Award, Star } from "lucide-react";
import Image from "next/image";

const tabs = [
 {
  id: "backstory",
  label: "Business First",
  icon: Cpu,
  title: "Building Websites That Solve Business Problems",
  content:
    "A successful website is more than clean code or beautiful visuals. Every project begins by understanding your business, your audience, and what motivates people to take action. That strategy shapes every design and development decision, creating websites that build trust and generate real results.",
},
  {
  id: "conversion",
  label: "Built to Convert",
  icon: LineChart,
  title: "Designed to Turn Visitors into Customers",
  content:
    "Every section, headline, and call-to-action is intentionally crafted to guide visitors toward making contact, booking a service, or becoming a customer. The goal isn't just a beautiful website, it's a website that helps your business grow.",
},
  {
  id: "clean-code",
  label: "Quality Code",
  icon: ShieldAlert,
  title: "Fast, Clean & Built to Last",
  content:
    "Every project is developed with clean, maintainable code using modern technologies like React, Next.js, and TypeScript. The result is a fast, scalable website that's easy to maintain, performs exceptionally well, and provides a solid foundation for future growth.",
},
  {
  id: "seo",
  label: "SEO Ready",
  icon: Eye,
  title: "Built to Be Found Online",
  content:
    "Search visibility starts with a strong technical foundation. Every website is built with semantic HTML, fast loading speeds, responsive performance, and SEO best practices to help search engines understand your content and improve your online presence.",
},
];

export default function About() {
  const [activeTab, setActiveTab] = useState("backstory");

  return (
    <section id="about" className="py-12 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Who is MecbillTech</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          Websites that Communicate, Code that Scales.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        {/* Story Tab Panel Left */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-border/40 pb-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="size-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              {tabs.map(
                (tab) =>
                  tab.id === activeTab && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <h3 className="text-2xl font-extrabold text-foreground tracking-tight">{tab.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{tab.content}</p>
                      
                      <div className="flex gap-4 pt-4">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                          <Award className="size-4" />
                          <span>Conversion Audits</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                          <Star className="size-4" />
                          <span>Hand-Crafted Performance</span>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Profile Card / High Tech Placeholder Right */}
       <div className="lg:col-span-5 flex justify-center">
  <div className="glass-panel relative w-full max-w-[340px] rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
    
    {/* Profile Avatar Frame */}
    <div className="relative w-full rounded-xl overflow-hidden bg-muted/20 py-8 px-4 flex items-center justify-center border border-border/60">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative flex flex-col items-center gap-4 text-center z-10">
        <div className="relative size-24 rounded-full border-2 border-background bg-muted flex items-center justify-center shadow-md ring-1 ring-border/50">
          <Image
            src="/logo.png"
            alt="MecbillTech founder"
            width={88}
            height={88}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-foreground text-base tracking-tight">Alade Odunayo</h4>
          <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase mt-1">Founder & Web Architect</p>
          <p className="text-[9px] text-muted-foreground/60 font-mono tracking-wider mt-0.5">Ondo, Nigeria</p>
        </div>
      </div>
    </div>

    {/* Core Metrics */}
    <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border/60 pt-4 text-center">
      <div className="flex flex-col justify-between">
        <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest font-mono">Philosophy</span>
        <p className="text-xs font-bold text-foreground mt-1.5 balance">Marketer Mindset</p>
      </div>
      <div className="flex flex-col justify-between">
        <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest font-mono">Code Base</span>
        <p className="text-xs font-bold text-primary mt-1.5 uppercase tracking-wider">100% Bespoke</p>
      </div>
    </div>
    
  </div>
</div>
      </div>
    </section>
  );
}
