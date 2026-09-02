type OutcomePanelProps = {
  resultLabel: string;
  resultLead: string;
  resultAccent: string;
  description: string;
  confidence: { label: string; value: string; note: string };
  boundary: { label: string; value: string; note: string };
};

export function OutcomePanel({
  resultLabel,
  resultLead,
  resultAccent,
  description,
  confidence,
  boundary,
}: OutcomePanelProps) {
  return (
    <div className="grid border-[3px] border-[#171714] bg-v3-paper text-v3-ink lg:grid-cols-[1.25fr_0.75fr]">
      <div className="border-b-2 border-[#171714] p-[clamp(1.5rem,5vw,4.5rem)] lg:border-b-0 lg:border-e-2">
        <p className="v3-technical text-v3-blue">{resultLabel}</p>
        <p className="mt-8 font-v3-display text-[clamp(4rem,10vw,10rem)] font-bold leading-[0.78] tracking-[-0.075em]">
          {resultLead}
          <span className="block text-v3-blue">{resultAccent}</span>
        </p>
        <p className="v3-body mt-10 max-w-2xl text-v3-muted">{description}</p>
      </div>

      <dl className="grid sm:grid-cols-2 lg:grid-cols-1">
        <div className="border-b-2 border-[#171714] p-6 sm:border-b-0 sm:border-e-2 lg:border-b-2 lg:border-e-0">
          <dt className="v3-technical text-v3-coral">{confidence.label}</dt>
          <dd className="mt-7 font-v3-display text-3xl font-bold tracking-[-0.04em]">
            {confidence.value}
          </dd>
          <p className="mt-3 font-v3-text text-sm leading-6 text-v3-muted">
            {confidence.note}
          </p>
        </div>
        <div className="bg-v3-blue p-6 text-white">
          <dt className="v3-technical text-v3-yellow">{boundary.label}</dt>
          <dd className="mt-7 font-v3-display text-3xl font-bold tracking-[-0.04em]">
            {boundary.value}
          </dd>
          <p className="mt-3 font-v3-text text-sm leading-6 text-white/60">
            {boundary.note}
          </p>
        </div>
      </dl>
    </div>
  );
}
