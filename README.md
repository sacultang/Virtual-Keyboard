# 가상 키보드

```jsx
$ npm i -D webpack webpack-cli webpack-dev-server

$ npm i -D terser-webpack-plugin //js 압축 플러그인
```

## webpack.config.js

```jsx
const path = require('path'); // 절대 경로
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/js/index.js', // 진입점
  output: {
    filename: 'bundle.js', // 번들파일 이름
    path: path.resolve(__dirname, './dist'), // 번들될 파일 생성 경로
    clean: true, // 번들하고 나서 clean
  },
  devtool: 'source-map', // 빌드한 파일과 원본파일을 서로 연결시켜주는 기능
  mode: 'development', // js,css,html 난독화 해주냐는 차이
  optimization: {
    minimizer: [new TerserWebpackPlugin()],
  },
};
```

## html 관련 설정 모듈

```jsx
$ npm i -D html-webpack-plugin
```

### webpack.config.js

```jsx
const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  devtool: 'source-map',
  mode: 'development',

	//plugin 추가

	plugins:[
		new HtmlWebpackPlugin({
			title:'keyboard', // 브라우저의 title
			template:'./index.html',
			inject:'body' // 번들할때 js파일을 head에 넣을 건냐 body에 넣을거냐
			favicon: './favicon.ico'
		})
	]

  optimization: {
    minimizer: [new TerserWebpackPlugin()],
  },
};

```

## css 관련 설정 모듈

```jsx
$ npm i -D mini-css-extract-plugin css-loader css-minimizer-webpack-plugin
```

### webpack.config.js

```jsx
const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  devtool: 'source-map',
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'keyboard',
      template: './index.html',
      inject: 'body',
      favicon: './favicon.ico',
    }),

    // plugins 에 추가

    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],

  // module 추가

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
  },
};
```

### index.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>
      <!-- lodash 문법 --> <!-- webpack config에 설정해둔 타이틀이 들어간다-->
      <%= htmlWebpackPlugin.options.title %>
    </title>
  </head>

  <body></body>
</html>
```
