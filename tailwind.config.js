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
        'border-2': '186vh',
      },
      scale: {
        'upside-down': '-1',
      },
    }
  },
  variants: {},
  plugins: []
}
