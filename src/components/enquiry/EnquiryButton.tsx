"use client";

import { type ReactNode } from "react";
import { useEnquiry } from "@/components/enquiry/EnquiryProvider";
import { cn } from "@/lib/cn";

export function EnquiryButton({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { openEnquiry } = useEnquiry();

  return (
    <button
      type="button"
      className={cn(className)}
      onClick={() => {
        onClick?.();
        openEnquiry();
      }}
    >
      {children}
    </button>
  );
}
