"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Award, CheckCircle, ExternalLink, Filter } from "lucide-react";

export default function Certifications() {
  const { certifications } = portfolioData;
  const [filterOrg, setFilterOrg] = useState<string>("All");

  const orgs = ["All", "Infosys Springboard", "IBM SkillsBuild", "IIT Bombay / Saintgits"];

  const filteredCerts = certifications.filter((cert) => {
    if (filterOrg === "All") return true;
    if (filterOrg === "IIT Bombay / Saintgits") {
      return cert.organization.includes("IIT Bombay");
    }
    return cert.organization.includes(filterOrg);
  });

  return (
    <section
      id="certifications"
      className="py-24 border-b border-[#E2E5E9]/60 relative bg-[#FAFAF9]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#1D4ED8]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8] font-semibold">
              Credentials
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0D1117] tracking-tight">
                Certifications
              </h2>
              <p className="text-sm text-[#57606A] mt-2 max-w-xl">
                Accredited specialized credentials across Cloud, Data Science, RPA, and Big Data.
              </p>
            </div>
            <span className="font-mono text-xs text-[#8C959F] px-3 py-1 bg-white border border-[#E2E5E9] rounded-full self-start sm:self-auto">
              6 Verified Certifications
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-[#8C959F] flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Filter by Issuer:
          </span>
          {orgs.map((org) => (
            <button
              key={org}
              onClick={() => setFilterOrg(org)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filterOrg === org
                  ? "bg-[#0D1117] text-white"
                  : "bg-white text-[#57606A] border border-[#E2E5E9] hover:bg-slate-100"
              }`}
            >
              {org}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl border border-[#E2E5E9] p-6 shadow-sm hover:shadow-md hover:border-[#1D4ED8]/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded bg-[#EFF6FF] text-[#1D4ED8] border border-[#DBEAFE]">
                    {cert.organization}
                  </span>
                  <span className="font-mono text-xs text-[#8C959F]">
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-[#0D1117] group-hover:text-[#1D4ED8] transition-colors mb-2 leading-snug">
                  {cert.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-[#F1F5F9] mt-4 flex items-center justify-between text-xs text-[#8C959F] font-mono">
                {cert.credentialId ? (
                  <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200 text-[#57606A]">
                    ID: {cert.credentialId}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Completion
                  </span>
                )}
                <Award className="w-4 h-4 text-[#CBD5E1] group-hover:text-[#1D4ED8] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
