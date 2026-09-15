import Image from "next/image";
import { cn } from "@/lib/cn";
import { site } from "@/lib/content";

// Intrinsic size of public/logo-tk.png (transparent, trimmed)
const LOGO_W = 832;
const LOGO_H = 196;

const sizes = {
  sm: "h-8 w-auto",
  md: "h-9 w-auto sm:h-10 lg:h-11",
  lg: "h-14 w-auto sm:h-16 lg:h-20",
} as const;

export function BrandWordmark({
  size = "md",
  className,
  priority = false,
}: {
  size?: keyof typeof sizes;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-tk.png"
      alt={site.name}
      width={LOGO_W}
      height={LOGO_H}
      priority={priority}
      className={cn(sizes[size], "object-contain", className)}
    />
  );
}
