module.exports = {
  purge: [
    // enabled: true,
    // content: ['./src/html/*.html'],
  ],

  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  prefix: '',
  experimental: {
    applyComplexClasses: true
  },
  future: {
    purgeLayersByDefault: true
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
      },
       gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      }
    }
  }
}
