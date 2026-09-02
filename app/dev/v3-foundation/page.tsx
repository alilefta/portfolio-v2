import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ChapterTransition } from "@/components/v3/layout/ChapterTransition";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { SiteHeader } from "@/components/v3/layout/SiteHeader";
import { Annotation } from "@/components/v3/ui/Annotation";
import { Button } from "@/components/v3/ui/Button";
import { Label } from "@/components/v3/ui/Label";
import { MediaFrame } from "@/components/v3/ui/MediaFrame";
import { Metric } from "@/components/v3/ui/Metric";

export const metadata = {
  title: "V3 Foundation Showcase",
  robots: { index: false, follow: false },
};

export default function V3FoundationPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main className="min-h-dvh bg-v3-paper text-v3-ink">
      <SiteHeader />

      <Section dir="ltr" lang="en">
        <Container>
          <Label signal="blue">M1 / Visual foundation</Label>
          <h1 className="v3-display mt-8 max-w-7xl text-balance">
            Products built with a maker’s curiosity.
          </h1>
          <p className="v3-body mt-8 max-w-2xl text-v3-muted">
            The expressive public layer for a portfolio backed by rigorous,
            inspectable engineering evidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="large">
              <Link href="/projects">
                Inspect the work <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="secondary" size="large">
              Secondary action
            </Button>
            <Button variant="outline" size="large">
              Outline action
            </Button>
            <Button disabled size="large">
              Disabled action
            </Button>
          </div>
        </Container>
      </Section>

      <Section dir="ltr" lang="en" tone="surface" spacing="compact">
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Metric value="01" label="Product sold" note="Commercial proof" />
          <Metric value="6+" label="Years in labs" note="Domain depth" />
          <Metric value="93.8%" label="CS result" note="Academic evidence" />
          <Metric value="2" label="Platforms" note="Web + desktop" />
        </Container>
      </Section>

      <ChapterTransition
        dir="ltr"
        eyebrow="From personality to proof"
        title="A warm introduction. Then open the workshop doors."
        index="01"
      />

      <Section dir="ltr" lang="en">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <MediaFrame
            caption="Oscar’s operational dashboard, presented as product evidence."
            meta="FIG. 01 / DESKTOP"
          >
            <div className="relative aspect-[16/10] bg-[#111]">
              <Image
                src="/images/projects/oscar-lab-system/oscar-lab-system-dark.png"
                alt="Oscar dental laboratory management dashboard"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </MediaFrame>

          <div>
            <Label signal="coral">Decision record</Label>
            <h2 className="v3-heading mt-6">Evidence before adjectives.</h2>
            <p className="v3-body mt-6 text-v3-muted">
              Case studies explain the constraint, the decision, the artifact,
              and the result. Technology lists stay supporting evidence rather
              than becoming the story.
            </p>
            <Annotation marker="WHY" className="mt-10">
              Visible borders, physical shadows, and warm surfaces replace the
              translucent glass language used in V2.
            </Annotation>
          </div>
        </Container>
      </Section>

      <Section tone="yellow" spacing="compact">
        <Container>
          <p className="v3-label">Arabic / RTL typography check</p>
          <div dir="rtl" lang="ar" className="mt-7 max-w-4xl text-right">
            <h2 className="v3-heading">منتجات رقمية تُبنى بعقلية الصانع.</h2>
            <p className="v3-body mt-6 max-w-2xl">
              واجهة دافئة ومعبرة، تدعمها دراسات حالة توثّق القرارات الهندسية
              والنتائج بوضوح ودقة.
            </p>
          </div>
        </Container>
      </Section>

      <Section dir="ltr" lang="en" tone="ink" spacing="compact">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="v3-label text-v3-yellow">Long label behavior</p>
              <p className="v3-body mt-3 max-w-md text-white/70">
                An intentionally long interface label remains readable and wraps
                instead of escaping its container.
              </p>
            </div>
            <div className="border border-white/20 p-5">
              <p className="v3-technical text-white/55">MEDIA / UNAVAILABLE</p>
              <p className="mt-10 font-v3-text font-bold">
                A useful missing-image state will live here.
              </p>
            </div>
            <div>
              <Label signal="yellow">Keyboard focus target</Label>
              <div className="mt-5">
                <Button variant="outline">Tab to inspect focus</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
