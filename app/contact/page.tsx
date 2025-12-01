import { HomeCTAForm } from "@/components/HomeCTAForm";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto mt-20 min-h-dvh max-w-7xl py-12">
      <div className="mx-auto grid grid-cols-12 gap-16">
        <div className="col-span-7 flex flex-col justify-between">
          <div className="mb-16">
            <h1 className="mb-8 text-9xl font-light tracking-tighter capitalize">
              Drop me a message.
            </h1>
            <p className="text-foreground/60 max-w-2xl text-lg leading-relaxed md:text-xl">
              Whether it&apos;s a complex SaaS architecture, a dental lab
              system, or an AI integration — I&apos;m ready to engineer it.
            </p>
          </div>
          <div className="flex flex-col justify-between space-y-8">
            {/* Email Block */}
            <div>
              <p className="text-foreground/60 mb-2 font-mono text-xs tracking-widest uppercase">
                Direct Contact
              </p>
              <a
                href="mailto:alilefta95@gmail.com"
                className="group flex items-center gap-3 font-mono text-2xl text-white transition-colors hover:text-blue-400 md:text-3xl"
              >
                <Mail className="text-foreground/60 h-6 w-6 group-hover:text-blue-500" />
                alilefta95@gmail.com
              </a>
            </div>

            {/* Location & Socials */}
            <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-8">
              <div className="text-foreground/60 flex items-center gap-3">
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
        <div className="bg-foreground/2 border-foreground/4 glass-card col-span-5 rounded-2xl border-2 px-8">
          <HomeCTAForm />
        </div>
      </div>
    </div>
  );
}
