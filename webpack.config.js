const path = require('path');
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
