import Image from "next/image";
import { leadership } from "@/lib/content";
import { FadeUp } from "@/components/ui/Reveal";

export function Leadership() {
  return (
    <section className="band-ink py-20 lg:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <FadeUp>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={leadership.image.src}
              alt={leadership.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover image-grade"
            />
            <div className="absolute inset-0 bg-ink/20" aria-hidden />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-red" aria-hidden />
            <p className="eyebrow">{leadership.eyebrow}</p>
          </div>

          <h2 className="mt-6 font-display text-section font-medium text-foreground">
            {leadership.name}
          </h2>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
            {leadership.role}
          </p>

          <div className="mt-7 space-y-5">
            {leadership.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-prose text-[14.5px] leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
