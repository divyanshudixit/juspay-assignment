// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   entry: {
//     app: "./src/index.js",
//   },
//   output: {
//     // filename: "app.js",
//     path: path.resolve(__dirname, "public"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: [
//           MiniCssExtractPlugin.loader,
//           "css-loader",
//           {
//             loader: "postcss-loader",
//             options: {
//               postcssOptions: {
//                 plugins: [
//                   [
//                     "postcss-preset-env",
//                     {
//                       // Options
//                     },
//                   ],
//                 ],
//               },
//             },
//           },
//         ],
//       },
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//     ],
//   },
//   plugins: [new MiniCssExtractPlugin()],
// };

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Import the plugin

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js", // Use contenthash for cache busting
    path: path.resolve(__dirname, "public"), // Output directory
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Specify the template file
      filename: "index.html", // Output filename
    }),
  ],
};
