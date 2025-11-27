"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code2,
  Database,
  Layers,
  Microscope,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Zap,
  Award,
  ExternalLink,
} from "lucide-react";

export function BentoHero() {
  const [activeCode, setActiveCode] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const codeSnippets = [
    {
      lang: "TypeScript",
      code: "const solution = (problem: Challenge) => {\n  return innovation + precision;\n};",
      color: "from-blue-500 to-cyan-500",
    },
    {
      lang: "C#",
      code: "public class DentalLab {\n  // Bridging physical craft\n  // with digital solutions\n}",
      color: "from-purple-500 to-pink-500",
    },
    {
      lang: "Python",
      code: "def create_impact():\n    expertise = dental + cs\n    return breakthrough",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  const techStack = [
    {
      name: "React",
      color: "from-cyan-400 to-blue-500",
      icon: "⚛️",
      glow: "cyan",
    },
    {
      name: "Next.js",
      color: "from-gray-700 to-gray-900",
      icon: "▲",
      glow: "white",
    },
    {
      name: "TypeScript",
      color: "from-blue-500 to-blue-700",
      icon: "TS",
      glow: "blue",
    },
    {
      name: "C#",
      color: "from-purple-500 to-purple-700",
      icon: "C#",
      glow: "purple",
    },
    {
      name: "Python",
      color: "from-yellow-400 to-blue-500",
      icon: "🐍",
      glow: "yellow",
    },
    {
      name: "PostgreSQL",
      color: "from-blue-400 to-blue-600",
      icon: "🐘",
      glow: "blue",
    },
    {
      name: "MongoDB",
      color: "from-green-500 to-green-700",
      icon: "🍃",
      glow: "green",
    },
    {
      name: "Tailwind",
      color: "from-cyan-400 to-cyan-600",
      icon: "💨",
      glow: "cyan",
    },
  ];

  const achievements = [
    { icon: Award, label: "Sold Product", value: "Enterprise Desktop App" },
    { icon: Zap, label: "Fast Learner", value: "Self-taught Full-stack" },
    {
      icon: Terminal,
      label: "Problem Solver",
      value: "Algorithms & Architecture",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCode((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-4 pt-20 text-white md:p-8 md:pt-24">
      {/* Enhanced Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"></div>
        <div
          className="absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-pink-500/10 blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 h-96 w-96 animate-pulse rounded-full bg-cyan-500/5 blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Cursor glow effect */}
        <div
          className="absolute h-96 w-96 rounded-full bg-purple-500/5 blur-3xl transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Bento Grid */}
        <div className="grid auto-rows-auto grid-cols-1 gap-3 md:grid-cols-12 md:gap-4 lg:gap-6">
          {/* Main Hero Card - Large */}
          <div className="group col-span-1 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 md:col-span-7 md:row-span-2 md:rounded-3xl md:p-8 lg:p-12">
            <div className="mb-4 flex items-center gap-2 md:mb-6">
              <Sparkles className="h-4 w-4 animate-pulse text-purple-400 md:h-5 md:w-5" />
              <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-400 md:px-3 md:text-sm">
                Available for Projects
              </span>
            </div>

            <h1 className="mb-4 text-3xl leading-tight font-bold md:mb-6 md:text-5xl lg:text-6xl">
              From Dental Precision
              <br />
              <span className="animate-pulse bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                to Digital Products
              </span>
            </h1>

            <p className="mb-6 max-w-2xl text-base leading-relaxed text-slate-300 md:mb-8 md:text-lg">
              Full-stack developer with a unique edge: combining Computer
              Science expertise with the meticulous craftsmanship of Dental
              Technology. I build enterprise desktop apps, modern web solutions,
              and tackle complex algorithms with precision.
            </p>

            <div className="mb-6 flex flex-col flex-wrap gap-3 sm:flex-row md:mb-8 md:gap-4">
              <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-pink-600 hover:shadow-xl hover:shadow-purple-500/25 md:px-8 md:py-4">
                {"Let's Work Together"}
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>

              <button className="rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3 font-semibold text-slate-200 transition-all duration-300 hover:border-purple-500/50 hover:bg-slate-700/50 md:px-8 md:py-4">
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 transition-all duration-300 hover:scale-110 hover:border-purple-500/50 hover:bg-purple-500/20 md:h-12 md:w-12"
              >
                <Github className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-blue-500/20 md:h-12 md:w-12"
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 transition-all duration-300 hover:scale-110 hover:border-pink-500/50 hover:bg-pink-500/20 md:h-12 md:w-12"
              >
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <div className="group col-span-1 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-5 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 md:col-span-5 md:rounded-3xl md:p-6">
            <div className="mb-4 flex items-center gap-2">
              <Layers className="h-4 w-4 text-purple-400 transition-transform duration-500 group-hover:rotate-180 md:h-5 md:w-5" />
              <h3 className="text-base font-semibold text-purple-400 md:text-lg">
                Impact Metrics
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="group/stat transition-transform duration-300 hover:scale-105">
                <div className="mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  4+
                </div>
                <div className="text-xs text-slate-400 md:text-sm">
                  Years Experience
                </div>
              </div>

              <div className="group/stat transition-transform duration-300 hover:scale-105">
                <div className="mb-1 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  10+
                </div>
                <div className="text-xs text-slate-400 md:text-sm">
                  Technologies
                </div>
              </div>

              <div className="group/stat col-span-2 transition-transform duration-300 hover:scale-105">
                <div className="mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  1 Sold
                </div>
                <div className="text-xs text-slate-400 md:text-sm">
                  Enterprise Product Deployed
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="group col-span-1 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-5 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 md:col-span-5 md:rounded-3xl md:p-6">
            <div className="mb-4 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-purple-400 transition-transform duration-300 group-hover:rotate-12 md:h-5 md:w-5" />
              <h3 className="text-base font-semibold text-purple-400 md:text-lg">
                Tech Arsenal
              </h3>
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  // onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className={`aspect-square bg-gradient-to-br ${tech.color} flex cursor-pointer flex-col items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg md:rounded-xl hover:shadow-${tech.glow}-500/50 relative`}
                  style={{
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  <span className="text-xl md:text-2xl">{tech.icon}</span>
                  {hoveredTech === tech.name && (
                    <div className="absolute -bottom-8 left-1/2 z-50 -translate-x-1/2 transform animate-pulse rounded border border-purple-500/30 bg-slate-900 px-2 py-1 text-xs whitespace-nowrap">
                      {tech.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet Card */}
          <div className="group col-span-1 overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-5 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 md:col-span-7 md:rounded-3xl md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-red-500 md:h-3 md:w-3"></div>
                <div
                  className="h-2 w-2 animate-pulse rounded-full bg-yellow-500 md:h-3 md:w-3"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-2 w-2 animate-pulse rounded-full bg-green-500 md:h-3 md:w-3"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <span
                className={`bg-gradient-to-r text-xs md:text-sm ${codeSnippets[activeCode].color} bg-clip-text font-mono font-bold text-transparent`}
              >
                {codeSnippets[activeCode].lang}
              </span>
            </div>

            <pre className="font-mono text-xs leading-relaxed text-slate-300 transition-colors duration-300 group-hover:text-purple-200 md:text-sm">
              <code>{codeSnippets[activeCode].code}</code>
            </pre>

            <div className="mt-4 flex gap-2">
              {codeSnippets.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveCode(idx)}
                  className={`h-1 cursor-pointer rounded-full transition-all duration-300 ${
                    idx === activeCode
                      ? "w-8 bg-purple-500"
                      : "w-2 bg-slate-700 hover:w-4 hover:bg-slate-600"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Featured Project Card */}
          <div className="group relative col-span-1 cursor-pointer overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-5 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 md:col-span-7 md:rounded-3xl md:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 transition-all duration-500 group-hover:from-purple-500/5 group-hover:to-pink-500/5"></div>

            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-purple-400 transition-transform duration-300 group-hover:scale-110 md:h-5 md:w-5" />
                  <h3 className="text-base font-semibold text-purple-400 md:text-lg">
                    Featured Work
                  </h3>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-500 transition-colors duration-300 group-hover:text-purple-400" />
              </div>

              <h4 className="mb-2 text-xl font-bold transition-colors group-hover:text-purple-400 md:text-2xl">
                Dental Lab Management System
              </h4>

              <p className="mb-4 text-sm text-slate-400 md:text-base">
                Enterprise desktop application built with C# WPF. Sold to client
                for real-world deployment, managing lab workflows, inventory,
                and client orders with advanced reporting capabilities.
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-1 text-xs text-purple-400 md:px-3 md:text-sm">
                  C# WPF
                </span>
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-1 text-xs text-purple-400 md:px-3 md:text-sm">
                  Desktop
                </span>
                <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-2 py-1 text-xs text-pink-400 md:px-3 md:text-sm">
                  Sold Product
                </span>
              </div>

              <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 transition-colors group-hover:border-purple-500/50 md:h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <span className="relative z-10 text-xs text-slate-600 md:text-sm">
                  [Desktop App Interface]
                </span>
              </div>
            </div>
          </div>

          {/* Research Project Card */}
          <div className="group relative col-span-1 cursor-pointer overflow-hidden rounded-2xl border border-pink-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-5 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-pink-500/40 md:col-span-5 md:rounded-3xl md:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-500/0 transition-all duration-500 group-hover:from-pink-500/5 group-hover:to-purple-500/5"></div>

            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Microscope className="h-4 w-4 text-pink-400 transition-transform duration-300 group-hover:rotate-12 md:h-5 md:w-5" />
                  <h3 className="text-base font-semibold text-pink-400 md:text-lg">
                    Research
                  </h3>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-500 transition-colors duration-300 group-hover:text-pink-400" />
              </div>

              <h4 className="mb-2 text-lg font-bold transition-colors group-hover:text-pink-400 md:text-xl">
                Image Cryptography
              </h4>

              <p className="mb-4 text-sm text-slate-400 md:text-base">
                Advanced cryptography implementation using 5D chaotic system for
                secure image encryption with high entropy.
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-2 py-1 text-xs text-pink-400 md:px-3 md:text-sm">
                  Algorithm
                </span>
                <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-2 py-1 text-xs text-pink-400 md:px-3 md:text-sm">
                  Security
                </span>
              </div>

              <div className="relative flex h-20 items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 transition-colors group-hover:border-pink-500/50 md:h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <span className="relative z-10 text-xs text-slate-600 md:text-sm">
                  [Encryption Visualization]
                </span>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="col-span-1 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-5 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 md:col-span-12 md:rounded-3xl md:p-6">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400 md:h-5 md:w-5" />
              <h3 className="text-base font-semibold text-purple-400 md:text-lg">
                Core Strengths
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="group/achievement cursor-pointer rounded-xl border border-slate-700 bg-slate-900/50 p-4 transition-all duration-300 hover:scale-105 hover:border-purple-500/50"
                >
                  <achievement.icon className="mb-2 h-5 w-5 text-purple-400 transition-transform duration-300 group-hover/achievement:rotate-12 md:h-6 md:w-6" />
                  <div className="mb-1 text-xs text-slate-500 md:text-sm">
                    {achievement.label}
                  </div>
                  <div className="text-sm font-semibold text-slate-300 transition-colors group-hover/achievement:text-purple-400 md:text-base">
                    {achievement.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
