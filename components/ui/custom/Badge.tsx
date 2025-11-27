"use client";

/**
 * BADGE TOKENS (copy into globals.css)
 * --------------------------------------------
// @layer base {
//   :root {
//     /* =========================================
//        1. SURFACE VARIANT (Status/Signal)
//        "The Highlighter" (Light) vs "The Neon" (Dark)
//        ========================================= */
//     /* Neutral */
//     --badge-surface-neutral-bg: #f4f4f5;
//     --badge-surface-neutral-fg: #52525b;
//     --badge-surface-neutral-border: #e4e4e7;
//     /* Success */
//     --badge-surface-success-bg: #ecfdf5;
//     --badge-surface-success-fg: #047857;
//     --badge-surface-success-border: #a7f3d0;
//     /* Warning */
//     --badge-surface-warning-bg: #fffbeb;
//     --badge-surface-warning-fg: #b45309;
//     --badge-surface-warning-border: #fde68a;
//     /* Accent */
//     --badge-surface-accent-bg: #eff6ff;
//     --badge-surface-accent-fg: #1d4ed8;
//     --badge-surface-accent-border: #bfdbfe;

//     /* =========================================
//        2. OUTLINE VARIANT (Tech Stack)
//        "The Plastic Chip" (Light) vs "The Etched Glass" (Dark)
//        ========================================= */
//     --badge-outline-bg: #ffffff;
//     --badge-outline-fg: #52525b;       /* zinc-600 */
//     --badge-outline-border: #e4e4e7;   /* zinc-200 */
//     --badge-outline-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */

//     /* =========================================
//        3. GLASS VARIANT (Premium/Hook)
//        "The Ceramic Plate" (Light) vs "The Frosted Layer" (Dark)
//        ========================================= */
//     --badge-glass-bg: rgba(255, 255, 255, 0.8);
//     --badge-glass-fg: #27272a;         /* zinc-800 */
//     --badge-glass-border: #e4e4e7;     /* zinc-200 */
//     --badge-glass-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */

//     /* =========================================
//        4. GHOST VARIANT (Context/Meta)
//        "Ink" (Light) vs "Dimmed Light" (Dark)
//        ========================================= */
//     --badge-ghost-fg: #71717a;         /* zinc-500 */
//     --badge-ghost-hover-bg: #f4f4f5;   /* zinc-100 */
//     --badge-ghost-hover-fg: #18181b;   /* zinc-900 */
//   }

//   .dark {
//     /* =========================================
//        DARK MODE OVERRIDES
//        ========================================= */

//     /* 1. SURFACE */
//     --badge-surface-neutral-bg: rgba(255, 255, 255, 0.05);
//     --badge-surface-neutral-fg: #a1a1aa;
//     --badge-surface-neutral-border: rgba(255, 255, 255, 0.1);

//     --badge-surface-success-bg: rgba(16, 185, 129, 0.1);
//     --badge-surface-success-fg: #34d399;
//     --badge-surface-success-border: rgba(16, 185, 129, 0.2);

//     --badge-surface-warning-bg: rgba(245, 158, 11, 0.1);
//     --badge-surface-warning-fg: #fbbf24;
//     --badge-surface-warning-border: rgba(245, 158, 11, 0.2);

//     --badge-surface-accent-bg: rgba(59, 130, 246, 0.1);
//     --badge-surface-accent-fg: #60a5fa;
//     --badge-surface-accent-border: rgba(59, 130, 246, 0.2);

//     /* 2. OUTLINE */
//     --badge-outline-bg: rgba(255, 255, 255, 0.05);
//     --badge-outline-fg: #a1a1aa;      /* zinc-400 */
//     --badge-outline-border: rgba(255, 255, 255, 0.1);
//     --badge-outline-shadow: none;     /* No shadow in dark mode, flat etch */

//     /* 3. GLASS */
//     --badge-glass-bg: rgba(255, 255, 255, 0.05);
//     --badge-glass-fg: #dbeafe;        /* blue-100 (Subtle tint) */
//     --badge-glass-border: rgba(255, 255, 255, 0.1);
//     /* The "Inner Glow" trick for dark mode glass */
//     --badge-glass-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1);

//     /* 4. GHOST */
//     --badge-ghost-fg: #71717a;        /* zinc-500 */
//     --badge-ghost-hover-bg: rgba(255, 255, 255, 0.05);
//     --badge-ghost-hover-fg: #d4d4d8;  /* zinc-300 */
//   }
// }

// Also, for shimmering animation for glass varient:
// @utility glass-shimmer {
//   background: linear-gradient(
//     120deg,
//     rgba(255, 255, 255, 0) 30%,
//     rgba(255, 255, 255, 0.1) 50%,
//     rgba(255, 255, 255, 0) 70%
//   );
//   background-size: 200% 100%;
//   animation: shimmer 6s infinite linear;
// }
// */

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center transition-all duration-300",
  {
    variants: {
      variant: {
        // 1. SURFACE (Handled by Compound Variants below)
        surface: "rounded-full border font-medium backdrop-blur-sm",

        // 2. OUTLINE (Referencing Outline Tokens)
        outline: [
          "rounded-md font-mono cursor-default ",
          "bg-[var(--badge-outline-bg)] ",
          "text-[var(--badge-outline-fg)] ",
          "border-[var(--badge-outline-border)] ",
          "shadow-[var(--badge-outline-shadow)]",
        ],

        // 3. GLASS (Referencing Glass Tokens)
        glass: [
          "rounded-full font-medium backdrop-blur-md ",
          "bg-[var(--badge-glass-bg)] ",
          "text-[var(--badge-glass-fg)] ",
          "border-[var(--badge-glass-border)] ",
          "shadow-[var(--badge-glass-shadow)]",
        ],

        // 4. GHOST (Referencing Ghost Tokens)
        ghost: [
          "rounded-md border border-transparent font-sans ",
          "text-[var(--badge-ghost-fg)] ",
          "hover:bg-[var(--badge-ghost-hover-bg)] ",
          "hover:text-[var(--badge-ghost-hover-fg)]",
        ],
      },
      intent: {
        neutral: "",
        success: "",
        accent: "",
        warning: "",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-xs",
      },
    },
    // COMPOUND VARIANTS (For Surface Colors)
    compoundVariants: [
      {
        variant: "surface",
        intent: "neutral",
        className:
          "bg-[var(--badge-surface-neutral-bg)] " +
          "text-[var(--badge-surface-neutral-fg)] " +
          "border-[var(--badge-surface-neutral-border)]",
      },
      {
        variant: "surface",
        intent: "success",
        className:
          "bg-[var(--badge-surface-success-bg)] " +
          "text-[var(--badge-surface-success-fg)] " +
          "border-[var(--badge-surface-success-border)]",
      },
      {
        variant: "surface",
        intent: "warning",
        className:
          "bg-[var(--badge-surface-warning-bg)] " +
          "text-[var(--badge-surface-warning-fg)] " +
          "border-[var(--badge-surface-warning-border)]",
      },
      {
        variant: "surface",
        intent: "accent",
        className:
          "bg-[var(--badge-surface-accent-bg)] " +
          "text-[var(--badge-surface-accent-fg)] " +
          "border-[var(--badge-surface-accent-border)]",
      },
    ],
    defaultVariants: {
      variant: "outline",
      intent: "neutral", // Intent is ignored if variant is not surface, but good to have default
      size: "md",
    },
  },
);

export function Badge({
  children,
  className,
  variant,
  intent,
  size,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      className={cn(badgeVariants({ variant, intent, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
}
