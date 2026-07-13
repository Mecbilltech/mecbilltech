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
            <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>Available for Partnerships & Projects</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent sm:text-5xl md:text-6xl leading-[1.1] mb-6">
            Crafting High-Converting Websites with a Marketer's Mindset.
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-8">
            No bloated page builders. No generic templates. We write clean, hand-crafted Next.js & React code, bake in SEO from day one, and architect every pixel to turn your traffic into paying clients.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => handleScrollTo("projects")}
              className="group flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/95 shadow-md hover:shadow-lg cursor-pointer"
            >
              See Our Work
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted shadow-sm cursor-pointer"
            >
              Start a Project
            </button>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border/40 pt-8">
            <div>
              <h3 className="text-xl font-bold text-foreground">3+ Years</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Experience</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">25+ Projects</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Delivered</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">99+</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Lighthouse Speed</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">0%</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Page Builder Bloat</p>
            </div>
          </div>
        </div>

        {/* Showcase Panel Right (Premium Conversion Framework Mockup) */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[350px] lg:min-h-[400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-[480px] h-[340px] rounded-2xl border border-border shadow-lg overflow-hidden glass-panel flex flex-col bg-card"
          >
            {/* Browser bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/20">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-red-500/80" />
                <div className="size-2.5 rounded-full bg-yellow-500/80" />
                <div className="size-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="text-[10px] text-muted-foreground font-mono bg-muted/30 px-4 py-1 rounded-md border border-border">
                mecbilltech.com/conversion-framework
              </div>
              <div className="size-4" />
            </div>

            {/* Dashboard Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              {/* Header inside Mockup */}
              <div className="flex justify-between items-center border-b border-border/50 pb-3">
                <div>
                  <span className="text-[9px] uppercase font-bold text-primary tracking-widest">Built to Perform</span>
                  <h4 className="text-sm font-bold text-foreground">Conversion-First Architecture</h4>
                </div>
                {/* Speed Badge */}
                <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-0.5 rounded-full">
                  <span className="size-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold font-mono">99 Score</span>
                </div>
              </div>

              {/* Conversion Indicators */}
              <div className="space-y-3 my-4">
                <div className="flex items-start gap-3">
                  <div className="size-5 rounded bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0 mt-0.5 text-blue-500 font-bold text-[10px]">01</div>
                  <div>
                    <h5 className="text-xs font-bold text-foreground">0% Codebase Bloat</h5>
                    <p className="text-[10px] text-muted-foreground">Hand-written, clean components. Zero page builder overhead for instant loads.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-5 rounded bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center shrink-0 mt-0.5 text-indigo-500 font-bold text-[10px]">02</div>
                  <div>
                    <h5 className="text-xs font-bold text-foreground">Marketer's Layout Strategy</h5>
                    <p className="text-[10px] text-muted-foreground">Every headline, image placement, and CTA is optimized for user conversion flows.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-5 rounded bg-purple-500/10 border border-purple-500/25 flex items-center justify-center shrink-0 mt-0.5 text-purple-500 font-bold text-[10px]">03</div>
                  <div>
                    <h5 className="text-xs font-bold text-foreground">Day-One Technical SEO</h5>
                    <p className="text-[10px] text-muted-foreground">Proper semantic HTML structure, schema markup, and speed audits integrated from scratch.</p>
                  </div>
                </div>
              </div>

              {/* Footer inside Mockup */}
              <div className="border-t border-border/50 pt-3 flex justify-between items-center text-[9px] text-muted-foreground font-mono">
                <span>⚡ Powered by Next.js & React</span>
                <span className="text-primary font-bold">Human-Crafted Code</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
