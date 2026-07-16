"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, Send } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/Icons";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="MecbillTech Logo"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="font-bold tracking-tight text-foreground text-lg">
                Mecbill<span className="text-primary font-extrabold">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              We build custom, hand-crafted Next.js & React websites with a marketer's mindset. Optimized for conversions, built for speed, and baked with technical SEO.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              <a href="https://github.com/mecbilltech" target="_blank" rel="noopener" className="text-muted-foreground hover:text-foreground">
                <Github className="size-5" />
              </a>
              <a href="https://linkedin.com/in/odunayo-alade" target="_blank" rel="noopener" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="size-5" />
              </a>
              <a href="https://twitter.com/mecbilltech" target="_blank" rel="noopener" className="text-muted-foreground hover:text-foreground">
                <Twitter className="size-5" />
              </a>
              <a href="https://wa.me/2348105219630" target="_blank" rel="noopener" className="text-muted-foreground hover:text-foreground">
                <MessageCircle className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Services</a>
              </li>
              <li>
                <a href="/project" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Projects</a>
              </li>
             
              <li>
                <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Custom Web Dev</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Web Apps</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Website Redesign</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Search Optimization</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Conversion Copywriting</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">Website Maintenance</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">API Development</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground leading-normal mb-4">
              Subscribe to get latest design tips, web development insights, and growth advice.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-full border border-border bg-background pl-4 pr-12 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-0"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="absolute right-1 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
              >
                <Send className="size-3.5" />
              </button>
            </form>
            {status === "success" && (
              <p className="text-xs text-green-500 mt-2">Successfully subscribed!</p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-500 mt-2">Subscription failed, please try again.</p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col gap-4 items-center justify-between sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MecbillTech. Designed & Built with Excellence.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
