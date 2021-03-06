module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      fontFamily: {
        serif: ['"Playfair Display"'],
        sans: ["Poppins"],
      },
      backgroundImage: {
        "joglo-pond": "url(/joglo_pond.webp)",
        "daily-pond": "url(/daily_pond.webp)",
      },
    },
  },
  plugins: [],
}
