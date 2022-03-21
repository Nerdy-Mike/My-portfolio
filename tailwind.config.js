module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1540px',
      },
      maxHeight: {
        '4/5': '70vh',
      },
    },
  },
  plugins: [],
};
