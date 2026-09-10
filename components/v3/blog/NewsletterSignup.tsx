"use client";

import { useState } from "react";

type NewsletterSignupProps = { locale: string; eyebrow: string; title: string; description: string; emailLabel: string; placeholder: string; consentLabel: string; actionLabel: string; submittingLabel: string; successLabel: string; errorLabel: string; privacyLabel: string };

export function NewsletterSignup({ locale, eyebrow, title, description, emailLabel, placeholder, consentLabel, actionLabel, submittingLabel, successLabel, errorLabel, privacyLabel }: NewsletterSignupProps) {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    try {
      const response = await fetch("/api/subscribe", { method: "POST", body: new FormData(event.currentTarget), headers: { Accept: "application/json" } });
      setState(response.ok ? "success" : "error");
      if (response.ok) event.currentTarget.reset();
    } catch {
      setState("error");
    }
  }

  return <section id="subscribe" className="bg-[#e55d49] text-[#fffaf2]"><div className="mx-auto grid max-w-[88rem] gap-10 px-[clamp(2rem,7vw,7rem)] py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-20"><div><p className="font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-white/75">{eyebrow}</p><h2 className="mt-4 max-w-xl font-playfair text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">{title}</h2><p className="mt-5 max-w-xl font-v3-text leading-7 text-white/85">{description}</p></div><form action="/api/subscribe" method="post" onSubmit={submit} className="max-w-xl"><input type="hidden" name="locale" value={locale} /><label htmlFor="newsletter-email" className="font-v3-text text-sm font-semibold">{emailLabel}</label><div className="mt-2 flex flex-col gap-2 sm:flex-row"><input id="newsletter-email" name="email" type="email" required placeholder={placeholder} className="min-h-12 min-w-0 flex-1 border border-white/50 bg-[#fffaf2] px-4 font-v3-text text-[#191715] outline-none focus:ring-2 focus:ring-[#191715]" /><button type="submit" disabled={state === "submitting"} className="min-h-12 bg-[#191715] px-6 font-v3-text text-sm font-bold text-[#fffaf2] disabled:opacity-60">{state === "submitting" ? submittingLabel : actionLabel}</button></div><label className="mt-4 flex items-start gap-3 font-v3-text text-sm leading-6"><input type="checkbox" name="consent" value="yes" required className="mt-1 size-4 accent-[#191715]" />{consentLabel}</label><input aria-hidden="true" tabIndex={-1} autoComplete="off" name="website" className="sr-only" /><p className="mt-3 font-v3-text text-xs text-white/75">{privacyLabel}</p><p aria-live="polite" className="mt-4 font-v3-text text-sm font-bold">{state === "success" ? successLabel : state === "error" ? errorLabel : null}</p></form></div></section>;
}
