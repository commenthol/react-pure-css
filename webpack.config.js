const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production' || ~process.argv.indexOf('-p')
module.exports = {
  cache: true,
  entry: {
    'react-pure-css': `${__dirname}/src/index`
  },
  output: {
    path: `${__dirname}/dist`,
    filename: `[name]${isProd ? '.min' : ''}.js`
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: isProd ? 'none' : 'source-map',
  externals: {
    classnames: 'classnames',
    react: 'react',
    'react-dom': 'react-dom'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          compact: isProd,
          cacheDirectory: true
        }
      }]
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            modules: false,
            sourceMap: isProd
          }
        }]
      })
    }
    ]
  },
  plugins: [
    new ExtractTextPlugin('pure.css'),
    new webpack.BannerPlugin({
      banner: '@commenthol/react-pure-css\nlicense MIT\ncopyright 2018- commenthol',
      entryOnly: true
    })
  ],
  performance: {
    hints: false
  }
}
