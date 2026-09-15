"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { usePrefersReducedMotion } from "@/hooks/useMedia";

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const reduced = usePrefersReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduced) {
      setShow(false);
      onComplete();
      return;
    }

    const t = window.setTimeout(() => {
      setShow(false);
      onComplete();
    }, 1200);

    return () => window.clearTimeout(t);
  }, [onComplete, reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-[#0a0a0b]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="px-6"
          >
            <BrandLogo size="xl" priority />
            <motion.div
              className="mx-auto mt-8 h-px w-20 origin-center bg-gradient-to-r from-transparent via-[#c9a24b] to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
