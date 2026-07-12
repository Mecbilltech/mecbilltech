"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    // Progress counter simulation
    const duration = 1500; // 1.5s loader
    const intervalTime = 15;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          // Unlock scroll
          document.body.style.overflow = "";
        }, 300);
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo placeholder/text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="size-4 rounded-full bg-blue-600 animate-pulse shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
              <span className="text-xl font-bold tracking-widest text-zinc-100 uppercase">
                MecbillTech
              </span>
            </motion.div>

            {/* Percentage indicator */}
            <div className="overflow-hidden">
              <motion.h2 
                className="text-7xl font-light tracking-tighter tabular-nums text-zinc-200 md:text-8xl"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {progress}%
              </motion.h2>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.2 }}
              className="text-xs uppercase tracking-[0.25em] text-zinc-400"
            >
              Engineering Digital Experiences
            </motion.p>
          </div>

          {/* Bottom progress bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-zinc-800 w-full">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
