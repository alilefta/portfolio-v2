import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export function FeaturedEssay({ post, locale, label, readLabel, category, date }: { post: BlogPost; locale: string; label: string; readLabel: string; category: string; date: string }) {
  return (
    <section className="bg-[#fbf8f1] text-[#191715]">
      <div className="mx-auto grid max-w-[88rem] gap-9 px-[clamp(1.5rem,5vw,5rem)] pb-7 lg:grid-cols-[minmax(27rem,0.84fr)_minmax(0,1fr)] lg:items-center lg:gap-20 lg:pb-8">
        <Link href={`/${locale}/blog/${post.slug}`} className="relative aspect-[1.72/1] overflow-hidden bg-[#1d201e]" aria-label={post.metadata.coverAlt ?? post.metadata.title}>
          {post.metadata.coverImage ? <Image src={post.metadata.coverImage} alt={post.metadata.coverAlt ?? post.metadata.title} fill priority sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" /> : null}
        </Link>
        <div className="flex flex-col justify-between py-1">
          <div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-v3-text text-sm"><span className="font-bold tracking-[0.08em] text-[#e55d49]">{label}</span><span className="text-[#878077]">{category}</span></div>
            <h2 className="mt-5 max-w-3xl font-playfair text-[clamp(2.25rem,4vw,3.65rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-balance">
              {post.metadata.title}
            </h2>
            <p className="mt-4 max-w-2xl font-v3-text text-[0.98rem] leading-7 text-[#6d675f] sm:text-base">{post.metadata.summary}</p>
          </div>
          <Link href={`/${locale}/blog/${post.slug}`} className="group mt-7 inline-flex items-center gap-3 font-v3-text text-sm text-[#6d675f]">
            <span>{date}</span><span aria-hidden="true">·</span><span>{post.metadata.readTime}</span><span aria-hidden="true">·</span><span className="font-semibold text-[#254fa7]">{readLabel} <ArrowRight className="inline size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" aria-hidden="true" /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
