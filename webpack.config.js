import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  mode: process.env.NODE_ENV ?? "development",
  entry: "./client",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "client.js",
  },
  module: {
    rules: [
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
