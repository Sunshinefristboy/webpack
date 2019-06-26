// 1. 引入 webpack.base.js
const base = require('./webpack.base');
// 2. 引入 webpack-merge
const merge = require('webpack-merge');
// 3. 调用 merge 方法，将 base 与你需要的另一份webpack配置合并起来
const config = merge(base, {
  mode: 'production'
});

module.exports = config;
