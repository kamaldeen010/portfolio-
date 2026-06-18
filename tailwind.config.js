/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0a0a0a',
          white: '#f5f0e8',
          accent: '#ff4d00',
          grey: '#1a1a1a',
        }
      }
    },
  },
  plugins: [],
}