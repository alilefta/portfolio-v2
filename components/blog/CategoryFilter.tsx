"use client";

import * as React from "react";
import { Check, PlusCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { ALL_CATEGORIES, getCategoryTitle } from "@/lib/taxonomy";
import { Badge } from "../ui/custom/Badge";

interface CategoryFilterProps {
  currentCategory: string;
  onSelect: (category: string) => void;
  counts: Record<string, number>;
}

export function CategoryFilter({
  currentCategory,
  onSelect,
  counts,
}: CategoryFilterProps) {
  const [open, setOpen] = React.useState(false);

  // Sort categories by count (descending)
  const sortedCategories = React.useMemo(() => {
    return [...ALL_CATEGORIES].sort((a, b) => {
      return (counts[b.slug] || 0) - (counts[a.slug] || 0);
    });
  }, [counts]);

  const isFiltered = currentCategory !== "All";

  return (
    <div className="flex items-center space-x-2">
      {/* 1. "All" Button - Always visible as a base */}
      <Button
        variant={!isFiltered ? "default" : "outline"}
        size="sm"
        className="h-8 rounded-full px-3"
        onClick={() => onSelect("All")}
      >
        All
      </Button>

      {/* 2. Active Filter Display (if any) */}
      {isFiltered && (
        <Button
          variant="secondary"
          size="sm"
          className="h-8 rounded-full border border-blue-200 bg-blue-100 px-3 text-blue-700 hover:bg-blue-200 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
          onClick={() => setOpen(true)}
        >
          {getCategoryTitle(currentCategory)}
          <div
            role="button" // Semantic improvement
            tabIndex={0} // Accessibility
            className="ml-2 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full hover:bg-blue-300/50"
            onClick={(e) => {
              e.stopPropagation(); // <--- THIS STOPS THE BUBBLING
              onSelect("All");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
                onSelect("All");
              }
            }}
          >
            <X className="h-3 w-3" />
          </div>
        </Button>
      )}

      {/* 3. The "More" Popover */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 rounded-full border-dashed"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Filter
            {isFiltered && (
              <>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Badge
                  variant="ghost"
                  className="rounded-sm px-1 font-normal lg:hidden"
                >
                  1
                </Badge>
                <div className="hidden space-x-1 lg:flex">
                  <Badge
                    variant="surface"
                    className="rounded-sm px-1 font-normal"
                  >
                    {counts[currentCategory] || 0} posts
                  </Badge>
                </div>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-60 p-0" align="start">
          <Command>
            <CommandInput placeholder="Search topics..." />
            <CommandList>
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup>
                {sortedCategories.map((category) => {
                  const isSelected = currentCategory === category.slug;
                  return (
                    <CommandItem
                      key={category.slug}
                      onSelect={() => {
                        onSelect(category.slug);
                        setOpen(false);
                      }}
                    >
                      <div
                        className={cn(
                          "border-primary mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible",
                        )}
                      >
                        <Check className={cn("h-4 w-4")} />
                      </div>
                      {category.icon && (
                        <category.icon className="text-muted-foreground mr-2 h-4 w-4" />
                      )}
                      <span>{category.title}</span>
                      <span className="text-muted-foreground ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                        {counts[category.slug] || 0}
                      </span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
              {isFiltered && (
                <>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem
                      onSelect={() => {
                        onSelect("All");
                        setOpen(false);
                      }}
                      className="justify-center text-center"
                    >
                      Clear filters
                    </CommandItem>
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
