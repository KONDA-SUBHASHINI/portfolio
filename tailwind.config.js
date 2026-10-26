/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        biscuit: "#F6F1E7",
        accent: {
          DEFAULT: "#1E3A5F",
          dark: "#152B47",
          tint: "#EAF0F7",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(30,58,95,0.12), 0 2px 8px rgba(0,0,0,0.05)",
        pop: "0 18px 40px -16px rgba(30,58,95,0.22)",
      },
    },
  },
  plugins: [],
};