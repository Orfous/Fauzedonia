import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        Csm: ["1rem", "1.375rem"],
        Ch2: ["1.42857rem", "1.85714"],
        smsy: ["1.24rem", "1.24rem"],
        ft: ["1.3rem", "1.24rem"],
        cbig: ["40px", "40px"],
      },
      screens: {
        "1.5xl": "1440px",
      },
      aspectRatio: {
        "6/5": "6 / 5",
        "3/2": "3 / 2",
        "3/4": "328 / 460",
      },
      colors: {
        lgray: "#646464",
        lgraybg: "#FFFFFFBF",
        cgray: "#f2eded",
        lpurple: "#a76287",
        beige: "#eee1cd",
        bone: "#FDF7DB",
        lgreen: "#7aa690",
      },
      height: {
        "70": "4.375rem",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 40s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
