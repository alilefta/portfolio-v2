import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  reading?: boolean;
};

export function Container({
  className,
  reading = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--v3-page-gutter)]",
        reading ? "max-w-[var(--v3-reading-width)]" : "max-w-[96rem]",
        className,
      )}
      {...props}
    />
  );
}
