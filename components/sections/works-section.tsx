"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────────────────

const shortFormVideos = [
  {
    id: "0c3j-08vStM",
    title: "Short Film #1",
    label: "Short Form · Motion",
  },
  {
    id: "WA7p66UtUrE",
    title: "Short Film #2",
    label: "Short Form · Edit",
  },
  {
    id: "W5kFz7-PNug",
    title: "Short Film #3",
    label: "Short Form · Visual",
  },
];

const longFormVideos = [
  {
    id: "Sf6Qy7afCe8",
    title: "Long Form Edit #1",
    label: "Podcast Hook",
  },
  {
    id: "2McD_T1yc8s",
    title: "Long Form Edit #2",
    label: "Infotainment",
  },
  {
    id: "KlOA-jZupWk",
    title: "Long Form Edit #3",
    label: "Documentary",
  },
];

// ─── Short video card (portrait 9:16) ─────────────────────────────────────────

function ShortCard({ video }: { video: (typeof shortFormVideos)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor-hover
    >
      {/* 9:16 portrait frame */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5",
          "transition-all duration-500",
          hovered ? "border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.06)]" : ""
        )}
        style={{
          aspectRatio: "9/16",
          filter: hovered ? "grayscale(0)" : "grayscale(1)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "filter 0.5s ease, transform 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
        />
      </div>

      {/* Label */}
      <div className="flex items-center justify-between px-1">
        <span className="font-nohemi text-xs text-white/40 uppercase tracking-[0.2em]">
          {video.label}
        </span>
        <a
          href={`https://youtube.com/shorts/${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-nohemi text-xs text-white/30 hover:text-white transition-colors duration-300 flex items-center gap-1"
        >
          Watch
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ─── Long video card (landscape 16:9) ─────────────────────────────────────────

function LongCard({ video }: { video: (typeof longFormVideos)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor-hover
    >
      {/* Label — above the video */}
      <div className="flex items-center justify-between px-1">
        <span className="font-nohemi text-xs text-white/40 uppercase tracking-[0.2em]">
          {video.label}
        </span>
        <a
          href={`https://youtu.be/${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-nohemi text-xs text-white/30 hover:text-white transition-colors duration-300 flex items-center gap-1"
        >
          Watch
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* 16:9 landscape frame */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5",
          "transition-all duration-500",
          hovered ? "border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.06)]" : ""
        )}
        style={{
          aspectRatio: "16/9",
          filter: hovered ? "grayscale(0)" : "grayscale(1)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "filter 0.5s ease, transform 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}

// ─── Section label + divider helper ───────────────────────────────────────────

function SubSectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40">
        {tag}
      </span>
      <div className="mt-3 mb-4 mx-auto w-12 h-px bg-white/15" />
      <h3 className="font-harmond text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h3>
    </div>
  );
}

// ─── Main section ──────────────────────────────────────────────────────────────

export function WorksSection() {
  return (
    <section
      id="work"
      className="relative w-full py-32 md:py-48 bg-black"
    >
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

      <div className="swiss-container relative z-10">

        {/* ── Section header ── */}
        <div className="mb-20 md:mb-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
                Selected Works
              </span>
              <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Projects
              </h2>
            </div>

            <p className="font-nohemi text-base md:text-lg text-white/50 max-w-md">
              A curated selection of edits that showcase my expertise in
              creating exceptional visual experiences.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        {/* ── Short Form ── */}
        <SubSectionHeader tag="Short Form Content" title="Reels & Shorts" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
          {shortFormVideos.map((video) => (
            <ShortCard key={video.id} video={video} />
          ))}
        </div>

        {/* Separator */}
        <div className="mb-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ── Long Form ── */}
        <SubSectionHeader tag="Long Form Content" title="Long Form Videos" />
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          {longFormVideos.map((video) => (
            <LongCard key={video.id} video={video} />
          ))}
        </div>

      </div>
    </section>
  );
}
