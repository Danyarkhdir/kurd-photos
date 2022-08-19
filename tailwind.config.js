/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#8385a6",
          200: "#b3c9df",
          300: "#c5d6e7",
          400: "#a4a7d7",
          500: "#92b2d3",
        },
      },
    },
    screens: {
      xs: "200px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
