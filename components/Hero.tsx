"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center py-16 lg:py-24 overflow-hidden">
      {/* Subtle light glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        {/* Text Content Left */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary mb-6 w-fit">
            <span className="size-1.5 rounded-full bg-green-500" />
            <span>Available for New Projects</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-500 bg-clip-text text-transparent sm:text-5xl md:text-6xl leading-[1.1] mb-6">
            Engineering Digital Products That Businesses Love.
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-8">
            I help startups, restaurants, schools, beauty brands, agencies, and businesses build beautiful websites and scalable web applications that increase trust, automate operations, and drive growth.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => handleScrollTo("projects")}
              className="group flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/95"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            >
              Start Your Project
            </button>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border/40 pt-8">
            <div>
              <h3 className="text-xl font-bold text-foreground">3+ Years</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Experience</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">20+ Projects</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Completed</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">15+ Clients</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Worldwide</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">100%</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Showcase Panel Right (Single Premium Mockup) */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[350px] lg:min-h-[400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-[480px] h-[320px] rounded-2xl border border-border shadow-md overflow-hidden glass-panel flex flex-col"
          >
            {/* Browser bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/20">
              <div className="flex gap-1.5">
                <div className="size-2 rounded-full bg-border" />
                <div className="size-2 rounded-full bg-border" />
                <div className="size-2 rounded-full bg-border" />
              </div>
              <div className="text-[10px] text-muted-foreground font-mono bg-muted/30 px-4 py-0.5 rounded border border-border">
                mecbilltech.com/analytics
              </div>
              <div className="size-3" />
            </div>

            {/* Dashboard Content */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-card">
              <div className="h-28 rounded-xl bg-muted/20 border border-border p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wide">Monthly Revenue Growth</span>
                  <Activity className="size-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground tracking-tight">$42,940</h4>
                  <p className="text-[10px] text-green-500 font-semibold">+18.4% since last month</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 rounded-xl bg-muted/10 border border-border p-3 flex flex-col justify-between">
                  <span className="text-[8px] text-muted-foreground uppercase font-bold">Conversions</span>
                  <span className="text-sm font-bold text-foreground">3.24%</span>
                </div>
                <div className="h-16 rounded-xl bg-muted/10 border border-border p-3 flex flex-col justify-between">
                  <span className="text-[8px] text-muted-foreground uppercase font-bold">Sessions</span>
                  <span className="text-sm font-bold text-foreground">12.5k</span>
                </div>
                <div className="h-16 rounded-xl bg-muted/10 border border-border p-3 flex flex-col justify-between">
                  <span className="text-[8px] text-muted-foreground uppercase font-bold">Bounce Rate</span>
                  <span className="text-sm font-bold text-foreground">22.4%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
