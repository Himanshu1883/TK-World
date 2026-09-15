"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { images } from "@/lib/images";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { FadeUp, MaskReveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0">
            <Image
              src={images.cta.src}
              alt={images.cta.alt}
              fill
              sizes="100vw"
              className="object-cover image-grade"
            />
            <div className="image-vignette" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
            <div className="film-grain" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-12">
        <div>
          <FadeUp>
            <p className="eyebrow text-gold-soft">Let&apos;s Talk</p>
          </FadeUp>
          <MaskReveal className="mt-4">
            <h2 className="font-display text-section text-white">
              Explore Opportunities{" "}
              <span className="italic text-gold-soft">Together.</span>
            </h2>
          </MaskReveal>
          <FadeUp delay={0.12}>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
              Whether you are allocating into a first luxury holding or refining
              an established portfolio, we welcome a private conversation.
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <MagneticLink
              href="mailto:info@tkworld.ae"
              className="mt-9 inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-[13px] font-medium text-[#0a0a0b] transition hover:bg-gold-soft"
            >
              Discuss an Opportunity →
            </MagneticLink>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="glass-panel ml-auto w-full max-w-sm rounded-2xl p-7 text-white lg:justify-self-end">
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-[14px] leading-relaxed">Dubai, UAE</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href="mailto:info@tkworld.ae"
                  className="text-[14px] transition hover:text-gold"
                >
                  info@tkworld.ae
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href="tel:+97141234567"
                  className="text-[14px] transition hover:text-gold"
                >
                  +971 4 123 4567
                </a>
              </li>
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
