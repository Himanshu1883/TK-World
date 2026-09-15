"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "@/lib/images";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { FadeUp, MaskReveal } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/hooks/useMedia";

export function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["-8%", "8%"]
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [1, 1] : [1.08, 1]
  );

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="band-invert relative overflow-hidden py-24 md:py-0"
    >
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[100svh] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-8 md:px-8 lg:px-12 lg:py-28">
          <FadeUp>
            <p className="eyebrow">Our Founder</p>
          </FadeUp>
          <MaskReveal className="mt-4">
            <h2 className="font-display text-section text-foreground">
              Tariq Khan
            </h2>
          </MaskReveal>
          <FadeUp delay={0.1}>
            <p className="mt-2 text-[14px] tracking-[0.12em] text-muted">
              Founder & Director
            </p>
            <div className="gold-rule mt-6" />
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted">
              Guided by a conviction that true wealth is measured in assets that
              endure, Tariq Khan founded TK World to bring private investors a
              curated pathway into luxury markets—anchored in Dubai, oriented
              globally, and executed with discretion.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <MagneticLink
              href="#contact"
              className="mt-9 inline-flex w-fit items-center rounded-full bg-gold px-7 py-3.5 text-[13px] font-medium text-[#0a0a0b] transition hover:bg-gold-soft"
            >
              Our Story →
            </MagneticLink>
          </FadeUp>

          <FadeUp delay={0.28} className="mt-16 max-w-lg">
            <div className="relative pl-2">
              <span
                aria-hidden
                className="font-display absolute -left-1 -top-8 text-7xl leading-none text-gold/25"
              >
                “
              </span>
              <MaskReveal>
                <blockquote className="font-display text-2xl italic leading-snug text-foreground md:text-3xl">
                  True wealth is built on assets that stand the test of time.
                </blockquote>
              </MaskReveal>
              <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-gold">
                — Tariq Khan
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="relative mt-10 min-h-[28rem] overflow-hidden lg:mt-0 lg:min-h-full">
          <motion.div
            className="absolute inset-0 will-parallax"
            style={{ y: imageY, scale: imageScale }}
          >
            <Image
              src={images.founder.src}
              alt={images.founder.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover image-grade grayscale-[0.35] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 dark:from-black/60" />
            <div className="film-grain" />
          </motion.div>

          <p
            className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 select-none text-[11px] uppercase tracking-[0.35em] text-white/70 lg:block"
            style={{ writingMode: "vertical-rl" }}
          >
            People · Assets · Opportunities · A Brighter Tomorrow
          </p>
        </div>
      </div>
    </section>
  );
}
