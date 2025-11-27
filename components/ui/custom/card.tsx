"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// 1. THE PHYSICS ENGINE
const cardVariants = cva(
  "relative flex flex-col overflow-hidden transition-all duration-300 ease-out",
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
    },
    defaultVariants: {
      variant: "glass",
      interactive: false,
    },
  },
);

// 2. THE ROOT COMPONENT
interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant, interactive }),
        "rounded-4xl",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

// 3. SUB-COMPONENTS (Standard Layouts)
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-6 md:p-6 md:pb-2 lg:px-8 lg:py-8 lg:pb-4",
      className,
    )}
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
  <div
    ref={ref}
    className={cn("px-6 py-6 pt-2 md:px-6 md:pt-2 lg:px-8", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mt-auto flex items-center border-t border-zinc-100 p-6 pt-2 md:px-6 md:py-6 dark:border-white/5",
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// 4. IMAGE WRAPPER (For that "Window" look)
const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative aspect-video w-full overflow-hidden border-b border-zinc-100 bg-zinc-100 dark:border-white/5 dark:bg-black/20",
      className,
    )}
    {...props}
  />
));
CardImage.displayName = "CardImage";

interface CardFloatingBarProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "top" | "bottom";
}

const CardFloatingBar = React.forwardRef<HTMLDivElement, CardFloatingBarProps>(
  ({ className, position = "top", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        // Base Layout: Absolute, full width, transparent, flex row
        "absolute left-0 z-20 flex w-full items-center justify-between p-4 md:p-6",
        // Positioning logic
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
