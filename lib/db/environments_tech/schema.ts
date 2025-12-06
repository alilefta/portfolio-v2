import z from "zod";
import { Environment, Technology } from "./types";

export const environments: Environment[] = ["Cloud", "Desktop", "Web"];
export type EnvironmentsFilter = Environment | "All";
export const environmentsFilter: EnvironmentsFilter[] = [
  "All",
  "Web",
  "Desktop",
  "Cloud",
] as const;

export type TechnologiesFilter = Technology | "All";

export const technologiesFilter: TechnologiesFilter[] = [
  "All",
  "Next.js",
  "React",
  "Node",
  "C#",
  "Python",
  ".NET",
  "WPF",
  "PostgreSQL",
  "SQLite",
] as const;

export const filtersSchema = z.object({
  environment: z.enum(environmentsFilter).default("All"),
  technology: z.enum(technologiesFilter).default("All"),
});
