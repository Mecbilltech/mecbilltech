"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Eye, LineChart, ShieldAlert, Award, Star } from "lucide-react";
import Image from "next/image";

const tabs = [
  {
    id: "journey",
    label: "Engineering Journey",
    icon: Cpu,
    title: "Bridging the Gap Between Code & Craft",
    content:
      "Over the past 3+ years, MecbillTech has been at the forefront of software engineering, starting from building lightweight websites to engineering complex, scalable, and secure enterprise software architectures. Our focus is writing clean, performant code that stands the test of time.",
  },
  {
    id: "mindset",
    label: "Business Mindset",
    icon: LineChart,
    title: "We Don't Just Write Code; We Build Assets",
    content:
      "A website or app is only as good as the business value it generates. We design with a business-first mindset, ensuring every customer flow is optimized for conversions, page speeds are blazing fast to prevent bounce rates, and features automate tedious administrative tasks.",
  },
  {
    id: "philosophy",
    label: "Problem-Solving",
    icon: ShieldAlert,
    title: "Architecting Resilient Digital Solutions",
    content:
      "We view challenges as opportunities to architect. When others see bottlenecks, we see an opening to implement caching layers, restructure database schemas, or build modular API integrations. Our engineering is driven by structural excellence and security.",
  },
  {
    id: "vision",
    label: "Global Vision",
    icon: Eye,
    title: "Empowering Ambitious Brands Everywhere",
    content:
      "Based globally, we support businesses across continents. Our client list ranges from local boutique restaurants to international schools and finance agencies. We design digital platforms that scale globally, load instantly anywhere in the world, and support multiple currencies/locales.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("journey");

  return (
    <section id="about" className="py-20 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Who is MecbillTech</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          Helping Ambitious Businesses Scale Through Technology.
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
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
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
                          <span>Enterprise Standards</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                          <Star className="size-4" />
                          <span>Premium Aesthetic</span>
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
                    alt="MecbillTech"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 border border-background" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base">Mecbilltech</h4>
                  <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Ondo, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Core Metrics */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4 text-center">
              <div>
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Lighthouse Speed</span>
                <p className="text-lg font-bold text-green-600">98%</p>
              </div>
              <div>
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Build Quality</span>
                <p className="text-lg font-bold text-primary">A+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
