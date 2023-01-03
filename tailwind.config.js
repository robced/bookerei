/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robcon: ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        bg: "#EFF5F5",
        secondarybg: "#F3F3F5",
        primary: "#EB6440",
        secondary: "#497174",
        base: "#576162",
        secbase: "#D6E4E5",
      },
    },
  },
  plugins: [],
};
