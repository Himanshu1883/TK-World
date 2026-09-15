"use client";

import { Fragment } from "react";
import { ArrowRight, Handshake, Layers, Search, TrendingUp } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Sourcing",
    description: "Access to exclusive off-market opportunities.",
    icon: Search,
  },
  {
    num: "02",
    title: "Analysis",
    description: "In-depth market research by our in-house analysts.",
    icon: TrendingUp,
  },
  {
    num: "03",
    title: "Trading",
    description: "Strategic acquisition and trading expertise.",
    icon: Handshake,
  },
  {
    num: "04",
    title: "Portfolio Management",
    description: "Active management for long-term value.",
    icon: Layers,
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#f5f1e8] py-20 text-[#141414] md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <FadeUp>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#c9b07a] sm:text-[12px]">
                Our Approach
              </p>
            </FadeUp>
            <h2 className="mt-4 font-display text-[clamp(1.7rem,3.1vw,2.65rem)] font-normal leading-tight tracking-[-0.02em] text-[#141414] lg:whitespace-nowrap">
              Discipline. Insight. Execution.
            </h2>
          </div>
          <FadeUp delay={0.1}>
            <p className="max-w-[22rem] text-[13.5px] leading-[1.7] text-[#6b6560] lg:pt-8 lg:text-right">
              We combine deep market knowledge with a global network to identify,
              acquire and manage exceptional assets.
            </p>
          </FadeUp>
        </div>

        <StaggerChildren
          className="grid gap-5 sm:grid-cols-2 lg:flex lg:items-stretch lg:gap-0"
          stagger={0.1}
        >
          {steps.map((step, i) => (
            <Fragment key={step.num}>
              <StaggerItem className="min-w-0 flex-1">
                <article className="flex h-[16.5rem] flex-col items-center justify-center border border-[#c9b07a]/40 px-6 py-7 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="font-display text-[1.65rem] leading-none text-[#c9b07a]">
                      {step.num}
                    </span>
                    <step.icon
                      className="h-10 w-10 shrink-0 text-[#c9b07a]"
                      strokeWidth={1.15}
                    />
                  </div>
                  <h3 className="mt-5 font-display text-[1.4rem] leading-snug text-[#141414]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[13.5rem] text-[13.5px] leading-[1.55] text-[#6b6560]">
                    {step.description}
                  </p>
                </article>
              </StaggerItem>

              {i < steps.length - 1 && (
                <div
                  className="hidden shrink-0 items-center justify-center px-2 lg:flex"
                  aria-hidden
                >
                  <ArrowRight
                    className="h-7 w-7 text-[#c9b07a]"
                    strokeWidth={1.5}
                  />
                </div>
              )}
            </Fragment>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
