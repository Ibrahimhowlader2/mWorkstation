const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        '3xl': '0 0 10px 0 rgb(0 0 0 / 17%)',
      },
      colors: {
        primary:'#756aee',
        gray: '#6c757d',
        grayDark: '#343a40'
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
}
