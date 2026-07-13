import ClientLayout from "@/components/ClientLayout";
import Services from "@/components/Services";
import Process from "@/components/Process";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | High-Performing Web Engineering & Custom Systems",
  description: "Explore services offered by MecbillTech. Custom Next.js web development, Technical SEO, school management systems, and high-converting copywriting tailored for business growth.",
  keywords: ["web engineering", "technical SEO", "website redesign", "school management systems", "custom web applications"],
};

export default function ServicesPage() {
  return (
    <ClientLayout>
      <div className="max-w-5xl mx-auto py-8 md:py-16 space-y-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
            Our Offerings
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1]">
            Custom Web Services Built to Drive Business Growth.
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We build custom, hand-crafted Next.js websites, high-performance web systems, and direct WhatsApp integrations designed to automate your workflow and turn traffic into paying clients.
          </p>
        </div>

        {/* Services List Component */}
        <div className="border-t border-border/40 pt-16">
          <Services />
        </div>

        {/* Quality Standard Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          <div className="glass-panel p-6 rounded-2xl border border-border bg-card">
            <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" />
              0% WordPress/Builder Bloat
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We never use heavy templates or drag-and-drop builders. Every component is written in clean, custom React and Next.js, guaranteeing lightweight performance and security.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-border bg-card">
            <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" />
              Day-One SEO Integrations
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We bake in technical SEO foundations, semantic markup configurations, meta tags, and schema tags from the very start, giving search engines exactly what they need to rank you.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-border bg-card">
            <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" />
              Direct Conversions Strategy
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We design every CTA, placement, and form flow based on user psychology, ensuring you convert organic traffic into direct consultations or active inquiries.
            </p>
          </div>
        </div>

        {/* Process Timeline Component */}
        <div className="border-t border-border/40 pt-16">
          <Process />
        </div>

        {/* Bottom CTA block */}
        <div className="border-t border-border/40 pt-16 text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
            Ready to Build a High-Performing Asset?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Let’s discuss your business objectives and design a customized roadmap to scale your online presence. Ask for a free homepage proposal outline today.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/95 shadow-md"
            >
              Get in Touch
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            >
              See Our Case Studies
            </Link>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
