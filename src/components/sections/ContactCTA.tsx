"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { images } from "@/lib/images";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { FadeUp, MaskReveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#101013]">
      <div className="absolute inset-0">
        <Image
          src={images.cta.src}
          alt={images.cta.alt}
          fill
          sizes="100vw"
          className="object-cover object-[center_40%] image-grade"
        />
        <div className="image-vignette" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0d] via-[#0b0b0d]/85 to-[#0b0b0d]/35" />
        <div className="film-grain" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12 lg:py-28">
        <div>
          <FadeUp>
            <p className="eyebrow text-gold-soft">Let&apos;s Talk</p>
          </FadeUp>
          <MaskReveal className="mt-4">
            <h2 className="font-display text-section text-white">
              Explore Opportunities Together.
            </h2>
          </MaskReveal>
          <FadeUp delay={0.12}>
            <p className="mt-5 max-w-lg text-[14px] leading-[1.8] text-white/70">
              Whether you are an investor, partner or simply want to learn more
              about our portfolio, we would be delighted to hear from you.
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <MagneticLink
              href="mailto:info@tkworld.ae"
              className="mt-9 inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-[13px] font-medium text-[#101013] transition hover:bg-gold-soft"
            >
              Discuss an Opportunity →
            </MagneticLink>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="glass-panel w-full rounded-xl p-7 text-white lg:ml-auto lg:max-w-sm">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-[14px] leading-relaxed">Dubai, UAE</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:info@tkworld.ae"
                  className="text-[14px] transition hover:text-gold"
                >
                  info@tkworld.ae
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Phone className="h-4 w-4" />
                </span>
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
