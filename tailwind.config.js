/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { colors: {
       backgroundColor: '#000000',
      },
      fontFamily: {
        secular: ['"Secular One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

