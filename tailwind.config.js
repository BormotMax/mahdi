module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#e5e5e5',
      'secondary': '#2831a6',
      'input': '#f5f7fe'
     }),
     borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#eaeeff',
     }),
     textColor: theme => ({
       ...theme('colors'),
       'primary': '#1a2852',
       'secondary': '#8994b7',
     }), 
    extend: {
      screens: {
        'general': '1235px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      // outline: {
      //   none: 'none',
      // }
    },
  },
  variants: {
    extend: {
      // outline: ['hover', 'active'],
    },
  },
  plugins: [],
  // corePlugins: {
  //  outline: false,
  // }
}
