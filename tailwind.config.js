/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Overpass: ["Overpass", "sans-serif"],
      Nunito: ["Nunito", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        // lg: "70px",
      },
    },
    extend: {},
  },
  plugins: [],
};
