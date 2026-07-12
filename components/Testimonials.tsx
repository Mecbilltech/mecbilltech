"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  avatarBg: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ezenwa K.",
    role: "Managing Director",
    company: "Cuisine Embassy Restaurant",
    rating: 5,
    content:
      "MecbillTech completely automated our restaurant reservation and ordering flow. Our staff no longer struggles with incoming order logs, and clients love the custom web interface. Our reservations increased by 120% in the first two months!",
    avatarBg: "bg-amber-600 text-white",
  },
  {
    name: "Sandra O.",
    role: "Founder",
    company: "Jamajka Braids Salon",
    rating: 5,
    content:
      "Working with MecbillTech was an absolute game changer. They built a custom scheduler that integrates beautifully with our calendars. Our clients find booking their hair appointments simple, and our calendar conflicts have completely vanished.",
    avatarBg: "bg-purple-600 text-white",
  },
  {
    name: "Dr. Adebayo A.",
    role: "Principal Administrator",
    company: "Standard Academy Group",
    rating: 5,
    content:
      "We needed a highly secure school portal to manage student attendance, payment records, and grades. MecbillTech delivered a systems structure that exceeded expectations. Highly professional team, responsive, and prompt.",
    avatarBg: "bg-blue-600 text-white",
  },
  {
    name: "Mark J.",
    role: "Technical Partner",
    company: "Fortress Finance Corp",
    rating: 5,
    content:
      "MecbillTech designed our enterprise financial dashboard from scratch. Blazing fast load speeds, excellent TypeScript implementations, and top-tier security standards. Highly recommended for any complex product engineering.",
    avatarBg: "bg-emerald-600 text-white",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative">

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary mb-3">Testimonials</h2>
        <p className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          Loved by Startups and Enterprises Alike.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {testimonials.map(
            (t, i) =>
              i === index && (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel relative rounded-2xl border border-border bg-card p-8 md:p-12"
                >
                  {/* Quote icon */}
                  <Quote className="absolute right-8 top-8 size-12 text-border pointer-events-none" />

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="size-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote content */}
                  <p className="text-base text-muted-foreground leading-relaxed mb-8">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  {/* Author Meta */}
                  <div className="flex items-center gap-4">
                    <div className={`size-12 rounded-full flex items-center justify-center font-bold text-sm ${t.avatarBg}`}>
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{t.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {t.role}, <span className="text-primary font-semibold">{t.company}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Carousel buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={handlePrev}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-background hover:bg-muted text-foreground transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={handleNext}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-background hover:bg-muted text-foreground transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
