import Link from "next/link";
import { Github, Twitter, Linkedin, Terminal } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const FOOTER_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100"
          >
            <div className="rounded-md bg-zinc-900 p-1 text-white dark:bg-zinc-100 dark:text-zinc-900">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="font-bold tracking-tight">Ali Mohsin</span>
          </Link>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Ali Mohsin. Built with Next.js &
            Tailwind.
          </p>
        </div>

        {/* Center: Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Socials */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-zinc-200 p-2 text-zinc-600 transition-all hover:bg-zinc-300 hover:text-zinc-900 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
