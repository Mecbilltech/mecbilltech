"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import Image from "next/image";

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

      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent sm:text-5xl md:text-6xl leading-[1.1] mb-6 tracking-tight balance">
        Crafting High-Converting Websites with a Marketer's Mindset.
      </h1>

      <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-8">
        No bloated page builders. No generic templates. We write clean, hand-crafted Next.js & React code, bake in SEO from day one, and architect every pixel to turn your traffic into paying clients.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button
          onClick={() => handleScrollTo("projects")}
          className="group flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-md cursor-pointer"
        >
          See Our Work
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
        <button
          onClick={() => handleScrollTo("contact")}
          className="flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted hover:text-foreground shadow-sm cursor-pointer"
        >
          Start a Project
        </button>
      </div>
    </div>

    {/* Showcase Panel Right */}
    <div className="lg:col-span-6 relative flex items-center justify-center min-h-[350px] lg:min-h-[400px]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[480px] h-[340px] rounded-2xl border border-border shadow-lg overflow-hidden glass-panel flex flex-col bg-card"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-purple-500/10 pointer-events-none z-10" />
        {/* Next.js fill images require object-cover directly or custom wrapper styling */}
        <Image
          src="/about2.jpg"
          alt="MecbillTech High-Converting Platform"
          fill
          sizes="(max-w-780px) 100vw, 480px"
          className="object-cover object-top transition-transform duration-700 hover:scale-102"
          priority
        />
      </motion.div>
    </div>
  </div>
</section>
  );
}
