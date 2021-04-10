const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const { EXPRESS_BASE_URL, NODE_ENV } = process.env;

console.log(process.env.EXPRESS_BASE_URL);

module.exports = {
  mode: NODE_ENV ?? "development",
  output: {
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  plugins: [
    // keep this in sync with the client service in docker-compose.yml
    new webpack.DefinePlugin({
      "process.env.EXPRESS_BASE_URL": JSON.stringify(EXPRESS_BASE_URL),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};
