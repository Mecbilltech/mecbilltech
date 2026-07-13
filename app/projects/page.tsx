import ClientLayout from "@/components/ClientLayout";
import Projects from "@/components/Projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Projects & Case Studies | MecbillTech Portfolio",
  description: "Browse custom websites, web applications, and enterprise systems built by MecbillTech. View detailed case studies and direct business results.",
  keywords: ["MecbillTech projects", "web development portfolio", "Next.js case studies", "custom SaaS dashboard"],
};

export default function ProjectsPage() {
  return (
    <ClientLayout>
      <div className="max-w-5xl mx-auto py-8 md:py-16 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
            Our Work
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1]">
            Real Code. Real Business Results.
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We don't build generic template sites. Explore our custom, hand-crafted Next.js platforms and web applications, complete with metrics and full case studies.
          </p>
        </div>

        {/* Projects Grid/List Component */}
        <div className="border-t border-border/40 pt-16">
          <Projects />
        </div>

        {/* Bottom CTA block */}
        <div className="border-t border-border/40 pt-16 text-center space-y-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight sm:text-3xl">
            Have a Specific Project in Mind?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Let's discuss how we can engineer a custom web asset tailored to your operational and conversion goals. Get a tailored project plan outline.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/95 shadow-md"
            >
              Start a Project
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
