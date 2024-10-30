const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { RelativeCiAgentWebpackPlugin } = require("@relative-ci/agent");

module.exports = {
  mode: "development",
  entry: "/src/index.js", // main js
  output: {
    path: path.resolve(__dirname, "dist"), // output folder
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", // for styles
        ],
      },
    ],
  },
  stats: {
    assets: true,
    chunks: true,
    modules: true,
  },
  plugins: [
    new RelativeCiAgentWebpackPlugin({ enabled: true }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // base html
    }),
  ],
};
