const path = require('path');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const src = path.resolve(__dirname, 'src');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  mode: process.env.NODE_ENV === 'production' ?
    'production' : 'development',
  resolve: {
    extensions: ['.jsx', '.tsx', '.ts', '.scss', '.css', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'draft-js-autocomplete',
    libraryTarget: 'umd'
  },
  plugins: [new ESLintPlugin({
    context: src,
    extensions: ['js', 'jsx', 'mjs'],
    formatter: eslintFormatter,
    eslintPath: require.resolve('eslint'),
  })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: src,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true
          },
        }
      }
    ]
  },
  externals: {
    // Don't bundle peer dependencies
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "PropTypes",
      root: "PropTypes"
    },
    "draft-js": {
      commonjs: "draft-js",
      commonjs2: "draft-js",
      amd: "draft-js",
      root: "draft-js"
    }
  }
}