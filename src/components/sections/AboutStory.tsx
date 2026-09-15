import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { about } from "@/lib/content";
import { FadeUp } from "@/components/ui/Reveal";

/**
 * `full` renders the complete story for the About page; the home page shows
 * a condensed version that links through.
 */
export function AboutStory({
  full = false,
  showIntro = true,
}: {
  full?: boolean;
  showIntro?: boolean;
}) {
  const paragraphs = full ? about.paragraphs : about.paragraphs.slice(0, 2);

  return (
    <section className="band-ink py-20 lg:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeUp className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover image-grade"
            />
            <div className="absolute inset-0 bg-ink/15" aria-hidden />
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="order-1 lg:order-2">
          {showIntro && (
            <>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-red" aria-hidden />
                <p className="eyebrow">{about.eyebrow}</p>
              </div>

              <h2 className="mt-6 font-display text-section font-medium text-foreground">
                {about.title}
              </h2>
            </>
          )}

          <div className={showIntro ? "mt-7 space-y-5" : "space-y-5"}>
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-prose text-[14.5px] leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {!full && (
            <Link href="/about" className="link-underline mt-8 text-[13px] font-semibold uppercase tracking-[0.13em]">
              Read Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
