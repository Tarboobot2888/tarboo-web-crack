/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        primary: "#00FFD1",
        secondary: "#1A1A1A",
        text: "#FFFFFF",
        muted: "#A3A3A3"
      }
    }
  },
  darkMode: 'class',
  plugins: [],
};
