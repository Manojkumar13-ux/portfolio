"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo, socialLinks } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-watermark", { y: 80, opacity: 0, duration: 1.5, ease: "power3.out" });
      gsap.from(".footer-content", { y: 60, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer id="footer" ref={sectionRef} className="w-full bg-[#111111] text-white font-inter overflow-hidden relative">
      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="footer-watermark select-none pointer-events-none text-center mb-16 md:mb-20">
          <span className="text-[clamp(60px,12vw,140px)] font-black leading-[0.85] tracking-[-0.04em] text-white/[0.03] block">
            MANOJ<br />KUMAR
          </span>
        </div>
        <div className="footer-content grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-1 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f03e3e]" />
              <span className="font-black text-lg tracking-tight text-white">MK.</span>
            </div>
            <p className="text-xs text-white/30 leading-relaxed font-medium max-w-xs">Full-stack developer crafting modern web experiences with clean code and thoughtful design.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/20 mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-bold text-white/40 hover:text-white transition-colors duration-300">
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/20 mb-6">Connect</h4>
            <div className="flex flex-col gap-2.5">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white/40 hover:text-white transition-colors duration-300">LinkedIn</a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white/40 hover:text-white transition-colors duration-300">GitHub</a>
              <a href={`mailto:${personalInfo.email}`} className="text-xs font-bold text-white/40 hover:text-white transition-colors duration-300">Email</a>
            </div>
          </div>
        </div>
        <div className="footer-content mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-white/15 tracking-wider uppercase">&copy; {year} {personalInfo.firstName} {personalInfo.lastName}. All rights reserved.</p>
          <p className="text-[10px] font-bold text-white/15 tracking-wider">Designed &amp; Built with <span className="text-[#f03e3e]">♥</span> by {personalInfo.firstName}</p>
        </div>
      </div>
    </footer>
  );
}
