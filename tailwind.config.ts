import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT: "#1c2830 ",
          dark:"#0c1c1c"
        },
        secondary:{
          DEFAULT: "#cfd1dc ",
          dark:"#e6ed58"
        },
        accent: {
          DEFAULT:"#f45570",
          dark: "#1982bf"
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
