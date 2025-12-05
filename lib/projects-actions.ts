"use server";

import { projects } from "./db/projects";
import { ProjectSummary } from "./types/common";

export async function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function getSelectedProjects() {
  return projects;
}

export async function getAllProjects() {
  return projects;
}

export async function getFilteredProjects(
  environment: string | string[] | undefined,
  technology: string | string[] | undefined,
  searchQuery?: string | string[] | undefined,
) {
  let filteredProjects = projects;

  const allEnv = environment === undefined || environment === "all";
  const allTech = technology === undefined || technology === "all";
  const noSearch = searchQuery === undefined || searchQuery === "";

  const getStrParam = (search: string | string[] | undefined): string => {
    return typeof search === "string"
      ? search.toLowerCase()
      : Array.isArray(search) && search.length > 0
        ? search[0].toLowerCase()
        : "";
  };

  const tech = getStrParam(technology);
  const env = getStrParam(environment);

  const filterByTech = (project: ProjectSummary) =>
    project.tech_stack.some((t) =>
      t.length > tech.length
        ? t.toLowerCase().includes(tech.toLowerCase())
        : tech.toLowerCase().includes(t.toLowerCase()),
    );

  const filterByEnv = (project: ProjectSummary) =>
    project.environment.length > env.length
      ? project.environment.toLowerCase().includes(env.toLowerCase())
      : env.toLowerCase().includes(project.environment.toLowerCase());

  let hasSelectedFilters = false;
  if (!allEnv) {
    hasSelectedFilters = true;
    filteredProjects = filteredProjects.filter(filterByEnv);
  }

  if (!allTech) {
    hasSelectedFilters = true;
    filteredProjects = filteredProjects.filter(filterByTech);
  }

  return {
    projects: filteredProjects,
    filteredCount: filteredProjects.length,
    totalCount: projects.length,
    hasSelectedFilters,
  };
}
