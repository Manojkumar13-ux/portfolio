"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certifications } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cert-title", { y: 60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".cert-title", start: "top 85%" } });
      gsap.from(".cert-card", { y: 50, opacity: 0, duration: 0.6, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".cert-card", start: "top 90%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="bg-white min-h-screen w-full py-20 md:py-32 font-inter overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.4) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12">
        <div className="cert-title mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e] mb-4">Credentials</p>
          <h2 className="text-[10vw] md:text-[5.5vw] font-black uppercase leading-[0.85] tracking-tighter text-[#1a1a1a]">Certifications</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card group p-6 md:p-8 rounded-2xl border border-black/5 bg-black/[0.02] hover:border-[#f03e3e]/20 hover:bg-white transition-all duration-300 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#f03e3e]/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-black text-[#f03e3e]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1a1a1a]/30">{cert.date}</span>
              </div>
              <h3 className="text-base md:text-lg font-black text-[#1a1a1a] tracking-tight leading-snug">{cert.title}</h3>
              <p className="text-xs font-bold text-[#f03e3e]">{cert.issuer}</p>
              <div className="flex items-center gap-1.5 mt-auto pt-2 text-[10px] font-bold text-[#1a1a1a]/30 uppercase tracking-widest group-hover:text-[#f03e3e] transition-colors">
                <span>View Certificate</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
