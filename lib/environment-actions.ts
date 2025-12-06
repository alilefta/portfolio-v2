"use server";

import { environments } from "./db/environments_tech/schema";

export async function getEnvironments() {
  return environments;
}
