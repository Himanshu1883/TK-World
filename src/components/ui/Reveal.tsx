"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/useMedia";

const ease = [0.16, 1, 0.3, 1] as const;

export function FadeUp({
  children,
  className,
  delay = 0,
  y = 32,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  /** Use "ul" when the children are list items, so the markup stays valid. */
  as?: "div" | "ul";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduced = usePrefersReducedMotion();

  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: reduced ? 0 : delay,
      },
    },
  };

  const Tag = as === "ul" ? motion.ul : motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  y = 28,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li";
}) {
  const reduced = usePrefersReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.85, ease },
        },
      }}
    >
      {children}
    </Tag>
  );
}

export function MaskReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduced = usePrefersReducedMotion();

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={reduced ? false : { y: "110%" }}
        animate={inView || reduced ? { y: "0%" } : { y: "110%" }}
        transition={{ duration: 1.05, delay, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function cnEase() {
  return ease;
}
