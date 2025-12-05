"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/custom/Button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavButtonProps {
  icon?: LucideIcon;
  label: string;
  href?: string;
  className?: string;
}
export function NavButton({
  icon: Icon,
  label,
  href,
  className,
}: NavButtonProps) {
  const pathname = usePathname();

  return (
    <Button
      variant={"ghost"}
      aria-label={label}
      title={label}
      className={`rounded-md ${Icon ? "" : "text-base"} text-sm tracking-tight`}
      asChild
    >
      {href ? (
        <Link
          href={href}
          className={cn(
            `${pathname === href ? "text-foreground" : "text-foreground/70"}`,
            className,
          )}
        >
          {Icon ? <Icon className="size-5" /> : label}
        </Link>
      ) : Icon ? (
        <Icon />
      ) : (
        label
      )}
    </Button>
  );
}
