"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  ArrowDown,
  ArrowUpRight,
  Terminal,
  Sparkles,
  MapPin,
  CheckCircle2,
  Code2,
  Database,
  Cpu,
} from "lucide-react";

export default function Hero() {
  const { profile, metrics } = portfolioData;
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#E2E5E9]/60"
    >
      {/* Background Editorial Grid */}
      <div className="absolute inset-0 bg-grid-editorial pointer-events-none opacity-60" />

      {/* Subtle Radial Ambient Gradient (Cobalt & Lavender) */}
      <div className="absolute top-1/4 right-5 w-[420px] h-[420px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-[360px] h-[360px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Hero Typography & Call-To-Action (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow Label with Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E5E9] shadow-[0_1px_3px_rgba(0,0,0,0.03)] mb-6 text-xs font-mono font-medium text-[#57606A] transition-all hover:border-[#1D4ED8]/40 hover:shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#1D4ED8] font-semibold">{profile.eyebrow}</span>
            </div>

            {/* Author Intro byline */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-sm font-medium uppercase tracking-wider text-[#57606A] font-mono">
                Hello, I&apos;m
              </span>
              <span className="text-sm font-bold text-[#0D1117] tracking-tight">
                {profile.name}
              </span>
              <span className="text-[#8C959F] text-xs">•</span>
              <span className="text-xs text-[#57606A] flex items-center gap-1 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#1D4ED8]" />
                {profile.location}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-[-0.03em] text-[#0D1117] leading-[1.08] mb-6">
              I build software that turns{" "}
              <span className="text-[#1D4ED8] underline decoration-[#1D4ED8]/25 decoration-wavy underline-offset-8">
                ideas
              </span>{" "}
              into useful solutions.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#57606A] max-w-2xl font-normal leading-relaxed mb-8">
              {profile.heroBio}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0D1117] text-white font-medium text-sm hover:bg-[#1D4ED8] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E2E5E9] text-[#0D1117] font-medium text-sm hover:border-[#1D4ED8] hover:text-[#1D4ED8] hover:bg-[#EFF6FF]/40 transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Supported, Verified Statistics Banner */}
            <div className="w-full grid grid-cols-3 gap-4 pt-6 border-t border-[#E2E5E9]/80 max-w-xl">
              <div className="flex flex-col group">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#0D1117] tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                  {metrics.graduationYear}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#57606A] mt-0.5">
                  Expected Grad
                </span>
              </div>
              <div className="flex flex-col border-l border-[#E2E5E9] pl-4 group">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#1D4ED8] tracking-tight">
                  {metrics.internships}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#57606A] mt-0.5">
                  Internships
                </span>
              </div>
              <div className="flex flex-col border-l border-[#E2E5E9] pl-4 group">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#0D1117] tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                  {metrics.certifications}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#57606A] mt-0.5">
                  Certifications
                </span>
              </div>
            </div>

          </div>

          {/* Editorial Visual Card Featuring Arjun's Real Photo (Cols 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[370px] bg-white rounded-3xl border border-[#E2E5E9] p-5 shadow-[0_12px_40px_-6px_rgba(15,23,42,0.08)] relative group hover:border-[#1D4ED8]/40 transition-all duration-300">
              
              {/* Window Controls Decorator */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E5E9]/80 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                </div>
                <span className="font-mono text-[10px] text-[#8C959F] uppercase tracking-widest flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-[#1D4ED8]" />
                  arjun.profile.tsx
                </span>
              </div>

              {/* Framed Photo Container with Floating Badges */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-[#E2E5E9] aspect-[4/4.6] mb-4 group/photo shadow-sm">
                
                {/* Real User Photo */}
                <img
                  src="/arjun-profile.jpg"
                  alt="Arjun T P - MCA Student and Software Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/photo:scale-105"
                  onLoad={() => setPhotoLoaded(true)}
                />

                {/* Subtle Inner Gradient Overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Role Pill on Top-Right */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E5E9] shadow-md flex items-center gap-1.5 text-[11px] font-medium text-[#0D1117] transition-transform duration-200 hover:scale-105">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open to Internships</span>
                </div>

                {/* Name & Academic Status on Bottom */}
                <div className="absolute bottom-3 left-3 right-3 text-white p-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-display font-bold text-lg text-white leading-tight drop-shadow-sm">
                        {profile.name}
                      </h2>
                      <p className="font-mono text-xs text-blue-200">
                        Saintgits CE · MCA &apos;27
                      </p>
                    </div>
                    <span className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-display font-bold text-xs text-white">
                      {profile.initials}
                    </span>
                  </div>
                </div>

              </div>

              {/* Quick Tech Highlights Chips */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2 rounded-xl bg-[#FAFAF9] border border-[#E2E5E9] hover:border-[#1D4ED8]/30 transition-colors flex flex-col items-center gap-0.5">
                  <span className="text-[10px] text-[#8C959F] uppercase">Core</span>
                  <span className="font-bold text-[#0D1117]">Python/Java</span>
                </div>
                <div className="p-2 rounded-xl bg-[#FAFAF9] border border-[#E2E5E9] hover:border-[#1D4ED8]/30 transition-colors flex flex-col items-center gap-0.5">
                  <span className="text-[10px] text-[#8C959F] uppercase">Data</span>
                  <span className="font-bold text-[#1D4ED8]">MySQL</span>
                </div>
                <div className="p-2 rounded-xl bg-[#FAFAF9] border border-[#E2E5E9] hover:border-[#1D4ED8]/30 transition-colors flex flex-col items-center gap-0.5">
                  <span className="text-[10px] text-[#8C959F] uppercase">Focus</span>
                  <span className="font-bold text-[#0D1117]">AI &amp; ML</span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-3.5 pt-3 border-t border-[#E2E5E9]/70 flex items-center justify-between text-[11px] text-[#57606A]">
                <span className="flex items-center gap-1.5 text-[#1D4ED8] font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  Curated Developer Portfolio
                </span>
                <span className="font-mono text-[#8C959F]">Kottayam, IN</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
