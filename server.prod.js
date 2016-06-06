// Gets called when running npm run serve

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.prod');
var ip = require('ip');

console.log('Starting server from build folder...\n');

new WebpackDevServer(webpack(config), { // Start a server
    publicPath:         config.output.publicPath,
    filename:           'bundle.js',
    contentBase:        'dist',
    historyApiFallback: true,
    stats:              {colors: true},
    progress:           true,
    quiet:              true
}).listen(8080, '0.0.0.0', function (err, result) { //eslint-disable-line
    if (err) {
        console.log(err);
    } else {
        console.log('Server started');
        console.log('Your app is available at http://' + ip.address() + ':8080 on any device in your local network!');
    }
});
