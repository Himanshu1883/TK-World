"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/lib/images";
import { FadeUp, MaskReveal, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";

export function Insights() {
  return (
    <section id="insights" className="bg-background py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="eyebrow">Market Insights</p>
            </FadeUp>
            <MaskReveal className="mt-4">
              <h2 className="font-display text-section text-foreground">
                Ideas for a Wealthier Tomorrow.
              </h2>
            </MaskReveal>
          </div>

          <div className="flex items-center gap-5">
            <a href="#insights" className="link-underline text-[13px] font-medium">
              View All Insights →
            </a>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous insights"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-foreground transition hover:border-gold hover:text-gold"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next insights"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-foreground transition hover:border-gold hover:text-gold"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {images.insights.map((article) => (
            <StaggerItem key={article.title} className="h-full">
              <article
                data-cursor="Read"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-card shadow-[var(--shadow-card)] transition-all duration-700 ease-expo hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.src}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover image-grade transition-transform duration-[800ms] ease-expo group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/30" />
                  <div className="film-grain" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3 text-[10.5px] uppercase tracking-[0.18em]">
                    <span className="text-gold">{article.category}</span>
                    <span className="text-muted">{article.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <a
                    href="#contact"
                    className="link-underline mt-6 self-start text-[12.5px] font-medium"
                  >
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
