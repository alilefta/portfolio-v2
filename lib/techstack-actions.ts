"use server";

import {
  coreDevelopment,
  frameworksAndLibraries,
  toolsAndPlatforms,
} from "./db/techstack_section";

export async function getAllTechstack() {
  return [...coreDevelopment, ...frameworksAndLibraries, ...toolsAndPlatforms];
}
