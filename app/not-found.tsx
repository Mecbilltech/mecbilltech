"use client";

import Link from "next/link";
import { Compass, AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white p-4">
      {/* Background aurora glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      {/* Main glass panel content */}
      <div className="glass-panel w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950/60 p-8 md:p-10 text-center shadow-2xl relative z-10">
        <div className="size-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="size-8 text-primary animate-pulse" />
        </div>

        <h1 className="text-7xl font-black text-primary tracking-tighter mb-2">404</h1>
        <h2 className="text-xl font-bold text-foreground mb-4">Route Not Found</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
          The requested system pathway could not be resolved. This directory either does not exist or has been restructured.
        </p>

        {/* Action button */}
        <Link
          href="/"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
        >
          <ArrowLeft className="size-4" />
          <span>Return to Terminal (Home)</span>
        </Link>
      </div>

      {/* Footer watermark */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-zinc-500">
        <Compass className="size-3.5" />
        <span>MecbillTech Diagnostics</span>
      </div>
    </div>
  );
}
