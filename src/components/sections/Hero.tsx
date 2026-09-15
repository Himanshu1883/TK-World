"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { heroStats, images } from "@/lib/images";
import { MagneticButton, MagneticLink } from "@/components/ui/MagneticButton";
import { VideoModal } from "@/components/ui/VideoModal";
import { usePrefersReducedMotion } from "@/hooks/useMedia";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero({ introDone }: { introDone: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "5%"]);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % images.heroSlides.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, [reduced]);

  const show = introDone || reduced;

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#0b0b0d]"
    >
      <motion.div className="absolute inset-0 will-parallax" style={{ y: bgY }}>
        {images.heroSlides.map((item, i) => (
          <motion.div
            key={item.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: slide === i ? 1 : 0 }}
            transition={{ duration: reduced ? 0 : 1.15, ease }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-[68%_30%] image-grade"
            />
          </motion.div>
        ))}
        <div className="film-grain" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b0b0d] via-[#0b0b0d]/80 to-[#0b0b0d]/15" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/80 via-transparent to-[#0b0b0d]/40" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col px-5 pb-10 pt-28 md:px-8 lg:px-12 lg:pb-14 lg:pt-32"
      >
        <motion.p
          className="absolute right-5 top-28 hidden max-w-[7.5rem] text-right text-[10px] font-medium uppercase leading-[1.85] tracking-[0.22em] text-white/70 md:block lg:right-12 lg:top-32"
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.7, ease }}
        >
          More Than
          <br />
          Investments
          <br />
          A Richer
          <br />
          Tomorrow
        </motion.p>

        <div className="mt-auto max-w-[46rem] pb-8 lg:pb-6">
          <motion.p
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#c9b07a] sm:text-[12px]"
            initial={{ opacity: 0, y: 12 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.05, ease }}
          >
            Global Perspective. Tangible Value.
          </motion.p>

          <h1 className="mt-5 font-display text-hero font-normal text-[#f3ece0]">
            <span className="block sm:whitespace-nowrap">Investing in Assets</span>
            <span className="block text-[#c9b07a]">That Endure.</span>
          </h1>

          <motion.p
            className="mt-6 max-w-[32rem] text-[14px] font-normal leading-[1.75] text-[#f3ece0]/75 md:text-[15px]"
            initial={{ opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            TK World Investment Group acquires, trades and manages high-value
            physical assets across global markets, combining expertise, insight
            and access to exceptional opportunities.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.32, ease }}
          >
            <MagneticLink
              href="#portfolio"
              className="inline-flex items-center rounded-full bg-[#e8d5a8] px-7 py-3.5 text-[13px] font-medium tracking-wide text-[#1a1610] transition hover:bg-[#f0e2b8]"
            >
              Explore Our Portfolio →
            </MagneticLink>
            <MagneticButton
              type="button"
              data-cursor="Play"
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-3 text-[13px] font-medium tracking-wide text-[#f3ece0] transition hover:text-gold"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1610] text-[#f3ece0] shadow-[0_0_0_1px_rgba(243,236,224,0.12)]">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </span>
              <span className="text-left leading-tight">
                Watch Our Story
                <span className="block text-[11px] font-normal text-white/55">
                  2 min
                </span>
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="grid max-w-3xl grid-cols-2 gap-y-8 md:grid-cols-4"
          initial={{ opacity: 0, y: 12 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.48, ease }}
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-[1.85rem] font-normal leading-none text-[#c9b07a] md:text-[2.1rem]">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.08em] text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
