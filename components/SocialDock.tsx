"use client";

import { MessageCircle, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/mecbilltech",
    icon: Github,
    label: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mecbilltech",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/2348123456789",
    icon: MessageCircle,
    label: "WhatsApp",
  },
  {
    name: "Email",
    url: "mailto:info@mecbilltech.com",
    icon: Mail,
    label: "Email",
  },
];

export default function SocialDock() {
  return (
    <div className="fixed left-5 top-1/2 z-[70] hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
      <div className="glass-panel flex flex-col gap-4 rounded-full px-2.5 py-5 border border-border">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group relative text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <Icon className="size-4" />
              <span className="absolute left-8 top-1/2 -translate-y-1/2 rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap">
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
      <div className="h-16 w-px bg-border/50" />
    </div>
  );
}


