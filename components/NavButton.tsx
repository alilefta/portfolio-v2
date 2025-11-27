import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavButtonProps {
  icon?: LucideIcon;
  label: string;
  href?: string;
}
export function NavButton({ icon: Icon, label, href }: NavButtonProps) {
  return (
    <Button
      variant={"ghost"}
      aria-label={label}
      title={label}
      className={`rounded-md ${Icon ? "" : "text-base"} text-foreground/70 text-sm tracking-tight`}
      asChild
    >
      {href ? (
        <Link href={href}>{Icon ? <Icon className="size-5" /> : label}</Link>
      ) : Icon ? (
        <Icon />
      ) : (
        label
      )}
    </Button>
  );
}
