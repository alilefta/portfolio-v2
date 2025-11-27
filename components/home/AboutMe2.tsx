"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, Target, Rocket, Code2 } from "lucide-react";

const AboutSection2Designs = () => {
  const [activeDesign, setActiveDesign] = useState("design1");

  // Design 1: KINETIC ENERGY
  const Design1 = () => {
    // if (!window) {
    //   return "Not found";
    // }

    // const glowX = (mousePos.x / window.innerWidth) * 100;
    // const glowY = (mousePos.y / window.innerHeight) * 100;

    return (
      <div className="relative bg-black text-white">
        {/* Mouse-following gradient */}
        <div
          className="pointer-events-none fixed h-[800px] w-[800px] rounded-full opacity-20 blur-[150px] transition-all duration-300 ease-out"
          style={{
            background:
              "radial-gradient(circle, #3B82F6 0%, #8B5CF6 50%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* SECTION 1: THE HOOK */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-8">
          <div className="w-full max-w-7xl">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              {/* Left: Statement */}
              <div>
                <div className="mb-8 flex items-center gap-3">
                  <div className="h-px w-12 bg-blue-500"></div>
                  <span className="text-xs tracking-[0.3em] text-gray-500">
                    ALI MOHSIN
                  </span>
                </div>

                <h1 className="mb-12 text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-black tracking-tighter">
                  FROM
                  <br />
                  DENTAL
                  <br />
                  LABS
                  <br />
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    TO DEV
                  </span>
                </h1>

                <div className="mb-12 max-w-xl space-y-6 text-lg text-gray-400">
                  <p className="text-2xl leading-relaxed text-white">
                    I bring precision from crafting dental prosthetics to
                    engineering software.
                  </p>
                  <p className="leading-relaxed">
                    6 years learning that 0.1mm ruins everything. Now I apply
                    that obsession to code.
                  </p>
                </div>

                <button className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-all hover:gap-5 hover:bg-gray-200">
                  SEE MY WORK
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Right: Animated Stats */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <FloatingMetric
                    number="93.8"
                    unit="%"
                    label="Record GPA"
                    delay={0}
                    color="from-blue-500 to-cyan-500"
                  />
                  <FloatingMetric
                    number="6"
                    unit="YRS"
                    label="Craft Mastery"
                    delay={0.2}
                    color="from-purple-500 to-pink-500"
                  />
                  <FloatingMetric
                    number="10"
                    unit="+"
                    label="Tech Stack"
                    delay={0.4}
                    color="from-pink-500 to-orange-500"
                  />
                  <FloatingMetric
                    number="1"
                    unit=""
                    label="Sold Product"
                    delay={0.6}
                    color="from-green-500 to-emerald-500"
                  />
                </div>

                {/* Background decoration */}
                <div className="absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2">
                  <div className="h-full w-full rotate-6 rounded-3xl border border-white/5"></div>
                  <div className="absolute inset-0 h-full w-full -rotate-6 rounded-3xl border border-white/5"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE MANIFESTO */}
        <section className="relative border-t border-white/10 px-8 py-40">
          <div className="mx-auto max-w-6xl">
            <div className="mb-32 text-center">
              <h2 className="mb-8 text-[clamp(2rem,8vw,6rem)] leading-none font-black">
                I'M NOT LIKE
                <br />
                OTHER DEVS
              </h2>
              <div className="mx-auto h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              <ManifestoCard
                icon={<Target size={40} />}
                title="DOMAIN EXPERT"
                description="6 years in healthcare. I know the workflows, the pain points, the compliance needs. Not from docs—from living it."
              />
              <ManifestoCard
                icon={<Zap size={40} />}
                title="PRECISION OBSESSED"
                description="Trained where 0.1mm matters. That attention to detail is in my DNA. Every function. Every component. Perfect or start over."
              />
              <ManifestoCard
                icon={<Rocket size={40} />}
                title="PROVEN SHIPPER"
                description="Built and sold product while working full-time. 93.8% GPA with two degrees. I don't just code—I execute."
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: THE TIMELINE */}
        <section className="relative border-t border-white/10 px-8 py-40">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-24 text-center text-5xl font-black md:text-7xl">
              THE EVOLUTION
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute top-0 bottom-0 left-[50px] w-px bg-gradient-to-b from-transparent via-white/30 to-transparent md:left-1/2"></div>

              <div className="space-y-32">
                <TimelineNode year="2018" title="CURIOSITY" side="left">
                  <p className="text-xl leading-relaxed text-gray-400">
                    10 years old with a Pentium 4. Breaking games to understand
                    them.
                    <span className="mt-2 block text-white">
                      The obsession started here.
                    </span>
                  </p>
                </TimelineNode>

                <TimelineNode
                  year="2020"
                  title="PRECISION"
                  side="right"
                  highlight
                >
                  <p className="text-xl leading-relaxed text-gray-400">
                    Dental labs. Every crown, every bridge—0.1mm accuracy or
                    failure.
                    <span className="mt-2 block font-semibold text-blue-400">
                      Learned: Details aren't details. They're everything.
                    </span>
                  </p>
                </TimelineNode>

                <TimelineNode year="2023" title="TRANSITION" side="left">
                  <p className="text-xl leading-relaxed text-gray-400">
                    Back to code. But this time with craftsman DNA.
                    <span className="mt-2 block text-white">
                      Same obsession. Different medium.
                    </span>
                  </p>
                </TimelineNode>

                <TimelineNode
                  year="2024"
                  title="EXECUTION"
                  side="right"
                  highlight
                >
                  <p className="text-xl leading-relaxed text-gray-400">
                    Two degrees earned. 93.8% GPA. Product built and sold.
                    <span className="mt-2 block font-semibold text-purple-400">
                      All while working full-time. No excuses.
                    </span>
                  </p>
                </TimelineNode>

                <TimelineNode year="NOW" title="BUILDING" side="left" active>
                  <p className="text-xl leading-relaxed text-gray-400">
                    Enterprise software. Healthcare SaaS. Real problems. Real
                    users.
                    <span className="mt-2 block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-bold text-transparent">
                      No more toy projects. Building for production.
                    </span>
                  </p>
                </TimelineNode>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE CLOSER */}
        <section className="relative flex min-h-screen items-center justify-center border-t border-white/10 px-8">
          <div className="max-w-6xl text-center">
            <div className="mb-16">
              <div className="mb-4 text-[clamp(1rem,3vw,2rem)] tracking-wider text-gray-600">
                MY PHILOSOPHY
              </div>
              <h2 className="text-[clamp(2.5rem,10vw,8rem)] leading-[0.95] font-black tracking-tighter">
                CODE IS
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  CRAFT
                </span>
              </h2>
            </div>

            <p className="mx-auto mb-16 max-w-4xl text-2xl leading-relaxed text-gray-400 md:text-3xl">
              Most developers write code. I engineer solutions with the
              precision of a craftsman and the curiosity of a scientist.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                LET'S WORK TOGETHER
                <ArrowRight
                  className="transition-transform group-hover:translate-x-2"
                  size={20}
                />
              </button>
              <div className="text-gray-500">Iraq 🇮🇶 → The World</div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // Design 2: DIAGONAL CHAOS
  const Design2 = () => (
    <div className="relative bg-black text-white">
      {/* Static gradient background */}
      <div className="bg-gradient-radial pointer-events-none fixed inset-0 from-blue-600/10 via-black to-purple-600/10"></div>

      {/* SECTION 1: THE HOOK */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-8">
        <div className="w-full max-w-7xl">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left: Statement */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-12 bg-blue-500"></div>
                <span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">
                  ALI MOHSIN
                </span>
              </div>

              <h1 className="mb-12 text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] font-black tracking-tighter uppercase">
                FROM
                <br />
                DENTAL
                <br />
                LABS
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  TO DEV
                </span>
              </h1>

              <div className="mb-12 max-w-xl space-y-6 text-lg font-medium text-gray-400">
                <p className="text-2xl leading-relaxed font-bold text-white">
                  I bring precision from crafting dental prosthetics to
                  engineering software.
                </p>
                <p className="leading-relaxed">
                  6 years learning that 0.1mm ruins everything. Now I apply that
                  obsession to code.
                </p>
              </div>

              <button className="flex items-center gap-3 bg-white px-8 py-4 text-lg font-black tracking-wider text-black uppercase transition-colors hover:bg-gray-200">
                SEE MY WORK
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Right: Metrics Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="border-2 border-white/10 bg-white/5 p-8 transition-all hover:border-blue-500/50">
                  <div className="mb-2 bg-gradient-to-br from-blue-400 to-cyan-500 bg-clip-text text-6xl font-black text-transparent">
                    93.8
                    <span className="text-3xl">%</span>
                  </div>
                  <div className="text-sm font-bold tracking-wider text-gray-500 uppercase">
                    Record GPA
                  </div>
                </div>

                <div className="border-2 border-white/10 bg-white/5 p-8 transition-all hover:border-purple-500/50">
                  <div className="mb-2 bg-gradient-to-br from-purple-400 to-pink-500 bg-clip-text text-6xl font-black text-transparent">
                    6<span className="text-3xl">YRS</span>
                  </div>
                  <div className="text-sm font-bold tracking-wider text-gray-500 uppercase">
                    Craft Mastery
                  </div>
                </div>

                <div className="border-2 border-white/10 bg-white/5 p-8 transition-all hover:border-pink-500/50">
                  <div className="mb-2 bg-gradient-to-br from-pink-400 to-orange-500 bg-clip-text text-6xl font-black text-transparent">
                    10
                    <span className="text-3xl">+</span>
                  </div>
                  <div className="text-sm font-bold tracking-wider text-gray-500 uppercase">
                    Tech Stack
                  </div>
                </div>

                <div className="border-2 border-white/10 bg-white/5 p-8 transition-all hover:border-green-500/50">
                  <div className="mb-2 bg-gradient-to-br from-green-400 to-emerald-500 bg-clip-text text-6xl font-black text-transparent">
                    1
                  </div>
                  <div className="text-sm font-bold tracking-wider text-gray-500 uppercase">
                    Sold Product
                  </div>
                </div>
              </div>

              {/* Decorative borders */}
              <div className="absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2">
                <div className="h-full w-full rotate-6 border-2 border-white/5"></div>
                <div className="absolute inset-0 h-full w-full -rotate-6 border-2 border-white/5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MANIFESTO */}
      <section className="relative border-t border-white/10 px-8 py-40">
        <div className="mx-auto max-w-6xl">
          <div className="mb-32 text-center">
            <h2 className="mb-8 text-[clamp(2.5rem,9vw,7rem)] leading-none font-black tracking-tighter uppercase">
              I'M NOT LIKE
              <br />
              OTHER DEVS
            </h2>
            <div className="mx-auto h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="border-2 border-white/10 p-8 text-center transition-all hover:border-white/30">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500">
                <Target size={40} className="text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-black tracking-wide uppercase">
                DOMAIN EXPERT
              </h3>
              <p className="leading-relaxed font-medium text-gray-400">
                6 years in healthcare. I know the workflows, the pain points,
                the compliance needs. Not from docs—from living it.
              </p>
            </div>

            <div className="border-2 border-white/10 p-8 text-center transition-all hover:border-white/30">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
                <Code2 size={40} className="text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-black tracking-wide uppercase">
                PRECISION OBSESSED
              </h3>
              <p className="leading-relaxed font-medium text-gray-400">
                Trained where 0.1mm matters. That attention to detail is in my
                DNA. Every function. Every component. Perfect or start over.
              </p>
            </div>

            <div className="border-2 border-white/10 p-8 text-center transition-all hover:border-white/30">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center bg-gradient-to-br from-pink-500 to-orange-500">
                <Rocket size={40} className="text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-black tracking-wide uppercase">
                PROVEN SHIPPER
              </h3>
              <p className="leading-relaxed font-medium text-gray-400">
                Built and sold product while working full-time. 93.8% GPA with
                two degrees. I don't just code—I execute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE TIMELINE */}
      <section className="relative border-t border-white/10 px-8 py-40">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-24 text-center text-6xl font-black tracking-tighter uppercase md:text-8xl">
            THE EVOLUTION
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-[50px] w-px bg-gradient-to-b from-transparent via-white/30 to-transparent md:left-1/2"></div>

            <div className="space-y-32">
              <div className="relative md:pr-[50%]">
                <div className="md:pr-20">
                  <div className="absolute top-0 left-[50px] z-10 h-6 w-6 -translate-x-1/2 border-4 border-black bg-gray-700 md:left-1/2"></div>
                  <div className="mb-4 inline-block border-2 border-gray-700 px-4 py-2 font-mono text-sm font-black tracking-wider text-gray-500 uppercase">
                    2018
                  </div>
                  <h3 className="mb-4 text-4xl font-black tracking-tight uppercase">
                    CURIOSITY
                  </h3>
                  <p className="text-xl leading-relaxed font-medium text-gray-400">
                    10 years old. Pentium 4. Trying to understand how games
                    worked.
                    <span className="mt-2 block font-bold text-white">
                      The obsession started here.
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative md:pl-[50%]">
                <div className="md:pl-20">
                  <div className="absolute top-0 left-[50px] z-10 h-6 w-6 -translate-x-1/2 border-4 border-black bg-blue-500 md:left-1/2"></div>
                  <div className="mb-4 inline-block border-2 border-blue-500 bg-blue-500/10 px-4 py-2 font-mono text-sm font-black tracking-wider text-blue-500 uppercase">
                    2020
                  </div>
                  <h3 className="mb-4 text-4xl font-black tracking-tight text-blue-500 uppercase">
                    PRECISION
                  </h3>
                  <p className="text-xl leading-relaxed font-medium text-gray-400">
                    Dental labs. Every crown, every bridge—0.1mm accuracy or
                    failure.
                    <span className="mt-2 block font-bold text-blue-400">
                      Learned: Details aren't details. They're everything.
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative md:pr-[50%]">
                <div className="md:pr-20">
                  <div className="absolute top-0 left-[50px] z-10 h-6 w-6 -translate-x-1/2 border-4 border-black bg-gray-700 md:left-1/2"></div>
                  <div className="mb-4 inline-block border-2 border-gray-700 px-4 py-2 font-mono text-sm font-black tracking-wider text-gray-500 uppercase">
                    2023
                  </div>
                  <h3 className="mb-4 text-4xl font-black tracking-tight uppercase">
                    TRANSITION
                  </h3>
                  <p className="text-xl leading-relaxed font-medium text-gray-400">
                    Back to code. But different. I brought the craftsman mindset
                    with me.
                    <span className="mt-2 block font-bold text-white">
                      Same obsession. Different medium.
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative md:pl-[50%]">
                <div className="md:pl-20">
                  <div className="absolute top-0 left-[50px] z-10 h-6 w-6 -translate-x-1/2 border-4 border-black bg-purple-500 md:left-1/2"></div>
                  <div className="mb-4 inline-block border-2 border-purple-500 bg-purple-500/10 px-4 py-2 font-mono text-sm font-black tracking-wider text-purple-500 uppercase">
                    2024
                  </div>
                  <h3 className="mb-4 text-4xl font-black tracking-tight text-purple-500 uppercase">
                    EXECUTION
                  </h3>
                  <p className="text-xl leading-relaxed font-medium text-gray-400">
                    Two degrees. 93.8% GPA. Product built and sold.
                    <span className="mt-2 block font-bold text-purple-400">
                      All while working full-time. No excuses.
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative md:pr-[50%]">
                <div className="md:pr-20">
                  <div className="absolute top-0 left-[50px] z-10 h-6 w-6 -translate-x-1/2 border-4 border-black bg-gradient-to-r from-blue-500 to-purple-500 md:left-1/2"></div>
                  <div className="mb-4 inline-block border-2 border-blue-500 bg-gradient-to-r from-blue-500 from-blue-500/10 to-purple-500 to-purple-500/10 bg-clip-text px-4 py-2 font-mono text-sm font-black tracking-wider text-transparent uppercase">
                    NOW
                  </div>
                  <h3 className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl font-black tracking-tight text-transparent uppercase">
                    BUILDING
                  </h3>
                  <p className="text-xl leading-relaxed font-medium text-gray-400">
                    Enterprise software. Healthcare SaaS. Real problems. Real
                    users.
                    <span className="mt-2 block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-bold text-transparent">
                      No more toy projects. Building for production.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE CLOSER */}
      <section className="relative flex min-h-screen items-center justify-center border-t border-white/10 px-8">
        <div className="max-w-6xl text-center">
          <div className="mb-16">
            <div className="mb-4 text-sm font-bold tracking-[0.3em] text-gray-600 uppercase">
              MY PHILOSOPHY
            </div>
            <h2 className="text-[clamp(3rem,12vw,10rem)] leading-[0.9] font-black tracking-tighter uppercase">
              CODE IS
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                CRAFT
              </span>
            </h2>
          </div>

          <p className="mx-auto mb-16 max-w-4xl text-2xl leading-relaxed font-medium text-gray-400 md:text-3xl">
            Most developers write code. I engineer solutions with the precision
            of a craftsman and the curiosity of a scientist.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 text-lg font-black tracking-wider text-white uppercase transition-all hover:from-blue-500 hover:to-purple-500">
              LET'S WORK TOGETHER
              <ArrowRight size={20} />
            </button>
            <div className="font-bold text-gray-500">Iraq 🇮🇶 → The World</div>
          </div>
        </div>
      </section>
    </div>
  );

  // Helper Components
  const FloatingMetric = ({ number, unit, label, delay, color }) => (
    <div
      className="group relative cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:scale-105 hover:border-white/30 hover:bg-white/10"
      style={{ animation: `float 3s ease-in-out ${delay}s infinite` }}
    >
      <div className="mb-2 text-5xl font-black">
        <span
          className={`bg-gradient-to-r bg-clip-text text-transparent ${color}`}
        >
          {number}
        </span>
        <span className="text-2xl text-gray-500">{unit}</span>
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );

  const ManifestoCard = ({ icon, title, description }) => (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:border-white/20 hover:bg-white/10">
      <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-4 text-2xl font-black">{title}</h3>
      <p className="leading-relaxed text-gray-400">{description}</p>
    </div>
  );

  const TimelineNode = ({ year, title, side, children, highlight, active }) => (
    <div
      className={`relative ${side === "right" ? "md:pl-[50%]" : "md:pr-[50%]"}`}
    >
      <div
        className={`${side === "right" ? "md:pl-20" : "md:pr-20 md:text-right"}`}
      >
        {/* Year dot */}
        <div
          className={`absolute top-0 left-[50px] z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-black md:left-1/2 ${
            active
              ? "bg-gradient-to-r from-blue-500 to-purple-500"
              : highlight
                ? "bg-white"
                : "bg-gray-700"
          }`}
        ></div>

        {/* Year badge */}
        <div
          className={`mb-4 inline-block rounded-full border-2 px-4 py-2 font-mono font-bold ${
            active
              ? "border-blue-500 bg-blue-500/10 text-blue-500"
              : highlight
                ? "border-white bg-white/5 text-white"
                : "border-gray-700 bg-gray-900/50 text-gray-500"
          }`}
        >
          {year}
        </div>

        <h3
          className={`mb-4 text-3xl font-black ${
            active
              ? "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              : highlight
                ? "text-white"
                : "text-gray-400"
          }`}
        >
          {title}
        </h3>

        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );

  const StatPill = ({ value }) => (
    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-all hover:border-white/20 hover:bg-white/10">
      {value}
    </div>
  );

  const FakeClaim = ({ text }) => (
    <div className="flex items-center gap-3 opacity-50">
      <div className="h-6 w-6 rounded-full border-2 border-gray-700"></div>
      <span className="text-gray-600 line-through">{text}</span>
    </div>
  );

  const RealClaim = ({ icon, text }) => (
    <div className="group flex cursor-pointer items-start gap-4">
      <div className="text-3xl transition-transform group-hover:scale-125">
        {icon}
      </div>
      <span className="leading-relaxed text-white transition-colors group-hover:text-blue-400">
        {text}
      </span>
    </div>
  );

  const JourneyCard = ({
    year,
    title,
    emoji,
    children,
    highlight,
    active,
    cta,
  }) => (
    <div
      className={`group relative rounded-3xl border-2 p-8 transition-all hover:scale-105 ${
        cta
          ? "cursor-pointer border-transparent bg-gradient-to-br from-blue-600 to-purple-600"
          : active
            ? "border-blue-500 bg-gradient-to-br from-blue-600/20 to-purple-600/20"
            : highlight
              ? "border-white/20 bg-white/5 hover:bg-white/10"
              : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
    >
      <div className="mb-4 text-5xl transition-transform group-hover:scale-110">
        {emoji}
      </div>
      <div
        className={`mb-2 font-mono text-sm ${active ? "text-blue-400" : "text-gray-500"}`}
      >
        {year}
      </div>
      <h3
        className={`mb-3 text-2xl font-black ${active ? "text-blue-400" : "text-white"}`}
      >
        {title}
      </h3>
      <p className="leading-relaxed text-gray-300">{children}</p>
    </div>
  );

  return (
    <div className="bg-black">
      {/* Design Switcher */}
      <div className="fixed top-8 right-8 z-50 flex gap-3 rounded-full border border-white/20 bg-black/90 p-2 shadow-2xl backdrop-blur-xl">
        <button
          onClick={() => setActiveDesign("design1")}
          className={`rounded-full px-6 py-3 text-sm font-bold transition-all ${
            activeDesign === "design1"
              ? "bg-white text-black"
              : "bg-transparent text-gray-400 hover:text-white"
          }`}
        >
          KINETIC
        </button>
        <button
          onClick={() => setActiveDesign("design2")}
          className={`rounded-full px-6 py-3 text-sm font-bold transition-all ${
            activeDesign === "design2"
              ? "bg-white text-black"
              : "bg-transparent text-gray-400 hover:text-white"
          }`}
        >
          DIAGONAL
        </button>
      </div>

      {/* Render Active Design */}
      {activeDesign === "design1" ? <Design1 /> : <Design2 />}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `,
        }}
      />
    </div>
  );
};

export default AboutSection2Designs;
