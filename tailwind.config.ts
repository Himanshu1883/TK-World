import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fixed brand surfaces
        ink: "#0c1018",
        navy: "#111a2b",
        paper: "#f6f4ef",

        // Band-aware tokens — these flip inside `.band-paper`
        foreground: "var(--fg)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        border: "var(--border)",
        gold: {
          DEFAULT: "var(--gold)",
          soft: "var(--gold-soft)",
        },
        red: {
          DEFAULT: "var(--red)",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(1.85rem, 3.6vw, 3.35rem)",
          { lineHeight: "1.1", letterSpacing: "-0.022em" },
        ],
        section: [
          "clamp(1.75rem, 3.4vw, 2.85rem)",
          { lineHeight: "1.18", letterSpacing: "-0.018em" },
        ],
        "page-title": [
          "clamp(1.9rem, 3.8vw, 3.1rem)",
          { lineHeight: "1.14", letterSpacing: "-0.02em" },
        ],
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        lift: "0 28px 70px -30px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "gold-hairline":
          "linear-gradient(90deg, transparent, var(--gold), transparent)",
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
  plugins: [],
};

export default config;
