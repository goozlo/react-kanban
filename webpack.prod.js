// const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const TerserWebpackPlugin = require('terser-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// // const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// // const EslintWebpackPlugin = require('eslint-webpack-plugin');
// // const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
//
// const isProd = process.env.NODE_ENV === 'production';
// const isDev = !isProd;
//
// const filename = (ext) => (isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`);
//
// module.exports = {
//   context: path.resolve(__dirname, 'src'),
//   mode: 'development',
//   entry: ['@babel/polyfill', './index.tsx'],
//   output: {
//     filename: filename('js'),
//     path: path.resolve(__dirname, 'dist'),
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.jsx', '.js'],
//   },
//   devtool: isDev ? 'source-map' : false,
//   devServer: {
//     port: 3000,
//     hot: isDev,
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HTMLWebpackPlugin({
//       template: 'index.html',
//       minify: {
//         removeComments: isProd,
//         collapseWhitespace: isProd,
//       },
//     }),
//     new CopyPlugin({
//       patterns: [
//         {
//           from: path.resolve(__dirname, 'src/favicon.ico'),
//           to: path.resolve(__dirname, 'dist'),
//         },
//       ],
//     }),
//     // new MiniCssExtractPlugin({
//     //   filename: filename('css'),
//     // }),
//     // new ForkTsCheckerWebpackPlugin({
//     //   typescript: {
//     //     diagnosticOptions: {
//     //       semantic: true,
//     //       syntactic: true,
//     //     },
//     //     mode: 'write-references',
//     //   },
//     // }),
//     // new EslintWebpackPlugin(),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(css|scss)$/,
// use: [
//     MiniCssExtractPlugin.loader,
//     {loader: 'css-loader', options: {sourceMap: false, importLoaders: 1, modules: {
//                 localIdentName: '[name]__[local]--[hash:base64:5]',
//             }}},
//     {loader: 'postcss-loader', options: {sourceMap: false}},
//     {loader: 'sass-loader', options: {sourceMap: false}},
// ],
//       },
//       {
//         test: /\.(js|jsx|ts|tsx)$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//       {
//         test: /\.(jpe?g|png|svg)$/,
//         use: 'file-loader',
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
//     // todo: починить перфоманс
//     hints: false,
//     maxEntrypointSize: 100 * 1024,
//     maxAssetSize: 100 * 1024,
//   },
// };
