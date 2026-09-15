import Image from "next/image";
import { approach } from "@/lib/content";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";

export function Approach() {
  return (
    <section className="band-navy py-20 lg:py-28">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeUp>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-red" aria-hidden />
              <p className="eyebrow">{approach.eyebrow}</p>
            </div>

            <h2 className="mt-6 max-w-[18ch] font-display text-section font-medium text-foreground">
              {approach.title}
            </h2>

            <div className="mt-7 space-y-5">
              {approach.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-prose text-[14.5px] leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={approach.image.src}
                alt={approach.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover image-grade"
              />
              <div className="absolute inset-0 bg-navy/20" aria-hidden />
            </div>
          </FadeUp>
        </div>

        <StaggerChildren
          className="mt-14 grid gap-8 border-t border-white/10 pt-12 sm:grid-cols-3 sm:gap-10 lg:mt-20"
          stagger={0.09}
        >
          {approach.pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <h3 className="font-display text-[19px] font-medium leading-snug text-foreground lg:text-[21px]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                {pillar.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
