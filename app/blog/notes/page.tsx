import { getLabNotes } from "@/lib/notes";
import { NoteCard } from "@/components/notes/NoteCard"; // Create this
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Lab Notes | Ali Lefta",
  description: "Snippets, hacks, and configuration files for my future self.",
};

export default function LabNotesPage() {
  const notes = getLabNotes();

  return (
    <div className="mx-auto min-h-dvh max-w-7xl px-6 py-12 pt-24 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Lab Notes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Lab Notes
        </h1>
        <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          A digital garden of code snippets, terminal commands, and quick fixes
          I use in production. Copypasta friendly.
        </p>
      </div>

      {/* CSS Masonry Grid */}
      <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
        {notes.map((note) => (
          <div key={note.slug} className="mb-6 break-inside-avoid">
            <NoteCard note={note} isDetailed={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
