"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

/**
 * next/router is used with Next Page Router
 * next/navigation is used with Next App Router
 */

type Props = {
  title: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "link"
    | "ghost"
    | "outline"
    | "secondary"
    | null
    | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ title, variant, className, ...props }: Props) {
  const { back } = useRouter();

  return (
    <Button
      variant={variant}
      title={title}
      aria-label={title}
      className={className}
      {...props}
      onClick={() => back()}
    >
      {title}
    </Button>
  );
}
