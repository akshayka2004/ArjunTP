"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 border-b border-[#E2E5E9]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#1D4ED8]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8] font-semibold">
              Academics
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0D1117] tracking-tight">
                Education
              </h2>
              <p className="text-sm text-[#57606A] mt-2 max-w-xl">
                Advanced computer applications and software engineering curriculum.
              </p>
            </div>
            <span className="font-mono text-xs text-[#8C959F] px-3 py-1 bg-white border border-[#E2E5E9] rounded-full self-start sm:self-auto">
              Saintgits College of Engineering
            </span>
          </div>
        </div>

        {/* Minimal Timeline Panel */}
        <div className="max-w-3xl">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E2E5E9] p-8 sm:p-10 shadow-sm relative overflow-hidden group hover:border-[#1D4ED8]/50 transition-all duration-200"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#1D4ED8]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E5E9]/80 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#1D4ED8] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#EFF6FF] text-[#1D4ED8] mb-1.5">
                      {edu.status}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#0D1117] tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-[#1D4ED8] mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right font-mono text-xs text-[#57606A] space-y-1">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8C959F]" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8C959F]" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {edu.notes && (
                <p className="text-sm text-[#4B5565] leading-relaxed mb-6">
                  {edu.notes}
                </p>
              )}

              {/* Coursework Focus */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#FAFAF9] border border-[#E2E5E9] text-xs">
                  <span className="font-mono text-[10px] text-[#8C959F] uppercase block mb-1">
                    Core Focus
                  </span>
                  <span className="font-medium text-[#0D1117]">
                    Programming &amp; Algorithms
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAFAF9] border border-[#E2E5E9] text-xs">
                  <span className="font-mono text-[10px] text-[#8C959F] uppercase block mb-1">
                    Data Focus
                  </span>
                  <span className="font-medium text-[#0D1117]">
                    Relational Databases &amp; SQL
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAFAF9] border border-[#E2E5E9] text-xs">
                  <span className="font-mono text-[10px] text-[#8C959F] uppercase block mb-1">
                    Specialization
                  </span>
                  <span className="font-medium text-[#0D1117]">
                    Applied AI &amp; Machine Learning
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
