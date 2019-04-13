var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: "./src/entry.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: "style!css!stylus",
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
      {
        test: /\.(svg|eot|woff2|woff|ttf|jpg|png|jpeg)(\?.*)?$/,
        loader: "url?limit=10000&name=assets/[hash].[ext]",
      },
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, "src"),
      __dirname,
    ],
    extensions: ["", ".js", ".jsx", ".styl"],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
}
