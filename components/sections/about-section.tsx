"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { SiDavinciresolve } from "react-icons/si";

// Simple CSS-based glow text
const GlowText = memo(function GlowText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block transition-all duration-300",
        "hover:text-white",
        className
      )}
      style={{
        textShadow: 'none',
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255,255,255,0.4)';
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.textShadow = 'none';
      }}
      data-cursor-hover
    >
      {children}
    </span>
  );
});

// Adobe-style app icon: dark rounded-rect bg + large colored letter mark
const AdobeBadge = ({
  letters,
  letterColor,
  bgColor,
}: {
  letters: string;
  letterColor: string;
  bgColor: string;
}) => (
  <svg viewBox="0 0 56 56" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
    {/* Dark base */}
    <rect width="56" height="56" rx="12" fill={bgColor} />
    {/* Subtle inner shadow / shine */}
    <rect width="56" height="28" rx="12" fill="rgba(255,255,255,0.04)" />
    {/* Letter mark */}
    <text
      x="50%"
      y="52%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="'Arial', 'Helvetica Neue', sans-serif"
      fontWeight="bold"
      fontSize="22"
      fill={letterColor}
      letterSpacing="-1"
    >
      {letters}
    </text>
  </svg>
);

// Clean Figma logo — 5 non-overlapping regions
// Grid: r=8, left-col cx=20, right-col cx=36, rows at y=6-22, 22-38, 38-54
const FigmaIcon = () => (
  <svg viewBox="0 0 56 56" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="12" fill="#1a1a1a" />

    {/*
      Orange: left half of top pill
      = left semicircle (cx=20,cy=14,r=8) + rect to center line x=28
      Path: from (20,6) arc CCW through (12,14) to (20,22), then right to (28,22), up to (28,6), close
    */}
    <path d="M20,6 A8,8,0,0,0,20,22 L28,22 L28,6 Z" fill="#F24E1E" />

    {/*
      Pink: right half of top pill
      = rect from center x=28 + right semicircle (cx=36,cy=14,r=8)
      Path: from (28,6) down to (28,22), right to (36,22), arc CCW through (44,14) to (36,6), left to close
    */}
    <path d="M28,6 L28,22 L36,22 A8,8,0,0,0,36,6 Z" fill="#FF7262" />

    {/*
      Purple: middle-left D-shape
      = flat top at y=22, flat right at x=28, left side is semicircle arc
      Path: from (20,22) right to (28,22), down to (28,38), left to (20,38),
            arc CW through (12,30) back to (20,22)
    */}
    <path d="M20,22 L28,22 L28,38 L20,38 A8,8,0,0,1,20,22 Z" fill="#A259FF" />

    {/* Cyan: middle-right full circle, cx=36, cy=30, r=8 — stays in x=28-44, y=22-38 */}
    <circle cx="36" cy="30" r="8" fill="#1ABCFE" />

    {/* Green: bottom-left full circle, cx=20, cy=46, r=8 — stays in x=12-28, y=38-54 */}
    <circle cx="20" cy="46" r="8" fill="#0ACF83" />
  </svg>
);

export function AboutSection() {
  const tools = [
    {
      icon: <AdobeBadge letters="Pr" letterColor="#9999FF" bgColor="#0d0d1e" />,
      label: "Premiere Pro",
    },
    {
      icon: <AdobeBadge letters="Ae" letterColor="#9999FF" bgColor="#0d0d1e" />,
      label: "After Effects",
    },
    {
      icon: <AdobeBadge letters="Ps" letterColor="#31A8FF" bgColor="#0a1628" />,
      label: "Photoshop",
    },
    {
      icon: <AdobeBadge letters="Ai" letterColor="#FF9A00" bgColor="#1a0a00" />,
      label: "Illustrator",
    },
    { icon: <FigmaIcon />, label: "Figma" },
    { icon: <SiDavinciresolve size={44} color="#FF2D78" />, label: "DaVinci Resolve" },
  ];
  // duplicate for seamless loop
  const loopedTools = [...tools, ...tools];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="swiss-container relative z-10">
        <div className="swiss-grid">
          {/* Section label */}
          <div className="col-span-4 md:col-span-2 lg:col-span-3 mb-12 md:mb-0">
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              About
            </span>
            <div className="mt-4 w-12 h-px bg-white/20" />
          </div>

          {/* Main content */}
          <div className="col-span-4 md:col-span-6 lg:col-span-9">
            {/* Split heading: Meet + Shabdita in Playfair Display */}
            <h2 className="font-harmond text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8">
              Meet{" "}
              <span className="font-greatvibes" style={{ fontSize: "1.15em", fontWeight: 400 }}>
                Shabdita
              </span>
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-6 font-nohemi text-lg md:text-xl leading-relaxed text-white/60 max-w-3xl">
              <p>
                I&apos;m a visual story teller and a video editor{" "}
                <GlowText className="text-white">
                  driven by creativity and detail
                </GlowText>{" "}
                shaping stories the way life shapes moments
                {" "}
                <GlowText className="text-white">
                  with rhythm, flow and intention
                </GlowText>{" "}
                because every frame carries movement, balance and meaning.
              </p>

              <p>
                My approach is to elevate visuals through{" "}
                <GlowText className="text-white">thoughtful editing and motion design</GlowText>{" "}
                where visual sounds and emotions come together to create an immersive experience.
              </p>
            </div>

            {/* Tools icon marquee */}
            <div className="mt-16">
              <h3 className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-6">
                Tools & Software
              </h3>

              {/* Marquee track */}
              <div
                className="relative overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}
              >
                <style>{`
                  @keyframes marquee-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .marquee-track {
                    display: flex;
                    align-items: center;
                    gap: 0;
                    width: max-content;
                    animation: marquee-scroll 14s linear infinite;
                  }
                  .marquee-track:hover {
                    animation-play-state: paused;
                  }
                `}</style>

                <div className="marquee-track">
                  {loopedTools.map((tool, i) => (
                    <div
                      key={i}
                      className={cn(
                        "mx-6 flex flex-col items-center gap-3 px-6 py-5",
                        "rounded-2xl border border-white/10 bg-white/5",
                        "hover:border-white/25 hover:bg-white/8",
                        "transition-colors duration-300 cursor-default min-w-[110px]"
                      )}
                      data-cursor-hover
                    >
                      <div className="flex items-center justify-center w-14 h-14">
                        {tool.icon}
                      </div>
                      <span className="font-nohemi text-[11px] text-white/60 whitespace-nowrap text-center leading-tight">
                        {tool.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                // { value: "5+", label: "Years Experience" },
                { value: "10+", label: "Projects Completed" },
                // { value: "30+", label: "Happy Clients" },
                { value: "∞", label: "Cups of Coffee" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-harmond text-4xl md:text-5xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="font-nohemi text-xs uppercase tracking-widest text-white/40 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
