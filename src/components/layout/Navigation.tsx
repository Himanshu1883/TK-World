"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { navLinks } from "@/lib/images";
import { cn } from "@/lib/cn";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-theme",
        scrolled
          ? "border-b border-gold/10 bg-[var(--nav-solid)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
        <a href="#top" className="group relative shrink-0" aria-label="TK World Investment Group — Home">
          <BrandLogo size="md" priority className="transition duration-theme group-hover:opacity-90" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-foreground/80 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MagneticLink
            href="#contact"
            className="hidden items-center rounded-full border border-gold px-5 py-2.5 text-[12px] font-medium tracking-wide text-gold transition hover:bg-gold hover:text-[#0a0a0b] md:inline-flex"
          >
            Discuss an Opportunity →
          </MagneticLink>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-gold/10 bg-[var(--background)] px-5 py-8 lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit items-center rounded-full border border-gold px-5 py-2.5 text-[12px] text-gold"
              >
                Discuss an Opportunity →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
