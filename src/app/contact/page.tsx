import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactEnquiries } from "@/components/sections/ContactEnquiries";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.lead,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description: contact.lead,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contact.eyebrow}
        title={contact.title}
        image={contact.banner}
      />
      <ContactDetails />
      <ContactEnquiries />
    </>
  );
}
