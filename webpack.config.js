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
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    port: 3000,
    proxy: {
      "/": "http://localhost:9000",
    },
  },
};
