// Webpack config file
const path = require('path');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSS = new ExtractPlugin('styles.css');

  return {
    entry: './src/scripts/index.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'app.bundle.js',
    },

    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: CSS.extract({
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true,
                    }
                }],
          }),
        },
      ],
    },
    plugins: [
        CSS
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
  };
};
