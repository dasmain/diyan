"use client";

import { Footer } from "@/components/layout/Footer";
import { MobileNav, Navbar } from "@/components/layout/Navbar";
import { SpaceBackground } from "@/components/layout/SpaceBackground";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CurrentlyExploring } from "@/components/sections/CurrentlyExploring";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { OpenSource } from "@/components/sections/OpenSource";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { initSmoothScroll } from "@/lib/smoothScroll";
import { useEffect } from "react";

export default function App() {
  useEffect(() => initSmoothScroll(), []);

  return (
    <>
      <SpaceBackground />
      <Navbar />
      <MobileNav />
      <main className="relative z-10">
        <Hero />
        <About />
        <CurrentlyExploring />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
