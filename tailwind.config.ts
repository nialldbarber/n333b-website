import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontMetrics: {
      sans: {
        capHeight: 2048,
        ascent: 2728,
        descent: -680,
        lineGap: 0,
        unitsPerEm: 2816,
      },
    },
    extend: {
      fontSize: {
        mainHeaderClamp: "clamp(3rem, 10rem, 10vw)",
      },
      colors: {
        black: "var(--black)",
        yellow: "var(--yellow)",
        accents1: "var(--accents-1)",
        accents2: "var(--accents-2)",
        accents3: "var(--accents-3)",
        accents4: "var(--accents-4)",
        accents5: "var(--accents-5)",
        accents6: "var(--accents-6)",
        accents7: "var(--accents-7)",
        accents8: "var(--accents-8)",
        accents9: "var(--accents-9)",
        hoverColor: "var(--hover-color)",
        badgePurpleBg: "var(--badge-purple-bg)",
        badgePurpleFg: "var(--badge-purple-fg)",
        badgeGreenBg: "var(--badge-green-bg)",
        badgeGreenFg: "var(--badge-green-fg)",
        badgeAmberBg: "var(--badge-amber-bg)",
        badgeAmberFg: "var(--badge-amber-fg)",
        badgeBlueBg: "var(--badge-blue-bg)",
        badgeBlueFg: "var(--badge-blue-fg)",
        fadedAccents5: "rgba(136, 136, 136, 0.2)",
      },
      height: {
        screen: "32rem",
        header: "80px",
        minusHeader: "calc(100vh - 81px - 140px)",
        minusHeaderHome: "calc(100vh - 81px - 190px)",
      },
      gridTemplateColumns: {
        "posts-table-of-content": "1fr 285px",
        "about-page": "120px 20px 1fr",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      opacity: {
        "1": "0.01",
      },
      lineHeight: {
        base: "calc(1em + 0.725rem)",
      },
    },
  },
  plugins: [require("tailwindcss-capsize")],
};
export default config;
