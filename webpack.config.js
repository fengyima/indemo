
module.exports={
  entry: "./components/main.js",
  devtool: "source-map",
  debug: true,
  output: {
    path: "./dist",
    filename: "main.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {test: /\.scss$/,   loader: 'style!css!autoprefixer!sass'},
    ]
  }
}
