/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // font-family: "DM Sans", sans-serif;
      'DM': ['DM Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'textcolor': '#262626',
        'textcolor2': '#979797',
      },
    },
  },
  plugins: [],
}