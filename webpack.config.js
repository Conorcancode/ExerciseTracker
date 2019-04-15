const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/js/index.js",
  mode: "development",
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
        }
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx"]},
    output: {
        path: path.resolve(__dirname, "ExerciseTracker/static/"),
        publicPath: "/ExerciseTracker/static/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "ExerciseTracker/templates/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};