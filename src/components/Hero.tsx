"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo, hero } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text-anim", { y: 60, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.5 });
      gsap.from(badgeRef.current, { y: -window.innerHeight, rotationZ: 15, duration: 2, ease: "elastic.out(1, 0.4)", delay: 0.3 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="bg-white min-h-screen w-full relative flex flex-col font-inter text-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(240,62,62,0.03) 0%, transparent 50%)" }} />

      <div className="relative flex-1 flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 z-10">
            <p className="hero-text-anim text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e]">{personalInfo.location}</p>
            <h1 ref={textRef} className="hero-text-anim text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#1a1a1a] leading-[1.1]">
              Hi, I'm{" "}
              <span className="text-[#f03e3e]">{personalInfo.firstName}</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a]/80">
{personalInfo.title}
              </span>
            </h1>
            <p className="hero-text-anim text-sm md:text-base text-[#1a1a1a]/80 max-w-md font-medium leading-relaxed">
              {hero.subheading}
            </p>
            <div className="hero-text-anim flex flex-wrap gap-3 pt-2">
              <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f03e3e] text-white font-black uppercase tracking-widest text-xs transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(240,62,62,0.35)] active:scale-95">
                View Projects
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a]/70 font-bold text-xs uppercase tracking-widest hover:border-[#f03e3e]/50 hover:text-[#f03e3e] transition-all duration-300">
                Contact Me
              </a>
            </div>
            <div className="hero-text-anim flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-bold text-[#1a1a1a]/30 uppercase tracking-widest pt-2">
              <span>150+ LeetCode</span>
              <span className="text-[#f03e3e]/30">·</span>
              <span>4 Projects</span>
              <span className="text-[#f03e3e]/30">·</span>
              <span>Java · React · Node</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div ref={badgeRef} className="relative flex flex-col items-center">
              <svg className="w-6 h-20 md:h-24 text-[#f03e3e]/60" viewBox="0 0 24 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0 C12 0, 4 8, 4 20 C4 32, 12 36, 12 36 C12 36, 20 32, 20 20 C20 8, 12 0, 12 0Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="10" y="36" width="4" height="8" rx="1" fill="currentColor" />
                <rect x="9" y="42" width="6" height="3" rx="1" fill="currentColor" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
              <div className="w-[280px] md:w-[320px] p-[15px] rounded-[15px] bg-white border-2 border-[#f03e3e]/20 shadow-[0_15px_35px_rgba(240,62,62,0.1)] flex flex-col origin-top" style={{ animation: "badgeSwing 3s ease-in-out infinite" }}>
                <style>{`@keyframes badgeSwing { 0%,100% { transform: rotate(0deg); } 25% { transform: rotate(1.5deg); } 75% { transform: rotate(-1.5deg); } }`}</style>
                <div className="bg-[#fcfcfc] rounded-[5px] p-5 md:p-6 pt-6 pb-5 flex flex-col border border-gray-200">
                  <div className="leading-[0.85] tracking-tighter text-[#111] font-black text-2xl mb-6">
                    SDE<br />PORTFOLIO
                  </div>
                  <div className="w-full flex justify-center mb-6">
                    <div className="w-[120px] h-[140px] bg-[#f03e3e]/10 rounded flex items-center justify-center">
                      <span className="text-4xl font-black text-[#f03e3e]">{personalInfo.firstName[0]}{personalInfo.lastName[0]}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 mt-auto">
                    <div className="flex items-end font-bold text-[10px]">
                      <span className="mr-2 tracking-wide uppercase text-black">NAME</span>
                      <div className="flex-1 border-b-2 border-dotted border-black mb-[2px]" />
                      <span className="font-cursive text-2xl leading-none text-black ml-2">{personalInfo.firstName} {personalInfo.lastName}</span>
                    </div>
                    <div className="flex items-end font-bold text-[10px]">
                      <span className="mr-2 tracking-wide uppercase text-black">ROLE</span>
                      <div className="flex-1 border-b-2 border-dotted border-black mb-[2px]" />
                      <span className="font-cursive text-2xl leading-none text-black ml-2">{hero.headline}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <a href="/about" className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a]/20 hover:text-[#f03e3e] transition-colors duration-300">Explore my work</a>
        <div className="w-px h-8 bg-gradient-to-b from-[#f03e3e]/40 to-transparent" />
      </div>
    </section>
  );
}
