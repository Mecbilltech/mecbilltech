"use client";

import ClientLayout from "@/components/ClientLayout";
import { ArrowRight, Calendar, Clock, Mail, Send, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    slug: "nextjs-tailwind-future",
    title: "Why Next.js 16 and Tailwind v4 are the Future of Web Development",
    category: "Technology",
    snippet: "Exploring how React Server Actions, asynchronous routing params, and the new lightning-fast Rust-based Tailwind compiler supercharge app speeds.",
    body: "React Server Components are now the default. The Tailwind v4 Rust compiler is up to 10x faster. Together they make for instant HMR, minimal client JS, and production builds that ship faster than anything before.",
    date: "July 12, 2026",
    readTime: "5 min read",
    featured: true,
    accent: "from-blue-600 to-indigo-700",
  },
  {
    slug: "business-website-sales-engine",
    title: "How to Transform Your Website Into a 24/7 Sales and Operations Engine",
    category: "Business Growth",
    snippet: "Bypassing brochure-ware to build active portals that automate booking schedules, capture leads, integrate WhatsApp triggers, and drive direct growth.",
    body: "Most business websites are digital brochures. The shift from static to active means scheduling widgets, instant WhatsApp triggers, and database-backed lead capture that reply to prospects within minutes.",
    date: "July 05, 2026",
    readTime: "6 min read",
    featured: false,
    accent: "from-emerald-600 to-teal-700",
  },
  {
    slug: "framer-motion-ux",
    title: "Unlocking Premium User Experiences with Fluid Framer Motion Animations",
    category: "UI/UX",
    snippet: "Applying spring physics, gesture tracking, custom cursors, and layout transitions to make interfaces feel reactive, organic, and premium.",
    body: "Spring-based transitions, gesture hooks, and magnetic CTAs bridge the gap between a wireframe and a delightful product. The key is intentionality — every animation must guide, not distract.",
    date: "June 28, 2026",
    readTime: "4 min read",
    featured: false,
    accent: "from-purple-600 to-violet-700",
  },
  {
    slug: "case-study-cuisine-embassy-redesign",
    title: "Case Study: Redesigning Cuisine Embassy for a 120% Conversion Leap",
    category: "Case Studies",
    snippet: "An in-depth breakdown of UX improvements, performance audits, and table reservation engines that transformed Cuisine Embassy's sales pipeline.",
    body: "Within 60 days: 120% more table reservations and 45% less staff phone work. The fixes? Mobile-first menu grid, direct WhatsApp booking dispatch, and a migration from sluggish hosting to Supabase + Next.js.",
    date: "June 15, 2026",
    readTime: "8 min read",
    featured: false,
    accent: "from-amber-600 to-orange-700",
  },
];

const categories = ["All", "Technology", "Business Growth", "UI/UX", "Case Studies"];

const categoryBadge: Record<string, string> = {
  Technology: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Business Growth": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "UI/UX": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  "Case Studies": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);
  const featured = posts.find((p) => p.featured)!;
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <ClientLayout>
      <div className="max-w-5xl mx-auto py-8 md:py-16">

        {/* ── Page Hero ─────────────────────────────────── */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary mb-6">
            MecbillTech Blog
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1] mb-5">
            Insights on Code, SEO & Conversion.
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            We write about custom web development, site speed, SEO strategy, and workflow automation to help you scale.
          </p>
        </div>

        {/* ── Featured Article ──────────────────────────── */}
        {activeCategory === "All" && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative block rounded-3xl overflow-hidden border border-border mb-12 hover:border-foreground/20 transition-all duration-300"
          >
            {/* Gradient banner */}
            <div className={`w-full h-36 md:h-48 bg-gradient-to-r ${featured.accent} flex items-end p-6 md:p-8`}>
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold text-white/90 bg-white/10 border-white/20`}>
                <Tag className="size-3" />
                {featured.category}
              </span>
            </div>
            <div className="bg-card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-bold text-primary">Featured</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">{featured.body}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="size-3" />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="size-3" />{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
                  Read Article <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* ── Category Filter ───────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "border border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Article List ──────────────────────────────── */}
        <div className="space-y-4 mb-20">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row gap-4 sm:gap-8 items-start rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-foreground/20 hover:shadow-sm transition-all duration-200"
            >
              {/* Accent bar */}
              <div className={`w-full sm:w-1.5 sm:h-auto h-1 rounded-full bg-gradient-to-b ${post.accent} shrink-0 sm:self-stretch`} />

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${categoryBadge[post.category] || "bg-muted text-muted-foreground border-border"}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Calendar className="size-3" />{post.date}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Clock className="size-3" />{post.readTime}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug mb-1 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{post.snippet}</p>
              </div>

              <div className="shrink-0 self-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline whitespace-nowrap">
                  Read More <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Newsletter ────────────────────────────────── */}
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-xl font-extrabold text-foreground mb-2 flex items-center gap-2">
              <Mail className="size-5 text-primary" />
              Subscribe to the Growth Letter
            </h2>
            <p className="text-sm text-muted-foreground max-w-sm">
              Practical tips on website conversions, load speeds, and SEO. No spam, unsubscribe anytime.
            </p>
          </div>
          <form className="relative flex items-center w-full max-w-xs shrink-0">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-full rounded-full border border-border bg-background pl-4 pr-12 py-2.5 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/95 transition-all cursor-pointer"
            >
              <Send className="size-3.5" />
            </button>
          </form>
        </div>

      </div>
    </ClientLayout>
  );
}
