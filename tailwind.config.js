/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Roboto',
      accent: '',
    },
    extend: {
      colors: {
        primary: '#FFF4DF',
        primaryVariant: '#FFFFFF',
        secondary: '#333333',
        accentp: '#B77CCC',
        accenty: '#FFDF5A',
        text: '#8C8C8C',
        transparent: 'rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

