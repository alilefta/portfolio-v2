// =================================================================
// TECH STACK MATRIX DATA
// (The "Specification Matrix")
// =================================================================

import { TechStackItem } from "../types/common";

// Languages & Core
export const coreDevelopment: TechStackItem[] = [
  { name: "TypeScript", context: "Type-safe, modern web applications" },
  {
    name: "JavaScript / Node",
    context: "Backend services & utility scripting",
  },
  {
    name: "C# / .NET / WPF",
    context: "Enterprise Desktop Applications",
  },
  { name: "Python", context: "AI Integrations, ML, and automation scripts" },
  { name: "Java / JavaFX", context: "Cross-platform desktop tool development" },
  { name: "SQL", context: "Advanced querying and stored procedures" },
  { name: "Shell", context: "Environment setup and command-line automation" },
];

// Frameworks & Libraries
export const frameworksAndLibraries: TechStackItem[] = [
  { name: "Next.js", context: "Full-stack development (SSR, API Routes)" },
  {
    name: "React / Redux",
    context: "Component-driven design and state management",
  },
  { name: "Express.js / Node", context: "Microservices and REST API backends" },
  { name: "Prisma / Drizzle", context: "Type-safe ORMs for schema migration" },
  {
    name: "Tailwind CSS",
    context: "Utility-first styling and responsive design",
  },
  { name: "REST APIs", context: "Designing and consuming external services" },
  { name: "Tkinter / Flask", context: "Rapid prototyping for desktop/web" },
];

// Tools & Platforms (For CI/CD, Design, and Data Storage)
export const toolsAndPlatforms: TechStackItem[] = [
  {
    name: "Git & GitHub",
    context: "Source control, collaboration, and PR flow",
  },
  {
    name: "Vercel / Netlify",
    context: "Serverless deployment and edge functions",
  },
  {
    name: "Figma",
    context: "Prototyping, mockups, and design system creation",
  },
  {
    name: "PostgreSQL / Mongo",
    context: "Relational and NoSQL database management",
  },
  { name: "Docker", context: "Containerization for consistent environments" },
  { name: "Postman", context: "API testing and endpoint documentation" },
];
