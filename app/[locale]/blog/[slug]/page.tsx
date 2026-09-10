import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import TableOfContents from "@/components/blog/TableOfContents";
import { NewsletterSignup } from "@/components/v3/blog/NewsletterSignup";
import { notebookMdxComponents } from "@/components/v3/blog/NotebookMdxComponents";
import { CustomMDX } from "@/mdx-components";
import { getBlogPosts, getPost, hasLocalizedPost } from "@/lib/blog";
import { absoluteImage, blogUrl, buildArticleJsonLd, buildBreadcrumbJsonLd, localizedAlternates } from "@/lib/blog-seo";
import { DOMAIN_URL } from "@/lib/info";
import { locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.flatMap((locale) => getBlogPosts(locale).map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const active = locale as Locale;
  const post = getPost(slug, active);
  if (!post) return {};
  const available = locales.filter((candidate) => hasLocalizedPost(slug, candidate));
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    alternates: { canonical: `/${active}/blog/${slug}`, languages: localizedAlternates(slug, available) },
    openGraph: { type: "article", url: blogUrl(active, slug), title: post.metadata.title, description: post.metadata.summary, publishedTime: post.metadata.publishedAt, images: [{ url: absoluteImage(post.metadata.coverImage), alt: post.metadata.coverAlt ?? post.metadata.title }] },
    twitter: { card: "summary_large_image", images: [absoluteImage(post.metadata.coverImage)] },
  };
}

function formatDate(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-IQ" : "en-US", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(`${value}T00:00:00Z`));
}

function ArticleLink({ href, label, title, older }: { href: string; label: string; title: string; older: boolean }) {
  const Icon = older ? ArrowLeft : ArrowRight;
  return <Link href={href} className="group flex min-h-44 flex-col justify-between border-b border-[#d9d2c5] p-6 transition-colors hover:bg-[#f0ebe1] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#244b9b] sm:p-8">
    <span className="flex items-center gap-2 font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#b84b3d]"><Icon className="size-4 rtl:rotate-180" aria-hidden="true" />{label}</span>
    <span className="mt-8 max-w-xl font-playfair text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#191715] sm:text-3xl">{title}</span>
  </Link>;
}

export default async function LocaleBlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const active = locale as Locale;
  const post = getPost(slug, active);
  if (!post) notFound();

  const t = await getTranslations({ locale: active, namespace: "V3.Notebook" });
  const posts = getBlogPosts(active);
  const index = posts.findIndex((item) => item.slug === slug);
  const older = posts[index + 1];
  const newer = index > 0 ? posts[index - 1] : undefined;
  const articleJson = buildArticleJsonLd(post, active);
  const breadcrumbJson = buildBreadcrumbJsonLd([{ name: "Ali Lefta", url: DOMAIN_URL }, { name: t("Metadata.Title"), url: blogUrl(active) }, { name: post.metadata.title, url: blogUrl(active, slug) }]);

  return <main className="bg-[#fbf8f1] text-[#191715]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJson, breadcrumbJson]).replace(/</g, "\\u003c") }} />
    <article>
      <header className="border-b border-[#d9d2c5]">
        <div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,5rem)] pb-14 pt-10 sm:pb-20 sm:pt-14">
          <Link href={`/${active}/blog`} className="inline-flex items-center gap-2 font-v3-text text-sm font-bold text-[#244b9b] transition-colors hover:text-[#191715] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244b9b]"><ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />{t("Article.Back")}</Link>
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#6a645d]">
              <span>{formatDate(post.metadata.publishedAt, active)}</span><span aria-hidden="true" className="text-[#b9b0a4]">•</span><span>{post.metadata.readTime}</span><span aria-hidden="true" className="text-[#b9b0a4]">•</span>
              <Link href={`/${active}/blog/topics/${post.metadata.category}`} className="text-[#b84b3d] transition-colors hover:text-[#191715]">{t(`Categories.${post.metadata.category}`)}</Link>
            </div>
            <h1 className="mt-7 max-w-5xl font-playfair text-[clamp(3rem,6.5vw,6.3rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-balance">{post.metadata.title}</h1>
            <p className="mt-7 max-w-3xl font-v3-text text-[1.15rem] leading-8 text-[#645e58] sm:text-xl sm:leading-9">{post.metadata.summary}</p>
          </div>
        </div>
      </header>

      {post.metadata.coverImage ? <figure className="border-b border-[#d9d2c5] bg-[#f0ebe1]"><div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,5rem)] py-8 sm:py-12"><div className="relative aspect-[16/8.5] overflow-hidden bg-[#191715]"><Image src={post.metadata.coverImage} alt={post.metadata.coverAlt ?? post.metadata.title} fill priority sizes="(max-width: 1440px) 100vw, 1408px" className="object-cover" /></div><figcaption className="mt-3 font-v3-text text-xs leading-5 text-[#6a645d]">{post.metadata.coverAlt}</figcaption></div></figure> : null}

      <section className="bg-[#fbf8f1]"><div className="mx-auto grid max-w-[78rem] gap-14 px-[clamp(1.5rem,5vw,5rem)] py-16 sm:py-24 lg:grid-cols-[minmax(0,42rem)_13rem] lg:gap-20">
        <div className="min-w-0">
          <p className="mb-12 border-y border-[#d9d2c5] py-6 font-playfair text-2xl font-semibold leading-9 tracking-[-0.02em] text-[#28241f] sm:text-[1.7rem] sm:leading-10">{post.metadata.summary}</p>
          <div className="blog-reading-column"><CustomMDX source={post.content} components={notebookMdxComponents} /></div>
          <aside className="mt-16 border-y border-[#d9d2c5] py-8 sm:py-10"><p className="font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#b84b3d]">{t("Article.AuthorEyebrow")}</p><p className="mt-4 max-w-2xl font-playfair text-2xl font-semibold leading-8 tracking-[-0.025em] text-[#28241f]">{t("Article.AuthorText")}</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 border-b border-[#244b9b] pb-1 font-v3-text text-sm font-bold text-[#244b9b] transition-colors hover:border-[#191715] hover:text-[#191715]">{t("Article.Discuss")}<ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" /></Link></aside>
        </div>
        <aside className="hidden lg:block"><TableOfContents label={t("Article.OnThisPage")} /></aside>
      </div></section>
    </article>

    {(older || newer) && <section className="border-y border-[#d9d2c5] bg-[#f0ebe1]"><div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,5rem)] py-12 sm:py-16"><p className="font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#6a645d]">{t("Article.EntryNavigation")}</p><nav aria-label={t("Article.EntryNavigation")} className={`mt-5 grid border-t border-[#d9d2c5] ${older && newer ? "md:grid-cols-2" : ""}`}>{older ? <ArticleLink href={`/${active}/blog/${older.slug}`} label={t("Article.Older")} title={older.metadata.title} older /> : null}{newer ? <ArticleLink href={`/${active}/blog/${newer.slug}`} label={t("Article.Newer")} title={newer.metadata.title} older={false} /> : null}</nav></div></section>}

    <NewsletterSignup locale={active} eyebrow={t("Subscribe.Eyebrow")} title={t("Subscribe.Title")} description={t("Subscribe.Description")} emailLabel={t("Subscribe.EmailLabel")} placeholder={t("Subscribe.EmailPlaceholder")} consentLabel={t("Subscribe.Consent")} actionLabel={t("Subscribe.Action")} submittingLabel={t("Subscribe.Submitting")} successLabel={t("Subscribe.Success")} errorLabel={t("Subscribe.Error")} privacyLabel={t("Subscribe.Privacy")} />
  </main>;
}
