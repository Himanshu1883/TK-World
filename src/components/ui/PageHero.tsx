import Image from "next/image";
import { FadeUp } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: { src: string; alt: string };
}) {
  return (
    <section className="relative isolate flex min-h-[20rem] items-end overflow-hidden bg-ink pb-12 pt-32 sm:min-h-[24rem] lg:min-h-[30rem] lg:pb-16 lg:pt-40">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover image-grade-page"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/50 via-ink/20 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-36 bg-gradient-to-b from-ink/75 via-ink/40 to-transparent sm:h-40"
        aria-hidden
      />

      <div className="shell">
        <FadeUp y={22}>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-red" aria-hidden />
            <p className="eyebrow">{eyebrow}</p>
          </div>

          <h1 className="mt-5 max-w-[22ch] font-display text-page-title font-medium text-white [text-shadow:0_2px_18px_rgba(8,11,18,0.55)]">
            {title}
          </h1>

          {lead && (
            <p className="mt-6 max-w-prose text-[14.5px] leading-relaxed text-white/75 sm:text-[15px]">
              {lead}
            </p>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
