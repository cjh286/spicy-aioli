module.exports = {
  devtool: "source-map",
  entry: "./src/app.js",
  mode: "development",
  output: {
    filename: "./dist/app-bundle.js",
  },
  resolve: {
    extensions: [".Webpack.js", ".web.js", ".ts", ".js", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: "/.(js|jsx)$/",
        exclude: "/node_modules/",
      },
    ],
  },
};
