import Image from "next/image";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizes = {
  sm: { width: 260, height: 74, className: "h-10 w-auto" },
  md: { width: 420, height: 120, className: "h-12 w-auto sm:h-14 lg:h-[3.75rem]" },
  lg: { width: 520, height: 149, className: "h-16 w-auto sm:h-[4.5rem]" },
  xl: { width: 900, height: 257, className: "h-24 w-auto sm:h-32 md:h-40" },
};

export function BrandLogo({
  className,
  priority = false,
  size = "md",
}: BrandLogoProps) {
  const s = sizes[size];

  return (
    <Image
      src="/logo-tk.png"
      alt="TK World Investment Group"
      width={s.width}
      height={s.height}
      priority={priority}
      className={cn(s.className, "object-contain object-left", className)}
    />
  );
}
