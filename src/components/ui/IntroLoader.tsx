"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { usePrefersReducedMotion } from "@/hooks/useMedia";

const SEEN_KEY = "tkw-intro-seen";

/**
 * Brief brand overlay on the first homepage view of a session. Skipped for
 * repeat navigations and when reduced motion is requested.
 */
export function IntroLoader() {
  const reduced = usePrefersReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduced || sessionStorage.getItem(SEEN_KEY)) return;

    sessionStorage.setItem(SEEN_KEY, "1");
    setShow(true);

    const t = window.setTimeout(() => setShow(false), 1100);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[110] grid place-items-center bg-ink px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <BrandWordmark size="lg" priority />
            <motion.div
              className="mt-7 h-px w-full origin-left bg-gold-hairline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
