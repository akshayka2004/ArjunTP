import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollProgressBar, CustomCursor } from "@/components/DynamicElements";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FAFAF9] text-[#0D1117] selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* Dynamic Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Dynamic Desktop Cursor Follower */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Semantic Content Area */}
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
