var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var path = require("path");

// 模板压缩
// 详见：https://github.com/kangax/html-minifier#options-quick-reference

var minifyHTML = {
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  minifyJS: true
}

module.exports = {
  entry: {
    main: "./source-src/js/main.js",
    slider: "./source-src/js/slider.js",
    mobile: ["@babel/polyfill", "./source-src/js/mobile.js"]
  },
  output: {
    path: path.join(__dirname, 'source'),   // WebPack 5 禁止输出到相对路径
    publicPath: "./",
    filename: "[name].[chunkhash:6].js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory'],
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      use: ['html']
    }, {
      test: /\.(scss|sass|css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [autoprefixer]
          }
        }
      }, 'sass-loader']
    }, {
      test: /\.(gif|jpg|png)\??.*$/,
      use: ['url-loader?limit=500&name=img/[name].[ext]']
    }, {
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      use: ["file-loader?name=fonts/[name].[hash:6].[ext]"]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[chunkhash:6].css' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      minify: minifyHTML,
      template: './source-src/script.ejs',
      filename: '../layout/_partial/script.ejs'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      minify: minifyHTML,
      template: './source-src/css.ejs',
      filename: '../layout/_partial/css.ejs'
    })
  ],
  watch: true
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new CleanPlugin('builds')
  ])
}
