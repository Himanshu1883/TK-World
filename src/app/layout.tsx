import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { EnquiryProvider } from "@/components/enquiry/EnquiryProvider";
import { EnquiryModal } from "@/components/enquiry/EnquiryModal";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/content";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const description =
  "TK World Trading Group is a privately owned international trading and commercial management group headquartered in the United Arab Emirates, providing strategic leadership, procurement and operational support across the GCC and international markets.";

const ogImage = {
  url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&h=630&q=80",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.tagline}`,
};

export const viewport: Viewport = {
  themeColor: "#0c1018",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "TK World Trading Group",
    "international trading UAE",
    "commercial management",
    "regional headquarters United Arab Emirates",
    "procurement and supplier management",
    "GCC trading group",
    "Tariq Khan",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "business",
  applicationName: site.name,
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: "/icon-tk.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon-32.png",
  },
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "en_AE",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AE">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <JsonLd />
        <EnquiryProvider>
          <SmoothScroll>
            <Navigation />
            <main id="main">{children}</main>
            <Footer />
          </SmoothScroll>
          <EnquiryModal />
        </EnquiryProvider>
      </body>
    </html>
  );
}
