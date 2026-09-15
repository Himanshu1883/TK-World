import {
  Briefcase,
  Building,
  Globe,
  Handshake,
  Layers,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { whatWeDo, type ServiceIcon } from "@/lib/content";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  Briefcase,
  Globe,
  Handshake,
  Building,
  TrendingUp,
  Layers,
};

export function WhatWeDo({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section className="band-paper py-20 lg:py-28">
      <div className="shell">
        {showIntro && (
          <FadeUp className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-red" aria-hidden />
              <p className="eyebrow">{whatWeDo.eyebrow}</p>
            </div>
            <h2 className="mt-6 font-display text-section font-medium text-foreground">
              {whatWeDo.title}
            </h2>
            <p className="mt-6 max-w-prose text-[14.5px] leading-relaxed text-muted">
              {whatWeDo.lead}
            </p>
          </FadeUp>
        )}

        <StaggerChildren
          className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
          stagger={0.06}
        >
          {whatWeDo.services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.id} className="h-full">
                <article className="group flex h-full flex-col bg-surface p-7 transition-colors duration-500 lg:p-9">
                  <Icon
                    className="h-6 w-6 shrink-0 text-gold transition-transform duration-500 ease-expo group-hover:-translate-y-0.5"
                    strokeWidth={1.4}
                  />
                  <h3 className="mt-6 font-display text-[19px] font-medium leading-snug text-foreground lg:text-[21px]">
                    {service.title}
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span
                    className="mt-6 h-px w-8 bg-red transition-all duration-500 ease-expo group-hover:w-14"
                    aria-hidden
                  />
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
