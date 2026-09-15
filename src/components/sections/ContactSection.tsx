import Image from "next/image";
import { Globe, Mail, MapPin, ArrowRight, type LucideIcon } from "lucide-react";
import { EnquiryButton } from "@/components/enquiry/EnquiryButton";
import { contact, type ContactIcon } from "@/lib/content";
import { FadeUp } from "@/components/ui/Reveal";

const iconMap: Record<ContactIcon, LucideIcon> = { MapPin, Mail, Globe };

export function ContactSection({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink py-20 lg:py-28">
      <Image
        src={contact.banner.src}
        alt={contact.banner.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover image-grade"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/55"
        aria-hidden
      />

      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeUp>
          {showIntro ? (
            <>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-red" aria-hidden />
                <p className="eyebrow">{contact.eyebrow}</p>
              </div>

              <h2 className="mt-6 font-display text-section font-medium text-white">
                {contact.title}
              </h2>

              <p className="mt-6 max-w-prose text-[14.5px] leading-relaxed text-white/75">
                {contact.lead}
              </p>
            </>
          ) : (
            <h2 className="font-display text-section font-medium text-white">
              Speak With the Group
            </h2>
          )}

          <EnquiryButton className="btn-gold mt-9">
            Make an Enquiry
            <ArrowRight className="h-4 w-4" />
          </EnquiryButton>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="glass-panel p-7 lg:p-10">
            <ul className="space-y-7">
              {contact.details.map((detail) => {
                const Icon = iconMap[detail.icon];
                const value = detail.href ? (
                  <a
                    href={detail.href}
                    className="text-white transition-colors hover:text-gold"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-white">{detail.value}</span>
                );

                return (
                  <li key={detail.label} className="flex items-start gap-4">
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                      strokeWidth={1.4}
                    />
                    <div>
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/45">
                        {detail.label}
                      </p>
                      <p className="mt-1.5 break-words text-[15px]">{value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
