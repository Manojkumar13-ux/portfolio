"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    void tl.to(".preloader-progress, .preloader-text", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.inOut",
    })
    .to(".preloader-col", {
      yPercent: -100,
      duration: 1.2,
      stagger: 0.08,
      ease: "expo.inOut",
    }, "-=0.2");

    return (): void => { void tl.kill(); };
  }, [onComplete]);

  return (
    <div ref={wrapperRef} className="fixed inset-0 z-[100000] pointer-events-auto">
      <div className="absolute inset-0 flex pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="preloader-col flex-1 h-full bg-white origin-top border-r border-b border-black/10 last:border-r-0" />
        ))}
      </div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-[#1a1a1a]">
        <div className="preloader-text flex items-center mb-8">
          <div className="relative">
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: "2px rgba(0,0,0,0.1)" }}>
              Manoj Kumar
            </h1>
            <h1 className="absolute top-0 left-0 w-full h-full text-4xl md:text-7xl font-black uppercase tracking-tighter text-[#1a1a1a]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", transition: "clip-path 0.2s ease-out" }}>
              Manoj Kumar
            </h1>
          </div>
          <div className="w-3 h-3 md:w-5 md:h-5 bg-[#f03e3e] rounded-full self-end mb-2 md:mb-3 ml-2" />
        </div>
        <div className="preloader-progress flex flex-col items-center gap-2">
          <div className="font-bold text-[10px] md:text-xs tracking-[0.4em] text-black/40 uppercase">Loading Experience</div>
          <div className="font-black text-sm md:text-base tracking-[0.2em] text-[#f03e3e]">100%</div>
        </div>
      </div>
    </div>
  );
}
