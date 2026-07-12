import ClientLayout from "@/components/ClientLayout";
import { ArrowLeft, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CaseStudyData {
  title: string;
  tag: string;
  challenge: string;
  solution: string;
  results: string[];
}

const caseStudies: Record<string, CaseStudyData> = {
  "cuisine-embassy": {
    title: "Cuisine Embassy Restaurant",
    tag: "Restaurant Web App",
    challenge:
      "Cuisine Embassy struggled with slow page loading times, a menu that was difficult to navigate on mobile devices, and an entirely manual reservation process that overwhelmed their front desk staff, causing high drop-off rates.",
    solution:
      "We rebuilt their website using Next.js 16 and Tailwind CSS v4, styling a fast mobile-first menu. We then integrated a custom reservation and ordering pipeline that dispatches booking details directly to their WhatsApp line via API. Caching and query optimizations reduced page loading times to under 1.2s.",
    results: [
      "120% Increase in weekly reservations during first 60 days",
      "45% Reduction in staff manual order management times",
      "98% Lighthouse performance rating on mobile viewports",
    ],
  },
  "school-management": {
    title: "School Management System",
    tag: "Enterprise Education Platform",
    challenge:
      "A large academy struggled to synchronize student profiles, grade reports, and tuition payment processing. Manual spreadsheets led to data loss, compliance issues, and slow billing processing times.",
    solution:
      "We engineered a custom student information system (SIS) with secure user roles (Admin, Teacher, Student, Parent). We integrated a secure portal for attendance records, automatic grade card generation, and Stripe/local payment APIs for online tuition payments.",
    results: [
      "98% Tuition billing compliance in the first academic term",
      "Over 15,000 active students, teachers, and parents synced",
      "Zero record discrepancy logs reported since system launch",
    ],
  },
  "finance-management": {
    title: "Finance Management System",
    tag: "Fintech Tracker",
    challenge:
      "A growing fintech startup needed a robust tracking system to let enterprise clients upload and analyze balance sheets, monitor ledger balances, and reconcile bank statements in real-time.",
    solution:
      "We developed a secure dashboard application using React, PostgreSQL, and Prisma. We built custom database index rules to optimize transaction search filters and implemented safe server-side validation using Zod schemas.",
    results: [
      "Over $2,000,000 in transactions logged and processed",
      "99.99% Database operations uptime and reliability",
      "Under 80ms query execution times for large financial ledgers",
    ],
  },
  "jamajka-braids": {
    title: "Jamajka Braids",
    tag: "Beauty Booking App",
    challenge:
      "A beauty salon faced double-booking conflicts and high client drop-off rates due to an outdated booking form that lacked real-time schedule syncing.",
    solution:
      "We constructed a clean, glassmorphic scheduling platform using Next.js and Supabase. We implemented real-time slot checking, automatic booking notifications, and team member schedule sync widgets.",
    results: [
      "85% Client booking retention rate over three months",
      "Over 3,200 successful appointments booked without double-bookings",
      "30% Increase in weekly salon service completions",
    ],
  },
  "church-management": {
    title: "Church Management Platform",
    tag: "Community Portal",
    challenge:
      "A church organization with multiple campuses had disjointed records for member databases, weekly service streams, and secure tithing systems.",
    solution:
      "We developed a Laravel and MySQL database portal. The app includes central database records, campus directories, live-stream links, and Stripe payment modules for safe online giving.",
    results: [
      "35% Increase in weekly online tithing/giving contributions",
      "5,000+ Active members consolidated into a single database",
      "Easy campus navigation tools for elderly visitors",
    ],
  },
  "news-portal": {
    title: "News Portal",
    tag: "Media Platform",
    challenge:
      "A regional media agency faced high server costs and crash errors during peak news cycles, alongside low user session retention rates.",
    solution:
      "We built a high-speed news feed optimized using Redis caching and server-side pre-rendering on Next.js. We integrated lazy loading for media assets and structured custom ad insertion grids.",
    results: [
      "Average page load speed under 1.2 seconds under heavy load",
      "Zero server crash incidents recorded during peak election coverage",
      "250,000+ Monthly page views with 20% growth in reading times",
    ],
  },
  "portfolio-website": {
    title: "Agency Portfolio Website",
    tag: "Branding Showcase",
    challenge:
      "MecbillTech needed an award-winning, technically exceptional coding portfolio to position the brand as a top-tier digital engineering agency rather than a simple freelancer profile.",
    solution:
      "We designed and built this portfolio website using Next.js 16, React 19, Tailwind CSS v4, and Framer Motion. We incorporated advanced features like a command palette, custom loaders, and interactive skills visualization tools.",
    results: [
      "99/100 Lighthouse performance, accessibility, and SEO audit scores",
      "100% Mobile responsiveness across all laptop and mobile screens",
      "Blazing-fast loading times with smooth Lenis scroll integration",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return (
    <ClientLayout>
      <div className="max-w-3xl mx-auto py-12">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-primary mb-8 hover:underline"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary">
            {study.tag}
          </span>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Case Study: {study.title}
          </h1>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 my-8" />

        {/* Case Study Content */}
        <div className="space-y-12">
          {/* Challenge */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-foreground tracking-tight">The Challenge</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-foreground tracking-tight">The Solution</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {study.solution}
            </p>
          </div>

          {/* Results */}
          <div className="space-y-4 rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-8">
            <h3 className="text-xl font-extrabold text-foreground tracking-tight flex items-center gap-2 mb-4">
              <TrendingUp className="size-5 text-primary" />
              Business Outcomes & Results
            </h3>
            <ul className="space-y-3.5">
              {study.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-foreground">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA block */}
        <div className="border-t border-border/40 mt-16 pt-12 text-center space-y-6">
          <h4 className="text-xl font-bold text-foreground">Ready to Achieve Similar Results?</h4>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Let MecbillTech analyze your website workflow and engineer a high-performing digital system tailored for your growth.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-primary/90"
          >
            Get a Free Proposal
          </Link>
        </div>
      </div>
    </ClientLayout>
  );
}
