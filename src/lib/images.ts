export const images = {
  heroSlides: [
    {
      src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2400&q=80",
      alt: "Dubai marina skyline at dusk",
    },
    {
      src: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=2400&q=80",
      alt: "Dubai architectural skyline at golden hour",
    },
    {
      src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=2400&q=80",
      alt: "Illuminated city skyline over water",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=80",
      alt: "Luxury residence with pool at dusk",
    },
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80",
      alt: "Modern luxury villa exterior",
    },
  ],
  hero: {
    src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2400&q=80",
    alt: "Dubai skyline at dusk with gold-hour light",
    blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGfAP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//Z",
  },
  terrace: {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury rooftop terrace lounge",
  },
  cta: {
    src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=2400&q=80",
    alt: "Dubai skyline illuminated at dusk",
  },
  founder: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern glass architecture upward angle",
  },
  portfolio: [
    {
      id: "property",
      title: "Luxury Property",
      description: "Prime residences and development across global gateway cities.",
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
      alt: "Modern luxury villa with infinity pool",
      icon: "Building2" as const,
    },
    {
      id: "watches",
      title: "Fine Watches",
      description: "Horological icons with enduring collector demand.",
      src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=80",
      alt: "Macro luxury chronograph watch",
      icon: "Watch" as const,
    },
    {
      id: "cars",
      title: "Collector Cars",
      description: "Rare automobiles curated for appreciation and passion.",
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
      alt: "Classic Porsche 911 side profile",
      icon: "Car" as const,
    },
    {
      id: "sports",
      title: "Sports & Events",
      description: "Access to premier sporting assets and live experiences.",
      src: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=80",
      alt: "Stadium illuminated at night",
      icon: "Trophy" as const,
    },
    {
      id: "strategic",
      title: "Strategic Investments",
      description: "Disciplined allocation across enduring opportunities.",
      src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1400&q=80",
      alt: "Gold chess pieces macro",
      icon: "Gem" as const,
    },
  ],
  insights: [
    {
      category: "REAL ESTATE",
      date: "12 Mar 2026",
      title: "Dubai's Prime Market: Where Capital Seeks Permanence",
      excerpt: "A view into residential scarcity, yield, and long-hold positioning.",
      src: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=1200&q=80",
      alt: "Dubai marina skyline at dusk",
    },
    {
      category: "WATCHES",
      date: "28 Feb 2026",
      title: "The Quiet Strength of Iconic References",
      excerpt: "Why certain complications continue to outpace the broader market.",
      src: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury chronograph watch close up",
    },
    {
      category: "COLLECTOR CARS",
      date: "04 Feb 2026",
      title: "Scarcity, Provenance, and the Modern Garage",
      excerpt: "How collectors are thinking about allocation in a maturing asset class.",
      src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
      alt: "Red supercar in studio lighting",
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
