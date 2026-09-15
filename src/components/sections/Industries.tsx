import Image from "next/image";
import { industries } from "@/lib/content";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";

export function Industries({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section className="band-ink py-20 lg:py-28">
      <div className="shell">
        {showIntro && (
          <FadeUp className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-red" aria-hidden />
              <p className="eyebrow">{industries.eyebrow}</p>
            </div>
            <h2 className="mt-6 font-display text-section font-medium text-foreground">
              {industries.title}
            </h2>
            <p className="mt-6 max-w-prose text-[14.5px] leading-relaxed text-muted">
              {industries.lead}
            </p>
          </FadeUp>
        )}

        <StaggerChildren
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-16 lg:grid-cols-4"
          stagger={0.06}
        >
          {industries.items.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <article className="group relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover image-grade transition-transform duration-[900ms] ease-expo group-hover:scale-[1.05]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5">
                  <span
                    className="block h-px w-7 bg-red transition-all duration-500 ease-expo group-hover:w-12"
                    aria-hidden
                  />
                  <h3 className="mt-3 font-display text-[15px] font-medium leading-snug text-white sm:text-[17px]">
                    {item.title}
                  </h3>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeUp>
          <p className="mt-12 max-w-3xl border-l-2 border-red pl-6 text-[14.5px] leading-relaxed text-muted lg:mt-14">
            {industries.closing}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
