"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  category: "Web Development" | "Business Growth" | "UI/UX" | "Case Studies" | "Technology";
  snippet: string;
  date: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    slug: "nextjs-tailwind-future",
    title: "Why Next.js 16 and Tailwind v4 are the Future of Web Development",
    category: "Technology",
    snippet: "Exploring how React Server Actions, asynchronous routing params, and the new lightning-fast Rust-based Tailwind compiler supercharge app speeds.",
    date: "July 12, 2026",
    readTime: "5 min read",
  },
  {
    slug: "business-website-sales-engine",
    title: "How to Transform Your Website Into a 24/7 Sales and Operations Engine",
    category: "Business Growth",
    snippet: "Bypassing brochure-ware to build active portals that automate booking schedules, capture leads, integrate WhatsApp triggers, and drive direct growth.",
    date: "July 05, 2026",
    readTime: "6 min read",
  },
  {
    slug: "framer-motion-ux",
    title: "Unlocking Premium User Experiences with Fluid Framer Motion Animations",
    category: "UI/UX",
    snippet: "Applying spring physics, gesture tracking, custom cursors, and layout transitions to make interfaces feel reactive, organic, and premium.",
    date: "June 28, 2026",
    readTime: "4 min read",
  },
  {
    slug: "case-study-cuisine-embassy-redesign",
    title: "Case Study: Redesigning Cuisine Embassy for a 120% Conversion Leap",
    category: "Case Studies",
    snippet: "An in-depth breakdown of UX improvements, performance audits, and table reservation engines that transformed Cuisine Embassy's sales pipeline.",
    date: "June 15, 2026",
    readTime: "8 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-12 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Resources</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          Latest Insights from MecbillTech.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.08, 0.24), duration: 0.4 }}
            className="glass-panel group relative rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between hover:border-foreground/20 transition-colors duration-200"
          >

            <div>
              {/* Category */}
              <span className="inline-block rounded-md bg-muted px-2.5 py-1 text-[10px] font-semibold text-muted-foreground border border-border mb-4">
                {post.category}
              </span>
              {/* Headline */}
              <h3 className="text-lg font-bold text-foreground leading-snug mb-3">
                {post.title}
              </h3>
              {/* Snippet */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {post.snippet}
              </p>
            </div>

            {/* Meta and Link */}
            <div className="border-t border-border pt-4 flex items-center justify-between mt-auto">
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {post.readTime}
                </span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline"
              >
                <span>Read More</span>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
