// const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');
//https://ms.poly-commercial.com 线上测试 test
//https://ts-dev.heading123.cn 内部测试 test
module.exports = {
  // outputDir: 'guomao',
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: 8011,
    proxy: {
      "/ts-server": {
        target: process.env.VUE_APP_BASEURL, // target host
        ws: true, // proxy websockets 
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/ts-server": "" // rewrite path
        }
      },
    }
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         autoprefixer(),
  //         pxtorem({
  //           rootValue: 37.5,
  //           propList: ['*']
  //         })
  //       ]
  //     }
  //   }
  // }
};