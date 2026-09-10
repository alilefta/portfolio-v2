import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { getBlogTopicPosts, getBlogTopics } from "@/lib/blog";
import { blogUrl, buildBreadcrumbJsonLd, buildCollectionJsonLd } from "@/lib/blog-seo";
import { blogCategorySlugs, type CategorySlug } from "@/lib/taxonomy";
import { type Locale, locales } from "@/i18n/config";

export function generateStaticParams() { return locales.flatMap((locale) => getBlogTopics(locale).map((topic) => ({ locale, topic }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; topic: string }> }): Promise<Metadata> {
  const { locale, topic } = await params; const active = locale as Locale; if (!blogCategorySlugs.includes(topic as CategorySlug)) return {};
  const t = await getTranslations({ locale: active, namespace: "V3.Notebook" }); const label = t(`Categories.${topic}`);
  return { title: `${label} · ${t("Metadata.Title")}`, description: t("Topics.Description"), alternates: { canonical: `/${active}/blog/topics/${topic}`, languages: { en: `/en/blog/topics/${topic}`, ar: `/ar/blog/topics/${topic}` } }, openGraph: { type: "website", url: blogUrl(active) + `/topics/${topic}`, title: label, description: t("Topics.Description") } };
}

export default async function BlogTopicPage({ params }: { params: Promise<{ locale: string; topic: string }> }) {
  const { locale, topic } = await params; const active = locale as Locale; if (!blogCategorySlugs.includes(topic as CategorySlug)) notFound(); const posts = getBlogTopicPosts(active, topic); if (!posts.length) notFound();
  const t = await getTranslations({ locale: active, namespace: "V3.Notebook" }); const label = t(`Categories.${topic}`); const json = [buildCollectionJsonLd(active, topic, label, t("Topics.Description"), posts), buildBreadcrumbJsonLd([{ name: "Ali Lefta", url: blogUrl(active) }, { name: t("Metadata.Title"), url: blogUrl(active) }, { name: label, url: blogUrl(active) + `/topics/${topic}` }])];
  return <main className="bg-v3-paper text-v3-ink"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, "\\u003c") }} /><Section tone="surface" spacing="none"><Container className="py-16 sm:py-24"><Link href={`/${active}/blog`} className="inline-flex items-center gap-2 font-v3-text text-sm font-bold text-v3-blue"><ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />{t("Topics.Back")}</Link><header className="mt-12 max-w-4xl border-t-2 border-v3-ink pt-8"><p className="v3-label text-v3-coral">{t("Topics.Eyebrow")}</p><h1 className="mt-5 font-playfair text-[clamp(3rem,7vw,6rem)] font-semibold leading-none tracking-[-0.045em]">{label}</h1><p className="mt-6 max-w-2xl font-v3-text text-lg leading-8 text-v3-muted">{t("Topics.Description")}</p></header></Container></Section><Section tone="paper" spacing="none"><Container className="py-12 sm:py-20"><ol className="mx-auto max-w-5xl border-t-2 border-v3-ink">{posts.map((post, index) => <li key={post.slug}><Link href={`/${active}/blog/${post.slug}`} className="group grid gap-4 border-b border-v3-line py-7 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-start sm:px-3"><span className="v3-technical text-v3-muted">{String(index + 1).padStart(2, "0")}</span><span><span className="block font-playfair text-2xl font-semibold leading-tight sm:text-3xl">{post.metadata.title}</span><span className="mt-3 block font-v3-text leading-7 text-v3-muted">{post.metadata.summary}</span></span><span className="flex items-center gap-3 font-v3-mono text-xs text-v3-muted"><span>{post.metadata.publishedAt}</span><ArrowUpRight className="size-4 text-v3-blue rtl:rotate-[-90deg]" aria-hidden="true" /></span></Link></li>)}</ol></Container></Section></main>;
}
