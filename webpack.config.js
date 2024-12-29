const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './homepage.html',  // Entry point of your application
  output: {
    filename: 'bundle.js',  // Output bundle
    path: path.resolve(__dirname, 'dist'),  // Output directory
    clean: true,  // Clean dist folder before each build
  },
  mode: 'development',  // Use 'production' for final build
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  // Compile ES6+ to ES5
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  // Load and inject CSS
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './homepage.html',  // HTML template to include the bundle
    }),
  ],
  resolve: {
    fallback: {
      fs: false,  // Ignore 'fs' module
    },
  },
  devServer: {
    static: './dist',  // Serve content from dist folder
    hot: true,  // Enable hot reloading
    port: 3000,  // Port for local server
  },
};
