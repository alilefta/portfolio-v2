import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { EssayArchive } from "@/components/v3/blog/EssayArchive";
import { BlogSearch, type BlogSearchItem } from "@/components/v3/blog/BlogSearch";
import { FeaturedEssay } from "@/components/v3/blog/FeaturedEssay";
import { FieldNotes } from "@/components/v3/blog/FieldNotes";
import { NewsletterSignup } from "@/components/v3/blog/NewsletterSignup";
import { PublicationMasthead } from "@/components/v3/blog/PublicationMasthead";
import { TopicIndex } from "@/components/v3/blog/TopicIndex";
import { getBlogPosts, getBlogTopics, getHomepageBlogPosts } from "@/lib/blog";
import { blogUrl, buildCollectionJsonLd } from "@/lib/blog-seo";
import { SOCIAL_IMAGE_URL } from "@/lib/info";
import { locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const active = locale as Locale;
  const t = await getTranslations({ locale: active, namespace: "V3.Notebook.Metadata" });
  const available = getBlogPosts(active).length > 0;
  return {
    title: t("Title"),
    description: t("Description"),
    alternates: { canonical: `/${active}/blog`, languages: { en: "/en/blog", ar: "/ar/blog" } },
    robots: available ? undefined : { index: false, follow: true },
    openGraph: { type: "website", url: blogUrl(active), images: [{ url: SOCIAL_IMAGE_URL, alt: t("Title") }] },
  };
}

function formatDate(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-IQ" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00Z`));
}

export default async function LocaleBlogPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ q?: string; search?: string }> }) {
  const { locale } = await params;
  const { q, search } = await searchParams;
  const active = locale as Locale;
  const t = await getTranslations({ locale: active, namespace: "V3.Notebook" });
  const posts = getBlogPosts(active);
  const featured = getHomepageBlogPosts(active)[0] ?? posts[0];
  const archive = featured ? posts.filter((post) => post.slug !== featured.slug) : posts;
  const topics = getBlogTopics(active);
  const categoryLabels = Object.fromEntries(topics.map((topic) => [topic, t(`Categories.${topic}`)]));
  const searchItems: BlogSearchItem[] = posts.map((post) => ({ slug: post.slug, title: post.metadata.title, summary: post.metadata.summary, category: post.metadata.category, categoryLabel: categoryLabels[post.metadata.category] ?? post.metadata.category, readTime: post.metadata.readTime, tags: post.metadata.tags ?? [] }));
  const jsonLd = buildCollectionJsonLd(active, undefined, t("Masthead.Title"), t("Masthead.Description"), posts);
  const newsletter = <NewsletterSignup locale={active} eyebrow={t("Subscribe.Eyebrow")} title={t("Subscribe.Title")} description={t("Subscribe.Description")} emailLabel={t("Subscribe.EmailLabel")} placeholder={t("Subscribe.EmailPlaceholder")} consentLabel={t("Subscribe.Consent")} actionLabel={t("Subscribe.Action")} submittingLabel={t("Subscribe.Submitting")} successLabel={t("Subscribe.Success")} errorLabel={t("Subscribe.Error")} privacyLabel={t("Subscribe.Privacy")} />;

  if (!posts.length) {
    return <main><PublicationMasthead title={t("Masthead.Title")} description={t("Masthead.Description")} /><section className="border-y border-[#d9d2c5] bg-[#f7f3ea]"><div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,5rem)] py-16"><h2 className="font-playfair text-4xl font-semibold">{t("Pending.Title")}</h2><p className="mt-4 max-w-xl font-v3-text leading-7 text-[#6d675f]">{t("Pending.Description")}</p>{active === "ar" ? <Link href="/en/blog" lang="en" className="mt-8 inline-flex min-h-11 items-center border border-[#244b9b] px-5 font-v3-text text-sm font-bold text-[#244b9b] transition-colors hover:bg-[#244b9b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244b9b]">{t("Pending.EnglishSiteAction")} <span className="ms-2" aria-hidden="true">←</span></Link> : null}</div></section>{newsletter}</main>;
  }

  return <main className="bg-[#fbf8f1] text-[#191715]"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <PublicationMasthead title={t("Masthead.Title")} description={t("Masthead.Description")} />
    <BlogSearch locale={active} initialQuery={q ?? ""} initiallyOpen={search === "1"} items={searchItems} labels={{ label: t("SearchPanel.Label"), placeholder: t("SearchPanel.Placeholder"), submit: t("SearchPanel.Submit"), clear: t("SearchPanel.Clear"), close: t("SearchPanel.Close"), hint: t("SearchPanel.Hint"), results: { zero: t("SearchPanel.Results", { count: 0 }), one: t("SearchPanel.Results", { count: 1 }), other: t("SearchPanel.Results", { count: 2 }) }, empty: t("SearchPanel.Empty") }} />
    {featured ? <FeaturedEssay post={featured} locale={active} label={t("Featured.Label")} readLabel={t("Featured.Read")} category={categoryLabels[featured.metadata.category] ?? featured.metadata.category} date={formatDate(featured.metadata.publishedAt, active)} /> : null}
    <EssayArchive posts={archive} locale={active} labels={{ title: t("Archive.Title") }} categoryLabels={categoryLabels} dateLabel={t("Archive.Date")} topicLabel={t("Archive.Topic")} articleLabel={t("Archive.Article")} readTimeLabel={t("Archive.ReadingTime")} formatDate={(date) => formatDate(date, active)} />
    <FieldNotes locale={active} browseLabel={t("FieldNotes.Browse")} />
    <TopicIndex topics={topics} locale={active} title={t("Topics.Title")} description={t("Topics.Description")} allLabel={t("Topics.All")} countLabel={(topic) => t("Topics.Count", { count: posts.filter((post) => post.metadata.category === topic).length })} labels={categoryLabels} eyebrow={t("Topics.Eyebrow")} />
    {newsletter}
  </main>;
}
