/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'arcade': ['ArcadeGamer'],
        'garet': ['Garet'],
        'bricksans': ['BrickSans'],
      },
      colors: {

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'nebula': "url('https://res.cloudinary.com/dyi2sla5u/image/upload/v1693321577/assets/graphics/brtrkoyetfcbzceauqgd.gif')"
      }
    },
  },
  plugins: [],
}

