// Gets called when running npm start

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

console.log('Starting server...\n');

new WebpackDevServer(webpack(config), { // Start a server
    publicPath:         config.output.publicPath,
    hot:                true, // With hot reloading
    inline:             false,
    historyApiFallback: true,
    stats:              {colors: true},
    progress:           true,
    quiet:              true
}).listen(8080, 'localhost', function (err, result) { //eslint-disable-line
    if (err) {
        console.log(err);
    } else {
        console.log('Server started');
        console.log('Listening at localhost:8080');
    }
});
