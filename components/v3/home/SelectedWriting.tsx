import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { getHomepageBlogPosts } from "@/lib/blog";

const editorialKeys = ["Interface", "Reliability", "Performance"] as const;

export async function SelectedWriting() {
  const posts = getHomepageBlogPosts();
  const locale = await getLocale();
  const t = await getTranslations("V3.Home.Writing");
  const [lead, ...supporting] = posts;

  if (!lead) return null;

  const formatDate = (value: string) =>
    new Intl.DateTimeFormat(locale, {
      month: "short",
      year: "numeric",
    }).format(new Date(value));

  return (
    <Section id="writing" tone="paper" aria-labelledby="v3-writing-title">
      <Container>
        <header className="grid gap-7 border-b border-v3-line pb-9 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-16">
          <div>
            <p className="v3-label text-v3-blue">{t("Eyebrow")}</p>
            <h2
              id="v3-writing-title"
              className="v3-heading mt-7 max-w-4xl text-balance"
            >
              {t("Title")}
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="v3-body text-v3-muted">{t("Description")}</p>
            <Link
              href="/blog"
              className="mt-5 inline-flex min-h-11 items-center gap-2 border-b-2 border-v3-blue font-v3-text text-sm font-bold text-v3-blue"
            >
              {t("ViewAll")}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(24rem,0.85fr)] lg:gap-16">
          <article>
            <Link href={`/blog/${lead.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden border border-v3-line bg-v3-blue">
                {lead.metadata.coverImage ? (
                  <Image
                    src={lead.metadata.coverImage}
                    alt={lead.metadata.title}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : null}
                <span className="absolute start-4 top-4 bg-v3-yellow px-3 py-2 v3-technical text-[#171714]">
                  {t("Lead")}
                </span>
              </div>
              <div className="mt-6 flex items-center gap-3 v3-technical text-v3-muted">
                <span>{t(`${editorialKeys[0]}.Lens`)}</span>
                <span aria-hidden="true">/</span>
                <span>{formatDate(lead.metadata.publishedAt)}</span>
                <span aria-hidden="true">/</span>
                <span>{lead.metadata.readTime}</span>
              </div>
              <h3 className="mt-4 max-w-3xl font-v3-display text-[clamp(2rem,4vw,3.7rem)] font-bold leading-[0.98] tracking-[-0.055em] group-hover:text-v3-blue">
                {lead.metadata.title}
              </h3>
              <p className="v3-body mt-5 max-w-2xl text-v3-muted">
                {t(`${editorialKeys[0]}.Description`)}
              </p>
            </Link>
          </article>

          <ol className="border-t border-v3-line">
            {supporting.map((post, index) => {
              const key = editorialKeys[index + 1];

              return (
                <li key={post.slug} className="border-b border-v3-line py-7">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid gap-5 sm:grid-cols-[4.5rem_minmax(0,1fr)]"
                  >
                    <div>
                      <span className="v3-technical text-v3-blue">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 v3-technical text-v3-muted">
                        <span>{t(`${key}.Lens`)}</span>
                        <span aria-hidden="true">/</span>
                        <span>{post.metadata.readTime}</span>
                      </div>
                      <h3 className="mt-3 font-v3-display text-[clamp(1.65rem,3vw,2.7rem)] font-bold leading-[1.02] tracking-[-0.05em] group-hover:text-v3-blue">
                        {post.metadata.title}
                      </h3>
                      <p className="mt-4 font-v3-text text-sm leading-relaxed text-v3-muted">
                        {t(`${key}.Description`)}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 font-v3-text text-sm font-bold text-v3-blue">
                        {t("ReadArticle")}
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
