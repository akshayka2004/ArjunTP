"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  GraduationCap,
  MapPin,
  Languages,
  Calendar,
  CheckCircle2,
  Code,
  Layers,
  ArrowRight,
  Terminal,
  BookOpen,
  Sparkles,
  Target,
} from "lucide-react";

export default function About() {
  const { profile } = portfolioData;
  const [activeTab, setActiveTab] = useState<"background" | "philosophy" | "academic">("background");

  const facts = [
    {
      icon: <GraduationCap className="w-4 h-4 text-[#1D4ED8]" />,
      label: "Institution",
      value: "Saintgits College of Engineering",
    },
    {
      icon: <Layers className="w-4 h-4 text-[#1D4ED8]" />,
      label: "Degree",
      value: "Master of Computer Applications (MCA)",
    },
    {
      icon: <Calendar className="w-4 h-4 text-[#1D4ED8]" />,
      label: "Timeline",
      value: "Expected 2027",
    },
    {
      icon: <MapPin className="w-4 h-4 text-[#1D4ED8]" />,
      label: "Location",
      value: "Kottayam, Kerala, India",
    },
    {
      icon: <Languages className="w-4 h-4 text-[#1D4ED8]" />,
      label: "Languages",
      value: profile.languages.join(" · "),
    },
  ];

  return (
    <section id="about" className="py-24 border-b border-[#E2E5E9]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#1D4ED8]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8] font-semibold">
              Background
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0D1117] tracking-tight">
                A little about me
              </h2>
              <p className="text-sm text-[#57606A] mt-2 max-w-xl">
                MCA student at Saintgits College of Engineering combining programming discipline with artificial intelligence and data systems.
              </p>
            </div>

            {/* Dynamic Interactive Tab Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-white border border-[#E2E5E9] shadow-sm self-start sm:self-auto">
              <button
                onClick={() => setActiveTab("background")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "background"
                    ? "bg-[#0D1117] text-white shadow-sm"
                    : "text-[#57606A] hover:text-[#0D1117]"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("philosophy")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "philosophy"
                    ? "bg-[#0D1117] text-white shadow-sm"
                    : "text-[#57606A] hover:text-[#0D1117]"
                }`}
              >
                Code Spec
              </button>
              <button
                onClick={() => setActiveTab("academic")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "academic"
                    ? "bg-[#0D1117] text-white shadow-sm"
                    : "text-[#57606A] hover:text-[#0D1117]"
                }`}
              >
                Focus Areas
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Narrative & Dynamic View (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {activeTab === "background" && (
              <div className="p-8 rounded-3xl bg-white border border-[#E2E5E9] shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)] relative overflow-hidden animate-in fade-in duration-200">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1D4ED8]" />
                
                {/* Author Avatar Thumbnail & Attribution */}
                <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-[#F1F5F9]">
                  <img
                    src="/arjun-profile.jpg"
                    alt="Arjun T P"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#1D4ED8]/30 shadow-sm"
                  />
                  <div>
                    <h3 className="font-display font-bold text-base text-[#0D1117]">
                      {profile.name}
                    </h3>
                    <p className="font-mono text-xs text-[#57606A]">
                      MCA Candidate · Saintgits College of Engineering
                    </p>
                  </div>
                </div>

                <p className="text-lg text-[#0D1117] font-medium leading-relaxed mb-5">
                  {profile.aboutBio}
                </p>
                
                <p className="text-base text-[#57606A] leading-relaxed">
                  Throughout my academic career and industrial internships, I have focused on translating computational logic and structured data into practical, user-facing applications. Whether architecting event management flows or optimizing data pipelines with Python and ML libraries, I bring curiosity, rigor, and a solution-oriented mindset.
                </p>

                {/* Core Attributes Chips */}
                <div className="mt-6 pt-6 border-t border-[#E2E5E9] flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EFF6FF] text-[#1D4ED8] text-xs font-medium border border-[#DBEAFE]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Structured Problem Solver
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F3FF] text-[#6D28D9] text-xs font-medium border border-[#EDE9FE]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    4 Industrial Internships
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-[#334155] text-xs font-medium border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Full Lifecycle Fundamentals
                  </span>
                </div>
              </div>
            )}

            {activeTab === "philosophy" && (
              <div className="rounded-3xl bg-[#0D1117] text-slate-300 p-6 font-mono text-xs border border-[#1E293B] shadow-inner animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px] mb-4">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Code className="w-3.5 h-3.5" />
                    DeveloperPhilosophy.java
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    Verified Blueprint
                  </span>
                </div>
                <pre className="overflow-x-auto leading-relaxed text-[13px] text-slate-200">
                  <code>
{`public class ArjunTP {
    final String currentPositioning = "MCA Student & Software Developer";
    final String institution = "Saintgits College of Engineering";
    final String[] techStack = {"Python", "Java", "MySQL", "Scikit-Learn"};

    public Solution buildSoftware(Problem requirement) {
        // 1. Analyze user needs & constraints
        RequirementSpec spec = requirement.decompose();
        
        // 2. Structure robust database schemas & business logic
        DatabaseSchema schema = spec.designNormalizedSchema();
        
        // 3. Implement clean, reliable, tested code
        return spec.implement(schema)
                   .optimizePerformance()
                   .deployForUsers();
    }
}`}
                  </code>
                </pre>
              </div>
            )}

            {activeTab === "academic" && (
              <div className="p-8 rounded-3xl bg-white border border-[#E2E5E9] shadow-sm space-y-4 animate-in fade-in duration-200">
                <h3 className="font-display font-bold text-xl text-[#0D1117] flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#1D4ED8]" />
                  Curriculum &amp; Technical Trajectory
                </h3>
                <p className="text-sm text-[#57606A] leading-relaxed">
                  My coursework at Saintgits College of Engineering emphasizes deep software engineering fundamentals, advanced database management, algorithmic complexity, and emerging artificial intelligence paradigms.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-[#FAFAF9] border border-[#E2E5E9]">
                    <span className="font-mono text-[11px] font-semibold text-[#1D4ED8] uppercase block mb-1">
                      Systems &amp; Architecture
                    </span>
                    <p className="text-xs text-[#57606A]">
                      Object-Oriented Programming (Java/Python), Data Structures, Relational Schemas (MySQL).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FAFAF9] border border-[#E2E5E9]">
                    <span className="font-mono text-[11px] font-semibold text-[#7C3AED] uppercase block mb-1">
                      Machine Learning &amp; Data
                    </span>
                    <p className="text-xs text-[#57606A]">
                      Data preprocessing, NumPy/Pandas pipelines, and predictive model deployment.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Profile Facts & Communication (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-xs uppercase tracking-wider font-semibold text-[#8C959F] mb-3">
              Profile Summary &amp; Key Details
            </h3>

            <div className="bg-white rounded-3xl border border-[#E2E5E9] divide-y divide-[#E2E5E9] shadow-sm">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-4.5 flex items-start gap-3.5 hover:bg-[#FAFAF9] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0 mt-0.5">
                    {fact.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#8C959F] font-medium">
                      {fact.label}
                    </span>
                    <span className="block font-semibold text-[#0D1117] text-sm mt-0.5 leading-snug">
                      {fact.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Box */}
            <div className="p-5 rounded-2xl bg-[#EFF6FF]/70 border border-[#DBEAFE] flex items-center justify-between group hover:bg-[#EFF6FF] transition-colors">
              <div>
                <p className="text-xs font-semibold text-[#1E40AF]">
                  Looking for internship &amp; full-time opportunities
                </p>
                <p className="text-xs text-[#57606A] mt-0.5">
                  Available for collaborations across Kerala &amp; Remote
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 p-2.5 rounded-xl bg-[#1D4ED8] text-white hover:bg-[#1E40AF] transition-transform duration-200 group-hover:scale-105"
                aria-label="Contact Arjun T P"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
