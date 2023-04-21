const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  plugins: [
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "content.js",
    path: path.resolve(__dirname, "..", "extension-app", "js"),
  },
};