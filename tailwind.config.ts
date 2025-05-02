/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["bg-header-light", "bg-header-dark", "dark:bg-header-dark"],
  theme: {
    extend: {
      backgroundImage: {
        "white-brick": "url('/images/white-brick.jpg')",
        "black-brick": "url('/images/black-brick.jpg')",
      },
    },
  },
  plugins: [],
};
