import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero1: "url('/assets/hero-1.jpg')",
        hero2: "url('/assets/hero-2.jpg')",
        hero3: "url('/assets/hero-3.jpg')",
        vid: "url('/assets/vid-img.jpg')",
      },

      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slide: "slide 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
