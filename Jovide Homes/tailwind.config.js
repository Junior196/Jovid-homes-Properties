/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#282939",
        primarylight: "#28293900",
        secondary: "#C7AB7C",
        accent: "#FF6B6B",
      },
    },
  },
  plugins: [],
};