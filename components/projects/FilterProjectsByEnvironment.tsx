"use client";

import { getEnvironments } from "@/lib/environment-actions";
import { Environment } from "@/lib/types/common";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function FilterProjectsByEnvironments() {
  const [environments, setEnvironments] = useState<Environment[]>([
    {
      id: "all environments",
      title: "All",
    },
  ]);
  const [selectedEnvironment, setSelectedEnvironment] =
    useState<Environment | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getEnvs = useCallback(async () => {
    const envs = await getEnvironments();

    setEnvironments((p) => [...p, ...envs]);
  }, []);

  useEffect(() => {
    const envParam = searchParams.get("environment");
    const initializeEnvironments = async () => {
      await getEnvs();

      if (environments.length > 0) {
        if (envParam) {
          setSelectedEnvironment(
            environments.find((el) => el.title.toLowerCase() === envParam) ??
              environments[0],
          );
        } else {
          setSelectedEnvironment(
            environments.find((el) => el.title.toLowerCase() === "all")!,
          );
        }
      }
    };

    initializeEnvironments();
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
    if (
      selectedEnvironment &&
      selectedEnvironment.title.toLocaleLowerCase() === "all"
    ) {
      router.push(
        pathname +
          "?" +
          createQueryString(
            "environment",
            selectedEnvironment.title.toLocaleLowerCase(),
          ),
      );
    } else if (
      selectedEnvironment &&
      selectedEnvironment.title.toLowerCase() !== "all"
    ) {
      router.push(
        pathname +
          "?" +
          createQueryString(
            "environment",
            selectedEnvironment.title.toLocaleLowerCase(),
          ) +
          "#filters",
      );
    }
    const envParam = searchParams.get("environment");

    const updateSelectedEnv = () => {
      if (envParam) {
        if (environments.length === 0) {
          getEnvs();
        }

        setSelectedEnvironment(
          environments.find(
            (ev) => ev.title.toLowerCase() === envParam.toLowerCase(),
          ) ?? null,
        );
      } else {
        setSelectedEnvironment(
          environments.find((ev) => ev.title.toLowerCase() === "all") ?? null,
        );
      }
    };

    updateSelectedEnv();
  }, [selectedEnvironment]);

  return (
    <div className="col-span-12 flex items-center md:col-span-6 lg:col-span-4">
      <div className="flex items-center">
        <div className="flex flex-wrap gap-2">
          {environments &&
            environments.map((env) => (
              <button
                key={env.id}
                onClick={() => {
                  setSelectedEnvironment(env);
                }}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                  selectedEnvironment &&
                  selectedEnvironment.title.toLowerCase() ===
                    env.title.toLowerCase()
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                }`}
              >
                {env.title}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
