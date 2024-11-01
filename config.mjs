import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));


/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    clean: true,
    path:  path.resolve(__dirname, "webpack-dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ["...", ".ts", ".vue"]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'swc-loader',
        options: {
          sourceMap: true,
        },
        type: 'javascript/auto',
      },
    ]
  },
  experiments: {
    css: true,
  },
};

export default config;
