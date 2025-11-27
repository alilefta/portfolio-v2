/** Defines the structure for a technology or tool in the Tech Stack Matrix. */
export interface TechStackItem {
  name: string;
  context: string; // Describes HOW the technology is used, not the proficiency level.
}

/** Defines the structure for an abstract skill item in the Skills Matrix. */
export interface SkillItem {
  name: string;
  description: string; // Elaborates on the skill or the method used.
}
