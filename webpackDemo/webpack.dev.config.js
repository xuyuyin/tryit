const path = require('path');

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        publicPath: '/bin', //指定编译后的包的访问位置
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        // contentBase: './build', //指定根目录
        historyApiFallback: true,
        inline: true //实时刷新
    }
};