/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.jsx',
    './components//*.jsx',
  ],
  theme: {
    extend: {
      width: {
        "6": "1.5rem",
        "10": "2.5rem",
      },
      height: {
        "6": "1.5rem",
        "10": "2.5rem",
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}
