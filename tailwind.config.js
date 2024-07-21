/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#283618",
        secondaryColor: "#432818",
        accentColor: "#fdfcdc",
      },
      fontFamily: {
        Monserrat: ["Montserrat", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
