import Image from "next/image";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizes = {
  sm: { width: 140, height: 40, className: "h-8 w-auto sm:h-9" },
  md: { width: 180, height: 52, className: "h-10 w-auto sm:h-11" },
  lg: { width: 260, height: 74, className: "h-14 w-auto sm:h-16" },
  xl: { width: 420, height: 120, className: "h-20 w-auto sm:h-24 md:h-28" },
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
      className={cn(
        s.className,
        "object-contain object-left",
        className
      )}
    />
  );
}
