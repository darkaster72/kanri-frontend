// import tailwindFilter from "tailwindcss-filters";

export default {
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
          light: "#2D71FA",
          DEFAULT: "#1560fb",
          dark: "#0049DE",
        },
        accent: {
          light: "#2D71FA",
          DEFAULT: "#1560fb",
          dark: "#0049DE",
        },
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
