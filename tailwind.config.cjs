/** @type {import('tailwindcss').Config} */

const FONT_FAMILY_BASE = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
];

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#D5A843",
        dark: "#5C6570",
        accent: "#FF6666",
        light: "#F5C396",
        "text-light": "#FFFFFF",
        "text-dark": "#000000",
      },
      padding: {
        edge: "2.5%",
      },
      fontFamily: {
        sans: ["Rubik", ...FONT_FAMILY_BASE],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
