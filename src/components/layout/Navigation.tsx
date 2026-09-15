"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { navLinks, site } from "@/lib/content";
import { EnquiryButton } from "@/components/enquiry/EnquiryButton";
import { cn } from "@/lib/cn";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-ink/95 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="shell flex h-[72px] items-center justify-between lg:h-20">
        <Link href="/" aria-label={`${site.name} — Home`} className="shrink-0">
          <BrandWordmark size="md" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-[13px] font-medium tracking-wide transition-colors",
                  active
                    ? "text-foreground"
                    : "text-foreground/65 hover:text-foreground"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-red transition-transform duration-300 ease-expo",
                    active ? "scale-x-100" : "scale-x-0"
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <EnquiryButton
            className="hidden rounded-sm border border-gold px-5 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-ink md:inline-flex"
          >
            Contact Us
          </EnquiryButton>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 text-foreground transition-colors hover:border-gold hover:text-gold lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink lg:hidden"
          >
            <nav className="shell flex flex-col py-4" aria-label="Mobile">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "border-b border-white/5 py-4 text-[15px] font-medium transition-colors last:border-b-0",
                      active ? "text-gold" : "text-foreground/80"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <EnquiryButton
                onClick={() => setOpen(false)}
                className="btn-gold mt-5 w-full"
              >
                Contact Us
              </EnquiryButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
