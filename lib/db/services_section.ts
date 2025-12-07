// import {
//   Code,
//   Computer,
//   Cpu,
//   Globe,
//   HeartPlus,
//   IconNode,
//   LucideIcon,
//   SquareStack,
// } from "lucide-react";
import { IconName } from "lucide-react/dynamic";
import { ReactNode } from "react";

export type ServiceItem = {
  title: string;
  description: string;
  offerings: string[];
  price: string;
  cta: string | ReactNode;
  icon: IconName;
  featured?: boolean;
};

export const services: ServiceItem[] = [
  {
    title: "AI Integration & Automation",
    description:
      "Bring AI into your existing products. I can integrate AI APIs or automate repetitive parts of your workflow using practical, affordable solutions.",
    offerings: [
      "Smart search tools",
      "AI-powered chat",
      "Automated dashboards",
    ],
    price: "$1,500 for basic integration",
    cta: "Explore Ideas",
    icon: "cpu",
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Modern web apps that look great and perform well. From prototypes to full-featured platforms, scalable and user-friendly.",
    offerings: ["SaaS platforms", "E-commerce systems", "Business tools"],
    price: "$4,000 for MVP",
    cta: "Contact for details",
    icon: "square-stack",
    featured: true,
  },

  {
    title: "Websites & Landing Pages",
    description:
      "Need a quick site, redesign, or bug fix? I build clean, minimal, and fast websites using Next.js and Tailwind.",
    offerings: ["Portfolio sites", "Product launches", "Business profiles"],
    price: "$800 for landing page",
    cta: "Get a quick estimate",
    icon: "globe",
  },
  {
    title: "Healthcare & Medical Software",
    description:
      "Custom web applications for clinics, labs, and pharmacies. With real experience in the dental field, I understand HIPAA and workflows.",
    offerings: ["Lab management", "Inventory tracking", "Internal tools"],
    price: "Custom Quote",
    cta: "Let's talk about your project",
    icon: "heart-plus",
  },

  {
    title: "Desktop Applications",
    description:
      "Simple, reliable software for Windows environments. Automate tasks or provide specialized features your business needs.",
    offerings: ["Offline tools", "Data entry systems", "Utility reporting"],
    price: "$2,000 for basic tools",
    cta: "Request custom quote",
    icon: "computer",
  },
  {
    title: "Code Review & Collaboration",
    description:
      "Need an extra pair of eyes? I collaborate with developers or small teams to improve structure, performance, and maintainability.",
    offerings: [
      "Refactoring assistance",
      "Debugging sessions",
      "Architecture planning",
    ],
    price: "$40-$60/hour",
    cta: "Let's collaborate",
    icon: "code",
  },
];
