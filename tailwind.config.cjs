/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

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
        primary: "#FFD523",
        secondary: "#2C2E43",
        dark: "#5C6570",
        accent: "#FF6666",
        light: "#F5C396",
        borderColor: "#DADADA",
        "text-light": "#FFFFFF",
        "text-dark": "#595260",
        "text-heading": "#2C2E43",
        "text-subheading": colors.stone["500"],
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
