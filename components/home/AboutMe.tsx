import { GraduationCap } from "lucide-react";
import { Badge } from "../ui/custom/Badge";

export default function AboutMe() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-8 lg:flex-row lg:px-8 lg:py-16">
      {/* <div className="absolute inset-0 flex w-full">
        <div className="mx-auto h-96 w-96 rounded-full bg-black/70"></div>
      </div> */}

      {/* Left Column */}
      <div className="relative z-20 flex flex-col gap-6">
        <div className="mb-12 w-fit">
          <Badge variant={"surface"} intent={"accent"}>
            Who I am
          </Badge>
        </div>

        <div className="relative py-2">
          <h1 className="from-foreground/40 bg-linear-to-b to-white bg-clip-text text-left text-5xl font-bold md:text-9xl md:leading-[108px]">
            From <br />
            <span className="">
              Dental <br /> Tech to
            </span>
            <br />
            <span className="bg-linear-to-r from-white to-blue-600 bg-clip-text text-transparent">
              Software <br /> Engineer
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-8 border-l border-white/10 pl-8 md:flex-row md:items-start">
          <p className="max-w-lg text-lg leading-relaxed font-light text-balance text-zinc-400 md:text-xl">
            I spent <span className="font-medium text-white">6 years</span>{" "}
            mastering 0.1mm precision in dental laboratories. Now, I bring that
            same obsessive attention to detail to every line of code I write.
          </p>

          <button className="group relative mt-2 h-fit w-fit shrink-0 overflow-hidden rounded-full bg-white px-8 py-4 font-mono text-xs font-bold tracking-widest text-black uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            <span className="relative z-10 flex items-center gap-3">
              View Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7" className=""></path>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="relative z-10 grid grid-cols-2 gap-3 pt-12 md:gap-4 lg:col-span-5 lg:pt-0">
        <div className="group relative flex h-[180px] flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-800/60 md:p-6">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase transition-colors group-hover:text-zinc-300 md:text-[10px]">
              Education
            </span>
            <div className="rounded-full border border-white/5 bg-white/5 p-2 transition-colors group-hover:border-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-graduation-cap text-zinc-400 transition-colors group-hover:text-white"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
          </div>
          <div className="">
            <div className="mb-1 text-4xl font-medium tracking-tighter text-white md:text-5xl">
              2
            </div>
            <p className="mt-1 font-mono text-xs leading-tight text-zinc-400">
              Degrees in Dental Tech &amp; CS
            </p>
          </div>
        </div>

        <div className="group relative flex h-[180px] flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-800/60 md:p-6">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase transition-colors group-hover:text-zinc-300 md:text-[10px]">
              Performance
            </span>
            <div className="rounded-full border border-white/5 bg-white/5 p-2 transition-colors group-hover:border-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-award text-zinc-400 transition-colors group-hover:text-indigo-400"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
          </div>
          <div className="">
            <div className="mb-1 flex items-baseline text-4xl font-medium tracking-tighter text-white md:text-5xl">
              93<span className="text-2xl text-zinc-500">.8%</span>
            </div>
            <p className="mt-1 font-mono text-xs leading-tight text-zinc-400">
              Record GPA in CS
            </p>
          </div>
        </div>

        <div className="group relative flex h-[180px] flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/40 pt-5 pr-5 pb-5 pl-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-800/60 md:p-6">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase transition-colors group-hover:text-zinc-300 md:text-[10px]">
              Experience
            </span>
            <div className="rounded-full border border-white/5 bg-white/5 p-2 transition-colors group-hover:border-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-history text-zinc-400 transition-colors group-hover:text-white"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M12 7v5l4 2"></path>
              </svg>
            </div>
          </div>
          <div className="">
            <div className="mb-1 flex items-baseline text-4xl font-medium tracking-tighter text-white md:text-5xl">
              6<span className="ml-1 text-xl text-zinc-500">YRS</span>
            </div>
            <p className="mt-1 font-mono text-xs leading-tight text-zinc-400">
              Precision Dental Tech
            </p>
          </div>
        </div>

        <div className="group relative flex h-[180px] flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-800/60 md:p-6">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase transition-colors group-hover:text-zinc-300 md:text-[10px]">
              Stack
            </span>
            <div className="rounded-full border border-white/5 bg-white/5 p-2 transition-colors group-hover:border-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layers text-zinc-400 transition-colors group-hover:text-blue-400"
              >
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
              </svg>
            </div>
          </div>
          <div className="">
            <div className="mb-1 flex items-baseline text-4xl font-medium tracking-tighter text-white md:text-5xl">
              10<span className="ml-1 text-xl text-zinc-500">+</span>
            </div>
            <p className="mt-1 font-mono text-xs leading-tight text-zinc-400">
              Modern Frameworks
            </p>
          </div>
        </div>

        <div className="group relative col-span-2 flex items-center justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-indigo-950/20 to-zinc-900/40 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:from-indigo-900/30 md:p-8">
          <div className="absolute inset-0 bg-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          <div className="relative z-10">
            <div className="mb-2 flex items-center gap-3">
              <span className="font-mono text-[9px] tracking-widest text-indigo-400 uppercase md:text-[10px]">
                Achievement
              </span>
            </div>
            <div className="text-2xl font-medium tracking-tight text-white md:text-3xl">
              Sold SaaS Product
            </div>
            <p className="mt-1 font-mono text-xs text-zinc-400">
              Full lifecycle: Idea to Exit
            </p>
          </div>
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-indigo-500/20 bg-indigo-500/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-indigo-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trophy text-indigo-300"
            >
              <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
