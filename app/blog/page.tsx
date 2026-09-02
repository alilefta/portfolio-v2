import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, FileText } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { Button } from "@/components/v3/ui/Button";
import { getBlogPosts } from "@/lib/blog";
import { getLabNotes } from "@/lib/notes";
import { getCategoryTitle } from "@/lib/taxonomy";
import { SOCIAL_IMAGE_URL } from "@/lib/info";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("V3.Notebook.Metadata");

  return {
    title: t("Title"),
    description: t("Description"),
    alternates: { canonical: "/blog" },
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

export default async function BlogPage() {
  const locale = await getLocale();
  const t = await getTranslations("V3.Notebook");
  const posts = getBlogPosts();
  const allNotes = getLabNotes();
  const notes = allNotes.slice(0, 4);
  const featuredPost = posts[0];
  const archivePosts = posts.slice(1);
  const topicCount = new Set(
    posts.map((post) => post.metadata.category).filter(Boolean),
  ).size;

  return (
    <main className="bg-v3-paper text-v3-ink">
      <Section tone="ink" spacing="none" className="overflow-hidden">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-14 xl:grid-cols-[minmax(0,0.9fr)_minmax(34rem,1.1fr)] xl:items-end xl:gap-16">
            <div className="min-w-0">
              <p className="v3-label text-v3-yellow">{t("Hero.Eyebrow")}</p>
              <h1 className="mt-8 max-w-4xl font-v3-display text-[clamp(3.75rem,7vw,6rem)] font-bold leading-[0.94] tracking-[-0.04em] text-balance">
                {t("Hero.Title")}
              </h1>
              <p className="v3-body mt-8 max-w-xl text-white/62">
                {t("Hero.Description")}
              </p>

              <dl className="mt-12 grid grid-cols-3 border-y border-white/18">
                <div className="border-e border-white/18 py-5 pe-4">
                  <dt className="v3-technical text-white/42">{t("Hero.Entries")}</dt>
                  <dd className="mt-2 font-v3-display text-3xl font-bold text-v3-yellow">
                    {String(posts.length).padStart(2, "0")}
                  </dd>
                </div>
                <div className="border-e border-white/18 px-4 py-5">
                  <dt className="v3-technical text-white/42">{t("Hero.Topics")}</dt>
                  <dd className="mt-2 font-v3-display text-3xl font-bold">
                    {String(topicCount).padStart(2, "0")}
                  </dd>
                </div>
                <div className="py-5 ps-4">
                  <dt className="v3-technical text-white/42">{t("Hero.Notes")}</dt>
                  <dd className="mt-2 font-v3-display text-3xl font-bold">
                    {String(allNotes.length).padStart(2, "0")}
                  </dd>
                </div>
              </dl>
            </div>

            {featuredPost ? (
              <article className="min-w-0 border border-white/18 bg-[#2a2a26]">
                <div className="grid min-h-[28rem] sm:grid-cols-[minmax(0,1.08fr)_minmax(15rem,0.92fr)]">
                  <div className="min-w-0 flex flex-col justify-between p-7 sm:p-9">
                    <div>
                      <div className="flex items-center justify-between gap-4 border-b border-white/18 pb-4">
                        <p className="v3-label text-v3-coral">{t("Hero.Latest")}</p>
                        <p className="v3-technical text-white/42">
                          {t("Hero.Entry", { number: "01" })}
                        </p>
                      </div>
                      <p className="v3-technical mt-6 text-white/48">
                        {formatDate(featuredPost.metadata.publishedAt, locale)} · {featuredPost.metadata.readTime || t("Article.ReadTimeFallback")}
                      </p>
                      <h2 className="mt-5 font-v3-display text-[clamp(2.05rem,3.2vw,3.5rem)] font-bold leading-[1] tracking-[-0.025em] text-balance [overflow-wrap:anywhere]">
                        {featuredPost.metadata.title}
                      </h2>
                      <p className="mt-5 font-v3-text text-sm leading-7 text-white/60">
                        {featuredPost.metadata.summary}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="group mt-9 inline-flex items-center gap-2 font-v3-text text-sm font-bold text-v3-yellow"
                    >
                      {t("Hero.ReadEntry")}
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:rotate-[-90deg]"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="relative min-h-64 overflow-hidden border-t border-white/18 sm:min-h-full sm:border-t-0 sm:border-s"
                    aria-label={featuredPost.metadata.title}
                  >
                    {featuredPost.metadata.coverImage ? (
                      <Image
                        src={featuredPost.metadata.coverImage}
                        alt={featuredPost.metadata.title}
                        fill
                        priority
                        sizes="(max-width: 640px) 100vw, 38vw"
                        className="object-cover opacity-75 saturate-[0.8] transition-transform duration-500 hover:scale-[1.025]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-v3-blue" />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-[#20201d]/75 via-transparent to-transparent" />
                    <p className="v3-technical absolute right-4 bottom-4 left-4 border-t border-white/30 pt-3 text-white/66">
                      {getCategoryTitle(featuredPost.metadata.category ?? "Engineering")}
                    </p>
                  </Link>
                </div>
              </article>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section id="article-ledger" tone="surface" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_1.58fr] lg:gap-20">
            <div>
              <p className="v3-label text-v3-coral">{t("Archive.Eyebrow")}</p>
              <h2 className="mt-5 font-v3-display text-[clamp(2.8rem,5vw,5rem)] font-bold leading-[0.96] tracking-[-0.04em] text-balance">
                {t("Archive.Title")}
              </h2>
              <p className="v3-body mt-6 max-w-md text-v3-muted">
                {t("Archive.Description")}
              </p>
            </div>

            <ol className="border-t-2 border-v3-ink">
              {archivePosts.map((post, index) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid gap-4 border-b border-v3-line py-7 transition-colors hover:bg-v3-yellow/16 sm:grid-cols-[4.5rem_minmax(0,1fr)_auto] sm:items-start sm:px-4"
                  >
                    <span className="v3-technical text-v3-muted">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="v3-technical text-v3-blue">
                        {getCategoryTitle(post.metadata.category ?? "Engineering")}
                      </span>
                      <span className="mt-2 block font-v3-display text-[clamp(1.6rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-balance">
                        {post.metadata.title}
                      </span>
                      <span className="mt-3 block max-w-2xl font-v3-text text-sm leading-6 text-v3-muted">
                        {post.metadata.summary}
                      </span>
                    </span>
                    <span className="flex items-center gap-2 sm:flex-col sm:items-end">
                      <span className="v3-technical whitespace-nowrap text-v3-muted">
                        {formatDate(post.metadata.publishedAt, locale)}
                      </span>
                      <span className="v3-technical whitespace-nowrap text-v3-muted">
                        {post.metadata.readTime || t("Article.ReadTimeFallback")}
                      </span>
                      <ArrowUpRight
                        className="mt-2 size-5 text-v3-blue transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:rotate-[-90deg]"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="none">
        <Container className="py-[clamp(4.5rem,8vw,7rem)]">
          <div className="flex flex-col gap-6 border-b-2 border-v3-ink pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="v3-label text-v3-blue">{t("Notes.Eyebrow")}</p>
              <h2 className="mt-4 font-v3-display text-[clamp(2.6rem,5vw,4.4rem)] font-bold leading-[1] tracking-[-0.035em]">
                {t("Notes.Title")}
              </h2>
              <p className="v3-body mt-4 max-w-2xl text-v3-muted">
                {t("Notes.Description")}
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/blog/notes">
                {t("Notes.OpenArchive")}
                <ArrowUpRight className="rtl:rotate-[-90deg]" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="grid border-b border-s border-v3-line sm:grid-cols-2 lg:grid-cols-4">
            {notes.map((note) => (
              <Link
                key={note.slug}
                href={`/blog/notes/${note.slug}`}
                className="group flex min-h-56 flex-col justify-between border-e border-t border-v3-line bg-v3-surface p-6 transition-colors hover:bg-v3-yellow"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="v3-technical text-v3-blue">
                    {t("Notes.Note", { number: note.metadata.noteNumber || "—" })}
                  </span>
                  <FileText className="size-4 text-v3-muted" aria-hidden="true" />
                </div>
                <h3 className="my-7 font-v3-display text-xl font-bold leading-[1.12] tracking-[-0.02em]">
                  {note.metadata.title}
                </h3>
                <div className="flex items-end justify-between gap-3 border-t border-v3-line pt-4">
                  <span className="v3-technical text-v3-muted">
                    {note.metadata.type || t("Notes.DefaultType")}
                  </span>
                  <ArrowUpRight
                    className="size-4 text-v3-blue transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:rotate-[-90deg]"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="yellow" spacing="compact">
        <Container>
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <BookOpen className="mt-1 size-6 shrink-0" aria-hidden="true" />
              <div>
                <p className="v3-label opacity-65">{t("Closing.Eyebrow")}</p>
                <p className="mt-2 max-w-2xl font-v3-display text-2xl font-bold tracking-[-0.035em] sm:text-3xl">
                  {t("Closing.Title")}
                </p>
              </div>
            </div>
            <Button asChild className="shrink-0">
              <Link href="/contact">
                {t("Closing.Action")}
                <ArrowUpRight className="rtl:rotate-[-90deg]" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
