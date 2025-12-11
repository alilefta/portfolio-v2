import { getLabNote, getLabNotes } from "@/lib/notes";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/mdx-components";
import Link from "next/link";
import { ArrowLeft, MoreHorizontal, Terminal } from "lucide-react";
import Image from "next/image";
// import { CopyButton } from "@/components/CopyButton"; // We'll create a tiny helper below
import { Button } from "@/components/ui/custom/Button";
import { ShareButton } from "@/components/ShareButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static pages for performance
// 1. Static Site Generation
export async function generateStaticParams() {
  const notes = getLabNotes();
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const note = getLabNote(slug);

  if (!note) {
    return;
  }

  const { title, noteNumber, tags } = note.metadata;

  return {
    // Result: "Tailwind Hack (Note #005) | Lab Notes"
    title: `${title} (Note #${noteNumber || "00X"}) | Lab Notes`,
    description: `Engineering snippet about ${tags?.join(", ") || "development"}.`,
    openGraph: {
      title: title,
      description: `Ali Mohsin Lab Note #${noteNumber}`,
      type: "article",
      url: `https://ali-mohsin.dev/blog/notes/${slug}`,
      // Notes usually rely on the default OG image unless you generate dynamic ones
    },
  };
}

export default async function SingleNotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = getLabNote(slug);

  if (!note) notFound();

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 dark:bg-black">
      <div className="mx-auto max-w-2xl px-4 md:px-0">
        {/* Navigation / Top Bar */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/blog/notes"
            className="group flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Feed
          </Link>
          <span className="font-mono text-xs text-zinc-400">
            Lab Note #{note.metadata.noteNumber || "00X"}
          </span>
        </div>

        {/* THE "THREAD" CARD */}
        <article className="relative">
          {/* Vertical Thread Line (Visual Decoration) */}
          <div className="absolute top-14 bottom-0 left-[26px] -z-10 w-0.5 bg-zinc-100 dark:bg-zinc-800" />

          <div className="flex gap-4">
            {/* Left: Avatar */}
            <div className="flex shrink-0 flex-col items-center">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-zinc-200 shadow-sm dark:border-zinc-800">
                <Image
                  src="/images/avatars/avatar.jpg" // Replace with your avatar
                  alt="Ali Mohsin"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full pt-1 pb-8">
              {/* Header: Name & Meta */}
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">
                    Ali Mohsin
                  </span>
                  <span className="text-sm text-zinc-500">@alimohsin</span>
                  <span className="text-zinc-300 dark:text-zinc-700">·</span>
                  <span className="text-sm text-zinc-500 hover:underline">
                    {note.metadata.date}
                  </span>
                </div>

                {/* Options Icon (Decorative) */}
                <Button
                  variant={"ghost"}
                  className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              {/* The "Post" Body */}
              <div className="prose prose-zinc prose-sm dark:prose-invert max-w-none">
                {/* We render the title nicely here as part of the text flow */}
                <h1 className="mt-0 mb-4 text-lg leading-snug font-semibold text-zinc-900 dark:text-zinc-100">
                  {note.metadata.title}
                </h1>

                <CustomMDX source={note.content} />
              </div>

              {/* Footer: Tags & Actions */}
              <div className="mt-6 flex flex-col gap-4">
                {/* Hashtags */}
                {note.metadata.tags && (
                  <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-blue-600 dark:text-blue-400">
                    {note.metadata.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/notes?tag=${tag}`}
                        className="hover:underline"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Social Actions Bar */}
                <div className="flex items-center gap-6 border-t border-zinc-100 pt-4 text-zinc-500 dark:border-zinc-800">
                  <ShareButton title={note.metadata.title} />

                  {/* Decorative "Replied" count */}
                  <div className="flex cursor-pointer items-center gap-2 text-xs transition-colors hover:text-blue-500">
                    <Terminal className="h-4 w-4" />
                    <span>Run</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* OPTIONAL: "Reply" Input Area (Fake/CTA) */}
        <div className="mt-4 flex gap-4 pl-18">
          <Link
            href="/contact"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-600"
          >
            Have a better solution? Reply via Email...
          </Link>
        </div>
      </div>
    </main>
  );
}
