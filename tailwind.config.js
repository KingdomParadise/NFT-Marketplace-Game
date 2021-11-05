module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '1/7': '14.3%',
       }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor', 
      black: {
        DEFAULT: '#1C1B24',
        dark: '#18171e',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      pink: {
        300: '#C077AE',        
        500: '#b06fa0',
        700: '#BC6FA8',
        800: '#8827A5',
        900: '#7a2395'
      },
      red: {
        DEFAULT: '#F22E2C',
      },
      yellow: {
        DEFAULT: '#DBA207',
        dark: '#FADF49',
      },
      purple: {
        300: '#A67ACB',
        400: '#9059BA',
        500: '#9a71bc',
        700: '#571B87',
      },
      green: {
        DEFAULT: '#2EC25B'
      }
    }
  }
}
