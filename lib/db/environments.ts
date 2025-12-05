import { Environment } from "../types/common";
import { v4 as uuidv4 } from "uuid";
export const environments: Environment[] = [
  {
    id: uuidv4(),
    title: "Desktop",
  },
  {
    id: uuidv4(),
    title: "Cloud",
  },
  {
    id: uuidv4(),
    title: "Web",
  },
];
