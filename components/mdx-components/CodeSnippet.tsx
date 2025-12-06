"use client";
import {
  CodeBlock as ShadcnCodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
  CodeBlockCopyButton,
  CodeBlockSelectItem,
  CodeBlockSelectContent,
  CodeBlockHeader,
  CodeBlockFiles,
  CodeBlockFilename,
  CodeBlockSelect,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from "@/components/ui/shadcn-io/code-block";
import type { BundledLanguage } from "@/components/ui/shadcn-io/code-block";

type CodeProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const CodeSnippet = ({ children, className, ...props }: CodeProps) => {
  const match = /language-(\w+)/.exec(className || "");

  if (match) {
    const language = match[1] as BundledLanguage;
    const code = String(children).trim();
    return (
      <ShadcnCodeBlock
        className=""
        data={[{ language, filename: "Snippet", code }]}
        defaultValue={language}
      >
        <CodeBlockHeader>
          <CodeBlockFiles>
            {(item) => (
              <CodeBlockFilename key={item.language} value={item.language}>
                {item.filename}
              </CodeBlockFilename>
            )}
          </CodeBlockFiles>
          <CodeBlockSelect>
            <CodeBlockSelectTrigger>
              <CodeBlockSelectValue />
            </CodeBlockSelectTrigger>
            <CodeBlockSelectContent>
              {(item) => (
                <CodeBlockSelectItem key={item.language} value={item.language}>
                  {item.language}
                </CodeBlockSelectItem>
              )}
            </CodeBlockSelectContent>
          </CodeBlockSelect>
          <CodeBlockCopyButton
            onCopy={() => console.log("Copied code to clipboard")}
            onError={() => console.error("Failed to copy code to clipboard")}
          />
        </CodeBlockHeader>
        <CodeBlockBody>
          {(item) => (
            <CodeBlockItem key={item.language} value={item.language}>
              <CodeBlockContent
                className="*:prose-base mr-1 overflow-auto *:mt-0"
                language={item.language as BundledLanguage}
              >
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </ShadcnCodeBlock>
    );
  }

  // Inline code (children is ReactNode, so just render it)
  return (
    <code
      className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-800"
      {...props}
    >
      {children}
    </code>
  );
};
