/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '8%': '8%',
      },
      colors: {
        "main-beige": "#E5E2D6",
        "main-black": "#3E3E3C",
        "main-violet": "#C69FB8",
        "main-green": "#9FB378",
        "violet-ash": "#B39CA3",
        "violet-dark": "#715E6F",
        "green-light": "#D3CE9D",
      }
    },
    clipPath: {
      "polygonA": "polygon(100% 100%, 100% 0, 0 0)",
      "polygonB": "polygon(0 0, 100% 0, 25% 100%)",
      "polygonC": "polygon(0 0, 100% 0, 0 100%)",
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

