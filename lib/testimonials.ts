// lib/testimonials.ts
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string; // URL to image
  relationship: "Client" | "CTO" | "Peer" | "Manager";
  project?: string; // Optional: context of work
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Director of Operations",
    company: "Apex Dental Labs",
    relationship: "Client",
    project: "Oscar Lab System",
    quote:
      "Ali transformed our manual workflow into a seamless digital engine. The precision in his architecture saved us roughly 20 hours a week in administrative overhead. He doesn't just code; he solves business problems.",
  },
  {
    id: "2",
    name: "David Chen",
    role: "Senior Backend Engineer",
    company: "FinTech Corp",
    relationship: "Peer",
    project: "Labora SaaS",
    quote:
      "I've reviewed a lot of code, and Ali's PRs are a masterclass in clean architecture. He builds systems that are boring in the best way possible—predictable, scalable, and impossible to break.",
  },
  {
    id: "3",
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "StartUp Inc",
    relationship: "Client",
    quote:
      "We needed an MVP in 3 months. Ali delivered a production-ready system in 2. His ability to navigate between frontend polish and database optimization is rare.",
  },
];
