import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";

export function FieldNotes({ locale, browseLabel }: { locale: string; browseLabel: string }) {
  return <section className="bg-[#fbf8f1] pb-14 text-center text-[#254fa7]"><Link href={`/${locale}/blog/notes`} className="inline-flex items-center gap-3 font-v3-text text-sm font-semibold hover:text-[#183d86]"><FlaskConical className="size-4" aria-hidden="true" />{browseLabel}<ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" /></Link></section>;
}
