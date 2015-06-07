var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',
  target: 'web',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'application.js',
    chunkFilename: '[chunkhash].bundle.js',
  },
  // for those `require('jquery')` etc
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },
  // for those `require('./app.js')` etc
  module: {
    loaders: [
      // for sass
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?outputStyle=compressed")},
      // also handle those css files, like app.css or whatever.css
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
    ],
    noParse: /\.min\.js/
  },
  plugins: [
    // the output file path is relative to `path` config
    new ExtractTextPlugin('../css/application.css')
  ]
}
