"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Github } from "@/components/Icons";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: "websites" | "web-apps" | "systems";
  tag: string;
  description: string;
  tech: string[];
  results: string;
  demoUrl: string;
  githubUrl: string;
  desktopBg: string;
}

const projects: Project[] = [
  {
    id: "cuisine-embassy",
    title: "Cuisine Embassy",
    category: "websites",
    tag: "Restaurant Web App",
    description: "Premium restaurant booking, WhatsApp ordering, and delivery tracking application built for a high-end embassy dining brand.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "WhatsApp API"],
    results: "+120% Reservations, 45% operational automation",
    demoUrl: "https://cuisineembassy.com",
    githubUrl: "https://github.com/mecbilltech/cuisine-embassy",
    desktopBg: "from-amber-600 to-amber-950",
  },
  {
    id: "school-management",
    title: "School Management System",
    category: "systems",
    tag: "Enterprise Education Platform",
    description: "A secure, comprehensive education management system connecting students, teachers, parents, and payment processing portals.",
    tech: ["React", "Laravel", "MySQL", "Prisma"],
    results: "98% billing compliance, 15,000 active students",
    demoUrl: "https://school.mecbilltech.com",
    githubUrl: "https://github.com/mecbilltech/school-management",
    desktopBg: "from-blue-600 to-blue-950",
  },
  {
    id: "finance-management",
    title: "Finance Management System",
    category: "web-apps",
    tag: "Fintech Tracker",
    description: "Personal and enterprise finance tracker with custom budgeting widgets, bank statement processing, and automatic ledger balances.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Supabase"],
    results: "Over $2M transactions tracked, 99.9% data reliability",
    demoUrl: "https://finance.mecbilltech.com",
    githubUrl: "https://github.com/mecbilltech/finance-dashboard",
    desktopBg: "from-emerald-600 to-emerald-950",
  },
  {
    id: "jamajka-braids",
    title: "Jamajka Braids",
    category: "websites",
    tag: "Beauty Booking App",
    description: "Elegant booking website for a hair braiding salon, featuring real-time slot selection, calendar syncing, and staff assignments.",
    tech: ["Next.js", "Framer Motion", "Supabase"],
    results: "85% booking retention rate, 3,200 appointments scheduled",
    demoUrl: "https://jamajkabraids.com",
    githubUrl: "https://github.com/mecbilltech/jamajka-braids",
    desktopBg: "from-purple-600 to-purple-950",
  },
  {
    id: "church-management",
    title: "Church Management Platform",
    category: "systems",
    tag: "Community Portal",
    description: "Centralized database management for church administration, event calendars, stream distribution, and secure donation systems.",
    tech: ["Laravel", "Blade", "MySQL", "Stripe"],
    results: "35% increase in community giving, 5,000 members synced",
    demoUrl: "https://church.mecbilltech.com",
    githubUrl: "https://github.com/mecbilltech/church-portal",
    desktopBg: "from-rose-600 to-rose-950",
  },
  {
    id: "news-portal",
    title: "News Portal",
    category: "websites",
    tag: "Media Platform",
    description: "High-speed news portal optimized for heavy traffic, content management, ads insertion, and quick reading progress feeds.",
    tech: ["Next.js", "Express", "PostgreSQL", "Redis"],
    results: "Under 1.2s page load, 250,000 monthly page views",
    demoUrl: "https://news.mecbilltech.com",
    githubUrl: "https://github.com/mecbilltech/news-portal",
    desktopBg: "from-cyan-600 to-cyan-950",
  },
  {
    id: "portfolio-website",
    title: "Agency Portfolio Website",
    category: "websites",
    tag: "Branding Showcase",
    description: "Premium award-winning software engineering portfolio featuring command palettes, custom loaders, and interactive visualizations.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "Lenis"],
    results: "Lighthouse Performance Score 99/100, 100% responsive",
    demoUrl: "https://mecbilltech.com",
    githubUrl: "https://github.com/mecbilltech/mecbilltech-v3",
    desktopBg: "from-zinc-700 to-zinc-950",
  },
];

const CARD_WIDTH = 340;
const CARD_GAP = 24;

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const max = projects.length - 1;

  const scrollTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, max));
    setCurrent(clamped);
    trackRef.current?.scrollTo({ left: clamped * (CARD_WIDTH + CARD_GAP), behavior: "smooth" });
  }, [max]);

  return (
    <section id="projects" className="py-12 relative">
      {/* Header + Arrows */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Our Work</h2>
          <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl max-w-lg">
            Real Code. Real Business Results.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => scrollTo(current - 1)}
            disabled={current === 0}
            aria-label="Previous project"
            className="size-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="text-xs font-mono text-muted-foreground tabular-nums w-10 text-center">
            {current + 1} / {projects.length}
          </span>
          <button
            onClick={() => scrollTo(current + 1)}
            disabled={current === max}
            aria-label="Next project"
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
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: Math.min(index * 0.05, 0.25), duration: 0.4 }}
            className="flex-none snap-start"
            style={{ width: CARD_WIDTH }}
          >
            {/* Visual Preview */}
            <div
              className={`relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.desktopBg} flex flex-col p-4 overflow-hidden border border-white/10 mb-4 group`}
            >
              {/* Browser dots */}
              <div className="flex gap-1.5 mb-3">
                <div className="size-2 rounded-full bg-white/20" />
                <div className="size-2 rounded-full bg-white/20" />
                <div className="size-2 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono mb-1">{project.tag}</p>
                  <h4 className="text-lg font-bold text-white/90">{project.title}</h4>
                </div>
              </div>

              {/* Hover overlay with buttons */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  <BookOpen className="size-3.5" />
                  Case Study
                </Link>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  <ExternalLink className="size-3.5" />
                  Live Demo
                </a>
              </div>
            </div>

            {/* Card Info */}
            <div className="glass-panel rounded-2xl border border-border bg-card p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                {project.tag}
              </span>
              <h3 className="text-base font-bold text-foreground mt-1 mb-2">{project.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{project.description}</p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground border border-border">
                    {t}
                  </span>
                ))}
              </div>

              {/* Results + Link */}
              <div className="border-t border-border/60 pt-3 flex items-center justify-between gap-2">
                <p className="text-[10px] text-muted-foreground leading-snug flex-1">{project.results}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-primary whitespace-nowrap hover:underline"
                >
                  Read More
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots + CTA */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-1.5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all rounded-full cursor-pointer ${current === i ? "bg-primary w-5 h-1.5" : "bg-border w-1.5 h-1.5 hover:bg-muted-foreground"}`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          View All Projects
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}
