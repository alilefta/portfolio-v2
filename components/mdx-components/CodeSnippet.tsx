"use client";
import {
  CodeBlock as ShadcnCodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockFiles,
  CodeBlockFilename,
} from "@/components/ui/shadcn-io/code-block";
import type { BundledLanguage } from "@/components/ui/shadcn-io/code-block";
import { Terminal } from "lucide-react";

type CodeProps = {
  children: React.ReactNode;
  className?: string;
  // MDX often passes metadata (like filename) if configured,
  // but we'll default gracefully if not present.
  filename?: string;
} & React.HTMLAttributes<HTMLElement>;

export const CodeSnippet = ({
  children,
  className,
  filename,
  ...props
}: CodeProps) => {
  const match = /language-(\w+)/.exec(className || "");

  // --- BLOCK CODE ---
  if (match) {
    const language = match[1] as BundledLanguage;
    const code = String(children).trim();

    // Default label if no filename is passed
    const displayLabel = filename || language || "Terminal";

    return (
      <div className="group my-8 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/50">
        <ShadcnCodeBlock
          className="relative"
          data={[{ language, filename: displayLabel, code }]}
          defaultValue={language}
        >
          {/* Header: Mimics a clean editor tab */}
          <CodeBlockHeader className="flex h-12 items-center justify-between border-b border-zinc-200 bg-white px-4 dark:border-zinc-800 dark:bg-zinc-900">
            {/* Left: Icon + Filename/Language */}
            <CodeBlockFiles>
              {(item) => (
                <div className="flex items-center gap-2" key={item.language}>
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/20" />
                  </div>
                  <div className="ml-3 border-l border-zinc-200 pl-3 dark:border-zinc-800">
                    <CodeBlockFilename
                      key={item.language}
                      value={item.language}
                      className="flex items-center gap-2 font-mono text-xs font-medium text-zinc-600 dark:text-zinc-400"
                    >
                      <div className="flex items-center gap-2">
                        <Terminal className="h-3 w-3 opacity-50" />
                        <span>{item.filename}</span>
                      </div>
                    </CodeBlockFilename>
                  </div>
                </div>
              )}
            </CodeBlockFiles>

            {/* Right: Copy Button */}
            <div className="flex items-center">
              <CodeBlockCopyButton
                className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200"
                onCopy={() => console.log("Copied code to clipboard")}
                onError={() =>
                  console.error("Failed to copy code to clipboard")
                }
              />
            </div>
          </CodeBlockHeader>

          {/* Body: The actual code content */}
          <CodeBlockBody className="p-0">
            {(item) => (
              <CodeBlockItem key={item.language} value={item.language}>
                <CodeBlockContent
                  className="overflow-x-auto p-4 text-sm leading-6"
                  language={item.language as BundledLanguage}
                >
                  {item.code}
                </CodeBlockContent>
              </CodeBlockItem>
            )}
          </CodeBlockBody>
        </ShadcnCodeBlock>
      </div>
    );
  }

  // --- INLINE CODE ---
  return (
    <code
      className="mx-0.5 rounded-md border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.875em] font-medium text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
      {...props}
    >
      {children}
    </code>
  );
};
