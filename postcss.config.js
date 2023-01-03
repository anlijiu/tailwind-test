module.exports = () => ({
  plugins: [
    require('postcss-nesting')(),
    require('postcss-nested')(),
    require('postcss-simple-vars')(),
    require('postcss-import')(),
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')()
  ],
});
