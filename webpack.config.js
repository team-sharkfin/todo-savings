const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const { NODE_ENV } = process.env;

module.exports = {
  mode: NODE_ENV ?? "development",
  entry: "./client",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    proxy: {
      "/": "http://localhost:9000",
    },
  },
};
