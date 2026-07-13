import ClientLayout from "@/components/ClientLayout";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact Alade Odunayo | MecbillTech Web Studio Inquiry",
  description: "Get in touch with MecbillTech. Request a custom homepage proposal preview or schedule a direct consultation for your custom Next.js/React web project.",
  keywords: ["contact MecbillTech", "hire Next.js developer", "request website audit", "Ondo web design studio"],
};

export default function ContactPage() {
  return (
    <ClientLayout>
      <div className="max-w-5xl mx-auto py-8 md:py-16 space-y-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
            Start a Conversation
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1]">
            Let’s Build Something That Converts.
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Ready to scale your business with custom web systems? Select the Inquiry form to request a consultation, or request a customized Homepage Proposal mockup structure.
          </p>
        </div>

        {/* Contact Component containing the form */}
        <div className="border-t border-border/40 pt-16">
          <Contact />
        </div>

        {/* FAQ Section */}
        <div className="border-t border-border/40 pt-16">
          <FAQ />
        </div>
      </div>
    </ClientLayout>
  );
}
