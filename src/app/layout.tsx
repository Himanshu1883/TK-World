import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tkworld.ae"),
  title: {
    default: "TK World Investment Group | Assets That Endure",
    template: "%s | TK World Investment Group",
  },
  description:
    "Dubai-based luxury asset investment firm specializing in real estate, fine watches, collector cars, sports & events, and strategic investments.",
  keywords: [
    "TK World",
    "luxury investment",
    "Dubai family office",
    "collector cars",
    "fine watches",
    "luxury real estate",
  ],
  openGraph: {
    title: "TK World Investment Group",
    description:
      "Investing in assets that endure — luxury property, watches, cars, sports & strategic holdings from Dubai.",
    url: "https://tkworld.ae",
    siteName: "TK World Investment Group",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Dubai skyline at dusk — TK World Investment Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TK World Investment Group",
    description:
      "Investing in assets that endure — curated luxury holdings from Dubai.",
    images: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
