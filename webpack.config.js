const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: "babel-loader"},
      {test: /\.css/, use: ["style-loader", "css-loader"]}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ],
  devServer: {
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true
  }
}
