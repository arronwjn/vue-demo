var webpack = require('webpack');
var path = require('path');

module.exports={
  devtool: 'source-map',//找到源代码错误
  entry:'./index.js',　　　//指定入口文件
  output:{
    path:__dirname + '/build',　　　　　　//出口文件所在文件夹
    filename:'bundle.js',　　//出口文件
    publicPath: 'build'  //公共路径
  },
  resolve:{                   //解决文件后缀省略
    extensions: [".web.js",".js",".css",".jpg",".png",".json"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,　　　　//编译.js文件
        exclude: /node_modules/,
        loader: "babel-loader"  //用babel-loader包编译
      },
      {
        test: /\.css$/,
        loader: ['style-loader','css-loader']
      },
      {
        test:/\.(jpe?g|png)$/,
        loader: 'file-loader'
      }
    ]
  }
}
