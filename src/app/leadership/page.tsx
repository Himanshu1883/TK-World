import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Leadership } from "@/components/sections/Leadership";
import { ContactSection } from "@/components/sections/ContactSection";
import { leadership } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership",
  description: leadership.paragraphs[0],
  alternates: { canonical: "/leadership" },
  openGraph: {
    title: "Leadership",
    description: leadership.paragraphs[0],
    url: "/leadership",
  },
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow={leadership.eyebrow}
        title="Group Leadership"
        lead="Three decades of international trading and commercial management experience guiding the Group's strategic direction."
        image={leadership.banner}
      />
      <Leadership />
      <ContactSection showIntro={false} />
    </>
  );
}
