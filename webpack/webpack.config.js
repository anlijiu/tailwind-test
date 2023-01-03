const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    path: Path.join(__dirname, `../dist`),
  },
  mode: 'development',
  entry: {
    'js/index': Path.resolve(__dirname, '../src/js/index.js'),
    'css/index': Path.resolve(__dirname, '../src/css/index.css'),
  },
  plugins: [
    new CopyWebpackPlugin({
		  patterns: [{
				from:  Path.resolve(__dirname, "../src/html"),
				to: './',//放到output文件夹下，也就是当前工作文件夹dist内
				globOptions: {
					dot: true,
					gitignore: true
				}
			}]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.s?css/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },

};
