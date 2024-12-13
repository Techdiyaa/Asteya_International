module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // Add Outfit as a font option
      },
      lineHeight: {
        'custom-3rem': '3rem',
        'custom-4rem': '4rem',
        'custom-4.7rem':'4.7rem'
      }
    },
  },
  plugins: [],
};
