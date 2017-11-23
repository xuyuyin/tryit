const path = require('path');

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './public',
        histroyApiFallback: true,
        inline: true //实时刷新
    }
};