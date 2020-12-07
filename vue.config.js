module.exports = {
  // publicPath: './',
  // outputDir: 'docs/',
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.csv$/,
          loader: 'csv-loader'
        }
      ]
    }
  }
}