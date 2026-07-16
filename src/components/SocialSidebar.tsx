"use client";
import { Github, Linkedin, Code, FileDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const links = [
  { icon: Github, url: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, url: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Code, url: personalInfo.leetcode, label: "LeetCode" },
  { icon: FileDown, url: personalInfo.resumeUrl, label: "Resume" },
];

export function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 pl-4">
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border bg-surface card-shadow flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all group relative" aria-label={link.label}>
            <link.icon className="w-[15px] h-[15px]" />
            <span className="absolute left-12 px-2 py-1 rounded border border-border bg-surface text-[11px] text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mono">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
