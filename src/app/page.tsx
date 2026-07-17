"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SocialSidebar } from "@/components/SocialSidebar";

const Preloader = dynamic(() => import("@/components/Preloader"), { ssr: false });
const FloatingCode3D = dynamic(() => import("@/components/canvas/FloatingCode3D").then(m => ({ default: m.FloatingCode3D })), { ssr: false });

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <Preloader onComplete={() => setReady(true)} />}
      <FloatingCode3D />
      <SocialSidebar />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
