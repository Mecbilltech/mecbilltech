import ClientLayout from "@/components/ClientLayout";
import Blog from "@/components/Blog";
import { Mail, Send } from "lucide-react";

export const metadata = {
  title: "Insights & Articles | MecbillTech Blog",
  description: "Web engineering tips, conversion rate optimization hacks, SEO strategy, and workflow automation guides from Alade Odunayo and the MecbillTech team.",
  keywords: ["MecbillTech blog", "React developers tips", "technical SEO guide", "Next.js speed optimization"],
};

export default function BlogPage() {
  return (
    <ClientLayout>
      <div className="max-w-5xl mx-auto py-8 md:py-16 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
            MecbillTech Blog
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1]">
            Insights on Code, SEO, and Conversion Strategy.
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We write about custom web development, site speed optimizations, content layout strategy, and workflow automations to help you scale your operations.
          </p>
        </div>

        {/* Blog Component */}
        <div className="border-t border-border/40 pt-16">
          <Blog />
        </div>

        {/* Newsletter Callout Banner */}
        <div className="glass-panel p-8 rounded-3xl border border-primary/20 bg-primary/5 flex flex-col md:flex-row justify-between items-center gap-8 max-w-4xl mx-auto mt-16">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2 justify-center md:justify-start">
              <Mail className="size-5 text-primary" />
              Subscribe to the Growth Letter
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm">
              We send practical tips on improving website conversions, load speeds, and search rankings. No spam, unsubscribe anytime.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <form className="relative flex items-center max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full md:w-80 rounded-full border border-border bg-background pl-4 pr-12 py-2.5 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/95 transition-all"
              >
                <Send className="size-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
