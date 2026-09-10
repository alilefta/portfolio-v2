import { permanentRedirect } from "next/navigation";

export default async function LegacyNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  permanentRedirect(`/en/blog/notes/${slug}`);
}
