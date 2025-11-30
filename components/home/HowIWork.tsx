import { Code, PenTool, Rocket, Search } from "lucide-react";
import { Badge } from "@/components/ui/custom/Badge";

export default function HowIWork() {
  return (
    <section className="relative mx-auto max-w-7xl gap-12 px-6 py-8 lg:px-8 lg:py-16">
      <div className="mx-auto mb-20">
        <h2 className="mb-2 text-5xl font-medium capitalize">
          How <span className="text-foreground/50">I Work</span>
        </h2>
        <p className="text-foreground/50 mb-4 text-sm tracking-wide">
          I follow 4 steps process to deliver the best experience
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="bg-foreground/5 group relative flex items-center justify-between overflow-hidden rounded-2xl px-6 py-6">
          <div className="absolute inset-0 w-full translate-x-1200 rotate-x-2 bg-blue-700 transition-transform duration-500 group-hover:translate-x-0"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="text-foreground/2 group-hover:text-foreground/10 text-6xl transition-colors sm:text-9xl">
              01
            </div>
            <div className="">
              <h3 className="mb-2 text-4xl font-light uppercase sm:text-5xl">
                Discovery
              </h3>
              <p className="text-foreground/60 text-md">
                Understanding your needs and requirements
              </p>
            </div>
          </div>
          <Badge className="relative z-10 mr-4 translate-x-200 p-2 transition-all group-hover:translate-x-0">
            <Search />
          </Badge>
        </div>

        {/* Row 2 */}
        <div className="bg-foreground/5 group relative flex items-center justify-between overflow-hidden rounded-2xl px-6 py-6 md:ml-48">
          <div className="absolute inset-0 w-full translate-x-1200 rotate-x-2 bg-blue-700 transition-transform duration-500 group-hover:translate-x-0"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="text-foreground/2 group-hover:text-foreground/10 text-6xl transition-colors duration-700 sm:text-9xl">
              02
            </div>
            <div className="">
              <h3 className="mb-2 text-4xl font-light uppercase sm:text-5xl">
                Design
              </h3>
              <p className="text-foreground/60 text-md">
                Creating the architecture and user experience
              </p>
            </div>
          </div>
          <Badge className="relative z-10 mr-4 translate-x-200 p-2 transition-all group-hover:translate-x-0">
            <PenTool />
          </Badge>
        </div>

        {/* Row 3 */}
        <div className="bg-foreground/5 group relative flex items-center justify-between overflow-hidden rounded-2xl px-6 py-6">
          <div className="absolute inset-0 w-full translate-x-1200 rotate-x-2 bg-blue-700 transition-transform duration-500 group-hover:translate-x-0"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="text-foreground/2 group-hover:text-foreground/10 text-6xl transition-colors sm:text-9xl">
              03
            </div>
            <div className="">
              <h3 className="mb-2 text-4xl font-light uppercase sm:text-5xl">
                Build
              </h3>
              <p className="text-foreground/60 text-md">
                Writing clean, maintainable code
              </p>
            </div>
          </div>
          <Badge className="relative z-10 mr-4 translate-x-200 p-2 transition-all group-hover:translate-x-0">
            <Code />
          </Badge>
        </div>

        {/* Row 4 */}
        <div className="bg-foreground/5 group relative flex items-center justify-between overflow-hidden rounded-2xl px-6 py-6 md:ml-48">
          <div className="absolute inset-0 w-full translate-x-1200 rotate-x-2 bg-blue-700 transition-transform duration-500 group-hover:translate-x-0"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="text-foreground/2 group-hover:text-foreground/10 text-6xl transition-colors sm:text-9xl">
              04
            </div>
            <div className="">
              <h3 className="mb-2 text-4xl font-light uppercase sm:text-5xl">
                Deliver
              </h3>
              <p className="text-foreground/60 text-md">
                Testing, deployment, and support
              </p>
            </div>
          </div>
          <Badge className="relative z-10 mr-4 translate-x-200 p-2 transition-all group-hover:translate-x-0">
            <Rocket />
          </Badge>
        </div>
      </div>
    </section>
  );
}
