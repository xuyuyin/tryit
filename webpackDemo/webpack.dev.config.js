const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractCss = new ExtractTextPlugin('css/[name].[hash].css');

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        publicPath: '/bin', //指定编译后的包的访问位置
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                // 图片格式正则
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        // 配置 url-loader 的可选项
                        options: {
                            // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                            limit: 30000,
                            // 超出限制，创建的文件格式
                            // build/images/[图片名].[hash].[图片格式]
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                // 写法和之前基本一致
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        extractCss,
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],
    devServer: {
        // contentBase: './build', //指定根目录
        historyApiFallback: true,
        inline: true, //实时刷新
        port: 8082
    }
};