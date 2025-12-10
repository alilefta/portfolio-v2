import { CustomMDX } from "@/mdx-components";
import { LabNote } from "@/lib/notes";
import { Calendar, Hash, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link"; // Import Link

export function NoteCard({
  note,
  isDetailed = false,
}: {
  note: LabNote;
  isDetailed?: boolean;
}) {
  return (
    <div
      id={note.slug}
      // Added 'group' here so the card styling reacts to hover
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all dark:border-zinc-800 dark:bg-zinc-900/40",
        !isDetailed &&
          "hover:border-zinc-300 hover:shadow-md dark:hover:border-zinc-700",
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        {/* FIXED: Title is now the Link */}
        <Link
          href={`/blog/notes/${note.slug}`}
          className={cn(
            "font-bold text-zinc-900 transition-colors dark:text-zinc-100",
            // Only underline on hover if not detailed
            !isDetailed &&
              "group-hover:text-blue-600 dark:group-hover:text-blue-400",
            isDetailed ? "text-2xl" : "text-lg leading-snug",
          )}
        >
          {note.metadata.title}
        </Link>

        {!isDetailed && (
          <span className="flex shrink-0 items-center gap-1 font-mono text-xs text-zinc-400">
            <Calendar className="h-3 w-3" />
            {note.metadata.date}
          </span>
        )}
      </div>

      {/* Content Container */}
      <div
        className={cn(
          "prose prose-sm prose-zinc dark:prose-invert max-w-none [&>pre]:my-2",
          // CSS Mask logic
          !isDetailed &&
            "max-h-[220px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]",
        )}
      >
        <CustomMDX source={note.content} />
      </div>

      {/* Footer: Tags & Read More CTA */}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {note.metadata.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-1 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              <Hash className="h-3 w-3 opacity-50" />
              {tag}
            </span>
          ))}
        </div>

        {/* Visual Cue to click */}
        {!isDetailed && (
          <Link
            href={`/blog/notes/${note.slug}`}
            className="flex items-center gap-1 text-xs font-bold text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400"
          >
            Read Note <ArrowRight className="h-3 w-3" />
          </Link>
        )}
      </div>
    </div>
  );
}
