/** @type {import('tailwindcss').Config} */
// module.exports = {
export default {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "800px",
        md: "1050px",
        lg: "1150px",
        xl: "1200px",
        "2xl": "1275px",
      },
    },
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },

      colors: {
        "gega-red": "#BC1A45",
        "gega-melon": "#FFD369",
        "gega-grey": "#DDDDDD",
        "gega-white": "#F7F7F7",
      },

      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
