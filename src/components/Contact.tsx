"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  Linkedin,
  Github,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const { profile } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-white">
      {/* Background Editorial Grid Accent */}
      <div className="absolute inset-0 bg-grid-editorial opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Contact Container Box */}
        <div className="bg-[#0D1117] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#1E293B] shadow-[0_20px_50px_rgba(15,23,42,0.15)] relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* Left Column: Oversized Closing Statement (Cols 1-7) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-mono font-medium mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Get In Touch</span>
                </div>

                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-white leading-[1.08] mb-6">
                  Let&apos;s build something{" "}
                  <span className="text-[#3B82F6] underline decoration-[#3B82F6]/40 underline-offset-8">
                    useful
                  </span>
                  .
                </h2>

                <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-10">
                  I&apos;m open to internships, collaborations and interesting software projects. Whether you have an engineering role, a product inquiry, or just want to talk tech—feel free to drop a message.
                </p>
              </div>

              {/* Direct Primary Call to Action */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#1D4ED8] text-white font-semibold text-sm hover:bg-[#1E40AF] transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-white/10 border border-white/15 text-white font-medium text-xs hover:bg-white/15 transition-all duration-200"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300 font-mono">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span className="font-mono">Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Contact Cards & Editable Social Links (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Direct Email Card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-between group hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Direct Phone Card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-between group hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                      Mobile &amp; WhatsApp
                    </span>
                    <a
                      href={`tel:${profile.phone}`}
                      className="font-mono text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                    >
                      {profile.phoneFormatted}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Copy Phone Number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Badge */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-slate-300 font-mono">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Based in {profile.location}</span>
              </div>

              {/* Editable Social Connectors */}
              <div className="pt-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block mb-3">
                  Profiles &amp; Repositories
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-medium text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-medium text-white hover:bg-slate-700/40 hover:border-slate-500/40 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-300" />
                      GitHub
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
                <p className="text-[10px] font-mono text-slate-400 mt-2">
                  * Social URLs are configurable in <code className="text-slate-300">src/data/portfolio.ts</code>
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
