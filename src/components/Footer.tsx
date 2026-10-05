"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[#E2E5E9] bg-[#FAFAF9] text-[#57606A] text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Brand & Byline */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-sm text-[#0D1117] tracking-tight">
              {profile.initials}/
            </span>
            <span className="font-semibold text-[#0D1117]">
              {profile.name}
            </span>
          </div>
          <p className="font-mono text-[11px] text-[#8C959F]">
            MCA Student · Software Developer · AI/ML Enthusiast
          </p>
        </div>

        {/* Center / Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-[#8C959F]">
          <span>© 2026 {profile.name}</span>
          <span className="hidden sm:inline">•</span>
          <span>Saintgits College of Engineering</span>
          <span className="hidden sm:inline">•</span>
          <span>Kerala, India</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2E5E9] text-[#0D1117] hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors shadow-sm self-start md:self-auto"
          aria-label="Back to top"
        >
          <span className="font-mono text-[11px]">Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
