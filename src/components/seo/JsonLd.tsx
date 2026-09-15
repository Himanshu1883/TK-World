import { site } from "@/lib/content";

const description =
  "TK World Trading Group is a privately owned international trading and commercial management group headquartered in the United Arab Emirates, providing strategic leadership, procurement and operational support across the GCC and international markets.";

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.name,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/icon-tk.png`,
          width: 512,
          height: 512,
        },
        image: `${site.url}/icon-tk.png`,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          addressCountry: "AE",
          addressLocality: site.country,
        },
        description,
        areaServed: ["AE", "GCC", "Middle East", "Europe", "Asia"],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.tagline,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-AE",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
