// var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'main_bundle.js'
   },
   mode:'development',
   resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
         test: /\.html$/,
            use: [
               {
                  loader: "html-loader"
               }
            ]
         },
         { 
            test: /\.tsx?$/, 
            loader: "ts-loader" 
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
      ]
   },
   plugins: [
     new HtmlWebPackPlugin({
       template: "./src/index.html",
       filename: "./index.html"
     })
   ]
};