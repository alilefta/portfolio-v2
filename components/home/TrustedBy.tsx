// components/home/TrustedBy.tsx
export function TrustedBy() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50/50 py-12 dark:border-zinc-800 dark:bg-black/20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="mb-6 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          Trusted by technical teams at
        </p>
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {/* Replace these divs with SVG Logos of companies. 
              Use grayscale and opacity-50 for that "Architect" look. 
              Example placeholder: */}
          {["Apex Labs", "DentalCo", "SaaS Inc", "HealthTech", "DevCorp"].map(
            (name) => (
              <div
                key={name}
                className="col-span-2 flex justify-center text-xl font-bold text-zinc-300 grayscale transition-all hover:grayscale-0 lg:col-span-1 dark:text-zinc-700"
              >
                {name}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
