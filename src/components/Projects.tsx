"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projectColors = ["#f03e3e", "#7c3aed", "#0ea5e9", "#f59e0b"];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const color = projectColors[index % projectColors.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <div
      className="project-card group cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
      <div
        className="relative w-full rounded-3xl border overflow-hidden transition-all duration-300 bg-white"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          border: hovered ? `1px solid ${color}50` : "1px solid rgba(0,0,0,0.06)",
          boxShadow: hovered ? `0 30px 80px rgba(0,0,0,0.15), 0 0 0 1px ${color}30` : "0 8px 32px rgba(0,0,0,0.08)",
        }}
      >
        <div className="w-full h-40 md:h-52 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
          <span className="text-5xl md:text-6xl font-black text-white/10">{project.title.charAt(0)}</span>
          <span className="absolute top-4 right-4 text-xs font-black px-3 py-1 rounded-full text-white" style={{ background: color }}>Full Stack</span>
        </div>
        <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
          <div className="shrink-0">
            <span className="text-6xl md:text-7xl font-black leading-none select-none transition-all duration-300" style={{ color: hovered ? color : "rgba(0,0,0,0.08)", WebkitTextStroke: hovered ? "0px" : `2px ${color}50` }}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border" style={{ color, borderColor: `${color}40`, background: `${color}10` }}>
                {index === 0 ? "AI" : index === 1 ? "Web App" : index === 2 ? "AI" : "Entertainment"}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] tracking-tight leading-none">{project.title}</h3>
            <p className="text-[#1a1a1a]/80 text-sm md:text-base leading-relaxed font-medium">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.slice(0, 4).map((t) => (
                <span key={t} className="text-xs font-bold text-[#1a1a1a]/70 px-3 py-1 rounded-full bg-black/5 border border-black/10">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors duration-300">
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="text-xs font-bold text-[#1a1a1a]/70">Live Demo</span>
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors duration-300">
                <Github className="w-3.5 h-3.5" />
                <span className="text-xs font-bold text-[#1a1a1a]/70">Source Code</span>
              </a>
            </div>
          </div>
          <div className="shrink-0 self-center">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300" style={{ borderColor: hovered ? color : "rgba(0,0,0,0.1)", background: hovered ? color : "transparent", transform: hovered ? "rotate(-45deg)" : "rotate(0deg)" }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", { y: 80, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".projects-title", start: "top 85%" } });
      gsap.from(".project-card", { y: 100, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".project-card", start: "top 90%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-white min-h-screen w-full py-20 md:py-32 font-inter overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12">
        <div className="projects-title mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e] mb-4">Selected Work</p>
          <h2 className="text-[10vw] md:text-[5.5vw] font-black uppercase leading-[0.85] tracking-tighter text-[#1a1a1a]">Projects</h2>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (<ProjectCard key={project.id} project={project} index={i} />))}
        </div>
      </div>
    </section>
  );
}
