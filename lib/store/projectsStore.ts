import { create } from "zustand";

interface ProjectsStoreState {
  count: number;
  updateFilteredProjectsCount: (count: number) => void;
}

export const useProject = create<ProjectsStoreState>((set) => ({
  count: 0,
  updateFilteredProjectsCount: (count: number) => set({ count }),
}));
