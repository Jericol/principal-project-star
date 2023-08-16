/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        monserrat: [ 'Montserrat' ],
        roboto: ['Roboto Condensed' ],
        pacifico: [ 'Pacifico' ],
        shadows: [ 'Shadows Into Light' ], 
        righteous: [ 'Righteous' ], 
        advent: [ 'Righteous' ],
        bangers: [ 'Righteous' ]

      }
    },
  },
  darkMode: "class",
  plugins: [
    
  ],
}