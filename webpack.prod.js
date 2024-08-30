const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

process.env["NODE_ENV"] = "production";

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'build'), // Ensures files are output to the "build" directory
    filename: '[name].[contenthash].js', // Generates files with content-based hashing for cache busting
  },
  optimization: {
    minimize: true,
    minimizer: [
      `...`, // Extends existing minimizers like `terser-webpack-plugin`
      new CssMinimizerPlugin(),
    ],
  },
});
