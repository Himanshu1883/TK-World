"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { images } from "@/lib/images";
import { MagneticButton, MagneticLink } from "@/components/ui/MagneticButton";
import { VideoModal } from "@/components/ui/VideoModal";
import { usePrefersReducedMotion } from "@/hooks/useMedia";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  "5+ Asset Classes",
  "Global Market Access",
  "Trusted By Private Investors",
  "UAE Based in Dubai",
];

export function Hero({ introDone }: { introDone: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "18%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "8%"]);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % images.heroSlides.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  const show = introDone || reduced;

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden"
    >
      <motion.div
        ref={bgRef}
        className="absolute inset-0 scale-110 will-parallax"
        style={{ y: bgY }}
      >
        <div className="relative h-full w-full">
          {images.heroSlides.map((item, i) => (
            <motion.div
              key={item.src}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: slide === i ? 1 : 0 }}
              transition={{ duration: reduced ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={`relative h-full w-full ${
                  reduced || slide !== i ? "" : "ken-burns"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover image-grade"
                />
              </div>
            </motion.div>
          ))}
          <div className="image-vignette" />
          <div className="film-grain" />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/75 dark:from-black/40 dark:via-black/45 dark:to-black/85" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pb-36 pt-32 md:px-8 lg:justify-center lg:px-12 lg:pb-40 lg:pt-28"
      >
        <div className="max-w-3xl">
          <motion.p
            className="eyebrow text-gold-soft"
            initial={{ opacity: 0, y: 16 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            Global Perspective. Tangible Value.
          </motion.p>

          <h1 className="mt-5 font-display text-hero text-white">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={show ? { y: "0%" } : {}}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                Investing in Assets
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block italic text-gold-soft"
                initial={{ y: "110%" }}
                animate={show ? { y: "0%" } : {}}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                That Endure.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-6 max-w-[540px] text-[15px] leading-relaxed text-white/75 md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            TK World Investment Group curates luxury assets—real estate, watches,
            collector cars, sports & events, and strategic holdings—with the
            discipline of a private family office.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticLink
              href="#portfolio"
              className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-[13px] font-medium tracking-wide text-[#0a0a0b] transition hover:bg-gold-soft"
            >
              Explore Our Portfolio →
            </MagneticLink>
            <MagneticButton
              type="button"
              data-cursor="Play"
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-3 rounded-full border border-white/35 px-6 py-3.5 text-[13px] font-medium tracking-wide text-white transition hover:border-gold hover:text-gold"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Watch Our Story — 2 min
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="absolute right-5 top-28 hidden max-w-[9rem] text-right lg:right-12 lg:top-36 lg:block"
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.85 }}
        >
          <p className="text-[10px] uppercase leading-relaxed tracking-[0.22em] text-white/70">
            More Than Investments
            <br />
            A Richer Tomorrow
          </p>
        </motion.div>

        <motion.div
          ref={cardRef}
          style={{ y: cardY }}
          className="absolute bottom-40 right-5 hidden w-48 overflow-hidden rounded-2xl shadow-lift md:bottom-44 lg:right-12 lg:block lg:w-56"
          initial={{ opacity: 0, y: 24 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-panel relative aspect-[4/5]">
            <Image
              src={images.terrace.src}
              alt={images.terrace.alt}
              fill
              sizes="224px"
              className="object-cover image-grade opacity-90"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[var(--stats-bg)] backdrop-blur-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat}
              className={`flex items-center px-5 py-5 md:px-8 lg:px-10 ${
                i % 2 === 1 ? "border-l border-gold/20" : ""
              } ${i >= 2 ? "border-t border-gold/15 md:border-t-0" : ""} ${
                i > 0 ? "md:border-l md:border-gold/25" : ""
              }`}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-foreground/85 md:text-[13px]">
                {stat}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#portfolio"
        aria-label="Scroll to portfolio"
        className="absolute bottom-[7.5rem] left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : {}}
        transition={{ delay: 1.1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/55">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-white/25">
          <span
            className="absolute inset-x-0 top-0 h-full origin-top bg-gold"
            style={{ animation: reduced ? "none" : "scrollPulse 1.8s ease-in-out infinite" }}
          />
        </span>
      </motion.a>

      <div className="absolute bottom-[7.75rem] right-5 z-30 flex gap-2 md:right-8 lg:right-12">
        {images.heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              slide === i ? "w-8 bg-gold" : "w-1.5 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
