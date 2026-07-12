"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { Github } from "@/components/Icons";

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

type FilterType = "all" | "websites" | "web-apps" | "systems";

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Our Work</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          Case Studies in Engineering and Design.
        </p>
      </div>

      {/* Filter Menu */}
      <div className="flex justify-center gap-2 mb-16 flex-wrap">
        {(["all", "websites", "web-apps", "systems"] as FilterType[]).map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`rounded-full px-5 py-2 text-xs font-semibold capitalize transition-all ${
              filter === type
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
            }`}
          >
            {type.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-20">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`flex flex-col gap-10 items-center lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Visual (gradient preview) */}
              <div className="w-full lg:w-1/2">
                <div className={`relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.desktopBg} flex flex-col p-4 overflow-hidden border border-white/10`}>
                  {/* Minimal browser chrome */}
                  <div className="flex items-center gap-1.5 mb-3">
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
                </div>
              </div>

              {/* Project Meta Info */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-3">
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold text-foreground tracking-tight mb-4">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Business Outcome */}
                <div className="rounded-xl border border-border bg-muted/20 p-4 mb-6">
                  <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider">Business Outcome</span>
                  <p className="text-sm font-semibold text-foreground mt-1">{project.results}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => { window.location.href = `/projects/${project.id}`; }}
                    className="flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <BookOpen className="size-3.5" />
                    Case Study
                  </button>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
                  >
                    <ExternalLink className="size-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
                  >
                    <Github className="size-3.5" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
