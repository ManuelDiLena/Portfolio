/** @type {import('tailwindcss').Config} */
module.exports = {
    //content: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
          'black': '#222831',
          'gray': '#393E46',
          'orange': '#F96D00',
          'red': '#E14D2A',
          'white': '#FFFFFF',
          'text': '#F2F2F2',
          'shadow': '#000000',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
