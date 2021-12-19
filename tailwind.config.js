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
        secondary: {
          light: "#0484D9",
          DEFAULT: "#115BF0",
          dark: "#0412D9",
        },
        accent: {
          light: "#5176FF",
          DEFAULT: "#115BF0",
          dark: "#001C9B",
        },
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("tailwindcss-filters")],
};
