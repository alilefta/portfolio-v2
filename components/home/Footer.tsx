import Link from "next/link";
import {
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Twitter,
  ArrowUpRight,
  Linkedin,
  Github,
  LucideIcon,
} from "lucide-react";
import { EMAIL, INSTAGRAM, GITHUB, LINKEDIN, TELEGRAM } from "@/lib/info";

const socail_links: {
  label: string;
  link: string;
  icon: LucideIcon;
  alt_icon: string;
}[] = [
  {
    label: "Instagram",
    link: INSTAGRAM,
    icon: Instagram,
    alt_icon: "IG",
  },
  {
    label: "Telegram",
    link: TELEGRAM,
    icon: MessageCircle,
    alt_icon: "IG",
  },
  {
    label: "LinkedIn",
    link: LINKEDIN,
    icon: Linkedin,
    alt_icon: "LI",
  },
  {
    label: "GitHub",
    link: GITHUB,
    icon: Github,
    alt_icon: "GH",
  },
];

export default function FooterSection() {
  return (
    <footer className="mx-auto flex max-w-7xl grid-cols-1 flex-col gap-12 border-t border-zinc-200 bg-zinc-50 px-6 py-12 md:grid md:grid-cols-11 lg:grid-cols-3 lg:gap-8 lg:px-8 lg:py-20 dark:border-zinc-800 dark:bg-zinc-950/50">
      {/* COLUMN 1: BRANDING */}
      <div className="w-full md:col-span-5 lg:col-span-1">
        <h3 className="flex flex-col text-5xl leading-[0.9] font-bold tracking-tight text-zinc-900 uppercase md:text-7xl dark:text-zinc-100">
          <span>Design.</span>
          <span className="text-zinc-400 dark:text-zinc-600">Code.</span>
          <span>Build.</span>
          <span className="text-zinc-400 dark:text-zinc-600">Repeat.</span>
        </h3>

        <p className="mt-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Ali Mohsin — Handcrafted with love &
          logic.
        </p>
      </div>

      {/* COLUMN 2: LINKS */}
      <div className="w-full md:col-span-2 md:mx-auto md:w-fit lg:col-span-1 lg:pt-2">
        <h3 className="mb-6 text-sm font-semibold tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
          Directory
        </h3>

        <div className="flex flex-col gap-4 text-sm font-medium text-zinc-600 md:gap-6 lg:text-base dark:text-zinc-400">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Engineering Log
            </Link>
          </div>

          <hr className="w-12 border-zinc-300 dark:border-zinc-800" />

          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact Me
            </Link>
            <Link
              href="/services"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Services
            </Link>
            <span className="cursor-not-allowed text-zinc-400/50 dark:text-zinc-700">
              Courses (Soon)
            </span>
          </div>
        </div>
      </div>

      {/* COLUMN 3: CONTACT & SOCIALS */}
      <div className="mx-auto flex w-full flex-col gap-8 md:col-span-4 md:ml-auto md:w-fit md:justify-between lg:col-span-1 lg:gap-12">
        {/* Social Icons */}
        <div className="flex items-center gap-4 md:justify-end">
          {socail_links.map(({ label, icon: Icon, alt_icon, link }, i) => (
            <Link
              key={`${label}_${i}`}
              href={link}
              target="_blank"
              aria-description={alt_icon}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-600 shadow-sm transition-all hover:scale-110 hover:text-blue-600 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-blue-400"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>

        {/* Info Block */}
        <div className="flex flex-col gap-6 md:items-end">
          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-2 font-mono text-xl font-medium text-zinc-900 transition-colors hover:text-blue-600 md:text-xl lg:text-2xl dark:text-zinc-200 dark:hover:text-blue-400"
          >
            {EMAIL}
            <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-500">
            <div className="flex flex-col text-right font-mono text-xs">
              <span className="block text-zinc-400 dark:text-zinc-600">
                Base of Operations
              </span>
              <span>Babil, Hilla, Iraq</span>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200/50 dark:bg-zinc-900">
              <MapPin className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
