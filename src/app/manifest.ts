import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#0c1018",
    theme_color: "#0c1018",
    icons: [
      {
        src: "/icon-tk.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
