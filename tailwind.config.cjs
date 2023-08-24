/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#007664",
        "light-dark": "#475569",
        dark: "#020617",
        light: "#f8fafc",
      },
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        title: ["Arimo", "Helvetica", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
