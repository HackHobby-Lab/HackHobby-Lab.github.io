/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          700: '#286f6c',
          500: '#40d30c',
        },
        gray: {
          100: '#f8f7f1',
          900: '#0d2f3f',
          500: '#0D2F3F',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        michroma: ['Michroma', 'sans-serif'],
      },
      spacing: {
        '256': '256px',
      },
    },
  },
  plugins: [],
}
