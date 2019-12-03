# project
<!-- 构建相关的优化 -->
<!-- star -->
 "build-stats": "webpack --env production --json > stats.json"
"build:stats": "webpack --config webpack.prod.js --json>stats.json"
问题： stats.json 不存在.
<!-- star end-->

<!-- 目的是为了分析第三方模块的大小和组件代码的大小 和 速度  -->

<!-- speedMeasureWebpackPlu 构建速度的查看-->
<!-- 红色的注意  黄色中等  绿色不用 -->
<!-- 可以看到每个插件laoder 和  插件执行耗时 -->
const speedMeasureWebpackPlu = require('speed-measure-webpack-plugin')
const smp = new speedMeasureWebpackPlu();
module.exports = smp.wrap({整个代码块 })
<!-- speedMeasureWebpackPl end -->

<!-- webpack-bundle-analyzer 构建体积  -->
const wba = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
 plugins: [
    new wba()
  ]
<!--webpack-bundle-analyzer end-->

<!-- 构建速度加快,目前测试并没有  使用happywebpack 现在作者已经不更新不维护了 -->
  const happypack = require('happypack')
   
  rules:
      {
        test: /\.js$/,
        // loader: 'babel-loader', 注释
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
        use: [
          'happypack/loader'
        ]
      },
  plugins: [
   // 使用happypack 构建速度更慢了
     new happypack({
       loaders: ['babel-loader']
     })
  ]
<!-- end -->

<!-- 使用thread-loader  速度变慢了  -->
      {
        test: /\.js$/,
        // loader: 'babel-loader', 注释
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
        thread-loader 速度更慢了
         use:[
           {
             loader: 'thread-loader',
            options: {
               workers: 3
             }
           },
           'babel-loader',
         ]
      },
<!-- end -->

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
