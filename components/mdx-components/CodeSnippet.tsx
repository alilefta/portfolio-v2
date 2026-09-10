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

    const displayLabel = filename || "Snippet";

    return (
      <div lang="en" dir="ltr" className="group my-10 overflow-hidden border border-[#4a4943] bg-[#20201d] text-left shadow-[0_12px_28px_rgb(23_23_20_/_0.14)]">
        <ShadcnCodeBlock
          className="relative bg-[#20201d]"
          data={[{ language, filename: displayLabel, code }]}
          defaultValue={language}
        >
          <CodeBlockHeader className="flex min-h-11 items-center justify-between border-b border-[#4a4943] bg-[#292925] px-4">
            <CodeBlockFiles>
              {(item) => (
                <div className="flex items-center gap-3" key={item.language}>
                  <span className="font-v3-mono text-[0.68rem] font-medium uppercase tracking-[0.13em] text-[#ed866e]">{item.language}</span>
                  <span aria-hidden="true" className="h-3 w-px bg-[#65635b]" />
                  <CodeBlockFilename key={item.language} value={item.language} className="font-v3-mono text-xs text-[#d9d3c8]">
                    {item.filename}
                  </CodeBlockFilename>
                </div>
              )}
            </CodeBlockFiles>

            <div className="flex items-center">
              <CodeBlockCopyButton
                aria-label="Copy code"
                title="Copy code"
                className="size-8 rounded-none text-[#c5beb2] transition-colors hover:bg-[#3b3a35] hover:text-[#fffaf0] focus-visible:ring-2 focus-visible:ring-[#f2cc3d]"
              />
            </div>
          </CodeBlockHeader>

          <CodeBlockBody className="p-0">
            {(item) => (
              <CodeBlockItem key={item.language} value={item.language}>
                <CodeBlockContent
                  className="overflow-x-auto bg-[#20201d] p-5 font-v3-mono text-[0.82rem] leading-7 text-[#f3eee4] [&_.line]:px-5 [&_.line]:text-[#f3eee4] [&_.line]:before:text-[#858176] [&_.shiki]:!bg-[#20201d] [&_.shiki]:!text-[#f3eee4] [&_.shiki_span]:!text-inherit"
                  language={item.language as BundledLanguage}
                  themes={{ light: "vitesse-dark", dark: "vitesse-dark" }}
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
      className="mx-0.5 border border-[#d9d2c5] bg-[#f0ebe1] px-1.5 py-0.5 font-v3-mono text-[0.84em] font-medium text-[#28241f]"
      {...props}
    >
      {children}
    </code>
  );
};
