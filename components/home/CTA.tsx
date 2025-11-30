import { HomeCTAForm } from "../HomeCTAForm";
import { Button } from "../ui/custom/Button";
import { Mail, MapPin } from "lucide-react"; // Assuming you have Lucide icons

export default async function CTASection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-24">
      {/* 1. THE CONTAINER (Glass + Spotlight) */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-blue-600 shadow-2xl">
        {/* Background Texture (Grid) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>

        {/* The Blue Spotlight (Instead of solid blue bg) */}
        <div className="pointer-events-none absolute -top-[200px] -right-[200px] h-[600px] w-[600px] rounded-full bg-blue-600/30 blur-[120px]"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]"></div>

        <div className="relative z-10 grid grid-cols-1 gap-12 p-8 md:p-12 lg:grid-cols-2 lg:gap-24 lg:p-16">
          {/* LEFT COLUMN: The Pitch */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="mb-6 text-5xl font-bold tracking-tighter text-white md:text-7xl">
                Let’s build <br />
                <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-wrap text-transparent">
                  something real.
                </span>
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-zinc-400 md:text-xl">
                Whether it&apos;s a complex SaaS architecture, a dental lab
                system, or an AI integration — I&apos;m ready to engineer it.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {/* Email Block */}
              <div>
                <p className="mb-2 font-mono text-xs tracking-widest text-zinc-500 uppercase">
                  Direct Contact
                </p>
                <a
                  href="mailto:alilefta95@gmail.com"
                  className="group flex items-center gap-3 font-mono text-2xl text-white transition-colors hover:text-blue-400 md:text-3xl"
                >
                  <Mail className="h-6 w-6 text-zinc-500 group-hover:text-blue-500" />
                  alilefta95@gmail.com
                </a>
              </div>

              {/* Location & Socials */}
              <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-8">
                <div className="flex items-center gap-3 text-zinc-500">
                  <MapPin className="h-5 w-5" />
                  <div className="font-mono text-sm">
                    <span className="block text-zinc-300">
                      Babil, Hilla, Iraq
                    </span>
                    <span>51001</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {/* Use your Ghost Button variants here */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/10 hover:bg-white hover:text-black"
                  >
                    <span className="text-xs font-bold">TE</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/10 hover:bg-white hover:text-black"
                  >
                    <span className="text-xs font-bold">IG</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-md md:p-10">
            <HomeCTAForm />
          </div>
        </div>
      </div>
    </section>
  );
}
