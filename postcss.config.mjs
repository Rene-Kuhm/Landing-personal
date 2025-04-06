export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      'postcss-discard-duplicates': {},
      'cssnano': {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          colormin: true,
          minifyFontValues: true,
          reduceIdents: true,
          mergeLonghand: true,
          discardUnused: true,
        }],
      },
    } : {}),
  },
};
