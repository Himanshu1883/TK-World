"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  ChartColumn,
  Globe,
  Handshake,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { hero, ourBusiness, type BusinessIcon } from "@/lib/content";
import { usePrefersReducedMotion } from "@/hooks/useMedia";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

const iconMap: Record<BusinessIcon, LucideIcon> = {
  ChartColumn,
  Globe,
  Box,
  Users,
  Handshake,
  Settings,
};

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % hero.slides.length),
      3000
    );
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section className="relative isolate h-[100svh] max-h-[100svh] overflow-hidden bg-[#080b12]">
      {/* Right-side cinematic panel */}
      <div className="absolute inset-0 lg:left-[38%] xl:left-[40%]">
        {hero.slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 62vw"
            className={cn(
              "object-cover object-[62%_center] image-grade transition-opacity duration-[1400ms] ease-expo",
              i === active ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#080b12] via-[#080b12]/80 to-transparent lg:via-[#080b12]/35 lg:to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080b12] via-[#080b12]/70 to-transparent lg:h-48"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080b12]/50 to-transparent lg:from-transparent"
          aria-hidden
        />

        <p className="absolute right-6 top-24 hidden text-right text-[10px] font-medium uppercase leading-[1.85] tracking-[0.34em] text-white/70 min-[900px]:top-28 lg:right-10 lg:block xl:right-14">
          {hero.aside.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <div className="absolute bottom-28 right-5 z-10 hidden items-center gap-2 lg:flex xl:right-10">
          {hero.slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "h-[3px] rounded-full transition-all duration-500 ease-expo",
                i === active ? "w-8 bg-gold" : "w-4 bg-white/35 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>

      <div className="shell relative flex h-full min-h-0 flex-col justify-between pb-4 pt-[4.75rem] sm:pb-5 lg:pb-5 lg:pt-[5.25rem]">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="flex min-h-0 max-w-[36.5rem] flex-1 flex-col justify-center py-3 xl:max-w-[39rem]"
        >
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="mt-3 font-display text-hero font-medium lg:mt-4">
            <span className="block text-white">{hero.title[0]}</span>
            <span className="block text-gold">{hero.title[1]}</span>
          </h1>

          <p className="mt-4 max-w-[34rem] text-[13.5px] font-medium leading-relaxed text-white/90 sm:text-[14.5px] xl:mt-5 xl:text-[15.5px]">
            {hero.intro}
          </p>

          <div className="mt-3 max-w-[34rem] space-y-2.5 text-[12.5px] leading-[1.65] text-white/60 sm:text-[13px] xl:mt-4 xl:space-y-3.5 xl:text-[13.5px]">
            {hero.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 xl:mt-7">
            <Link
              href="/what-we-do"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-2.5 text-[13px] font-medium text-ink transition-colors duration-300 hover:bg-gold-soft xl:px-7 xl:py-3.5 xl:text-[13.5px]"
            >
              Explore Our Business
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 self-start text-left text-white/90 transition-colors hover:text-white"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/35 xl:h-12 xl:w-12">
                <ArrowRight className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
              </span>
              <span>
                <span className="block text-[13px] font-medium leading-none xl:text-[13.5px]">
                  About Us
                </span>
                <span className="mt-1.5 block text-[11.5px] text-white/50">
                  Our Story
                </span>
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reduced ? 0 : 0.18, ease }}
          className="shrink-0"
        >
          <div className="flex items-start gap-5 border-t border-white/10 pt-3.5 lg:gap-6 lg:pt-4">
            <p className="hidden w-[4.6rem] shrink-0 pt-0.5 text-[10px] font-semibold uppercase leading-tight tracking-[0.18em] text-gold sm:block">
              {ourBusiness.eyebrow}
            </p>

            <ul className="grid min-w-0 flex-1 grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
              {ourBusiness.items.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <li key={item.title} className="flex min-w-0 items-start gap-2">
                    <Icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      strokeWidth={1.5}
                    />
                    <span className="min-w-0 text-[11px] font-medium leading-[1.3] text-white/85 xl:text-[12px]">
                      {item.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3 text-[9.5px] font-medium uppercase tracking-[0.2em] text-white/45 sm:flex-row sm:items-center sm:justify-between lg:mt-3.5 lg:pt-3.5">
            <p className="flex items-center gap-3">
              {hero.footerLeft}
              <span className="hidden h-px w-8 bg-red/70 sm:block" aria-hidden />
            </p>
            <p className="flex items-center gap-3 sm:flex-row-reverse">
              {hero.footerRight}
              <span className="hidden h-px w-8 bg-red/70 sm:block" aria-hidden />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
