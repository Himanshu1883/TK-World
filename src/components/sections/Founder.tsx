"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "@/lib/images";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { FadeUp } from "@/components/ui/Reveal";
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
    reduced ? ["0%", "0%"] : ["-6%", "6%"]
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
      className="relative overflow-hidden bg-[#101013] text-[#f3ece0]"
    >
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[34rem] lg:grid-cols-[1.05fr_0.9fr_0.95fr]">
        <div className="flex flex-col justify-center px-5 py-16 md:px-8 lg:py-24 lg:pl-12 lg:pr-10">
          <FadeUp>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#c9b07a] sm:text-[12px]">
              Our Founder
            </p>
          </FadeUp>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.6rem)] font-normal leading-[1.08] tracking-[-0.02em] text-[#f3ece0]">
            Tariq Khan
          </h2>
          <FadeUp delay={0.08}>
            <p className="mt-3 font-display text-[1.35rem] italic text-[#c9b07a]">
              Founder &amp; Director
            </p>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="mt-7 max-w-[22rem] text-[14px] leading-[1.8] text-white/60">
              With a passion for exceptional assets and a long-term vision, Tariq
              Khan founded TK World to create a global platform for investing in
              real value. His expertise, network and market insight drive the
              group&apos;s success across diverse asset classes.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <MagneticLink
              href="#contact"
              className="mt-9 inline-flex w-fit items-center rounded-sm bg-[#e8d5a8] px-7 py-3 text-[13px] font-medium tracking-wide text-[#1a1610] transition hover:bg-[#f0e2b8]"
            >
              Our Story →
            </MagneticLink>
          </FadeUp>
        </div>

        <div className="flex flex-col justify-center px-5 pb-12 md:px-8 lg:px-6 lg:py-24">
          <FadeUp delay={0.1}>
            <div className="max-w-[22rem]">
              <span
                aria-hidden
                className="block font-display text-6xl leading-none text-[#c9b07a]"
              >
                “
              </span>
              <blockquote className="mt-2 font-display text-[1.65rem] italic leading-[1.35] text-[#f3ece0] md:text-[1.85rem]">
                True wealth is built on assets that stand the test of time.”
              </blockquote>
              <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.28em] text-[#c9b07a]">
                Tariq Khan
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="relative min-h-[24rem] overflow-hidden md:min-h-[28rem] lg:min-h-full">
          <motion.div
            className="absolute inset-0 will-parallax"
            style={{ y: imageY, scale: imageScale }}
          >
            <Image
              src={images.founder.src}
              alt={images.founder.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover object-center grayscale-[0.15] contrast-110 image-grade"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101013] via-[#101013]/20 to-transparent lg:from-[#101013]/70" />
            <div className="film-grain" />
          </motion.div>

          <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 text-right lg:block">
            <p className="select-none text-[10px] font-medium uppercase leading-[2.15] tracking-[0.28em] text-white/80">
              People
              <br />
              Assets
              <br />
              Opportunities
              <br />
              A Brighter
              <br />
              Tomorrow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
