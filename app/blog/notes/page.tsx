import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { getLabNotes } from "@/lib/notes";
import { SOCIAL_IMAGE_URL } from "@/lib/info";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("V3.Notebook.NotesArchive.Metadata");
  return {
    title: t("Title"),
    description: t("Description"),
    alternates: { canonical: "/blog/notes" },
    openGraph: {
      type: "website",
      images: [{ url: SOCIAL_IMAGE_URL, alt: t("Title") }],
    },
    twitter: { card: "summary_large_image", images: [SOCIAL_IMAGE_URL] },
  };
}

function formatDate(value: string, locale: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default async function LabNotesPage() {
  const notes = getLabNotes();
  const locale = await getLocale();
  const t = await getTranslations("V3.Notebook.NotesArchive");

  return (
    <main className="bg-v3-paper text-v3-ink">
      <Section tone="blue" spacing="none">
        <Container className="py-[clamp(4rem,8vw,7rem)]">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 font-v3-text text-sm font-bold text-white/72 hover:text-white"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180" aria-hidden="true" />
            {t("Back")}
          </Link>
          <div className="mt-10 grid gap-10 border-t border-white/30 pt-7 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div>
              <p className="v3-label text-v3-yellow">{t("Eyebrow")}</p>
              <h1 className="mt-6 max-w-5xl font-v3-display text-[clamp(3.75rem,7vw,7rem)] font-bold leading-[0.94] tracking-[-0.04em] text-balance">
                {t("Title")}
              </h1>
              <p className="v3-body mt-7 max-w-2xl text-white/68">{t("Description")}</p>
            </div>
            <div className="border-t-2 border-v3-yellow pt-5">
              <p className="v3-label text-white/55">{t("Register")}</p>
              <p className="mt-3 font-v3-display text-5xl font-bold text-v3-yellow">
                {String(notes.length).padStart(2, "0")}
              </p>
              <p className="v3-technical mt-2 text-white/55">{t("RegisterDescription")}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="none">
        <Container className="py-[clamp(4rem,8vw,7rem)]">
          <div className="grid border-t-2 border-s border-v3-ink sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <article key={note.slug} className="border-e border-b border-v3-line bg-v3-paper">
                <Link
                  href={`/blog/notes/${note.slug}`}
                  className="group flex min-h-72 flex-col justify-between p-6 transition-colors hover:bg-v3-yellow sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="v3-technical text-v3-blue">
                        {t("Note", { number: note.metadata.noteNumber || "—" })}
                      </span>
                      <FileText className="size-4 text-v3-muted" aria-hidden="true" />
                    </div>
                    <h2 className="mt-8 font-v3-display text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-balance">
                      {note.metadata.title}
                    </h2>
                  </div>
                  <div className="mt-9 border-t border-v3-line pt-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="v3-technical text-v3-muted">
                        {formatDate(note.metadata.date, locale)}
                      </span>
                      <ArrowUpRight
                        className="size-4 text-v3-blue transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:rotate-[-90deg]"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {note.metadata.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="v3-technical text-v3-muted">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
