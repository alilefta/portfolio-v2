import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { CodeSnippet } from "@/components/mdx-components/CodeSnippet"; // Assuming you have this
import { AlertCircle, FileText, Info } from "lucide-react";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm"; // for tables

import remarkMath from "remark-math"; // for powered numbers and LateX support
import rehypeKatex from "rehype-katex";

const components = {
  // --- Headings ---
  h1: ({ children }) => (
    <h1 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl dark:text-zinc-100">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-6 border-b border-zinc-200 pb-2 text-2xl font-semibold tracking-tight text-zinc-900 first:mt-0 dark:border-zinc-800 dark:text-zinc-100">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-4 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-3 text-base leading-7 font-semibold text-zinc-900 dark:text-zinc-100">
      {children}
    </h4>
  ),

  // --- Body Text ---
  p: ({ children }) => (
    <p className="mb-6 leading-7 text-zinc-700 dark:text-zinc-400">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-900 dark:text-zinc-200">
      {children}
    </strong>
  ),

  // --- Lists ---
  ul: ({ children }) => (
    <ul className="mb-6 ml-6 list-disc text-zinc-700 dark:text-zinc-400 [&>li]:mt-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 ml-6 list-decimal text-zinc-700 dark:text-zinc-400 [&>li]:mt-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-2">{children}</li>,

  // --- Quotes & Callouts ---
  blockquote: ({ children }) => (
    <blockquote className="my-6 rounded-r-lg border-l-4 border-blue-500 bg-zinc-50 py-4 pr-4 pl-6 text-zinc-700 italic dark:border-blue-400 dark:bg-zinc-900 dark:text-zinc-300">
      {children}
    </blockquote>
  ),

  // --- Links ---
  a: ({ children, href }) => {
    const isExternal = href?.startsWith("http");
    return (
      <Link
        href={href || "#"}
        className="font-medium text-blue-600 underline underline-offset-4 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  },

  // --- Media ---
  img: (props) => {
    // If it's a badge (you can tag your badges in MDX with alt="Badge: License"), render simply
    const isBadge =
      props.alt?.toLowerCase().includes("badge") ||
      props.src?.toString().includes("shields.io");

    if (isBadge) {
      return (
        <span className="inline-block align-middle">
          {/* Standard img tag for badges to avoid Next.js Image optimization overhead on external SVGs */}
          <img src={props.src as string} alt={props.alt} className="h-auto" />
        </span>
      );
    }

    // Default "Screenshot Card" style for everything else
    return (
      <span className="my-8 block w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        <Image
          className="h-auto w-full object-cover transition-all hover:scale-[1.02]"
          width={1200}
          height={630}
          {...(props as ImageProps)}
          alt={props.alt || "Article image"}
        />
        {props.alt && (
          // Also changed inner container to span/block for safety
          <span className="block border-t border-zinc-200 bg-zinc-50 px-4 py-2 text-center text-xs text-zinc-500 italic dark:border-zinc-800 dark:bg-zinc-900/50">
            {props.alt}
          </span>
        )}
      </span>
    );
  },

  hr: () => <hr className="my-10 border-zinc-200 dark:border-zinc-800" />,

  // --- Tables ---
  table: ({ children }) => (
    <div className="my-8 w-full overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-200">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-zinc-200 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50">
      {children}
    </tr>
  ),
  th: ({ children }) => <th className="px-6 py-3 font-semibold">{children}</th>,
  td: ({ children }) => (
    <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">{children}</td>
  ),

  // --- Code ---
  // Assuming CodeSnippet handles the internal highlighting
  code: CodeSnippet,
  pre: ({ children }) => (
    <pre className="not-prose m-0 overflow-visible border-0 bg-transparent p-0">
      {children}
    </pre>
  ),

  // --- Custom Callout Component (Optional usage in MDX: <Callout>...</Callout>) ---
  Callout: ({
    children,
    type = "info",
  }: {
    children: React.ReactNode;
    type?: "info" | "warning" | "note";
  }) => {
    const colors = {
      info: "bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-900/20 dark:text-blue-200 dark:border-blue-800",
      warning:
        "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-900/20 dark:text-amber-200 dark:border-amber-800",
      note: "bg-zinc-50 text-zinc-900 border-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-200 dark:border-zinc-700",
    };
    const icons = {
      info: Info,
      warning: AlertCircle,
      note: FileText,
    };
    const Icon = icons[type];

    return (
      <div className={`my-6 flex gap-3 rounded-lg border p-4 ${colors[type]}`}>
        <Icon className="h-5 w-5 shrink-0" />
        <div className="text-sm [&>p]:mb-0">{children}</div>
      </div>
    );
  },
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }], // Optional: adds anchor links to headers
            rehypeKatex,
          ],
        },
      }}
    />
  );
}
