import ClientLayout from "@/components/ClientLayout";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Alade Odunayo | MecbillTech Founder & Web Architect",
  description: "Learn about Alade Odunayo, founder of MecbillTech. Software developer and content specialist building high-performance web systems with a marketing-first mindset.",
  keywords: ["Alade Odunayo", "MecbillTech founder", "web developer Ondo", "conversion rates developer"],
};

export default function AboutPage() {
  return (
    <ClientLayout>
      <div className="max-w-5xl mx-auto py-8 md:py-16 space-y-20">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="md:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/20 rounded-full px-3 py-1">
              <Star className="size-3 text-primary animate-pulse" />
              The Founder's Story
            </span>
            <h1 className="text-4xl font-extrabold text-foreground tracking-tight sm:text-5xl md:leading-[1.15]">
              Meet Alade Odunayo: The Developer with a Marketer's Mindset.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              I am Alade Odunayo, the founder and lead architect behind MecbillTech. My journey in technology didn't start with lines of code; it started with writing. For years, I produced content, optimized articles for SEO, and studied how users behave on websites.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              When I transitioned into full-stack web development, I realized a massive gap: most agencies build websites that look neat but fail to sell. They focus purely on visual bells and whistles, ignoring SEO structure, content clarity, and load speeds.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-semibold text-foreground">
              MecbillTech was born out of a mission to fix this. We build custom Next.js & React systems that combine technical engineering with audience psychology to turn visitors into clients.
            </p>
            
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/95 shadow-md"
              >
                Let's Build Together
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="md:col-span-5 relative flex justify-center">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-xl bg-muted/20 hover:border-primary/20 transition-all duration-300">
              <Image
                src="/about2.jpg"
                alt="Alade Odunayo working on code"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-border p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <span className="block text-xs font-bold text-foreground">Alade Odunayo</span>
                  <span className="block text-[10px] text-muted-foreground font-mono">Founder, MecbillTech</span>
                </div>
                <span className="size-2 rounded-full bg-green-500 animate-ping" />
              </div>
            </div>
          </div>
        </div>

        {/* Story Tab Component */}
        <div className="border-t border-border/40 pt-16">
          <About />
        </div>

        {/* Tech Stack Component */}
        <div className="border-t border-border/40 pt-16">
          <TechStack />
        </div>
      </div>
    </ClientLayout>
  );
}
