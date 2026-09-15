/**
 * Single source of truth for every piece of copy and imagery on the site.
 * Editing text here never requires touching a component.
 */

const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const pexels = (id: string, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const site = {
  name: "TK World Trading Group",
  shortName: "TK World",
  tagline:
    "Regional Headquarters for International Trading & Commercial Management",
  country: "United Arab Emirates",
  email: "info@tkworld.ae",
  website: "www.tkworld.ae",
  url: "https://tkworld.ae",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Industries", href: "/industries" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------------ HOME */

export const hero = {
  eyebrow: "Regional Headquarters for",
  title: ["International Trading &", "Commercial Management"] as const,
  intro:
    "TK World Trading Group is a privately owned international trading and commercial management group headquartered in the United Arab Emirates.",
  body: [
    "The Group provides strategic leadership, commercial management and operational support to its affiliated businesses, coordinating regional trading activities, supplier relationships, procurement, business development and corporate services across the GCC and international markets.",
    "With more than three decades of commercial experience, TK World Trading Group has established long-term relationships with suppliers, business partners and clients throughout Europe, the Middle East and Asia.",
  ],
  aside: ["Connecting", "Markets.", "Creating", "Opportunities."],
  footerLeft: "Global Perspective. Tangible Value.",
  footerRight: "Based in the United Arab Emirates",
  slides: [
    {
      src: pexels("1470502", 2400),
      alt: "Dubai Marina waterfront at dusk",
    },
    {
      src: u("photo-1512453979798-5ea266f8880c", 2400),
      alt: "Dubai skyline at golden hour",
    },
    {
      src: u("photo-1526495124232-a04e1849168c", 2400),
      alt: "Sheikh Zayed Road at blue hour",
    },
    {
      src: pexels("442579", 2400),
      alt: "Dubai waterfront towers at night",
    },
    {
      src: u("photo-1586528116311-ad8dd3c8310d", 2400),
      alt: "International shipping port at dusk",
    },
    {
      src: u("photo-1497366754035-f200968a6e72", 2400),
      alt: "Corporate headquarters boardroom",
    },
  ],
} as const;

export const ourBusiness = {
  eyebrow: "Our Business",
  items: [
    { icon: "ChartColumn", title: "Regional Commercial Management" },
    { icon: "Globe", title: "International Trading" },
    { icon: "Box", title: "Procurement & Supplier Management" },
    { icon: "Users", title: "Business Development" },
    { icon: "Handshake", title: "Strategic Partnerships" },
    { icon: "Settings", title: "Operational Support" },
  ],
} as const;

export type BusinessIcon = (typeof ourBusiness.items)[number]["icon"];

/* ----------------------------------------------------------------- ABOUT */

export const about = {
  eyebrow: "About Us",
  title: "Our Story",
  lead: "Three decades of international trading experience, coordinated from the United Arab Emirates.",
  paragraphs: [
    "Founded by British entrepreneur Tariq Khan, TK World Trading Group has developed over thirty years of international trading experience across a broad range of specialist markets.",
    "Today, the Group serves as the regional headquarters for a portfolio of affiliated businesses operating across luxury goods, premium consumer products, hospitality, sports and entertainment, digital commerce and other specialist trading sectors.",
    "The Group's role extends beyond trading activities by providing strategic direction, operational oversight and commercial support to affiliated companies, enabling them to benefit from shared expertise, established supplier networks and coordinated regional management.",
    "Through disciplined commercial practices, long-standing industry relationships and continuous market analysis, TK World Trading Group supports sustainable business growth while maintaining the highest professional standards across its operations.",
  ],
  image: {
    src: u("photo-1517048676732-d65bc937f952", 1600),
    alt: "Commercial meeting in progress at a corporate office",
  },
  banner: {
    src: u("photo-1497366754035-f200968a6e72", 2000),
    alt: "Corporate headquarters interior",
  },
} as const;

/* ----------------------------------------------------------- WHAT WE DO */

export const whatWeDo = {
  eyebrow: "What We Do",
  title: "Commercial management across international markets.",
  lead: "The Group provides the strategic direction, trading expertise and shared services that allow its affiliated businesses to operate with consistency and scale.",
  banner: {
    src: u("photo-1454165804606-c3d57bc86b40", 2000),
    alt: "International business meeting around a conference table",
  },
  services: [
    {
      id: "commercial-management",
      icon: "Briefcase",
      title: "Commercial Management",
      description:
        "Providing strategic leadership and commercial oversight for affiliated businesses operating across international markets.",
    },
    {
      id: "international-trading",
      icon: "Globe",
      title: "International Trading",
      description:
        "Coordinating the sourcing, procurement and management of specialist products through an established international supplier network.",
    },
    {
      id: "supplier-procurement",
      icon: "Handshake",
      title: "Supplier & Procurement Management",
      description:
        "Managing supplier relationships, procurement strategies and commercial negotiations on behalf of affiliated companies.",
    },
    {
      id: "regional-operations",
      icon: "Building",
      title: "Regional Operations",
      description:
        "Acting as the regional headquarters supporting operational coordination across the GCC and international markets.",
    },
    {
      id: "business-development",
      icon: "TrendingUp",
      title: "Business Development",
      description:
        "Identifying new commercial opportunities, strategic partnerships and market expansion initiatives.",
    },
    {
      id: "corporate-services",
      icon: "Layers",
      title: "Shared Corporate Services",
      description:
        "Providing administrative, operational and management support that enables affiliated companies to operate efficiently while maintaining consistent commercial standards.",
    },
  ],
} as const;

/* ------------------------------------------------------------ INDUSTRIES */

export const industries = {
  eyebrow: "Industries",
  title: "Specialist sectors we support.",
  lead: "TK World Trading Group supports businesses operating across a diverse range of specialist sectors including:",
  closing:
    "The diversity of the Group's activities enables it to leverage extensive commercial knowledge, established supplier relationships and international market expertise across multiple industries.",
  banner: {
    src: u("photo-1494412574643-ff11b0a5c1c3", 2000),
    alt: "Freight containers stacked at an international port",
  },
  items: [
    {
      id: "luxury-watches",
      title: "Luxury Watches",
      src: u("photo-1523170335258-f5ed11844a49", 1200),
      alt: "Luxury mechanical wristwatch",
    },
    {
      id: "luxury-vehicles",
      title: "Luxury Vehicles",
      src: u("photo-1503376780353-7e6692767b70", 1200),
      alt: "Luxury sports car in profile",
    },
    {
      id: "premium-consumer-goods",
      title: "Premium Consumer Goods",
      src: u("photo-1441986300917-64674bd600d8", 1200),
      alt: "Premium consumer goods retail interior",
    },
    {
      id: "sports-entertainment",
      title: "Sports & Entertainment",
      src: u("photo-1522778119026-d647f0596c20", 1200),
      alt: "Floodlit stadium during an evening event",
    },
    {
      id: "hospitality",
      title: "Hospitality",
      src: u("photo-1566073771259-6a8506099945", 1200),
      alt: "Hotel exterior at dusk",
    },
    {
      id: "digital-commerce",
      title: "Digital Commerce",
      src: u("photo-1556742049-0cfed4f6a45d", 1200),
      alt: "Packaged goods prepared for online fulfilment",
    },
    {
      id: "international-trading",
      title: "International Trading",
      src: u("photo-1578575437130-527eed3abbec", 1200),
      alt: "Cargo vessel loaded with shipping containers",
    },
    {
      id: "strategic-procurement",
      title: "Strategic Procurement",
      src: u("photo-1553729459-efe14ef6055d", 1200),
      alt: "Commercial agreement being reviewed at a desk",
    },
  ],
} as const;

/* -------------------------------------------------------------- APPROACH */

export const approach = {
  eyebrow: "Our Approach",
  title: "Built on relationships, integrity and market knowledge.",
  paragraphs: [
    "The Group's success is built upon long-term relationships, commercial integrity and extensive market knowledge.",
    "Every commercial opportunity is supported by detailed market analysis, disciplined procurement strategies and an understanding of international supply and demand dynamics.",
    "By combining decades of practical trading experience with strategic commercial management, the Group continues to support the growth of its affiliated businesses while strengthening relationships with suppliers, partners and clients around the world.",
  ],
  pillars: [
    {
      title: "Long-Term Relationships",
      description:
        "Supplier, partner and client relationships maintained over decades rather than transactions.",
    },
    {
      title: "Commercial Integrity",
      description:
        "Disciplined practices and consistent professional standards across every operation.",
    },
    {
      title: "Market Knowledge",
      description:
        "Continuous analysis of international supply and demand dynamics informing every decision.",
    },
  ],
  image: {
    src: u("photo-1600880292203-757bb62b4baf", 1600),
    alt: "Commercial partners concluding a business agreement",
  },
} as const;

/* ------------------------------------------------------------ LEADERSHIP */

export const leadership = {
  eyebrow: "Leadership",
  name: "Tariq Khan",
  role: "Founder & Group Director",
  paragraphs: [
    "Tariq Khan is a British entrepreneur with more than three decades of experience in international trading and commercial management.",
    "Beginning his entrepreneurial journey at the age of eight, he has built successful businesses across multiple sectors including luxury goods, premium consumer products, hospitality, sports and entertainment.",
    "Under his leadership, TK World Trading Group has developed into a diversified regional management group recognised for its commercial expertise, long-standing industry relationships and commitment to operational excellence.",
  ],
  image: {
    src: u("photo-1486406146926-c627a92ad1ab", 1400),
    alt: "Corporate towers viewed from below",
  },
  banner: {
    src: u("photo-1431540015161-0bf868a2d407", 2000),
    alt: "Modern commercial architecture",
  },
} as const;

/* --------------------------------------------------------------- CONTACT */

export type ContactIcon = "MapPin" | "Mail" | "Globe";

type ContactDetail = {
  icon: ContactIcon;
  label: string;
  value: string;
  href?: string;
};

export const contact = {
  eyebrow: "Contact",
  title: "Get in Touch",
  lead: "TK World Trading Group welcomes enquiries from suppliers, commercial partners and businesses seeking to explore strategic opportunities with the Group.",
  banner: {
    src: u("photo-1518684079-3c830dcef090", 2000),
    alt: "Aerial view of the United Arab Emirates coastline",
  },
  office: {
    src: u("photo-1526495124232-a04e1849168c", 1600),
    alt: "Commercial district in the United Arab Emirates at dusk",
  },
  details: [
    { icon: "MapPin", label: "Head Office", value: site.country },
    { icon: "Mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: "Globe", label: "Website", value: site.website, href: site.url },
  ] as ContactDetail[],
  enquiries: {
    eyebrow: "Enquiries",
    title: "Who we work with.",
    items: [
      {
        title: "Suppliers",
        description:
          "Manufacturers and distributors seeking to supply the Group's affiliated businesses across its specialist trading sectors.",
      },
      {
        title: "Commercial Partners",
        description:
          "Organisations exploring distribution agreements, joint ventures and long-term commercial relationships across the GCC.",
      },
      {
        title: "Strategic Opportunities",
        description:
          "Businesses seeking regional representation, procurement support or commercial management within international markets.",
      },
    ],
  },
} as const;

export type ServiceIcon = (typeof whatWeDo.services)[number]["icon"];
