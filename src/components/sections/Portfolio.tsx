"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Car, ChevronLeft, ChevronRight, Home, Hourglass, Ticket, Watch } from "lucide-react";
import { images } from "@/lib/images";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";

const iconMap = {
  Home,
  Watch,
  Car,
  Ticket,
  Hourglass,
};

const focus: Record<string, string> = {
  property: "object-[center_60%]",
  watches: "object-center",
  cars: "object-[center_45%]",
  sports: "object-[center_40%]",
  strategic: "object-[center_40%]",
};

function PortfolioCard({
  item,
  className = "",
}: {
  item: (typeof images.portfolio)[number];
  className?: string;
}) {
  const Icon = iconMap[item.icon];

  return (
    <article
      data-card
      data-cursor="View"
      className={`group flex h-full flex-col ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 1024px) 70vw, 20vw"
          className={`image-grade object-cover transition-transform duration-[900ms] ease-expo group-hover:scale-[1.06] ${
            focus[item.id] ?? "object-center"
          }`}
        />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/20" />
        <div className="film-grain" />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <span className="text-[#c9b07a]">
          <Icon className="h-5 w-5" strokeWidth={1.4} />
        </span>
        <h3 className="mt-3 font-display text-[1.15rem] leading-tight text-[#f3ece0]">
          {item.title}
        </h3>
        <p className="mt-2 max-w-[16rem] text-[13px] leading-relaxed text-white/55">
          {item.description}
        </p>
        <a
          href="#contact"
          className="link-underline mt-4 self-start text-[13px] font-medium text-[#c9b07a]"
        >
          Learn More →
        </a>
      </div>
    </article>
  );
}

export function Portfolio() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : 300;
    const next = Math.min(Math.max(index + dir, 0), images.portfolio.length - 1);
    setIndex(next);
    el.scrollTo({ left: next * amount, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="relative bg-[#101013] py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <FadeUp>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#c9b07a] sm:text-[12px]">
                Portfolio
              </p>
            </FadeUp>
            <h2 className="mt-4 font-display text-[clamp(1.7rem,3.1vw,2.65rem)] font-normal leading-tight tracking-[-0.02em] text-[#f3ece0] lg:whitespace-nowrap">
              Exceptional Assets. Global Opportunities.
            </h2>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-5 lg:max-w-[22rem] lg:items-end">
            <FadeUp delay={0.1}>
              <p className="max-w-[22rem] text-[13.5px] leading-[1.7] text-white/55 lg:text-right">
                From iconic real estate to rare timepieces, collector cars and
                world-class events, we invest in tangible assets that create
                lasting value.
              </p>
            </FadeUp>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollByDir(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9b07a]/45 text-[#c9b07a] transition hover:border-[#c9b07a] hover:bg-[#c9b07a]/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scrollByDir(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9b07a]/45 text-[#c9b07a] transition hover:border-[#c9b07a] hover:bg-[#c9b07a]/10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <StaggerChildren className="hidden gap-5 lg:grid lg:grid-cols-5" stagger={0.08}>
          {images.portfolio.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <PortfolioCard item={item} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.portfolio.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              className="w-[min(72vw,17.5rem)] shrink-0 snap-start sm:w-[16.5rem] lg:w-[15.5rem]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
