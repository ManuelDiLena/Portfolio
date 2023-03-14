/** @type {import('tailwindcss').Config} */
module.exports = {
    //content: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
          'black': '#222831',
          'orange': '#F96D00',
          'gray': '#393E46',
          'title': '#F2F2F2',
          'text': '#A0A0A0'
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
