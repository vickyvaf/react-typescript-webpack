const { merge } = require("webpack-merge");
const path = require("path");
const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
  mode: "production",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "build.js",
  },
});
