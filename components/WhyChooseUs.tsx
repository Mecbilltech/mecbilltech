"use client";

import { motion } from "framer-motion";
import { X, Check, ShieldCheck, Flame, Compass } from "lucide-react";

const othersPoints = [
  "Bloated pre-built templates (Elementor/Divi)",
  "Slow page speeds and high visitor bounce rates",
  "Copywriting that feels generic and robotic",
  "Poor communication and post-launch ghosting",
  "No SEO consideration during development",
  "Transactional relation (fix it yourself)",
];

const mecbillPoints = [
  { text: "Hand-crafted bespoke architectures", note: "Optimized specifically for conversions" },
  { text: "Blazing-fast page speeds (Next.js)", note: "Built for instant mobile & desktop loading" },
  { text: "Marketing-first content & layout", note: "Designed to drive user action and trust" },
  { text: "Transparent, direct communication", note: "Collaborative Slack/WhatsApp channels" },
  { text: "Day-one SEO foundation built-in", note: "Schema markups, technical SEO compliance" },
  { text: "Long-term partnership & optimization", note: "Ongoing support and performance audits" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-12 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Comparison</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          Why Ambitious Businesses Choose MecbillTech.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Others Card */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass-panel rounded-2xl border border-border bg-card p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <X className="size-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Typical Agencies</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              Many agencies rely on quick, bloated templates that load slowly, fail to communicate, and lack a strategy aligned with your business growth.
            </p>
            <ul className="space-y-4">
              {othersPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground/80">
                  <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border mt-8 pt-4 flex gap-2 items-center text-xs text-muted-foreground font-medium">
            <Flame className="size-4" />
            <span>Fragile Digital Assets</span>
          </div>
        </motion.div>

        {/* MecbillTech Card */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-2xl border border-primary/20 bg-primary/5 p-8 flex flex-col justify-between overflow-hidden"
        >


          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Check className="size-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">MecbillTech</h3>
              </div>
              <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Recommended</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              We build custom, hand-crafted web solutions engineered to convert traffic into clients, optimized for speed, and backed by a marketing mindset.
            </p>
            <ul className="space-y-4">
              {mecbillPoints.map((point) => (
                <li key={point.text} className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <Check className="size-4 text-primary shrink-0 mt-1" />
                  <div>
                    <span>{point.text}</span>
                    <span className="block text-[10px] text-muted-foreground font-mono">{point.note}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-primary/20 mt-8 pt-4 flex gap-2 items-center text-xs text-primary font-bold">
            <ShieldCheck className="size-4" />
            <span>High-Performing Web Assets</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
