"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;
  const [activeExp, setActiveExp] = useState<string | null>(experience[0].id);

  return (
    <section
      id="experience"
      className="py-24 border-b border-[#E2E5E9]/60 relative bg-[#FAFAF9]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#1D4ED8]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8] font-semibold">
              Work History
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0D1117] tracking-tight">
                Internship Experience
              </h2>
              <p className="text-sm text-[#57606A] mt-2 max-w-xl">
                Hands-on practical development, machine learning algorithms, and real enterprise software exposure across 4 industrial internships.
              </p>
            </div>
            <span className="font-mono text-xs text-[#8C959F] px-3 py-1 bg-white border border-[#E2E5E9] rounded-full self-start sm:self-auto">
              4 Roles Completed
            </span>
          </div>
        </div>

        {/* Editorial Timeline Layout */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-[#1D4ED8] via-[#CBD5E1] to-transparent" />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const isFirst = index === 0;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveExp(item.id)}
                  className={`group relative md:pl-20 transition-all duration-300`}
                >
                  {/* Timeline Node Dot */}
                  <div className="hidden md:flex absolute left-6 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-white bg-white shadow-sm items-center justify-center z-10">
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                        activeExp === item.id ? "bg-[#1D4ED8] scale-125" : "bg-[#94A3B8]"
                      }`}
                    />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`bg-white rounded-2xl border p-6 sm:p-8 transition-all duration-200 ${
                      activeExp === item.id
                        ? "border-[#1D4ED8]/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] translate-x-1"
                        : "border-[#E2E5E9] hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-[#E2E5E9]/70">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-[11px] font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2 py-0.5 rounded">
                            EXP {item.number}
                          </span>
                          <span className="text-xs text-[#8C959F] font-mono">
                            {item.period}
                          </span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0D1117] tracking-tight">
                          {item.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm">
                          <span className="font-semibold text-[#1D4ED8]">
                            {item.company}
                          </span>
                          {item.location && (
                            <>
                              <span className="text-[#CBD5E1]">•</span>
                              <span className="text-[#57606A] flex items-center gap-1 text-xs">
                                <MapPin className="w-3 h-3 text-[#8C959F]" />
                                {item.location}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Official Credential Note / Recognition Badge */}
                      {item.credentialNote && (
                        <div className="self-start lg:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E5E9] text-xs font-medium text-[#334155]">
                          <Award className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                          <span>{item.credentialNote}</span>
                        </div>
                      )}
                    </div>

                    {/* Bullet Points */}
                    <div className="mt-5 space-y-2.5">
                      {item.points.map((point, ptIdx) => (
                        <div key={ptIdx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                          <p className="text-sm text-[#4B5565] leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Skills Tag Row */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono text-[#8C959F] uppercase tracking-wider mr-1">
                          Skills:
                        </span>
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-md bg-[#F1F5F9] text-[#334155] text-xs font-medium border border-[#E2E8F0]/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
