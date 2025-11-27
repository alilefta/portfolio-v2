"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Copy to globals.css
// @layer base {
//   :root {
//     /* =========================================
//        BUTTON TOKENS
//        ========================================= */

//     /* 1. PRIMARY (The CTA) - "Obsidian" vs "Phosphorus" */
//     --btn-primary-bg: #18181b;         /* zinc-950 */
//     --btn-primary-fg: #ffffff;
//     --btn-primary-border: transparent;
//     --btn-primary-hover: #27272a;      /* zinc-800 */
//     --btn-primary-shadow: 0 1px 2px rgba(0,0,0,0.1);

//     /* 2. SECONDARY (The Alternative) - "Ceramic" vs "Glass" */
//     --btn-secondary-bg: #ffffff;
//     --btn-secondary-fg: #27272a;       /* zinc-800 */
//     --btn-secondary-border: #e4e4e7;   /* zinc-200 */
//     --btn-secondary-hover: #f4f4f5;    /* zinc-100 */
//     --btn-secondary-shadow: 0 1px 2px rgba(0,0,0,0.05);

//     /* 3. OUTLINE (The Technical) */
//     --btn-outline-bg: transparent;
//     --btn-outline-fg: #52525b;         /* zinc-600 */
//     --btn-outline-border: #e4e4e7;     /* zinc-200 */
//     --btn-outline-hover-bg: #f4f4f5;   /* zinc-100 */
//     --btn-outline-hover-fg: #18181b;   /* zinc-900 */

//     /* 4. GHOST (The Link) */
//     --btn-ghost-fg: #52525b;           /* zinc-600 */
//     --btn-ghost-hover-bg: #f4f4f5;     /* zinc-100 */
//     --btn-ghost-hover-fg: #18181b;     /* zinc-900 */

//     /* 5. DESTRUCTIVE (The Error) */
//     --btn-destructive-bg: #ef4444;     /* red-500 */
//     --btn-destructive-fg: #ffffff;
//     --btn-destructive-hover: #dc2626;  /* red-600 */
//   }

//   .dark {
//     /* DARK MODE OVERRIDES */

//     /* 1. PRIMARY: Becomes White/Glowy */
//     --btn-primary-bg: #ffffff;
//     --btn-primary-fg: #000000;
//     --btn-primary-hover: #e4e4e7;      /* zinc-200 */
//     /* Use a glow instead of a shadow in dark mode */
//     --btn-primary-shadow: 0 0 20px rgba(255, 255, 255, 0.2);

//     /* 2. SECONDARY: Becomes Glass */
//     --btn-secondary-bg: rgba(255, 255, 255, 0.05);
//     --btn-secondary-fg: #f4f4f5;       /* zinc-100 */
//     --btn-secondary-border: rgba(255, 255, 255, 0.1);
//     --btn-secondary-hover: rgba(255, 255, 255, 0.1);
//     --btn-secondary-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1);

//     /* 3. OUTLINE */
//     --btn-outline-fg: #a1a1aa;         /* zinc-400 */
//     --btn-outline-border: rgba(255, 255, 255, 0.1);
//     --btn-outline-hover-bg: rgba(255, 255, 255, 0.05);
//     --btn-outline-hover-fg: #ffffff;

//     /* 4. GHOST */
//     --btn-ghost-fg: #a1a1aa;           /* zinc-400 */
//     --btn-ghost-hover-bg: rgba(255, 255, 255, 0.05);
//     --btn-ghost-hover-fg: #ffffff;

//     /* 5. DESTRUCTIVE */
//     --btn-destructive-bg: rgba(239, 68, 68, 0.2); /* red-500 @ 20% */
//     --btn-destructive-fg: #fca5a5;     /* red-300 */
//     --btn-destructive-hover: rgba(239, 68, 68, 0.3);
//   }
// }

const buttonVariants = cva(
  // BASE STYLES
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // 1. PRIMARY (Action)
        primary:
          "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] shadow-[var(--btn-primary-shadow)] hover:bg-[var(--btn-primary-hover)] border border-[var(--btn-primary-border)]",

        // 2. SECONDARY (Alternative)
        secondary:
          "bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-fg)] border border-[var(--btn-secondary-border)] shadow-[var(--btn-secondary-shadow)] hover:bg-[var(--btn-secondary-hover)] backdrop-blur-sm",

        // 3. OUTLINE (Technical)
        outline:
          "bg-[var(--btn-outline-bg)] text-[var(--btn-outline-fg)] border border-[var(--btn-outline-border)] hover:bg-[var(--btn-outline-hover-bg)] hover:text-[var(--btn-outline-hover-fg)]",

        // 4. GHOST (Minimal)
        ghost:
          "text-[var(--btn-ghost-fg)] hover:bg-[var(--btn-ghost-hover-bg)] hover:text-[var(--btn-ghost-hover-fg)]",

        // 5. DESTRUCTIVE (Danger)
        destructive:
          "bg-[var(--btn-destructive-bg)] text-[var(--btn-destructive-fg)] hover:bg-[var(--btn-destructive-hover)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base", // Hero CTA size
        icon: "h-10 w-10", // Square for SVG icons
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
