// "use client";

// import React, { useState } from "react";
// import { ArrowRight } from "lucide-react";

// const AboutSectionDesigns = () => {
//   const [activeDesign, setActiveDesign] = useState("design1");

//   // Design 1: The Journey Map
//   const Design1 = () => (
//     <div className="relative min-h-screen overflow-hidden bg-black text-white">
//       {/* Subtle grid background */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
//           backgroundSize: "50px 50px",
//         }}
//       ></div>

//       <div className="relative z-10 mx-auto max-w-7xl p-8 md:p-16 lg:p-24">
//         {/* Header */}
//         <div className="mb-32">
//           <div className="mb-4 text-sm tracking-wider text-gray-500">ABOUT</div>
//           <h1 className="mb-8 text-7xl leading-none font-black tracking-tight md:text-9xl">
//             ALI MOHSIN
//           </h1>
//           <div className="flex items-center gap-4 text-lg text-gray-400">
//             <span>Iraq 🇮🇶</span>
//             <span className="h-1 w-1 rounded-full bg-gray-600"></span>
//             <span>Full-Stack Developer</span>
//             <span className="h-1 w-1 rounded-full bg-gray-600"></span>
//             <span>Building Since 2018</span>
//           </div>
//         </div>

//         {/* The Journey - Timeline Style */}
//         <div className="relative mb-32">
//           {/* Vertical line through timeline */}
//           <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2"></div>

//           <div className="space-y-24">
//             {/* 2018 */}
//             <TimelineItem
//               year="2018"
//               side="left"
//               title="The Curiosity"
//               number="01"
//             >
//               <p className="text-xl leading-relaxed md:text-2xl">
//                 10 years old. Pentium 4. Trying to understand how games worked.
//                 <br />
//                 <span className="text-gray-500">
//                   That curiosity? It never left.
//                 </span>
//               </p>
//             </TimelineItem>

//             {/* 2020 */}
//             <TimelineItem
//               year="2020"
//               side="right"
//               title="The Craft"
//               number="02"
//             >
//               <p className="text-xl leading-relaxed md:text-2xl">
//                 Dental technology. Every millimeter matters. Every detail
//                 counts.
//                 <br />
//                 <span className="text-gray-500">
//                   I learned precision isn&apos;t optional—it&apos;s everything.
//                 </span>
//               </p>
//             </TimelineItem>

//             {/* 2023 */}
//             <TimelineItem
//               year="2023"
//               side="left"
//               title="The Return"
//               number="03"
//             >
//               <p className="text-xl leading-relaxed md:text-2xl">
//                 Back to code. But different. I brought the craftsman mindset
//                 with me.
//                 <br />
//                 <span className="text-gray-500">
//                   Built and sold software while working full-time.
//                 </span>
//               </p>
//             </TimelineItem>

//             {/* 2024 */}
//             <TimelineItem
//               year="2024"
//               side="right"
//               title="The Proof"
//               number="04"
//             >
//               <p className="text-xl leading-relaxed md:text-2xl">
//                 Two degrees. 93.8% GPA. One sold product.
//                 <br />
//                 <span className="text-gray-500">Zero shortcuts. All work.</span>
//               </p>
//             </TimelineItem>

//             {/* Now */}
//             <TimelineItem
//               year="NOW"
//               side="left"
//               title="The Mission"
//               number="05"
//               highlight
//             >
//               <p className="text-xl leading-relaxed md:text-2xl">
//                 Building production software that solves real problems.
//                 <br />
//                 <span className="text-blue-400">
//                   From enterprise desktop apps to modern SaaS.
//                 </span>
//               </p>
//             </TimelineItem>
//           </div>
//         </div>

//         {/* What I Bring */}
//         <div className="mb-32">
//           <h2 className="mb-16 text-5xl font-black md:text-7xl">
//             WHAT I BRING
//           </h2>

//           <div className="grid gap-12 md:grid-cols-3 md:gap-8">
//             <PowerPoint
//               number="01"
//               title="Healthcare Domain Knowledge"
//               description="6 years in dental labs. I understand healthcare workflows, compliance, and real user needs."
//             />
//             <PowerPoint
//               number="02"
//               title="Craftsman Precision"
//               description="Trained where 0.1mm matters. That attention to detail shows in every line of code."
//             />
//             <PowerPoint
//               number="03"
//               title="Builder Mindset"
//               description="I don't just code features. I solve problems. I ship products. I deliver results."
//             />
//           </div>
//         </div>

//         {/* The Philosophy - Large Statement */}
//         <div className="mb-16">
//           <div className="max-w-5xl">
//             <div className="mb-8 text-8xl leading-none font-black text-white/5 md:text-9xl">
//               "
//             </div>
//             <blockquote className="-mt-16 text-4xl leading-tight font-black md:text-6xl">
//               I DON'T BUILD SOFTWARE.
//               <br />
//               I SOLVE PROBLEMS
//               <br />
//               <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                 THAT NEED SOFTWARE.
//               </span>
//             </blockquote>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Design 2: Split Personality
//   const Design2 = () => (
//     <div className="min-h-screen bg-black text-white">
//       {/* Split Screen Hero */}
//       <div className="grid min-h-screen md:grid-cols-2">
//         {/* Left: The Past */}
//         <div className="relative flex flex-col justify-center border-r border-white/10 p-8 md:p-16">
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
//           <div className="relative z-10">
//             <div className="mb-4 text-sm text-gray-500">WHERE I CAME FROM</div>
//             <h2 className="mb-12 text-6xl leading-none font-black md:text-8xl">
//               DENTAL
//               <br />
//               LABS
//             </h2>

//             <div className="max-w-md space-y-8 text-lg text-gray-400">
//               <p>6 years crafting dental prosthetics.</p>
//               <p>
//                 Every crown, every bridge—precision measured in 0.1 millimeters.
//               </p>
//               <p>
//                 One mistake? Patient discomfort. Failed restoration. Start over.
//               </p>
//               <p className="text-xl text-white">
//                 That's where I learned: <br />
//                 <strong>Details aren't details. They're everything.</strong>
//               </p>
//             </div>

//             <div className="mt-12 flex items-center gap-4 text-sm text-gray-600">
//               <div>2018</div>
//               <div className="h-px flex-1 bg-gray-800"></div>
//               <div>2024</div>
//             </div>
//           </div>
//         </div>

//         {/* Right: The Present */}
//         <div className="relative flex flex-col justify-center p-8 md:p-16">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
//           <div className="relative z-10">
//             <div className="mb-4 text-sm text-blue-400">WHAT I DO NOW</div>
//             <h2 className="mb-12 text-6xl leading-none font-black md:text-8xl">
//               SOFTWARE
//               <br />
//               <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                 THAT WORKS
//               </span>
//             </h2>

//             <div className="max-w-md space-y-8 text-lg text-gray-300">
//               <p>Full-stack development with the same precision mindset.</p>
//               <p>
//                 Every function, every component—built to solve real problems.
//               </p>
//               <p>One mistake? User frustration. Lost revenue. Rewrite.</p>
//               <p className="text-xl text-white">
//                 Same stakes. <br />
//                 <strong>Same craftsmanship.</strong>
//               </p>
//             </div>

//             <div className="mt-12">
//               <div className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-colors hover:bg-gray-200">
//                 Let's Build Something
//                 <ArrowRight size={20} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* The Bridge Section */}
//       <div className="border-t border-white/10 px-8 py-32 md:px-16">
//         <div className="mx-auto max-w-5xl text-center">
//           <div className="mb-8 text-sm text-gray-500">THE CONNECTION</div>
//           <h2 className="mb-12 text-5xl leading-tight font-black md:text-7xl">
//             FROM PHYSICAL CRAFT
//             <br />
//             TO DIGITAL CRAFT
//           </h2>

//           <div className="mt-20 grid gap-16 text-left md:grid-cols-2">
//             <div>
//               <div className="mb-4 text-6xl font-black text-white/10">01</div>
//               <h3 className="mb-4 text-2xl font-bold">Healthcare Domain</h3>
//               <p className="text-lg leading-relaxed text-gray-400">
//                 I know healthcare. Not from tutorials—from living it. I
//                 understand workflows, compliance needs, and what actually
//                 matters to users in medical environments.
//               </p>
//             </div>

//             <div>
//               <div className="mb-4 text-6xl font-black text-white/10">02</div>
//               <h3 className="mb-4 text-2xl font-bold">Precision Engineering</h3>
//               <p className="text-lg leading-relaxed text-gray-400">
//                 When you've crafted physical products where 0.1mm matters, you
//                 don't ship buggy code. You test. You refine. You deliver
//                 quality.
//               </p>
//             </div>

//             <div>
//               <div className="mb-4 text-6xl font-black text-white/10">03</div>
//               <h3 className="mb-4 text-2xl font-bold">Problem Solver First</h3>
//               <p className="text-lg leading-relaxed text-gray-400">
//                 Tech stack is secondary. The problem is primary. I choose tools
//                 based on what actually solves the problem—not what's trending.
//               </p>
//             </div>

//             <div>
//               <div className="mb-4 text-6xl font-black text-white/10">04</div>
//               <h3 className="mb-4 text-2xl font-bold">Ship, Don't Just Code</h3>
//               <p className="text-lg leading-relaxed text-gray-400">
//                 Built and sold a product while working full-time. Graduated with
//                 93.8% GPA while employed. I don't just learn—I execute.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Final Statement */}
//       <div className="border-t border-white/10 px-8 py-32 md:px-16">
//         <div className="mx-auto max-w-6xl">
//           <div className="mb-8 text-9xl font-black text-white/5">"</div>
//           <p className="-mt-16 mb-12 text-4xl leading-tight font-black md:text-6xl">
//             MOST DEVELOPERS WRITE CODE.
//             <br />
//             <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               I ENGINEER SOLUTIONS.
//             </span>
//           </p>
//           <div className="text-lg text-gray-500">— Ali Mohsin, Iraq 🇮🇶</div>
//         </div>
//       </div>
//     </div>
//   );

//   // Helper Components
//   const TimelineItem = ({ year, side, title, number, children, highlight }) => (
//     <div
//       className={`relative ${side === "right" ? "md:pl-[50%]" : "md:pr-[50%]"}`}
//     >
//       <div className={`${side === "right" ? "md:pl-16" : "md:pr-16"}`}>
//         {/* Year badge on the line */}
//         <div
//           className={`absolute ${side === "left" ? "left-0 md:right-0 md:left-auto" : "left-0"} top-0 -translate-x-1/2 border-2 bg-black md:left-1/2 ${highlight ? "border-blue-500" : "border-white"} rounded-full px-4 py-2 font-mono text-sm ${highlight ? "text-blue-500" : "text-white"} z-10`}
//         >
//           {year}
//         </div>

//         <div className="ml-8 pt-16 md:ml-0">
//           <div className="mb-2 font-mono text-sm text-gray-600">{number}</div>
//           <h3
//             className={`mb-6 text-3xl font-black md:text-4xl ${highlight ? "text-blue-500" : "text-white"}`}
//           >
//             {title}
//           </h3>
//           {children}
//         </div>
//       </div>
//     </div>
//   );

//   const PowerPoint = ({ number, title, description }) => (
//     <div className="group">
//       <div className="mb-4 text-5xl font-black text-white/5 transition-colors group-hover:text-white/10">
//         {number}
//       </div>
//       <h3 className="mb-3 text-2xl font-bold">{title}</h3>
//       <p className="text-lg leading-relaxed text-gray-400">{description}</p>
//     </div>
//   );

//   return (
//     <div className="bg-black">
//       {/* Design Switcher */}
//       <div className="fixed top-8 right-8 z-50 flex gap-3 rounded-full border border-white/20 bg-black p-2">
//         <button
//           onClick={() => setActiveDesign("design1")}
//           className={`rounded-full px-6 py-2 font-medium transition-all ${
//             activeDesign === "design1"
//               ? "bg-white text-black"
//               : "bg-transparent text-gray-400 hover:text-white"
//           }`}
//         >
//           Journey
//         </button>
//         <button
//           onClick={() => setActiveDesign("design2")}
//           className={`rounded-full px-6 py-2 font-medium transition-all ${
//             activeDesign === "design2"
//               ? "bg-white text-black"
//               : "bg-transparent text-gray-400 hover:text-white"
//           }`}
//         >
//           Split
//         </button>
//       </div>

//       {/* Render Active Design */}
//       {activeDesign === "design1" ? <Design1 /> : <Design2 />}
//     </div>
//   );
// };

// export default AboutSectionDesigns;
