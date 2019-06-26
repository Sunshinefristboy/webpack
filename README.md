## 目录结构介绍

- src         需要被webpack打包的东西，都会放在这个文件夹下面（源代码文件夹）
  - index.js  当做项目的入口js文件
- public      放一些静态资源文件，是不需要webpack去处理的


## 运行 webpack

1. 安装 webpack

  npm install --save-dev webpack webpack-cli

2. 运行

  webpack 命令即可

  注意： 我们的 webpack 不是全局的安装

  1. ./node_modules/.bin/webpack
  2. npx webpack  注意 npx 是在 npm 5.x.x 以上才支持的。
  3. 写 npm 脚本 （推荐）

## webpack 的配置文件

1. 默认是 项目目录下的 webpack.config.js
2. 如果运行 webpack ，但是没有 webpack.config.js 这个文件，那么 webpack 会已默认配置来运行。
  entry         src/index.js
  output        dist/main.js
  mode          production
3. 还可以使用 webpack --config <配置文件> 来指定配置文件。

## 模块化规范有哪些，对应的实现有哪些

1. commonjs       -     nodejs      同步加载
2. AMD            -     requirejs
3. CMD            -     seajs
4. ESM            -     es6

  ESM

  1. 引入的方式     import xxx from 'yyy'
  2. 暴露的方式     export default {}

                  export const msg = '张三'
                  import { msg } from 'yyy'

## webpack 中 loader 的作用

> 模块的概念是不是只存在于 js | json 这种文件中。如果需要将 图片、样式、字体等非模块的文件类型让 webpack 支持上。就需要 loader 来做处理

loader - 转换器

#### css 支持

1. 安装 css-loader    style-loader
  npm install --save-dev css-loader style-loader
2. 在 webpack.config.js 中进行配置。
3. 重新打包并看效果

#### scss | sass 支持

1. 安装 css-loader  style-loader  sass-loader  node-sass
  npm install --save-dev css-loader style-loader sass-loader node-sass
2. 在 webpack.config.js 中进行配置。
3. 重新打包并看效果

#### less 支持

1. 安装 css-loader  style-loader  less-loader  less
  npm install --save-dev css-loader style-loader less-loader less
2. 在 webpack.config.js 中进行配置。
3. 重新打包并看效果

#### 图片的支持

1. 安装 url-loader
  npm install --save-dev url-loader
2. 同上。。。。

base64的图片有什么优势？

## plugins

#### html-webpack-plugin

> 主动生成一个index.html到dist目录中。并且会自动引入生成 bundle.js

1. npm install --save-dev html-webpack-plugin

#### copy-webpack-plugin

> 可以帮我们主动在打包的时候，将某个文件或者某个文件夹的内容给复制到 dist 目录下

1. npm install --save-dev copy-webpack-plugin

#### clean-webpack-plugin

> 每次打包之前，先清空 dist 文件夹

https://github.com/fouber/blog/issues/6


## webpack-dev-server

> 开发时，使用 webpack-dev-server
> 上线时，使用 webpack

1. 会自动帮我们启动一个 web 服务，并且能够监听文件的变化。
2. 运行之后，看不到 dist 目录，生成在 内存中，让响应更快速

1. npm install --save-dev webpack-dev-server
2. 写一个 dev 的脚本
  webpack-dev-server


## webpack-merge

> 能将 webpack 的多个配置文件做合并

1. npm install --save-dev webpack-merge
