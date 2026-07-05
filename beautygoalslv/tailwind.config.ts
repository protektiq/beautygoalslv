import type { Config } from "tailwindcss";

const config: Config = {
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
        teak: {
          DEFAULT: "#B8874F",
          light: "#CBA06A",
          dark: "#8F6B3E",
        },
        ink: {
          DEFAULT: "#221D16",
          hover: "#34291B",
        },
        moss: "#57614A",
        silver: "#C7C7C7",
        "near-black": "#2A2318",
        "warm-white": "#FBF6EC",
        body: "#221D16",
        muted: "#4A4133",
      },
      ringColor: {
        teak: "#B8874F",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
