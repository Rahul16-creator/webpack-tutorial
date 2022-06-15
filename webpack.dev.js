const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",  // path for html template css and js link
  },
  devServer:{
      port:3000,
      static:{
          directory:path.resolve(__dirname, "dist")
      },
      devMiddleware:{
          index:'index.html',
          writeToDisk:true
      }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        type: "asset/resource",
        // type: "asset/inline",
      //   type: "asset",
      //   parser: {
      //     dataUrlCondition: {
      //         maxSize: 3 * 1024
      //     }
      // }
      },
      {
        test: /\.css$/,
        use: ['style-loader', "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"], // compile ec5,6,7,8,... it support latest js code syntax
            plugins: ["@babel/plugin-proposal-class-properties"], // to support class properties (with this all browser will support js class code)
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*" /* remove all nested file in dist folder (outpath folder),*/,
        path.join(
          process.cwd(),
          "build/**/*"
        ) /* before run its deleted the files inside this build folder */,
      ],
    }),
    new HtmlWebPackPlugin({
        // filename:"temp.html",
        // title:'test',
        // meta:{
        //     description:"some description"
        // },
        template:"./src/index.html"
    }),
  ],
};
