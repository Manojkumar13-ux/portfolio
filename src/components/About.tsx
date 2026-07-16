"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about, personalInfo } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const tags = ["Java", "React", "Node.js", "TypeScript", "MongoDB", "Docker"];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text-line", { y: -60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".about-text-line", start: "top 85%" } });
      gsap.from(".about-paragraph span", { opacity: 0.15, stagger: 0.03, scrollTrigger: { trigger: ".about-paragraph", start: "top 85%", end: "bottom 50%", scrub: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-white min-h-screen w-full relative flex flex-col font-inter text-[#1a1a1a] px-6 md:px-12 py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[45vw] md:w-[35vw] h-[50vh] md:h-[70vh] overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-[#f03e3e]/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto flex flex-col h-full mt-8 md:mt-16">
        <div className="flex flex-col">
          <h1 className="about-text-line text-[clamp(36px,8vw,90px)] font-black leading-[0.85] tracking-[-0.04em] text-[#1a1a1a] m-0">
            About me
          </h1>
        </div>

        <div className="mt-8 md:mt-12 max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#f03e3e]/30 text-[#f03e3e] bg-[#f03e3e]/5">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl md:text-2xl font-black tracking-tight mb-4 text-[#1a1a1a]">
            Nice to meet you!
          </h2>
          <p className="about-paragraph text-xs md:text-sm font-medium leading-relaxed text-[#1a1a1a] max-w-lg">
            {about.introduction.split(" ").map((word, i) => (
              <span key={i} className="text-[#1a1a1a]/20">{word} </span>
            ))}
          </p>
          <p className="text-xs md:text-sm font-medium leading-relaxed text-[#1a1a1a]/70 mt-4 max-w-lg">
            {about.description}
          </p>
          <div className="flex gap-8 mt-8">
            {[["4+", "Projects"], ["150+", "LeetCode"], ["2025", "Graduate"]].map(([num, label]) => (
              <div key={label}>
                <p className="text-2xl font-black text-[#f03e3e] leading-none">{num}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 right-6 md:right-12 text-xl md:text-3xl font-cursive text-[#1a1a1a]/20">
        ~ {personalInfo.firstName}
      </div>
    </section>
  );
}
