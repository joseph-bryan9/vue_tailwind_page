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
      inset: {
        'border': '86vh',
        'bottom': '-102vh',
        'border-2': '102vh',
        'border-3': '300vh',
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
