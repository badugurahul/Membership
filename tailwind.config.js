/** @type {import('tailwindcss').Config} */
const withMT = require( "@material-tailwind/react/utils/withMT" );
const { default: daisyui } = require( 'daisyui' );
module.exports = withMT( {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pin": "#AC397A"
      }
    },
  },
  plugins: [require( "daisyui" )],
  daisyui: {
    themes: ["light"],
  },
} );

