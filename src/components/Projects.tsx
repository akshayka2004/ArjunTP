"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import {
  ArrowUpRight,
  Calendar,
  Layers,
  Code2,
  Database,
  Users,
  CheckCircle2,
  ExternalLink,
  Github,
  Info,
  X,
  Sparkles,
} from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 border-b border-[#E2E5E9]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#1D4ED8]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8] font-semibold">
              Portfolio
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0D1117] tracking-tight">
                Selected Work
              </h2>
              <p className="text-sm text-[#57606A] mt-2 max-w-xl">
                Featured software engineering and database projects engineered for practical workflow optimization.
              </p>
            </div>
            <span className="font-mono text-xs text-[#8C959F] px-3 py-1 bg-white border border-[#E2E5E9] rounded-full self-start sm:self-auto shadow-sm">
              02 Highlighted Applications
            </span>
          </div>
        </div>

        {/* Large Editorial Project Panels with Dynamic Transitions */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            const isHovered = hoveredProject === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isHovered
                    ? "border-[#1D4ED8]/60 shadow-[0_20px_50px_rgba(29,78,216,0.1)] -translate-y-1"
                    : "border-[#E2E5E9] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
                  
                  {/* Left (or Right) Content Side (Cols 1-7) */}
                  <div
                    className={`lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      {/* Top Meta: Number & Category */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#DBEAFE]">
                          PROJECT {project.number}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-[#8C959F]">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title with Smooth Color Transition */}
                      <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0D1117] tracking-tight mb-4 group-hover:text-[#1D4ED8] transition-colors duration-200">
                        {project.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-xs font-mono text-[#1D4ED8] mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-base text-[#4B5565] leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Stack Pills with Interactive Hover Scale */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAFAF9] border border-[#E2E5E9] text-xs font-mono text-[#334155] font-medium transition-transform duration-150 hover:scale-105 hover:bg-white"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Controls & Interactive Drawer Trigger */}
                    <div className="pt-6 border-t border-[#E2E5E9]/80 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D1117] text-white text-xs font-semibold hover:bg-[#1D4ED8] transition-all duration-200 shadow-sm active:scale-95"
                      >
                        <span>Explore Overview</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>

                      {/* Clearly Editable Placeholders for Live Demo / GitHub */}
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#E2E5E9] text-[#0D1117] text-xs font-medium hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-dashed border-[#CBD5E1] text-[#8C959F] text-xs font-mono hover:text-[#0D1117] hover:border-slate-400 transition-colors"
                          title="Demo URL configurable in src/data/portfolio.ts"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo Link (Configurable)</span>
                        </button>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#E2E5E9] text-[#0D1117] text-xs font-medium hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-dashed border-[#CBD5E1] text-[#8C959F] text-xs font-mono hover:text-[#0D1117] hover:border-slate-400 transition-colors"
                          title="GitHub URL configurable in src/data/portfolio.ts"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code (Configurable)</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Right (or Left) Visual Panel Side (Cols 8-12) */}
                  <div
                    className={`lg:col-span-5 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] border-t lg:border-t-0 ${
                      isEven ? "lg:border-r border-[#E2E5E9] lg:order-1" : "lg:border-l border-[#E2E5E9] lg:order-2"
                    } p-8 flex flex-col justify-center items-center relative overflow-hidden`}
                  >
                    {/* Architectural Wireframe Motif */}
                    <div className="absolute -right-8 -bottom-8 font-display text-8xl font-black text-[#1D4ED8]/5 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                      {project.number}
                    </div>

                    <div className="w-full max-w-sm bg-white rounded-3xl border border-[#CBD5E1]/60 p-5 shadow-sm space-y-4 transition-transform duration-300 group-hover:scale-102">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <span className="font-mono text-xs font-semibold text-[#0D1117] flex items-center gap-1.5">
                          {project.id === "big-days" ? (
                            <Calendar className="w-3.5 h-3.5 text-[#1D4ED8]" />
                          ) : (
                            <Users className="w-3.5 h-3.5 text-[#4F46E5]" />
                          )}
                          {project.name} Architecture
                        </span>
                        <span className="text-[10px] font-mono text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          Verified Spec
                        </span>
                      </div>

                      {/* Abstract Schema Breakdown */}
                      <div className="space-y-2 font-mono text-xs">
                        <div className="p-2.5 rounded-xl bg-[#FAFAF9] border border-slate-200/80">
                          <span className="text-[#8C959F] text-[10px] uppercase block">
                            Core Domain
                          </span>
                          <span className="text-[#0D1117] font-semibold text-xs">
                            {project.category}
                          </span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#FAFAF9] border border-slate-200/80">
                          <span className="text-[#8C959F] text-[10px] uppercase block">
                            Database &amp; Persistence
                          </span>
                          <span className="text-[#1D4ED8] font-semibold text-xs">
                            MySQL Relational Engine
                          </span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#FAFAF9] border border-slate-200/80">
                          <span className="text-[#8C959F] text-[10px] uppercase block">
                            Application Logic
                          </span>
                          <span className="text-[#0D1117] font-medium text-xs">
                            {project.technologies[0]} Runtime Layer
                          </span>
                        </div>
                      </div>

                      <div className="text-[11px] text-[#57606A] bg-[#EFF6FF] p-2.5 rounded-xl border border-[#DBEAFE] flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                        <span>Designed to streamline coordination &amp; team productivity</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Modal / Inspection Drawer for Project Exploration */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div
              className="bg-white rounded-3xl max-w-lg w-full border border-[#E2E5E9] shadow-2xl p-6 sm:p-8 relative animate-in zoom-in-95 duration-200"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-[#57606A] hover:bg-slate-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-0.5 rounded-md">
                  PROJECT {selectedProject.number}
                </span>
                <span className="font-mono text-xs text-[#8C959F]">
                  {selectedProject.category}
                </span>
              </div>

              <h3
                id="modal-project-title"
                className="font-display text-2xl sm:text-3xl font-bold text-[#0D1117] mb-3"
              >
                {selectedProject.name}
              </h3>

              <p className="text-sm text-[#4B5565] leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-[#E2E5E9]">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#8C959F] mb-2 font-semibold">
                    Supported Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-[#F1F5F9] text-[#334155] rounded-lg text-xs font-medium font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E5E9] text-xs text-[#57606A] leading-relaxed">
                  <span className="font-semibold text-[#0D1117] block mb-1">
                    Repository &amp; Deployment Notice:
                  </span>
                  Source links and demo environments are maintainable directly via{" "}
                  <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-[11px] text-[#0D1117]">
                    src/data/portfolio.ts
                  </code>
                  . As per the portfolio source-of-truth guidelines, unverified external URLs are not auto-fabricated.
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full bg-[#0D1117] text-white text-xs font-medium hover:bg-[#1D4ED8] transition-colors"
                >
                  Close Overview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
