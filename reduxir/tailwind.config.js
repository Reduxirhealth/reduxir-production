/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14532d",
        secondary: "#d1d5db",
        accent: "#3b82f6",
      },
    },
  },
  plugins: [],
}
