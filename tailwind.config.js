/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "650px",
      md: "960px",
      lg: "1280px",
      xl: "1440px",
    },
    fontSize: {
      sm: '0.875rem',
      base: '1.1rem',
      xl: '1.4rem',
      '2xl': '1.7rem',
      '3xl': '2rem',
    },
    colors: {
      primary: "#0A0D16",
      secondary: "#121626",
      warning: "#FF9500",
      error: "#FF2D55",
      "error-ground": "#5A0314",
      success: "#34C759",
      white: "#F5F5F5",
      black: "#000000",
      gray: "#47536D",
      "gray-dark": "#273444",
      "gray-light": "#F0F0F0",
      blue: "#007AFF",
      purple: "#AF52DE",
      orange: "#FF9500",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui", "sans-serif"]
    },
  },
  plugins: [],
};