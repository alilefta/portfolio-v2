"use client";

import { Share2 } from "lucide-react";
import { Button } from "./ui/custom/Button";
import { toast } from "sonner";

export function ShareButton({ title }: { title: string }) {
  return (
    <Button
      variant={"ghost"}
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        // Toast logic here if you have it
        // alert("Link copied to clipboard!");
        toast.success("Link copied to clipboard!");
      }}
      className="flex items-center gap-2 text-xs transition-colors hover:text-green-500"
    >
      <Share2 className="h-4 w-4" />
      <span>Share</span>
    </Button>
  );
}
