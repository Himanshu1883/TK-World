import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Approach } from "@/components/sections/Approach";
import { ContactSection } from "@/components/sections/ContactSection";
import { whatWeDo } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Do",
  description: whatWeDo.lead,
  alternates: { canonical: "/what-we-do" },
  openGraph: {
    title: "What We Do",
    description: whatWeDo.lead,
    url: "/what-we-do",
  },
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow={whatWeDo.eyebrow}
        title={whatWeDo.title}
        lead={whatWeDo.lead}
        image={whatWeDo.banner}
      />
      <WhatWeDo showIntro={false} />
      <Approach />
      <ContactSection showIntro={false} />
    </>
  );
}
