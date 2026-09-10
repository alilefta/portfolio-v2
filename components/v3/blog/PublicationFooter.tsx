import Link from "next/link";
import { Rss } from "lucide-react";
import { EMAIL } from "@/lib/info";

export function PublicationFooter({ locale, rssLabel, contactLabel }: { locale: string; rssLabel: string; contactLabel: string }) {
  return <footer className="border-t border-[#d9d2c5] bg-[#fbf8f1] text-[#5f5a53]"><div className="mx-auto flex max-w-[88rem] flex-col gap-4 px-[clamp(1.5rem,5vw,5rem)] py-9 font-v3-text text-sm sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Ali Lefta</p><div className="flex items-center gap-5"><Link href={`/${locale}/blog/feed.xml`} className="inline-flex items-center gap-2 hover:text-[#191715]"><Rss className="size-4" aria-hidden="true" />{rssLabel}</Link><a href={`mailto:${EMAIL}`} className="hover:text-[#191715]">{contactLabel}</a></div></div></footer>;
}
