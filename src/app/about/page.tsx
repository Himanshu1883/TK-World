import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { Approach } from "@/components/sections/Approach";
import { ContactSection } from "@/components/sections/ContactSection";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: about.paragraphs[0],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us",
    description: about.paragraphs[0],
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.title}
        lead={about.lead}
        image={about.banner}
      />
      <AboutStory full showIntro={false} />
      <Approach />
      <ContactSection showIntro={false} />
    </>
  );
}
