import ClientLayout from "@/components/ClientLayout";
import { ArrowRight, CheckCircle2, ExternalLink, BookOpen, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Github } from "@/components/Icons";

export const metadata = {
  title: "Projects & Case Studies | MecbillTech Portfolio",
  description: "Browse custom websites, web applications, and enterprise systems built by MecbillTech. View detailed case studies and direct business results.",
  keywords: ["MecbillTech projects", "web development portfolio", "Next.js case studies", "custom SaaS dashboard"],
};

const projects = [
  {
    id: "cuisine-embassy",
    title: "Cuisine Embassy",
    tag: "Restaurant Web App",
    category: "Website",
    year: "2025",
    description: "Premium restaurant booking, WhatsApp ordering, and delivery tracking system for a high-end embassy dining brand. The project eliminated manual order management and reduced staff workload by nearly half.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "WhatsApp API"],
    results: ["+120% Weekly Reservations", "45% Operational Automation", "98 Lighthouse Score"],
    demoUrl: "https://cuisineembassy.com",
    githubUrl: "https://github.com/mecbilltech/cuisine-embassy",
    color: "amber",
    gradient: "from-amber-500/20 to-amber-900/5",
  },
  {
    id: "school-management",
    title: "School Management System",
    tag: "Enterprise Education Platform",
    category: "Web App",
    year: "2025",
    description: "A comprehensive education management suite synchronizing 15,000+ students, teachers, and parents. Includes secure role-based portals, attendance tracking, automated grade cards, and Stripe tuition payments.",
    tech: ["React", "Laravel", "MySQL", "Prisma"],
    results: ["98% Billing Compliance", "15,000+ Active Users", "Zero Record Discrepancies"],
    demoUrl: "https://school.mecbilltech.com",
    githubUrl: "https://github.com/mecbilltech/school-management",
    color: "blue",
    gradient: "from-blue-500/20 to-blue-900/5",
  },
  {
    id: "finance-management",
    title: "Finance Management System",
    tag: "Fintech Tracker",
    category: "Web App",
    year: "2024",
    description: "Personal and enterprise finance tracker built on PostgreSQL with custom budgeting widgets, bank statement processing, and automatic ledger reconciliation. Query execution under 80ms even on large datasets.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Supabase"],
    results: ["$2M+ Transactions Processed", "99.9% Uptime", "<80ms Query Speed"],
    demoUrl: "https://finance.mecbilltech.com",
    githubUrl: "https://github.com/mecbilltech/finance-dashboard",
    color: "emerald",
    gradient: "from-emerald-500/20 to-emerald-900/5",
  },
  {
    id: "jamajka-braids",
    title: "Jamajka Braids",
    tag: "Beauty Booking App",
    category: "Website",
    year: "2025",
    description: "Glassmorphic booking platform for a beauty salon with real-time slot checking, automatic booking notifications, and team member schedule syncing. Eliminated double-booking incidents entirely.",
    tech: ["Next.js", "Framer Motion", "Supabase"],
    results: ["85% Booking Retention", "3,200+ Appointments", "0 Double-Bookings"],
    demoUrl: "https://jamajkabraids.com",
    githubUrl: "https://github.com/mecbilltech/jamajka-braids",
    color: "purple",
    gradient: "from-purple-500/20 to-purple-900/5",
  },
  {
    id: "church-management",
    title: "Church Management Platform",
    tag: "Community Portal",
    category: "Web App",
    year: "2024",
    description: "Multi-campus church administration system with member databases, live-stream links, and Stripe payment modules for secure online giving. Consolidated 5,000+ members into a single unified platform.",
    tech: ["Laravel", "Blade", "MySQL", "Stripe"],
    results: ["35% Increase in Giving", "5,000+ Members Synced", "Multi-Campus Navigation"],
    demoUrl: "https://church.mecbilltech.com",
    githubUrl: "https://github.com/mecbilltech/church-portal",
    color: "rose",
    gradient: "from-rose-500/20 to-rose-900/5",
  },
  {
    id: "news-portal",
    title: "News Portal",
    tag: "Media Platform",
    category: "Website",
    year: "2024",
    description: "High-traffic news portal with Redis caching, server-side pre-rendering, lazy-loaded media assets, and structured ad insertion grids. Survived peak election coverage with zero downtime.",
    tech: ["Next.js", "Express", "PostgreSQL", "Redis"],
    results: ["<1.2s Page Load", "250,000+ Monthly Views", "0 Peak-Load Crashes"],
    demoUrl: "https://news.mecbilltech.com",
    githubUrl: "https://github.com/mecbilltech/news-portal",
    color: "cyan",
    gradient: "from-cyan-500/20 to-cyan-900/5",
  },
  {
    id: "portfolio-website",
    title: "Agency Portfolio Website",
    tag: "Branding Showcase",
    category: "Website",
    year: "2026",
    description: "Award-quality engineering portfolio built with Next.js 16, Tailwind v4, and Framer Motion. Features a command palette, smooth Lenis scroll, interactive skills visualization, and 99/100 Lighthouse scores.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "Lenis"],
    results: ["99/100 Lighthouse Score", "100% Responsive", "Blazing-fast Loads"],
    demoUrl: "https://mecbilltech.com",
    githubUrl: "https://github.com/mecbilltech/mecbilltech-v3",
    color: "zinc",
    gradient: "from-zinc-500/10 to-zinc-900/5",
  },
];

const colorDot: Record<string, string> = {
  amber: "bg-amber-500",
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  purple: "bg-purple-500",
  rose: "bg-rose-500",
  cyan: "bg-cyan-500",
  zinc: "bg-zinc-500",
};

export default function ProjectsPage() {
  return (
    <ClientLayout>
      <div className="max-w-5xl mx-auto py-8 md:py-16">

        {/* ── Page Hero ──────────────────────────────────── */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary mb-6">
            Our Work
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1] mb-5">
            Real Code. Real Business Results.
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            We don't build generic template sites. Every project below is a custom-engineered system with measurable outcomes attached.
          </p>
        </div>

        {/* ── Projects — Editorial List ──────────────────── */}
        <div className="space-y-4 mb-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl border border-border bg-gradient-to-br ${project.gradient} p-6 md:p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-sm`}
            >
              {/* Top Meta Row */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className={`size-2 rounded-full ${colorDot[project.color]}`} />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">{project.tag}</span>
                <span className="text-[10px] font-mono text-muted-foreground/50">·</span>
                <span className="text-[10px] font-mono text-muted-foreground/50">{project.category}</span>
                <span className="text-[10px] font-mono text-muted-foreground/50">·</span>
                <span className="text-[10px] font-mono text-muted-foreground/50">{project.year}</span>

                <div className="ml-auto flex items-center gap-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener" className="size-7 rounded-full border border-border bg-background/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all" aria-label="GitHub">
                    <Github className="size-3.5" />
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener" className="size-7 rounded-full border border-border bg-background/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all" aria-label="Live site">
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>

              {/* Main Content Row */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-foreground mb-2">{project.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-md bg-background/60 border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Results + CTA */}
                <div className="md:w-52 shrink-0 flex flex-col justify-between gap-4">
                  <div className="border border-border/60 bg-background/40 rounded-xl p-4">
                    <div className="flex items-center gap-1.5 mb-3">
                      <TrendingUp className="size-3 text-primary" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Outcomes</span>
                    </div>
                    <ul className="space-y-1.5">
                      {project.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-[11px] font-semibold text-foreground">
                          <CheckCircle2 className="size-3 text-primary shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <BookOpen className="size-3.5" />
                    Read Case Study
                    <ArrowRight className="size-3.5 ml-auto" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────── */}
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground mb-2">Have a specific project in mind?</h2>
            <p className="text-sm text-muted-foreground max-w-md">
              We'll engineer a custom solution around your operational and conversion goals. Start with a free proposal outline.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/95 shadow-md transition-all shrink-0"
          >
            Start a Project
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </ClientLayout>
  );
}
