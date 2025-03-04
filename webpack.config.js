const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/popup.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "popup.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-react", { runtime: "automatic" }]],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: { vm: false },
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "static/manifest.json", to: "" },
        { from: "static/icons", to: "icons" }, 
        { from: "static/popup.html", to: "popup.html" },
      ],
    }),
  ],
  devtool: false, // Disable eval-based source maps
};
