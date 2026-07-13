"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  category: "Web Development" | "Business Growth" | "UI/UX" | "Case Studies" | "Technology";
  snippet: string;
  date: string;
  readTime: string;
  accent: string;
}

const posts: BlogPost[] = [
  {
    slug: "nextjs-tailwind-future",
    title: "Why Next.js 16 and Tailwind v4 are the Future of Web Development",
    category: "Technology",
    snippet: "Exploring how React Server Actions, asynchronous routing params, and the new lightning-fast Rust-based Tailwind compiler supercharge app speeds.",
    date: "July 12, 2026",
    readTime: "5 min read",
    accent: "from-blue-600 to-blue-900",
  },
  {
    slug: "business-website-sales-engine",
    title: "How to Transform Your Website Into a 24/7 Sales and Operations Engine",
    category: "Business Growth",
    snippet: "Bypassing brochure-ware to build active portals that automate booking schedules, capture leads, integrate WhatsApp triggers, and drive direct growth.",
    date: "July 05, 2026",
    readTime: "6 min read",
    accent: "from-emerald-600 to-emerald-900",
  },
  {
    slug: "framer-motion-ux",
    title: "Unlocking Premium User Experiences with Fluid Framer Motion Animations",
    category: "UI/UX",
    snippet: "Applying spring physics, gesture tracking, custom cursors, and layout transitions to make interfaces feel reactive, organic, and premium.",
    date: "June 28, 2026",
    readTime: "4 min read",
    accent: "from-purple-600 to-purple-900",
  },
  {
    slug: "case-study-cuisine-embassy-redesign",
    title: "Case Study: Redesigning Cuisine Embassy for a 120% Conversion Leap",
    category: "Case Studies",
    snippet: "An in-depth breakdown of UX improvements, performance audits, and table reservation engines that transformed Cuisine Embassy's sales pipeline.",
    date: "June 15, 2026",
    readTime: "8 min read",
    accent: "from-amber-600 to-amber-900",
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 24;

export default function Blog() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const max = posts.length - 1;

  const scrollTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, max));
    setCurrent(clamped);
    trackRef.current?.scrollTo({ left: clamped * (CARD_WIDTH + CARD_GAP), behavior: "smooth" });
  }, [max]);

  return (
    <section id="blog" className="py-12 relative">
      {/* Header + Arrows */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Resources</h2>
          <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl max-w-lg">
            Insights on Code, SEO & Conversion.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => scrollTo(current - 1)}
            disabled={current === 0}
            aria-label="Previous article"
            className="size-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="text-xs font-mono text-muted-foreground tabular-nums w-10 text-center">
            {current + 1} / {posts.length}
          </span>
          <button
            onClick={() => scrollTo(current + 1)}
            disabled={current === max}
            aria-label="Next article"
            className="size-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: Math.min(index * 0.08, 0.24), duration: 0.4 }}
            className="flex-none snap-start flex flex-col glass-panel rounded-2xl border border-border bg-card overflow-hidden hover:border-foreground/20 transition-colors duration-200 group"
            style={{ width: CARD_WIDTH }}
          >
            {/* Accent Bar / Mini Header */}
            <div className={`w-full h-24 bg-gradient-to-br ${post.accent} flex items-end p-4`}>
              <span className="inline-block rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-[10px] font-bold text-white/90">
                {post.category}
              </span>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-sm font-bold text-foreground leading-snug mb-3">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">
                {post.snippet}
              </p>

              {/* Meta + CTA */}
              <div className="border-t border-border/60 pt-3 flex items-center justify-between gap-2">
                <div className="flex gap-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-primary whitespace-nowrap hover:underline"
                >
                  Read More
                  <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots + CTA */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-1.5">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all rounded-full cursor-pointer ${current === i ? "bg-primary w-5 h-1.5" : "bg-border w-1.5 h-1.5 hover:bg-muted-foreground"}`}
              aria-label={`Go to article ${i + 1}`}
            />
          ))}
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          View All Articles
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}
