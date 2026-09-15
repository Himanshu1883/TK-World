import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AboutStory } from "@/components/sections/AboutStory";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Industries } from "@/components/sections/Industries";
import { Approach } from "@/components/sections/Approach";
import { Leadership } from "@/components/sections/Leadership";
import { ContactSection } from "@/components/sections/ContactSection";
import { IntroLoader } from "@/components/ui/IntroLoader";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | ${site.tagline}`,
  },
  description:
    "TK World Trading Group is a privately owned international trading and commercial management group headquartered in the United Arab Emirates.",
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Hero />
      <AboutStory />
      <WhatWeDo />
      <Industries />
      <Approach />
      <Leadership />
      <ContactSection />
    </>
  );
}
