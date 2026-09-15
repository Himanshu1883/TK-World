import Image from "next/image";
import { ArrowRight, Globe, Mail, MapPin, type LucideIcon } from "lucide-react";
import { EnquiryButton } from "@/components/enquiry/EnquiryButton";
import { contact, site, type ContactIcon } from "@/lib/content";
import { FadeUp } from "@/components/ui/Reveal";

const iconMap: Record<ContactIcon, LucideIcon> = { MapPin, Mail, Globe };

export function ContactDetails() {
  return (
    <section className="band-ink py-20 lg:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeUp>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-red" aria-hidden />
            <p className="eyebrow">Head Office</p>
          </div>

          <h2 className="mt-6 font-display text-section font-medium text-foreground">
            {site.country}
          </h2>

          <p className="mt-6 max-w-prose text-[14.5px] leading-relaxed text-muted">
            {contact.lead}
          </p>

          <ul className="mt-10 border-t border-border">
            {contact.details.map((detail) => {
              const Icon = iconMap[detail.icon];
              return (
                <li
                  key={detail.label}
                  className="flex items-start gap-5 border-b border-border py-5"
                >
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    strokeWidth={1.4}
                  />
                  <div className="min-w-0">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-muted">
                      {detail.label}
                    </p>
                    <p className="mt-1.5 break-words text-[15px] text-foreground sm:text-base">
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="transition-colors hover:text-gold"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <EnquiryButton className="btn-gold mt-10">
            Make an Enquiry
            <ArrowRight className="h-4 w-4" />
          </EnquiryButton>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={contact.office.src}
              alt={contact.office.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover image-grade"
            />
            <div className="absolute inset-0 bg-ink/20" aria-hidden />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
