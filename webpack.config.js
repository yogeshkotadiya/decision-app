// Webpack config file
const path = require('path');

module.exports = {
    entry : './src/scripts/main.js',
    output : {
        path : path.join(__dirname, 'public','scripts'),
        filename : 'app.bundle.js'
    },

    module : {
        rules : [{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude : /node_modules/
        }]
    }
};