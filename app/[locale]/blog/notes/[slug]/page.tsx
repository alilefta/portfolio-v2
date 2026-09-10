import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CustomMDX } from "@/mdx-components";
import { notebookMdxComponents } from "@/components/v3/blog/NotebookMdxComponents";
import { getLabNote, getLabNotes, type LabNote } from "@/lib/notes";
import { DOMAIN_URL } from "@/lib/info";
import { locales, type Locale } from "@/i18n/config";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => getLabNotes().map((note) => ({ locale, slug: note.slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const note = getLabNote(slug);
  if (!note) return {};

  const description = `Engineering lab note: ${note.metadata.title}`;
  return {
    title: note.metadata.title,
    description,
    alternates: { canonical: `/${locale}/blog/notes/${slug}`, languages: { en: `/en/blog/notes/${slug}`, ar: `/ar/blog/notes/${slug}` } },
    openGraph: { type: "article", url: `${DOMAIN_URL}/${locale}/blog/notes/${slug}`, title: note.metadata.title, description },
  };
}

function noteTypeLabel(note: LabNote, t: Awaited<ReturnType<typeof getTranslations>>) {
  if (note.metadata.type === "Fix") return t("NotesArchive.Types.Fix");
  if (note.metadata.type === "Review") return t("NotesArchive.Types.Review");
  if (note.metadata.type === "Snippet") return t("NotesArchive.Types.Snippet");
  return t("NotePage.DefaultType");
}

function NoteNavigationLink({ href, label, title, next }: { href: string; label: string; title: string; next: boolean }) {
  const Icon = next ? ArrowRight : ArrowLeft;
  return <Link href={href} className="group flex min-h-40 flex-col justify-between border-b border-[#d9d2c5] p-6 transition-colors hover:bg-[#f0ebe1] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#244b9b] sm:p-8">
    <span className="flex items-center gap-2 font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#b84b3d]"><Icon className="size-4 rtl:rotate-180" aria-hidden="true" />{label}</span>
    <span className="mt-8 max-w-xl font-playfair text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#191715] sm:text-3xl">{title}</span>
  </Link>;
}

export default async function NotePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const active = locale as Locale;
  const note = getLabNote(slug);
  if (!note) notFound();

  const t = await getTranslations({ locale: active, namespace: "V3.Notebook" });
  const notes = getLabNotes();
  const index = notes.findIndex((item) => item.slug === slug);
  const older = notes[index + 1];
  const newer = index > 0 ? notes[index - 1] : undefined;
  const noteNumber = note.metadata.noteNumber ?? String(index + 1).padStart(3, "0");

  return <main className="bg-[#fbf8f1] text-[#191715]">
    <article>
      <header className="border-b border-[#d9d2c5]"><div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,5rem)] pb-14 pt-10 sm:pb-20 sm:pt-14">
        <Link href={`/${active}/blog/notes`} className="inline-flex items-center gap-2 font-v3-text text-sm font-bold text-[#244b9b] transition-colors hover:text-[#191715] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244b9b]"><ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />{t("NotePage.Back")}</Link>
        <div className="mx-auto mt-14 max-w-5xl"><div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#6a645d]"><span className="text-[#b84b3d]">{t("NotePage.Note", { number: noteNumber })}</span><span aria-hidden="true" className="text-[#b9b0a4]">•</span><span>{noteTypeLabel(note, t)}</span><span aria-hidden="true" className="text-[#b9b0a4]">•</span><span>{note.metadata.tags.join(" · ")}</span></div><h1 className="mt-7 max-w-5xl font-playfair text-[clamp(3rem,6.5vw,6.3rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-balance">{note.metadata.title}</h1><p className="mt-7 max-w-3xl font-v3-text text-[1.15rem] leading-8 text-[#645e58] sm:text-xl sm:leading-9">{t("NotePage.Intro")}</p></div>
      </div></header>

      <section className="bg-[#fbf8f1]"><div className="mx-auto max-w-[42rem] px-[clamp(1.5rem,5vw,5rem)] py-16 sm:py-24"><div className="mb-12 border-y border-[#d9d2c5] py-5 font-v3-text text-sm leading-7 text-[#645e58]"><span className="font-bold text-[#191715]">{t("NotePage.RecordLabel")}</span>{" "}{t("NotePage.RecordText")}</div><div className="blog-reading-column"><CustomMDX source={note.content} components={notebookMdxComponents} /></div><aside className="mt-16 border-y border-[#d9d2c5] py-8 sm:py-10"><p className="font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#b84b3d]">{t("NotePage.ClosingEyebrow")}</p><p className="mt-4 max-w-2xl font-playfair text-2xl font-semibold leading-8 tracking-[-0.025em] text-[#28241f]">{t("NotePage.ClosingTitle")}</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 border-b border-[#244b9b] pb-1 font-v3-text text-sm font-bold text-[#244b9b] transition-colors hover:border-[#191715] hover:text-[#191715]">{t("NotePage.ClosingAction")}<ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" /></Link></aside></div></section>
    </article>

    {(older || newer) && <section className="border-y border-[#d9d2c5] bg-[#f0ebe1]"><div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,5rem)] py-12 sm:py-16"><p className="font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#6a645d]">{t("NotePage.EntryNavigation")}</p><nav aria-label={t("NotePage.EntryNavigation")} className={`mt-5 grid border-t border-[#d9d2c5] ${older && newer ? "md:grid-cols-2" : ""}`}>{older ? <NoteNavigationLink href={`/${active}/blog/notes/${older.slug}`} label={t("NotePage.Older")} title={older.metadata.title} next={false} /> : null}{newer ? <NoteNavigationLink href={`/${active}/blog/notes/${newer.slug}`} label={t("NotePage.Newer")} title={newer.metadata.title} next /> : null}</nav></div></section>}
  </main>;
}
