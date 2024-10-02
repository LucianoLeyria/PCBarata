/** @type {import('tailwindcss').Config} */
// tailwind.config.js

const flowbite = require("flowbite-react/tailwind");

module.exports = {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), require("flowbite-typography")],
};
