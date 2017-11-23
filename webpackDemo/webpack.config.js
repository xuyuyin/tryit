const path = require('path');
module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'bundle.js'
    }
}