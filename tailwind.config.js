/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        xxl: { min: "2000px" },
      },
    },
  },
  variants: {
    extend: { borderWidth: ["last", "first"] },
  },

  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
  ],
};
