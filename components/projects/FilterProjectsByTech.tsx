"use client";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  EnvironmentsFilter,
  TechnologiesFilter,
  technologiesFilter,
} from "@/lib/db/environments_tech/schema";
import { useRouter } from "next/navigation";

export function FilterProjectsByTech({
  currentEnvironment,
  currentTechnology,
}: {
  currentEnvironment: EnvironmentsFilter;
  currentTechnology: TechnologiesFilter;
}) {
  const technologies = technologiesFilter;

  const router = useRouter();

  return (
    <div className="col-span-12 flex items-center justify-stretch md:col-span-6 lg:col-span-4">
      <div className="flex flex-1 items-center gap-2">
        <Filter className="h-4 w-4 text-zinc-400" />
        <Select
          defaultValue={"All Technologies"}
          value={
            currentTechnology[0].toUpperCase() + currentTechnology.slice(1)
          }
          onValueChange={(value) =>
            router.push(
              `/projects?environment=${currentEnvironment}&technology=${value}`,
            )
          }
        >
          <SelectTrigger title="filter technologies" className="w-full">
            <SelectValue
              placeholder={"All Technologies"}
              className="capitalize"
            >
              {currentTechnology[0].toUpperCase() + currentTechnology.slice(1)}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {technologies.map((tech) => (
              <SelectItem key={tech} value={tech} className="capitalize">
                {tech.toString()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
