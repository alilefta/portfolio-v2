import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { Button } from "@/components/v3/ui/Button";
import TableOfContents from "@/components/blog/TableOfContents";
import { notebookMdxComponents } from "@/components/v3/blog/NotebookMdxComponents";
import { CustomMDX } from "@/mdx-components";
import { getBlogPosts, getPost } from "@/lib/blog";
import { getCategoryTitle } from "@/lib/taxonomy";
import { DOMAIN_URL, SOCIAL_IMAGE_URL } from "@/lib/info";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return;

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      type: "article",
      url: `${DOMAIN_URL}/blog/${slug}`,
      publishedTime: post.metadata.publishedAt,
      images: post.metadata.coverImage
        ? [post.metadata.coverImage]
        : [SOCIAL_IMAGE_URL],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.summary,
      images: post.metadata.coverImage
        ? [post.metadata.coverImage]
        : [SOCIAL_IMAGE_URL],
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const locale = await getLocale();
  const t = await getTranslations("V3.Notebook.Article");
  const posts = getBlogPosts();
  const currentIndex = posts.findIndex((candidate) => candidate.slug === slug);
  const newerPost = currentIndex > 0 ? posts[currentIndex - 1] : undefined;
  const olderPost = currentIndex >= 0 ? posts[currentIndex + 1] : undefined;
  const entryNumber = String(currentIndex + 1).padStart(2, "0");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${DOMAIN_URL}/blog/${slug}#article`,
    url: `${DOMAIN_URL}/blog/${slug}`,
    headline: post.metadata.title,
    description: post.metadata.summary,
    datePublished: post.metadata.publishedAt,
    image: post.metadata.coverImage
      ? new URL(post.metadata.coverImage, DOMAIN_URL).toString()
      : undefined,
    author: { "@id": `${DOMAIN_URL}/#person` },
    publisher: { "@id": `${DOMAIN_URL}/#person` },
    mainEntityOfPage: `${DOMAIN_URL}/blog/${slug}`,
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
          <Container className="py-[clamp(3rem,7vw,6.5rem)]">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-v3-text text-sm font-bold text-v3-blue"
            >
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180"
                aria-hidden="true"
              />
              {t("Back")}
            </Link>

            <div className="mt-10 grid gap-9 border-t-2 border-v3-ink pt-7 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-14">
              <dl className="grid grid-cols-2 gap-x-5 gap-y-6 lg:block">
                <div className="lg:border-b lg:border-v3-line lg:pb-5">
                  <dt className="v3-label text-v3-muted">{t("Entry")}</dt>
                  <dd className="v3-technical mt-2 text-v3-blue">{entryNumber}</dd>
                </div>
                <div className="lg:border-b lg:border-v3-line lg:py-5">
                  <dt className="v3-label text-v3-muted">{t("Published")}</dt>
                  <dd className="v3-technical mt-2">{formatDate(post.metadata.publishedAt, locale)}</dd>
                </div>
                <div className="lg:border-b lg:border-v3-line lg:py-5">
                  <dt className="v3-label text-v3-muted">{t("ReadingTime")}</dt>
                  <dd className="v3-technical mt-2">{post.metadata.readTime || t("ReadTimeFallback")}</dd>
                </div>
                <div className="lg:pt-5">
                  <dt className="v3-label text-v3-muted">{t("Discipline")}</dt>
                  <dd className="v3-technical mt-2 text-v3-coral">
                    {getCategoryTitle(post.metadata.category ?? "Engineering")}
                  </dd>
                </div>
              </dl>

              <header>
                <p className="v3-label text-v3-coral">{t("Eyebrow")}</p>
                <h1 className="mt-6 max-w-6xl font-v3-display text-[clamp(3.25rem,7vw,7.25rem)] font-bold leading-[0.94] tracking-[-0.04em] text-balance">
                  {post.metadata.title}
                </h1>
                <p className="v3-body mt-8 max-w-3xl text-v3-muted">
                  {post.metadata.summary}
                </p>
              </header>
            </div>

            {post.metadata.coverImage ? (
              <figure className="mt-12 border border-v3-line bg-v3-ink p-2 sm:p-3">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.metadata.coverImage}
                    alt={post.metadata.title}
                    fill
                    priority
                    sizes="(max-width: 1536px) 100vw, 1536px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex flex-col gap-2 px-2 pt-3 pb-1 text-[#f5f1e8] sm:flex-row sm:items-center sm:justify-between">
                  <span className="v3-technical text-white/65">{t("Figure", { number: entryNumber })}</span>
                  <span className="v3-technical text-white/42">{getCategoryTitle(post.metadata.category ?? "Engineering")}</span>
                </figcaption>
              </figure>
            ) : null}
          </Container>
        </Section>

        <Section tone="paper" spacing="none">
          <Container className="py-[clamp(4rem,8vw,7rem)]">
            <div className="grid min-w-0 gap-14 lg:grid-cols-[minmax(0,48rem)_17rem] lg:justify-center lg:gap-20">
              <div className="min-w-0">
                <div className="mb-12 grid grid-cols-[3.25rem_minmax(0,1fr)] gap-4 border-y border-v3-line py-5">
                  <span className="font-v3-display text-4xl font-bold leading-none text-v3-yellow">“</span>
                  <p className="font-v3-display text-xl font-bold leading-8 tracking-[-0.015em] text-v3-ink">
                    {post.metadata.summary}
                  </p>
                </div>

                <div className="min-w-0 overflow-hidden">
                  <CustomMDX
                    source={post.content}
                    components={notebookMdxComponents}
                  />
                </div>

                {post.metadata.tags?.length ? (
                  <div className="mt-16 border-t-2 border-v3-ink pt-6">
                    <p className="v3-label text-v3-muted">{t("Tags")}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.metadata.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-v3-line bg-v3-surface px-3 py-1.5 v3-technical text-v3-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <aside className="mt-12 border-s-4 border-v3-blue bg-v3-surface p-6 sm:p-8">
                  <p className="v3-label text-v3-blue">{t("AuthorEyebrow")}</p>
                  <p className="mt-4 max-w-2xl font-v3-display text-2xl font-bold leading-8 tracking-[-0.02em]">
                    {t("AuthorText")}
                  </p>
                  <Button asChild variant="text" className="mt-6">
                    <Link href="/contact">
                      {t("Discuss")}
                      <ArrowUpRight className="rtl:rotate-[-90deg]" aria-hidden="true" />
                    </Link>
                  </Button>
                </aside>
              </div>

              <aside className="hidden lg:block">
                <TableOfContents label={t("OnThisPage")} />
              </aside>
            </div>
          </Container>
        </Section>
      </article>

      <Section tone="surface" spacing="none">
        <Container className="py-10 sm:py-14">
          <nav aria-label={t("EntryNavigation")} className="grid border-t border-s border-v3-line md:grid-cols-2">
            {olderPost ? (
              <Link
                href={`/blog/${olderPost.slug}`}
                className="group flex min-h-40 flex-col justify-between border-e border-b border-v3-line p-6 transition-colors hover:bg-v3-yellow"
              >
                <span className="v3-label text-v3-muted">{t("Older")}</span>
                <span className="mt-6 flex items-end justify-between gap-5 font-v3-display text-xl font-bold tracking-[-0.02em]">
                  <span>{olderPost.metadata.title}</span>
                  <ArrowLeft className="size-5 shrink-0 rtl:rotate-180" aria-hidden="true" />
                </span>
              </Link>
            ) : (
              <div className="hidden border-e border-b border-v3-line md:block" />
            )}
            {newerPost ? (
              <Link
                href={`/blog/${newerPost.slug}`}
                className="group flex min-h-40 flex-col justify-between border-e border-b border-v3-line p-6 transition-colors hover:bg-v3-yellow"
              >
                <span className="v3-label text-v3-muted">{t("Newer")}</span>
                <span className="mt-6 flex items-end justify-between gap-5 font-v3-display text-xl font-bold tracking-[-0.02em]">
                  <span>{newerPost.metadata.title}</span>
                  <ArrowRight className="size-5 shrink-0 rtl:rotate-180" aria-hidden="true" />
                </span>
              </Link>
            ) : (
              <div className="hidden border-e border-b border-v3-line md:block" />
            )}
          </nav>
        </Container>
      </Section>
    </main>
  );
}
