module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    host: "http://132.72.65.211/"
  }
  // publicPath: process.env.NODE_ENV === "production" ? "/LAB12/" : "/"
};
