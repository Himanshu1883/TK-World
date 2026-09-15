"use client";

import { useCallback, useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Approach } from "@/components/sections/Approach";
import { Founder } from "@/components/sections/Founder";
import { Insights } from "@/components/sections/Insights";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { IntroLoader } from "@/components/ui/IntroLoader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export function HomePage() {
  const [introDone, setIntroDone] = useState(false);
  const onIntroComplete = useCallback(() => setIntroDone(true), []);

  return (
    <SmoothScroll>
      <IntroLoader onComplete={onIntroComplete} />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero introDone={introDone} />
        <Portfolio />
        <Approach />
        <Founder />
        <Insights />
        <ContactCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
