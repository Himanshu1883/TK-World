"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Building2, Car, ChevronLeft, ChevronRight, Gem, Trophy, Watch } from "lucide-react";
import { images } from "@/lib/images";
import { FadeUp, MaskReveal, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";

const iconMap = {
  Building2,
  Watch,
  Car,
  Trophy,
  Gem,
};

const objectPos: Record<string, string> = {
  property: "object-[center_40%]",
  watches: "object-center",
  cars: "object-[center_45%]",
  sports: "object-[center_35%]",
  strategic: "object-center",
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
      className={`group relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] transition-all duration-700 ease-expo hover:-translate-y-1.5 hover:shadow-lift ${className}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 1024px) 70vw, 20vw"
        className={`image-grade object-cover transition-transform duration-[750ms] ease-expo group-hover:scale-[1.06] ${objectPos[item.id] ?? "object-center"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-colors duration-700 group-hover:from-black/90" />
      <div className="film-grain" />

      <div className="absolute inset-x-0 bottom-0 p-4 text-white xl:p-5">
        <span className="mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-sm transition duration-500 group-hover:border-gold group-hover:text-gold group-hover:shadow-gold xl:mb-3 xl:h-10 xl:w-10">
          <Icon className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
        </span>
        <h3 className="font-display text-lg leading-tight xl:text-xl 2xl:text-2xl">
          {item.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-white/70 xl:mt-2 xl:text-[13px]">
          {item.description}
        </p>
        <a
          href="#contact"
          className="link-underline mt-3 text-[12px] font-medium xl:mt-4 xl:text-[13px]"
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
    const amount = card ? card.offsetWidth + 20 : 280;
    const next = Math.min(
      Math.max(index + dir, 0),
      images.portfolio.length - 1
    );
    setIndex(next);
    el.scrollTo({ left: next * amount, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="band-invert relative py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-12">
        <div className="mb-10 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between xl:mb-14">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="eyebrow">Our Portfolio</p>
            </FadeUp>
            <MaskReveal className="mt-4">
              <h2 className="font-display text-section text-foreground">
                Exceptional Assets.{" "}
                <span className="italic text-gold">Global Opportunities.</span>
              </h2>
            </MaskReveal>
          </div>

          <div className="flex items-end justify-between gap-8 lg:max-w-md lg:flex-col lg:items-end">
            <FadeUp delay={0.1}>
              <p className="max-w-sm text-[15px] leading-relaxed text-muted">
                Five carefully selected asset classes—each chosen for permanence,
                provenance, and the potential to enrich a long-term portfolio.
              </p>
            </FadeUp>
            <div className="flex gap-3 xl:hidden">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollByDir(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-foreground transition hover:border-gold hover:text-gold"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scrollByDir(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-foreground transition hover:border-gold hover:text-gold"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Wide desktops: balanced 5-up grid */}
        <StaggerChildren
          className="hidden gap-4 xl:grid xl:grid-cols-5 2xl:gap-5"
          stagger={0.08}
        >
          {images.portfolio.map((item) => (
            <StaggerItem key={item.id}>
              <PortfolioCard item={item} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Laptop & below: horizontal gallery keeps healthy proportions */}
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 xl:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
