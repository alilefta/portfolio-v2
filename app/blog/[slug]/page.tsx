import { getBlogPosts, getPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, ChevronRight } from "lucide-react";
import { CustomMDX } from "@/mdx-components";
import FooterSection from "@/components/home/Footer"; // Your footer
import NewsletterCTA from "@/components/blog/NewsletterCta";
import TableOfContents from "@/components/blog/TableOfContents";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return;
  return {
    title: `${post.metadata.title} | Ali Mohsin`,
    description: post.metadata.summary,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      type: "article",
      images: [post.metadata.coverImage || "/images/og-default.jpg"],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* 1. PROGRESS BAR / HEADER (Optional, sticky top) */}

      <article className="mx-auto w-full max-w-7xl px-4 pt-24 pb-20 md:px-6">
        {/* 2. NAVIGATION BREADCRUMB */}
        <div className="mb-8 flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-300">
          <Link
            href="/blog"
            className="flex items-center gap-1 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Blog</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-zinc-400" />
          <span className="truncate font-medium text-zinc-900 dark:text-zinc-100">
            {post.metadata.title}
          </span>
        </div>

        {/* 3. ARTICLE HEADER */}
        <header className="mb-12 border-b border-zinc-100 pb-12 dark:border-zinc-800">
          {/* Metadata Row */}
          <div className="mb-6 flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-500 md:text-sm">
            <span className="flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-blue-700 dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-400">
              <Tag className="h-3 w-3" />
              {post.metadata.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {post.metadata.publishedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.metadata.readTime || "5 min read"}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-3xl leading-tight font-bold tracking-tight text-zinc-900 md:text-5xl lg:leading-[1.1] dark:text-zinc-100">
            {post.metadata.title}
          </h1>

          {/* Summary/Subtitle */}
          <p className="mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {post.metadata.summary}
          </p>

          {/* Featured Image */}
          {post.metadata.coverImage && (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-sm dark:border-zinc-800">
              <Image
                src={post.metadata.coverImage}
                alt={post.metadata.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        <div className="relative mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* MAIN CONTENT (Spans 8 or 9 columns) */}
          <div className="prose prose-zinc prose-lg dark:prose-invert max-w-none lg:col-span-9">
            <CustomMDX source={post.content} />
          </div>

          {/* SIDEBAR (TOC) (Spans 3 columns) */}
          <aside className="hidden lg:col-span-3 lg:block">
            <TableOfContents />
          </aside>
        </div>

        {/* 5. ARTICLE FOOTER */}
        <div className="mt-16 border-t border-zinc-100 pt-10 dark:border-zinc-800">
          {/* Tags */}
          {post.metadata.tags && (
            <div className="mb-10 flex flex-wrap gap-2">
              {post.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Author Signature */}
          <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
                <Image
                  src="/images/avatars/avatar.jpg" // Ensure this path is correct
                  alt="Ali Mohsin"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  Ali Mohsin
                </h3>
                <p className="text-xs text-zinc-500">
                  Engineering precision meets software architecture.
                </p>
              </div>
            </div>

            {/* Share/Action (Optional) */}
            <Link
              href="https://twitter.com/intent/tweet" // Add your actual share logic
              target="_blank"
              className="transition-hover hidden rounded-lg bg-white px-4 py-2 text-xs font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-200 hover:bg-zinc-50 sm:block dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700 dark:hover:bg-zinc-700"
            >
              Share Article
            </Link>
          </div>

          <div className="mt-10">
            <Link
              href="/blog"
              className="group flex w-fit items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Archive
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
