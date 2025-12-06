import {
  EnvironmentsFilter,
  environmentsFilter,
  TechnologiesFilter,
} from "@/lib/db/environments_tech/schema";
import { Button } from "../ui/custom/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function FilterProjectsByEnvironments({
  currentEnvironment,
  currentTechnology,
}: {
  currentEnvironment: EnvironmentsFilter;
  currentTechnology: TechnologiesFilter;
}) {
  const environments = environmentsFilter;

  return (
    <div className="col-span-12 flex items-center md:col-span-6 lg:col-span-4">
      <div className="flex items-center">
        <div className="flex flex-wrap gap-2">
          {environments &&
            environments.map((env) => (
              <Button asChild key={env} variant={"ghost"}>
                <Link
                  href={`/projects?environment=${env}&technology=${currentTechnology}`}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-sm font-medium capitalize transition-all",
                    {
                      "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900":
                        env === currentEnvironment,
                      "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700":
                        env !== currentEnvironment,
                    },
                  )}
                >
                  {env.toString()}
                </Link>
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
}
