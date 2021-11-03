module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor', 
      black: {
        DEFAULT: '#1C1B24',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      pink: {
        light: '#C077AE',        
        DEFAULT: '#BC6FA8',
        dark: '#8827A5'
      },
      red: {
        DEFAULT: '#F22E2C',
      },
      yellow: {
        DEFAULT: '#DBA207',
        dark: '#FADF49',
      },
      purple: {
        light: '#A67ACB',
        DEFAULT: '#9059BA',
        dark: '#601E95',
        deep: '#642298'
      }
    }
  }
}
