import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { CodeSnippet } from "@/components/mdx-components/CodeSnippet";

export const notebookMdxComponents = {
  h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h2
      className={`mt-16 mb-6 font-playfair text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-[#191715] ${className ?? ""}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className={`mt-16 mb-6 scroll-mt-28 border-t border-[#d9d2c5] pt-6 font-playfair text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-[#191715] first:mt-0 [&>a]:text-inherit [&>a]:no-underline [&>a:hover]:text-inherit ${className ?? ""}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className={`mt-11 mb-4 scroll-mt-28 font-playfair text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#191715] [&>a]:text-inherit [&>a]:no-underline [&>a:hover]:text-inherit ${className ?? ""}`}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className={`mt-8 mb-3 font-v3-text text-base font-extrabold text-[#191715] ${className ?? ""}`}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p
      className={`mb-7 font-v3-text text-[1.05rem] leading-[1.85] text-[#645e58] sm:text-[1.1rem] ${className ?? ""}`}
      {...props}
    />
  ),
  strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong
      className={`font-extrabold text-[#191715] ${className ?? ""}`}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className={`mb-8 ms-5 list-disc space-y-3 font-v3-text text-[1.04rem] leading-8 text-[#645e58] marker:text-[#b84b3d] sm:text-[1.1rem] ${className ?? ""}`}
      {...props}
    />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className={`mb-8 ms-6 list-decimal space-y-3 font-v3-text text-[1.04rem] leading-8 text-[#645e58] marker:font-v3-mono marker:text-[#b84b3d] sm:text-[1.1rem] ${className ?? ""}`}
      {...props}
    />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={`ps-2 ${className ?? ""}`} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className={`my-10 border-s-2 border-[#b84b3d] bg-[#f0ebe1] px-6 py-5 font-playfair text-xl font-semibold leading-8 tracking-[-0.025em] text-[#191715] [&>p]:m-0 [&>p]:font-playfair [&>p]:text-xl [&>p]:font-semibold [&>p]:text-[#191715] ${className ?? ""}`}
      {...props}
    />
  ),
  a: ({ href, className, ...props }: ComponentPropsWithoutRef<"a">) => {
    const styles = `font-bold text-[#244b9b] underline decoration-2 underline-offset-4 transition-colors hover:text-[#191715] ${className ?? ""}`;
    const isExternal = href?.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }

    return <Link href={href || "#"} className={styles} {...props} />;
  },
  hr: () => <hr className="my-14 border-0 border-t border-[#d9d2c5]" />,
  table: ({ className, ...props }: ComponentPropsWithoutRef<"table">) => (
    <div className="my-10 w-full overflow-x-auto border border-[#d9d2c5] bg-[#f0ebe1]">
      <table
        className={`min-w-[38rem] w-full border-collapse text-start font-v3-text text-sm ${className ?? ""}`}
        {...props}
      />
    </div>
  ),
  thead: ({ className, ...props }: ComponentPropsWithoutRef<"thead">) => (
    <thead
      className={`border-b border-[#d9d2c5] bg-[#e8e0d2] text-[#191715] ${className ?? ""}`}
      {...props}
    />
  ),
  tbody: ({ className, ...props }: ComponentPropsWithoutRef<"tbody">) => (
    <tbody className={`divide-y divide-[#d9d2c5] ${className ?? ""}`} {...props} />
  ),
  th: ({ className, ...props }: ComponentPropsWithoutRef<"th">) => (
    <th
      className={`px-4 py-3 text-start font-extrabold ${className ?? ""}`}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td
      className={`px-4 py-3 align-top leading-6 text-[#645e58] ${className ?? ""}`}
      {...props}
    />
  ),
  code: CodeSnippet,
  pre: ({ children }: ComponentPropsWithoutRef<"pre">) => (
    <pre className="not-prose m-0 max-w-full overflow-visible border-0 bg-transparent p-0">
      {children}
    </pre>
  ),
} satisfies MDXComponents;
