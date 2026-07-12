"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer: "Pricing depends on the project scope, design complexity, and requested features. A custom business website starts at a different tier than a school management platform or custom enterprise portal. Contact us to discuss your goals and receive a detailed, transparent proposal.",
  },
  {
    question: "How long does development take?",
    answer: "A standard landing page or simple brand website takes about 2 to 3 weeks. Complex custom applications, school portals, or finance dashboards typically take 4 to 8 weeks, including research, design, coding, testing, and deployment phases.",
  },
  {
    question: "Do you redesign outdated websites?",
    answer: "Yes. We specialize in modernize outdated, slow websites into high-converting, lightning-fast digital assets. We rewrite the backend, redesign the user interface, optimize page structures for SEO, and preserve all your existing search ranks.",
  },
  {
    question: "Do you offer maintenance and long-term support?",
    answer: "Absolutely. We offer complete support packages including daily backups, core package updates, routine security monitoring, minor feature modifications, and ongoing Lighthouse page speed tuning to keep your systems running smoothly 24/7.",
  },
  {
    question: "Can payments be made in installments?",
    answer: "Yes, we support structured installment payments for custom development contracts. Usually, we structure payments as: 50% deposit to initiate the planning/design phase, and 50% upon deployment approval. For larger contracts, we can break it down into milestones.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">FAQ</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          Frequently Answered Questions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="glass-panel rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-foreground/20"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left font-semibold text-foreground text-sm sm:text-base hover:text-primary transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className="ml-4 shrink-0 rounded-full bg-muted p-1 text-muted-foreground">
                  {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
