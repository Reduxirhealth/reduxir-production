/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14532d",       // verde oscuro
        secondary: "#d1d5db",     // gris claro
        accent: "#3b82f6",        // azul
      },
    },
  },
  plugins: [],
}

