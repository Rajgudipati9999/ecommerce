const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // Main entry file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Output bundle
    assetModuleFilename: "images/[hash][ext][query]",
  },
  mode: "development", // Change to 'production' when deploying
  devServer: {
    static: "./dist",
    hot: true,
    historyApiFallback: true, // Allows React Router to work with refresh
    port: 3000, // Change if needed
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/, // Process JavaScript & JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Handles CSS
      },
      {
        test: /\.(scss|sass)$/i, // Handles SCSS/SASS
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Handles images
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Handles fonts
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allow imports without specifying file extensions
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans the dist folder before each build
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use the existing HTML file
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(), // Extracts CSS into separate files
  ],
};
