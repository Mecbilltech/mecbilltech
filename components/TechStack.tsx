"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  level: number;
  experience: string;
}

const techItems: TechItem[] = [
  { name: "React", category: "frontend", level: 95, experience: "3+ Years" },
  { name: "Next.js", category: "frontend", level: 95, experience: "3+ Years" },
  { name: "TypeScript", category: "frontend", level: 90, experience: "3+ Years" },
  { name: "Tailwind CSS", category: "frontend", level: 95, experience: "3+ Years" },
  { name: "JavaScript", category: "frontend", level: 95, experience: "4+ Years" },
  { name: "Node.js", category: "backend", level: 90, experience: "3+ Years" },
  { name: "Express", category: "backend", level: 90, experience: "3+ Years" },
  { name: "Laravel", category: "backend", level: 85, experience: "2+ Years" },
  { name: "PHP", category: "backend", level: 85, experience: "3+ Years" },
  { name: "PostgreSQL", category: "database", level: 88, experience: "3+ Years" },
  { name: "MySQL", category: "database", level: 90, experience: "3+ Years" },
  { name: "Supabase", category: "database", level: 92, experience: "2+ Years" },
  { name: "Prisma", category: "database", level: 90, experience: "2+ Years" },
  { name: "Docker", category: "tools", level: 80, experience: "2+ Years" },
  { name: "Git & GitHub", category: "tools", level: 95, experience: "4+ Years" },
  { name: "Vercel", category: "tools", level: 95, experience: "3+ Years" },
  { name: "Figma", category: "tools", level: 85, experience: "3+ Years" },
  { name: "Postman", category: "tools", level: 90, experience: "3+ Years" },
];

export default function TechStack() {
  const [filter, setFilter] = useState<"all" | "frontend" | "backend" | "database" | "tools">("all");

  const filteredTech = techItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Capabilities</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          The MecbillTech Tech Stack.
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {(["all", "frontend", "backend", "database", "tools"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-5 py-2 text-xs font-semibold capitalize transition-all ${
              filter === cat
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <AnimatePresence mode="popLayout">
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="glass-panel rounded-xl border border-border bg-card p-4 flex flex-col gap-3 hover:border-foreground/20 transition-colors duration-200"
            >
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-foreground">{tech.name}</span>
                <span className="text-[10px] font-mono text-primary font-semibold">{tech.level}%</span>
              </div>
              {/* Proficiency bar */}
              <div className="h-1 rounded-full bg-border overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${tech.level}%` }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground">{tech.experience}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

