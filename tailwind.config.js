module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      minHeight: {
        '10': '10rem',
      },
      colors: {
        'cust-red': '#cd0a0a',
        'cust-white': '#f1f3de',
      },
      spacing: {
        '70': '800px',
      },
      margin: {
        '13.5': '3.3rem',
      },
      inset: {
        'border': '-16vh',
        'bottom': '-12vh',
        'bottom-2': '-15vh',
        'apostrophe-top': '-10px',
        'apostrophe-left': '-20px'
      },
      scale: {
        'upside-down': '-1',
      },
      borderRadius: {
        'full-rounded': '50%',
      },
    }
  },
  variants: {},
  plugins: []
}
