"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Initial theme set
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(currentTheme);

    const handleThemeChange = () => {
      const updatedTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setTheme(updatedTheme);
    };

    window.addEventListener("theme-change", handleThemeChange);

    const handleScroll = () => {
      // Nav style on scroll
      setScrolled(window.scrollY > 20);

      // Active section highlight
      const sections = navLinks.map((link) => link.href.slice(1));
      let currentActive = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = section;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("theme-change", handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 md:px-8">
        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`glass-nav flex w-full max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "py-3 shadow-sm" : "py-4"
          }`}
        >
          {/* Logo */}
          <Link href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="MecbillTech Logo"
              width={34}
              height={34}
              className="rounded-full shadow-sm"
              priority
            />
            <span className="font-bold tracking-tight text-foreground text-base md:text-lg">
              Mecbill<span className="text-primary font-extrabold">Tech</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-primary dark:text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 z-[-1] rounded-full bg-primary/10 dark:bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4 text-blue-600" />}
            </button>

            {/* CTA Book Free Consultation */}
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden sm:inline-flex rounded-full px-5 py-2 font-semibold shadow-md bg-primary hover:bg-primary/95 text-white"
            >
              <Sparkles className="size-3.5 mr-1" />
              Book a Consultation
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground xl:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-background/95 backdrop-blur-xl px-8 py-24 xl:hidden"
          >
            {/* Navigation Links List */}
            <div className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-xl font-bold tracking-tight transition-colors ${
                    activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Actions Footer */}
            <div className="flex flex-col gap-4 border-t border-border/50 pt-8">
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full rounded-full font-bold shadow-md text-white"
              >
                Book a Free Consultation
                <ArrowRight className="size-4 ml-2" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} MecbillTech. All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
