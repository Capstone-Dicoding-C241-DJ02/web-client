/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: 'Quicksand',
      },
      colors: {
        black: '#424242',
        gold: '#FAC337',
        silver: '#BCBCBC',
        bronze: '#B77539',
        danger: '#ED5837',
        success: '#37ED68',
        'primary-blue': '#2E3F50',
      },
    },
  },
  plugins: [],
};
