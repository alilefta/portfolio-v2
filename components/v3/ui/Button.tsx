import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const v3ButtonVariants = cva(
  "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 border px-5 py-2.5 font-v3-text text-sm font-bold transition-[transform,background-color,color,box-shadow] duration-150 disabled:pointer-events-none disabled:opacity-45 active:translate-y-0.5 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "border-v3-ink bg-v3-ink text-v3-paper shadow-[var(--v3-shadow-short)] hover:-translate-y-0.5 hover:bg-v3-blue hover:shadow-none dark:border-v3-yellow dark:bg-v3-yellow dark:text-[#171714] dark:hover:bg-v3-blue dark:hover:text-white",
        secondary:
          "border-v3-line bg-v3-surface text-v3-ink hover:border-v3-ink hover:bg-v3-yellow",
        outline:
          "border-current bg-transparent text-current hover:bg-v3-ink hover:text-v3-paper dark:hover:bg-v3-yellow dark:hover:text-[#171714]",
        text: "min-h-0 border-transparent bg-transparent px-0 py-1 text-v3-blue underline decoration-2 underline-offset-4 hover:text-v3-blue-strong",
      },
      size: {
        default: "",
        large: "min-h-12 px-6 text-base",
        icon: "size-11 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof v3ButtonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(v3ButtonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
