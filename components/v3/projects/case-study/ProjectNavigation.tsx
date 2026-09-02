import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/v3/layout/Container";

type ProjectLink = { href: string; label: string; title: string };

type ProjectNavigationProps = {
  label: string;
  previous: ProjectLink;
  next: ProjectLink;
};

export function ProjectNavigation({
  label,
  previous,
  next,
}: ProjectNavigationProps) {
  return (
    <nav aria-label={label} className="bg-v3-surface-dark text-[#f5f1e8]">
      <Container className="grid md:grid-cols-2">
        <Link
          href={previous.href}
          className="group border-b border-white/15 py-10 md:border-b-0 md:border-e md:pe-10"
        >
          <span className="flex items-center gap-2 v3-technical text-white/40">
            <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
            {previous.label}
          </span>
          <span className="mt-5 block font-v3-display text-3xl font-bold tracking-[-0.045em] group-hover:text-v3-yellow">
            {previous.title}
          </span>
        </Link>
        <Link href={next.href} className="group py-10 md:ps-10">
          <span className="flex items-center justify-between gap-4 v3-technical text-white/40">
            {next.label}
            <ArrowUpRight className="size-4 rtl:-rotate-90" aria-hidden="true" />
          </span>
          <span className="mt-5 block font-v3-display text-3xl font-bold tracking-[-0.045em] group-hover:text-v3-yellow">
            {next.title}
          </span>
        </Link>
      </Container>
    </nav>
  );
}
