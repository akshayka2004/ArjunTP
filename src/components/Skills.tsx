"use client";

import React, { useState, useMemo } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Code2,
  Database,
  BrainCircuit,
  GitBranch,
  Lightbulb,
  Check,
  Search,
  Sparkles,
  X,
} from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skills.map((s) => s.name)];

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "Programming":
        return <Code2 className="w-5 h-5 text-[#1D4ED8]" />;
      case "Database":
        return <Database className="w-5 h-5 text-[#2563EB]" />;
      case "AI / ML":
        return <BrainCircuit className="w-5 h-5 text-[#7C3AED]" />;
      case "Tools":
        return <GitBranch className="w-5 h-5 text-[#0D9488]" />;
      case "Core Strengths":
        return <Lightbulb className="w-5 h-5 text-[#D97706]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#1D4ED8]" />;
    }
  };

  const filteredCategories = useMemo(() => {
    return skills
      .filter((cat) => {
        if (activeCategory !== "All" && cat.name !== activeCategory) {
          return false;
        }
        return true;
      })
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const matchingSkills = cat.skills.filter((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );
        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [skills, activeCategory, searchQuery]);

  const totalMatchingSkills = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section id="skills" className="py-24 border-b border-[#E2E5E9]/60 relative bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#1D4ED8]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8] font-semibold">
              Capabilities
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0D1117] tracking-tight">
                Technical Skills &amp; Competencies
              </h2>
              <p className="text-sm text-[#57606A] mt-2 max-w-xl">
                Categorized taxonomy based on academic coursework, programming foundations, and internship implementations.
              </p>
            </div>
            <span className="font-mono text-xs text-[#8C959F] px-3 py-1 bg-white border border-[#E2E5E9] rounded-full self-start sm:self-auto shadow-sm">
              {totalMatchingSkills} Skills Listed
            </span>
          </div>
        </div>

        {/* Dynamic Controls: Category Filter Tabs & Real-Time Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white border border-[#E2E5E9] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#0D1117] text-white shadow-sm"
                    : "text-[#57606A] hover:text-[#0D1117] hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Instant Search Bar */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#8C959F] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, SQL)..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border border-[#E2E5E9] text-xs text-[#0D1117] placeholder:text-[#8C959F] focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8C959F] hover:text-[#0D1117]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Categorized Groups Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat, idx) => (
              <div
                key={cat.name}
                className={`bg-white rounded-3xl border border-[#E2E5E9] p-6 shadow-sm hover:shadow-md hover:border-[#1D4ED8]/40 transition-all duration-300 flex flex-col justify-between group ${
                  idx === 4 && filteredCategories.length === 5 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Header Icon + Name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#FAFAF9] border border-[#E2E5E9] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                      {getCategoryIcon(cat.name)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#0D1117] tracking-tight">
                        {cat.name}
                      </h3>
                      <span className="font-mono text-[11px] text-[#8C959F]">
                        {cat.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#57606A] leading-relaxed mb-5">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Tag Chips with Hover & Active State */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#F1F5F9]">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedTag === skill;
                    return (
                      <button
                        key={skill}
                        onClick={() => setSelectedTag(isSelected ? null : skill)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                          isSelected
                            ? "bg-[#1D4ED8] text-white shadow-sm ring-2 ring-[#1D4ED8]/20 scale-105"
                            : "bg-[#FAFAF9] text-[#334155] border border-[#E2E5E9] hover:border-[#1D4ED8]/50 hover:bg-white hover:-translate-y-0.5"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                        <span>{skill}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-[#E2E5E9]">
            <p className="text-sm text-[#57606A]">
              No skills found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-3 text-xs font-mono text-[#1D4ED8] underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Selected Skill Context Notice */}
        {selectedTag && (
          <div className="mt-8 p-4 rounded-2xl bg-white border border-[#1D4ED8]/30 shadow-sm flex items-center justify-between text-xs animate-in fade-in duration-150">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-ping" />
              <span className="font-medium text-[#0D1117]">
                Selected competency: <strong className="text-[#1D4ED8]">{selectedTag}</strong>
              </span>
              <span className="text-[#57606A] hidden sm:inline">
                — Applied in internship workflows and core coursework.
              </span>
            </div>
            <button
              onClick={() => setSelectedTag(null)}
              className="text-[#8C959F] hover:text-[#0D1117] font-mono text-[11px] underline"
            >
              Clear
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
