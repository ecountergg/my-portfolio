module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Bebas Neue"],
      },
      colors: {
        primary: "#7D5A50",
        secondary: "#B4846C",
        tertiary: "#E5B299",
        quaternary: "#FCDEC0",
        white: "#ffffff",
      },
    },
  },
};
