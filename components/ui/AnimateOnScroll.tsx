"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationType = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = "",
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, once]);

  const getInitialStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transitionProperty: "opacity, transform",
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDelay: `${delay}ms`,
    };

    switch (animation) {
      case "fade-up":
        return { ...base, transform: "translateY(30px)" };
      case "fade-in":
        return base;
      case "fade-left":
        return { ...base, transform: "translateX(30px)" };
      case "fade-right":
        return { ...base, transform: "translateX(-30px)" };
      case "scale":
        return { ...base, transform: "scale(0.95)" };
      default:
        return base;
    }
  };

  const getVisibleStyles = (): React.CSSProperties => ({
    opacity: 1,
    transform: "translateY(0) translateX(0) scale(1)",
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
    >
      {children}
    </div>
  );
}

// Staggered container for child animations
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 100,
  className = "",
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <AnimateOnScroll
              key={index}
              animation="fade-up"
              delay={index * staggerDelay}
            >
              {child}
            </AnimateOnScroll>
          ))
        : children}
    </div>
  );
}
