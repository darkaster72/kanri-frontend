module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      colors: {
        primary: {
          light: "#ffffff",
          dark: "#000000",
        },
        secondary: "#000000",
        accent: "#000000",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("tailwindcss-filters")],
};
