"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Sparkles, MessageSquare, Download, Moon, Sun, ArrowRight } from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: any;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle open/close on cmd+k / ctrl+k
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle outside click to close
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
      // Focus input
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setIsOpen(false);
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    // Emit custom event to let other components know
    window.dispatchEvent(new Event("theme-change"));
  };

  const items: CommandItem[] = [
    // Navigation
    { id: "nav-home", title: "Go to Home", category: "Navigation", icon: Compass, action: () => scrollTo("home") },
    { id: "nav-about", title: "Go to About Section", category: "Navigation", icon: Compass, action: () => scrollTo("about") },
    { id: "nav-services", title: "Go to Services", category: "Navigation", icon: Compass, action: () => scrollTo("services") },
    { id: "nav-projects", title: "Go to Featured Projects", category: "Navigation", icon: Compass, action: () => scrollTo("projects") },
    { id: "nav-process", title: "Go to Process Timeline", category: "Navigation", icon: Compass, action: () => scrollTo("process") },
    { id: "nav-tech", title: "Go to Tech Stack Wall", category: "Navigation", icon: Compass, action: () => scrollTo("tech-stack") },
    { id: "nav-testimonials", title: "Go to Testimonials", category: "Navigation", icon: Compass, action: () => scrollTo("testimonials") },
    { id: "nav-faq", title: "Go to FAQ", category: "Navigation", icon: Compass, action: () => scrollTo("faq") },
    { id: "nav-blog", title: "Go to Blog & Articles", category: "Navigation", icon: Compass, action: () => scrollTo("blog") },
    { id: "nav-contact", title: "Go to Contact Form", category: "Navigation", icon: Compass, action: () => scrollTo("contact") },
    
    // Actions
    { id: "act-theme", title: "Toggle Light/Dark Theme", category: "Actions", icon: Moon, action: toggleTheme },
    { id: "act-consult", title: "Book a Free Consultation", category: "Actions", icon: Sparkles, action: () => scrollTo("contact") },
    { id: "act-preview", title: "Request a Homepage Preview", category: "Actions", icon: Sparkles, action: () => scrollTo("preview-form") },
    {
      id: "act-resume",
      title: "Download Resume",
      category: "Actions",
      icon: Download,
      action: () => {
        setIsOpen(false);
        alert("Resume download triggered (Mock file)!");
      },
    },
    
    // Communication
    {
      id: "com-whatsapp",
      title: "Chat on WhatsApp",
      category: "Contact",
      icon: MessageSquare,
      action: () => {
        setIsOpen(false);
        window.open("https://wa.me/2348123456789", "_blank");
      },
    },
    {
      id: "com-linkedin",
      title: "View LinkedIn Profile",
      category: "Contact",
      icon: MessageSquare,
      action: () => {
        setIsOpen(false);
        window.open("https://linkedin.com/in/mecbilltech", "_blank");
      },
    },
    {
      id: "com-email",
      title: "Copy Business Email Address",
      category: "Contact",
      icon: MessageSquare,
      action: () => {
        setIsOpen(false);
        navigator.clipboard.writeText("info@mecbilltech.com");
        alert("Email copied to clipboard!");
      },
    },
  ];

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Reset index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Keyboard Hint Button - Fixed at bottom left */}
      <div className="fixed bottom-6 left-6 z-[80] hidden lg:block">
        <button
          onClick={() => setIsOpen(true)}
          className="glass-panel flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-muted-foreground shadow-lg transition-all hover:bg-primary/20 dark:bg-black/20"
        >
          <Search className="size-3.5" />
          <span>Press</span>
          <kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono shadow-sm">Ctrl</kbd>
          <span>+</span>
          <kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono shadow-sm">K</kbd>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-start justify-center pt-[15vh]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Dialog Container */}
            <motion.div
              ref={containerRef}
              initial={{ scale: 0.95, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onKeyDown={handleKeyDown}
              className="glass-panel w-full max-w-lg overflow-hidden rounded-2xl bg-white/80 shadow-2xl dark:bg-zinc-950/80 md:max-w-xl"
            >
              {/* Search input wrapper */}
              <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3">
                <Search className="size-5 text-muted-foreground" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground hover:bg-muted-foreground/10"
                >
                  ESC
                </button>
              </div>

              {/* Items List */}
              <div className="max-h-[350px] overflow-y-auto p-2 scrollbar-none">
                {filteredItems.length > 0 ? (
                  (() => {
                    let lastCategory = "";
                    return filteredItems.map((item, index) => {
                      const Icon = item.icon;
                      const showCategory = item.category !== lastCategory;
                      lastCategory = item.category;

                      return (
                        <div key={item.id}>
                          {showCategory && (
                            <h3 className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                              {item.category}
                            </h3>
                          )}
                          <div
                            onClick={item.action}
                            onMouseEnter={() => setSelectedIndex(index)}
                            className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                              index === selectedIndex
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground hover:bg-muted"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="size-4 shrink-0" />
                              <span>{item.title}</span>
                            </div>
                            {index === selectedIndex && (
                              <ArrowRight className="size-3.5" />
                            )}
                          </div>
                        </div>
                      );
                    });
                  })()
                ) : (
                  <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                    No commands found matching "{searchQuery}"
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border/50 bg-muted/40 px-4 py-2 text-[10px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span>Use</span>
                  <kbd className="rounded border px-1 bg-background font-mono">↑↓</kbd>
                  <span>to navigate,</span>
                  <kbd className="rounded border px-1 bg-background font-mono">Enter</kbd>
                  <span>to select</span>
                </div>
                <div>MecbillTech Command Palette</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
