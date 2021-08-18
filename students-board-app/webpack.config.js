const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('./helper/path');

const isDev = process.env.NODE_ENV === 'development'

const getCssLoaders = (extraLoaders) => {
  const loaders = ['style-loader', 'css-loader'];

  if (extraLoaders) {
    loaders.push(extraLoaders);
  }

  return loaders;
};

const babelOptions = preset => {
  const opts = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime']
  }

  if(preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const jsLoader = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions()
  }]

  if(isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}

const jsxLoader = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions('@babel/preset-react')
  }]

  if(isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['./src/index.jsx'],
  output: {
    path: path.dist,
    filename: '[name].[hash].js',
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  devtool: isDev ? 'source-map' : false,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@assets': path.assets,
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HTMLWebpackPlugin(path.template),
    new CleanWebpackPlugin(),
    // new ESLintPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getCssLoaders(),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            // outputPath: 'assets/',
          },
        }],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        }]
      },
      {
        test: /\.less$/,
        use: getCssLoaders('less-loader'),
      },
      {
        test: /\.s[ac]ss$/,
        use: getCssLoaders('sass-loader'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoader(),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: jsxLoader()
      },
    ],
  },
};
