/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f3',
          100: '#ffe8e1',
          200: '#ffd4c8',
          300: '#ffb8a4',
          400: '#ff8f6f',
          500: '#ff6b47',
          600: '#ff4d29',
          700: '#e63c1a',
          800: '#c0311a',
          900: '#9f2b1d',
        },
        brand: 'rgb(241, 93, 48)',
      },
    },
  },
  plugins: [],
  safelist: [
    'active',
    'navbar-scrolled',
  ]
}
