/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        'primary-green': '#1B4332',
        'secondary-green': '#2D6A4F',
        'light-green': '#40916C',
        'accent-green': '#95D5B2',
        'background-light': '#F8FAF9',
      }),
      fontFamily: {
        'amiri': ['Amiri', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}