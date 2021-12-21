export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      colors: {
        background: '#ffffff',
        black: '#000000',
        white: '#ffffff',
        primary: {
          light: "#2D71FA",
          DEFAULT: "#1560fb",
          dark: "#0049DE",
        },
        secondary: {
          light: "#2D71FA",
          DEFAULT: "#1560fb",
          dark: "#0049DE",
        },
        error: '#f44336',
        warning: '#ffa726',
        success: '#66bb6a',
        info: '#29b6f6'
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
