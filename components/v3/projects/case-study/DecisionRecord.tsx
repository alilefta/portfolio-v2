type DecisionRecordProps = {
  index: number;
  status: string;
  title: string;
  labels: { context: string; choice: string; tradeoff: string };
  context: string;
  choice: string;
  tradeoff: string;
  evidence: string;
};

export function DecisionRecord({
  index,
  status,
  title,
  labels,
  context,
  choice,
  tradeoff,
  evidence,
}: DecisionRecordProps) {
  const fields = [
    [labels.context, context],
    [labels.choice, choice],
    [labels.tradeoff, tradeoff],
  ] as const;

  return (
    <article className="grid border-b border-v3-line py-[clamp(2.5rem,6vw,5rem)] lg:grid-cols-[0.28fr_0.72fr] lg:gap-14">
      <div>
        <p className="v3-technical text-v3-coral">
          ADR-{String(index).padStart(3, "0")}
        </p>
        <p className="mt-4 v3-label text-v3-muted">{status}</p>
      </div>

      <div className="mt-7 lg:mt-0">
        <h3 className="max-w-4xl font-v3-display text-[clamp(2rem,4vw,3.75rem)] font-bold leading-[0.98] tracking-[-0.05em] text-balance">
          {title}
        </h3>
        <dl className="mt-10 grid gap-px border border-v3-line bg-v3-line md:grid-cols-3">
          {fields.map(([label, value]) => (
            <div key={label} className="bg-v3-surface p-5">
              <dt className="v3-technical font-bold text-v3-blue">{label}</dt>
              <dd className="mt-5 font-v3-text text-sm leading-7 text-v3-muted">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 flex gap-3 font-v3-text text-xs leading-6 text-v3-muted">
          <span className="mt-2 size-2 shrink-0 rotate-45 bg-v3-yellow" aria-hidden="true" />
          <span>{evidence}</span>
        </p>
      </div>
    </article>
  );
}
