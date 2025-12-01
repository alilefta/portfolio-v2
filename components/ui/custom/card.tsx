"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Note: If orientation is horizontal, put CardHeader, CardContent and CardFooter inside a div of block type
// 1. THE PHYSICS ENGINE
const cardVariants = cva(
  // Removed 'flex-col' from base, moved to orientation variant
  "relative flex overflow-hidden transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        glass: [
          // LIGHT MODE: Ceramic
          "bg-white border border-zinc-200 shadow-sm",
          // DARK MODE: Deep Glass
          "dark:bg-zinc-900/40 dark:border-white/10 dark:backdrop-blur-md dark:shadow-none",
        ],
        ghost: "bg-transparent border-none shadow-none",
        outline: "bg-transparent border border-zinc-200 dark:border-white/10",
      },
      interactive: {
        true: [
          "cursor-pointer",
          // LIGHT MODE HOVER: Lift & Deepen Shadow
          "hover:-translate-y-1 hover:shadow-xl hover:border-zinc-300",
          // DARK MODE HOVER: Glow & Color
          "dark:hover:border-blue-500/30 dark:hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]",
        ],
        false: "",
      },
      // NEW: Orientation Logic
      orientation: {
        vertical: "flex-col",
        horizontal: "flex-col md:flex-row", // Stack on mobile, row on desktop
        horizontalReverse: "flex-col md:flex-row-reverse", // Image on right
      },
    },
    defaultVariants: {
      variant: "glass",
      interactive: false,
      orientation: "vertical",
    },
  },
);

// 2. THE ROOT COMPONENT
interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, interactive, orientation, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant, interactive, orientation }),
        "rounded-4xl", // Updated to your preferred large radius
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

// 3. SUB-COMPONENTS
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 md:p-8", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl leading-none font-bold tracking-tight text-zinc-900 dark:text-white",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm leading-relaxed text-zinc-500 dark:text-zinc-400",
      className,
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0 md:p-8", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mt-auto flex items-center border-t border-zinc-100 p-6 pt-0 md:p-8 dark:border-white/5",
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// 4. IMAGE WRAPPER
// Updated to handle both vertical (aspect-video) and horizontal (h-full) scenarios
const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden bg-zinc-100 dark:bg-black/20",
      // Default borders assuming vertical layout (can be overridden)
      "border-b border-zinc-100 dark:border-white/5",
      className,
    )}
    {...props}
  />
));
CardImage.displayName = "CardImage";

// 5. FLOATING BAR
interface CardFloatingBarProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "top" | "bottom";
}

const CardFloatingBar = React.forwardRef<HTMLDivElement, CardFloatingBarProps>(
  ({ className, position = "top", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 z-20 flex w-full items-center justify-between p-4 md:p-6",
        position === "top" ? "top-0" : "bottom-0",
        className,
      )}
      {...props}
    />
  ),
);
CardFloatingBar.displayName = "CardFloatingBar";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardImage,
  CardFloatingBar,
};
