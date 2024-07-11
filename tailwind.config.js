/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#131842',
        secondary: '#ECCEAE',
        button: '#FBF6E2',
        hover: '#FFB200',
      },
      fontFamily: {
        primary: ['VT323', 'mono'],
        heading: ['train one', 'mono'],
        logo: ['bungee outline'],
        // heading : 
      },
    },
  },
  plugins: [],
}

