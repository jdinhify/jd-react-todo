var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(options) {
    var entry, plugins, cssLoaders, devtool;

    // If building for prod
    if (options.prod) {
        entry = [
            path.resolve(__dirname, 'js/index.js')
        ];
        devtool = '';
        cssLoaders = ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader');

        plugins = [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new HtmlWebpackPlugin({
                template: 'index.html',
                minify:
                {
                    removeComments:                true,
                    collapseWhitespace:            true,
                    removeRedundantAttributes:     true,
                    useShortDoctype:               true,
                    removeEmptyAttributes:         true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash:              true,
                    minifyJS:                      true,
                    minifyCSS:                     true,
                    minifyURLS:                    true
                },
                inject: true
            }),
            new ExtractTextPlugin('css/main.css', {allChunks: false}),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            })
        ];
    // if app is in dev
    } else {
        entry = [
            'webpack-dev-server/client?http://localhost:8080', // needed for hot reloading
            'webpack/hot/only-dev-server', // as above
            path.resolve(__dirname, 'js/index.js')
        ];
        devtool = 'inline-source-map';
        cssLoaders = 'style!css-loader?sourceMap!sass-loader?sourceMap';
        plugins = [
            new webpack.HotModuleReplacementPlugin(), // make hot loading work
            new HtmlWebpackPlugin({
                template: 'index.html',
                inject:   true
            })
        ];
    }

    return {
        entry:  entry,
        output: {
            path:     path.resolve(__dirname, 'dist'),
            filename: 'js/bundle.js'
        },
        devtool: devtool,
        module:  {
            loaders: [
                {
                    test:    /\.js$/,
                    loader:  'babel',
                    exclude: path.join(__dirname, '/node_modules/')
                },
                {
                    test:   /\.scss$/,
                    loader: cssLoaders
                },
                {
                    test:   /\.jpe?g$|\.gif$|\.png$/i,
                    loader: 'url-loader?limit=10000'
                }
            ]
        },
        plugins:  plugins,
        target:   'web',
        stats:    {colors: true},
        progress: true
    };
};
