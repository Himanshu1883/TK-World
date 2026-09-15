const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroSlides: [
    {
      src: u("photo-1512453979798-5ea266f8880c", 2400),
      alt: "Dubai skyline at dusk with the Burj Khalifa",
    },
    {
      src: u("photo-1526495124232-a04e1849168c", 2400),
      alt: "Sheikh Zayed Road at blue hour with light trails",
    },
    {
      src: u("photo-1518684079-3c830dcef090", 2400),
      alt: "Aerial view of the Dubai coastline at dusk",
    },
  ],
  terrace: {
    src: u("photo-1600607687939-ce8a6c25118c", 1600),
    alt: "Luxury rooftop terrace lounge",
  },
  cta: {
    src: u("photo-1512453979798-5ea266f8880c", 2400),
    alt: "Dubai skyline illuminated at dusk",
  },
  founder: {
    src: u("photo-1486406146926-c627a92ad1ab", 1600),
    alt: "Glass towers photographed from below",
  },
  portfolio: [
    {
      id: "property",
      title: "Luxury Property",
      description: "Prime residential and commercial assets in global markets.",
      src: u("photo-1613490493576-7fde63acd811", 1400),
      alt: "Modern luxury villa with infinity pool",
      icon: "Home" as const,
    },
    {
      id: "watches",
      title: "Fine Watches",
      description: "Rare timepieces. Enduring value.",
      src: u("photo-1523170335258-f5ed11844a49", 1400),
      alt: "Luxury chronograph watch",
      icon: "Watch" as const,
    },
    {
      id: "cars",
      title: "Collector Cars",
      description: "Iconic automobiles for the next generation.",
      src: u("photo-1503376780353-7e6692767b70", 1400),
      alt: "Collector sports car",
      icon: "Car" as const,
    },
    {
      id: "sports",
      title: "Sports & Events",
      description: "Premium tickets and exclusive event experiences.",
      src: u("photo-1522778119026-d647f0596c20", 1400),
      alt: "Floodlit stadium on a match night",
      icon: "Ticket" as const,
    },
    {
      id: "strategic",
      title: "Strategic Investments",
      description: "Selective opportunities across tangible assets and special situations.",
      src: u("photo-1529699211952-734e80c4d42b", 1400),
      alt: "Chess king on a board",
      icon: "Hourglass" as const,
    },
  ],
  insights: [
    {
      category: "Real Estate",
      date: "12 Mar 2026",
      title: "Dubai Real Estate: A Global Safe Haven for Investors",
      excerpt:
        "Why Dubai continues to attract high-net-worth individuals and institutions.",
      src: u("photo-1526495124232-a04e1849168c", 1200),
      alt: "Dubai skyline at dusk",
    },
    {
      category: "Watches",
      date: "28 Feb 2026",
      title: "The Enduring Value of Rare Timepieces",
      excerpt:
        "How collectible watches continue to outperform traditional assets.",
      src: u("photo-1523170335258-f5ed11844a49", 1200),
      alt: "Luxury chronograph watch close up",
    },
    {
      category: "Collector Cars",
      date: "04 Feb 2026",
      title: "Collector Cars: Passion Meets Performance",
      excerpt:
        "A look at the growing global market for iconic automobiles.",
      src: u("photo-1592198084033-aade902d1aae", 1200),
      alt: "Red supercar at golden hour",
    },
  ],
} as const;

export const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Markets", href: "#approach" },
  { label: "About", href: "#founder" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroStats = [
  { value: "5+", label: "Asset Classes" },
  { value: "Global", label: "Market Access" },
  { value: "Trusted", label: "By Private Investors" },
  { value: "UAE", label: "Based in Dubai" },
] as const;
