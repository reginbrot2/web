const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      sans: ["Exo", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        orange: {
          light: "#f0774e",
          DEFAULT: "#e0572e",
          dark: "#c0471e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
