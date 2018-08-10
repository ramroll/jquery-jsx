module.exports = {
  entry: __dirname + '/test/test.js',
  output : {
    publicPath : '/',
    filename : 'test.js'
  },
  devServer: {
    port: '3009'
  },
  mode : 'development',
  module: {
    rules: [{
      test: /.js$/,
      exclude : /node_modules/,
      use: {
        loader : 'babel-loader',
        options : {
          presets: ['env'],
          plugins : [
            ['transform-react-jsx', {
              'pragma' : 'jsx'
            }]
          ]
        },

      }
    }],
  },

}