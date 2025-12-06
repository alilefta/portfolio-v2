import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { CodeSnippet } from "@/components/mdx-components/CodeSnippet";
import Link from "next/link";
const components = {
  h1: ({ children }) => (
    <h1 className="mt-12 mb-8 scroll-m-20 text-3xl font-bold tracking-tight first:mt-0 lg:text-4xl lg:tracking-tighter">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-6 scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-3 scroll-m-20 text-base font-semibold tracking-tight lg:text-xl">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="font-sans text-sm leading-7 text-wrap text-gray-600 not-first:mt-6 lg:text-base dark:text-gray-400">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="my-6 ml-6 list-disc text-gray-600 dark:text-gray-300 [&>li]:mt-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-6 ml-6 list-decimal text-gray-600 dark:text-gray-300 [&>li]:mt-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-6">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-primary/60 mt-6 border-l-4 pl-6 text-gray-700 italic dark:text-gray-300">
      {children}
    </blockquote>
  ),
  a: ({ children, href }) => (
    <Link
      href={href}
      className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  ),
  img: (props) => (
    <Image
      className="transition-all hover:scale-105"
      width={1200}
      height={800}
      {...(props as ImageProps)}
      alt={props.alt || "Article image"}
    />
  ),
  hr: () => <hr className="my-8 border-gray-200 dark:border-gray-800" />,
  table: ({ children }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse border border-gray-200 dark:border-gray-800">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-gray-200 bg-gray-50 px-4 py-2 text-left font-semibold dark:border-gray-800 dark:bg-gray-800">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-gray-200 px-4 py-2 dark:border-gray-800">
      {children}
    </td>
  ),
  code: CodeSnippet,
  pre: ({ children }) => (
    <pre className="bg-transparent px-0! py-0">{children}</pre>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
