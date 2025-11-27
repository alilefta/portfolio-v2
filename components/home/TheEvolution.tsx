import { Badge } from "@/components/ui/custom/Badge";

export default function TheEvolutionSection() {
  return (
    <section className="to-foreground/5 relative mx-auto max-w-7xl gap-12 rounded-2xl px-6 py-8 lg:px-8 lg:py-16">
      <div className="mx-auto mb-20">
        <h2 className="mb-4 text-center text-5xl font-medium capitalize">
          The <span className="text-foreground/50">Evolution</span>
        </h2>

        <hr className="mr-auto ml-auto h-0.5 w-24 bg-linear-to-r from-transparent via-zinc-500 to-transparent" />
      </div>

      <div className="grid grid-rows-5">
        {/* Row 1 */}
        <div className="grid grid-cols-11">
          {/* Content Left */}
          <div className="order-2 col-span-10 pb-8 md:order-1 md:col-span-5">
            <Badge variant={"outline"} className="mb-4">
              2018
            </Badge>
            <h3 className="mb-4 text-3xl uppercase md:text-4xl">CURIOSITY</h3>
            <p className="text-foreground/60 mb-1.5 max-w-72 text-sm tracking-wide">
              10 years old. Pentium 4. Trying to understand how games worked.
            </p>
            <p className="text-foreground/60 max-w-72 text-sm tracking-wide">
              The obsession started here.
            </p>
          </div>

          {/* Border Right */}
          <div className="order-1 col-span-1 flex w-full flex-col items-center md:order-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-700"></span>
            <span className="bg-foreground/10 h-full w-px"></span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-11">
          {/* Content Right */}
          <div className="order-2 col-span-10 pb-8 md:col-span-5">
            <Badge variant={"outline"} className="mb-4">
              2020
            </Badge>
            <h3 className="mb-4 text-3xl uppercase md:text-4xl">PRECISION</h3>
            <p className="text-foreground/60 mb-1.5 max-w-72 text-sm tracking-wide">
              Dental labs. Every crown, every bridge—0.1mm accuracy or failure.
            </p>
            <p className="text-foreground/60 max-w-72 text-sm tracking-wide">
              Learned: Details aren&apos;t details. They&apos;re everything.
            </p>
          </div>

          {/* Border Left */}
          <div className="order-1 col-span-1 flex w-full flex-col items-center md:col-start-6">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-700"></span>
            <span className="bg-foreground/10 h-full w-px"></span>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-11">
          {/* Content Left */}
          <div className="order-2 col-span-10 pb-8 md:order-1 md:col-span-5">
            <Badge variant={"outline"} className="mb-4">
              2023
            </Badge>
            <h3 className="mb-4 text-3xl uppercase md:text-4xl">TRANSITION</h3>
            <p className="text-foreground/60 mb-1.5 max-w-72 text-sm tracking-wide">
              Back to code. But different. I brought the craftsman mindset with
              me.
            </p>
            <p className="text-foreground/60 max-w-72 text-sm tracking-wide">
              Same obsession. Different medium.
            </p>
          </div>

          {/* Border Right */}
          <div className="order-1 col-span-1 flex w-full flex-col items-center md:order-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-700"></span>
            <span className="bg-foreground/10 h-full w-px"></span>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-11">
          {/* Content Right */}
          <div className="order-2 col-span-10 pb-8 md:col-span-5">
            <Badge variant={"outline"} className="mb-4">
              2024
            </Badge>
            <h3 className="mb-4 text-3xl uppercase md:text-4xl">EXECUTION</h3>
            <p className="text-foreground/60 mb-1.5 max-w-72 text-sm tracking-wide">
              Two degrees. Completed Computer Science bachelor with 93.8% GPA.
              Product built and sold.
            </p>
            <p className="text-foreground/60 max-w-72 text-sm tracking-wide">
              All while working full-time. No excuses.
            </p>
          </div>

          {/* Border Left */}
          <div className="order-1 col-span-1 flex w-full flex-col items-center md:col-start-6">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-700"></span>
            <span className="bg-foreground/10 h-full w-px"></span>
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-11">
          {/* Content Left */}
          <div className="order-2 col-span-10 pb-8 md:order-1 md:col-span-5">
            <Badge variant={"surface"} intent={"success"} className="mb-4">
              2025
            </Badge>
            <h3 className="mb-4 text-3xl uppercase md:text-4xl">BUILDING</h3>
            <p className="text-foreground/60 mb-1.5 max-w-72 text-sm tracking-wide">
              Enterprise software. Healthcare SaaS. Real problems. Real users.
            </p>
            <p className="text-foreground/60 max-w-72 text-sm tracking-wide">
              No more toy projects. Building for production.
            </p>
          </div>

          {/* Border Right */}
          <div className="order-1 col-span-1 flex w-full flex-col items-center md:order-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-700"></span>
            <span className="from-foreground/10 to-foreground/2 h-full w-px bg-linear-to-b from-40%"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
