import { ProjectSummary } from "../types/common";
import { v4 as uuidv4 } from "uuid";

export const projects: ProjectSummary[] = [
  {
    id: uuidv4(),
    title: "Oscar Lab Management",
    slug: "oscar_lab_system",
    status: {
      type: "deployed",
      deployement_year: "2024",
    },
    description:
      "An enterprise desktop application managing case workflows, staff compensation, and client relationships for Dental Laboratories.",
    environment: "desktop",
    tech_stack: [".NET & WPF", "csharp", "eFCore", "sqlite"],
    github_url: "https://github.com/alilefta/OscarLab-Distro",
    privacy: "close_source",
    additional_info: {
      business_impact: "Streamlined operations for active dental lab",
    },
    screenshots: {
      dark_screenshot_url: "oscar_lab_system_dark.png",
      theme: "dark",
      ext: "png",
    },
    badge_tag_1: "Deployed and Sold",
    badge_tag_2: "Desktop App",
  },
  {
    id: uuidv4(),
    title: "Labora SaaS Platform",
    slug: "labora_saas_platform",
    status: {
      type: "undeployed",
      expected_deployment: "2026 Q1",
    },
    description:
      "Next-generation cloud-based lab management with real-time collaboration, scheduling, and integrated mini-services marketplace.",
    environment: "cloud",
    tech_stack: ["nextjs", "typescript", "react", "postgreSQL"],
    github_url: "https://github.com/alilefta/labora",
    privacy: "close_source",
    screenshots: {
      theme: "light",
      light_screenshot_url: "labora_light.png",
      ext: "webp",
    },
    badge_tag_1: "Deployed",
  },
  {
    id: uuidv4(),
    title: "Image Cryptography System",
    slug: "image_cryptography_system",
    status: {
      type: "deployed",
      deployement_year: "2024",
    },
    description:
      "Advanced encryption algorithm using 5D chaotic system for secure image transmission and storage.",
    environment: "desktop",
    tech_stack: [
      "chaos theory",
      "mathematics",
      "python",
      "custom-tkinter-UI",
      "numPy",
    ],
    github_url: "https://github.com/alilefta/chaotic_5D_novel_crypto",
    privacy: "close_source",
    screenshots: {
      theme: "dark",
      dark_screenshot_url: "image_cryptography_system_dark.png",
      ext: "png",
    },
    badge_tag_1: "Reasearch App",
  },

  {
    id: uuidv4(),
    title: "Freelancer Command Center",
    slug: "freelancer_command_center",
    status: {
      type: "undeployed",
      expected_deployment: "2026 Q2",
    },
    description:
      "All-in-one dashboard for freelancers to manage projects, track time, invoice clients, and monitor finances. Built for solo developers who need simple, powerful tools.",
    environment: "cloud",
    tech_stack: ["nextjs", "typescript", "postgreSQL", "stripe"],

    github_url: "https://github.com/alilefta/Freelancer-Command-Center",
    privacy: "close_source",
    screenshots: {
      theme: "light",
      light_screenshot_url: "freelancer_command_center_light.png",
      ext: "png",
    },
    badge_tag_1: "In Dev",
    badge_tag_2: "2026",
  },
];
