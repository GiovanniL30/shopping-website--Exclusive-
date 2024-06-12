/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary1: '#363738',
        button1: '#00FF66',
        star: '#FFAD33',
        secondary2: '#DB4444',
      },
    },
  },
  plugins: [],
}
