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
        hoverColor: "var(--hover-color)",
      },
      height: {
        screen: "32rem",
      },
      gridTemplateColumns: {
        "posts-table-of-content": "1fr 300px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-capsize")],
};
export default config;
