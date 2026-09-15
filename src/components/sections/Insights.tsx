"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/lib/images";
import { FadeUp, MaskReveal, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";

export function Insights() {
  return (
    <section id="insights" className="band-base py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="eyebrow">Market Insights</p>
            </FadeUp>
            <MaskReveal className="mt-4">
              <h2 className="font-display text-section text-foreground">
                Ideas for a{" "}
                <span className="italic text-gold">Wealthier Tomorrow.</span>
              </h2>
            </MaskReveal>
          </div>

          <div className="flex items-center gap-4">
            <a href="#insights" className="link-underline text-[13px] font-medium">
              View All Insights →
            </a>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous insights"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-gold hover:text-gold"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next insights"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-gold hover:text-gold"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {images.insights.map((article) => (
            <StaggerItem key={article.title}>
              <article
                data-cursor="Read"
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-card shadow-[var(--shadow-card)] transition-all duration-700 ease-expo hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={article.src}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover image-grade transition-transform duration-[800ms] ease-expo group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />
                  <div className="film-grain" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em]">
                    <span className="text-gold">{article.category}</span>
                    <span className="text-muted">·</span>
                    <span className="text-muted">{article.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <a href="#contact" className="link-underline mt-5 text-[13px] font-medium">
                    Read Article →
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
