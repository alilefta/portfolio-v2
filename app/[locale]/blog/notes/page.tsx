import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { NewsletterSignup } from "@/components/v3/blog/NewsletterSignup";
import { getLabNotes } from "@/lib/notes";
import { blogUrl } from "@/lib/blog-seo";
import { type Locale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const active = locale as Locale;
  const t = await getTranslations({ locale: active, namespace: "V3.Notebook.NotesArchive.Metadata" });
  return { title: t("Title"), description: t("Description"), alternates: { canonical: `/${active}/blog/notes`, languages: { en: "/en/blog/notes", ar: "/ar/blog/notes" } }, openGraph: { type: "website", url: `${blogUrl(active)}/notes`, title: t("Title"), description: t("Description") } };
}

export default async function NotesArchivePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const active = locale as Locale;
  const notes = getLabNotes();
  const t = await getTranslations({ locale: active, namespace: "V3.Notebook" });
  const typeLabel = (type?: string) => type === "Fix" ? t("NotesArchive.Types.Fix") : type === "Review" ? t("NotesArchive.Types.Review") : type === "Snippet" ? t("NotesArchive.Types.Snippet") : t("NotePage.DefaultType");

  return <main className="bg-[#fbf8f1] text-[#191715]">
    <header className="border-b border-[#d9d2c5]">
      <div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,5rem)] pb-14 pt-10 sm:pb-20 sm:pt-14">
        <Link href={`/${active}/blog`} className="inline-flex items-center gap-2 font-v3-text text-sm font-bold text-[#244b9b] transition-colors hover:text-[#191715] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244b9b]"><ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />{t("NotesArchive.Back")}</Link>
        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-end">
          <div><p className="font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#b84b3d]">{t("NotesArchive.Eyebrow")}</p><h1 className="mt-5 max-w-4xl font-playfair text-[clamp(3.25rem,7vw,6.4rem)] font-semibold leading-[0.96] tracking-[-0.052em]">{t("NotesArchive.Title")}</h1><p className="mt-6 max-w-2xl font-v3-text text-lg leading-8 text-[#645e58]">{t("NotesArchive.Description")}</p></div>
          <div className="border-t border-[#d9d2c5] pt-5"><p className="font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#6a645d]">{t("NotesArchive.Register")}</p><p className="mt-2 font-playfair text-4xl font-semibold tracking-[-0.04em]">{String(notes.length).padStart(2, "0")}</p><p className="mt-2 font-v3-text text-sm leading-6 text-[#645e58]">{t("NotesArchive.RegisterDescription")}</p></div>
        </div>
      </div>
    </header>

    <section aria-labelledby="notes-register-heading" className="bg-[#fbf8f1]"><div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,5rem)] py-12 sm:py-16"><h2 id="notes-register-heading" className="sr-only">{t("NotesArchive.Register")}</h2><div className="hidden grid-cols-[7rem_9rem_minmax(0,1fr)_15rem] border-y border-[#cfc8bc] py-3 font-v3-text text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[#807a72] md:grid"><span>{t("NotesArchive.Columns.Number")}</span><span>{t("NotesArchive.Columns.Type")}</span><span>{t("NotesArchive.Columns.Note")}</span><span>{t("NotesArchive.Columns.Topics")}</span></div><ol>{notes.map((note, index) => <li key={note.slug} className="border-b border-[#d8d1c5]"><Link href={`/${active}/blog/notes/${note.slug}`} className="group grid gap-2 py-6 transition-colors hover:bg-[#f1ece1] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#244b9b] md:grid-cols-[7rem_9rem_minmax(0,1fr)_15rem] md:items-center md:px-1"><span className="font-v3-text text-sm text-[#6d675f]">{note.metadata.noteNumber ?? String(index + 1).padStart(3, "0")}</span><span className="font-v3-text text-sm font-semibold text-[#b84b3d]">{typeLabel(note.metadata.type)}</span><span className="flex min-w-0 items-center justify-between gap-4"><span className="font-playfair text-[1.35rem] font-semibold leading-tight tracking-[-0.025em] sm:text-[1.55rem]">{note.metadata.title}</span><ArrowRight className="size-4 shrink-0 text-[#244b9b] opacity-0 transition-opacity group-hover:opacity-100 rtl:rotate-180" aria-hidden="true" /></span><span className="font-v3-text text-sm leading-6 text-[#6d675f]">{note.metadata.tags.join(" · ")}</span></Link></li>)}</ol></div></section>

    <NewsletterSignup locale={active} eyebrow={t("Subscribe.Eyebrow")} title={t("Subscribe.Title")} description={t("Subscribe.Description")} emailLabel={t("Subscribe.EmailLabel")} placeholder={t("Subscribe.EmailPlaceholder")} consentLabel={t("Subscribe.Consent")} actionLabel={t("Subscribe.Action")} submittingLabel={t("Subscribe.Submitting")} successLabel={t("Subscribe.Success")} errorLabel={t("Subscribe.Error")} privacyLabel={t("Subscribe.Privacy")} />
  </main>;
}
