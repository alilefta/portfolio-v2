import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface LabNote {
  slug: string;
  metadata: {
    title: string;
    date: string;
    tags: string[];
    // Optional fields to match your visual style
    type?: "Snippet" | "Review" | "Fix";
    noteNumber?: string;
  };
  content: string;
}

const notesDirectory = path.join(process.cwd(), "content/notes");

export function getLabNotes(): LabNote[] {
  if (!fs.existsSync(notesDirectory)) return [];

  const fileNames = fs.readdirSync(notesDirectory);

  const notes = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(notesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        metadata: data as LabNote["metadata"],
        content,
      };
    });

  return notes.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );
}

// NEW: Function to get a single note by slug
export function getLabNote(slug: string): LabNote | undefined {
  const notes = getLabNotes();
  return notes.find((note) => note.slug === slug);
}
