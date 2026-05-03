/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#a5e7ff",
        "primary-container": "#00d2ff",
        "secondary": "#edb1ff",
        "secondary-container": "#6e208c",
        "background": "#131313",
        "surface": "#131313",
        "surface-container": "#201f1f",
        "surface-container-low": "#1c1b1b",
        "surface-container-high": "#2a2a2a",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#bbc9cf",
        "on-primary": "#003543",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};