
var path = require("path");
var webpack = require("webpack");
 
module.exports = {
  // 你想要打包的模块的数组
  //我们知道，我们刚才所引入的vue或者vuex之类的，我们只是使用它们，并不会改变它们的源码，
  //   它们本身也不会运行，那么我们就可以把这些模块拆分出来提前打包。
  // 那么如何提前打包它们呢？ 我们在这根目录再创建一个webpack配置文件（webpack.dll.config.js），
  // 既然这个文件是webpack配置文件，那么它的格式肯定也和普通的webpack一样：
  entry: {
    vendor: ['vue/dist/vue.esm.js', 'lodash', 'vuex', 'axios', 'vue-router', 'element-ui']
    // vendor: ['vue', 'vue-router']
  },
  output: {
    path: path.join(__dirname, './static/js'), // 打包后文件输出的位置
    filename: '[name].dll.js',
    library: '[name]_library' 
    // vendor.dll.js中暴露出的全局变量名。
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library', 
      context: __dirname
    }),
    // 压缩打包的文件，与该文章主线无关
    new webpack.optimize.UglifyJsPlugin({ 
      compress: {
        warnings: false
      }
    })
  ]
};