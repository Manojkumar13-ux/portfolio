"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo, socialLinks } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", { y: 60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".contact-title", start: "top 85%" } });
      gsap.from(".contact-form-elem", { y: 40, opacity: 0, duration: 0.5, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ".contact-form-elem", start: "top 90%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="bg-white min-h-screen w-full py-20 md:py-32 font-inter overflow-hidden flex flex-col justify-center">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
        <div className="contact-title mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e] mb-4">Get in Touch</p>
          <h2 className="text-[10vw] md:text-[5.5vw] font-black uppercase leading-[0.85] tracking-tighter text-[#1a1a1a]">Contact</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="space-y-8">
            <p className="text-sm text-[#1a1a1a]/80 max-w-sm font-medium leading-relaxed">Have a question, want to collaborate, or just want to say hi? Reach out — I'm always open to new opportunities.</p>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-widest uppercase text-[#1a1a1a]/20 mb-1">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-[#1a1a1a] hover:text-[#f03e3e] transition-colors">{personalInfo.email}</a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-widest uppercase text-[#1a1a1a]/20 mb-1">Location</span>
                <p className="text-sm font-bold text-[#1a1a1a]">{personalInfo.location}</p>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-widest uppercase text-[#1a1a1a]/20 mb-1">Social</span>
                <div className="flex gap-4 text-sm font-bold text-[#1a1a1a]">
                  {socialLinks.filter(l => ["LinkedIn", "GitHub"].includes(l.name)).map(l => (
                    <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#f03e3e] transition-colors">{l.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form-elem space-y-6">
            <div className="space-y-1">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="contact-form-elem w-full bg-transparent border-b border-black/20 py-2 text-sm font-medium text-[#1a1a1a] outline-none transition-all duration-300 focus:border-[#f03e3e] placeholder:text-[#1a1a1a]/20"
              />
            </div>
            <div className="space-y-1">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="contact-form-elem w-full bg-transparent border-b border-black/20 py-2 text-sm font-medium text-[#1a1a1a] outline-none transition-all duration-300 focus:border-[#f03e3e] placeholder:text-[#1a1a1a]/20"
              />
            </div>
            <div className="space-y-1">
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                className="contact-form-elem w-full bg-transparent border-b border-black/20 py-2 text-sm font-medium text-[#1a1a1a] outline-none transition-all duration-300 focus:border-[#f03e3e] placeholder:text-[#1a1a1a]/20 resize-none"
              />
            </div>
            <button
              type="submit"
              className="contact-form-elem w-full py-4 rounded-full bg-[#f03e3e] text-white font-black uppercase tracking-widest text-xs transition-all duration-300 hover:shadow-[0_0_40px_rgba(240,62,62,0.35)] active:scale-[0.97]"
            >
              {submitted ? "✓ Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
