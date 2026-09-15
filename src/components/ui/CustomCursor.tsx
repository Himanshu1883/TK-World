"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIsDesktop } from "@/hooks/useMedia";

type CursorLabel = "View" | "Play" | "Read" | null;

export function CustomCursor() {
  const isDesktop = useIsDesktop();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState<CursorLabel>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isDesktop) return;

    document.documentElement.classList.add("cursor-custom");

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor]"
      ) as HTMLElement | null;
      const value = target?.dataset.cursor as CursorLabel | undefined;
      setLabel(value ?? null);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("cursor-custom");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  const expanded = Boolean(label);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: pos.x, y: pos.y }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: expanded ? 1 : 0.35,
      }}
      transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.4 }}
    >
      <div
        className="relative flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/10 backdrop-blur-sm"
        style={{
          width: expanded ? 72 : 14,
          height: expanded ? 72 : 14,
          transition: "width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className="text-[10px] font-medium uppercase tracking-[0.18em] text-white"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
