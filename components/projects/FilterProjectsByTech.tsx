"use client";

import { getAllTechstack } from "@/lib/techstack-actions";
import { TechStackItem } from "@/lib/types/common";
import { Filter } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function FilterProjectsByTech() {
  const [techStack, setTechStack] = useState<TechStackItem[]>([
    {
      name: "All",
      context: "Show All Technologies",
    },
  ]);
  const [selectedTech, setSelectedTech] = useState<TechStackItem | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const techParam = searchParams.get("technology");

    const getEnvs = async () => {
      const techStack: TechStackItem[] = await getAllTechstack();

      setTechStack((s) => [...s, ...techStack]);
      // console.log(techStack);

      if (techParam) {
        setSelectedTech(
          techStack.find((el) => el.name.toLowerCase() === techParam) ?? {
            name: "All",
            context: "Show All Technologies",
          },
        );
      } else {
        setSelectedTech(
          techStack.find((el) => el.name.toLowerCase() === "all") ?? {
            name: "All",
            context: "Show All Technologies",
          },
        );
      }
    };

    getEnvs();
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    if (selectedTech) {
      router.push(
        pathname +
          "?" +
          createQueryString(
            "technology",
            selectedTech.name.toLocaleLowerCase(),
          ),
      );
    }
  }, [selectedTech]);

  return (
    <div className="col-span-12 flex items-center justify-stretch md:col-span-6 lg:col-span-4">
      <div className="flex flex-1 items-center gap-2">
        <Filter className="h-4 w-4 text-zinc-400" />
        <Select
          defaultValue={
            techStack.find((t) => t.name === "All")?.name ?? undefined
          }
          onValueChange={(val) =>
            setSelectedTech(techStack.find((t) => t.name === val) ?? null)
          }
          value={selectedTech?.name ?? ""}
        >
          <SelectTrigger title="filter technologies" className="w-full">
            <SelectValue placeholder={"All Technologies"}></SelectValue>
          </SelectTrigger>
          <SelectContent>
            {techStack.map((tech) => (
              <SelectItem key={tech.name} value={tech.name}>
                {tech.name === "All" ? "All Technologies" : tech.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
