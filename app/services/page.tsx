import ClientLayout from "@/components/ClientLayout";
import Process from "@/components/Process";
import { Globe, Cpu, GraduationCap, Briefcase, RefreshCw, LifeBuoy, Check, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | High-Performing Web Engineering & Custom Systems",
  description: "Explore services offered by MecbillTech. Custom Next.js web development, Technical SEO, school management systems, and high-converting copywriting tailored for business growth.",
  keywords: ["web engineering", "technical SEO", "website redesign", "school management systems", "custom web applications"],
};

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Custom Web Development",
    tagline: "Zero templates. Pure performance.",
    description: "Every site is custom-architected from the ground up to match your brand and business goals. We write clean, hand-crafted Next.js and React code with no page builder overhead — delivering Lighthouse scores above 99 and blazing-fast mobile loads.",
    features: ["Next.js & React Framework", "0% Page Builder Bloat", "99+ Lighthouse Scores", "Responsive Mobile-First UX"],
    accent: "blue",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Web Apps & Custom Systems",
    tagline: "Automate your operations.",
    description: "Build responsive portals, dashboards, and workflow engines tailored for your business. Whether it's a student portal, a WhatsApp reservation pipeline, or a custom CRM — we architect it from database schema to final UI.",
    features: ["Custom Database Architecture", "Secure User Authentication", "API & Payment Integrations", "Real-time Workflows"],
    accent: "indigo",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Website Redesign & Migration",
    tagline: "From slow and outdated to elite.",
    description: "We rebuild slow or broken legacy websites using modern standards with zero downtime. Your existing search authority and content are preserved — and your new speed scores will show the difference immediately on day one.",
    features: ["UX Flow Auditing", "Database & Asset Migration", "Zero-Downtime Deployment", "Preserved Search Authority"],
    accent: "purple",
  },
  {
    number: "04",
    icon: Briefcase,
    title: "Search Engine Optimization",
    tagline: "Stop being invisible to Google.",
    description: "A beautiful website buried on page 5 is useless. We integrate technical SEO into the foundation: semantic markup, schema structured data, Core Web Vitals optimization, and Google Search Console configuration from day one.",
    features: ["Technical SEO Schema", "On-Page Keyword Strategy", "Speed Optimization Indexing", "Google Search Console Setup"],
    accent: "emerald",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "High-Converting Copywriting",
    tagline: "Words that work as hard as code.",
    description: "Copy is the engine of every website. We craft compelling, SEO-friendly messaging that speaks directly to your users' pain points, builds trust, and drives them toward your most important actions.",
    features: ["Audience Psychology Angles", "SEO-Optimized Layout Copy", "Clear Call-to-Action Flows", "Value Proposition Alignment"],
    accent: "amber",
  },
  {
    number: "06",
    icon: LifeBuoy,
    title: "Website Management & Support",
    tagline: "Stay fast, secure, and always online.",
    description: "We provide ongoing technical care: dependency updates, daily cloud backups, proactive security monitoring, and performance audits. You focus on your business — we make sure your site is always at 100%.",
    features: ["Daily Cloud Backups", "Security Firewalls & Patches", "Package Dependency Updates", "Ongoing Performance Audits"],
    accent: "rose",
  },
];

const accentBg: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

const accentBorder: Record<string, string> = {
  blue: "hover:border-blue-500/40",
  indigo: "hover:border-indigo-500/40",
  purple: "hover:border-purple-500/40",
  emerald: "hover:border-emerald-500/40",
  amber: "hover:border-amber-500/40",
  rose: "hover:border-rose-500/40",
};

export default function ServicesPage() {
  return (
    <ClientLayout>
      <div className="max-w-5xl mx-auto py-8 md:py-16">

        {/* ── Page Hero ───────────────────────────────────── */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary mb-6">
            Our Offerings
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1] mb-5">
            Custom Web Services Built to Drive Business Growth.
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-8">
            Every engagement is hand-crafted, conversion-focused, and built without bloated page builders. Here's exactly what we offer.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/95 shadow-md transition-all"
          >
            Get a Free Proposal
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* ── Services — Alternating Layout ───────────────── */}
        <div className="space-y-6 mb-24">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className={`group relative rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start transition-all duration-300 ${accentBorder[service.accent]}`}
              >
                {/* Left: Number + Icon */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 md:w-24 shrink-0">
                  <span className="text-4xl font-black tabular-nums text-foreground/10 leading-none select-none">
                    {service.number}
                  </span>
                  <div className={`size-10 rounded-xl flex items-center justify-center border ${accentBg[service.accent]}`}>
                    <Icon className="size-5" />
                  </div>
                </div>

                {/* Middle: Title + Description */}
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
                    {service.tagline}
                  </p>
                  <h2 className="text-xl font-bold text-foreground mb-3">{service.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                {/* Right: Features */}
                <div className="md:w-56 shrink-0 border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-8">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Includes</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="size-3 text-primary shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Process Timeline ────────────────────────────── */}
        <div className="border-t border-border/40 pt-16 mb-24">
          <Process />
        </div>

        {/* ── Bottom CTA ──────────────────────────────────── */}
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground mb-2">Ready to build a high-performing asset?</h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Tell us about your project. We'll put together a free proposal outlining the stack, timeline, and estimated outcome for your goals.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/95 shadow-md transition-all"
            >
              Get in Touch
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-all"
            >
              See Our Work
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

      </div>
    </ClientLayout>
  );
}
