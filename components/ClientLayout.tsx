"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SocialDock from "@/components/SocialDock";
import CommandPalette from "@/components/CommandPalette";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground grid-bg">
      <ScrollToTop />
      <SocialDock />
      <CommandPalette />

      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

