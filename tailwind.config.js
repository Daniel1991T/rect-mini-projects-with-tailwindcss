module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screen: {
        'lg': '992px'
      },
      colors: {
        'yellowLight': '#d4e6a5',
        'greenDark': '#476a2e',
        'darkRed': '#476a2e',
        'mainWhite': '#fff',
        'offWhite': '#f7f7f7',
        'mainBg': '#f1f5f8',
        'mainOverlay': 'rgba(35, 10, 36, 0.4)',
        'mainBlack': '#222',
        'mainGrey': '#ececec',
        'darkGrey': '#afafaf',
        'mainRed': '#bd0303'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'cocktail-col': 'repeat(auto-fill, minmax(338.8px, 1fr)',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
}
