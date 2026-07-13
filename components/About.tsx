"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Eye, LineChart, ShieldAlert, Award, Star } from "lucide-react";
import Image from "next/image";

const tabs = [
  {
    id: "backstory",
    label: "The Backstory",
    icon: Cpu,
    title: "Lived on Both Sides of the Screen",
    content:
      "Before writing our first line of code, we spent years writing articles, producing copy, and building audiences online. This taught us audience psychology: how users read, what builds trust, and why page design is useless if the copy doesn't communicate. We approach coding with a marketer's mindset.",
  },
  {
    id: "conversion",
    label: "Built to Convert",
    icon: LineChart,
    title: "Websites Built for Growth, Not Just Aesthetics",
    content:
      "Every layout decision, call-to-action button, and headline is crafted to turn your random website visitors into high-paying, committed clients. We don't just build websites to look pretty; we build systems designed to increase inquiries, bookings, and revenue.",
  },
  {
    id: "clean-code",
    label: "No Page Builders",
    icon: ShieldAlert,
    title: "100% Hand-Crafted, Maintainable Code",
    content:
      "We refuse to use bloated WordPress templates or drag-and-drop page builders. Every line of React, Next.js, and TypeScript is written by hand. This ensures a blazing fast, future-proof site that search engine crawlers understand and future developers will love.",
  },
  {
    id: "seo",
    label: "SEO From Day One",
    icon: Eye,
    title: "Stop Being Invisible to Google",
    content:
      "A gorgeous website is useless if it's buried on page 5 of search results. We bake technical SEO into the foundation. From lightning-fast Core Web Vitals to proper semantic layout hierarchies and structured schema markup, we make sure search engines index your brand properly.",
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
          <div className="glass-panel relative w-full max-w-[340px] rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden">
            {/* Profile Avatar Frame */}
            <div className="relative w-full h-[280px] rounded-xl overflow-hidden bg-muted/10 flex items-center justify-center border border-border">
              <div className="relative flex flex-col items-center gap-4 text-center z-10">
                <div className="relative size-24 rounded-full border border-border bg-muted flex items-center justify-center shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="MecbillTech founder"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 border border-background" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base">Alade Odunayo</h4>
                  <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Founder & Web Architect</p>
                  <p className="text-[9px] text-muted-foreground/60 font-mono tracking-wider">Ondo, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Core Metrics */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4 text-center">
              <div>
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Philosophy</span>
                <p className="text-sm font-bold text-foreground mt-1">Marketer Mindset</p>
              </div>
              <div>
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Code Base</span>
                <p className="text-sm font-bold text-primary mt-1">100% Bespoke</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
