import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { Button } from "@/components/v3/ui/Button";
import { notebookMdxComponents } from "@/components/v3/blog/NotebookMdxComponents";
import { CustomMDX } from "@/mdx-components";
import { getLabNote, getLabNotes } from "@/lib/notes";
import { DOMAIN_URL, SOCIAL_IMAGE_URL } from "@/lib/info";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLabNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata | undefined> {
  const { slug } = await params;
  const note = getLabNote(slug);
  if (!note) return;

  return {
    title: note.metadata.title,
    description: `Engineering lab note about ${note.metadata.tags.join(", ")}.`,
    alternates: { canonical: `/blog/notes/${slug}` },
    openGraph: {
      title: note.metadata.title,
      description: `Ali Lefta engineering note ${note.metadata.noteNumber || ""}`.trim(),
      type: "article",
      url: `${DOMAIN_URL}/blog/notes/${slug}`,
      images: [SOCIAL_IMAGE_URL],
    },
    twitter: {
      card: "summary_large_image",
      title: note.metadata.title,
      description: `Engineering lab note about ${note.metadata.tags.join(", ")}.`,
      images: [SOCIAL_IMAGE_URL],
    },
  };
}

function formatDate(value: string, locale: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default async function LabNotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getLabNote(slug);
  if (!note) notFound();

  const locale = await getLocale();
  const t = await getTranslations("V3.Notebook.NotePage");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${DOMAIN_URL}/blog/notes/${slug}#article`,
    url: `${DOMAIN_URL}/blog/notes/${slug}`,
    headline: note.metadata.title,
    description: `Engineering lab note about ${note.metadata.tags.join(", ")}.`,
    datePublished: note.metadata.date,
    author: { "@id": `${DOMAIN_URL}/#person` },
    publisher: { "@id": `${DOMAIN_URL}/#person` },
    mainEntityOfPage: `${DOMAIN_URL}/blog/notes/${slug}`,
    inLanguage: locale === "ar" ? "ar" : "en",
  };

  return (
    <main className="bg-v3-paper text-v3-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <article>
        <Section tone="surface" spacing="none">
          <Container reading className="py-[clamp(3rem,7vw,6rem)]">
            <Link
              href="/blog/notes"
              className="group inline-flex items-center gap-2 font-v3-text text-sm font-bold text-v3-blue"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180" aria-hidden="true" />
              {t("Back")}
            </Link>

            <header className="mt-10 border-t-2 border-v3-ink pt-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="v3-label text-v3-coral">
                  {t("Note", { number: note.metadata.noteNumber || "—" })}
                </p>
                <p className="v3-technical text-v3-muted">
                  {formatDate(note.metadata.date, locale)} · {note.metadata.type || t("DefaultType")}
                </p>
              </div>
              <h1 className="mt-7 font-v3-display text-[clamp(3.25rem,7vw,6.75rem)] font-bold leading-[0.95] tracking-[-0.04em] text-balance">
                {note.metadata.title}
              </h1>
              <div className="mt-8 flex flex-wrap gap-2 border-b border-v3-line pb-8">
                {note.metadata.tags.map((tag) => (
                  <span key={tag} className="border border-v3-line bg-v3-paper px-3 py-1.5 v3-technical text-v3-muted">
                    #{tag}
                  </span>
                ))}
              </div>
            </header>
          </Container>
        </Section>

        <Section tone="paper" spacing="none">
          <Container reading className="py-[clamp(4rem,8vw,7rem)]">
            <div className="min-w-0 overflow-hidden">
              <CustomMDX source={note.content} components={notebookMdxComponents} />
            </div>

            <aside className="mt-16 border-s-4 border-v3-blue bg-v3-surface p-6 sm:p-8">
              <p className="v3-label text-v3-blue">{t("ClosingEyebrow")}</p>
              <p className="mt-4 font-v3-display text-2xl font-bold leading-8 tracking-[-0.02em]">
                {t("ClosingTitle")}
              </p>
              <Button asChild variant="text" className="mt-5">
                <Link href="/contact">
                  {t("ClosingAction")}
                  <ArrowUpRight className="rtl:rotate-[-90deg]" aria-hidden="true" />
                </Link>
              </Button>
            </aside>
          </Container>
        </Section>
      </article>
    </main>
  );
}
