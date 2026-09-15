import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        muted: "var(--muted)",
        gold: {
          DEFAULT: "var(--gold)",
          soft: "var(--gold-soft)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        section: ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        theme: "400ms",
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(20, 20, 20, 0.18)",
        lift: "0 24px 60px -18px rgba(0, 0, 0, 0.45)",
        gold: "0 0 24px rgba(201, 162, 75, 0.35)",
      },
      backgroundImage: {
        "gold-hairline":
          "linear-gradient(90deg, transparent, var(--gold), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
