import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Industries } from "@/components/sections/Industries";
import { ContactSection } from "@/components/sections/ContactSection";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description: industries.closing,
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries",
    description: industries.closing,
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow={industries.eyebrow}
        title={industries.title}
        lead={industries.lead}
        image={industries.banner}
      />
      <Industries showIntro={false} />
      <ContactSection showIntro={false} />
    </>
  );
}
