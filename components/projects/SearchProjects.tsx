"use client";

import { Search } from "lucide-react";

export default function ProjectsSearch() {
  return (
    <div className="col-span-12 lg:col-span-4">
      <div className="relative">
        <Search className="absolute top-3 left-3 h-4 w-4 text-zinc-400" />
        <input
          type="text"
          placeholder="Search projects..."
          //   value={""}
          //   onChange={(e) => {
          //     // setSearchQuery(e.target.value);
          //   }}
          className="w-full rounded-lg border border-zinc-200 bg-white py-2.5 pr-4 pl-10 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-zinc-700"
        />
      </div>
    </div>
  );
}
