export function PublicationMasthead({
  title,
  description,
}: { title: string; description: string }) {
  return (
    <section className="bg-[#fbf8f1] text-[#191715]">
      <div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,5rem)] pt-10 pb-8 sm:pt-14 lg:pt-16">
        <div>
          <h1 className="max-w-4xl font-playfair text-[clamp(3.35rem,5.8vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
            {title}
          </h1>
          <p className="mt-2 max-w-3xl font-v3-text text-[1.02rem] leading-7 text-[#6d675f] sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
