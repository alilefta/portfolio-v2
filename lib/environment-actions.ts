"use server";

import { environments } from "./db/environments";

export async function getEnvironments() {
  return environments;
}
