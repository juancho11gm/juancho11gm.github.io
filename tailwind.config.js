module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f1f5f9',
      },
      fontSize: {
        lg: '54px',
        md: '26px',
      },
      backgroundPosition: {
        mid: '60% 90%',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(rgba(0, 0, 0, .8),rgba(0, 0, 0, .5)), url('../assets/hero.jpg')",
      },
      gridTemplateColumns: {
        project: '6fr 4fr',
      },
    },
  },
  plugins: [],
};
