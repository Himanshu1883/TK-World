"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart3, Briefcase, Search, Shuffle } from "lucide-react";
import { FadeUp, MaskReveal, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/hooks/useMedia";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Sourcing",
    description:
      "Discreet access to off-market assets through a trusted network across Dubai and global hubs.",
    icon: Search,
  },
  {
    num: "02",
    title: "Analysis",
    description:
      "Rigorous diligence—valuation, provenance, liquidity, and long-term durability under stress.",
    icon: BarChart3,
  },
  {
    num: "03",
    title: "Trading",
    description:
      "Precise execution with timing, structure, and counterparty quality at the centre of every decision.",
    icon: Shuffle,
  },
  {
    num: "04",
    title: "Portfolio Management",
    description:
      "Ongoing stewardship so each holding continues to serve the broader wealth narrative.",
    icon: Briefcase,
  },
];

export function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !lineRef.current || !sectionRef.current) return;

    const path = lineRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="band-base relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <FadeUp>
            <p className="eyebrow">Our Approach</p>
          </FadeUp>
          <MaskReveal className="mt-4">
            <h2 className="font-display text-section text-foreground">
              Discipline. Insight.{" "}
              <span className="italic text-gold">Execution.</span>
            </h2>
          </MaskReveal>
          <FadeUp delay={0.15}>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
              A measured process designed for private investors who value clarity
              as much as opportunity.
            </p>
          </FadeUp>
        </div>

        <div className="relative">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-10 hidden h-8 w-full lg:block"
            viewBox="0 0 1200 32"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              ref={lineRef}
              d="M40 16 H1160"
              stroke="var(--gold)"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>

          <StaggerChildren className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8" stagger={0.12}>
            {steps.map((step) => (
              <StaggerItem key={step.num}>
                <article className="relative pt-2">
                  <span className="font-display text-5xl text-transparent [-webkit-text-stroke:1px_var(--gold)] opacity-40">
                    {step.num}
                  </span>
                  <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <step.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
