// const path = require("path");
// const HTMLWebpackPlugin = require("html-webpack-plugin");
// const TerserWebpackPlugin = require("terser-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//
// module.exports = {
//   context: path.resolve(__dirname, "src"),
//   mode: "production",
//   entry: ["@babel/polyfill", "./index.jsx"],
//   output: {
//     filename: "bundle.[contenthash].js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".jsx", ".js"],
//   },
//   devtool: false,
//   plugins: [
//     new HTMLWebpackPlugin({
//       template: "index.html",
//       minify: {
//         removeComments: true,
//         collapseWhitespace: true,
//       },
//     }),
//     new CopyPlugin({
//       patterns: [
//         {
//           from: path.resolve(__dirname, "src/favicon.ico"),
//           to: path.resolve(__dirname, "dist"),
//         },
//       ],
//     }),
//     new MiniCssExtractPlugin({
//       filename: "style.[contenthash].css",
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(css|scss)$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           "css-loader",
//           "postcss-loader",
//  'resolve-url-loader'
//           "sass-loader",
//         ],
//       },
//       {
//         test: /\.(js|jsx|ts|tsx)$/,
//         exclude: /node_modules/,
//         use: "babel-loader",
//       },
//       {
//         test: /\.(jpe?g|png|svg)$/,
//         use: "file-loader",
//       },
//     ],
//   },
//   // убирает файл лицензии из финальной сборки
//   optimization: {
//     minimizer: [
//       new TerserWebpackPlugin({
//         extractComments: false,
//       }),
//     ],
//   },
//   performance: {
//     hints: false,
//     maxEntrypointSize: 100 * 1024,
//     maxAssetSize: 100 * 1024,
//   },
// };
//
// // plugins: [
// //   new HTMLWebpackPlugin({
// //     template: path.resolve(__dirname, 'src/index.html'),
// //     minify: {
// //       removeComments: true,
// //       collapseWhitespace: true,
// //     },
// //   }),
// //   new CopyPlugin({
// //     patterns: [
// //       {
// //         from: path.resolve(__dirname, 'src/favicon.ico'),
// //         to: path.resolve(__dirname, 'dist'),
// //       },
// //     ],
// //   }),
// // ],
