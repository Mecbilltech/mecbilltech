import ClientLayout from "@/components/ClientLayout";
import { Calendar, Clock, ArrowLeft, Heart, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}

const blogData: Record<string, BlogPostData> = {
  "nextjs-tailwind-future": {
    title: "Why Next.js 16 and Tailwind v4 are the Future of Web Development",
    category: "Technology",
    date: "July 12, 2026",
    readTime: "5 min read",
    content: [
      "The web landscape is evolving faster than ever. With the release of Next.js 16 and Tailwind CSS v4, developers are equipped with tools that completely redefine performance, development speeds, and production stability.",
      "One of the biggest shifts in Next.js 16 is the complete standardization of React Server Components (RSC) and React 19 features. Asynchronous layout and page params change how dynamic rendering functions, ensuring that pages are compile-ready and client hydration scripts are kept to an absolute minimum.",
      "On the other hand, Tailwind CSS v4 introduces a new Rust-based compiler engine. What does this mean? Compilation speeds are up to 10x faster, ensuring fluid hot module replacement (HMR) during local coding. The new compiler also strips out the need for complex postcss configuration, moving configuration tokens entirely inside the CSS stylesheet using @theme directives.",
      "At MecbillTech, we have migrated our projects to this stack because of the massive benefits to user experience. When websites load instantly and animations run at 60 FPS, customer bounce rates plummet, search engines reward pages with higher ranks, and conversions spike.",
    ],
  },
  "business-website-sales-engine": {
    title: "How to Transform Your Website Into a 24/7 Sales and Operations Engine",
    category: "Business Growth",
    date: "July 05, 2026",
    readTime: "6 min read",
    content: [
      "Too many businesses treat their website as a simple digital brochure. They list their services, insert a static email address, and expect clients to reach out. In the modern economy, this transactional approach is no longer enough to build competitive advantages.",
      "An active business website should function as a 24/7 automated operations hub. By integrating scheduling widgets directly with calendars, you bypass the email back-and-forth and let clients book instant consultation blocks. When reservations write straight into a database, administrative errors drop to zero.",
      "Furthermore, integrating instant messaging triggers—like sending a copy of inquiries directly to staff WhatsApp lines—speeds up response times. Research shows that replying to a lead within 5 minutes increases conversion rates by over 300%.",
      "We design custom web structures that focus on these automation mechanisms. Whether it is an online menu ordering system for restaurants or a student onboarding portal for schools, the goal remains the same: automate manual operations, build immediate customer trust, and drive financial growth.",
    ],
  },
  "framer-motion-ux": {
    title: "Unlocking Premium User Experiences with Fluid Framer Motion Animations",
    category: "UI/UX",
    date: "June 28, 2026",
    readTime: "4 min read",
    content: [
      "User interface design is not just about choosing colors or picking premium fonts. It is about how the interface feels during interaction. Micro-interactions and transition animations bridge the gap between static wireframes and responsive digital products.",
      "Using Framer Motion, developers can integrate spring physics, scroll-triggered reveals, layout transitions, and cursor followers with minimal code footprint. Spring-based transitions make UI cards feel organic and weight-bearing, while magnetic triggers make CTA buttons interactive and click-friendly.",
      "However, animations must be applied strategically. Too many floating elements or flickering gradient meshes will distract visitors and lead to performance degradation. Every animation should feel intentional—guiding the reader's eye to primary actions, indicating system status changes, or easing page transition shifts.",
      "At MecbillTech, we prioritize visual excellence. We design layouts that load fast and remain completely smooth at 60 FPS across all mobile and desktop viewports, ensuring our clients' products feel luxurious, professional, and reliable.",
    ],
  },
  "case-study-cuisine-embassy-redesign": {
    title: "Case Study: Redesigning Cuisine Embassy for a 120% Conversion Leap",
    category: "Case Studies",
    date: "June 15, 2026",
    readTime: "8 min read",
    content: [
      "Cuisine Embassy came to us with a critical challenge: their existing website was slow, failed to render menus correctly on mobile, and their booking process was entirely manual, causing staff overload and high customer drop-offs.",
      "Our redesign plan targeted three areas: menu presentation, reservation automation, and mobile page performance. We rebuilt their menu using a responsive tab grid, ensuring items load instantly and display high-resolution plates. We then integrated a direct WhatsApp reservation trigger, sending pre-filled customer details to their front-desk dispatch.",
      "To resolve performance bottlenecks, we migrated their database from a slow hosting platform to PostgreSQL hosted on Supabase, applying caching rules via Next.js. Page speed scores jumped from 45% to a blazing 98% on Lighthouse audits.",
      "The outcome? Within 60 days of deployment, Cuisine Embassy logged a 120% increase in weekly dining table reservations, and automated dispatch operations reduced the staff's phone management workload by 45%.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    notFound();
  }

  return (
    <ClientLayout>
      <div className="max-w-3xl mx-auto py-12">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-primary mb-8 hover:underline"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary">
            {post.category}
          </span>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl md:text-5xl leading-tight">
            {post.title}
          </h1>

          <div className="flex gap-6 text-xs text-muted-foreground pt-2">
            <span className="flex items-center gap-1">
              <Calendar className="size-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 my-8" />

        {/* Article Body */}
        <article className="space-y-6 text-base text-foreground/90 leading-relaxed font-sans">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>

        {/* Action Widgets */}
        <div className="border-t border-border/40 mt-12 pt-8 flex justify-between items-center text-muted-foreground text-xs font-semibold">
          <div className="flex gap-4">
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Heart className="size-4" />
              <span>Like Article</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Share2 className="size-4" />
              <span>Share</span>
            </button>
          </div>
          <span>MecbillTech Insights</span>
        </div>
      </div>
    </ClientLayout>
  );
}
