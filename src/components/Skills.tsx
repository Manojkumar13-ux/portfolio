"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-cat", { y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".skill-cat", start: "top 90%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="bg-white min-h-screen w-full py-20 md:py-32 font-inter px-6 md:px-12 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e] mb-4">Tech Stack</p>
          <h2 className="text-[10vw] md:text-[5vw] font-black uppercase leading-[0.85] tracking-tighter text-[#1a1a1a]">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-cat p-5 rounded-2xl border border-black/5 bg-black/[0.02] hover:border-[#f03e3e]/20 transition-colors duration-300">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#f03e3e] mb-3">{category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span key={skill} className="text-[11px] font-bold text-[#1a1a1a]/80 px-2.5 py-1 rounded-full bg-black/[0.03] border border-black/10 hover:text-[#f03e3e] hover:border-[#f03e3e]/30 transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
